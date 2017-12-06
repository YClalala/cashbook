/**
 * 首页
 * Created by yicui on 2017/11/19.
 * email: 1987497713@qq.com
 */
import { sortArray, getExpendAmt } from '../../common/util';

Page({
    data: {
        budget: 20000,
        curExpendSum: 0, // 当月支出
        curIncomeSum: 0, // 当月收入
        classify: wx.getStorageSync('accountArr') || []
    },
    modifyItem(e) {
        const data = e.currentTarget.dataset.item;
        const {date, expend, id} = data;
        wx.navigateTo({
            url: `/pages/add/index?index=${id}&date=${date}&amt=${expend}`
        })
    },
    goSetting() {
        wx.navigateTo({
            url: '/pages/setting/index'
        })
    },
    onLoad: function (options) {

    },
    onReady: function () {
        // Do something when page ready.
    },
    setCurDate(date) {
        this.curYearMonthDay = date;
    },
    onShow() {
        let data = wx.getStorageSync('accountArr');
        let formatData = data.sort(sortArray("date"));
        this.curYearMonthDay = null;

        formatData.forEach((item) => {
            if (item.date !== this.curYearMonthDay) {
                this.setCurDate(item.date);
                item.isShowTitle = true;
            } else {
                item.isShowTitle = false;
            }
        });

        const curExpendSum = getExpendAmt(formatData);

        this.setData({
            classify: formatData,
            curExpendSum
        })
    },
    onHide: function () {
        // Do something when page hide.
    }
});