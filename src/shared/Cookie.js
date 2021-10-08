//cookie get
const getCookie = (name) => {
    let value = ";"+document.cookie;
    let parts = value.split(`; ${name}=`)

    console.log(parts);

    if(parts.length ===2 ){
        return parts.pop().split(";").shift();
    }
};
// cookie Create
const setCookie = (name, value, exp=5) => {
    let date = new Date();

    date.setTime(date.getTime()  + exp*24*60*60*1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
};  
//cookie delete
const deleteCookie = (name) => {
    // let date = new Date();

    document.cookie= name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
};

export {getCookie, setCookie, deleteCookie};