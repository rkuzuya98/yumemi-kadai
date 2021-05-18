import { highchatsAPI } from "../highcharts";

export const getPopulationData = async(
  selectingPrefectures,
  setPopulations,
  prefectureData
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
            totalPopulation.map((p) => {
              if (p.year >= 1960 && p.year <= 2020) {
                sortedData.push(p.value)
              }
            })
            return sortedData
          }

          const getName = (item) => {
            let name
            prefectureData.map((d) => {
              if (d.prefCode === item) {
                name = d.prefName
              }
            })
            return name
          }

  
          altPopulations.push({
            name: getName(item),
            data: trimData(res)
          })
        });
    })
    )
    setPopulations(altPopulations)
}