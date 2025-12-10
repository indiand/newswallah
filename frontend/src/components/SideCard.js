import React from 'react'
import sideCardImg1 from '../images/side-card-image-1.jpg'
import sideCardImg2 from '../images/side-card-image-2.jpg'

const SideCard = () => {
    return (
        <>
        <div class="card mb-3 card-item">
            <div class="row g-0">
                <div class="col-12">
                    <img src={sideCardImg1} class="img-fluid rounded-start" alt="..." />
                </div>
            </div>
        </div>
        <div class="card mb-3 card-item">
            <div class="row g-0">
                <div class="col-12">
                    <img src={sideCardImg2} class="img-fluid rounded-start" alt="..." />
                </div>
            </div>
        </div>
    </>
    )
}

export default SideCard