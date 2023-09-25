import React from "react";
import "./card.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { AcUnit, KeyboardArrowDown, LocalDrink, SevereCold, Thermostat } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Link } from "react-router-dom";

const Card = ({ poussiere }) => {

  const [error, setError] = React.useState(true);
  // const [open, setOpen] = React.useState(false);

  const [lastValue, setLastValue] = React.useState({ temperatureamb: 0, humiditeeamb: 0, niveaufumee: 0, poussiere: 2 });

  console.log("CARD_1")
  //temporary

  // var data;
  const diff = 20;

  return (
    <>
      <div className="widget">
        <div className="left">
          <span className="title">Taux Poussière</span>
          <span className="counter">
            {/* {data.isMoney && "$"} {data.amount} */}
            {poussiere ? ((poussiere)).toFixed(2) : 0}
          </span>
          <Link style={{ textDecoration: 'none' }}>
            <span className="link">Pourcentage</span>
          </Link>
        </div>
        <div className="right">
          <div className={(poussiere < 1) ? "percentage negative" : "percentage positive"}>
            {(poussiere < 1) ? <KeyboardArrowDown /> : <KeyboardArrowUpIcon />}
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

      {poussiere > 0 && <span className="warningCard">Le taux de poussière est élévé</span>}

    </>
  );
};

export default React.memo(Card);
