import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import List from "./List";
import { addList } from "../store/store";

const Board = () => {
  const lists = useSelector((state) => state.board.lists);
  const dispatch = useDispatch();
  const [listTitle, setListTitle] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleAddList = () => {
    if (listTitle.trim()) {
      dispatch(addList({ title: listTitle }));
      setListTitle("");
      setIsAdding(false);
    }
  };
  const handleCancel = () => {
    setListTitle("");
    setIsAdding(false);
  };

  return (
    <BoardContainer>
      {lists.map((list) => (
        <List key={list.id} list={list} />
      ))}
      <div>
        {!isAdding ? (
          <Button1 onClick={() => setIsAdding(true)}>Добавить список</Button1>
        ) : (
          <>
            <Input
              type="text"
              value={listTitle}
              onChange={(e) => setListTitle(e.target.value)}
              placeholder="Название списка"
            />
            <ButtonContainer>
              <Button onClick={handleAddList}>Добавить</Button>
              <CancelButton onClick={handleCancel}>Отмена</CancelButton>
            </ButtonContainer>
          </>
        )}
      </div>
    </BoardContainer>
  );
};

export default Board;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CancelButton = styled.button`
  background: #ff6b6b;
  width: auto;
  background: #686161;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: #776969;
  }
`;
const BoardContainer = styled.div`
  display: flex;

  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  max-width: 100%;
  overflow: hidden;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  transition: border 0.2s;
  resize: none;
  height: 50px;

  &:focus {
    border: 2px solid #0079bf;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 121, 191, 0.5);
  }
`;

const Button = styled.button`
  width: 140px;
  background: #373c6f;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: #333760;
  }
`;

const Button1 = styled.button`
  width: 200px;
  background: #373c6f;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: #333760;
  }
`;
