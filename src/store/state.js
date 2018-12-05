let defaultCity = '湖南'
try{
    if(localStorage.city){
        defaultCity = localStorage.city
    }
} catch (e){}

export default {
    // city: localStorage.city || '上海';     //使用localStorage
    city: defaultCity                         //为了防止某些浏览器不支持或用户设置隐私无痕浏览模式报错，在上方使用加入try catch
}