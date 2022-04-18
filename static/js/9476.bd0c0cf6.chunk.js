"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9476],{29476:function(n,t,e){e.r(t),t.default='# \u83dc\u5355\u8def\u7531\u7ba1\u7406\n\n[![npm version](https://img.shields.io/npm/v/@uiw-admin/router-control.svg?label=@uiw-admin/router-control)](https://www.npmjs.com/package/@uiw-admin/router-control)\n\n\u5728\u9879\u76ee\u6839\u76ee\u5f55\u7684`config/routes.json`\u914d\u7f6e\u83dc\u5355\u8def\u7531\n\n> 1. \u8fdb\u884c\u8def\u7531\u5904\u7406\u8f6c\u6362\n> 2. \u8fdb\u884c\u8def\u7531\u6743\u9650\u5904\u7406\n\n\u26a0\ufe0f \u6ce8\u610f\uff1a\n\n  1. \u83dc\u5355\u8def\u7531\u6587\u4ef6\u4f18\u5148\u7ea7 `json > ts > js`\n  2. \u83dc\u5355\u8def\u7531\u4f7f\u7528`js`\u548c`ts`\u6587\u4ef6\u65f6\uff0c\u5982\u679c\u6587\u4ef6\u4e2d\u5df2\u7ecf\u4e66\u5199 `import React from "react"` \u8fd9\u53e5\u4ee3\u7801\uff0c\u5728\u751f\u6210\u7684 `.uiw/routes.tsx` \u6587\u4ef6\u4e2d\u4e0d\u4f1a\u518d\u6b21\u8fdb\u884c\u751f\u6210\n\n## \u5b89\u88c5\n\n```bash\nnpm i @uiw-admin/router-control --save # yarn add  @uiw-admin/router-control\n```\n\n## \u8def\u7531\u63a7\u5236\u7ec4\u4ef6\u53c2\u6570\n\n| \u53c2\u6570       | \u5fc5\u987b | \u7c7b\u578b                                          | \u9ed8\u8ba4\u503c    | \u8bf4\u660e                                   |\n| :--------- | :--- | :-------------------------------------------- | :-------- | :------------------------------------- |\n| routeType  | \u5426   | `"history" \\| "hash" \\| "browser"`            | `hash`    | \u8def\u7531\u6a21\u5f0f                               |\n| addModels  | \u5426   | `(path: string) => Promise<{ default: any }>` | undefined |                                        |\n| isAutoAuth | \u5426   | `boolean`                                     | `true` | \u662f\u5426\u81ea\u52a8\u6821\u9a8c "/" \u7684\u8def\u7531 token \u662f\u5426\u5b58\u5728 |\n| authorityJudgment | \u5426   | `string[] \\| RegExp \\| ((current: string) => boolean)`  |   | \u5224\u65ad "/" \u8def\u5f84 \u7684\u6743\u9650  |\n| navigateTo | \u5426   | `string \\| ((current: string) => boolean)`  |   |  \u5224\u65ad "/" \u8def\u5f84 \u7684\u6743\u9650  \u91cd\u5b9a\u5411\u8df3\u8f6c\u5730\u5740  |\n\n> \u5982\u679c\u9a8c\u8bc1\u767b\u5f55\u7684\u5b57\u6bb5\u4e0d\u662ftoken,\u53ef\u901a\u8fc7https://uiwjs.github.io/uiw-admin/#/config?title=defaultdefinetype-%E7%B1%BB%E5%9E%8B TOKEN_NAME \u81ea\u5b9a\u4e49\n\n\u26a0\ufe0f\u6ce8\u610f\uff1a `routeType`\u503c\u4e3a `history`\u6216`browser` \u7684\u65f6\u5019\u9700\u8981\u8bbe\u7f6e `kktrc` \u914d\u7f6e `publicPath` \u503c\u4e3a `"/"`\n\n```ts\n// kktrc.ts \n// ...\nexport default defaultConfig({\n  publicPath:"/",\n  // ...\n})\n```\n\n**\u81ea\u5b9a\u4e49\u63a7\u5236\u9875\u9762\u6743\u9650**\n\n\u9700\u8981\u66f4\u6539\u4e24\u4e2a\u6587\u4ef6\n\n[Control \u7ec4\u4ef6\u53c2\u6570](https://uiwjs.github.io/uiw-admin/#/authorized?title=authpage)\n\n```diff\n// /src/index.tsx\n\n// ...\nimport Control from \'@uiw-admin/router-control\'\n\nexport default ()=>{\n    // ...\n   return (\n    <Control\n      routeType="hash"\n+     isAutoAuth={false}\n    />\n  )\n}\n\n```\n\n[AuthPage \u7ec4\u4ef6\u53c2\u6570](https://uiwjs.github.io/uiw-admin/#/authorized?title=authpage)\n\n```diff\n# // /src/layouts/BasicLayout.tsx\n\n# // ...\n+ import AuthPage from "@uiw-admin/authorized"\n\nexport default ()=>{\n    // ...\n   return (\n    #  authority \u81ea\u5b9a\u4e49\u63a7\u5236\u9875\u9762\u6743\u9650 \u662f\u5426\u8df3\u8f6c\u767b\u5f55\u9875\n+    <AuthPage authority={true} redirectPath="/login" >\n     # // ...\n+    </AuthPage>\n  )\n}\n\n```\n\n\n## \u83dc\u5355\u8def\u7531\u53c2\u6570\n\n| \u53c2\u6570       | \u5fc5\u987b | \u7c7b\u578b                         | \u9ed8\u8ba4\u503c    | \u8bf4\u660e                                                                                                             |\n| :--------- | :--- | :--------------------------- | :-------- | :--------------------------------------------------------------------------------------------------------------- |\n| index      | \u5426   | `boolean`                    | undefined | \u9ed8\u8ba4\u8df3\u8f6c(\u4e0e`redirect`\u4e00\u8d77\u4f7f\u7528)                                                                                   |\n| redirect   | \u5426   | `string`                     | undefined | \u91cd\u5b9a\u5411  \u5f53`index===true`\u751f\u6548                                                                                     |\n| path       | \u5426   | `string`                     | undefined | \u8df3\u8f6c\u8def\u7531                                                                                                         |\n| name       | \u5426   | `string`                     | undefined | \u83dc\u5355\u540d\u79f0                                                                                                         |\n| icon       | \u5426   | `string \\| React.React.Node` | undefined | \u83dc\u5355\u56fe\u6807\u6807                                                                                                       |\n| component  | \u5426   | `string`                     | undefined | \u6e32\u67d3\u7ec4\u4ef6\u7684\u8def\u5f84(\u5982\u679c\u662f`403/404/500`\u7684\u9875\u9762\u76f4\u63a5\u5199 `403/404/500`,\u4f7f\u7528`@uiw-admin/plugins`\u91cc\u9762\u7684`routes`\u65f6\u4f1a\u8fdb\u884c\u8f6c\u6362) |\n| hideInMenu | \u5426   | `boolean`                    | \u65e0        | \u662f\u5426\u9690\u85cf\u83dc\u5355                                                                                                     |\n| isAuth     | \u5426   | `boolean`                    | \u65e0        | \u7528\u4e8e\u8def\u7531\u6821\u9a8c\u6743\u9650\uff0c \u6ce8\u610f\uff1a\u5982\u679c\u5b58\u5728\u8fd9\u4e2a\u5b57\u6bb5\u5219\u4ee5\u8fd9\u4e2a\u5b57\u6bb5\u6743\u9650\u4e3a\u51c6\uff0c\u4e0d\u8d70\u5176\u4ed6\u6821\u9a8c                                                |\n| routes     | \u5426   | `RoutersJSON[]`              | \u65e0        | \u5b50\u96c6 \u8def\u7531 ,(\u53c2\u6570\u4e0e\u83dc\u5355\u8def\u7531\u53c2\u6570\u4e00\u81f4)                                                                              |\n| navigate   | \u5426   | `string`                     | \u65e0        | \u81ea\u5b9a\u4e49\u8df3\u8f6c(`"(navigate) => {console.log(\'navigate\', navigate)}"`)                                                |\n\n## \u81ea\u5b9a\u4e49\u83dc\u5355\u56fe\u6807\n\n\u6ce8\u610f\uff1a\u4f7f\u7528`js`\u6216`ts`\u6587\u4ef6\u624d\u6709\u81ea\u5b9a\u4e49\u529f\u80fd\n\n```js\n// config/routes.js\n\nimport { chat } from "@/assets"\nimport { Icon } from "uiw"\nimport React from "react"\nconst routes = [\n  {\n    "path": "/",\n    "component": "@/layouts/BasicLayout",\n    "routes": [\n      {\n        "index": true,\n        "redirect": "/tableList"\n      },\n      {\n        "path": "/tableList",\n        "name": "\u67e5\u8be2\u8868\u683c",\n        "component": "@/pages/TableList",\n        "icon": <Icon type={chat} />,\n      },\n    ]\n  }\n]\nexport default routes\n```\n\x3c!-- ## \u53c2\u6570\n\n```ts\n\n// json\u6587\u4ef6\u683c\u5f0f\nexport interface RoutersJSON {\n  key?: string;\n  /** \u9ed8\u8ba4\u8df3\u8f6c */\n  index?: boolean;\n  /** \u8def\u5f84 */\n  path?: string;\n  /** \u540d\u79f0 */\n  name?: string;\n  /**  \u56fe\u6807 */\n  icon?: string | React.React.Node;\n  /** \u91cd\u5b9a\u5411  \u5f53 index===true\u751f\u6548 */\n  redirect?: string;\n  /** \u7ec4\u4ef6\u5730\u5740 \u5982\u679c\u662f 403/404/500 \u7684\u9875\u9762\u76f4\u63a5\u5199 403/404/500 \u5c31\u53ef\u4ee5\u4e86\uff0c\u5185\u90e8\u76f4\u63a5\u505a\u8f6c\u5316*/\n  component?:string;\n  /** \u5b50\u96c6 \u8def\u7531 */\n  routes?: RoutersJSON[];\n  /** \u662f\u5426\u9690\u85cf\u83dc\u5355 */\n  hideInMenu?: boolean;\n  /** \u7528\u4e8e\u8def\u7531\u6821\u9a8c\u6743\u9650\uff0c \u6ce8\u610f\uff1a\u5982\u679c\u5b58\u5728\u8fd9\u4e2a\u5b57\u6bb5\u5219\u4ee5\u8fd9\u4e2a\u5b57\u6bb5\u6743\u9650\u4e3a\u51c6 */\n  isAuth?: boolean;\n}\n\nexport interface ControllerProps {\n  /** \u8def\u7531\u6a21\u5f0f   \u9ed8\u8ba4 history  */\n  routeType?: "history" | "hash" | "browser";\n  /** \u52a0\u8f7d model \u65b9\u6cd5\uff0c(\u89e3\u51b3import\u5f15\u7528\u5730\u5740\u95ee\u9898\u62a5\u9519) */ \n  addModels?: (path: string) => Promise<{ default: any }>;\n  /** \u662f\u5426\u81ea\u52a8\u6821\u9a8c "/" \u8def\u7531  token \u662f\u5426\u5b58\u5728   */\n  isAutoAuth?: boolean;\n}\n\n``` --\x3e\n\n## \u7ec4\u4ef6\u63d0\u4f9b-\u8def\u7531\u8df3\u8f6c\u65b9\u6cd5\n\n1. `navigate` \u7531 `react-router-dom`\u7684`useNavigate` hook \u8d4b\u503c\u751f\u6210\n2. `history` \u5f53 `routeType="history"` \u624d\u80fd\u4f7f\u7528\uff0c[\u4f7f\u7528\u65b9\u5f0f](https://github.com/remix-run/history/blob/dev/docs/navigation.md)\n\n```ts\n// navigate \u4f7f\u7528\u65b9\u5f0f\nnavigate("/demo",{/** ... */})\n\n// history \u4f7f\u7528\u65b9\u5f0f\nhistory.push("/demo");\nhistory.push("/demo?d=12", { some: "state" });\nhistory.push(\n  {\n    pathname: "/demo",\n    search: "?d=12",\n  },\n  {\n    some: 1212,\n  }\n);\nhistory.go(-1);\nhistory.back();\n```\n\n## routes.json\u6848\u4f8b\n\n> `@` \u6307\u5411 src \u76ee\u5f55\n\n```json\n[\n  {\n    "path": "/login",\n    "component": "@/layouts/UserLayout"\n  },\n  {\n    "path": "/",\n    "component": "@/layouts/BasicLayout",\n    "routes": [\n      {\n        "index": true,\n        "redirect": "/tableList"\n      },\n      {\n        "path": "/home",\n        "name": "\u9996\u9875",\n        "component": "@/pages/TableList",\n        "icon": "home"\n      },\n      {\n        "path": "/dom",\n        "name": "\u5b50\u9879",\n        "icon": "copy",\n        "routes": [\n          {\n            "path": "/dom/courses",\n            "name": "Dashboard",\n            "component": "@/pages/Dashboard"\n          }\n        ]\n      },\n      {\n        "path": "/403",\n        "name": "403",\n        "hideInMenu": true,\n        "component": "403"\n      },\n      {\n        "path": "/500",\n        "name": "500",\n        "hideInMenu": true,\n        "component": "500"\n      },\n      {\n        "path": "/404",\n        "name": "404",\n        "hideInMenu": true,\n        "component": "404"\n      },\n      {\n        "path": "*",\n        "name": "404",\n        "component": "404"\n      }\n    ]\n  }\n]\n```\n\n## \u6848\u4f8b\n\n```ts\nimport React from "react";\nimport Control from \'@uiw-admin/router-control\';\nexport default ()=>{\n  return (\n    <Control\n      routeType="hash"\n       // addModels={(path) => import(`${path}`)}\n    />\n  )\n}\n\n```\n\n## \u8d21\u732e\u8005\n\n\u611f\u8c22\u6240\u6709\u7684\u8d21\u732e\u8005\uff0c\u6b22\u8fce\u5f00\u53d1\u8005\u4e3a\u5f00\u6e90\u9879\u76ee\u8d21\u732e\u529b\u91cf\u3002\n\n<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">\n  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />\n</a>\n\n## License\n\nLicensed under the MIT License.'}}]);
//# sourceMappingURL=9476.bd0c0cf6.chunk.js.map