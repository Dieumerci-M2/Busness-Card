import '../styles/Footer.css'
import {FaGithubSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
const Footer = () => {
    return ( 
        <footer className='foot'>
            <div className="logo-link">
                <FaTwitterSquare id='twitter'></FaTwitterSquare>
                <FaFacebookSquare id='facebook'></FaFacebookSquare>
                <FaInstagramSquare id='instagram'></FaInstagramSquare>
                <FaLinkedin id='linkdin'></FaLinkedin>
                <FaGithubSquare id='git'></FaGithubSquare>
            </div>
          
        </footer>
     );
}
 
export default Footer;