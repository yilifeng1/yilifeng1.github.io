/**
 * actions
 * 向前台页面提供消息接口, 从这个文件屏蔽版本差异
 */

import testApi from '../api/test'
var url = 'https://cloud.bmob.cn/78bbeb25ef1fc41d/'

export const queryTest = function () {
  testApi.queryTest(url)
}

export const createTest = function ({commit}, param) {
  testApi.createTest(url, param)
}
