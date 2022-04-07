import instance from "./instance";

export const getResume = () => {
    const url = "/resume";
    return instance.get(url)
}

export const postResume = (data) => {
    const url = "/resume";
    return instance.post(url, data)
}

export const removeResume = (id) => {
    const url = `/resume/${id}`;
    return instance.delete(url)
}

export const putResume = (data) => {
    const url = `/resume/${data.id}`;
    return instance.put(url, data)
}