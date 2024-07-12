import React from 'react'
import { useState } from 'react'
import {redirect, Link} from 'react-router-dom'
import authImg from '../img/auth_img.png'

function Inscription() {
    const [inscriptionForm, setInscriptionForm] = useState({
        login: '',
        password: '',
        password2: '',
      })
    
      const handleFormChange = (e) => {
        const { name, value } = e.target
        setInscriptionForm({ ...inscriptionForm, [name]: value })
      }

      const handleSubmit = () => {
        return redirect('/connexion')
      }

  return (
    <main>
            <div id="auth-form">
                <h2>Inscription</h2>
                <form method="post" onSubmit={handleSubmit}>
                    <div>
                        <label for="lo">Inscription:</label>
                        <input type="text" name="login" id="lo" onChange={handleFormChange} value={inscriptionForm.login} />
                    </div>
                    <div>
                        <label for="mp">Mot de passe:</label>
                        <input type="password" name="password" id="mp" onChange={handleFormChange} value={inscriptionForm.password} />
                    </div>
                    <div>
                        <label for="mp2">Confirmez le mot de passe:</label>
                        <input type="password" name="password2" id="mp2" onChange={handleFormChange} value={inscriptionForm.password2} />
                    </div>
                    <div>
                        <input type="submit" value="S'inscrire" class="submit-btn" />
                    </div>
                    <hr/>
                    <p>
                        Vous avez déjà un compte ? <Link to="/connexion">Connectez vous</Link>
                    </p>
                </form>
            </div>
            <div id="auth-img">
                <img src={authImg} alt="Login illustration" />
            </div>
        </main>
  )
}

export default Inscription
