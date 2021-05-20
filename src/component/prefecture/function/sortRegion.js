import { regionData } from "../data/regionCode";

export const sortRegion = (prefCode) => {
  let regionCode;

  regionData.map((item) => {
    if (prefCode >= item.minPrefCode && prefCode <= item.maxPrefCode) {
      regionCode = item.regionCode;
    }
  });

  return regionCode;
};
