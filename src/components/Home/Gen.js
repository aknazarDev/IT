import React from 'react';
import Hero from "./Hero";
import Articles from "./Articles";
import Subscribe from "./Subscribe";
import Questions from "./Questions";
import Submit from "./Submit";

const Gen = () => {
    window.scroll(0,0)
    return (
        <>
            <Hero/>
            <Articles/>
            <Subscribe/>
            <Questions/>
            <Submit/>
        </>
    );
};

export default Gen;