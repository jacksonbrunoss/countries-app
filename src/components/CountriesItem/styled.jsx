import styled from "styled-components";

export const CountriesItem = styled.div`
  width: 100%;
  background: var(--White);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  > h3 {
    font-size: 1.125rem;
    font-weight: 700;
    margin: 16px;
  }
  > p {
    font-size: 0.85rem;
    margin: 16px;
    padding: 0px;
  }
  > div {
    max-width: 100%;
    > img {
      width: 100%;
      max-height: 200px;
    }
  }
`;
