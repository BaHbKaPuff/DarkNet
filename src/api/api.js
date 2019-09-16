import * as axios from "axios";

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
  .then(response => response.data)
}

export const getUserProfile = (userId) => {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
  .then(response => response.data)
}

export const getIsLogin = () => {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    withCredentials: true,
    headers: {
      "API-KEY": "fab78205-f96c-4176-b831-dffbda8fbbc4"
    }
  })
  .then(response => response.data)
}

