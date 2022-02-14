import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Api = () => {
    const [ users, setUsers ] = useState([]);
    const [ query, setQuery ] = useState('');

    const getUsers = async () => {
        try {
            let response = await axios.get(`https://newsapi.org/v2/top-headlines?q=${query}&country=us&category=business&apiKey=8368e4459d25495280471dc2f610a8bb`)
            setUsers(response.data.articles)
        } catch(e) {
        console.log(e.message)
        }
    }

    useEffect(() => {
        getUsers()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    return (
        <div>
            <input type="text" value={query} className='form-control my-3' onChange={(e) => setQuery(e.target.value)} placeholder='input your search in here' />
            <div className="row">
                {   
                    users.map( (news, index) => {
                        return (
                            <div key={index} className="col col-lg-4">
                                <h4>{news.title}</h4>
                                <img width={100} alt='' src={news.urlToImage}></img>
                                <p>{news.description}</p>
                                <p>{news.content}</p>
                                <p>Published on : {news.publishedAt}</p>
                                <a href={news.url} className='btn btn-primary'>Read more</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Api