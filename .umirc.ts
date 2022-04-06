import { defineConfig } from 'umi';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin'
import WebpackChain from 'webpack-chain';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  chainWebpack: (memo: WebpackChain) => {
    memo.plugin('monaco-editor').use(MonacoWebpackPlugin, [{
      languages: ['javascript']
    }])
    return memo
  }
});
