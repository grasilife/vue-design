# CLI 服务

如果你可以使用以下命令安装：

```bash
vue create --preset grasilife/vue-preset my-project
```

::: tip 提示
你可以通过 `vue ui` 命令使用 GUI 运行更多的特性脚本。
:::

这里有一个 GUI 的 webpack Analyzer：

![UI webpack Analyzer](/ui-analyzer.png)

## vue-cli-service serve

````

## Git Hook

在安装之后，`@vue/cli-service` 也会安装 [yorkie](https://github.com/yyx990803/yorkie)，它会让你在 `package.json` 的 `gitHooks` 字段中方便地指定 Git hook：

```json
{
  "gitHooks": {
    "pre-commit": "lint-staged"
  }
}
````

::: warning
`yorkie` fork 自 [`husky`](https://github.com/typicode/husky) 且并不和之后的版本兼容。
:::

## 配置时无需 Eject

通过 `vue create` 创建的项目无需额外的配置就已经可以跑起来了。插件的设计也是可以相互共存的，所以绝大多数情况下，你只需要在交互式命令提示中选取需要的功能即可。

不过我们也知道满足每一个需求是不太可能的，而且一个项目的需求也会不断改变。通过 Vue CLI 创建的项目让你无需 eject 就能够配置工具的几乎每个角落。更多细节请查阅[配置参考](../config/)。
