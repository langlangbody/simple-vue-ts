import amplitude from "amplitude-js";
// 监听页面的浏览量 初始化自己配制xxxxxxxxxx 就好 
// 具体的使用方法在点击事件或者某些页面 你想添加的地方添加 amplitude.getInstance().logEvent('关键词字符串')
amplitude.getInstance().init("xxxxxxxxxx");
export default amplitude