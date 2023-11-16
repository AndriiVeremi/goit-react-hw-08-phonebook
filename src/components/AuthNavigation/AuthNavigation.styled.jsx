import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 900;
  color: #828e6d;
  font-size: 20px;
  &:hover {
    color: #8e6d8a;
    text-shadow: 0 0 10px #e6e6e6;
  }
  &.active {
    color: #8e6d8a;
    font-weight: 900;
  }
`;



