import React from "react";
import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserProfile from "./UserProfile";
import Board from "../components/Board";

const Header = () => {
  return (
    <StyledDiv>
      <Container>
        <HeaderMenu />
        <UserProfile />
      </Container>
      <section>
        <Board />
      </section>
    </StyledDiv>
  );
};

export default Header;

const StyledDiv = styled.div`
  .section {
    width: 100%;
    height: 60px;
    overflow-x: scroll;
  }
  background-image: url("https://i.pinimg.com/736x/34/70/aa/3470aacb5d2db158f98dcd458a854a4a.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;
const Container = styled.header`
  width: 100%;
  height: 80px;
  background: linear-gradient(135deg, #4b6cb7, #182848);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
