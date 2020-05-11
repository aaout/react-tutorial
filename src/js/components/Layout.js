import React from "react";
import Header from "./Header";
import Fooder from "./Fooder";
import Test from "./Test";
import ChangeState from "./ChangeState";
import CheckBox from "./CheckBox";
import App from "./LogButton/App";
import LogForm from "./Form/LogForm";
import ToDoListItem from "./ToDoList/ToDoListItem";

export default class Layout extends React.Component {
  // ToDoListをstateに定義、初期値はlocalStorageから取得または []
  constructor() {
    super();
    this.state = {
      todoList: JSON.parse(localStorage.getItem("todoList")) || [],
    };
  }

  // todoList itemの追加
  addTodo(item, callBack) {
    // todoList stateに追加
    this.setState(
      {
        todoList: this.state.todoList.concat(item),
      },
      () => {
        // localStorageにtodoList stateを保存
        localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
        // callBack関数が引数に渡されていた場合に実行
        callBack && callBack();
      }
    );
  }

  // todoListからitemを削除
  removeTodo(item, callBack) {
    this.setState(
      {
        todoList: this.state.todoList.filter((x) => x !== item),
      },
      () => {
        // localStorageにtodoList stateを保存
        localStorage.setItem("todoList", JSON.stringify(this.state.todoList));

        // callBack関数が引数に渡されていた場合に実行
        callBack && callBack();
      }
    );
  }

  render() {
    return (
      <div>
        <Test />
      </div>
    );
  }
}
