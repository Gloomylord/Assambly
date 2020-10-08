import React, {useCallback} from 'react';
import Laser from "../components/Laser";
import Text from "../components/Laser/Text";
import Title from "../components/Laser/Title";

function LaserMain() {
    let onDragStart = useCallback((e) => e.preventDefault(), []);
    return (
        <div className='laser' onDragStart={onDragStart}>
            <Title/>
            <Laser/>
            <Text/>
        </div>
    );
}

export default LaserMain;
