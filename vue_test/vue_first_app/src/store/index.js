/**
 * 导入需要的库
 */
import { Promise } from 'es6-promise'
import $ from '../lib/jquery-2.2.3.min.js'

const store = {};
export default store

store.getList = ( count ) =>{
    return new Promise((resolve, reject) => {
        $.get('/getlist', data => {
            if(data.lists.length<=0){
                reject('数据为空！！');
            }else{
                resolve(data.lists.slice(0,count));
            }
        });
    });
}