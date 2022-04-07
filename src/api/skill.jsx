import instance from "./instance";

export const getSkill = () => {
    const url = "/skill";
    return instance.get(url)
}