import React from "react";
import "./Main.css";

class Main extends React.Component {
  render() {
    return (
      <div className="main-content">
        <div className="container">
          <header>
            <h1>Article 1</h1>
            <h2>Article 2</h2>
          </header>
          <p>
            <i>
              <strong>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus totam voluptas consectetur! Incidunt vitae corrupti,
                tempora fugiat aliquid unde aut qui repellat, quam aperiam
                velit. Ex cum adipisci perspiciatis est.
              </strong>
            </i>
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
            nisi neque at expedita facere sapiente, nostrum dolore autem veniam
            similique exercitationem labore possimus aut ut mollitia. Fugit
            quaerat vitae officia!
          </p>
        </div>
      </div>
    );
  }
}
export default Main;
