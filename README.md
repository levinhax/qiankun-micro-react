# react 乾坤子应用

常见业务场景

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# 问题解决

## 主应用(vue-cli 4.x)，切换到子应用(create-react-app)，加载完子应用后，主应用崩溃

报错：WebSocket connection to 'ws://localhost:8080/sockjs-node' failed:

原因分析：CRA 建立的子应用的热更新 socket 连到了基座上，导致基座崩溃。子应用 socket 默认指向
${location.hostname}:${location.port}，在基座模式下，子应用的 socket 指向了基座服务的地址。

解决方案：子应用的 socket 端口显示指定 WDS_SOCKET_PORT 参数

```
// .env

WDS_SOCKET_PORT=9002
```
