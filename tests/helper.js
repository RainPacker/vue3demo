'use strict'

const fs = require('fs')
const path = require('path')
const moduleAlias = require('module-alias')

const join = path.join
const basename = path.basename
const lstatSync = fs.lstatSync
const readdirSync = fs.readdirSync

const cwd = process.cwd()

const isDirectory = function (source) {
  return lstatSync(source).isDirectory()
}

const getDirectories = function (source) {
  return readdirSync(source)
    .map(function (name) {
      return join(source, name)
    })
    .filter(isDirectory)
}

getDirectories(join(cwd, 'src')).forEach(function (dir) {
  const bn = basename(dir)
  moduleAlias.addAlias(`${bn}`, dir)
})

export const BBM_UA =
  'BBM/6.7.8Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1InBrowserDebug AplusKit/1.0.0 Lang/id-ID'
window.navigator.__defineGetter__('userAgent', () => {
  return BBM_UA
})

// (function (document) {
//   var cookies = {}
//   document.__defineGetter__('cookie', function () {
//     var output = []
//     for (var cookieName in cookies) {
//       output.push(cookieName + '=' + cookies[cookieName])
//     }
//     console.log()
//     return output.join(';')
//   })
//   document.__defineSetter__('cookie', function (s) {
//     var indexOfSeparator = s.indexOf('=')
//     var key = s.substr(0, indexOfSeparator)
//     var value = s.substring(indexOfSeparator + 1)
//     cookies[key] = value
//     return key + '=' + value
//   })
//   document.clearCookies = function () {
//     cookies = {}
//   }
// })(document)
