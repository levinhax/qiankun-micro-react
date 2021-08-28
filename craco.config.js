const path = require('path')
const { name } = require('./package')
console.log('name: ', name)

module.exports = {
  devServer: {
    // 监听端口
    port: 9002,
    // 关闭主机检查，使微应用可以被 fetch
    disableHostCheck: true,
    // 配置跨域请求头，解决开发环境的跨域问题
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/api': {
        target: 'http://10.11.46.135:7089',
        pathRewrite: {
          '^/api': '/AiMask/webApp',
        },
      },
    },
  },
  webpack: {
    alias: {
      '@': path.resolve('src'),
    },
    configure: (webpackConfig, { env, paths }) => {
      console.log('webpack configure env: ', env)
      // paths.appPath='public'
      paths.appBuild = 'dist'
      webpackConfig.output = {
        ...webpackConfig.output,
        // ...{
        //   filename: whenDev(() => 'static/js/bundle.js', 'static/js/[name].js'),
        //   chunkFilename: 'static/js/[name].js'
        // },
        path: path.resolve(__dirname, 'dist'), // 修改输出文件目录
        publicPath: env === 'production' ? '/child/micro2/' : '/',
        // 微应用的包名，这里与主应用中注册的微应用名称一致
        // library: 'ReactMicroApp',
        library: `${name}-[name]`,
        // 将你的 library 暴露为所有的模块定义下都可运行的方式
        libraryTarget: 'umd',
        // 按需加载相关，设置为 webpackJsonp_ReactMicroApp 即可
        // jsonpFunction: 'webpackJsonp_ReactMicroApp',
        jsonpFunction: `webpackJsonp_${name}`,
      }
      return webpackConfig
    },
  },
}
