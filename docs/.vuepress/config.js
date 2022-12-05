// import { searchPlugin } from "@vuepress/plugin-search";
import { defaultTheme } from "@vuepress/theme-default";
import fullTextSearchPlugin from "vuepress-plugin-full-text-search2";

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
          { text: "1.MicroCity介绍", link: "/docs/1.1_what_microcity_can_do.md" },
          { text: "2.开始使用MicroCity", link: "/docs/2.1_showing_a_world_map.md" },
          { text: "3.用户界面", link: "/docs/3.1_ui_overview.md" },
          { text: "4.脚本接口", link: "/docs/4.1_si_overview.md" },
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
              children: ["/docs/1.1_what_microcity_can_do.md"],
            },
            {
              text: "2.开始使用MicroCity",
              collapsible: true,
              children: ["/docs/2.1_showing_a_world_map.md", "/docs/2.2_searching_for_countries.md"],
            },
            {
              text: "3.用户界面",
              collapsible: true,
              children: ["/docs/3.1_ui_overview.md", "/docs/3.2_vector_shapes.md", "/docs/3.3_raster_grids.md", "/docs/3.4_3d_scenes.md", "/docs/3.5_tables.md", "/docs/3.6_maps_and_layers.md", "/docs/3.7_modules.md"],
            },
            {
              text: "4.脚本接口",
              collapsible: true,
              children: ["/docs/4.1_si_overview.md", "/docs/4.2_ui_control.md", "/docs/4.3_shapes_and_tables.md", "/docs/4.4_grids.md", "/docs/4.5_3d_scenes.md", "/docs/4.6_networks.md", "/docs/4.7_des_simulations.md", "/docs/4.8_mixed_integer_programming.md"],
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
            "/notes/lua.md",
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
  ],
};
