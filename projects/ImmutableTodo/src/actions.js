// src/actions.js
//ES6写法
// const uid = () => Math.random().toString(34).slice(2);

const uid = function(){
    return Math.random().toString(34).slice(2);
}
export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uid(),
      isDone: false,
      text: text
    }
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    isDone:true,
    payload: text
  }
}
