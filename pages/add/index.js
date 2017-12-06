/**
 * 添加新账单页
 * Created by yicui on 2017/12/03.
 * email: 1987497713@qq.com
 */
import info from '../../common/const';
info.classify.unshift({ title: '请选择' });
Page({
    data: {
        classifyArr: info.classify.map((item) => {
            return item.title;
        }),
        index: 0,
        date: '请选择',
        amt: null,
        saveBtnClick: false
    },
    onAmountChange(e) {
        const amt = e.detail.value;
        if (/^0/.test(amt)) {
            wx.showToast({title: '格式出错了'});
        }

        this.setData({
            amt
        });
    },
    onClassifyChange(e) {
        this.setData({
            index: e.detail.value
        })
    },
    onDateChange(e) {
        this.setData({
            date: e.detail.value
        })
    },
    saveBtn() {
        const { date, amt, index } = this.data;

        if (index === 0 && date === '请选择' && !amt) return;

        const accountObj = {
            date,
            expend: amt,
            id: index,
            title: info.classify[index].title
        };
        const accountArr = wx.getStorageSync('accountArr') || [];
        accountArr.push(accountObj);
        wx.setStorageSync('accountArr', accountArr);
        wx.navigateBack();
    },
    onLoad(params) {
        const {date, amt, index} = params;
        this.setData({
            index,
            date,
            amt
        });
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