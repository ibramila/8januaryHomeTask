import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

function About() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>About</title>
      </Helmet>

    </HelmetProvider>
  )
}

export default About