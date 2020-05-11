import React, { Component } from "react";
import ToDoListItem from "./ToDoList/ToDoListItem";
import ContactCard from "./contact";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      todoList: JSON.parse(localStorage.getItem("todoList")) || [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    // idがtitleのElementを取得
    const titleElement = e.target.elements["title"];
    // idがdescriptionのElementを取得
    const descriptionElement = e.target.elements["description"];
    const userimgElement = e.target.elements["userimg"];
    this.addTodo(
      {
        title: titleElement.value,
        description: descriptionElement.value,
        userimg: userimgElement.value,
      },
      () => {
        // stateの変更後に入力した値を空にする
        titleElement.value = "";
        descriptionElement.value = "";
      }
    );
  }

  render() {
    return (
      <div className="App">
        <form className="App-form" onSubmit={this.handleSubmit}>
          <div>
            <input id="title" placeholder="title" />
            <br />
            <textarea id="description" placeholder="description" />
            <select id="userimg">
              <option value="https://1.bp.blogspot.com/-Na00Q49BuPg/XJB5IFwcscI/AAAAAAABR8g/aWBDjkVwnHU2CVeLX2dgklqWQdz03DU4wCLcBGAs/s400/pistol_pose_man.png">
                man1
              </option>
              <option value="https://1.bp.blogspot.com/-j-XaDf4cKGs/XNE_UrCd9BI/AAAAAAABSwo/NqQmY-KxauQ0EUhaQZCNLlcMBf2iCB8NACLcBGAs/s400/pose_heart_hand_idol_man.png">
                man2
              </option>
              <option value="https://3.bp.blogspot.com/-K6PF-Teckxs/XNE_TZ5IbcI/AAAAAAABSwg/swqAsnSfxpEC5ijyKRKftyHythdo6twNgCLcBGAs/s400/pose_bin_futa_akanai_man.png">
                man3
              </option>
              <option value="https://2.bp.blogspot.com/-WVHihGGDT8Q/XDXcl4F2g6I/AAAAAAABRLM/26oA7xb8nt4NemT1FX2W8_U76cuyJbhZQCLcBGAs/s400/pose_kuyashii_woman.png">
                woman1
              </option>
              <option value="https://1.bp.blogspot.com/-6mOYkTC3UHs/XJB5IoXaBnI/AAAAAAABR8k/dq9o0HEIUVwH82BEDzukgtIq2VQsLau4ACLcBGAs/s400/pistol_pose_woman.png">
                woman2
              </option>
              <option value="https://4.bp.blogspot.com/-kFhG7dQTU-0/XNE_T9wHlsI/AAAAAAABSwk/y5-D42OvEOUFU7CavYAX8ta5REfiMDgAACLcBGAs/s400/pose_bin_futa_akanai_woman.png">
                woman3
              </option>
            </select>
          </div>
          <div>
            <button type="submit">登録</button>
          </div>
        </form>
        <div>
          {/* todoList配列の要素数分ToDoListItemコンポーネントを展開 */}
          {/* {this.state.todoList.map((todo) => (
            <ToDoListItem
              key={todo.title}
              title={todo.title}
              description={todo.description}
              userimg={todo.userimg}
              // クリックされたItemをtodoList stateから削除
              onClick={() => this.removeTodo(todo, console.log("removed!"))}
            />
          ))} */}
        </div>
      </div>
    );
  }
}
