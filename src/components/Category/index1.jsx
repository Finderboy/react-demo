import React, { useState } from 'react';
import Children from './Children'
function CateGory () {
    const [num1, setNum1] = useState(0);
    const addNum1 = () => {
        setNum1(num1 + 1);
    }
    return (
        <div>
            <h1>Category</h1>
            <Children num={num1} addNum={addNum1} />
        </div>
    )
}
export default CateGory;
