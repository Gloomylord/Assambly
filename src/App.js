import React from 'react';
import './App.css';
import Card from "./components/Card";

function App() {
    return (
        <div className="App">
            <Card url={'/laser.png'} title={'Лазер'} imgPos={'left center'}/>
            <Card url={'/img1.jpg'} title={'волк'}/>
            <Card url={'/animations.png'} title={'анимации'}/>
        </div>
    );
}

export default App;
