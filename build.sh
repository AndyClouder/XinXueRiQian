#!/bin/bash
echo "Building 心学日签 static site..."
# 静态网站无需构建，只是复制文件到输出目录
mkdir -p dist
cp *.html *.css *.js dist/
echo "Build completed!"