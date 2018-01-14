/**
 * Created by yicui on 2017/12/19.
 * email: 1987497713@qq.com
 */
// 创建一个应用程序对象
// 如果不显式调用，系统也会自动调用
// 也就是说：此文件可以留空
App({
    onLaunch: function(options) {
        console.log('APP onLaunch')
    },
    onShow: function(options) {
        console.log('APP onShow')
    },
    onHide: function() {
        console.log('APP onHide')
    },
    onError: function(msg) {
        console.log(msg)
    },
    globalData: []
});