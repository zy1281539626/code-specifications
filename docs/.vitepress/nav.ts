import { DefaultTheme } from "vitepress";

/**
 * 顶部导航栏模块
 * 详细参考：https://vitepress.vuejs.org/guide/theme-nav
 */
export const nav: DefaultTheme.NavItem[] = [
  {
    text: "H5規範",
    link: "/h5/index",
    activeMatch: "/h5/index",
  },
  {
    text: "iOS規範",
    link: "/ios/index",
    activeMatch: "/ios/index",
  },
  {
    text: "AOS規範",
    link: "/aos/index",
    activeMatch: "/aos/index",
  },
];
