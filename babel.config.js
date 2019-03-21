/**
 * This file is part of vue-boilerplate.
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2018 TINYMINS.
 */
const PresetEnv = require('@babel/preset-env');
const PluginSyntaxDynamicImport = require('@babel/plugin-syntax-dynamic-import');
const BabelPluginTransformVueJsx = require('babel-plugin-transform-vue-jsx'); // requires:  babel-plugin-syntax-jsx

module.exports = {
  presets: [
    PresetEnv,
    // require('babel-preset-flow-vue')
  ],
  plugins: [
    BabelPluginTransformVueJsx,
    PluginSyntaxDynamicImport,
  ],
};
