import react from "react";
import reactDom from "react-dom";
import faker from "faker";

import './index.css';

const App = () => {
    console.log(faker)
    return (
        <div className="ui contanier comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.image()} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sadin
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
        </div>
    );
};

reactDom.render(<App />, document.querySelector('#root'))