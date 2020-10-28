import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid'


const useStyles = makeStyles((theme) => ({
  root: {
      maxWidth: 1000,
      margin: '0 auto',
      marginTop: 50
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Cards() {
  const classes = useStyles();

  const [globalState, setGlobalState] = useState({})

  useEffect(() => {
    async function getData(){
      const response = await fetch('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true');
      let data = await response.json();
      const globalResponse = await fetch('https://covid19.mathdro.id/api/');
      let globalData = await globalResponse.json();

      delete (data[0]).sourceUrl;
      delete (data[0]).lastUpdatedSource;
      delete (data[0]).lastUpdatedApify;
      delete (data[0]).moreData;
      delete (data[0]).historyData;

      setGlobalState(data[0])
 console.log(data[0]);
      console.log(globalData.confirmed);

    }    
      getData();
  }, [])

  
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
          {Object.keys(globalState).map((key) => {
              return(
              <Grid item xs={12} sm={4}key={uuidv4()}>
          <Card elevation={3} className={classes.paper}>
              <h3>{key.replace(/_/g, " ")}</h3>
              <h3>{globalState[key]}</h3>
          </Card>
        </Grid>
              )})}
        
        </Grid>
    </div>
  );
}
