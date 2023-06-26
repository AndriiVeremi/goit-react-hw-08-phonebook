import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 900;
  color: #fff;
  &:hover {
    color: teal;
  }
  &.active {
    color: #e91e63;
    font-weight: 900;
  }
`;