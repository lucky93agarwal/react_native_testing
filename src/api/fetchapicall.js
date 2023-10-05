const getCall = async data => {
    axios.get('');
    // api call
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const response = await fetch(url, {
        method: "GET",
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
    const resJson = await response.json();
    return resJson;
}