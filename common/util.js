/**
 * 公用方法
 * Created by cuiyi on 2017/12/19.
 * email: 1987497713@qq.com
 */
// 按照对象数组里的某个属性排序
export function sortArray(field) {
    return function(obj1, obj2) {
        return obj1[field] < obj2[field];
    }
}

// 获取总支出
export function getExpendAmt(data) {
    return data.reduce((prev, cur) => +cur.expend + prev, 0);
}

// 获取总收入
export function getIncomeAmt(data) {
    return data.reduce((prev, cur) => +cur.income + prev, 0);
}

// 获取年月
export function getMonthYearDay() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    return {
        year,
        month,
        day
    }
}

// 去掉保留的非当年的数据
export function clearOldData() {
    let planOutInArr = wx.getStorageSync('planOutInArr') || [];
    let flag = 0;
    const { year } = getMonthYearDay();

    planOutInArr.forEach((item) => {
        if (item.year !== year) {
            flag ++;
        }
    });
    planOutInArr.splice(0, flag);

    return planOutInArr;
}

/****
 * 对象数组按 对象的标题 分组
 * 参数 [{title: 'a'}, {title: 'a'}, {title: 'b'}]
 * 返回 { 'a': [{title: 'a'}, {title: 'a'}], 'b': [{title: 'b'}] }
 * @param arr
 * @returns {{}}
 */
export function groupByAttr(arr, attr) {
    let obj = {};
    arr.forEach((item) => {
        const _attr = item[attr];
        obj[_attr] = obj[_attr] || [];
        obj[_attr].push(item);
    });

    return obj;
}
