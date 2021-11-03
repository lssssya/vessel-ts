import instance from '@/api/httpInstance.js'

// eslint-disable-next-line no-unused-vars
function convertRESTAPI (url, opts) {
  if (!opts || !opts.path) return url

  const pathKeys = Object.keys(opts.path)

  pathKeys.forEach((key) => {
    const r = new RegExp('(:' + key + '|{' + key + '})', 'g')
    url = url.replace(r, opts.path[key])
  })

  return url
}

<% _.forEach(data.mocks, function (mock) { %>/** {{mock.description}} */
function {{$$.convertMethod(mock)}} (opts) {
  return instance({
    method: '{{mock.method}}',
    url: <% if($$.isREST(mock.url)) {%>convertRESTAPI('{{mock.url}}', opts)<%} else {%>'{{mock.url}}'<% } %>,
    opts: opts
  })
}
<% }) %>export {<% _.forEach(data.mocks, function(mock, i){ %>
  {{$$.convertMethod(mock)}}<% if(data.mocks.length - 1 !== i) { %>,<% } %><% }) %>
}
