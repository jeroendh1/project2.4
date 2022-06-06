import axios from 'axios'

const api_base = 'http://localhost:3001'

function Test (){
    return axios.get(api_base + '/test')
}



export default Test