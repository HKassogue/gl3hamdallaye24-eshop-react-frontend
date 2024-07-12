import React from 'react'

function Inscription() {
  return (
    <main>
            <div id="auth-form">
                <h2>Inscription</h2>
                <form method="post" action="">
                    <div>
                        <label for="lo">Login:</label>
                        <input type="text" name="lo" id="lo" />
                    </div>
                    <div>
                        <label for="mp">Mot de passe:</label>
                        <input type="password" name="mp" id="mp" />
                    </div>
                    <div>
                        <label for="mp2">Mot de passe à nouveau:</label>
                        <input type="password" name="mp2" id="mp2" />
                    </div>
                    <div>
                        <input type="submit" value="Créer le compte" class="submit-btn" />
                    </div>
                    <hr/>
                    <p>
                        Vous avez déjà un compte ? <a href="connexion.html">Connectez vous</a>
                    </p>
                </form>
            </div>
            <div id="auth-img">
                <img src={require("../img/auth_img.png")} alt="Authentification" />
            </div>
        </main>
  )
}

export default Inscription
