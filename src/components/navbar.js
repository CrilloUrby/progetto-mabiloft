import logo from '../img/mabitalksLogo.png';
import { BsBoxArrowRight } from 'react-icons/bs' ;
import { FiBell } from 'react-icons/fi' ;

function Navbar(){
    return(
        <nav className="navbar navbar-white bg-white">
            <div className="container">
                <a className="navbar-brand mb-0 h1" href="#">
                    <img src={logo} className="d-inline-block" />
                </a>
                <div class="d-flex mt-3">
                    <p style={{marginRight: '20px'}}><FiBell /></p>
                    <p>Logout <BsBoxArrowRight /></p>
                </div>
                
            </div>
         </nav>
    );
}

export default Navbar;