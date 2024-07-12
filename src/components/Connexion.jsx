import React from 'react'

function Connexion() {
  return (
    <main>
            <div id="auth-form">
                <h2>Connexion</h2>
                <form method="post" action="">
                    <div>
                        <label for="lo">Login:</label>
                        <input type="text" name="lo" id="lo"/>
                    </div>
                    <div>
                        <label for="mp">Mot de passe:</label>
                        <input type="password" name="mp" id="mp"/>
                    </div>
                    <div>
                        <input type="submit" value="Se connecter" class="submit-btn"/>
                    </div>
                    <hr/>
                    <p>
                        Vous n'avez pas de compte ? <a href="inscription.html">Créez votre compte</a>
                    </p>
                </form>
            </div>
            <div id="auth-img">
                <img src={require("../img/auth_img.png")} alt="Authentification"/>
            </div>
        </main>
  )
}

export default Connexion
