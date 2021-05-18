/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getPopulationData } from "./async/getPopulationData";
import { getPrefecturesData } from "./async/getPrefecruresData";
import { Chart } from "./component/chart/Chart";
import { Prefectures } from "./component/prefecture/Prefectures";

export const App = () => {

  // 都道府県データ（API）
  const [prefectureData, setPrefectureData] = useState([])

  // 選択中の都道府県
  const [selectingPrefectures, setSelectingPrefectures] = useState([12])
  const hdSelectingPrefectures = (prefCode) => {
    // 上書き用のデータを用意
    let newState = [...selectingPrefectures];
    if (selectingPrefectures.includes(prefCode)) {
      // 現在選択中→削除処理
      newState.splice(newState.indexOf(prefCode), 1)
      setSelectingPrefectures(newState)
    } else {
      // not現在選択中→追加処理
      newState.push(prefCode)
      setSelectingPrefectures(newState)
    }
  }

  // 人口データ（選択中の都道府県のみ格納）
  const [populations, setPopulations] = useState([])

  // 都道府県データを取得（API）
  useEffect(() => {
    getPrefecturesData(setPrefectureData)
  },[])

  // 人口データを取得（API）
  useEffect(() => {
    getPopulationData(selectingPrefectures,setPopulations, prefectureData)
  },[selectingPrefectures])

  return (
    <Wrapper>
      <h1>都道府県別の総人口推移グラフ</h1>
      <Prefectures
        prefectureData={prefectureData}
        selectingPrefectures={selectingPrefectures}
        hdSelectingPrefectures={hdSelectingPrefectures}
      />
      <Chart
        populations={populations}
      />
    </Wrapper>
  )
};

const Wrapper = styled.div`
  padding: 10px 20px;
  & > h1 {
    font-size: 22px;
  }
`
