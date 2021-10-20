import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  background-color: #ededed;
  color: #878787;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MadeP = styled.p`
  display: inline-block;
`;

export default function Footer() {
  return (
    <>
      <FooterDiv>
        <a href="https://github.com/floraRoh" target="_blank">github 바로가기</a>
          <MadeP>@2021 Made by Flora</MadeP>
      </FooterDiv>
    </>
  );
}
