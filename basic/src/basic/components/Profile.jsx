import React from "react";
import Avatar from "./Avatar";

export default function Profile(props) {
    return (
      <div className="profile">
        <Avatar image={props.image} isNew={props.isNew}/>
        <h1>{props.name}</h1>
        <p>{props.title}</p>
      </div>
    );
}
