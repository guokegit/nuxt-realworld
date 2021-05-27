import cookieParser from 'cookieparser'
export default {
    state(){
        return {
            user: null
        }
    },
    
    mutations: {
        setUser(state, poyload){
            state.user = poyload
        }
    },
    
    actions: {
        // 特殊action， 仅在服务端渲染时自动调用
        nuxtServerInit({commit}, {req}){
            if(req.headers.cookie){
                try {
                    const cookieObj = cookieParser.parse(req.headers.cookie)
                    const user = JSON.parse(cookieObj.user)
                    commit('setUser', user)
                }catch (err){
                    console.dir(err)
                }
                
            }
        }
    }
}
