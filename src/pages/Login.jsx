import React from "react";
import './login.scss'
import { TextField, Alert } from "@mui/material";
import Axios from "../services/caller.service";
import { useNavigate } from "react-router-dom";
import { HelpOutline, StorageRounded } from "@mui/icons-material";

export default function Login() {

    const [credentials, setCredentials] = React.useState({
        username: '',
        password: '',
    })

    const [errUsername, setErrUsername] = React.useState(false);
    const [errPswd, setErrPswd] = React.useState(false);
    const [alertMsg, setalertMsg] = React.useState('');
    const [isAlert, setisAlert] = React.useState(false);

    const navigate = useNavigate()

    const handleChange = (event) => {
        setCredentials((prev) => ({ ...prev, [event.target.name]: event.target.value }))
    };

    const handleSubmit = (event) => {

        console.log(credentials.username)
        console.log(credentials.password)

        event.preventDefault();

        setCredentials(false)
        setErrPswd(false)
        setisAlert(false)
        setalertMsg('')

        if (credentials.username === ""||credentials.username === undefined) {
            setisAlert(true); setalertMsg('Veuillez compléter vos identifiants');
            return setErrUsername(true);
        }
        if (credentials.password === "" || credentials.password ===undefined ) {
            setisAlert(true); setalertMsg('Veuillez compléter vos identifiants')
            return setErrPswd(true);
        }

        Axios.post(`/user/signin`, {
            username: credentials.username,
            password: credentials.password
        })
            .then(response => {

                if (response.status === 200 && (response.data.token)) {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('username', JSON.stringify(response.data.username));
                    localStorage.setItem('uid', response.data.id);
                    navigate('/home', { replace: true })
                    setCredentials(prev => ({ [prev.username]: '', [prev.password]: '' }))
                } else {
                    setalertMsg(response.data.message);
                    setisAlert(true)
                }

            })
            .catch(error => {
                console.log(error)
                console.log("--CATH--");

                if(error.code==="ERR_NETWORK"){
                    setalertMsg("Vérifier votre connexion internet et réesayer");
                    setisAlert(true);
                    return 0;
                }

                setalertMsg("Une erreur s'est produite, réessayer plus tard");
                setisAlert(true);
                return 0;

            })
    }

    const handleError = (<Alert severity="error" className="alertMessage">{alertMsg}</Alert>)

    return (
        <div className="container">

            <div className="nav_bar">
                <div className="logo"><StorageRounded />
                    <span>SYSTEM CONTROLE SALLE SERVEUR</span>
                </div>
                <div className="menu">
                    <span>Se connecter</span>
                    <span>Aide<HelpOutline sx={{ ml: 1 }} /></span>
                </div>
            </div>

            {isAlert && handleError}

            <div className="loginContainer">
                <div className="left">
                    <div className="content"></div>
                </div>
                <div className="right">
                    <span className="title">Se connecter</span>
                    <form className="login_form">
                        <TextField
                            error={errUsername}
                            color="secondary"
                            margin="normal"
                            required
                            fullWidth
                            label="Votre Identifiant"
                            name="username"
                            value={credentials.username}
                            onChange={handleChange}
                        />
                        <TextField
                            error={errPswd}
                            color="secondary"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            value={credentials.password}
                            label="Mot de passe"
                            type="password"
                            onChange={handleChange}
                        />
                        <div className="button" onClick={handleSubmit}>
                            <span>Connexion</span>
                        </div>
                    </form>
                    <span> Mot de passe oublié? Cliquez-ici</span>
                </div>
            </div>

        </div>
    );
}
