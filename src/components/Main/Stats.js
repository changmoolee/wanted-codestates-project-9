import React from "react";
import styled from "styled-components";
import Record from "./Stats/Record";
import Rank from "./Stats/Rank";
import Cheering from "./Stats/Cheering";

const Container = styled.section`
  width: 100%;
  height: 265px;
  display: flex;
  margin-top: 20px;
`;

const Stats = ({ data }) => {
  return (
    <Container>
      <Record data={data} />
      <Rank data={data} />
      <Cheering />
    </Container>
  );
};

export default Stats;
