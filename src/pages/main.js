import React from "react";
import Reservation from "../features/ui/reservation";
import AttractionBestPlaceCard from "../features/attraction/attraction-best-place-card";
import QuiltedImageCard from "../features/ui/quilted-image-card";
import TopTourCard from "../features/hotels/top-tour";
import TrendingCites from "../features/ui/trending-cites";
import ExploreCard from "../features/ui/explore-card";
import TravelYourPassion from "../features/hotels/travel-your-passion";

export const Main = () => {
  //
  return (
    <>
      <Reservation />
      <AttractionBestPlaceCard />
      <QuiltedImageCard />
      <TopTourCard />
      <ExploreCard />
      <TrendingCites />
      <TravelYourPassion />
    </>
  );
};
