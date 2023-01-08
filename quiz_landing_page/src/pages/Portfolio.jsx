import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Portfolio() {
  return (
    <HelmetProvider>
    <Helmet>
        <title>Portfolio</title>
    </Helmet>
    
</HelmetProvider>
  )
}

export default Portfolio