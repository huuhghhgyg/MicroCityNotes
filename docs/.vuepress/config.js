import { defaultTheme } from "@vuepress/theme-default";
import fullTextSearchPlugin from "vuepress-plugin-full-text-search2";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import { seoPlugin } from "vuepress-plugin-seo2";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { pwaPlugin } from "vuepress-plugin-pwa2";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { commentPlugin } from "vuepress-plugin-comment2";

import { getDirname, path } from "@vuepress/utils";
const __dirname = getDirname(import.meta.url);

export default {
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
                text: "Desktop版文档",
                link: "/docs/",
                children: [
                  { text: "1.MicroCity介绍", link: "/docs/1.1_what_microcity_can_do" },
                  { text: "2.开始使用MicroCity", link: "/docs/2.1_showing_a_world_map" },
                  { text: "3.用户界面", link: "/docs/3.1_ui_overview" },
                  { text: "4.脚本编写", link: "/docs/4.1_si_overview" },
                ],
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
                  { text: "MicroCity Web 在线环境", link: "https://microcity.gitee.io/" },
                ],
              },
            ],
          },
        ],

        // 侧边栏配置
        sidebar: {
          "/": [
            { text: "MicroCity文档", link: "/docs/", collapsible: true },
            { text: "笔记", link: "/notes/", collapsible: true },
          ],
          "/docs/": [
            {
              text: "MicroCity文档",
              children: [
                { text: "目录", link: "/docs/", children: [] },
                {
                  text: "1.MicroCity介绍",
                  collapsible: true,
                  children: ["/docs/1.1_what_microcity_can_do"],
                },
                {
                  text: "2.开始使用MicroCity",
                  collapsible: true,
                  children: ["/docs/2.1_showing_a_world_map", "/docs/2.2_searching_for_countries"],
                },
                {
                  text: "3.用户界面",
                  collapsible: true,
                  children: ["/docs/3.1_ui_overview", "/docs/3.2_vector_shapes", "/docs/3.3_raster_grids", "/docs/3.4_3d_scenes", "/docs/3.5_tables", "/docs/3.6_maps_and_layers", "/docs/3.7_modules"],
                },
                {
                  text: "4.脚本编写",
                  collapsible: true,
                  children: ["/docs/4.1_si_overview", "/docs/4.2_ui_control", "/docs/4.3_shapes_and_tables", "/docs/4.4_grids", "/docs/4.5_3d_scenes", "/docs/4.6_networks", "/docs/4.7_des_simulations", "/docs/4.8_mixed_integer_programming"],
                },
              ],
            },
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
                text: "Desktop Documentation",
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
              {
                text: "Gitee",
                children: [
                  { text: "MicroCity Desktop Repository", link: "https://gitee.com/microcity/desktop" },
                  { text: "MicroCity Web Repository", link: "https://gitee.com/microcity/microcity" },
                  { text: "MicroCity Web Online Environment", link: "https://microcity.gitee.io/" },
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
    fullTextSearchPlugin({
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
        // 启用代码块分组
        codetabs: true,
        // 使用 KaTeX 启用 TeX 支持
        katex: true,
        // 自定义对齐
        align: true,
        // 自定义图片大小
        imgSize: true,
        // 启用容器
        container: true,
        // 启用流程图
        flowchart: true,
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
};
