import React from 'react'
import "./../assets/scss/_section5.scss";
import img7 from "./../assets/images/img7.svg"
import img8 from "./../assets/images/img8.svg"
import img9 from "./../assets/images/img9.svg"
import img10 from "./../assets/images/img10.svg"
import img11 from "./../assets/images/img11.svg"

function Section5() {
    return (
        <section className='sect5'>
            <div className="container">
                <div className="section5">
                    <div className='heading'>
                        <span>Explore Our Quiz Categories</span>
                        <button>explore all</button>
                    </div>
                    <div className="categories">
                        <div className='left_side'>
                            <div className='math'>
                                <div>
                                    <img src={img7} alt="img7" />
                                </div>
                                <span>Math</span>
                                <p>Sky was cloudless and of a deep dark blue spectacle before us was indeed </p>
                            </div>
                            <div className='science'>
                                <div>
                                    <img src={img8} alt="img8" />
                                </div>
                                <span>Science</span>
                                <p>Unorthographic life One day however a small line of blind text.</p>
                            </div>
                        </div>
                        <div className='right_side'>
                            <div className='top_side'>
                                <div>
                                    <img src={img9} alt="img9" />
                                </div>
                                <span>English</span>
                                <p>Even the all-powerful Pointing has no control about the blind texts.</p>
                            </div>
                            <div className='bottom_side'>
                                <div className='bangla'>
                                    <div>
                                        <img src={img10} alt="img10" />
                                    </div>
                                    <span>Bangla</span>
                                    <p>However a small line of blind text by the name.</p>
                                </div>
                                <div className='general'>
                                    <div>
                                        <img src={img11} alt="img11" />
                                    </div>
                                    <span>General Knowledge</span>
                                    <p>Text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section5