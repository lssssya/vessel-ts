exports.convertMethod = function (mock) {
  // fix issue #3
  const suffix = mock.method.replace(mock.method[0], mock.method[0].toUpperCase())
  if (/\/v\d+.?\d*\//.test(mock.url)) {
    return mock.url.split(/\/v\d+.?\d*\//)[1].replace(/[{}]/g, '').replace(/(\/\w)/g, firstLetter => firstLetter.replace('/', '').toUpperCase()) + suffix
  } else {
    return mock.url.replace(/\//, '').replace(/[{}]/g, '').replace(/(\/\w)/g, firstLetter => firstLetter.replace('/', '').toUpperCase()) + suffix
  }
}

exports.joinUrl = function () {
  // https://www.easy-mock.com//mock/.... => https://www.easy-mock.com/mock/....
  var url = [].slice.call(arguments, 0).join('/')
  url = url.replace(/:\//g, '://')
  url = url.replace(/([^:\s\%\3\A])\/+/g, '$1/')
  return url
}

exports.isREST = function (url) {
  return /(:|{|})/.test(url)
}
