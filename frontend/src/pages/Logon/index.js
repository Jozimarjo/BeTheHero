import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi'
// import { Container } from './styles';
import './styles.css'
import heroes from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();
    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');

        } catch (error) {
            alert('Falha no Login , tente novamente')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Be the hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value)} />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>

                </form>
            </section>
            <img src={heroes} alt="Heros" />
        </div>);
}
