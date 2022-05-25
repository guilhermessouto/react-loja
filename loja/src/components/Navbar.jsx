import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar(){
    return(
        <header>
            <h1>Veículos Ford</h1>

            <ul>
                <li>
                    <Link to='/'><p>Todos os veículos</p></Link>
                </li>

                <li>
                    <Link to='/picapes'><p>Picapes</p></Link>
                </li>

                <li>
                    <Link to='/comerciais'><p>Comerciais</p></Link>
                </li>

                <li>
                    <Link to='/suvs'><p>SUVs</p></Link>
                </li>

                <li>
                    <Link to='/perfomance'><p>Perfomance</p></Link>
                </li>
            </ul>
        </header>
    )
}

export default Navbar