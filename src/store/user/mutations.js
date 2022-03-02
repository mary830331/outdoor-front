// state = user module 的 state
// this.state = vuex root state
// this.state.module名 = 其他 module 的 state
export const login = (state, data) => {
  state.token = data.token
  state.account = data.account
  state.role = data.role
  state.email = data.email
  state.age = data.age
  state.name = data.name
  state.addgroup = data.addgroup
  state.image = data.image
}

export const logout = (state, data) => {
  state.token = ''
  state.account = ''
  state.role = 0
  state.email = ''
  state.age = 0
  state.name = ''
  state.addgroup = 0
}

export const getInfo = (state, data) => {
  // 少token
  state.account = data.account
  state.role = data.role
  state.email = data.email
  state.age = data.age
  state.name = data.name
  state.addgroup = data.addgroup
  state._id = data._id
  state.image = data.image
}

export const extend = (state, data) => {
  state.token = data
}

export const updateGroup = (state, data) => {
  state.addgroup = data
}

// export const updateuserInfo = (state, data) => {
//   state.age = data.age
//   state.name = data.name
//   state.addgroup = data.addgroup
//   state.news = data.news
//   state.description = data.description
//   state.category01 = data.category01
//   state.category02 = data.category02
//   state.category03 = data.category03
// }
