export default (state={}, action) => {
  switch(action.type) {
    case 'EXAMPLE_REDUCER':
      console.log('Fired EXAMPLE_REDUCER');
      return state;
    default:
      return state;
  }
};