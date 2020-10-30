import React from "react";
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

 

export default function Cards({update}, {countryState}) {
 const classes = useStyles();
console.log(countryState)
console.log(update)



  return (
    <div className={classes.root}>
      <Grid>
        <Grid style={{ textAlign: "right", width: "auto" }} item xs={12}>
          <h4>Last Updated: { update && new Date(update["lastUpdate"]).toDateString()}</h4>
        </Grid>
       
        <Grid container spacing={3}>
        {countryState && Object.keys(countryState).map((key, value) => {
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


 {/* {Object.keys(update).map((key) => {
        return(
        <Card elevation={3} className={classes.paper}>
          <h3>{key.toUpperCase()}</h3>
          <h3>{update[key] === update["lastUpdate"] && (new Date(update[key]).toDateString())}</h3> 

        </Card> */}
        {/* )})} */}