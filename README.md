# 海畔 · 官网

海畔（课表 APP）的静态官网，包含首页、使用文档与注意事项三个页面。整站无构建步骤、无外部依赖，样式与脚本都在仓库内，Netlify 可直接从 `main` 分支自动部署。

- Netlify：连接本仓库 `main` 分支，发布目录留空（仓库根目录）
- GitHub Pages：https://qingyu327.github.io/haipan-website/
- Gitee 镜像：https://gitee.com/heaven-does-not-move/haipan-website
- 应用主仓库：https://github.com/QingYu327/HaiPan

## 目录结构

```
index.html          首页：首屏、功能、网络、手册入口、下载与免责声明
docs.html           使用文档：安装、登录、课表、成绩、考试、空教室、提醒、常见问题
notes.html          注意事项：非官方声明、账号设备、隐私、公网通道、使用边界、下载安全
assets/pages.css    文档页共享样式
assets/pages.js     文档页交互：主题、目录高亮、入场、复制
README.md
```

## 页面说明

| 页面 | 内容 |
| --- | --- |
| `index.html` | 胶囊导航、三台手机模型、功能分区、手册入口、下载区、页脚 |
| `docs.html` | 左侧粘性目录、8 个章节、步骤卡、提示卡、常见问题折叠 |
| `notes.html` | 8 个注意事项章节、隐私与设备说明、反馈邮箱复制 |

## 交互与动效

- 首屏标题卷帘、滚动入场、按钮磁吸、手机模型 3D 视差与光斑
- 顶栏滚动收缩、页面阅读进度条、明暗主题圆形扩散切换
- 文档页目录随滚动高亮，移动端自动变为横向胶囊
- 全部动效遵循 `prefers-reduced-motion`，关闭动画时内容仍完整可见
- 站内跳转使用短暂淡出，避免生硬切页

## 修改指引

- **下载地址**：跟随 `releases/latest`，发新版只要资产名保持 `haipan-app-release.apk`，页面无需改动
- **仓库与资产名**：`index.html` 底部脚本里的 `REPO`、`ASSET`
- **版本标签**：首屏徽标、下载卡与文档页的版本号（如 `1.0.1+4144`）
- **配色**：`:root` 与 `html[data-theme="dark"]` 的 CSS 变量，取自 App 的水墨蓝令牌
- **明暗模式**：默认跟随系统，手动切换后写入 `localStorage('hp-theme')`
- **新增章节**：在 `docs.html` / `notes.html` 增加 `<section class="doc-section" id="...">`，并在 `.toc` 里补一条同名链接

## 部署

### Netlify

仓库已连接 Netlify，推送到 `main` 后自动构建。若手动配置：

- Build command：留空
- Publish directory：留空或 `/`

### GitHub Pages

仓库 `Settings → Pages`，Source 选 `Deploy from a branch`，分支 `main`、目录 `/ (root)`。

### Gitee Pages

仓库「服务 → Gitee Pages」，分支 `master`、部署目录留空（需实名认证）。

## 相关仓库

- 应用源码与 Release：https://github.com/QingYu327/HaiPan
- 最新安装包：https://github.com/QingYu327/HaiPan/releases/latest

## 免责声明

本仓库内容为开源项目的一部分，仅供学习研究与个人使用，请勿用于任何商业或非法用途。软件按「现状」提供，不附带任何明示或默示担保，使用过程中产生的风险与后果由使用者自行承担。
