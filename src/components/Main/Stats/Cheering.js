import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 350px;
  height: 265px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 12px;
  margin-right: 10px;
  background: white;
  box-sizing: border-box;
`;
const Heading = styled.header`
  width: 100%;
  height: 41px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  font-size: 14px;
  font-weight: 700;
  border-bottom: 1px solid #ccc;
  color: #1f334a;
  box-sizing: border-box;
`;
const Title = styled.div``;
const Blue = styled.span`
  color: #2877ff;
`;
const Black = styled.span``;

const Total = styled.div`
  font-size: 12px;
  color: #1f334a;
  letter-spacing: -1px;
`;
const MessageBox = styled.section`
  width: 100%;
  height: 159px;
  padding: 0 5px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
`;
const Message = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
const NickName = styled.div`
  display: flex;
  height: 53px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-size: 12px;
  white-space: nowrap;
  color: #07f;
`;

const ContensBox = styled.div`
  position: relative;
  width: 100%;
  height: 41px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 6px;
  font-size: 12px;
  border: 1px solid #c3ced5;
  border-radius: 15px;
  box-sizing: border-box;
`;
const Contents = styled.span`
  ::before {
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    display: flex;
    align-items: center;
    margin-left: -14px;
    border-left: 1px solid #c3ced5;
    border-bottom: 1px solid #c3ced5;
    background: white;
    transform: rotate(0.125turn);
  }
  display: flex;
  align-items: center;
  margin: 0;
`;
const Bottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px;
  margin: 8px;
  font-size: 14px;
  font-weight: 500;
  border-top: 1px solid #f2f2f2;
`;
const NickInput = styled.input`
  width: 15%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px 2px;
  margin-right: 5px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 500;
`;
const MessageInput = styled.input`
  width: 60%;
  height: 30px;
  display: flex;
  justify-content: center;
  padding: 1px 2px;
  margin-right: 5px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-weight: 500;
`;
const Button = styled.div`
  width: 53px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: white;
  background: #ccc;
  cursor: pointer;
`;
const data = [
  { name: "??????", contents: "???????????????" },
  { name: "??????", contents: "?????? ??????!" },
  { name: "?????????", contents: "?????????" },
];

const Cheering = () => {
  const [messages, setMessages] = useState(data);
  const [nick, setNick] = useState("");
  const [contents, setContents] = useState("");

  const onChangeNick = (text) => {
    setNick(text);
  };
  const onChangeContents = (text) => {
    if (text.length <= 30) {
      setContents(text);
    } // 30??? ??????
  };
  const addMessage = () => {
    let temp = { name: nick, contents: contents };

    if (nick !== "" && contents !== "") {
      // ???????????? ????????? ??? ???????????? ?????? ??? ??????.
      setMessages([...messages, temp]);
      setNick("");
      setContents("");
    } else {
      alert("????????? ?????? ????????? ???????????? ???????????????.");
    }
  };

  return (
    <Container>
      <Heading>
        <Title>
          <Blue>??????</Blue> <Black>?????????</Black>
        </Title>
        <Total>?????? 0???&nbsp; ?????? {messages.length}???</Total>
      </Heading>
      <MessageBox>
        {messages.map((message, index) => (
          <Message key={index}>
            <NickName>{message.name}</NickName>
            <ContensBox>
              <Contents>{message.contents}</Contents>
            </ContensBox>
          </Message>
        ))}
      </MessageBox>
      <Bottom>
        <NickInput
          placeholder="?????????"
          value={nick}
          onChange={(e) => onChangeNick(e.target.value)}
        />
        <MessageInput
          placeholder="?????? 30???"
          value={contents}
          onChange={(e) => onChangeContents(e.target.value)}
        />
        <Button onClick={addMessage}>?????????</Button>
      </Bottom>
    </Container>
  );
};

export default Cheering;
