// import { searchPlugin } from "@vuepress/plugin-search";
import { defaultTheme } from "@vuepress/theme-default";
import fullTextSearchPlugin from "vuepress-plugin-full-text-search2";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import { seoPlugin } from "vuepress-plugin-seo2";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { pwaPlugin } from "vuepress-plugin-pwa2";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';

import { getDirname, path } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)

export default {
  base: "/MicroCityNotes/",
  title: "MicroCity笔记",
  description: "记录MicroCity的学习过程并提供快捷的参考",
  head: [
    ["meta", { name: "keywords", content: "MicroCity,笔记,文档" }],
    ["link", { rel: "icon", href: "/MicroCityNotes/images/icon_microcity.png" }],
  ],
  locales: {
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "zh-CN",
    },
  },
  shouldPrefetch: false, //pwa插件要求

  theme: defaultTheme({
    logo: "/images/icon_microcitynotes.png",

    // 顶栏配置
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "笔记",
        link: "/notes/",
      },
      {
        text: "MicroCity文档",
        children: [
          { text: "文档目录", link: "/docs/" },
          { text: "1.MicroCity介绍", link: "/docs/1.1_what_microcity_can_do" },
          { text: "2.开始使用MicroCity", link: "/docs/2.1_showing_a_world_map" },
          { text: "3.用户界面", link: "/docs/3.1_ui_overview" },
          { text: "4.脚本编写", link: "/docs/4.1_si_overview" },
        ],
      },
      {
        text: "MicroCity项目地址",
        link: "https://microcity.github.io/",
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
          text: "笔记",
          children: [
            {
              text: "目录",
              link: "/notes/",
              children: [],
            },
            "/notes/lua",
            "/notes/visualization",
            "/notes/network",
            "/notes/lp",
          ],
        },
      ],
    },
  }),

  plugins: [
    // 搜索插件
    fullTextSearchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
    //SEO优化相关
    //网站地图
    sitemapPlugin({
      hostname: "https://huuhghhgyg.github.io",
      // 排除无实际内容的页面
      exclude: ["/404.html", "/docs/imgs/"],
    }),
    seoPlugin({
      hostname: "https://huuhghhgyg.github.io",
    }),
    //markdown增强
    mdEnhancePlugin({
      // 启用代码块分组
      codetabs: true,
      // 使用 KaTeX 启用 TeX 支持
      katex: true,
      // 使用 mathjax 启用 TeX 支持
      mathjax: true,
      // 自定义对齐
      align: true,
    }),
    //PWA支持
    pwaPlugin({
      // 首次成功注册时显示PWA安装按钮
      showInstall: true,
      // 缓存站点图片（站点图片不大）
      cachePic: true,
      // 网站体积不大，并使文档完全离线可用
      cacheHTML: true,
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
};
