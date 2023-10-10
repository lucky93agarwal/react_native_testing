import axios from 'axios';


export const axiosGetReq = async () => {
    const res = await axios({ 
        url: "https://jsonplaceholder.typicode.com/posts", 
        method: "GET" 
    });
    return res;
}; 