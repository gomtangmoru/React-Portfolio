import React, { useEffect } from 'react';
import './App.css';

function UwU() {
    useEffect(() => {
        document.title = "뿌직";
    }, []);
    return (
            <div className={'container'}>
                <p>container</p>
                <div className={'header'}>
                    <p>header</p>
                </div>
            </div>
    );
};

export default UwU;
// render(<Desktop1/>, document.getElementById('root'));