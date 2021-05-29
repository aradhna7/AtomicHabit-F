

//get all post
export const getAllPost = (token) =>{
    console.log(token)
    return fetch("https://atomichabitsapi.herokuapp.com/api/feed",{
        method: "GET",
        headers: {
            'x-auth-token': JSON.parse(token)
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        return data
    })
    .catch((errors) => {
        console.log(errors);
    });
}


//get all post
export const getActivity = () =>{
    return fetch("https://atomichabitsapi.herokuapp.com/api/activity",{
        method: "GET",
        headers: {
            'x-auth-token': JSON.parse(localStorage.getItem("token"))
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        return data
    })
    .catch((errors) => {
        console.log(errors);
    });
}


//get user by id
export const getUserById = (id) =>{
    return fetch("https://atomichabitsapi.herokuapp.com/api/users/${id}",{
        method: "GET",
        headers: {
            'x-auth-token': JSON.parse(localStorage.getItem("token"))
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        return data
    })
    .catch((errors) => {
        console.log(errors);
    });
}



//create a post
export const createPost = ({title, image}) =>{
    return fetch("https://atomichabitsapi.herokuapp.com/api/posts",{
        method: "POST",
        headers: {
            'Content-type': 'application/json',
            'x-auth-token': JSON.parse(localStorage.getItem("token"))            
        },
        body: JSON.stringify({title, image})
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        return data
    })
    .catch((errors) => {
        console.log(errors);
    });
}

