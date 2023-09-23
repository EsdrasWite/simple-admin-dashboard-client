import React from "react";
import "./card.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { AcUnit, KeyboardArrowDown, LocalDrink, SevereCold, Thermostat } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

import { Link } from "react-router-dom";
// import Axios from "../../services/caller.service";
// import { useMemo } from "react";

const Card = ({ niveaufumee }) => {

  const [error, setError] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  const diff = 20;

  console.log('card 2')

  return (
    <>
      <div className="widget">
        <div className="left two" >
          <span className="title">Niveau fumée</span>
          <span className="counter">
            {/* {data.isMoney && "$"} {data.amount} */}
            {niveaufumee ? ((niveaufumee)).toFixed(2) : 0}
          </span>
          <Link style={{ textDecoration: 'none' }}>
            <span className="link">Pourcentage</span>
          </Link>
        </div>
        <div className="right">
          <div className={(niveaufumee > 1) ? "percentage negative" : "percentage positive"}>
            {(niveaufumee > 1) ? <KeyboardArrowDown /> : <KeyboardArrowUpIcon />}
            {diff}
          </div>
          <SevereCold
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        </div>
      </div>

      {niveaufumee > 1 && <span className="warningCard">Le taux de fumée est élévé</span>}

      {niveaufumee > 1 &&
        <Dialog open={error}>
          <DialogTitle>Notifications</DialogTitle>
          <DialogContent>
            <span className="warning">Le taux de fumée est élévé</span>
          </DialogContent>
          <DialogActions>
            <Button variant='text' onClick={() => setError(false)} color='warning'>Ok</Button>
          </DialogActions>
        </Dialog>
      }
    </>
  );
};

export default React.memo(Card);
