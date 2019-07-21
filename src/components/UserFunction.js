import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
      firstname: newUser.firstname,
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
      confirmPassword: newUser.confirmPassword,
      mobileNumber: newUser.mobileNumber,
    })
    .then(res => {
      console.log('registered!')
    })
}


export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(res => {
      localStorage.setItem('usertoken', res.data)
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
}

