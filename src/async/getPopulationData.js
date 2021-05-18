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
          const trimData = (res) => {
            const sortedData = []
            const totalPopulation = res.result.data[0].data
            totalPopulation.map((item) => {
              if (item.year >= 1960 && item.year <= 2020) {
                sortedData.push(item.value)
              }
            })
            return sortedData
          }
  
          altPopulations.push({
            name: item,
            data: trimData(res)
          })
        });
    })
    )
    setPopulations(altPopulations)
}