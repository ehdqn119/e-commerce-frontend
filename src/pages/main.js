import React from 'react';
import Reservation from '../features/ui/reservation';
import AttractionBestPlaceCard from '../features/attraction/attraction-best-place-card';
import QuiltedImageCard from '../features/ui/quilted-image-card';

export const Main = () => {

    //
    return (
        <> 
            <Reservation/>
            <AttractionBestPlaceCard/>
            <QuiltedImageCard/>
        </>
    )
}
