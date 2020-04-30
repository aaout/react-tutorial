import React from 'react';

export default function ContactCard(props){
    return(
        <div className="contact-card">
            <h1>{props.contact.name}</h1>
            <img src={props.contact.imgUrl} />
            <h3>phone: {props.contact.phone}</h3>
        </div>
        );
}
