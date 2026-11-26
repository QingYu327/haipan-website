# 海畔 · 官网

海畔（课表 APP）的静态官网。整站只有一个 `index.html`，样式、脚本、应用图标全部内联，无构建步骤、无外部依赖，双击即可打开。

- 在线地址（GitHub Pages）：https://qingyu327.github.io/haipan-website/
- Gitee 镜像：https://gitee.com/heaven-does-not-move/haipan-website
- 应用主仓库：https://github.com/QingYu327/HaiPan

## 本地预览

直接用浏览器打开 `index.html`，或起一个静态服务：

```bash
python -m http.server 8000
```

## 目录结构

```
index.html    整站页面（含明暗主题、胶囊导航、手机模型与下载入口）
README.md
```

## 页面结构

| 区块 | 内容 |
| --- | --- |
| 顶栏 | 应用图标、GitHub 入口、明暗切换；向下滚动收缩为悬浮胶囊 |
| 首屏 | 标题、Android 安装包、iOS 敬请期待、三台手机模型 |
| 功能 | 课表、成绩与考试、空教室、桌面与提醒 |
| 网络 | 校园网直连与公网通道说明 |
| 下载 | 镜像加速直链 + 版本信息 |
| 页脚 | 免责声明、仓库链接、署名 |

## 修改指引

- **下载地址**：跟随 `releases/latest`，发新版只要资产名保持 `haipan-app-release.apk`，页面无需改动
- **仓库与资产名**：`index.html` 底部 `script` 顶部的 `REPO`、`ASSET` 两个常量
- **版本标签**：首屏徽标与下载卡的版本号（如 `1.0.1+4144`）
- **配色**：`:root` 里的 CSS 变量（浅色）与 `:root[data-theme="dark"]`（深色），取自 App 的水墨蓝令牌
- **明暗模式**：默认跟随系统，手动切换后写入 `localStorage('hp-theme')`

## 部署

GitHub Pages：仓库 `Settings → Pages`，Source 选 `Deploy from a branch`，分支 `main`、目录 `/ (root)`。

Gitee Pages：仓库「服务 → Gitee Pages」，分支 `master`、部署目录留空（需实名认证）。

## 相关仓库

- 应用源码与 Release：https://github.com/QingYu327/HaiPan
- 最新安装包：https://github.com/QingYu327/HaiPan/releases/latest

## 免责声明

本仓库内容为开源项目的一部分，仅供学习研究与个人使用，请勿用于任何商业或非法用途。软件按「现状」提供，不附带任何明示或默示担保，使用过程中产生的风险与后果由使用者自行承担。
