import react from "react";
import reactDom from "react-dom";
import faker from "faker";
import CommentDetail from './CommentDetail';
import './index.css';

const App = () => {
    return (
        <div className="ui contanier comments">
            <CommentDetail 
            author = "Sadin" 
            timeAgo = "Today at 4:45PM" 
            text = "ONA JE" 
            avatar ={faker.image.avatar()}
            />

            <CommentDetail 
            author = "Losma" 
            timeAgo = "Today at 2:00AM" 
            text = "UBILILA" 
            avatar ={faker.image.avatar()}
            />

            <CommentDetail 
            author = "Maki" 
            timeAgo = "Yesterday at 5:00PM" 
            text = "MOJE SVE" 
            picture ={faker.image.avatar()}
            />

        </div>
    );
};

reactDom.render(<App />, document.querySelector('#root'))