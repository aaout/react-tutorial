import React from "react";
import TodoItem from "./TodoItem";
import ContactCard from "./contact";

export default class Test extends React.Component {
  render() {
    const firstname = "Ito";
    const lastname = "Eisuke";

    return (
      <div className="test">
        <h1>This is {`${firstname} ${lastname}`}.</h1>
        <div className="todo-list">
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>

        <div className="contact">
          <ContactCard
            contact={{
              name: "aaout",
              imgUrl: "https://placekitten.com/200/138",
              phone: "080-3841-6317",
            }}
          />
          <ContactCard
            contact={{
              name: "naineji",
              imgUrl: "https://placekitten.com/200/139",
              phone: "0749-27-2427",
            }}
          />
          <ContactCard
            contact={{
              name: "shizo",
              imgUrl: "https://placekitten.com/200/140",
              phone: "090-1719-3531",
            }}
          />
        </div>
      </div>
    );
  }
}
