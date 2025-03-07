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

  return (
    <BoardContainer>
      {lists.map((list) => (
        <List key={list.id} list={list} />
      ))}
      <div>
        {!isAdding ? (
          <Button onClick={() => setIsAdding(true)}>
            Добавить карточку
          </Button>
        ) : (
          <>
            <Input
              type="text"
              value={listTitle}
              onChange={(e) => setListTitle(e.target.value)}
              placeholder="Название списка"
            />
            <Button onClick={handleAddList}>Добавить</Button>
          </>
        )}
      </div>
    </BoardContainer>
  );
};

export default Board;

const BoardContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  overflow-x: auto;
  border-radius: 8px;
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
  background: #373c6f;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: #333760
  }
`;
