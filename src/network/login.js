import { get, post } from './http';


// export const api1post = p => post('xxxxx', p);

// export const api1getSwiper = p => get('/bili/navList', p);

//注册
export const register = p =>post('/register',p);
//登陆
export const login = p =>post('/login',p);