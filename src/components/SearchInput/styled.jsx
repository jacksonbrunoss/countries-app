import styled from "styled-components";

export const SearchInput = styled.div`
  width: 100%;
  position: relative;
  max-width: 420px;
  > input {
    width: 100%;
    padding: 16px 10px 16px 40px;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }
  > button {
    z-index: 999;
    position: absolute;
    border: none;
    padding: 17px 10px 10px 16px;
    background-color: transparent;
    cursor: pointer;
    svg {
      fill: #000;
    }
  }
`;
