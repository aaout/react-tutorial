import React, { Component } from "react";
import PostItem from "./PostItem";

export default class Post extends Component {
  constructor() {
    super();
    this.state = {
      todoList: JSON.parse(localStorage.getItem("todoList")) || [],
      postData: JSON.parse(localStorage.getItem("postData")) || [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addTodo(item, callBack) {
    // todoList stateに追加
    this.setState(
      {
        postData: this.state.postData.concat(item),
      },
      () => {
        // localStorageにtodoList stateを保存
        localStorage.setItem("postData", JSON.stringify(this.state.postData));
        // callBack関数が引数に渡されていた場合に実行
        callBack && callBack();
      }
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    // idがtitleのElementを取得
    const revewerElement = e.target.elements["revewer"];
    // idがdescriptionのElementを取得
    const reveweeElement = e.target.elements["revewee"];
    const revewElement = e.target.elements["revew"];
    this.addTodo(
      {
        revewer: revewerElement.value,
        revewee: reveweeElement.value,
        revew: revewElement.value,
      },
      () => {
        // stateの変更後に入力した値を空にする
        revewElement.value = "";
      }
    );
  }

  render() {
    const username = this.state.todoList.map((item) => item.title);
    console.log(username);

    return (
      <div className="App">
        <form className="App-form" onSubmit={this.handleSubmit}>
          <select id="revewer">
            {username.map((name) => (
              <option key={name}>{name}</option>
            ))}
          </select>
          <select id="revewee">
            {username.map((name) => (
              <option key={name}>{name}</option>
            ))}
          </select>
          <textarea
            id="revew"
            placeholder="Praise his or her act"
            rows="4"
            cols="40"
          />
          <button type="submit">投稿</button>
        </form>
        {this.state.postData.map((data) => (
          <PostItem
            key={data.revew}
            revewer={data.revewer}
            revewee={data.revewee}
            revew={data.revew}
          />
        ))}
      </div>
    );
  }
}
