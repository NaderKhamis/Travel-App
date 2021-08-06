// POST DATA TO EXPRESS SERVER
export const postData = async(route = '', data = {}) => {

    const response = await fetch(`http://localhost:8080${route}`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    try {
        const newData = await response.json();
        return newData;

    } catch (error) {
        console.log(error);
    }
}

// GET DATA FROM EXPRESS SERVER
export const getData = async(route) => { // 

    const request = await fetch(`http://localhost:8080${route}`);

    try {
        const newData = await request.json();
        return newData;

    } catch (error) {
        console.log(error);
    }
}