import React from 'react'

const Footer = () => {
    return (
        <footer class="container-fluid">
            <div class="row bg-dark text-white p-3 align-items-center">
                <div class="col-md-4 col-sm-12 col-12 mt-3">
                    <div className="brand">News Wallah</div>
                    <div>
                        News Wallah is an innovative and dynamic news website, created as part of a summer internship project. Its mission is to deliver high-quality, real-time news to its readers with an emphasis on clarity, credibility, and convenience. With a clean, user-friendly interface, News Wallah caters to a diverse audience, providing a seamless experience for users to stay updated with the latest headlines across various categories like politics, technology, entertainment, sports, and more.
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-12 mt-3 text-center">
                    <h4>Address</h4>
                    <div>
                        From Mars
                        The Space Colony, Jupitor Market
                    </div>

                </div>
                <div class="col-md-4 col-sm-12 col-12 mt-3 text-center"> 
                    <h4>Contact Us</h4>
                    <ul>
                        Phone: 9239239XXX
                        Mail: aman1242@gmail.com
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer;