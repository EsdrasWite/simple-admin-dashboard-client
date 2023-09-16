// import * as React from 'react';
// import "./navbar.scss"
// import { StorageRounded, Logout, List, SensorOccupied } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';

// function NavBar() {

//     const navigate = useNavigate()
//     const handleClose = () => {
//         localStorage.clear();
//         navigate("/")
//     }


//     // const username =((localStorage.getItem('username').split('@')[0]).split('\"'))
//     const username = localStorage.getItem('username')


//     return (
//         <div className="nav_bar">
//             <span className="logo"><StorageRounded />SALLE SERVEUR</span>
//             <div className="menu">
//                 <span>Historique <List sx={{ ml: 1, mr: 3 }} /></span>
//                 <span>Admin <SensorOccupied sx={{ ml: 1, mr: 3 }} /></span>
//                 <span onClick={handleClose}>Déconnexion<Logout sx={{ ml: 1 }} /></span>
//             </div>
//         </div>
//     );
// }
// export default NavBar;
