import React, {useState} from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    const {type, setType} = useState('habitaciones');
    const {rating, setRating} = useState('');

    const places = [
        {name: 'Room Castelldefels'},
        {name: 'House Castelldefels'},
        {name: 'Flat Viladecans'},
        {name: 'Room Castelldefels'},
        {name: 'Flat Castelldefels'},
        {name: 'Flat Viladecans'},
        {name: 'Room Castelldefels'},
        {name: 'Room Castelldefels'},
        {name: 'Flat Viladecans'},
    ]

    return(
        <div className={classes.container}>
            <Typography variant="h4">Rooms, flats, houses...</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange ={(e) => setType(e.target.value)}>
                    <MenuItem value='rooms'>Rooms</MenuItem>
                    <MenuItem value='flats'>Flats</MenuItem>
                    <MenuItem value='houses'>Houses</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange ={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3 stars</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>

            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, index) => (
                    <Grid item key={index} xs={12}>
                        <PlaceDetails place={place}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default List;