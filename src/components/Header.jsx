import Images from '../Images/logo.jpg'
import { Link, Outlet } from 'react-router-dom';

import '../style/Header.css'

function Header() {
    return (
        <header>
            <div className="Logo">
                <img src={Images} alt="Logo do Site - Imagem de uma fatia de pizaa" />
            </div>

            <nav className="Nav">
                <nav className="Nav-1">

                    <Link to="/">Inicial</Link>
                    <Link to="/Pizzas">Pizzas</Link>
                    <Link to="/Bebidas">Bebidas</Link>

                </nav>

                <nav className="Nav-2">
                    <Link to="/Login">Login</Link>
                </nav>
            </nav>

        </header>
    );
}

export default Header