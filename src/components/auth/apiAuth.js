
//register user
export const signup = ({name, email, password}) =>{
    console.log(JSON.stringify({name, email, password}))
    return fetch("https://atomichabitsapi.herokuapp.com/api/users/register",{
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({name, email, password})
    })
    .then((response) => response.json())
    .then((data) => {
        return data
    })
    .catch((errors) => {
        console.log(errors);
    });
}


//signin user
export const signin = (user) => {
    // console.log(user);
    return fetch(`https://atomichabitsapi.herokuapp.com/api/users/login`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin':"*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        },
        body: JSON.stringify(user)
    })
    .then((response) => response.json())
    .then((data) => {
        return data
    })
    .catch((err) => {
        console.log(err);
    });
};

export const authenticate = (data, next) =>{
    if(typeof window !== 'undefined'){
        localStorage.setItem("token", JSON.stringify(data));
        next();
    }
}

//signout
export const signout = (next) =>{
    if(typeof window !== 'undefined'){
        localStorage.removeItem("token");
        next();
    }
    return fetch(`http://localhost/api/signin`, {
        method: "GET"
    })
    .then((response)=>{
        console.log("signout", response);
    })
    .catch(err=> console.log(err))
}


//to check if authenticated
export const isAuthenticated = () =>{
    if(typeof window == 'undefined'){
        return false;
    }
    if(localStorage.getItem("token")){
        return JSON.parse(localStorage.getItem("token"));
    }
    return false;

}
