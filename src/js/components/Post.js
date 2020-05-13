import React, { Component } from "react";
import PostItem from "./PostItem";

export default class Post extends Component {
  constructor() {
    super();
    this.state = {
      userProps: JSON.parse(localStorage.getItem("userProps")) || [],
      postData: JSON.parse(localStorage.getItem("postData")) || [],
      revewerImg: JSON.parse(localStorage.getItem("revewerImg")) || [],
      revewerIndex: JSON.parse(localStorage.getItem("revewerIndex")) || [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  addTodo(item, callBack) {
    // userProps stateに追加
    this.setState(
      {
        postData: this.state.postData.concat(item),
      },
      () => {
        // localStorageにuserProps stateを保存
        localStorage.setItem("postData", JSON.stringify(this.state.postData));
        // callBack関数が引数に渡されていた場合に実行
        callBack && callBack();
      }
    );
  }
  // addrevewerImg(item, callBack) {
  //   // todoList stateに追加
  //   this.setState(
  //     {
  //       revewerImg: this.state.revewerImg.concat(item),
  //     },
  //     () => {
  //       // localStorageにuserProps stateを保存
  //       localStorage.setItem(
  //         "revewerImg",
  //         JSON.stringify(this.state.revewerImg)
  //       );
  //       // callBack関数が引数に渡されていた場合に実行
  //       callBack && callBack();
  //     }
  //   );
  // }

  handleSubmit(e) {
    e.preventDefault();
    // 各idのElementを取得
    const revewerElement = e.target.elements["revewer"];
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

  handleSelect(e) {
    e.preventDefault();
    const input = e.target.value;
    const checkList = this.state.userProps.map((e) => e.title);
    const userimg = this.state.userProps.map((item) => item.userimg);
    for (let index = 0; index < checkList.length; index++) {
      // const element = array[index];
      if (checkList[index] === input) {
        const inputimg = this.state.userProps[index];
        // console.log();
        this.setState(
          {
            revewerImg: userimg[index],
            revewerIndex: index,
          },
          () => {
            // localStorageにuserProps stateを保存
            localStorage.setItem(
              "revewerImg",
              JSON.stringify(this.state.revewerImg)
            );
            localStorage.setItem(
              "revewerIndex",
              JSON.stringify(this.state.revewerIndex)
            );
          }
        );
      }
    }
  }

  render() {
    const username = this.state.userProps.map((item) => item.title);
    console.log(username);

    return (
      <div className="App">
        <form className="App-form" onSubmit={this.handleSubmit}>
          <h3>Revewer</h3>
          <select id="revewer" onChange={this.handleSelect}>
            {username.map((name) => (
              <option key={name}>{name}</option>
            ))}
          </select>
          <h4>
            Good Point {this.state.userProps[this.state.revewerIndex].goodPoint}
          </h4>
          <img src={this.state.revewerImg} width="100" height="100" />
          <br />

          <h3>Revewee</h3>
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
          <button type="submit">Post</button>
        </form>
        {this.state.postData.reverse().map((data) => (
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
