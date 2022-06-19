# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`


## 项目搭建
 npx create-react-app project-name

## 安装sass, 不需要手动配置，react脚手架已经内置了SASS配置， 只需要安装一下
 npm install sass -D
 
## 安装路由，由于现在V6版本是正式版本，则默认安装就是V6版本
  npm install react-router-dom

## 安装配置 antd
  npm install antd
  
## 配置 Webpack
  不建议使用 npm run eject 命令，是不可逆的方式
  建议使用第三方库，比如 @craco/craco (推荐方式)
  
## npm install @craco/craco -D
  问题，需要执行 npm install react-scripts@4.0.0 将react-scripts版本降级为4.x版本，否则报错；
  创建 craco.config.js 文件
  重新配置启动命令 start build test
  
## npm install axios 封装请求库

## npm install mobx mobx-react-lite 安装mobx用来状态管理

## npm install mockjs 安装mock来模拟数据

## npm install history 安装该插件用于在非组件页面实行路由跳转

## npm install react-quill --save 安装富文本编辑器

## npm install source-map-explorer 打包分析插件
   自行添加脚本命令 "analyze":"source-map-explorer 'build/static/js/*.js'"
## webpack 配置 CDN

## 路由懒加载 lazy 函数导入组件
  