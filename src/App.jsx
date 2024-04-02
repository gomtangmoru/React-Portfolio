import React, { useEffect } from 'react';
import './App.css';

function Index() {
    useEffect(() => {
        document.title = "뿌직";
    }, []);
    return (
        <div className={'container'}>
{/*            <p>container</p>*/}
            <div className={'banner'}>
                {/*<div className={'header'}>*/}
                {/*    <p>header</p>*/}
                {/*</div>*/}
            </div>
            <div className={'name-blur'}></div>

            <div className={'profile-circle-cover'}>
                <div className={'name'}>
                    <h1>JaeYoung Ryu</h1>
                </div>
                <h2 className={'title'}>Hi! 👋</h2>
                <div className={'profile'}></div>
            </div>
            <div className={'longbox'}></div>
        </div>
    );
}

export default Index;
// render(<Desktop1/>, document.getElementById('root'));