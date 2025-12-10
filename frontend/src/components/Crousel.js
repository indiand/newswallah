import React from 'react'
import SideCard from './SideCard';
import sliderImg1 from '../images/slider-news-image-1.jpg'
import sliderImg2 from '../images/silder-news-image-2.jpeg'
import sliderImg3 from '../images/silder-news-image-3.jpg'

const Crousel = () => {
    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-12">

                        <div id="carouselExampleCaptions" class="carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={sliderImg1} class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Harris and Trump shake hands at New York 9/11 remembrance ceremony on 23rd anniversary of attacks</h5>
                                        <p>President Joe Biden and Vice President Kamala Harris will commemorate the 23rd anniversary of the September 11 attacks with visits to each of three sites of the terror attacks.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={sliderImg2}class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Speaker Johnson calls off a vote on a bill to avoid a partial government shutdown - The Associated Press</h5>
                                        <p>Speaker Mike Johnson has pulled a vote on a temporary spending bill that would keep federal agencies and programs funded for six months. It's becoming increasingly clear that the measure lacks the support to pass as a potential partial government shutdown loo…</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={sliderImg3} class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>PM to say Parliament return not 'business as usual'</h5>
                                        <p>The prime minister will make a speech in Downing Street before Parliament returns next week.</p>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div className="col-md-4 mt-3">
                        <h3>Trending</h3>
                       <SideCard />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Crousel;