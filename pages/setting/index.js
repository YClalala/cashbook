/**
 * 设置预算
 * Created by yicui on 2017/12/06.
 * email: 1987497713@qq.com
 */
import { getMonthYear } from '../../common/util';

Page({
    data: {
        budget: null,
        income: null
    },
    onBudgeChange(e) {
        this.setData({
            budget: e.detail.value
        });
    },
    onIncomeChange(e) {
        this.setData({
            income: e.detail.value
        });
    },
    saveBtn() {
        const { budget, income } = this.data;
        const { year, month } = getMonthYear();
        if (!budget || !income) return ;

        const curMonthYear = `${year}-${month}`;
        console.log(getMonthYear().year)

    },
    onLoad(params) {

    },
    onReady: function () {
        // Do something when page ready.
    },
    onShow: function () {
        // Do something when page show.
    },
    onHide: function () {
        // Do something when page hide.
    },
    onUnload: function () {
        // Do something when page close.
    }
});