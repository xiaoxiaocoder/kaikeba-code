

export default function visibility(state=false, action) {
  switch(action.type) {
    case 'SHOW':
      return state = true
    case 'HIDDEN':
      return state = false;
    default:
      return state;
  }
}