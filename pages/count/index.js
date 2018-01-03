/**
 * 统计
 * Created by yicui on 2017/12/19.
 * email: 1987497713@qq.com
 */
import { sortArray, getExpendAmt, getIncomeAmt, clearOldData, groupByAttr } from '../../common/util';

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

        let outInData = clearOldData();
        const thisYearIncome = getIncomeAmt(outInData);

        let formatData = data.sort(sortArray("id"));
        const groupDataObj = groupByAttr(formatData, 'title');
        const recombineArr = this.recombine(groupDataObj, thisYearExpend);

        this.setData({
            data: recombineArr,
            thisYearExpend,
            thisYearIncome
        })
    },
    onHide: function() {
        // Do something when page hide.
    },
    onUnload: function() {
        // Do something when page close.
    }
});
