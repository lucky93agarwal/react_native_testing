import axios from 'axios';


export const axiosGetReq = async () => {
    const res = await axios({ 
        url: "https://jsonplaceholder.typicode.com/posts/1", 
        method: "GET" 
    });
    return res;
}; 