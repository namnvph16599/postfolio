export const setUserLocalStorage = (data, next) => {
    localStorage.setItem("user", JSON.stringify(data));
    next();
}
export const getUserLocalStorage = () => {
    if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user"));
    } else {
        return
    }
}