import { highchatsAPI } from "../highcharts";

export const getPrefecturesData = (setPrefectureData) => {
  fetch("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
      headers: { "X-API-KEY": highchatsAPI },
    })
      .then((response) => response.json())
      .then((res) => {
        setPrefectureData(Object.values(res.result))
      });
}