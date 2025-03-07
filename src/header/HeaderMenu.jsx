import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { FaTrello } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";
import styled from "styled-components";

const HeaderMenu = () => {
  return (
    <StyledNavMenu>
      <CgMenuGridO fontSize={"27px"} />
      <section>
        <FaTrello fontSize={"23px"} />
        <h2>TRELLO</h2>
      </section>
      <nav>
        <a>
          Недавние <HiChevronDown />
        </a>
        <a>
          Рабочое пространство <HiChevronDown />
        </a>
        <a>
          В избранном <HiChevronDown />
        </a>
        <a>
          Больше <HiChevronDown />
        </a>
      </nav>
      <button className="create-btn">Создать</button>
    </StyledNavMenu>
  );
};

export default HeaderMenu;

const StyledNavMenu = styled.div`
  display: flex;
  align-items: center;
  background-color: #0c689e77;
  padding: 10px 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  .create-btn {
    padding: 8px 16px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin-left: 20px;
    font-size: 16px;
    color: #fff;
    background-color: #61bd4f;
    transition: background-color 0.3s;

    &:hover {
      background-color: #5aa65e;
    }
  }

  nav {
    display: flex;
    gap: 15px;
    margin-left: 20px;
    font-size: 16px;
    color: white;

    a {
      color: white;
      text-decoration: none;
      display: flex;
      align-items: center;
      transition: color 0.3s;

      &:hover {
        color: #e4e5e9;
      }
    }
  }

  section {
    display: flex;
    align-items: center;
    color: white;
    gap: 10px;

    h2 {
      font-size: 24px;
      margin: 0;
    }
  }
`;
