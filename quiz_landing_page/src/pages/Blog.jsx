import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Blog() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Blog</title>
      </Helmet>
    </HelmetProvider>
  )
}

export default Blog