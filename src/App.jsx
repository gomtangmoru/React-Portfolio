import React, { useEffect } from 'react';
import './App.css';
import lang_en from './/lang/en-US.json';import lang_ko from './/lang/ko-KR.json';


/*function language_init(){
    let lang = navigator.language || navigator.userLanguage;
    if(lang === 'ko-KR'){
        transKorean()
    }else{
        return 'en';
    }
}*/
function transKorean(){
    console.log(lang_ko,lang_en)
}


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
            <div className={'navbar'}>
                <a onClick={transKorean}>한국어</a>
            </div>
            <div className={'name-blur'}></div>

            <div className={'profile-circle-cover'}>
                <div className={'name'}>
                    <h1>JaeYoung Ryu</h1>
                </div>


                <div className={'profile'}></div>
            </div>
            <div className={'longbox'}>
                <h2 className={'title'}>Hi! 👋</h2>
                <p className={'index'}>INDEX TEST <br/> BR TEST</p>
            </div>
        </div>
    );
}

export default Index;
// render(<Desktop1/>, document.getElementById('root'));