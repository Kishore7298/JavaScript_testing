const axios = require('axios');

const sum = (callback)=>{
    return new Promise((resolve, reject)=>{
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response)=>resolve(response.data.userId)).catch((err)=>reject("error"))
    })
}

module.exports = sum;