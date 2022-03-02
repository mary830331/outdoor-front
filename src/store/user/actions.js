import { api } from '../../boot/axios'
import router from '../../router/routes'
import { Notify } from 'quasar'

export const login = async ({ commit }, form) => {
  try {
    const { data } = await api.post('/users/login', form)
    commit('login', data.result)
    Notify.create({
      message: '登入成功',
      icon: 'check_circle',
      color: 'positive'
    })
    router.push('/')
  } catch (error) {
    Notify.create({
      icon: 'error',
      message: '登入失敗',
      color: 'info '
    })
  }
}

export const logout = async ({ commit, state }) => {
  try {
    await api.delete('/users/logout', {
      headers: {
        authorization: 'Bearer ' + state.token
      }
    })
    commit('logout')
    router.push('/')
    Notify.create({
      message: '成功登出',
      icon: 'check_circle',
      color: 'positive'
    })
  } catch (error) {
    Notify.create({
      icon: 'error',
      message: '失敗',
      color: 'info '
    })
  }
}

export const getInfo = async ({ commit, state }) => {
  if (state.token.length === 0) return
  try {
    const { data } = await api.get('/users/me', {
      headers: {
        authorization: 'Bearer ' + state.token
      }
    })
    commit('getInfo', data.result)
  } catch (error) {
    console.log(error)
    commit('logout')
  }
}

export const addGroup = async ({ commit, state }, data) => {
  if (state.token.length === 0) {
    Notify.create({
      icon: 'error',
      message: '加入失敗  請先登錄!',
      color: 'info '
    })
    router.push('/login')
    return
  }
  if (data.quantity < 1) {
    Notify.create({
      icon: 'error',
      message: '以參加此活動',
      color: 'info '
    })
    return
  }
  try {
    const { data: resData } = await api.post('/users/me/addgroup', data, {
      headers: {
        authorization: 'Bearer ' + state.token
      }
    })
    commit('updateGroup', resData.result)
    Notify.create({
      icon: 'check_circle',
      message: '參加成功',
      color: 'positive  '
    })
  } catch (error) {
    Notify.create({
      icon: 'error',
      message: '參加失敗',
      color: 'info '
    })
  }
}
