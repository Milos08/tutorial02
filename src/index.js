import react from "react";
import reactDom from "react-dom";
import faker from "faker";
import CommentDetail from './CommentDetail';
import './index.css';
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui contanier comments">
            <ApprovalCard> 
                <CommentDetail 
                author = "Sadin" 
                timeAgo = "Today at 4:45PM" 
                text = "ONA JE" 
                avatar ={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author = "Losma" 
                timeAgo = "Today at 2:00AM" 
                text = "UBILA" 
                avatar ={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author = "Maki" 
                timeAgo = "Yesterday at 5:00PM" 
                text = "MOJE SVE" 
                picture ={faker.image.avatar()}
                />
            </ApprovalCard>

        </div>
    );
};

reactDom.render(<App />, document.querySelector('#root'))