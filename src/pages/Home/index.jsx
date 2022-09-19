import React from "react";
import * as S from "./styled";
import { Link, useNavigate } from "react-router-dom";

import { GET_COUNTRIES } from "../../services/api";
import CountriesItem from "../../components/CountriesItem";
import SearchInput from "../../components/SearchInput";
import SearchSelect from "../../components/SearchSelect";

const Home = () => {
  const [countries, setCoutries] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [region, setRegion] = React.useState("");
  const navigate = useNavigate();

  const handleGetCountries = async () => {
    const { url, options } = GET_COUNTRIES();
    const response = await fetch(url, options);
    const data = await response.json();
    setCoutries(data);
  };

  const getTarget = (e) => {
    setSearch(e.target.value);
  };
  const getTargetReg = (e) => {
    setRegion(e.target.value);
    handleSelectRegion();
  };
  const handleGetSearch = () => {
    if (!search) return;
    navigate(`/search`, { state: { search } });
    setSearch("");
    console.log(search);
  };

  const handleSelectRegion = (e) => {
    navigate(`/region`, { state: { region } });
  };

  React.useEffect(() => {
    handleGetCountries();
  }, []);
  console.log(region);
  return (
    <>
      <S.HeadingBar>
        <S.Container>
          <S.WrapperHeadingBar>
            <SearchInput
              handleGetSearch={handleGetSearch}
              change={getTarget}
              search={search}
            />
            <SearchSelect change={getTargetReg} region={region} />
          </S.WrapperHeadingBar>
        </S.Container>
      </S.HeadingBar>
      <S.ContentCountryList>
        <S.Container>
          <S.WrapperContentCoutry>
            {countries.length > 0 &&
              countries.map((country, i) => (
                <CountriesItem key={i} country={country} />
              ))}
          </S.WrapperContentCoutry>
        </S.Container>
      </S.ContentCountryList>
    </>
  );
};

export default Home;
