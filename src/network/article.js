import { get, post,get1} from './http';


// export const api1post = p => post('xxxxx', p);

// export const api1getSwiper = p => get('/bili/navList', p);

//个人信息
const id = localStorage.getItem('id');
export const userinfo = p =>get('/user/'+id,p);



//按照分类获取文章
export const article = (j,p)=>get1('/article/',j,p)


