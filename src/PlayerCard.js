import React from 'react';
const rock = "https://i.imgur.com/pgjyhIZ.png";
const paper = "https://i.imgur.com/LghSkIw.png";
const scissors = "https://i.imgur.com/2gsdqvR.png";

const PlayerCard = (props) => {
    const sign=props.sign;
    let image="";

    if(sign==='rock') {image=rock;}
    else if(sign==='paper') {image=paper;}
    else {image=scissors;}

    return (
        // <div className="player-card">{props.sign}</div>
        <div className="player-card">
            <img src={image}/>
        </div>
    );
};

export default PlayerCard;