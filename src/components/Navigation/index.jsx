import React from "react";

import * as S from "./styled";

const Navigation = () => {
  return (
    <S.NavigationBox>
      <S.Container>
        <S.WrapperNavigation>
          <S.Brand>
            <span>Where in the world?</span>
          </S.Brand>
        </S.WrapperNavigation>
      </S.Container>
    </S.NavigationBox>
  );
};

export default Navigation;
