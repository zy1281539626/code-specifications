import { DefaultTheme } from "vitepress";

// https://vitepress.vuejs.org/guide/theme-sidebar
export const sidebar: DefaultTheme.Sidebar = {
  "/": [
    {
      // text: "H5开发指南",
      // collapsed: false,
      items: [
        {
          text: "H5開發規範",
          link: "/h5/index",
          items: [{ text: "APP交互文檔", link: "/h5/app/app.md" }],
        },
        { text: "iOS開發規範", link: "/ios/index" },
        { text: "Android開發規範", link: "/aos/index" },
        { text: "GitFlow工作流", link: "/gitflow/index" },
      ],
    },
  ],
};
