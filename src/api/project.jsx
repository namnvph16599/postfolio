import instance from "./instance";

import instance from "./instance";

export const getAllProjects = () => {
    const url = "/project";
    return instance.get(url)
}

// export const post = (data) => {
//     const url = "/resume";
//     return instance.post(url, data)
// }

// export const removeResume = (id) => {
//     const url = `/resume/${id}`;
//     return instance.delete(url)
// }

// export const putResume = (data) => {
//     const url = `/resume/${data.id}`;
//     return instance.put(url, data)
// }