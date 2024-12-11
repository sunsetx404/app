#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

NEXUS_HOME="$HOME/.nexus"
PROVER_ID_FILE="$NEXUS_HOME/prover-id"
SESSION_NAME="nexus-prover"
PROGRAM_DIR="$NEXUS_HOME/src/generated"
ARCH=$(uname -m)
OS=$(uname -s)
REPO_BASE="https://github.com/nexus-xyz/network-api/raw/refs/tags/0.4.2/clients/cli"

check_openssl_version() {
    if [ "$OS" = "Linux" ]; then
        if ! command -v openssl &> /dev/null; then
            echo -e "${RED}未安装 OpenSSL${NC}"
            exit 1
        fi

        local version=$(openssl version | cut -d' ' -f2)
        local major_version=$(echo $version | cut -d'.' -f1)

        if [ "$major_version" -lt "3" ]; then
            if command -v apt &> /dev/null; then
                echo -e "${YELLOW}当前 OpenSSL 版本过低，正在升级...${NC}"
                sudo apt update
                sudo apt install -y openssl || { echo -e "${RED}OpenSSL 升级失败，请手动升级至 3.0 或更高版本${NC}"; exit 1; }
            elif command -v yum &> /dev/null; then
                echo -e "${YELLOW}当前 OpenSSL 版本过低，正在升级...${NC}"
                sudo yum update -y openssl || { echo -e "${RED}OpenSSL 升级失败，请手动升级至 3.0 或更高版本${NC}"; exit 1; }
            else
                echo -e "${RED}请手动升级 OpenSSL 至 3.0 或更高版本${NC}"
                exit 1
            fi
        fi
        echo -e "${GREEN}OpenSSL 版本检查通过${NC}"
    fi
}

setup_directories() {
    mkdir -p "$PROGRAM_DIR"
    ln -sf "$PROGRAM_DIR" "$NEXUS_HOME/src/generated"
}

check_dependencies() {
    check_openssl_version

    if ! command -v tmux &> /dev/null; then
        echo -e "${YELLOW}tmux 未安装, 正在安装...${NC}"
        if [ "$OS" = "Darwin" ]; then
            if ! command -v brew &> /dev/null; then
                echo -e "${RED}请先安装 Homebrew: https://brew.sh${NC}"
                exit 1
            fi
            brew install tmux
        elif [ "$OS" = "Linux" ]; then
            if command -v apt &> /dev/null; then
                sudo apt update && sudo apt install -y tmux
            elif command -v yum &> /dev/null; then
                sudo yum install -y tmux
            else
                echo -e "${RED}未能识别的包管理器，请手动安装 tmux${NC}"
                exit 1
            fi
        fi
    fi
}

download_program_files() {
    local files="cancer-diagnostic fast-fib"

    for file in $files; do
        local target_path="$PROGRAM_DIR/$file"
        if [ ! -f "$target_path" ]; then
            echo -e "${YELLOW}下载 $file...${NC}"
            curl -L "$REPO_BASE/src/generated/$file" -o "$target_path"
            if [ $? -eq 0 ]; then
                echo -e "${GREEN}$file 下载完成${NC}"
                chmod +x "$target_path"
            else
                echo -e "${RED}$file 下载失败${NC}"
            fi
        fi
    done
}

download_prover() {
    local prover_path="$NEXUS_HOME/prover"
    if [ ! -f "$prover_path" ]; then
        if [ "$OS" = "Darwin" ]; then
            if [ "$ARCH" = "x86_64" ]; then
                echo -e "${YELLOW}下载 macOS Intel 架构 Prover...${NC}"
                curl -L "https://github.com/qzz0518/nexus-run/releases/download/v0.4.2/prover-macos-amd64" -o "$prover_path"
            elif [ "$ARCH" = "arm64" ]; then
                echo -e "${YELLOW}下载 macOS ARM64 架构 Prover...${NC}"
                curl -L "https://github.com/qzz0518/nexus-run/releases/download/v0.4.2/prover-arm64" -o "$prover_path"
            else
                echo -e "${RED}不支持的 macOS 架构: $ARCH${NC}"
                exit 1
            fi
        elif [ "$OS" = "Linux" ]; then
            if [ "$ARCH" = "x86_64" ]; then
                echo -e "${YELLOW}下载 Linux AMD64 架构 Prover...${NC}"
                curl -L "https://github.com/qzz0518/nexus-run/releases/download/v0.4.2/prover-amd64" -o "$prover_path"
            else
                echo -e "${RED}不支持的 Linux 架构: $ARCH${NC}"
                exit 1
            fi
        else
            echo -e "${RED}不支持的操作系统: $OS${NC}"
            exit 1
        fi
        chmod +x "$prover_path"
        echo -e "${GREEN}Prover 下载完成${NC}"
    fi
}

download_files() {
    download_prover
    download_program_files
}

start_prover() {
    cd "$NEXUS_HOME" || exit

    if [ ! -f "$PROVER_ID_FILE" ]; then
        local prover_id="JukKQry6xzPDjP4kNZLlIM1uPdk1"  # 默认生成 Prover ID
        echo "$prover_id" > "$PROVER_ID_FILE"
        echo -e "${GREEN}已生成并保存新的 Prover ID: $prover_id${NC}"
    fi

    if tmux has-session -t "$SESSION_NAME" 2>/dev/null; then
        echo -e "${YELLOW}Prover 已在运行中${NC}"
        return
    fi

    tmux new-session -d -s "$SESSION_NAME" "cd '$NEXUS_HOME' && ./prover beta.orchestrator.nexus.xyz"
    echo -e "${GREEN}Prover 已启动${NC}"
}

# 主执行逻辑
setup_directories
check_dependencies
download_files
start_prover

echo -e "${GREEN}Nexus 安装和启动完成！${NC}"
