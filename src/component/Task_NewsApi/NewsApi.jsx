import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Api = () => {
    const [ news, setNews ] = useState([]);
    const [ query, setQuery ] = useState('');

    const getNews = async () => {
        try {
            let response = await axios.get(`https://newsapi.org/v2/top-headlines?q=${query}&country=us&category=business&apiKey=8368e4459d25495280471dc2f610a8bb`)
            setNews(response.data.articles)
        } catch(e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getNews()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function changeQuery(e) {
        e.preventDefault();

        getNews();
    }

    return (
        <div>
            <form onSubmit={changeQuery}>
                <label className='label'>Searching News with NewsAPI</label>
                <input type="text" value={query} className='form-control my-1' onChange={(e) => setQuery(e.target.value)} placeholder='input your search in here' />
                <input type="submit" value="Submit" className='btn btn-primary' />
            </form>
            <div className="row">
                {   
                    news.map( (news) => {
                        return (
                            <div className='col col-lg-4'>
                                <div key={news.url} className="card p-2 my-2">
                                    <h4 className='card-title'>{news.title.substring(0, 50)} . . .</h4>
                                    <img width='100%' height='200' alt='' src={news.urlToImage}></img>
                                    <p className='card-text'>{news?.description?.substring(0, 100)}</p>
                                    <p>{news?.content?.substring(0, 120)}</p>
                                    <p>Published on : {new Date(news.publishedAt).toLocaleString()}</p>
                                    <a href={news.url} className='btn btn-primary'>Read more</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Api