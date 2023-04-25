import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import ResultContext from "../context/ResultsContext";
import { Card } from "./styles/Card.style";
import { Button } from "./styles/Button.style";
import { Input } from "./styles/Input.style";
import { Select } from "./styles/Select.style";
import areaFactorData from "../data/area-factor.json";
import LoadingWheel from "../components/LoadingWheel";
import NasaData from "../data/NasaData.json";

const CalculatorFormStyle = styled.div`
  border-radius: 5px;
  height: fit-content;
  position: relative;

  label {
    padding: 12px 12px 12px 0;
    display: inline-block;
  }

  .row,
  .row-right-button {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }

  .row-right-button {
    flex-direction: row-reverse;
  }

  #properties {
    margin-top: 0.5rem;
  }
`;

function CalculatorForm() {
  // const { setResult } = useContext(ResultContext);
  const resultCtx = useContext(ResultContext);
  const [isLoading, setIsLoading] = useState(false);
  const [lon, setLon] = useState("13.3290");
  const [lat, setLat] = useState("52.5548");
  const [url, setUrl] = useState(
    "https://power.larc.nasa.gov/api/temporal/monthly/point?parameters=ALLSKY_SFC_SW_DWN,CLRSKY_SFC_SW_DWN,ALLSKY_SRF_ALB,ALLSKY_KT&community=RE&longitude=13.3290&latitude=52.5548&format=JSON&start=2020&end=2020"
  );
  const [loadeNasaData, setLoadedNasaData] = useState(NasaData);
  const [azimut, setAzimut] = useState("azimut-0");
  const [tilt, setTilt] = useState("tilt-0");
  const [areaFactor, setAreaFactor] = useState(1);
  const [ppk, setPpk] = useState(9);
  const [temp, setTemp] = useState(1);
  const [consumptionDaily, setConsumptionDaily] = useState(6);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedNasaData(data);
      });
  }, [url]);

  useEffect(() => {
    calc();
  }, [calc, loadeNasaData]);

  useEffect(() => {
    setAreaFactor(areaFactorData[azimut][tilt]);
  }, [azimut, tilt]);

  function daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function calc() {
    let year = 2020;
    let yearMonth = 202001; //TODO: Make an avarage
    let dailyGeneration = 0;
    let dailyAvarage = [];
    let monthGeneration = 0;
    let monthlyAvarage = [];
    let annualAvarage = 0;
    let annualConsumptionAvarage = 0;

    for (var i = 1; i <= 12; i++, yearMonth++) {
      dailyGeneration =
        loadeNasaData.properties.parameter.ALLSKY_SFC_SW_DWN[yearMonth] *
        ppk *
        areaFactor *
        temp;
      dailyAvarage.push(dailyGeneration);

      monthGeneration = dailyGeneration * daysInMonth(i, year);
      monthlyAvarage.push(monthGeneration);

      annualAvarage += monthGeneration;

      annualConsumptionAvarage += consumptionDaily * daysInMonth(i, year);
    }
    console.log("Before addResult. monthlyAvarage" + monthlyAvarage);
    resultCtx.addDailyAvarage(dailyAvarage);
    resultCtx.addMonthlyAvarage(monthlyAvarage);
    resultCtx.addAnnualAvarage(annualAvarage);
    resultCtx.addAnnualConsumption(annualConsumptionAvarage);
    console.dir();
    console.dir(
      "After addResult. dailyAvarage:" +
        resultCtx.dailyAvarage[0] +
        "monthlyAvarage:" +
        resultCtx.monthlyAvarage[1] +
        "annualAvarage:" +
        annualAvarage
    );
  }

  function submitHandler(event: any) {
    event.preventDefault();
  }

  async function urlHandler() {
    const url =
      "https://power.larc.nasa.gov/api/temporal/monthly/point?parameters=ALLSKY_SFC_SW_DWN,CLRSKY_SFC_SW_DWN,ALLSKY_SRF_ALB,ALLSKY_KT&community=RE&longitude=" +
      lon +
      "&latitude=" +
      lat +
      "&format=JSON&start=2015&end=2020";
    setUrl(url);
  }

  return (
    <CalculatorFormStyle>
      <form onSubmit={submitHandler}>
        <Card>
          <h3>
            LOCATION <b>{isLoading ? <LoadingWheel /> : ""}</b>
          </h3>
          <div className="card-main">
            <div className="row">
              <div className="col-40">
                <label htmlFor="long">Longditude</label>
              </div>
              <div className="col-60">
                <Input
                  name="longitude"
                  id="long"
                  type="number"
                  min={-180}
                  max={180}
                  placeholder="13.3290°"
                  onChange={(event) => {
                    setLon(event.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-40">
                <label htmlFor="lat">Latitude</label>
              </div>
              <div className="col-60">
                <Input
                  name="latitude"
                  id="lat"
                  type="number"
                  min={-90}
                  max={90}
                  placeholder="52.5548°"
                  onChange={(event) => {
                    setLat(event.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div className="row-right-button">
              <Button type="button" onClick={urlHandler}>
                Submit Location
              </Button>
            </div>
          </div>
        </Card>
      </form>
      <div id="properties">
        <form>
          <Card>
            <h3>PROPERTIES</h3>
            <div className="card-main">
              <div className="row">
                <div className="col-40">
                  <label htmlFor="ppk">Peak-Power Ppk</label>
                </div>
                <div className="col-60">
                  <Input
                    name="peak-power"
                    type="number"
                    id="ppk"
                    min="0"
                    placeholder="9kWp"
                    onChange={(event) => {
                      setPpk(+event.target.value);
                    }}
                    required
                  />
                </div>
              </div>
              <section>
                <div className="row">
                  <div className="col-40">
                    <label htmlFor="azimut-select">Azimut</label>
                  </div>
                  <div className="col-60">
                    <Select
                      name="azimut"
                      id="azimut-select"
                      onChange={(event) => {
                        setAzimut(event.target.value);
                      }}
                      required
                    >
                      <option value="azimut-0">0°</option>
                      <option value="azimut-15">15°</option>
                      <option value="azimut-30">30°</option>
                      <option value="azimut-45">45°</option>
                      <option value="azimut-60">60°</option>
                      <option value="azimut-75">75°</option>
                      <option value="azimut-90">90°</option>
                      <option value="azimut-105">105°</option>
                      <option value="azimut-120">120°</option>
                      <option value="azimut-135">135°</option>
                      <option value="azimut-150">150°</option>
                      <option value="azimut-165">165°</option>
                      <option value="azimut-180">180°</option>
                      <option value="azimut-195">195°</option>
                      <option value="azimut-210">210°</option>
                      <option value="azimut-225">225°</option>
                      <option value="azimut-240">240°</option>
                      <option value="azimut-255">255°</option>
                      <option value="azimut-270">270°</option>
                      <option value="azimut-285">285°</option>
                      <option value="azimut-300">300°</option>
                      <option value="azimut-315">315°</option>
                      <option value="azimut-330">330°</option>
                      <option value="azimut-345">345°</option>
                      <option value="azimut-360">360°</option>
                    </Select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-40">
                    <label htmlFor="tilt-select">Tilt</label>
                  </div>
                  <div className="col-60">
                    <Select
                      name="tilt"
                      id="tilt-select"
                      onChange={(event) => {
                        setTilt(event.target.value);
                      }}
                      required
                    >
                      <option value="tilt-0">0°</option>
                      <option value="tilt-10">10°</option>
                      <option value="tilt-20">20°</option>
                      <option value="tilt-30">30°</option>
                      <option value="tilt-40">40°</option>
                      <option value="tilt-50">50°</option>
                      <option value="tilt-60">60°</option>
                      <option value="tilt-70">70°</option>
                      <option value="tilt-80">80°</option>
                      <option value="tilt-90">90°</option>
                    </Select>
                  </div>
                </div>
              </section>
              <div className="row">
                <div className="col-40">
                  <label htmlFor="temp-select">Mount</label>
                </div>
                <div className="col-60">
                  <Select
                    name="temp"
                    id="temp-select"
                    onChange={(event) => {
                      setTemp(+event.target.value);
                    }}
                    required
                  >
                    <option value="1">How is the PV System mounted?</option>
                    <option value="0.9378">Within the roof</option>
                    <option value="0.9585">Above the roof</option>
                  </Select>
                </div>
              </div>
              <div className="row">
                <div className="col-40">
                  <label htmlFor="consumption">Daily Consumption</label>
                </div>
                <div className="col-60">
                  <Input
                    name="consumption"
                    id="consumption"
                    type="number"
                    min={0}
                    placeholder="6kW"
                    onChange={(event) => {
                      setConsumptionDaily(+event.target.value);
                    }}
                    required
                  />
                </div>
              </div>
              <div className="row-right-button">
                <Button type="button" onClick={calc}>
                  Calculate
                </Button>
              </div>
            </div>
          </Card>
        </form>
      </div>
    </CalculatorFormStyle>
  );
}

export default CalculatorForm;
