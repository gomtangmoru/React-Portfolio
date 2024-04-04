import React, { useEffect } from 'react';
import './App.css';
import lang_en from './/lang/en-US.json';import lang_ko from './/lang/ko-KR.json';


function language_init(){
    let lang = navigator.language || navigator.userLanguage;
    if(lang === 'ko-KR'){
        transKorean()
    }else{
        transEnglish()
    }
}
function transKorean(){
    console.log(lang_ko.title,lang_ko)
    document.title = lang_ko.title
    document.querySelector('.index').innerHTML = lang_ko.index
    document.querySelector('.title').innerHTML = lang_ko.title
}
function transEnglish(){
    console.log(lang_en.title,lang_en)
    document.title = lang_en.title
    document.querySelector('.index').innerHTML = lang_en.index
    document.querySelector('.title').innerHTML = lang_en.title
}

function Index() {
    useEffect(() => {
        document.title = "뿌직";
        language_init()
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
                <p onClick={transKorean}>한국어</p>
                <p>         </p>
                <p onClick={transEnglish}>English</p>
            </div>
            <div className={'name-blur'}></div>

            <div className={'profile-circle-cover'}>
                <div className={'name'}>
                    <h1>JaeYoung Ryu</h1>
                </div>


                <div className={'profile'}></div>
            </div>
            <div className={'longbox'}>
                <h2 className={'title'}>Hd! 👋</h2>
                <p className={'index'}>INDEX TEST <br/> BR TEST</p>
            </div>
        </div>
    );
}

export default Index;
// render(<Desktop1/>, document.getElementById('root'));