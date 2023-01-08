import React from 'react'
import "./../assets/scss/_section1.scss";
import image1 from "./../assets/images/image1.svg";
function Section1() {
    return (
        <section className='sect1'>
            <div className="container">
                <div className='section1'>
                    <div className='left_side'>
                        <h1>Play Online Quiz &
                            Win Cash Daily!</h1>
                        <p>Win up to 1000৳ monthly from QuizBaj.</p>
                        <div className='input1'>
                            <div>
                                <span>+880</span><input type="text" />
                                </div>
                            <button>Register now</button>
                        </div>
                        <span>Number of Active Users Right Now
                            <span> 20,000+</span></span>
                    </div>
                    <div className='img1'>
                        <img src={image1} alt="Image1" />
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Section1