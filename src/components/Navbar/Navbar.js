import React, {useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Select, FormControl, MenuItem } from '@material-ui/core';
import { v4 as uuidv4 } from "uuid";



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar({ handleCountryChange },{ countryState}) {
  
  const classes = useStyles();
  
  const [fetchedCountries, setfetchedCountries] = useState([]);
  

  useEffect(() => {
    const countries = async() =>{
    const response = await fetch("https://covid19.mathdro.id/api/countries")
    const countryResponse = await response.json();
    const newCountry = countryResponse.countries.map(key => {
      return(
  key.name
  )})
    setfetchedCountries(newCountry)
    }
    countries();
  }, [])


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
         <Typography className={classes.title} variant="h6" noWrap>
            COVID-19 TRACKER
          </Typography>
          
          <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Global</InputLabel>
         
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
        defaultValue=""
        onChange={handleCountryChange}>
          <MenuItem value = "Global">Global</MenuItem>
         {fetchedCountries && fetchedCountries.map((country, key) =>{
          return(<MenuItem key={uuidv4()} value={country}>{country}</MenuItem>)})}
        </Select>
      </FormControl>
        
        </Toolbar>
      </AppBar>
    </div>
  );
            }