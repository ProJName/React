import './message.style.css';

export const Message = ({ author, text }) => {

    return (
        <div className="headerBasic">
            <div className="message">
            <span>{author}: </span>
            <span>{text} </span>
            </div>
            </div>
    );
};