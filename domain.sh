#!/bin/bash
# domain.sh 使用自定义域名需要修改的内容

# 定义域名
domain="mcn.zhhuu.top"

# 删除Base directory的设置
sed -i '/base:/d' docs/.vuepress/config.js
#使用定义的域名替换
sed -i "s/huuhghhgyg.github.io/${domain}/g" docs/.vuepress/config.js
sed -i "s/huuhghhgyg.github.io/${domain}/g" docs/.vuepress/public/robots.txt