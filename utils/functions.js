import { update } from "@redux/company"
import axios from "axios"

export const signIn = async (email, password, router, dispatch) => {
  if (email !== "" && password !== "") {
    try {
      await axios.post('https://coinrimp-intelli.ygrehu.easypanel.host/login',
        {
          email,
          password
        }).then((res) => {
          if (res.data) {
            window.localStorage.setItem("userInfo", res.data)
            window.localStorage.setItem("isLoggedIn", true)
            router()
            dispatch(update(res.data))
          }
        })
    } catch (error) {
      console.log(error)
    }
  }
}

export const signOut = () => {
  window.localStorage.clear()
  router.push('/login')
}

export const register = async (data, router, dispatch) => {

  try {
    await axios.post('https://coinrimp-intelli.ygrehu.easypanel.host/register', data)
      .then((res) => {
        if (res.data) {
          window.localStorage.setItem("token", res.data.token)
          window.localStorage.setItem("isLoggedIn", true)
          router.push('/')
          dispatch(update(res.data))
        }
      })
  } catch (error) {
    console.log(error)
  }
}