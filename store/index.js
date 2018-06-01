export const SET_USER = 'SET_USER'

export const state = () => ({
  userInfo: {
    user_id: `2994`,
    user_name: `k`,
    user_mobile: `18356783057`,
    user_type: `1`
  },
  star: ''
});


export const mutations = {
  [SET_USER] (state, userInfo) {
    state.userInfo = userInfo
  },
  setStars (state, star) {
    state.star = star
  }
}

