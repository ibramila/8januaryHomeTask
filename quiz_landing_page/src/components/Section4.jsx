import React from 'react'
import "./../assets/scss/_section4.scss";
import img2 from "./../assets/images/img2.svg"
import img3 from "./../assets/images/img3.svg"
import img4 from "./../assets/images/img4.svg"
import img5 from "./../assets/images/img5.svg"
import img6 from "./../assets/images/img6.svg"

function Section4() {
    return (
        <section className='sect4'>
            <div className="container">
                <div className="section4">
                    <div className='heading'>
                        <span>lets sharp your preparation</span>
                        <button>explore all</button>
                    </div>
                    <div className='exams'>
                        <div className='top_side'>
                            <div className='model_test'>
                                <div className='information'>
                                    <span>BCS Model Test</span>
                                    <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam placerat tortor commodo lectus laoreet venenatis.</p>
                                </div>
                                <div className='img'>
                                    <img src={img2} alt="img2" />
                                </div>
                            </div>
                            <div className='card3'>
                                <div className='img'>
                                    <img src={img3} alt="img3" />
                                </div>
                                <span>Bank Exam</span>
                            </div>
                        </div>
                        <div className='bottom_side'>
                            <div className='card card4'>
                                <div className='img'>
                                    <img src={img4} alt="img4" />
                                </div>
                                <span>Bank Exam</span>
                            </div>
                            <div className='card card5'>
                                <div className='img'>
                                    <img src={img5} alt="img5" />
                                </div>
                                <span>NSI Exam</span>
                            </div>
                            <div className='card card6'>
                                <div className='img'>
                                    <img src={img6} alt="img6" />
                                </div>
                                <span>Railway Exam</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4