import apiInstance from "../apiInstance"

// registeration
export const registerauth = async (payload) => {
    const response = await apiInstance.post();
    return response
}

// login

export const loginauth = async (payload) => {
    const response = await apiInstance.post();
    return response;
}

// get Profile
export const getprofile = async () => {
    const response = await apiInstance.get();
    return response;
}
//
