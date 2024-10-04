import React from "react";
import star from "../images/star.png";
import "./card.css"

export default function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.openSpots === "Online") {
        badgeText = "ONLINE";
    }

    // Import the cover image if needed
    const coverImg = require(`../images/${props.coverImg}`);

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={coverImg} className="card--image" alt={props.title} />
            <div className="card--stats">
                <img src={star} className="card--star" alt="Star rating" />
                <span>{props.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.stats.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    );
}
