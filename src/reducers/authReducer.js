export default (state ={}, action) => {
  switch (action.type) {
    case 'LOGIN': 
    return {
      uid: action.uid
    }
    case 'LOGOUT':
      return {}
    default: 
      console.log('thats not login or logout!');
      return state;
  }
}