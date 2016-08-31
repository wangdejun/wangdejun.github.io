import { connect } from 'react-redux';
import * as components from './components';
import { addTodo, toggleTodo } from './actions';

export const TodoList = connect(
  function mapStateToProps(state){
    console.log('-state-')
    console.log(state);
    return { todos: state };
  },
  function mapDispatchToProps(dispatch) {
    console.log('dispatch');
    console.log(dispatch)
    return {
      addTodo: text => dispatch(addTodo(text)),
      toggleTodo: id => dispatch(toggleTodo(id))
    };
  }
)(components.TodoList);
