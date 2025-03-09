import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { signUpRequest } from "../store/thunks/authThunk";
import { Button, Div, Input, MessageError } from "./SignIn";
import { FaTrello } from "react-icons/fa";
import styled from "styled-components";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const SubmitHandler = (userData) => {
    if (userData.email === "admin@gmail.com") {
      userData.role = "ADMIN";
    } else {
      userData.role = "header";
    }
    dispatch(signUpRequest({ userData, navigate }));
  };
  return (
    <div>
      <div>
        <Div>
          <h1>
            {" "}
            <FaTrello color="#1d6db7" fontSize={"60px"} />
            Trello
          </h1>
        </Div>
        <StyledDiv>
          <h1>Регистрация в Trello</h1>

          <form onSubmit={handleSubmit(SubmitHandler)}>
            <Input
              type="text"
              placeholder="Enter first name"
              {...register("firstName", { required: "Введите имя" })}
            />
            <MessageError>{errors?.firstName?.message}</MessageError>
            <Input
              type="text"
              placeholder="Enter last name"
              {...register("lastName", { required: "Введите фамилию" })}
            />
            <MessageError>{errors?.lastName?.message}</MessageError>
            <Input
              type="email"
              placeholder="Enter email"
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
              placeholder="Enter password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Введите password",
                },
                minLength: {
                  value: 5,
                  message: "Пароль должен быть не менее 5 чисел",
                },
              })}
            />
            <MessageError>{errors?.password?.message}</MessageError>
            <Button>Sign Up</Button>
            <BackLink to={"/"}>Вернуться обратно</BackLink>
          </form>
        </StyledDiv>
      </div>
    </div>
  );
};

export default SignUp;
const BackLink = styled(Link)`
  margin-top: 10px;
  text-decoration: none;
  font-size: 20px;
  color: #1b1d52;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    text-decoration: underline;
  }
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
    margin-bottom: 35px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
`;
