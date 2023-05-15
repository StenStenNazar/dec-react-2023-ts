const baseURL = 'http://owu.linkpc.net/carsAPI/v2'

const urls = {
    cars: '/cars',
    auth:{
        users:'/users',
        auth: '/auth',
        refresh:'/auth/refresh',
        me:'auth/me'
    }
}

export {
    urls,
    baseURL
}