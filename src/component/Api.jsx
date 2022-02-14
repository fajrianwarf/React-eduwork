import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Api = () => {
    const [ users, setUsers ] = useState([]);
    const getUsers = async () => {
        try {
            let response = await axios.get(`https://newsapi.org/v2/top-headlines?q=bitcoin&country=us&category=business&apiKey=8368e4459d25495280471dc2f610a8bb`)
            setUsers(response.data)
        } catch(e) {
        console.log(e.message)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <div>Api</div>
            <div>
                {   
                    console.log(users)
                    // users.map( news => {
                    //     return (
                    //         <div>
                    //             <p>{news.articles.title}</p>
                    //             <p>{news.articles.description}</p>
                    //             <p>{news.articles.content}</p>
                    //         </div>
                    //     )
                    // })
                }
            </div>
        </div>
    )
}

export default Api