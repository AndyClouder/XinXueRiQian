#!/bin/bash

# 阳明心学网站GitHub仓库设置脚本

echo "=== 阳明心学网站 GitHub 仓库设置 ==="
echo ""

# 检查git是否已初始化
if [ ! -d ".git" ]; then
    echo "错误：Git仓库未初始化"
    exit 1
fi

echo "1. 请在GitHub上创建新仓库："
echo "   - 访问：https://github.com/new"
echo "   - 仓库名：wangyangming"
echo "   - 描述：阳明心学抽签网站"
echo "   - 设置为Public或Private"
echo "   - 不要勾选任何初始化选项"
echo ""

read -p "2. 创建完成后按Enter继续..."

# 尝试推送
echo "正在推送到GitHub..."
git push -u origin master

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 推送成功！"
    echo "您的网站现在可以在以下地址访问："
    echo "https://github.com/AndyClouder/wangyangming"
    echo ""
    echo "🌐 要启用GitHub Pages，请："
    echo "1. 进入仓库 Settings"
    echo "2. 找到 Pages 部分"
    echo "3. Source 选择 'Deploy from a branch'"
    echo "4. Branch 选择 'master'"
    echo "5. 文件夹选择 '/ (root)'"
    echo "6. 点击 Save"
    echo ""
    echo "完成后您的网站将通过 GitHub Pages 在线访问！"
else
    echo ""
    echo "❌ 推送失败，请检查："
    echo "- 仓库是否已创建"
    echo "- SSH密钥是否已添加到GitHub"
    echo "- 网络连接是否正常"
fi