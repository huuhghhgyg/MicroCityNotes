#!/bin/bash
# domain.sh 使用自定义域名需要修改的内容
# Netlify 部署运行了这个脚本

# 定义域名
fixed_domain="huuhghhgyg.github.io"
domain="mcn.zhhuu.top"

# 删除Base directory的设置
sed -i '/base:/d' docs/.vuepress/config.js
# 删除manifest的前缀
sed -i 's/"\/MicroCityNotes/"/g' docs/.vuepress/config.js
# 使用定义的域名替换
sed -i "s/${fixed_domain}/${domain}/g" docs/.vuepress/config.js
sed -i "s/${fixed_domain}\/MicroCityNotes/${domain}/g" docs/.vuepress/public/robots.txt