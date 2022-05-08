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
                <i class="fa-solid fa-map-location"></i>
            </a>
            <a href="#" className="top-nav__groupb-icon">
                <i class="fa-solid fa-heart"></i>
            </a>
             <a href="#" className="top-nav__groupb-icon">
                <i class="fa-solid fa-user"></i>
             </a>
             <a href="#" className="top-nav__groupb-icon">
                <i class="fa-solid fa-cart-shopping"></i>
            </a>
        </div>
    </div>
    </section>
    <section class="top-menu">
        <div class="container">
          <div class="top-menu__groupa">
            <div href="#"class="mbs">
                <i class="fa-solid fa-magnifying-glass"></i>

            </div>
            <div class="mobile-menu">
                <i class="fa-solid fa-bars"></i>
            </div>
            <div class="top-menu__groupa-logo">
                Louis Vuitton
            </div>
            
            <div class="top-menu__groupa-links">
                <a class="top-menu__groupa-link">
                 New
                </a>
                <a class="top-menu__groupa-link">
                Women
                </a>
                <a class="top-menu__groupa-link">
                Men
                </a>
                <a class="top-menu__groupa-link">
                Art of Living
                </a>
                <a class="top-menu__groupa-link">
                Magazine
                </a>
                <a class="top-menu__groupa-link">
                Holiday
                </a>
            </div>
          </div>
          
          <div class="top-menu__groupb">
            <div href="#" class="top-menu__groupbinput">
                <div class="top-menu__groupb-search">
                    <i class="fa-solid fa-magnifying-glass"></i>    
                    <input type="text" placeholder="Search.."/>
                </div>
            </div>
            <div href="#" class="mbc">
                <i class="fa-solid fa-cart-arrow-down"></i>
            </div>
        </div>
        </div>
    </section>

    <section class="mega-menu ">
            <div class="mega-menu__child">
                <a href="#" class="mega-menu__child-link">Gifts</a>
                <a href="#" class="mega-menu__child-link">Highlights</a>
                <a href="#" class="mega-menu__child-link">Handbags</a>
                <a href="#" class="mega-menu__child-link">Small Leather Goods</a>
                <a href="#" class="mega-menu__child-link">Frangrances</a>
                <a href="#" class="mega-menu__child-link">Accesscories</a>
                <a href="#" class="mega-menu__child-link">Jewlwry</a>
                <a href="#" class="mega-menu__child-link">Ready-to-wear</a>
                <a href="#" class="mega-menu__child-link">Watches</a>
                <a href="#" class="mega-menu__child-link">Fashion Shows</a>
            </div>
            <div class="mega-menu__grand">
                <a href="#" class="mega-menu__link">Gift Shop For Her</a>
                <a href="#" class="mega-menu__link">Best Sellers</a>
                <a href="#" class="mega-menu__link">Personalization</a>
                <a href="#" class="mega-menu__link">Vivienne Holiday collection</a>
                {/* <!-- <a href="#" class="mega-menu__link">Frangrances</a>
                <a href="#" class="mega-menu__link">Accesscories</a>
                <a href="#" class="mega-menu__link">Jewlwry</a>
                <a href="#" class="mega-menu__link">Ready-to-wear</a>
                <a href="#" class="mega-menu__link">Watches</a>
                <a href="#" class="mega-menu__link">Fashion Shows</a> --> */}
            </div>
            <div class="mega-menu__gallery">
                <img class="mega-menu__gallery-img" src="/img/small-model.jpg"/>
            </div>
        </section>
    
</header>

)
}