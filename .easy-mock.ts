module.exports = {
  output: 'src/api', // 产出到项目下的 api 目录，不用手动创建
  host: 'http://10.19.171.20:8899',  // 综合安防easy-mock地址
  template: './mock_config', // 模板地址
  projects: [
    {
      id: '5c8a2fa0b0cf6e2ab87e8415', // 项目id, 请根据具体easyMock项目的id进行填写, 这里只给了示例
      name: 'template' // 该项目下的 API 生成之后会被放到 api/{name} 目录下
    }
  ]
}
