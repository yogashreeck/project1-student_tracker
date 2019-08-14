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
      console.log('login')
      localStorage.setItem('usertoken', res.data)
      return res.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const studentProfile = profileuser => {
  return axios
    .post('users/studentProfile', {
      studentname: profileuser.studentname,
      address: profileuser.address,
      email: profileuser.email,
      mobileNumber: profileuser.mobileNumber,
      course: profileuser.course
    })
    .catch(err => {
      console.log(err)
    })
}


