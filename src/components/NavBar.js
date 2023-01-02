import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import logo from "../assets/images/equidiary.png"


function NavBar () {
    return (
        <header className="home_header">
            <nav className="home_nav">
                <Link to="/"><img className="home_nav_img" src={logo} alt="EquiDiary"></img></Link>
                <Button variant="contained" sx={{backgroundColor:'#265ECB'}} size="large">Connexion</Button>
            </nav>
        </header>
    )
}

export default NavBar;