const axios = require('axios');

const sum = (callback)=>{
    return axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response)=>response.data.userId).catch((err)=>{console.error("error")});
}

//sum(callback);

module.exports = sum;