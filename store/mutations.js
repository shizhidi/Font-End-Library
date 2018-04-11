const mutations = {
  increment: state => state.counter++,
  SET_USER: (state, user) => { state.authUser = user }
}

export default mutations
