"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[523],{81523:function(n,t,e){e.r(t),t.default="# \u57fa\u4e8euiw-form\u5c01\u88c5\u7684\u4e1a\u52a1\u8868\u5355\n\n\x3c!--ProForm--\x3e\n\n### \u57fa\u672c\u4f7f\u7528(\u4e0euiw/form\u4f7f\u7528\u4fdd\u6301\u4e00\u81f4)\n```js\nimport { ProForm } from '@uiw-admin/components'\nimport React, { useState } from 'react';\nimport { Button } from 'uiw'\nconst Demo = () => {\n    return (\n       <ProForm\n         formType=\"card\"\n         title=\"\u57fa\u7840\u4fe1\u606f\"\n         showSaveButton\n         showResetButton\n         onSubmit={(initial, current) => {\n          const errorObj: any = {};\n          if (!current?.lastName) {\n            errorObj.lastName = '\u540d\u5b57\u4e0d\u80fd\u4e3a\u7a7a';\n          }\n          if (Object.keys(errorObj).length > 0) {\n            const err: any = new Error();\n            err.filed = errorObj;\n            Notify.error({ title: '\u63d0\u4ea4\u5931\u8d25\uff01' });\n            throw err;\n          }\n          // \u8c03\u7528\u8bf7\u6c42\u63a5\u53e3\n        }}\n         onChange={(initial: any, current: any) => {} )}\n         formDatas={\n           [\n             {\n               label: '\u59d3\u6c0f',\n               key: 'firstName',\n               widget: 'input',\n               initialValue: '',\n               widgetProps: {}\n               // \u5355\u72ec\u4e00\u884c\n               span:\"24\"\n             }\n           ]}\n       />\n  );\n}\n```\n\n### \u901a\u8fc7submitRef\u8fdb\u884c\u8868\u5355\u63d0\u4ea4\n```js\nimport { ProForm } from '@uiw-admin/components'\nimport React, { useState,useRef } from 'react';\nimport { Button } from 'uiw'\nconst Demo = () => {\n\n  const submitRef = useRef<any>()\n\n    return (\n      <React.Fragment>\n       <ProForm\n         submitRef={submitRef}\n         title=\"\u57fa\u7840\u4fe1\u606f\"\n         onSubmit={(initial, current) => {\n          const errorObj: any = {};\n          if (!current?.lastName) {\n            errorObj.lastName = '\u540d\u5b57\u4e0d\u80fd\u4e3a\u7a7a';\n          }\n          if (Object.keys(errorObj).length > 0) {\n            const err: any = new Error();\n            err.filed = errorObj;\n            Notify.error({ title: '\u63d0\u4ea4\u5931\u8d25\uff01' });\n            throw err;\n          }\n          // \u8c03\u7528\u8bf7\u6c42\u63a5\u53e3\n        }}\n         formDatas={\n           [\n             {\n               label: '\u59d3\u6c0f',\n               key: 'firstName',\n               widget: 'input',\n               initialValue: '',\n               widgetProps: {}\n             }\n           ]}\n       />\n       <Button onClick={()=>submitRef?.current?.click()}>\u4fdd<Button>\n      </React.Fragment>\n  );\n}\n```\n\n### \u53ea\u8bfb\u6a21\u5f0f\n```js\nimport { ProForm } from '@uiw-admin/components'\nimport React, { useState } from 'react';\nconst Demo = () => {\n  const [ isView ] = useState( true )\n    return (\n       <ProForm\n         readOnly={isView}\n         title=\"\u57fa\u7840\u4fe1\u606f\"\n         // \u53ea\u8bfb\u6a21\u5f0f\u4e0b\u8c03\u6574 \u4e00\u884c\u7684 DescriptionItems \u6570\u91cf,\u5176\u4f59\u53c2\u6570\u53c2\u8003uiw/Descriptions\n         readOnlyProps={{ columns:3 }}\n         formDatas={\n           [\n             {\n               label: '\u59d3\u540d',\n               key: 'firstName',\n               widget: 'input',\n               // \u53ea\u8bfb\u6a21\u5f0f\u4e0b\u652f\u6301\u8bfb\u53d6React.ReactNode\n               initialValue: <div>\u5468\u653f</div> ,\n               // \u53ea\u8bfb\u6a21\u5f0f\u4e0b\u5355\u72ec\u4e00\u884c\n               readSpan:3\n             },\n           ]}\n       />\n  );\n}\n```\n\n\n## Porps\n\n| \u53c2\u6570 | \u8bf4\u660e\t| \u7c7b\u578b\t| \u9ed8\u8ba4\u503c |\n| --  | -- | -- | -- |\n| formDatas | \u8868\u5355\u9879\u96c6\u5408\t| FormItemsProps[]\t\t| [] |\n| onSubmit | \u63d0\u4ea4\u8868\u5355\u56de\u8c03 \u9700\u914d\u5408btns\uff0c\u7ee7\u627fuiw/form submit\t| (initial: Record<string, any>, current: Record<string, any>) => void\t\t| - |\n| onChange | \u8868\u5355\u503c\u53d8\u5316\u56de\u8c03\uff0c\u7ee7\u627fuiw/form onChange\t| (initial: Record<string, any>, current: Record<string, any>) => void\t| - |\n| showSaveButton | \u5c55\u793a\u63d0\u4ea4\u6309\u94ae\t|  boolean\t\t| false |\n| showResetButton | \u5c55\u793a\u91cd\u7f6e\u6309\u94ae\t|  boolean\t\t| false |\n| saveButtonProps | \u63d0\u4ea4\u6309\u94aeapi;\u7ee7\u627f\u4e8euiw/button\t|  boolean\t\t| false |\n| resetButtonProps | \u91cd\u7f6e\u6309\u94aeapi;\u7ee7\u627f\u4e8euiw/button\t|  boolean\t\t| false |\n| buttonsContainer  | buttons\u5bb9\u5668\u6837\u5f0f(\u53ef\u8c03\u6574button\u5e03\u5c40)\t| React.CSSProperties\t\t| - |\n| title | \u6807\u9898\t  | string \u6216 React.ReactNode\t\t| - |\n| formType | \u8868\u5355\u7c7b\u578b\t  | 'collapse' \u6216 'card' \u6216 'pure'\t\t| 'card' |\n| submitRef | \u83b7\u53d6\u8868\u5355\u63d0\u4ea4\u4e8b\u4ef6ref\t  |  any\t\t| - |\n| readOnly | \u662f\u5426\u662f\u53ea\u8bfb\u6a21\u5f0f\u6a21\u5f0f\t  |  boolean\t\t| false |\n| readOnlyProps | \u53ea\u8bfb\u6a21\u5f0f \u53c2\u8003Descriptions\u53c2\u6570\t  |  DescriptionsProps\t\t| {} |\n\n## FormItemsProps\n| \u53c2\u6570 | \u8bf4\u660e\t| \u7c7b\u578b\t| \u9ed8\u8ba4\u503c |\n| --  | -- | -- | -- |\n| label| \u8868\u5355\u9879\u540d\u79f0 | string\t| - |\n| key| \u8868\u5355\u9879key| string\t| - |\n| widget| \u8868\u5355\u9879\u7c7b\u578b| typeof commonWidgetsList\t| - |\n| initialValue| \u8868\u5355\u9879\u503c\uff0c\u53ef\u4ee5\u662f\u9ed8\u8ba4\u503c| any \u6216 any[]\t| - |\n| option| \u6570\u636e\u5316\u9009\u9879\u5185\u5bb9, type\u4e3a radio\u3001checkbox\u3001select \u751f\u6548| FormItemsOptionsProps[]| - |\n| widgetProps| \u8868\u5355\u7ec4\u4ef6\u5176\u4f59\u53c2\u6570,\u53c2\u8003uiw\u8868\u5355\u7ec4\u4ef6| any|- |\n| hide| \u662f\u5426\u663e\u793a| boolean| true |\n| span| \u975e\u53ea\u8bfb\u6a21\u5f0f\u4e0b,\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a 24 \u5217\u4e2d\u6bcf\u5217\u7684\u5bbd\u5ea6\u6765\u521b\u5efa\u57fa\u672c\u7f51\u683c\u7cfb\u7edf| string| '8' |\n| readSpan| \u53ea\u8bfb\u6a21\u5f0f\u4e0b\u5305\u542b\u5217\u7684\u6570\u91cf \u53c2\u8003Descriptions.Item| number | 1 |\n| required| \u662f\u5426\u5fc5\u586b| boolean | - |\n\n\n## FormItemsOptionsProps\n| \u53c2\u6570 | \u8bf4\u660e\t| \u7c7b\u578b\t| \u9ed8\u8ba4\u503c |\n| --  | -- | -- | -- |\n| label| \u540d\u79f0 | string(\u5fc5\u4f20\u503c)\t| - |\n| value| key | string \u6216 number(\u5fc5\u4f20\u503c)\t| - |\n| disabled| \u662f\u5426\u7981\u7528 | boolean\t| - |\n\n## \u6ce8\u610f\n- [\u7ee7\u627f\u4e8euiw/form,\u8bf7\u53c2\u8003uiw/from\u4ee5\u53ca\u8868\u5355\u7ec4\u4ef6](https://uiwjs.github.io/#/components/from)\n- \u7ec4\u4ef6\u9ed8\u8ba4\u96c6\u6210\u4e86Input,Checkbox,Switch,Textarea,DateInput,TimePicker,MonthPicker,SearchSelect,Select,Radio\u3002\u53ef\u901a\u8fc7\u914d\u7f6ewidget\u6ce8\u518c\u81ea\u5b9a\u4e49\u7ec4\u4ef6"}}]);
//# sourceMappingURL=523.d6037b3d.chunk.js.map