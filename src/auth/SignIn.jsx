import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { signInRequest } from "../store/thunks/authThunk";
import styled from "styled-components";
import { FaTrello } from "react-icons/fa";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

  const handleTeg = () => {
    navigate("/signUp");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (userData) => {
    userData.role = userData.email === "admin@gmail.com" ? "ADMIN" : "USER";
    dispatch(signInRequest({ userData, navigate }));
  };

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <div>
      <Div>
        <h1>
          <FaTrello color="#1d6db7" fontSize={"60px"} />
          Trello
        </h1>
      </Div>
      <StyledDiv>
        <h1>Вход в Trello</h1>
        <form onSubmit={handleSubmit(SubmitHandler)}>
          <Input
            type="email"
            placeholder="Укажите адрес электронной почты"
            {...register("email", {
              required: { value: true, message: "Не правильный email" },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Не правильный email",
              },
            })}
          />
          <MessageError>{errors?.email?.message}</MessageError>
          <Input
            type="password"
            placeholder="Введите пароль"
            {...register("password", {
              required: {
                value: true,
                message: "Введите password",
              },
              minLength: {
                value: 5,
                message: "Пароль должен быть не менее 5 символов",
              },
            })}
          />
          <MessageError>{errors?.password?.message}</MessageError>
          {isLogoutModalVisible && (
            <Modal>
              <ModalTitle>Вы уверены, что хотите выйти?</ModalTitle>
              <ActionButtons>
                <Button onClick={logout}>Да</Button>
                <Button onClick={() => setIsLogoutModalVisible(false)}>
                  Нет
                </Button>
              </ActionButtons>
            </Modal>
          )}
          <Button type="submit">Продолжить</Button>
          <SectionTeg>
            <Ateg href="#">Нет аккаунта?</Ateg>
            <Link href="#" onClick={handleTeg}>
              Зарегистрироваться
            </Link>
          </SectionTeg>
        </form>
      </StyledDiv>
    </div>
  );
};

export default SignIn;
const SectionTeg = styled.section`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Div = styled.div`
  color: #434586;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  margin-top: 50px;
  animation: fadeIn 0.5s ease-in-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
const Ateg = styled.a`
  text-decoration: none;
  display: block;
  text-align: center;
  font-size: 20px;
  color: #1b1d52;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #0dbd33;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  position: relative;

  &:hover {
    background-color: #2c833f;
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    bottom: -26px;
    left: 0;
    transition: background-color 0.3s;
  }
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 20px;
  color: #1b1d52;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const MessageError = styled.span`
  color: #aa0b0b;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;

  height: 570px;
  background: linear-gradient(135deg, #5aa172, #c1d2dc);
  width: 520px;
  margin: 50px auto;
  padding: 30px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;

  color: #434586;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  h1 {
    color: #1b1d52;
    margin-bottom: 45px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
`;
