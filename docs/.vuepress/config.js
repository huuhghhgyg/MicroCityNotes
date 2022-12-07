// import { searchPlugin } from "@vuepress/plugin-search";
import { defaultTheme } from "@vuepress/theme-default";
import fullTextSearchPlugin from "vuepress-plugin-full-text-search2";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import { seoPlugin } from "vuepress-plugin-seo2";

module.exports = {
  base: "/MicroCityNotes/",
  title: "MicroCity Notes",
  description: "Just playing around",
  theme: defaultTheme({
    logo: "/images/icon_microcity.png",

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
          { text: "文档目录", link: "/docs" },
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
      // 你的选项
      hostname: "https://huuhghhgyg.github.io",
    }),
  ],
};
