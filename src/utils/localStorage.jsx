export const setUserLocalStorage = (data, next) => {
    localStorage.setItem("user", JSON.stringify(data));
    next();
}