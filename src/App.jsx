import React from 'react';
import Hero from './sections/Hero.jsx';
import ShowcaseSection from './sections/ShowcaseSection.jsx';
import NavBar from './components/NavBar.jsx';
import LogoShowcase from "./sections/LogoShowcase";
const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <LogoShowcase />
        </>
    );
};


export default App;