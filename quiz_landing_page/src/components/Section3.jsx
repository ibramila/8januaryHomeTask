import React from 'react'
import "./../assets/scss/_section3.scss";
import step4 from "./../assets/images/step4.svg"
import step5 from "./../assets/images/step5.svg"
import step6 from "./../assets/images/step6.svg"

function Section3() {
  return (
    <section className='sect3'>
      <div className='container'>
        <div className="section3">
          <div className='cards'>
            <div className='card card1'>
              <img src={step4} alt="step4" />
              <div className='info'>
                <hr />
                <span>Step 4</span>
                <p>Click on the subject</p>
              </div>

            </div>
            <div className='card card2'>
              <img src={step5} alt="step5" />
              <div className='info'>
                <hr />
                <span>Step 5</span>
                <p>A question will have four options</p>
              </div>
            </div>
            <div className='card card3'>
              <img src={step6} alt="step6" />
              <div className='info'>
                <hr />
                <span>Step 6</span>
                <p>Click right Option.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section3