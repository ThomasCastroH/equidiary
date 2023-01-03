import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";

function LogInForm () {
    return (
        <Box
            className="login_form"
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "top",
                alignItems: "center",
                paddingTop: "20%"
            }}
        >
            <h1 className="login_form_title">Connexion</h1>
            <TextField 
                id="signup_email" 
                label="email" 
                variant="outlined" 
                required 
                placeholder="Adresse mail"
                sx={{
                    marginBottom: 2,
                }}
            />
            <TextField 
                id="password" 
                label="password" 
                type="password" 
                variant="outlined" 
                required 
                placeholder="Mot de passe"
                sx={{
                    marginBottom: 5,
                }}
                
            />
            <Button variant="contained" sx={{backgroundColor:'#265ECB', fontWeight:700, color:"white", marginBottom: 5}} size="large">S'inscrire</Button>
            
            <Button variant="contained" sx={{backgroundColor:'#518DE5', fontWeight:700, color:"white", marginBottom: 2}} size="large">Connexion avec Facebook</Button>
            <Button variant="contained" sx={{backgroundColor:'#E55151', fontWeight:700, color:"white"}} size="large">Connexion avec Google</Button>
        </Box>
    )
}

export default LogInForm;