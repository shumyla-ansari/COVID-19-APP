import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Card } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import CountUp from "react-countup";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: "0 auto",
    marginTop: 50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Cards() {
  const classes = useStyles();

  const [countryState, setCountryState] = useState({});
  const [update, setUpdate] = useState({});

  //https://covid19.mathdro.id/api/
  useEffect(() => {
    async function getData() {
      const data = await fetch("https://covid19.mathdro.id/api/");
      const results = await data.json();
      const timeUpdate = await fetch("https://covid19.mathdro.id/api/");
      const responseTimeUpdate = await timeUpdate.json();
      console.log(responseTimeUpdate);
      console.log(results);
      const modifiedData = {
        infected: results.confirmed,
        recovered: results.recovered,
        deaths: results.deaths,
      };
      const modifiedTime = {
        lastUpdate: responseTimeUpdate.lastUpdate,
      };

      console.log(modifiedData);
      console.log(modifiedTime);
      //const globalResponse = await fetch('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true');
      //let globalData = await globalResponse.json();

      setCountryState(modifiedData);
      setUpdate(modifiedTime);
    }
    getData();
  }, []);

  return (
    <div className={classes.root}>
      <Grid>
        <Grid style={{ textAlign: "right", width: "auto" }} item xs={12}>
          <h4>Last Updated: {new Date(update["lastUpdate"]).toDateString()}</h4>
        </Grid>
        {/* {Object.keys(update).map((key) => {
        return(
        <Card elevation={3} className={classes.paper}>
          <h3>{key.toUpperCase()}</h3>
          <h3>{update[key] === update["lastUpdate"] && (new Date(update[key]).toDateString())}</h3> 

        </Card> */}
        {/* )})} */}
        <Grid container spacing={3}>
          {Object.keys(countryState).map((key, value) => {
            return (
              <Grid item xs={12} sm={4} key={uuidv4()}>
                <Card elevation={3} className={classes.paper}>
                  <h3>{key.replace(/ _/g, " ").toUpperCase()}</h3>
                  <h3>
                    <CountUp
                      start={0}
                      end={countryState[key].value}
                      duration={2.5}
                      separator=','
                    ></CountUp>
                  </h3>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}
