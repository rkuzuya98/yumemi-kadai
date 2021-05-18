import { highchatsAPI } from "../highcharts";

export const getPopulationData = async(
  selectingPrefectures,
  setPopulations
) => {
  let altPopulations = []
  await Promise.all(
    selectingPrefectures.map(async(item) => {
      await fetch(
        `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${item}`,
        {
          headers: { "X-API-KEY": highchatsAPI },
        }
      )
        .then((response) => response.json())
  
        .then((res) => {
          altPopulations.push({
            // name: getJpnPrefecture(item),
            name: item,
            data: res.result.data[0].data.map((item) => item.value)})
        });
    })
    )
    setPopulations(altPopulations)
}