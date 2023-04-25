import { createContext, useState } from "react";

const ResultContext = createContext({
  result: [],
  dailyAvarage: [0],
  monthlyAvarage: [0],
  annualAvarage: 0,
  annualConsumption: 0,
  nasaData: [],
  addResult: (resultData) => {},
  addDailyAvarage: (dailyAvarage) => {},
  addMonthlyAvarage: (monthlyAvarageData) => {},
  addAnnualAvarage: (annualyAvarageData) => {},
  addAnnualConsumption: (consumptionData) => {},
  addNasaData: (nasaData) => {},
});

export function ResultContextProvider(props) {
  const [userResult, setUserResult] = useState([]);
  const [userDailyAvarage, setUserDailyAavarage] = useState([]);
  const [userMonthlyAvarage, setUserMonthlyAvarage] = useState([]);
  const [userAnnualAvarage, setUserAnnualAvarage] = useState([]);
  const [userAnnualConsumption, setUserConsumption] = useState([]);
  const [userNasaData, setUserNasaData] = useState([]);

  function addResultHandler(resultData) {
    setUserResult(resultData);
  }

  function addDailyAvarageHandler(monthlyAvarageData) {
    setUserDailyAavarage(monthlyAvarageData);
  }

  function addMonthlyAvarageHandler(monthlyAvarageData) {
    setUserMonthlyAvarage(monthlyAvarageData);
  }

  function addAnnualAvarageHandler(annualAvarageData) {
    setUserAnnualAvarage(annualAvarageData);
  }

  function addAnnualConsumptionHandler(consumptionData) {
    setUserConsumption(consumptionData);
  }

  function addNasaDataHandler(nasaData) {
    setUserNasaData(nasaData);
  }


  const context = {
    result: userResult,
    addResult: addResultHandler,
    dailyAvarage: userDailyAvarage,
    addDailyAvarage: addDailyAvarageHandler,
    monthlyAvarage: userMonthlyAvarage,
    addMonthlyAvarage: addMonthlyAvarageHandler,
    annualAvarage: userAnnualAvarage,
    addAnnualAvarage: addAnnualAvarageHandler,
    annualConsumption: userAnnualConsumption,
    addAnnualConsumption: addAnnualConsumptionHandler,
    addNasaData: addNasaDataHandler,
  };

  return (
    <ResultContext.Provider value={context}>
      {props.children}
    </ResultContext.Provider>
  );
}

export default ResultContext;
