/**
 * @file
 * Contains Header component styles.
 */
import { dFlex } from '../../../utils/index';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  ${dFlex({ justify: 'center', align: 'center' })};
  background-color: ${(props) => props.theme.colors.dark.secondary};
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-weight: 600;
  height: 63px;
  width: calc(100% + 2px);
  margin-left: -1px;
`;
