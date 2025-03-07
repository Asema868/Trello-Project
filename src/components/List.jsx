import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";
import Cart from "../components/Cart";
import { addCard, archiveList, duplicateList, editList } from "../store/store";
import { GrClose } from "react-icons/gr";
import { AiOutlineEllipsis } from "react-icons/ai";

const List = ({ list }) => {
  const dispatch = useDispatch();
  const [cardText, setCardText] = useState("");
  const [isCardInputVisible, setCardInputVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [newTitle, setNewTitle] = useState(list.title);

  const handleAddCard = () => {
    if (cardText.trim()) {
      dispatch(addCard({ listId: list.id, text: cardText }));
      setCardText("");
      setCardInputVisible(false);
    }
  };

  const handleArchive = () => {
    dispatch(archiveList({ listId: list.id }));
  };

  const handleDuplicate = () => {
    dispatch(duplicateList({ listId: list.id }));
  };

  const handleTitleEdit = () => {
    if (newTitle.trim()) {
      dispatch(editList({ listId: list.id, title: newTitle }));
      setIsEditingTitle(false);
    }
  };

  return (
    <ListContainer>
      <Header>
        {isEditingTitle ? (
          <Input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onBlur={handleTitleEdit}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleTitleEdit();
              }
            }}
          />
        ) : (
          <>
            <h2>{list.title}</h2>
            <MenuButton onClick={() => setIsEditingTitle(true)}></MenuButton>
          </>
        )}
        <MenuButton onClick={() => setShowMenu(!showMenu)}>
          <AiOutlineEllipsis fontSize={"29px"} />
        </MenuButton>
        {showMenu && (
          <Menu>
            <MenuItem onClick={() => setIsEditingTitle(true)}>
              Изменить заголовок
            </MenuItem>
            <MenuItem onClick={handleDuplicate}>Копировать</MenuItem>
            <MenuItem onClick={handleArchive}>Архивировать</MenuItem>
          </Menu>
        )}
      </Header>
      {list.cards.map((card) => (
        <Cart key={card.id} card={card} />
      ))}
      {!isCardInputVisible ? (
        <AddCardButton onClick={() => setCardInputVisible(true)}>
          <FaPlus /> Добавить карточку
        </AddCardButton>
      ) : (
        <AddCardContainer>
          <Input
            type="text"
            value={cardText}
            onChange={(e) => setCardText(e.target.value)}
            placeholder="Ввести заголовок для этой карточки"
          />
          <Button onClick={handleAddCard}>
            Добавить
            <GrClose
              onClick={() => setCardInputVisible(false)}
              style={{ cursor: "pointer", color: "white", marginLeft: "8px" }}
            />
          </Button>
        </AddCardContainer>
      )}
    </ListContainer>
  );
};

export default List;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: 2px solid #dfe1e6;
  padding-bottom: 4px;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #5e6c84;
  font-size: 18px;
  transition: color 0.2s;

  &:hover {
    color: #172b4d;
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 35px;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  z-index: 10;
  width: 160px;
  animation: fadeIn 0.2s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const MenuItem = styled.div`
  padding: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: #0079bf;
    color: white;
  }
`;

const AddCardButton = styled.button`
  background: none;
  border: none;
  color: #5e6c84;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: color 0.2s;

  &:hover {
    color: #172b4d;
  }
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  transition: border 0.2s;

  &:focus {
    border: 2px solid #0079bf;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 8px;
  background: #172b4d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;

  &:hover {
    background: #08275e;
  }
`;

const AddCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 4px;
  height: fit-content;
`;

const ListContainer = styled.div`
  background: #f9f9f9;
  padding: 12px;
  border-radius: 8px;
  min-width: 250px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  height: fit-content;

  &:hover {
    transform: scale(1.01);
  }
`;
