---
order: 6
title: 更新日志
toc: false
timeline: true
---

`antd` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

#### 发布周期

- 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
- 次版本号：每月发布一个带有新特性的向下兼容的版本。
- 主版本号：含有破坏性更新和新特性，不在发布周期内。

---

## 3.24.3

`2019-10-26`

- 🐞 修复 Table `columns` 在 render 中会导致排序失效的问题。[#19404](https://github.com/ant-design/ant-design/pull/19404)
- 🐞 修复 Grid 响应式 `gutter` 失效的问题。[#19308](https://github.com/ant-design/ant-design/pull/19308)
- 🐞 修复小号 Table 边框样式问题。[#19312](https://github.com/ant-design/ant-design/pull/19312) [#19342](https://github.com/ant-design/ant-design/pull/19342)
- 🐞 修复 Dropdown 中的 Menu 在 SubMenu 选中后父级菜单未高亮的问题。[#19313](https://github.com/ant-design/ant-design/pull/19313)
- 🐞 修复 Typography & Drawer & Statistic 中的 moment.js 无法被 tree-shaking 的问题。[#19317](https://github.com/ant-design/ant-design/pull/19317)
- 🐞 修复 Input.Search 出现 `non-boolean attribute` 和 `unique key` 警告信息。[#19357](https://github.com/ant-design/ant-design/pull/19357)
- 🐞 修复 Modal 没有标题时，图标没能对齐的问题。[#19419](https://github.com/ant-design/ant-design/pull/19419)
- 💄 修复 Checkbox 在被禁用时，光标仍为可选状态的问题。[#19403](https://github.com/ant-design/ant-design/pull/19403)
- 💄 新增 `@modal-header-color` 变量。[#19385](https://github.com/ant-design/ant-design/pull/19385)
- 🛠 多处 TypeScript 的定义更新。[#19377](https://github.com/ant-design/ant-design/pull/19377) [#19343](https://github.com/ant-design/ant-design/pull/19343) [#19333](https://github.com/ant-design/ant-design/pull/19333)

## 3.24.2

`2019-10-19`

- 🐞 修复 Table `scroll.x` 设置 `max-content` 无效导致横向滚动消失的问题。[#19284](https://github.com/ant-design/ant-design/pull/19284)
- 🐞 修复 Table 将 `column.filterDropdown` 作为新属性设置时报错的问题。[#19302](https://github.com/ant-design/ant-design/pull/19302)
- 🐞 Fix Upload 点击下载按钮会触发预览的问题。[#19268](https://github.com/ant-design/ant-design/pull/19268) [@qq645381995](https://github.com/qq645381995)
- 🐞 修复 Comment 长作者名在小屏幕上破坏布局的问题。[#19272](https://github.com/ant-design/ant-design/pull/19272) [@rayronvictor](https://github.com/rayronvictor)
- Typescript
  - 🐞 优化 RangePicker `value` 属性定义。[#19300](https://github.com/ant-design/ant-design/pull/19300) [@neung123](https://github.com/neung123)
  - 🐞 优化 Select `mode` 属性定义。[#19286](https://github.com/ant-design/ant-design/pull/19286) [@wleven](https://github.com/wleven)
  - 🐞 优化 Upload `customRequest` 属性定义。[#19278](https://github.com/ant-design/ant-design/pull/19278) [@broder](https://github.com/broder)

## 3.24.1

`2019-10-17`

- 🐞 修复 Table 在旧版 React 会报 `React.createRef is not a function` 的错误信息。[#19262](https://github.com/ant-design/ant-design/pull/19262)
- 🐞 修复 Table TypeScript 定义丢失 Column 和 ColumnGroup 的问题。[#19251](https://github.com/ant-design/ant-design/pull/19251)


