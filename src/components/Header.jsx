import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header({panier}) {
  const toogleUserMenu = (event) => {
    let menu = document.querySelector('.menu')
    event.preventDefault()
    menu.classList.toggle('active')
  }

  return (
    <header>
        <div id="header-top">
            <div id="logo-nom">
                <img src={require("../img/icons/ico-eshop-s.png")} alt="Logo de eshop" />
                <h1>Shopez en toute sécurité !</h1>
            </div>
            <div id="user-nav">
                <div id="user">
                    <div className="profile" onClick={toogleUserMenu}>
                        <h3>Username<br/><span>Vu le 01/01/2024</span></h3>
                        <div className="imgBx">
                            <img src={require("../img/user.png")} alt="Profil du user" />
                        </div>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><Link to="/connexion"><ion-icon name="log-in-outline"></ion-icon>Connexion</Link></li>
                            <li><Link to="/inscription"><ion-icon name="person-add-outline"></ion-icon>Inscription</Link></li>
                            <li><a href="#"><ion-icon name="person-outline"></ion-icon>Profile</a></li>
                            <li><a href="#"><ion-icon name="cart-outline"></ion-icon>Mes commandes</a></li>
                            <li><a href="deconnexion.html"><ion-icon name="log-out-outline"></ion-icon>Déconnexion</a></li>
                        </ul>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to="/" className={({isActive}) => (isActive ? 'active' : '')}>Accueil</NavLink></li>
                        <li><NavLink to="/panier" className={({isActive}) => (isActive ? 'active' : '')}>Panier (<span id="nav-panier">{panier.reduce((nbr, item) => nbr+item.qte, 0)}</span>)</NavLink></li>
                        <li><a href="#" className="">Contact</a></li>                        
                    </ul>
                </nav>
            </div>
        </div>
        <div id="header-banniere">
            <div id="banniere_promo">
                -20% <br/>
                Faites le plein du panier &#129321;
            </div>
            <div id="banniere_bouton">
                <marquee behavior direction>
                Livraison partout au Mali. Satisfait ou remboursé sur 3 jours !
                </marquee>
                <a href="produits.html" className="bouton_rouge">Voir les produits <img src="img/icons/fleche.png" alt="" /></a>
            </div>
        </div>
    </header>
  )
}

export default Header