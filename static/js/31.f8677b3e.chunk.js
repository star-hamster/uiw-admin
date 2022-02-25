"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31],{8031:function(n,e,t){t.r(e),e.default='# \u9875\u9762\u6574\u4f53\u5e03\u5c40\n\n[![npm version](https://img.shields.io/npm/v/@uiw-admin/basic-layouts.svg?label=@uiw-admin/basic-layouts)](https://www.npmjs.com/package/@uiw-admin/basic-layouts)\n\n\u9879\u76ee\u7684\u6574\u4f53\u9ed8\u8ba4\u5e03\u5c40\u7ec4\u4ef6\uff0c\u4e00\u822c\u9ed8\u8ba4 \'/\' \u8def\u7531\u7684\u7ec4\u4ef6\n\n## \u4f55\u65f6\u4f7f\u7528\n\n\u5f53\u9879\u76ee\u9700\u8981\u9ed8\u8ba4\u5e03\u5c40\u7684\u4f7f\u7528\n\n## \u5b89\u88c5\n\n```bash\nnpm i @uiw-admin/basic-layouts --save # yarn add @uiw-admin/basic-layouts\n```\n\x3c!-- ## \u53c2\u6570\n\n```ts\n\nexport type BasicLayoutProps = {\n  logo?: string;\n  projectName?: string;\n  /**\n   * \u9875\u811a\n   */\n  footer?: React.ReactElement;\n  /** \u5b50\u96c6\u8def\u7531 */ \n  routes?: RoutersProps[];\n  children?: React.ReactNode;\n  /** \u5934\u90e8 \u5e03\u5c40 */\n  headerLayout?: "top" | "default",\n  /** \u5934\u90e8\u80cc\u666f\u8272 */\n  headerBackground?: string,\n  /** \u5934\u90e8\u5b57\u4f53\u989c\u8272 */\n  headerFontColor?: string;\n    /** \u83dc\u5355\u9690\u85cf */\n  menuHide?: boolean;\n} & HeaderRightProps;\n\n\nexport interface HeaderMenuItemsProps {\n  title: React.ReactNode;\n  icon: JSX.Element | string | false | null;\n  onClick?: () => void;\n  divider?: boolean;\n  render?: React.ReactNode;\n}\n\nexport interface HeaderRightProps {\n  /**\n   * \u83dc\u5355\n   */\n  menus?: Array<HeaderMenuItemsProps>;\n  /**\n   * avatar \u5934\u50cf\n   * userName \u7528\u6237\u540d\n   * menuLeft \u83dc\u5355\u5de6\u4fa7\n   */\n  profile?: {\n    avatar?: string;\n    userName?: string;\n    menuLeft?: React.ReactElement;\n  };\n  // \u91cd\u65b0\u52a0\u8f7d\u6743\u9650\n  onReloadAuth: () => void;\n  layouts?: UseLayoutsProps;\n}\n\nexport interface Params {\n  headerRightvisible: boolean;\n}\n\nexport interface UseLayoutsProps {\n  headerRightvisible: boolean;\n  closeMenu: () => void;\n  updateStore: (datas: Params) => void;\n}\n\n``` --\x3e\n## Props\n\n| \u53c2\u6570             | \u5fc5\u586b | \u7c7b\u578b                                                                                     | \u9ed8\u8ba4\u503c    | \u8bf4\u660e                     |\n| :--------------- | :--- | :--------------------------------------------------------------------------------------- | :-------- | :----------------------- |\n| logo             | \u5426   | `string`                                                                                 |           | logo\u56fe\u6807                 |\n| projectName      | \u5426   | `string`                                                                                 |           | \u9879\u76ee\u540d\u79f0                 |\n| footer           | \u5426   | `React.ReactElement`                                                                     |           | \u9875\u811a                     |\n| routes           | \u5426   | `RoutersProps[]`                                                                         |           | \u83dc\u5355\u8def\u7531\u6570\u636e             |\n| children         | \u5426   | `React.ReactNode`                                                                        |           | \u5185\u5bb9                     |\n| headerLayout     | \u5426   | `\u679a\u4e3e\u7c7b\u578b\uff1a"top" \\| "default"`                                                           | `default` | \u5934\u90e8\u5e03\u5c40                 |\n| headerBackground | \u5426   | `string`                                                                                 | `"#fff"`  | \u5934\u90e8\u80cc\u666f\u8272               |\n| headerFontColor  | \u5426   | `string`                                                                                 | `"#000"`  | \u5934\u90e8\u5b57\u4f53\u989c\u8272             |\n| menuHide         | \u5426   | `boolen`                                                                                 | `false`   | \u5934\u90e8\u5b57\u4f53\u989c\u8272             |\n| menus            | \u5426   | `HeaderMenuItemsProps[]`                                                                 |           | \u53f3\u4fa7\u70b9\u51fb\u5934\u50cf\u5c55\u793a\u83dc\u5355     |\n| profile          | \u5426   | `{avatar(\u5934\u50cf)?:string,userName(\u7528\u6237\u540d)?:string,menuLeft(\u83dc\u5355\u5de6\u4fa7)?:React.ReactElement}` |           | \u5934\u50cf\u90e8\u5206                 |\n| onReloadAuth     | \u5426   | `() => void`                                                                             |           | \u91cd\u65b0\u52a0\u8f7d\u6743\u9650             |\n| layouts          | \u5426   | `UseLayoutsProps`                                                                        |           | \u53f3\u4fa7\u70b9\u51fb\u5934\u50cf\u5c55\u793a\u83dc\u5355\u914d\u7f6e |\n\n## useLayouts\n\n### response\n| \u53c2\u6570               | \u5fc5\u586b | \u7c7b\u578b                                             | \u9ed8\u8ba4\u503c | \u8bf4\u660e |\n| :----------------- | :--- | :----------------------------------------------- | :----- | :--- |\n| headerRightvisible | \u5426   | `boolen`                                         |        |      |\n| closeMenu          | \u5426   | `() => void`                                     |        |      |\n| updateStore        | \u5426   | `(datas: {headerRightvisible: boolean}) => void` |        |      |\n\n## \u57fa\u672c\u4f7f\u7528\n>   -  routes \u6e32\u67d3\u8def\u7531\u83dc\u5355\n>   -  headerLayout \u914d\u7f6e\u5934\u90e8\u5e03\u5c40\n>   -  headerBackground: \u914d\u7f6e\u5934\u90e8\u80cc\u666f\u8272\n>   -  headerFontColor: \u914d\u7f6e\u5934\u90e8\u5b57\u4f53\u989c\u8272\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```tsx\nimport React from \'react\'\nimport BasicLayout, {\n  useLayouts,\n} from \'@uiw-admin/basic-layouts\'\nimport { HashRouter } from \'react-router-dom\';\nimport LayoutTabs from "@uiw-admin/layout-tabs"\nconst routerArrs =[\n  {\n    path: "/basic-layouts",\n    name: "\u67e5\u8be2\u8868\u683c",\n    element: <div>\u6d4b\u8bd5</div>,\n  },\n  {\n    path: "/layout-tabs",\n    name: "\u67e5\u8be2\u8868\u683c2",\n    element: <div>\u6d4b\u8bd52</div>,\n  }\n]\n\nfunction BasicLayoutScreen() {\n  const basicLayoutProps = {\n    headerLayout: \'top\',\n    headerBackground: \'#343a40\',\n    headerFontColor: \'#fff\',\n  }\n  return (\n    <HashRouter window={window}>\n      <BasicLayout {...basicLayoutProps} routes={routerArrs}  >\n        <LayoutTabs routes={routerArrs} /> \n      </BasicLayout>\n    </HashRouter>\n  )\n}\nReactDOM.render(<BasicLayoutScreen />, _mount_);\n\n```\n\n## \u53f3\u4fa7\u4e0b\u62c9\u83dc\u5355\n>   - menus\u914d\u7f6e\u53f3\u4fa7\u4e0b\u62c9\u83dc\u5355\u5185\u5bb9;\n>   - profile\u914d\u7f6e\u5934\u50cf\u4ee5\u53ca\u4e0b\u62c9\u83dc\u5355\u5de6\u4fa7\u5185\u5bb9;\n>   - onReloadAuth\u8c03\u7528\u5237\u65b0\u6743\u9650\u63a5\u53e3;\n>   - layouts.closeMenu\u5173\u95ed\u83dc\u5355\u4e8b\u4ef6;\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport React from \'react\'\nimport BasicLayout, {\n  useLayouts,\n} from \'@uiw-admin/basic-layouts\'\nimport { HashRouter ,useRoutes ,Outlet} from \'react-router-dom\';\nimport LayoutTabs from "@uiw-admin/layout-tabs"\n\nconst routerArrs =[\n  {\n    path: "/basic-layouts",\n    name: "\u67e5\u8be2\u8868\u683c",\n    element: <div>\u6d4b\u8bd5</div>,\n  },\n  {\n    path: "/layout-tabs",\n    name: "\u67e5\u8be2\u8868\u683c2",\n    element: <div>\u6d4b\u8bd52</div>,\n  }\n]\n\nfunction BasicLayoutScreen() {\n  const layouts = useLayouts()\n  const basicLayoutProps = {\n    // \u53f3\u4fa7\u4e0b\u62c9\u83dc\u5355\u5185\u5bb9\n    menus: [\n      {\n        title: \'\u6b22\u8fce\u6765\u5230uiw\',\n        icon: \'smile\',\n        // \u8c03\u7528\u5173\u95ed\u83dc\u5355\u4e8b\u4ef6\n        onClick: () => layouts.closeMenu(),\n      },\n      {\n        title: \'\u4fee\u6539\u5bc6\u7801\',\n        icon: \'setting\',\n      },\n    ],\n    profile: {\n      // \u5934\u50cf\u5730\u5740\n      avatar: \'\',\n      // \u4e0b\u62c9\u83dc\u5355\u5de6\u4fa7\u5185\u5bb9\n      menuLeft:<div style={{ marginRight: 15 }}>\u53ef\u505a\u81ea\u5b9a\u4e49dom</div>\n    },\n    // \u8c03\u7528\u5237\u65b0\u63a5\u53e3\n    onReloadAuth: () => {},\n    layouts,\n  }\n\n  return <HashRouter window={window}>\n      <BasicLayout {...basicLayoutProps} routes={routerArrs}  >\n        <LayoutTabs routes={routerArrs} /> \n      </BasicLayout>\n    </HashRouter>\n}\n\nReactDOM.render(<BasicLayoutScreen />, _mount_);\n```\n\n## \u9884\u89c8\n\n![](https://user-images.githubusercontent.com/49544090/150921430-c7c7316a-af30-41b5-873f-1f3d86cc9d03.png)\n\n\n## \u8d21\u732e\u8005\n\n\u611f\u8c22\u6240\u6709\u7684\u8d21\u732e\u8005\uff0c\u6b22\u8fce\u5f00\u53d1\u8005\u4e3a\u5f00\u6e90\u9879\u76ee\u8d21\u732e\u529b\u91cf\u3002\n\n<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">\n  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />\n</a>\n\n## License\n\nLicensed under the MIT License.'}}]);
//# sourceMappingURL=31.f8677b3e.chunk.js.map