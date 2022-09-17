import React from "react";
import * as S from "./styled";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <S.SearchInput>
      <button>
        <FaSearch />
      </button>
      <input type="text" placeholder="Search for a country" />
    </S.SearchInput>
  );
};

export default SearchInput;
