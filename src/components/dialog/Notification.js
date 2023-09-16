import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';

export default function AlertDialog({error,setError,errorMsg, setErrorMsg}) {
    const [open, setOpen] = React.useState(false);

    //   const handleClickOpen = () => {
    //     setOpen(true);
    //   };

    const handleClose = () => {
        setError(false);
        setErrorMsg("");
        setError(false)
    };

    return (
        // <div>
          
            <Dialog
                open={error}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" color='warning'>
                    {"ALERTE"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                         <Typography color='warning'>{errorMsg}</Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {/* <Button onClick={handleClose}></Button> */}
                    <Button onClick={handleClose} autoFocus color='warning' variant='outlined'>
                        Fermer
                    </Button>
                </DialogActions>
            </Dialog>
       // </div>
    );
}