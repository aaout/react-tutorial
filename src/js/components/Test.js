import React from "react";
import TodoItem from "./TodoItem";
import ContactCard from "./contact";
import jokesData from "./jokesData";
import Joke from "./Joke";

export default class Test extends React.Component {
  render() {
    const firstname = "Ito";
    const lastname = "Eisuke";
    const getTriangle = (bace, hight) => (bace * hight) / 2;
    const jokecomponents = jokesData.map((joke) => {
      return (
        <Joke
          key={joke.id}
          question={joke.question}
          punchiLine={joke.punchLine}
        />
      );
    });
    console.log(jokecomponents);

    return (
      <div className="test">
        <h1>This is {`${firstname} ${lastname}`}.</h1>
        <div className="todo-list">
          <TodoItem title="aaout" />
          <TodoItem title="shizo" />
          <TodoItem title="naineji" />
          <TodoItem title="akisan8j" />
        </div>

        <h3>三角形の面積: {getTriangle(2, 10)}</h3>

        <h3>{jokecomponents}</h3>

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
