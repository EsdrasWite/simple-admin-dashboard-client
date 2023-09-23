import React from "react";
import "./card.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { AcUnit, KeyboardArrowDown, LocalDrink, SevereCold, Thermostat } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

import { Link } from "react-router-dom";
// import Axios from "../../services/caller.service";
// import { useMemo } from "react";

const Card = ({ humiditeeamb }) => {

  const [error, setError] = React.useState(true);
 
  console.log("CARD_1")
  //temporary

  // var data;
  const diff = 20;

  console.log('card 1')

  return (
    <>
      <div className="widget">
        <div className="left one">
          <span className="title">Humidite ambiante</span>
          <span className="counter">
            {/* {data.isMoney && "$"} {data.amount} */}
            {!!(humiditeeamb) ? (humiditeeamb).toFixed(2) : 0}
          </span>
          <Link style={{ textDecoration: 'none' }}>
            <span className="link">Pourcentage</span>
          </Link>
        </div>
        <div className="right">
          <div className={(humiditeeamb < 1) ? "percentage negative" : "percentage positive"}>
            {(humiditeeamb < 1) ? <KeyboardArrowDown /> : <KeyboardArrowUpIcon />}
            {diff}
          </div>
          <AcUnit
            className="icon"
            style={{
              color: "rgba(138, 43, 226, .8)",
              backgroundColor: "rgba(138, 43, 226, 0.2)",
            }}
          />
        </div>
      </div>

      {(humiditeeamb < 23) && <span className="warningCard" >Le taux d'humidité est plus bas</span>}
    </>
  );
};

export default React.memo(Card);
