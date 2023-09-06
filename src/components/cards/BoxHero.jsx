import React from 'react';
import { Grid } from '@mui/material';
import { register } from 'swiper/element/bundle';

import {Link} from 'react-router-dom';

import {Hero, HeroImage, HeroImageTitle, HeroImageSubTitle, HeroButton} from '../../styles/BoxHeroContent.styled';

import {HeroList} from './HeroList';


export const BoxHero = () => {
    register();
    return (
        <>     
             <Grid container spacing={2}  sx={{mt: 3}} direction="row" alignItems="center" > 
                <Grid item xs={12}>                   
                    <swiper-container slides-per-view="1" speed="500" loop="true" navigation="true">
                    { HeroList.map((item, index) => ( 
                          <swiper-slide>
                            <Hero>
                                <HeroImage src={item.backgroundImage} />
                                <HeroImageTitle src={item.title} top={item.marginTop} />
                                <HeroImageSubTitle color={item.subtitleColor} >{item.subtitle}</HeroImageSubTitle>
                                <Link to={item.idFilm} sx={{cursor: 'pointer'}}>
                                    <HeroButton>Далее...</HeroButton>
                                </Link>
                            </Hero>
                          </swiper-slide>
                          ))}
                    </swiper-container>        
                </Grid>    
             </Grid>               
        </>
      );

};