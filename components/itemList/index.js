/**
 * Created by cuiyi on 2018/1/9.
 */
Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    properties: {
        title: {
            type: String,
            value: 'demo'
        },
        desc: {
            type: String,
            value: 'test'
        }
    },
    data: {
        // 这里是一些组件内部数据
        someData: {}
    },
    methods: {
        // 这里是一个自定义方法
        test: function(e) {
            console.log(e);
            const myEventDetail = {}; // detail对象，提供给事件监听函数
            const myEventOption = {}; // 触发事件的选项
            this.triggerEvent('test', myEventDetail, myEventOption)
        }
    }
});