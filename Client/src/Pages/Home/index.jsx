import React from "react";
import SliderHm from "./SliderHm";
import CategoriesCarts from "./CategoriesCarts";
import FamousBrands from "./FamousBrands";
import SuggestionsCarts from "./SuggestionsCarts";
import NewestSells from "./NewstSells";
import BestSellsHm from "./BestSellsHm";
export default function Home() {
  return (
    <>
      <SliderHm />
      <CategoriesCarts />
      <FamousBrands />
      <SuggestionsCarts/>
      <NewestSells />
      <BestSellsHm/>
    </>
  );
}
