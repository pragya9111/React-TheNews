import React, { useEffect, useState } from 'react'
import '../Topnews/Topnews.css'
function Topnews() {
    const [news, setnews] = useState([])

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=dec08c7ddc114fac8619477380047372`)
            .then(res => res.json())
            .then(response => {
                console.log(response)
                setnews(response.articles)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const hold = news.map((elem, index) => {
        if (elem.author !== null && elem.content !== null && elem.description !== null && elem.urlToImage !== null) {
            return <div className='newsholder' key={index} id={index}>
                <div className='txt'>
                    <h4>Headline: {elem.description}</h4>
                    <p>{elem.content}</p>
                    <h5>Article By: {elem.author}</h5>
                </div>
                <div className='img'>
                    <img src={elem.urlToImage} alt='' />
                </div>
            </div>
        }
    })
    return (
        <div className='newscontainer'>
            {news.length > 0 ? hold : <div className='load' ><img src='https://res.cloudinary.com/itjewelers-llc/image/upload/v1575105193/marla/HomePage/loader.gif' alt='' className='loading' /></div> 
            }
        </div>
    )
}
export default Topnews



