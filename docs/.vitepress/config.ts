import { defineConfig } from "vitepress";

import { nav } from "./nav";
import { sidebar } from "./sidebar";

export default defineConfig({
  title: "前端框架開發規範",
  themeConfig: {
    nav,
    sidebar,
    outline: "deep",
    outlineTitle: "章节目录",
    docFooter: {
      prev: "←上一篇",
      next: "下一篇→",
    },
    lastUpdatedText: "上次更新时间",
  },
  markdown: {
    lineNumbers: true, //开启代码块行号
  },
});
