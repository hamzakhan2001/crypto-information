import React, { useContext, useState } from 'react';
import logo from '../../assets/logo.png';
import arrow_icon from '../../assets/arrow_icon.png';
import './Navbar.css';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const currencyHandler = (event) => {
    switch(event.target.value){
        case 'usd':{
            setCurrency({name:'usd', symbol:"$"})
            break;
        }

        case 'inr':{
            setCurrency({
                name:"inr" , symbol:"₹"
            })
            break;
        }

            case 'eur':{
            setCurrency({
                name:"eur" , symbol:"€"
            })
            break;
        }

              case 'pkr':{
            setCurrency({
                name:"pkr" , symbol:"Rs"
            })
            break;
        }

        default: {
            setCurrency({name:"usd", symbol:"$"})
            break;
        }
    }
  }

  const {setCurrency} = useContext(CoinContext)


  return (
    <div className='navbar'>
     
     <Link to={'/'}>
           <img className='logo' src={logo} alt="logo" />
     </Link>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>

        <div className="nav-right">
          <select onChange={currencyHandler}>
            <option value="usd">USD</option>
            <option value="eur">EURO</option>
            <option value="inr">INR</option>
            <option value="pkr">PKR</option>
          </select>
          <button>Signup <img src={arrow_icon} alt="icon" /></button>
        </div>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Navbar;

