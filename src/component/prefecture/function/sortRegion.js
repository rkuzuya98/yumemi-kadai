import { regionData } from "../data/regionCode";

/* eslint-disable no-unused-vars */
export const sortRegion = (prefCode) => {

  let regionCode;

  regionData.map((item) => {
    if (prefCode >= item.minPrefCode && prefCode <= item.maxPrefCode) {
      regionCode = item.regionCode
    } 
  })

  return regionCode
}