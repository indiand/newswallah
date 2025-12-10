import React from 'react'
import largeCardImg1 from '../images/large-card-image-1.jpg'
import largeCardImg2 from '../images/large-card-image-2.webp'

const SideCards = () => {
    return (
        <div className="container mb-3">
            <h2>Some More Headlines</h2>
            <div className="row">
                <div className="col-12 col-md-6 col-sm-12 mt-4">
                    <div class="card text-bg-dark">
                        <img src={largeCardImg1} class="card-img" alt="..." />
                            <div class="card-img-overlay">
                                <h5 class="card-title">Are these sports in the Olympics, Paralympics or both?</h5>
                                <p class="card-text">At Tokyo 2020, ParalympicsGB finished second in the medal table behind China, winning 124 medals, including 41 golds, across a record-breaking 18 different sports.</p>
                            </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-sm-12 mt-4">
                    <div class="card text-bg-dark">
                        <img src={largeCardImg2} class="card-img" alt="..." />
                            <div class="card-img-overlay">
                                <h5 class="card-title">Pre-order the Apple Watch Series 10 Today, Starting at $399</h5>
                                <p class="card-text">In a Monday morning livestream this week, Apple unveiled a number of new products from the AirPods 4 to the iPhone 16. Among those new announcements is the newest smartwatch in the Apple lineup the</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SideCards;