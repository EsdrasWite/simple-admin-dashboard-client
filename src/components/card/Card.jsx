import React from "react";
import "./card.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { AcUnit, KeyboardArrowDown, LocalDrink, SevereCold, Thermostat } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

import { Link } from "react-router-dom";
import Axios from "../../services/caller.service";
import { useMemo } from "react";

const Card = ({ type }) => {

  const [error, setError] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const [lastValue, setLastValue] = React.useState({ temperatureamb: 0, humiditeeamb: 0, niveaufumee: 0, poussiere: 2 });

  React.useEffect(() => {

    setInterval(() => {
      Axios.get(`/server/getall`)
        .then(response => {
          if (response.data.data.length > 1) setLastValue(response.data.data[response.data.data.length - 1]);
          else setLastValue(current => ({ ...current }))
        })
        .catch(error => console.log(error))

    }, 1000);

  }, [])


  console.log("CARD_1")
  //temporary

  var data;
  const diff = 20;


  const { temperatureamb, humiditeeamb, niveaufumee, poussiere } = lastValue;

  const niveau = useMemo(() => {
    if (poussiere > 1) {
      setOpen(true);
      setError(true)
    } else {
      setOpen(false);
      setError(false)
      return poussiere
    }
  }, [poussiere])

  switch (type) {

    case "humiditeSol":
      data = {
        order: 1,
        title: "Humidite ambiante",
        isError: false,
        isMoney: false,
        link: "Pourcentage",
        toLink: "users",
        amount: !!(humiditeeamb) ? (humiditeeamb).toFixed(2) : 0,
        icon: (
          <AcUnit
            className="icon"
            style={{
              color: "rgba(138, 43, 226, .8)",
              backgroundColor: "rgba(138, 43, 226, 0.2)",
            }}
          />
        ),
      };
      break;
    case "temperatureAmbiante":
      data = {
        order: 2,
        title: "Température ambiante",
        isError: false,
        isMoney: false,
        link: "En degré celcius",
        toLink: "trips",
        amount: temperatureamb ? ((temperatureamb)).toFixed(2) : 0,
        icon: (
          <Thermostat
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "humiditeAmbiante":
      data = {
        order: 3,
        title: "Niveau fumée",
        isError: false,
        isMoney: false,
        link: "Pourcentage",
        toLink: "questions",
        amount: niveaufumee ? ((niveaufumee)).toFixed(2) : 0,
        icon: (
          <SevereCold
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "niveauEau":
      data = {
        order: 4,
        title: "Taux Poussière",
        isError: error,
        isMoney: false,
        link: "Pourcentage",
        amount: niveau ? ((niveau)).toFixed(2) : 0,
        icon: (
          <LocalDrink
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  };


  return (
    <>
      <div className="widget">
        <div className={(data.order === 1) ? "left one" : (data.order === 3) ? "left two" : (data.order === 2) ? "left three" : "left"} >
          <span className="title">{data.title}</span>
          <span className="counter">
            {data.isMoney && "$"} {data.amount}
          </span>
          <Link style={{ textDecoration: 'none' }}>
            <span className="link">{data.link}</span>
          </Link>
        </div>
        <div className="right">
          <div className={data.isError ? "percentage negative" : "percentage positive"}>
            {data.isError ? <KeyboardArrowDown /> : <KeyboardArrowUpIcon />}
            {diff}
          </div>
          {data.icon}
        </div>
      </div>

      {/* {data.isError && <span className="warning">Le taux de poussière est élévé</span>} */}

      {error &&
        <Dialog open>
          <DialogTitle>Notifications</DialogTitle>
          <DialogContent>
            <span className="warning">Le taux de poussière est élévé</span>
          </DialogContent>
          <DialogActions>
            <Button variant='text' onClick={() => setError(false)} color='warning'>Ok</Button>
          </DialogActions>
        </Dialog>
      }
      {/* <Notification error={error} setError={setError} errorMsg={errorMsg} setErrorMsg={setErrorMsg} /> */}

    </>
  );
};

export default React.memo(Card);
