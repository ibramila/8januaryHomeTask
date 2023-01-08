import React from 'react'
import "./../assets/scss/_section6.scss";
import img12 from "./../assets/images/img12.svg"
import img13 from "./../assets/images/img13.svg"
import img14 from "./../assets/images/img14.svg"

function Section6() {
  return (
    <section className='sect6'>
      <div className="container">
        <div className="section6">
          <div className='heading'>
            <span>Check Latest Articles</span>
          </div>
          <div className='cards'>
            <div className='card'>
              <img src={img12} alt="img12" />
              <p>Even the all-powerful Pointing has no control about</p>
              <span>16 Oct 2020</span>
            </div>
            <div className='card'>
              <img src={img13} alt="img13" />
              <p>Almost unorthographic life One day however a small line</p>
              <span>14 Oct 2020</span>
            </div>
            <div className='card'>
              <img src={img14} alt="img14" />
              <p>Lorem Ipsum decided to leave for the far World of Grammar</p>
              <span>10 Oct 2020</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section6