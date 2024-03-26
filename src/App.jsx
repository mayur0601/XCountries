import { useState, useEffect } from "react";
import "./App.css";
import DisplayCountry from "./DisplayCountry";

export default function App() {
  const [countries, setCountries] = useState([]);

  let fectchCountries = async () => {
    try {
      let response = await fetch("https://restcountries.com/v3.1/all");
      let data = await response.json();
      setCountries(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(()=>{fectchCountries()}, []);

  return (
    <div className="container">
      {countries.map((countryData) => {
        return <DisplayCountry countryData={countryData} />;
      })}
    </div>
  );
}
