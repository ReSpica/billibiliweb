import { get, post,upload} from './http';


// export const api1post = p => post('xxxxx', p);

// export const api1getSwiper = p => get('/bili/navList', p);

//个人信息
const id = localStorage.getItem('id');
export const userinfo = p =>get('/user/'+id,p);


//文件上传
export const upload1 = p =>upload('/upload',p);

//更新用户信息
export const userupdate = p =>post('/update/'+id,p);


