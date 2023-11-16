import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #828e6d;
  font-size: 20px;
  
  &:hover {
    color: #8e6d8a;
  }

  &.active {
    color: #8e6d8a;
    font-weight: 900;
    font-size: 20px;
  }
`;