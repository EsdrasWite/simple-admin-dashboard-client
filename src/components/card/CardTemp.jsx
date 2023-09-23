import React from "react";
import "./card.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { AcUnit, KeyboardArrowDown, LocalDrink } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

import { Link } from "react-router-dom";
// import Axios from "../../services/caller.service";
// import { useMemo } from "react";

const Card = ({ temperatureamb }) => {

  const [error, setError] = React.useState(true);
  const [open, setOpen] = React.useState(true);

  console.log("CARD_3")
  //temporary

  // var data;
  const diff = 20;

  return (
    <>
      <div className="widget">
        <div className="left three">
          <span className="title">Température ambiante</span>
          <span className="counter">
            {/* {data.isMoney && "$"} {data.amount} */}
            {temperatureamb ? ((temperatureamb)).toFixed(2) : 0}
          </span>
          <Link style={{ textDecoration: 'none' }}>
            <span className="link">Pourcentage</span>
          </Link>
        </div>
        <div className="right">
          <div className={(temperatureamb < 1) ? "percentage negative" : "percentage positive"}>
            {(temperatureamb < 1) ? <KeyboardArrowDown /> : <KeyboardArrowUpIcon />}
            {diff}
          </div>
          <LocalDrink
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        </div>
      </div>

      {temperatureamb> 25 && <span className="warningCard">La température est trop élévée</span>}

      {temperatureamb> 25 &&
        <Dialog open={error}>
          <DialogTitle>Notifications</DialogTitle>
          <DialogContent>
            <span className="warning">La température est trop élévée</span>
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
