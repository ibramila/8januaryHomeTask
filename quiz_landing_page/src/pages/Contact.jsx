import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Contact() {
  return (
    <HelmetProvider>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            
        </HelmetProvider>
  )
}

export default Contact