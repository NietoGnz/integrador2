import { Link } from "react-router-dom";
import "./Header.scss";
import Navbar from "./Navbar";
import CarritoContext from "../contexts/CarritoContext";


const Header = () => {


  return (
    <header className="main-header">
      <input type="checkbox" id="menu" />
      <Navbar />
      <div className="search-bar">
        <div className="search-bar__logo-container"><img className="logo" src="public\img\Logo.png" alt="" /></div>
        <form action="" className="search-bar__form-container">
          <label htmlFor="busqueda" className="search-bar__form-label">
            Buscar
          </label>
          <input type="search" className="search-bar__form-search" id="busqueda" />
          <input type="submit" value="Buscar" className="search-bar__form-submit" />
        </form>
        <Link className="search-bar__carrito-container" to="/carrito"><img className="carrito" src="public\img\carrito-de-compras.png" alt="" />
        <div className="contador">
        {
/*           <p>{totalCarrito}</p> */
        }
        </div></Link>
        <div className="menu-toggle">
          <label htmlFor="menu" className="menu-toggle__label">
            <span className="menu-toggle__top-bread"></span>
            <span className="menu-toggle__meat"></span>
            <span className="menu-toggle__bottom-bread"></span>
          </label>
        </div>
      </div>
      <img src="public\img\Logoproyecto.jpg" alt="" />
    </header>
  );
};


export default Header;