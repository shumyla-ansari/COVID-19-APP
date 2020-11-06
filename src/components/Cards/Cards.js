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
    marginBottom: 50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));


export default function Cards({countryState: {lastUpdate, recovered, deaths, cases}}) {
 const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
         <Grid style={{ textAlign: "right", width: "auto" }} item xs={12}>
          <h4>Last Updated: { lastUpdate && new Date(lastUpdate).toDateString()}</h4>
        </Grid>  

              {cases &&   <Grid item xs={12} sm={4} key={uuidv4()} >
                <Card elevation={3} className={classes.paper} 
                style={{ borderLeftStyle: "groove", borderWidth: "5px", borderColor: "orange" }} >
                  <h3>CONFIRMED</h3>
                  <h3>
                    <CountUp
                      start={0}
                      end={cases}
                      duration={2.5}
                      separator=','
                    ></CountUp>
                  </h3>
                </Card>
                </Grid>}
           
           
                {recovered && 
              <Grid item xs={12} sm={4} key={uuidv4()}>
                <Card elevation={3} className={classes.paper}
                style={{ borderLeftStyle: "groove", borderWidth: "5px", borderColor: "green" }}>
                  <h3>RECOVERED</h3>
                  <h3>
                    <CountUp
                      start={0}
                      end={recovered}
                      duration={2.5}
                      separator=','
                    ></CountUp>
                  </h3>
                </Card>
                </Grid>}
  
                {deaths && 
              <Grid item xs={12} sm={4} key={uuidv4()}>
              
                <Card elevation={3} className={classes.paper} 
                style={{ borderLeftStyle: "groove", borderWidth: "5px", borderColor: "red" }}>
                  <h3>DEATHS</h3>
                  <h3>
                    <CountUp
                      start={0}
                      end={deaths}
                      duration={2.5}
                      separator=','
                    ></CountUp>
                  </h3>
                </Card>
              </Grid>
            }
      </Grid>
    </div>
  );
}

