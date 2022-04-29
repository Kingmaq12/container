# Container

> Container MicroFrontEnds

- **[React](https://facebook.github.io/react/)** (16.x)
- **[Webpack](https://webpack.js.org/)** (4.x)
- **[Typescript](https://www.typescriptlang.org/)** (3.x)
- **[ModuleFederation](https://webpack.js.org/concepts/module-federation/)**
- **[Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)** using [React Hot Loader](https://github.com/gaearon/react-hot-loader) (4.x)
- [Babel](http://babeljs.io/) (7.x)
- [SASS](http://sass-lang.com/)
- [Jest](https://facebook.github.io/jest/) - Testing framework for React applications
- Image loading/minification using [Image Webpack Loader](https://github.com/tcoopman/image-webpack-loader)
- Typescript compiling using [Awesome Typescript Loader](https://github.com/s-panferov/awesome-typescript-loader) (5.x)
- Code quality (linting) for Typescript.

## Installation

1. Clone/download repo
2. `npm install`

## Usage

**Development**

`npm run start`

- Build app continuously (HMR enabled)
- App served @ `http://localhost:3001`
---

**All commands**

| Command                                     | Description                                                                   |
| ------------------------------------------- | ----------------------------------------------------------------------------- |
| `npm run start`                             | Build app continuously (HMR enabled) and serve @ `http://localhost:8080`      |
| `npm run build`                             | Build app to `/dist/`                                                         |
| `npm run test`                              | Run tests                                                                     |
| `npm run lint`                              | Run Typescript linter                                                          |

