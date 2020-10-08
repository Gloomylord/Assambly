import React from 'react';
import Card from "../components/Card";

function Main() {
    return (
        <div className="App">
            <Card link={'/laser'} imgUrl={'/laser.png'} title={'Лазер'} imgPos={'left center'}/>
            <Card imgUrl={'/img1.jpg'} title={'волк'}/>
            <Card imgUrl={'/animations.png'} title={'анимации'}/>
        </div>
    );
}

export default Main;
