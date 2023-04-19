## 页面骨架组件

页面骨架组件，用于整个界面的loading效果，也可调整统一边距。

## 用例

```jsx mdx:preview
import { Skeleton } from '@uiw-admin/components'
import React from 'react'

const Demo = () => (
  <Skeleton loading={true}>
    <div>children</div>
  </Skeleton>
)

export default Demo
```

## Props
| 参数    | 说明         | 类型    | 默认值 |
| ------- | ------------ | ------- | ------ |
| loading | 页面加载状态 | Boolean | false  |

> 更多属性文档请参考 [Uiw Loader](https://uiwjs.github.io/#/components/loader)


## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.