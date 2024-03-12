// import React from 'react'
import '../assets/styles/nav.css'
import Main_Logo from "../assets/logo/DetailsMainNew.png"
import Home_Icon from "../assets/logo/home-ico.png";
import Sports_Icon from "../assets/logo/sports-ico.png";
import Politics_Icon from "../assets/logo/politics-ico.png";
import Business_Icon from "../assets/logo/business-ico.png";
import Entertainment_Icon from "../assets/logo/entertainment-ico.png";
import Editors_Icon from "../assets/logo/editors-ico.png";
import { NavLink } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import MainLoading from './MainLoading';
import ErrorLoading from '../pages/ErrorLoading';

export default function Nav() {

    const { loading, data, error } = useFetch('https://details-cms-api.onrender.com/api/categories')
    
    // if (loading) {
    //     setTimeout(() => {
    //       return <MainLoading />
    //     }, 1000);
    //   }

    if (loading) return <MainLoading />
    if(error) return <ErrorLoading />

  return (
    <nav>
        <div className="navbar">
            
            <div className="navbar-logo">
                <img src={Main_Logo} alt="" />  
            </div>
                
            <div className="navbar-link">
                <ul>                     
                    <NavLink  activeclassname='is-active' to="/">Home</NavLink>
                    {data.map(category => (
                        <NavLink key={category.id} to={`category/${category.id}`}>
                            {category.attributes.Name}
                        </NavLink>
                    ))}
                </ul>   
            </div>

            <div className="navbar-weather">
                <ul>
                    <li>Manila 32°</li>
                </ul>
            </div>

        </div>

        <nav className="mobile-nav">
            <div className="navbar-link-mobile">
                <NavLink activeclassname='is-active' to="/"><img src={Home_Icon} alt="" /></NavLink>
                <NavLink activeclassname='is-active' to="category/1"><img src={Sports_Icon} alt="" /></NavLink>
                <NavLink activeclassname='is-active' to="category/2"><img src={Politics_Icon} alt="" /></NavLink>
                <NavLink activeclassname='is-active' to="category/3"><img src={Business_Icon} alt="" /></NavLink>
                <NavLink activeclassname='is-active' to="category/4"><img src={Entertainment_Icon} alt="" /></NavLink>
                <NavLink activeclassname='is-active' to="category/5"><img src={Editors_Icon} alt="" /></NavLink>
            </div>
        </nav>
    </nav>
  )
}
