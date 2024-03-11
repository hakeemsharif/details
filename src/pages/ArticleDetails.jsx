// import React from 'react'
import '../assets/styles/article-details.css'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import Profilepic from "../assets/images/profile.jpg"
import ErrorLoading from './ErrorLoading'

export default function ArticleDetails() {
  const { id } = useParams()
  const  { loading, data, error } = useFetch('https://details-cms-api.onrender.com/api/articles/' + id + '?populate=*')

  if(loading) return <p>Loading...</p>
  if(error) return <ErrorLoading />

  return (
    <section>
          <div className="ln-card">

            <section>
                <div className="news-cover-img">
                    {/* <img src={"http://localhost:1337" + data.attributes.cover.data.attributes.url} alt="" /> */}
                    <img src={data.attributes.coverurl} alt="" />
                    <div className="slide-info">
                        <h1>{data.attributes.title}</h1>
                    </div>
                </div>
            </section>

            <article>
                <div className="article-publisher">
                    <div className="article-publisher-header">
                        <div className="publisher">
                          <img src={Profilepic} alt="" />
                          <h2>Anastasia Shuraeva</h2>
                        </div>
                        <p>03 March 2023</p>
                    </div>
                </div>

                <div className="article-content">
                  {data.attributes.body && data.attributes.body.map((paragraph, index) => (
                    <p key={index}>{paragraph.children[0].text}</p>
                  ))}
                </div>
            </article>
          </div>
    </section>
  )
}
