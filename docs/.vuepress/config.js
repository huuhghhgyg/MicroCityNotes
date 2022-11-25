import { searchPlugin } from "@vuepress/plugin-search";
import { defaultTheme } from "@vuepress/theme-default";

module.exports = {
  base: "/MicroCityNotes/",
  title: "MicroCity Notes",
  description: "Just playing around",
  theme: defaultTheme({
    logo: "/images/icon_microcity.png",
    navbar: [
      // NavbarGroup
      {
        text: "首页",
        link: "/",
      },
      // NavbarItem
      {
        text: "MicroCity文档",
        children: [
          { text: "文档目录", link: "/docs" },
          { text: "1.MicroCity介绍", link: "/docs/1.1_what_microcity_can_do.md" },
          {
            text: "2.开始使用MicroCity",
            children: [
              { text: "2.1 展示世界地图", link: "/docs/2.1_showing_a_world_map.md" },
              { text: "2.2 寻找国家", link: "/docs/2.2_searching_for_countries.md" },
            ],
          },
          {
            text: "3.用户界面",
            children: [
              { text: "3.1 用户界面概览", link: "/docs/3.1_ui_overview.md" },
              { text: "3.2 矢量图", link: "/docs/3.2_vector_shapes.md" },
              { text: "3.3 栅格图", link: "/docs/3.3_raster_grids.md" },
              { text: "3.4 3D场景", link: "/docs/3.4_3d_scenes.md" },
              { text: "3.5 表格", link: "/docs/3.5_tables.md" },
              { text: "3.6 地图和图层", link: "/docs/3.6_maps_and_layers.md" },
              { text: "3.7 拓展模块", link: "/docs/3.7_modules.md" },
            ],
          },
          {
            text: "脚本接口",
            children: [
              { text: "4.1 脚本概览", link: "/docs/4.1_si_overview.md" },
              { text: "4.2 控制用户界面", link: "/docs/4.2_ui_control.md" },
              { text: "4.3 矢量图形和表格", link: "/docs/4.3_shapes_and_table.md" },
              { text: "4.4 栅格图形", link: "/docs/4.4_grids.md" },
              { text: "4.5 3D场景", link: "/docs/4.5_3d_scenes.md" },
              { text: "4.6 网络", link: "/docs/4.6_networks.md" },
              { text: "4.7 离散事件模拟", link: "/docs/4.7_des_simulations.md" },
              { text: "4.8 混合整数规划", link: "/docs/4.8_mixed_integer_programming.md" },
            ],
          },
        ],
      },
      {
        text: "MicroCity项目地址",
        link: "https://microcity.github.io/",
      },
    ],
  }),
  plugins: [
    searchPlugin({
      // 配置项
      // 允许搜索 Frontmatter 中的 `tags`
      getExtraFields: (page) => page.frontmatter.tags ?? [],
    }),
  ],
};
