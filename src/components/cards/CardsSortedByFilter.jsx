import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { register } from 'swiper/element/bundle';

import * as filter from '../filters/Filters';

import { CardContent} from './CardContent';


export const CardsSortedByFilter = (props) => {
    register();
    const {filterInfo} = props;
    const films = useSelector(state=>state.listFilms.films); 

    const films1 = filter.filmsToCountry(films, filterInfo.value);
   
    const filterFilm = (index, {...props}) => {
        return (
        <>
            <swiper-slide>
                <CardContent key={index} {...props} /> 
            </swiper-slide>            
        </>
        );       
    };   

    const filmsNotFound = (<Typography sx={{ mt:3, ml:3, fontSize:24, fontWeight: 600 }}>
        Фильмы не найдены...</Typography>);

    return (
        <>
          { films1.length !== 0  ?  
            
            <Grid container spacing={2}  sx={{mt: 3}} direction="row" alignItems="center" >               
                <Grid item xs={4}>
                    <Typography sx={{ mt:3, ml:3, fontSize:24, fontWeight: 600 }}>
                            {filterInfo.title}</Typography>
                </Grid>
                <Grid item xs={8}>
                    <swiper-container slides-per-view="4" speed="500"  navigation="true">            
                          { films1.map((film, index) => ( filterFilm(index, {...film})))}           
                    </swiper-container>   
                </Grid>    
            </Grid>                   
        : filmsNotFound } 
        </>
      );
};



