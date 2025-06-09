import React from 'react';
import Hero from './sections/Hero.jsx';
import ShowcaseSection from './sections/ShowcaseSection.jsx';
import NavBar from './components/NavBar.jsx';
import LogoMarque from "./sections/LogoMarque.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from './sections/ExperienceSection.jsx';

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <LogoMarque />
            <FeatureCards />
            <ExperienceSection />
        </>
    );
};


export default App;