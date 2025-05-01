import React from "react";
import ReactDOM from "react-dom/client";

/*
this is food app
 
 header
    logo 
    nav-items
 body
   resturant card
footer
   copy right 
    links

*/
    
const Header = () => {
    return (<section className='header'>
        <div className="logo-container">
            <img src="https://www.shutterstock.com/image-vector/food-logo-smile-label-company-260nw-1271590297.jpg"/>
        </div>
        <nav className='nav-container'>
            <ul>
                <li>Home</li>
                <li>About </li>
                <li>Contact</li>
                <li>Chart</li>
            </ul>
        </nav>

    </section>)
}
const ResturantCard = () => {
   return( <div className='resturnat'>
            <img className='res-img' alt='pngtree' src='https://png.pngtree.com/template/20200704/ourmid/pngtree-restaurant-logo-design-vector-template-image_388753.jpg' />
            <h2>png tree rest</h2>
            <h3>North indian ,Asia, </h3>
          <h4>4.4 star</h4>
        <h5>35 mint</h5>
    </div>)
}
const Body = () => {
    return (
        <section className='body'>
            <div className="search">Search</div>
            <did className='res-container'>
                <ResturantCard/>
            </did>
        </section>
    )
}
const AppLayout = () => {
    return (<div className="app">
        <Header />
        <Body/>
    </div>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
