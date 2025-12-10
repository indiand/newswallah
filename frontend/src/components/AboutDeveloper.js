import React from 'react'
import devImg from '../images/aboutDev.jpeg'

const AboutDeveloper = () => {
    return (
      <div id="dev-container">
        <div class="card mb-3" id="dev-div">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={devImg} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Aman Singh</h5>
                        <p class="card-text">I am a passionate web developer, who loves to create full stack web applications. I am always ready to adapt new technologies and skill up my self. I have already created some interesting unique projects and would also like to accept some new challenges and make them working. In my opinion my best quality is that I consider development as my hobby and not as work, so it is easy for me to be concentrated as I don't find making application boring.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}
export default AboutDeveloper;