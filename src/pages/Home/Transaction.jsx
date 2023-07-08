import styled from "styled-components";
import dayjs from "dayjs";

export default function Transaction({ date, description, amount, type }) {
  return (
    <ListItemContainer>
      <div>
        <span>{dayjs(date).format("DD/MM")}</span>
        <strong>{description}</strong>
      </div>
      <Value color={type}>
        {(amount / 100).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </Value>
    </ListItemContainer>
  );
}

const Value = styled.div`
  font-size: 16px;
  text-align: right;
  color: ${(props) => (props.color === "entrada" ? "green" : "red")};
`;
const ListItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color: #000000;
  margin-right: 10px;
  div span {
    color: #c6c6c6;
    margin-right: 10px;
  }
`;