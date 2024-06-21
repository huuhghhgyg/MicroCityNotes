import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import { seoPlugin } from '@vuepress/plugin-seo'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { commentPlugin } from '@vuepress/plugin-comment'

import { getDirname, path } from "@vuepress/utils";
const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  bundler: viteBundler(),
  base: "/MicroCityNotes/",
  // head需要到locals中分别配置
  locales: {
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "zh-CN",
      title: "MicroCity笔记",
      description: "记录MicroCity的学习过程并提供快捷的参考",
      head: [
        ["meta", { name: "keywords", content: "MicroCity,笔记,文档" }],
        ["link", { rel: "manifest", href: "/MicroCityNotes/manifest.webmanifest" }],
        ["link", { rel: "icon", href: "/MicroCityNotes/images/icon_microcity.png" }],
      ],
    },
    "/en/": {
      lang: "en-US",
      title: "MicroCity Notes",
      description: "Record the learning process of MicroCity and provide quick reference",
      head: [
        ["meta", { name: "keywords", content: "MicroCity,Notes,Docs" }],
        ["link", { rel: "manifest", href: "/MicroCityNotes/manifest.webmanifest" }],
      ],
    },
  },
  shouldPrefetch: false, //pwa插件要求

  theme: defaultTheme({
    logo: "/images/icon_microcitynotes.png",

    // 语言切换配置
    locales: {
      "/": {
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",
        selectLanguageAriaLabel: "选择语言",

        // 顶栏配置
        navbar: [
          {
            text: "笔记",
            link: "/notes/",
          },
          {
            text: "文档",
            children: [
              {
                text: "Microcity Desktop 文档",
                link: "/docs/desktop/index.html",
              },
              {
                text: "Microcity Web 文档",
                link: "/docs/web/index.html",
              },
              {
                text: "其它",
                children: [
                  {
                    text: "仿真框架（港口）说明文档",
                    link: "https://github.com/huuhghhgyg/Container-Terminal-Simulation/tree/main/docs",
                  },
                  {
                    text: "模型/库资源",
                    link: "https://www.zhhuu.top/ModelResource"
                  }
                ]
              },
            ],
          },
          {
            text: "MicroCity链接",
            children: [
              {
                text: "GitHub",
                children: [
                  { text: "MicroCity Desktop 仓库", link: "https://github.com/microcity/Desktop" },
                  { text: "MicroCity Web 仓库", link: "https://github.com/microcity/microcity.github.io" },
                  { text: "MicroCity Web 在线环境", link: "https://microcity.github.io/" },
                ],
              },
              {
                text: "Gitee",
                children: [
                  { text: "MicroCity Desktop 仓库", link: "https://gitee.com/microcity/desktop" },
                  { text: "MicroCity Web 仓库", link: "https://gitee.com/microcity/microcity" },
                ],
              },
              {
                text: "zhhuu.top (自建修改)",
                children: [
                  { text: "MicroCity Web (fork) 仓库", link: "https://github.com/huuhghhgyg/microcityweb" },
                  { text: "MicroCity Web (fork) 在线环境", link: "https://mcw.zhhuu.top/" },
                ],
              },
            ],
          },
        ],

        // 侧边栏配置
        sidebar: {
          "/": [
            {
              text: "MicroCity文档", collapsible: true, children: [
                { text: "桌面版文档", link: "/docs/desktop/readme" },
                { text: "Web版文档", link: "/docs/web/readme" },
              ]
            },
            { text: "笔记", link: "/notes/", collapsible: true },
          ],
          "/docs/desktop/": [
            {
              text: "MicroCity Desktop文档",
              children: [
                { text: "目录", link: "/docs/desktop/", children: [] },
                {
                  text: "1.MicroCity介绍",
                  collapsible: true,
                  children: ["/docs/desktop/1.1_what_microcity_can_do"],
                },
                {
                  text: "2.开始使用MicroCity",
                  collapsible: true,
                  children: ["/docs/desktop/2.1_showing_a_world_map", "/docs/desktop/2.2_searching_for_countries"],
                },
                {
                  text: "3.用户界面",
                  collapsible: true,
                  children: ["/docs/desktop/3.1_ui_overview", "/docs/desktop/3.2_vector_shapes", "/docs/desktop/3.3_raster_grids", "/docs/desktop/3.4_3d_scenes", "/docs/desktop/3.5_tables", "/docs/desktop/3.6_maps_and_layers", "/docs/desktop/3.7_modules"],
                },
                {
                  text: "4.脚本编写",
                  collapsible: true,
                  children: ["/docs/desktop/4.1_si_overview", "/docs/desktop/4.2_ui_control", "/docs/desktop/4.3_shapes_and_tables", "/docs/desktop/4.4_grids", "/docs/desktop/4.5_3d_scenes", "/docs/desktop/4.6_networks", "/docs/desktop/4.7_des_simulations", "/docs/desktop/4.8_mixed_integer_programming"],
                },
              ],
            },
          ],
          "/docs/web/": [
            {
              text: "MicroCity Web文档",
              children: [
                { text: "目录", link: "/docs/web/", children: [] },
                { text: "1.简介", collapsible: true, children: ["/docs/web/1.1_what_microcity_web_can_do"] },
                { text: "2.入门指南", collapsible: true, children: ["/docs/web/2.1_rolling_a_cube", "/docs/web/2.2_searching_for_countries"] },
                { text: "3.用户界面", collapsible: true, children: ["/docs/web/3.1_ui_overview", "/docs/web/3.2_editing_scripts", "/docs/web/3.3_running_scripts", "/docs/web/3.4_navigating_scenes"] },
                { text: "4.脚本接口", collapsible: true, children: ["/docs/web/4.1_si_overview", "/docs/web/4.2_operation_system", "/docs/web/4.3_scene_and_object", "/docs/web/4.4_discrete_event_simulation", "/docs/web/4.5_mixed_integer_programming"] },
                {
                  text: "附录", collapsible: true, children: [
                    { text: "Lua参考手册", link: "https://www.lua.org/manual/5.4/contents.html" },
                    { text: "从空间数据到物流模型", link: "https://microcity.gitee.io/book" },
                  ]
                }
              ],
            }
          ],
          "/notes/": [
            {
              text: "目录",
              link: "/notes/",
              children: [], // 侧边栏不显示子目录
            },
            {
              text: "通用知识",
              collapsible: true,
              children: ["/notes/lua", "/notes/versions", "/notes/timelapse", "/notes/oop", "/notes/tools"],
            },
            {
              text: "MicroCity",
              collapsible: true,
              children: ["/notes/visualization", "/notes/network", "/notes/lp"],
            },
            {
              text: "MicroCityWeb",
              collapsible: true,
              children: ["/notes/web-ui", "/notes/3d-scene", "/notes/3d-objects", "/notes/event-scheduling", "/notes/mip", "/notes/debug"],
            },
            {
              text: "思路",
              collapsible: true,
              children: ["/notes/warehouse-simulation", "/notes/plots", "/notes/cy-simulation"],
            },
            {
              text: "Gallery",
              collapsible: true,
              children: ["/notes/gallery/build-a-clock"],
            }
          ],
        },
      },
      "/en/": {
        selectLanguageName: "English",

        // Top bar configuration
        navbar: [
          {
            text: "Notes",
            link: "/en/notes/",
          },
          {
            text: "Documentation",
            children: [
              {
                text: "MicroCity Web",
                link: "https://github.com/microcity/microcity.github.io/tree/master/doc"
              },
              {
                text: "MicroCity Desktop",
                link: "/en/docs/",
                children: [
                  { text: "1. MicroCity Introduction", link: "/en/docs/1.1_what_microcity_can_do" },
                  { text: "2. Getting Started with MicroCity", link: "/en/docs/2.1_showing_a_world_map" },
                  { text: "3. User Interface", link: "/en/docs/3.1_ui_overview" },
                  { text: "4. Script Writing", link: "/en/docs/4.1_si_overview" },
                ],
              },
            ],
          },
          {
            text: "MicroCity Links",
            children: [
              {
                text: "GitHub",
                children: [
                  { text: "MicroCity Desktop Repository", link: "https://github.com/microcity/Desktop" },
                  { text: "MicroCity Web Repository", link: "https://github.com/microcity/microcity.github.io" },
                  { text: "MicroCity Web Online Environment", link: "https://microcity.github.io/" },
                ],
              },
            ],
          },
        ],

        // Sidebar configuration
        sidebar: {
          "/": [
            { text: "MicroCity Documentation", link: "/en/docs/", collapsible: true },
            { text: "Notes", link: "/en/notes/", collapsible: true },
          ],
          "/en/docs/": [
            {
              text: "MicroCity Documentation",
              children: [
                { text: "Table of Contents", link: "/en/docs/", children: [] },
                {
                  text: "1. MicroCity Introduction",
                  collapsible: true,
                  children: ["/en/docs/1.1_what_microcity_can_do"],
                },
                {
                  text: "2. Getting Started with MicroCity",
                  collapsible: true,
                  children: ["/en/docs/2.1_showing_a_world_map", "/en/docs/2.2_searching_for_countries"],
                },
                {
                  text: "3. User Interface",
                  collapsible: true,
                  children: ["/en/docs/3.1_ui_overview", "/en/docs/3.2_vector_shapes", "/en/docs/3.3_raster_grids", "/en/docs/3.4_3d_scenes", "/en/docs/3.5_tables", "/en/docs/3.6_maps_and_layers", "/en/docs/3.7_modules"],
                },
                {
                  text: "4. Script Writing",
                  collapsible: true,
                  children: ["/en/docs/4.1_si_overview", "/en/docs/4.2_ui_control", "/en/docs/4.3_shapes_and_tables", "/en/docs/4.4_grids", "/en/docs/4.5_3d_scenes", "/en/docs/4.6_networks", "/en/docs/4.7_des_simulations", "/en/docs/4.8_mixed_integer_programming"],
                },
              ],
            },
          ],
          "/en/notes/": [
            {
              text: "Table of Contents",
              link: "/en/notes/",
              children: [], // Subdirectories are not displayed in the sidebar
            },
            {
              text: "General Knowledge",
              collapsible: true,
              children: ["/en/notes/lua", "/en/notes/versions", "/en/notes/timelapse", "/en/notes/oop", "/en/notes/tools"],
            },
            {
              text: "MicroCity",
              collapsible: true,
              children: ["/en/notes/visualization", "/en/notes/network", "/en/notes/lp"],
            },
            {
              text: "MicroCityWeb",
              collapsible: true,
              children: ["/en/notes/web-ui", "/en/notes/3d-scene", "/en/notes/3d-objects", "/en/notes/event-scheduling", "/en/notes/mip", "/en/notes/debug"],
            },
            {
              text: "Concepts",
              collapsible: true,
              children: ["/en/notes/warehouse-simulation", "/en/notes/plots", "/en/notes/cy-simulation"],
            },
          ],
        },
      },
    },
  }),

  plugins: [
    // 搜索插件
    searchProPlugin({
      indexContent: true, // 索引文章的全部内容
      locales: {
        "/": {
          placeholder: "搜索",
        },
        "/en/": {
          placeholder: "Search",
        },
      },
    }),

    //SEO优化相关
    //网站地图
    sitemapPlugin({
      hostname: "https://huuhghhgyg.github.io",
      // 排除无实际内容的页面
      excludeUrls: ["/404.html", "/docs/imgs/"],
    }),
    seoPlugin({
      hostname: "https://huuhghhgyg.github.io",
    }),
    //markdown增强
    mdEnhancePlugin(
      {
        codetabs: true, // 启用代码块分组
        katex: true, // 使用 KaTeX 启用 TeX 支持
        align: true, // 自定义对齐
        imgSize: true, // 自定义图片大小
        alert: true, // 启用 GFM 警告
        hint: true, // 启用提示容器
        flowchart: true, // 启用流程图
        mermaid: true, // 启用 Mermaid
      },
      false
    ),
    //PWA支持
    pwaPlugin({
      // 缓存站点图片（站点图片不大）
      cachePic: true,
      // 网站体积不大，并使文档完全离线可用
      cacheHTML: true,
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    //评论插件
    commentPlugin({
      provider: "Giscus",
      comment: true,
      repo: "huuhghhgyg/MicroCityNotes",
      repoId: "R_kgDOIf-Z0Q",
      category: "讨论",
      categoryId: "DIC_kwDOIf-Z0c4CTl1f",
    }),
  ],
});
