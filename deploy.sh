#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run build

# 进入生成的文件夹
cd ./docs/dist

# 如果是发布到自定义域名
# echo 'mjmajiong.site.cn' > CNAME

git init
git add -A
git commit -m 'deploy update 🎉'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

git remote set-url origin https://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@github.com/MJmajiong/vuepress-web-app.git

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push 
cd -
