import React from 'react'

const NewsItem = (props) => {
    let {title,content,img,newsUrl} = props
    return (
    <div className="col-12 col-sm-12 col-md-5 col-xl-3 my-2 mx-2">
        <div className="card card-item">
            <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <a target="_blank" href={newsUrl} className="btn btn-primary">Go to News</a>
                </div>
        </div>
    </div>    
    )
}
export default NewsItem
