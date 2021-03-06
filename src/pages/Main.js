import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import Profile from "../components/Main/Profile";
import VSanimation from "../components/Main/VSanimation";
import Stats from "../components/Main/Stats";
import Taps from "../components/Main/Tabs";
import Info from "../components/Main/Info";

const Outer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.025);
`;
const Inner = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
`;
const ApiInfo = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #1f334a;
  letter-spacing: -1px;
`;
const IconContainer = styled.div`
  font-size: 13px;
  margin-right: 5px;
`;

const Main = ({ data }) => {
  return (
    <Outer>
      <Inner>
        <ApiInfo>
          <IconContainer>
            <FontAwesomeIcon icon={faCircleInfo} />
          </IconContainer>
          카트라이더 매치데이터는 최근 1년치 데이터만 확인할 수 있습니다
        </ApiInfo>
        <Profile data={data} />
        <VSanimation />
        <Stats data={data} />
        <Taps />
        <Info data={data} />
      </Inner>
    </Outer>
  );
};

export default Main;
