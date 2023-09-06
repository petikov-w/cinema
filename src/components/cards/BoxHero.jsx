import React from 'react';
import { useEffect, useRef } from 'react';
import { Grid } from '@mui/material';
// import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';

import {Link} from 'react-router-dom';

import {Hero, HeroImage, HeroImageTitle, HeroImageSubTitle, HeroButton} from '../../styles/BoxHeroContent.styled';

import {HeroList} from './HeroList';
import '../../styles/sliderHero.css';



export const BoxHero = () => {
        register();
  // ========================================================================

        const swiperRef = useRef(null);
        useEffect(() => {
            const swiperContainer = swiperRef.current;
            const params = {
              navigation: true,
            //   pagination: true,
              injectStyles: [                `
                  .swiper-button-next,
                  .swiper-button-prev {
                        color: #ffa500;
                        height: 32px;
                        font-size: 600;
                  }
        
                  .swiper-button-prev {
                    margin-left: -15px;
                  }
        
                  .swiper-button-next {
                    margin-right: -15px;
                  }                 
                
              `,
              ],
            };
        
            Object.assign(swiperContainer, params);
            swiperContainer.initialize();
          }, []);

  // =========================================================================
    

    return (
        <>     
             <Grid container spacing={2}  sx={{mt: 3}} direction="row" alignItems="center" > 
                <Grid item xs={12}>                   
                    <swiper-container slides-per-view="1" 
                                      speed="500" 
                                      loop="true"                                     
                                      ref={swiperRef} 
                                      init="false"   
                                      >
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