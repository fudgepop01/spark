const MonacoEditorWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new MonacoEditorWebpackPlugin()
    ]
  }
}