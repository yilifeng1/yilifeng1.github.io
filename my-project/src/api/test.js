import Vue from 'vue'

export default {
  queryTest (url) {
    return Vue.http.get(url + 'query_test_info')
      .then(function (response) {
        console.log(response)
      })
  },

  createTest (url, param) {
    return Vue.http.post(url + 'create_test_info', {'name': param.username}, {emulateJSON: true})
      .then(function (response) {
        console.log(response)
      })
  }
}
