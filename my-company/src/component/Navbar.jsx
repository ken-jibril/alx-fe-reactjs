import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ background: 'navy', color: 'navy', display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '15px', fontSize: '2em', margin: '0', textDecoration: 'none'}}>
            <Link to="/" style={{color: 'white'}}>Home</Link> {" "}
          | <Link to="/about" style={{color: 'white'}}>About</Link> {" "}
          | <Link to="/services" style={{color: 'white'}}>Services</Link>{" "}
          | <Link to="/contact" style={{color: 'white'}}>Contact</Link>
        </nav>
    )
}
export default Navbar;