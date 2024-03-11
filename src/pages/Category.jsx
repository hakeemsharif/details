// import React from 'react'
import { useParams } from 'react-router-dom'
import '../assets/styles/category.css'
import useFetch from '../hooks/useFetch'
import moment from 'moment'
import { Link } from 'react-router-dom'
import ErrorLoading from './ErrorLoading'
export default function Category() {

  const { id } = useParams()
  const { data: getCategory } = useFetch('https://details-cms-api.onrender.com/api/categories/' + id + '?populate=*')
  const { loading, data, error } = useFetch('https://details-cms-api.onrender.com/api/categories/' + id + '?populate[articles][populate]=*')

  if(loading) return <p>Loading...</p>
  if(error) return <ErrorLoading />

  return (
    <section>
            <section>
                <div className="category-cover-img">
                {/* <img src={"http://localhost:1337" + getCategory.attributes?.cover.data.attributes.url } alt="" /> */}
                <img src={getCategory.attributes.coverurl} alt="" />
                    <div className="cover-info">
                          <div className="cover-info-nav">
                          <h1>{data.attributes.Name}</h1>
                         </div>
                    </div>  
                </div>
            </section>

            <section className="section">
                <div className="latest-news">
                    <div className="ln-news-list">
                        {data.attributes.articles.data.sort((a,b) => b.id - a.id).map(category => (
                            <div key={category.id} className="ln-card">

                                <div className="ln-card-cover">
                                  {category.attributes.cover && (
                                    //   <img src={"http://localhost:1337" + category.attributes?.cover.data.attributes.url} alt="" />
                                      <img src={category.attributes.coverurl} alt="" />
                                  )}
                                </div>

                                <div className="ln-card-content">
                                    <div className="ln-card-content-header">
                                        <h5>{moment(category.attributes.publishedAt).utc().format('DD MMMM YYYY')}</h5>
                                    </div>

                                    <div className="ln-card-content-body">
                                        <h3>{category.attributes.title}</h3>
                                        {category.attributes.body && category.attributes.body[0] && (
                                            <p>{category.attributes.body[0].children[0].text.slice(0, 199)}...</p>
                                        )}
                                        <Link to ={ `${data.attributes.Name.toLowerCase()}`+ `/details/${category.id}`}>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
    </section>
  )
}
