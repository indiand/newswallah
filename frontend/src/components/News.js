import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import NewsPlaceholder from '../images/news-placeholder.svg'
import Spinner from './Spinner'

export default function News(props) {
    let [articles, setarticles] = useState([])
    let [loading, setloading] = useState(false)

    const fetchNews = async () => {
        setloading(true)
        let url = `https://newswallah-backend.vercel.app/news/${props.category}`
        let data = await fetch(url)
        let parsedData = await data.json()
        setarticles(parsedData.message)
        setloading(false)
    }

    useEffect(() => {
        fetchNews();
    }, [])

    return (
        <>
                <div className="container">
                    <h1 className={`text-center my-3`}>News Wallah - {props.category}</h1>
                    {loading===true?<Spinner/>:""}
                    <div className="row justify-content-center">
                        {!loading && articles.map((element) => {
                            return <NewsItem title={element.title} content={element.content} img={element.urlToImage === null ? NewsPlaceholder : element.urlToImage} newsUrl={element.url}/>
                        })}
                    </div>
                </div>
        </>
    )
}
