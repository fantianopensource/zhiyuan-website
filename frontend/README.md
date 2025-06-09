# Zhiyuan Website

A modern personal/enterprise website built with the latest frontend technology stack.

## 🚀 Features

- ⚛️ **React 18** - Latest stable React version
- 🎨 **Material-UI** - Beautiful and responsive UI components
- 🛠️ **TypeScript** - Type-safe JavaScript development
- ⚡ **Vite** - Next Generation Frontend Tooling
- 🛣️ **React Router** - Client-side routing
- 🎯 **ESLint + Prettier** - Code quality and formatting

## 📋 Prerequisites

- Node.js (v18 or later)
- npm (v9 or later)
- TypeScript (v5 or later)

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/zhiyuan-website.git
   cd zhiyuan-website/frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view it.

4. **Build for production**

   ```bash
   npm run build
   ```

   The build artifacts will be stored in the `dist/` directory.

5. **Preview production build**

   ```bash
   npm run preview
   ```

## 📦 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## 🔧 Project Structure

```
src/
├── assets/          # Static assets (images, fonts, etc.)
├── components/      # Reusable UI components
├── pages/           # Page components
├── types/           # TypeScript type definitions
├── constants/       # Constants and configuration
├── services/        # API services
├── App.tsx          # Root component
└── main.tsx         # Application entry point
```

## 🐶 Git Hooks

This project uses Husky to manage Git hooks:

- `pre-commit`: Automatically format and lint staged files
- `pre-push`: Run TypeScript type checking before pushing
- `commit-msg`: Validate commit message format

## 📝 Commit Message Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

### Commit Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that don't affect code logic
- `refactor`: Code changes that don't fix bugs or add features
- `perf`: Performance improvements
- `test`: Adding or fixing tests
- `chore`: Build process or tooling changes
- `ci`: CI/CD configuration changes
- `revert`: Revert a previous commit

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
