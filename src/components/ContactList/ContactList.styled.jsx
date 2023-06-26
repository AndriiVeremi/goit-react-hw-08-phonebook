import styled from '@emotion/styled';

// export const Item = styled.li`
//   display: flex;
//   align-items: center;
// `;

// export const Name = styled.p`
//   margin-right: 20px;
// `;

// export const Text = styled.p`
//   margin-right: 40px;
// `;

// export const Button = styled.button`
//   border: 1px solid #2196f3;
//   border-radius: 5px;
//   margin-left: auto;
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   width: 80px;
//   height: 20px;
//   color: #f44336;
//   font-weight: 700;
// `;





// export const List = styled.ul`
//   margin: 0;
//   padding: 0 0 0 15px;
//   list-style-type: circle;
// `;
// export const Li = styled.li`
//   display: list-item;
//   font-size: 12px;
// `;
// export const Delete = styled.button`
//   background-color: #ffcec8;
//   border: 1px solid grey;
//   border-radius: 3px;
//   margin-left: 7px;
//   padding: 3px;
//   font-size: 12px;
//   height: min-content;
//   &:hover,
//   &:active,
//   &:focus {
//     background-color: teal;
//   }
// `;













export const List = styled.ul`
  list-style: none;
  min-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 2px solid #0047ab;
  border-radius: 3px;
  padding: 20px;
`;

export const Button = styled.button`
  width: 80px;
  height: 100%;
  background-color: transparent;
  border: none;
  font-size: 18px;
  font-weight: 500;
  color: #0047ab;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const Text = styled.p`
  color: #0047ab;
  font-size: 16px;
`;