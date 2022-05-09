export default function Header1(){
return(
<header className="header1"> 
    <section className="top-nav">
     <div className="container">
      <div className="top-nav__groupa">
        <div className="top-nav__groupa-link">
            <i className="fa-solid fa-earth-americas"></i>
           
           <span className="top-nav__groupa-linktext">
            Ship to: 
            United States
           </span>
        </div>
        <div className="top-nav__groupa-link">
            <i className="fa-solid fa-circle-question"></i>
            <span className="top-nav__groupa-linktext">
                Can we help you?
            </span>
        </div>
        <div className="top-nav__groupa-link">
            <i className="fa-solid fa-mobile-button"></i>
            <span className="top-nav__groupa-linktext">
                +1.866.VUITTON
            </span> 
        </div>
        <div className="top-nav__groupa-link">
            <span className="top-nav__groupa-linktext">
                Sustainability
            </span> 
        </div>
    </div>
     <div className="top-nav__groupb">
            <a href="#" className="top-nav__groupb-icon">
                <i className="fa-solid fa-map-location"></i>
            </a>
            <a href="#" className="top-nav__groupb-icon">
                <i className="fa-solid fa-heart"></i>
            </a>
             <a href="#" className="top-nav__groupb-icon">
                <i className="fa-solid fa-user"></i>
             </a>
             <a href="#" className="top-nav__groupb-icon">
                <i className="fa-solid fa-cart-shopping"></i>
            </a>
        </div>
    </div>
    </section>
    <section className="top-menu">
        <div className="container">
          <div className="top-menu__groupa">
            <div href="#"className="mbs">
                <i className="fa-solid fa-magnifying-glass"></i>

            </div>
            <div className="mobile-menu">
                <i className="fa-solid fa-bars"></i>
            </div>
            <div className="top-menu__groupa-logo">
                Louis Vuitton
            </div>
            
            <div className="top-menu__groupa-links">
                <a className="top-menu__groupa-link">
                 New
                </a>
                <a className="top-menu__groupa-link">
                Women
                </a>
                <a className="top-menu__groupa-link">
                Men
                </a>
                <a className="top-menu__groupa-link">
                Art of Living
                </a>
                <a className="top-menu__groupa-link">
                Magazine
                </a>
                <a className="top-menu__groupa-link">
                Holiday
                </a>
            </div>
          </div>
          
          <div className="top-menu__groupb">
            <div href="#" className="top-menu__groupbinput">
                <div className="top-menu__groupb-search">
                    <i className="fa-solid fa-magnifying-glass"></i>    
                    <input type="text" placeholder="Search.."/>
                </div>
            </div>
            <div href="#" className="mbc">
                <i className="fa-solid fa-cart-arrow-down"></i>
            </div>
        </div>
        </div>
    </section>

    <section className="mega-menu ">
            <div className="mega-menu__child">
                <a href="#" className="mega-menu__child-link">Gifts</a>
                <a href="#" className="mega-menu__child-link">Highlights</a>
                <a href="#" className="mega-menu__child-link">Handbags</a>
                <a href="#" className="mega-menu__child-link">Small Leather Goods</a>
                <a href="#" className="mega-menu__child-link">Frangrances</a>
                <a href="#" className="mega-menu__child-link">Accesscories</a>
                <a href="#" className="mega-menu__child-link">Jewlwry</a>
                <a href="#" className="mega-menu__child-link">Ready-to-wear</a>
                <a href="#" className="mega-menu__child-link">Watches</a>
                <a href="#" className="mega-menu__child-link">Fashion Shows</a>
            </div>
            <div className="mega-menu__grand">
                <a href="#" className="mega-menu__link">Gift Shop For Her</a>
                <a href="#" className="mega-menu__link">Best Sellers</a>
                <a href="#" className="mega-menu__link">Personalization</a>
                <a href="#" className="mega-menu__link">Vivienne Holiday collection</a>
                {/* <!-- <a href="#" className="mega-menu__link">Frangrances</a>
                <a href="#" className="mega-menu__link">Accesscories</a>
                <a href="#" className="mega-menu__link">Jewlwry</a>
                <a href="#" className="mega-menu__link">Ready-to-wear</a>
                <a href="#" className="mega-menu__link">Watches</a>
                <a href="#" className="mega-menu__link">Fashion Shows</a> --> */}
            </div>
            <div className="mega-menu__gallery">
                <img className="mega-menu__gallery-img" src="/img/small-model.jpg"/>
            </div>
        </section>
    
</header>

)
}