import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';

function Home() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </HelmetProvider>
    )
}

export default Home