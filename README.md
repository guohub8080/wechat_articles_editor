# 微信公众号代码生成器

一个基于React和TypeScript的微信公众号代码生成器。
效果预览地址：https://guohub8080.github.io/wechat_articles_editor/

## 使用方法

克隆项目，安装依赖，运行：

```text
pnpm i
pnpm dev
```

在`articles`文件夹中添加文章，可添加目录，目录中不允许出现空格。文章格式为`tsx`，是一个React组件。

运行后，点击悬浮窗口中的复制源代码，即可复制源代码到粘贴板，粘贴到微信公众号后台即可。

# 注意事项

根据文件夹结构自动生成路由并非使用了SSR，而是本地文件系统生成，详见`utils/router`。如果新建文件夹或文件，需要重新运行项目，目前无法做到热更新。