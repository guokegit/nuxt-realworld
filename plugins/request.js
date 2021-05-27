import axios  from 'axios';

export const request = axios.create({
    baseURL: 'https://conduit.productionready.io',
})

// 默认导出插件函数， 可以拿到vue实例
export default ({store}) => {
    // 请求拦截器
    request.interceptors.request.use(req => {
        const { user } = store.state
        if(user && user.token){
            req.headers.authorization = `Token ${user.token}`
        }
        return req;
    }, err => {
        console.dir(err)
    })
}


