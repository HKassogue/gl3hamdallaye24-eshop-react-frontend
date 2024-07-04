import React from 'react'
import { produits } from '../dataTest/produits'
import BadgeProduit from './BadgeProduit'

function Accueil({panier, setPanier}) {
  return (
    <main>
        <section id="produits">
            <div id="produits-liste">
                { produits.map((produit) => 
                    <BadgeProduit produit={produit} panier={panier} setPanier={setPanier} />
                )}
            </div>
            <div id="produits-boutons">
                <a href="produits.html">Voir plus</a>
            </div>
        </section>
        <aside id="filtre">
            <form>
                <div className="form-group">
                    <label for="nom">Produit:</label>
                    <input type="research" className="form-control" name="nom" id="nom" placeholder="Que cherchez-vous?" />
                </div>
                <div className="form-group">
                    <label for="cat">Categorie:</label>
                    <select name="cat" id="cat" className="form-control">
                        <option value="Tout">Toutes les catégories</option>
                        <option value="Habits/Mode">Habits/Mode</option>
                        <option value="Electronique">Appareils électroniques</option>
                        <option value="Meuble">Meubles</option>
                        <option value="Cosmétique">Produits cosmétiques</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="prixmin">Prix min:</label>
                    <input type="text" className="form-control" name="prixmin" id="prixmin" placeholder="Prix min" />
                </div>
                <div className="form-group">
                    <label for="prixmax">Prix max:</label>
                    <input type="text" className="form-control" name="prixmax" id="prixmax" placeholder="Prix max" />
                </div>
                <div>
                    <button className="btn btn-primary" id="btn-filter">Filtrer les produits</button>
                </div>
            </form>
        </aside>
    </main>
  )
}

export default Accueil
