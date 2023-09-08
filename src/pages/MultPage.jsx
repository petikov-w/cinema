import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import { ListCardsU } from '../components/ListCardsU';
import { Cards } from '../components/cards/Cards';

export const MultPage = () => { 
    // Блок Redux 
    const dispatch = useDispatch();
    const location = useLocation();
    const page = useSelector(state=>state.pagination.page);
    const country= useSelector(state=>state.filters.country);   
    const loactionPage = parseInt(location.search?.split('=')[1]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{dispatch({type:'SET_PAGE', payload: loactionPage});}, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(()=>{dispatch({type:'FILMS_MULT', payload: {country}},);}, [page, country]);        

    useEffect(()=>{   
        if (loactionPage !== page ) 
           // eslint-disable-next-line react-hooks/exhaustive-deps
           {dispatch({type:'SET_PAGE', payload: loactionPage});}}, [location]);     
    
return (
    <>      
        <Cards />      
        {/* <ListCardsU />       */}
    </>
           
    );
};

