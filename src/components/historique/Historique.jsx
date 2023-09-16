import React from 'react'
import styled from '@emotion/styled'
import './historique.scss'
import {
    Dialog, DialogTitle, DialogContent, DialogContentText,
    DialogActions, Button, Divider
} from '@mui/material'
import { List } from '@mui/icons-material'
import Axios from '../../services/caller.service'

const Historique = ({ open, setOpen }) => {
    const StyledIconTitle = styled('div')({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem'
    })

    const [dataTable, setDataTable] = React.useState([])

    React.useEffect(() => {
        Axios.get(`/server/getall`)
            .then(response => {
                setDataTable(response.data.data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <Dialog fullWidth maxWidth='md' sx={{ height: "500px", top: ".5rem", maxHeight: 500 }} open={open} >
            <DialogTitle sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItem: 'center', backgroundColor: '#6922ab90' }}>
                <StyledIconTitle>
                    <List sx={{ color: 'white', fontWeight: '700' }} />
                    <span style={{ fontSize: "15px", color: "white", fontWeight: "700" }}>Historiques - Données salle serveur </span>
                </StyledIconTitle>

            </DialogTitle>
            <Divider />
            <DialogContent>
                <DialogContent>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'column' }}>
                        <table className='table'>
                            <thead>
                                <tr className='tr'>
                                    <th >Id</th>
                                    <th>Temp Ambiante</th>
                                    <th>Hum Ambiante</th>
                                    <th>Niveau Fumée</th>
                                    <th>Taux Poussière</th>
                                    <th>Date & Temps</th> 
                                </tr>
                            </thead>
                            <tbody>
                                {dataTable.map((value, index) => (
                                    <tr key={index}>
                                        <td>{value.id}</td>
                                        <td>{value.temperatureamb}</td>
                                        <td>{value.humiditeeamb}</td>
                                        <td>{value.niveaufumee}</td>
                                        <td>{value.poussiere}</td>
                                        <td>{value.date}</td>
                                    </tr>
                                ))}                            
                            </tbody>
                        </table>

                    </DialogContentText>
                </DialogContent>
            </DialogContent>
            <DialogActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>

                <Button variant='text' onClick={() => setOpen(false)} color='warning'>Quitter</Button>

            </DialogActions>
        </Dialog>
    )
}

export default Historique
