/* eslint-disable no-unused-vars */
export const sortRegion = (prefCode) => {

  const i = prefCode;

  let regionCode;

  if (i > 0 && i <= 7) {
    regionCode = 1
  } else if (i <= 14) {
    regionCode = 2
  } else if (i <= 23) {
    regionCode = 3
  } else if (i <= 30) {
    regionCode = 4
  } else if (i <= 34) {
    regionCode = 5
  } else if (i <= 38) {
    regionCode = 6
  } else if (i <= 47) {
    regionCode = 7
  } else {
    console.log("ERROR")
  }

  return regionCode
}