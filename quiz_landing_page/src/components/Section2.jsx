import React from 'react'
import "./../assets/scss/_section2.scss";
import step1 from "./../assets/images/step1.svg"
import step2 from "./../assets/images/step2.svg"
import step3 from "./../assets/images/step3.svg"


function Section2() {
  return (
    <section className='sect2'>
      <div className="container">
        <div className='section2'>
          <h1>how to play</h1>
          <div className='cards'>
            <div className='card card1'>
              <img src={step1} alt="step1" />
              <div className='info'>
                <hr />
                <span>Step 1</span>
                <p>Enter the Phone Number and Click Register</p>
              </div>

            </div>
            <div className='card card2'>
              <img src={step2} alt="step2" />
              <div className='info'>
                <hr />
                <span>Step 2</span>
                <p>Enter the Verification Code and click Verify.</p>
              </div>
            </div>
            <div className='card card3'>
              <img src={step3} alt="step3" />
              <div className='info'>
                <hr />
                <span>Step 3</span>
                <p>Enter your Info and click Play Quiz .</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Section2