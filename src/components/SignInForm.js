import { TextField, Checkbox, FormControlLabel, Button } from "@mui/material";
import { Box } from "@mui/system";

function SignUpForm () {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "top",
                alignItems: "center",
                paddingTop: "20%"
            }}
        >
            <h1>Inscription</h1>
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
                    marginBottom: 2,
                }}
            />
            <FormControlLabel
                label="terms"
                control={<Checkbox />}
                sx={{
                    marginBottom: 2,
                }}
            />
            <Button variant="contained" sx={{backgroundColor:'#265ECB', fontWeight:700, color:"white"}} size="large">S'inscrire</Button>
        </Box>
    )
}

export default SignUpForm;