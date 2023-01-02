import { Button, Modal, Typography, Box, Grid } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/images/equidiary.png"


function NavBar () {
    const [isOpen, setOpen] = useState(false)

    return (
        <header className="home_header">
            <nav className="home_nav">
                <Link to="/"><img className="home_nav_img" src={logo} alt="EquiDiary"></img></Link>
                <Button onClick={() => setOpen(true)} variant="contained" sx={{backgroundColor:'#265ECB'}} size="large">Connexion</Button>
                <Modal className="Home_nav_modal" open={isOpen} onClose={() => setOpen(false)}
                    style={{display:'flex', alignItems:'center', justifyContent:'center'}}
                >

                    <Box className="home_modal_container"
                        sx={{
                            width: 1200,
                            height: 740,
                            backgroundColor: "white",
                            borderRadius: 10,
                        }}
                    >
                        <Box className="home_modal_container_signin">

                        </Box>
                        <Box className="home_modal_container_login">

                        </Box>
                    </Box>

                </Modal>
            </nav>
        </header>
    )
}

export default NavBar;