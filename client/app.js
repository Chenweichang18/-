//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')
var openid = wx.getStorageSync("openid")
if(openid=='')
{
  wx.setStorageSync("job", '游客')
}
App({
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)
    }
})