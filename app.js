/**
 * Created by yicui on 2017/11/19.
 * email: 1987497713@qq.com
 */
// 创建一个应用程序对象
// 如果不显式调用，系统也会自动调用
// 也就是说：此文件可以留空
App({
    onLaunch: function(options) {
        // Do something initial when launch.
    },
    onShow: function(options) {
        // Do something when show.
    },
    onHide: function() {
        // Do something when hide.
    },
    onError: function(msg) {
        console.log(msg)
    },
    globalData: []
});