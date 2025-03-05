# IndieHackerGrowthWay

[English Documentation](README.md)

一个为独立开发者提供的综合资源目录，按照独立开发者旅程的不同阶段整理分类的工具和资源集合。

访问网站：[独立开发者成长之路](https://kaixinbaba.github.io/IndieHackerGrowthWay)

## 目的与理念

IndieHackerGrowthWay 作为独立开发者和创业者的路线图和资源中心。它将独立开发者的旅程分为六个关键阶段：

1. **灵感启发** - 创意的起点
2. **构建** - MVP开发工具
3. **发布** - 产品发布资源
4. **成长** - 增长黑客和营销
5. **变现** - 收入产生策略
6. **自动化** - 业务流程自动化

每个阶段都有独特的颜色编码，并包含精心挑选的资源，以帮助独立开发者在特定阶段取得成功。

## 开发者指南

### 项目结构

```
├── client/
│   ├── src/
│   │   ├── components/    # 可复用UI组件
│   │   ├── data/         # 资源YAML配置
│   │   ├── lib/          # 工具函数和类型
│   │   └── pages/        # 页面组件
├── server/               # Express.js服务器设置
└── shared/              # 共享类型和模式
```

### 技术栈

- **前端**
  - React 配合 TypeScript
  - TanStack Query 用于数据获取
  - Tailwind CSS + shadcn/ui 用于样式
  - Wouter 用于路由
  - YAML 用于资源配置
  - i18n 支持国际化

- **开发工具**
  - Vite 实现快速开发
  - TypeScript 确保类型安全
  - ESLint + Prettier 保证代码质量

### 代码模块

1. **导航组件**
   - 处理区段导航和滚动行为
   - 实现平滑滚动到各个区段

2. **资源管理**
   - 基于YAML的资源配置
   - 动态资源过滤
   - 类型安全的资源处理

3. **UI组件**
   - ResourceCard: 显示单个资源
   - ResourceSection: 按类别分组资源
   - SearchBar: 跨所有区段过滤资源

4. **国际化**
   - 语言选择
   - 本地化内容加载
   - 每种语言的动态YAML配置

## 部署

### GitHub Pages 部署

1. **设置 GitHub 仓库**
   ```bash
   git init
   git add .
   git commit -m "初始提交"
   git branch -M main
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **配置 GitHub Pages**
   - 进入仓库设置
   - 导航到 "Pages" 部分
   - 选择 "GitHub Actions" 作为源
   - 创建 `.github/workflows/deploy.yml`:

   ```yaml
   name: 部署到 GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - name: 设置 Node.js
           uses: actions/setup-node@v2
           with:
             node-version: '20'
         - name: 安装依赖
           run: npm install
         - name: 构建
           run: npm run build
         - name: 部署到 GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist/public
   ```

3. **更新 package.json**
   添加 homepage 字段用于 GitHub Pages:
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name"
   }
   ```

4. **推送并部署**
   ```bash
   git add .
   git commit -m "添加 GitHub Pages 部署"
   git push
   ```

你的网站将自动部署到 `https://yourusername.github.io/repository-name`

### GitHub Pages 的优势

- **免费托管**: GitHub Pages 对公共仓库完全免费
- **自动部署**: 通过 GitHub Actions 自动构建和部署
- **自定义域名**: 支持配置自定义域名
- **SSL/TLS**: GitHub 提供免费的 HTTPS 证书
- **CDN**: 通过 GitHub 的全球 CDN 分发内容

## 贡献

我们欢迎贡献！详情请参见 [贡献指南](CONTRIBUTING.md)。

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。