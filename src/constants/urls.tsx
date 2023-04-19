const holderBaseUrl = 'https://jsonplaceholder.typicode.com'
const carBaseUrl = 'http://owu.linkpc.net/carsAPI/v1/'

const users = '/users'
const comments = '/comments'
const cars = '/cars'


const urls = {
    carApi: {
        cars,
        byId: (id: number): string => `${cars}/${id}`
    },
    holderApi: {
        users,
        comments
    }
}

export {
    urls,
    holderBaseUrl,
    carBaseUrl
}