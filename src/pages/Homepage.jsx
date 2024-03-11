// import useImageFetch from '../hooks/useImageFetch';article
import '../assets/styles/home.css'
import 'swiper/css';
import 'swiper/css/navigation';
import useFetch from '../hooks/useFetch'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
import moment from 'moment'
import { Navigation } from 'swiper/modules';
import ErrorLoading from './ErrorLoading';

export default function Homepage() {

    const { loading, data, error } = useFetch('https://details-cms-api.onrender.com/api/articles?populate=*')
    const { data: editorspickData } = useFetch('https://details-cms-api.onrender.com/api/articles?populate=*&filters[categories][Name][$contains]=' + "Editor's Pick")
    const { data: politicsData } = useFetch('https://details-cms-api.onrender.com/api/articles?populate=*&filters[categories][Name][$contains]=Politics')
    const { data: businessData } = useFetch('https://details-cms-api.onrender.com/api/articles?populate=*&filters[categories][Name][$contains]=Business')
    const { data: sportsData } = useFetch('https://details-cms-api.onrender.com/api/articles?populate=*&filters[categories][Name][$contains]=Sports') 

    if(loading) return <p>Loading...</p>
    if(error) return <ErrorLoading />

    return (
        <main>
            <section>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {data.slice(0, 3).map((featured) => (
                        <SwiperSlide key={featured.id}>
                            {/* <img src={"http://localhost:1337" + featured.attributes.cover.data.attributes.url} alt="" /> */}
                            <img src={featured.attributes.coverurl} alt="" />
                            <div className="featured-info">
                                    <div className="subtitles">
                                        <h1>{featured.attributes.title}</h1>
                                        <Link to ={`${featured.attributes.categories.data[0].attributes.Name.toLowerCase()}/details/${featured.id}`}><button>Read</button> </Link>
                                    </div> 
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <section className="section">

                <div className="latest-news">
                    <div className="ln-header">
                        <h2>Latest News</h2>
                    </div>

                    <div className="ln-news-list">
                        {data.slice(1,4).map((article) => (
                            <div key={article.id} className="ln-card">

                                <div className="ln-card-cover">
                                    {/* <img src={"http://localhost:1337" + article.attributes.cover.data.attributes.url} alt="" /> */}
                                    <img src={article.attributes.coverurl} alt="" />
                                </div>

                                <div className="ln-card-content">
                                    <div className="ln-card-content-header">
                                        <h5>03 March 2024</h5>
                                        <p>{article.attributes.categories.data[0].attributes.Name}</p>
                                    </div>

                                    <div className="ln-card-content-body">
                                        <h3>{article.attributes.title}</h3>
                                        {article.attributes.body && article.attributes.body[0] && (
                                            <p>{article.attributes.body[0].children[0].text.slice(0, 199)}... <Link to ={`${article.attributes.categories.data[0].attributes.Name.toLowerCase()}/details/${article.id}`}>Read More</Link></p>
                                        )}                     
                                    </div>                                    
                                </div>              
                            </div>
                        ))}
                    </div>
                </div>
                
            </section>

            <section className="section">
                <div className="editors-pick">
                    <div className="editors-header">
                        <h2>Editors Picks</h2>
                        <p>Show More</p>
                    </div>

                    <div className="editors-news-list">
                        {editorspickData.sort((a,b) => b.id - a.id).map((pick) => (                    
                            <div key={pick.id} className="editors-card">
                                
                                <div className="editors-card-cover">
                                    {/* <img src={"http://localhost:1337" + pick.attributes.cover.data.attributes.url} alt="" /> */}
                                    <img src={pick.attributes.coverurl} alt="" />
                                </div>

                                <div className="editors-card-content">
                                    <div>
                                        <div className="ln-card-content-header">
                                            <h5>{moment(pick.attributes.publishedAt).utc().format('DD MMMM YYYY')}</h5>
                                        </div>

                                        <div className="editors-card-content-body">
                                            <h3>{pick.attributes.title}</h3>
                                            {pick.attributes.body && pick.attributes.body[0] && (
                                                <p>{pick.attributes.body[0].children[0].text.slice(0, 350)}... <Link to ={`${pick.attributes.categories.data[0].attributes.Name.toLowerCase()}/details/${pick.id}`}>Read More</Link></p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="three-category">

                    <div className="politics-cat category">

                        <div className="category-header">
                            <h2>Politics</h2>
                        </div>

                        {politicsData.slice(0,3).sort((a,b) => b.id - a.id).map((politics) => (     
                        <div key={politics.id} className="category-articles">
                            <h5>{moment(politics.attributes.publishedAt).utc().format('DD MMMM YYYY')}</h5>
                            <h4>{politics.attributes.title}</h4>
                            {politics.attributes.body && politics.attributes.body[0] && (
                                <p>{politics.attributes.body[0].children[0].text.slice(0, 180)}... <Link to ={`${politics.attributes.categories.data[0].attributes.Name.toLowerCase()}/details/${politics.id}`}>Read More</Link></p>
                            )}
                        </div>
                        ))}

                    </div>                

                    <div className="world-cat category">
                        <div className="category-header">
                            <h2>Business</h2>
                        </div>
                        
                        {businessData.slice(0,3).sort((a,b) => b.id - a.id).map((business) => (
                            <div key={business.id} className="category-articles">
                            <h5>{moment(business.attributes.publishedAt).utc().format('DD MMMM YYYY')}</h5>
                            <h4>{business.attributes.title}</h4>
                            {business.attributes.body && business.attributes.body[0] && (
                                <p>{business.attributes.body[0].children[0].text.slice(0, 180)}... <Link to ={`${business.attributes.categories.data[0].attributes.Name.toLowerCase()}/details/${business.id}`}>Read More</Link></p>
                            )}
                            </div>
                        ))}

                    </div>

                    <div className="sports-cat category">
                        <div className="category-header">
                            <h2>Sports</h2>
                        </div>
                        
                        {sportsData.slice(0,3).sort((a,b) => b.id - a.id).map((sports) => (
                            <div key={sports.id} className="category-articles">
                                <h5>{moment(sports.attributes.publishedAt).utc().format('DD MMMM YYYY')}</h5>
                                <h4>{sports.attributes.title}</h4>
                                {sports.attributes.body && sports.attributes.body[0] && (
                                    <p>{sports.attributes.body[0].children[0].text.slice(0, 180)}... <Link to ={`${sports.attributes.categories.data[0].attributes.Name.toLowerCase()}/details/${sports.id}`}>Read More</Link></p>
                                )}
                            </div>          
                        ))}
                    </div>

                </div>
            </section>
            
            {/* TBD */}
            {/* <section>
            <div className="photo-sec">
                    <div className="photo-header">
                        <h2>Photo of the day</h2>
                    </div>

                    <div className="photo-day">
                        {images.map((photo) => (
                                <img key={photo.id}src={photo} alt=''/>
                        ))}
                    </div>
                </div>                 
            </section> */}
        </main>
    )
}
