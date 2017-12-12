/**
 * 设置预算
 * Created by yicui on 2017/12/06.
 * email: 1987497713@qq.com
 */
import { getMonthYearDay, clearOldData } from '../../common/util';

Page({
    data: {
        budget: null,
        income: null
    },
    onBudgeChange(e) {
        if (/^0/.test(e.detail.value)) {
            wx.showToast({title: '格式出错了'});
        }
        this.setData({
            budget: e.detail.value
        });
    },
    onIncomeChange(e) {
        if (/^0/.test(e.detail.value)) {
            wx.showToast({title: '格式出错了'});
        }
        this.setData({
            income: e.detail.value
        });
    },
    saveBtn() {
        const { budget, income } = this.data;
        if (!budget || !income) return ;

        let planOutInArr = clearOldData();
        const { year, month } = getMonthYearDay();
        const addOutInObj = {
            year,
            month,
            budget,
            income
        };

        planOutInArr.forEach((item, index) => {
            if ((item.year === year) && (item.month === month)) {
                planOutInArr.splice(index, 1);
            }
        });
        planOutInArr.push(addOutInObj);

        wx.setStorageSync('planOutInArr', planOutInArr);
        wx.navigateBack();
    },
    onLoad(params) {

    },
    onReady: function () {
        // Do something when page ready.
    },
    onShow: function () {

    },
    onHide: function () {
        // Do something when page hide.
    },
    onUnload: function () {
        // Do something when page close.
    }
});