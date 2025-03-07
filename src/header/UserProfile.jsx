import React, { useState } from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RiInformation2Line } from "react-icons/ri";
import styled from "styled-components";
import Modal from "../UI/Modal";
import { CgProfile } from "react-icons/cg";

const UserProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("auth");
    window.location.pathname = "/";
  };

  return (
    <div>
      <ProfileContainer>
        <SearchInput type="text" placeholder="Поиск" />
        <IconsWrapper>
          <MdOutlineNotificationsActive fontSize={32} color="white" />
          <RiInformation2Line fontSize={34} color="white" />
          <CgProfile
            onClick={handleLogoutClick}
            fontSize={31}
            color="white"
            cursor="pointer"
          />
        </IconsWrapper>

        {isModalOpen && (
          <Modal>
            <ModalOverlay>
              <ModalContainer>
                <ModalTitle>Вы уверены, что хотите выйти?</ModalTitle>
                <ButtonGroup>
                  <ModalButton onClick={confirmLogout}>Да</ModalButton>
                  <ModalButton onClick={() => setIsModalOpen(false)}>
                    Нет
                  </ModalButton>
                </ButtonGroup>
              </ModalContainer>
            </ModalOverlay>
          </Modal>
        )}
      </ProfileContainer>
    </div>
  );
};

export default UserProfile;

const ProfileContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const SearchInput = styled.input`
  background-color: #444;
  border: none;
  width: 220px;
  font-size: 16px;
  padding: 10px 15px;
  border-radius: 8px;
  color: #fff;
  outline: none;
  transition: background-color 0.3s;

  &:focus {
    background-color: #555;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8); 
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContainer = styled.div`
  background: linear-gradient(135deg, #4b6cb7, #182848);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 350px; 
  animation: slideIn 0.3s;

  @keyframes slideIn {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const ModalTitle = styled.h1`
  color: #fff;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center; 
  gap: 10px; 
`;

const ModalButton = styled.button`
  background-color: #f44336; 
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background-color: #c62828; 
    transform: scale(1.05); 
  }

  &:last-child {
    background-color: #4caf50; 

    &:hover {
      background-color: #388e3c; 
    }
  }
`;
