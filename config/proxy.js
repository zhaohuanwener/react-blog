
const target = 'http://localhost:8888';

const urlList = [
  '/app',
  '/store'
];
const proxyTable = {};

urlList.forEach(function(u) {
  proxyTable[u] = {};
  proxyTable[u].pathRewrite = {};
  proxyTable[u].pathRewrite['^' + u] = u // .replace('*', '');
  proxyTable[u].target = target;
  proxyTable[u].changeOrigin = true;
});

module.exports = {
  '**': target
}
