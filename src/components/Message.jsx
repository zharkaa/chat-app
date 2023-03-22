import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400s"
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hey, how are you?</p>
        <img
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=400s"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
