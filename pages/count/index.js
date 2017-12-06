/**
 * 统计
 * Created by yicui on 2017/11/19.
 * email: 1987497713@qq.com
 */
import { sortArray, getExpendAmt } from '../../common/util';

Page({
    data: {
        thisYearExpend: 0, // 本年支出
        thisYearIncome: 0, // 本年收入
        data: []
    },
    onLoad: function(options) {
        // Do some initialize when page load.
    },
    onReady: function() {
        // Do something when page ready.
    },
    /****
     * 对象数组按 对象的标题 分组
     * 参数 [{title: 'a'}, {title: 'a'}, {title: 'b'}]
     * 返回 { 'a': [{title: 'a'}, {title: 'a'}], 'b': [{title: 'b'}] }
     * @param arr
     * @returns {{}}
     */
    groupByAttr(arr) {
        let obj = {};
        arr.forEach((item) => {
            obj[item.title] = obj[item.title] || [];
            obj[item.title].push(item);
        });

        return obj;
    },
    /****
     * 重组对象数组
     * 参数 { 'a': [{title: 'a'}, {title: 'a'}], 'b': [{title: 'b'}] }
     * 返回 [{title: 'a', spendSum: ''}, {title: 'b', spendSum: ''}]
     * @param obj
     * @returns {Array}
     */
    recombine(obj, thisYearExpend) {
        let arr = [];
        Object.keys(obj).forEach((key) => {
            arr.push({
                title: key,
                expendSum: getExpendAmt(obj[key]),
                percent: Math.ceil(getExpendAmt(obj[key])/thisYearExpend*100)
            });
        });

        return arr;
    },
    onShow() {
        let data = wx.getStorageSync('accountArr');
        const thisYearExpend = getExpendAmt(data);
        let formatData = data.sort(sortArray("id"));
        const groupDataObj = this.groupByAttr(formatData);
        const recombineArr = this.recombine(groupDataObj, thisYearExpend);

        this.setData({
            data: recombineArr,
            thisYearExpend
        })
    },
    onHide: function() {
        // Do something when page hide.
    },
    onUnload: function() {
        // Do something when page close.
    }
})
