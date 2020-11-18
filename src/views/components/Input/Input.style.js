/**
 * @file
 * Contains Input component styles.
 */
import { dFlex } from '../../../utils/index';
import styled from 'styled-components';

export const Wrapper = styled.div`
  ${dFlex({ justify: 'flex-start', align: 'center' })};
  padding: 10px 5px;

  &>span{
    font-size: 20px;
    font-weight: 500;
  }
`;

export const InputContainer = styled.input`
  font-size: 18px;
  width: 100%;
  border: none;
  margin-left: 15px;
  padding: 1px;

  &:focus, &:active{
    outline: solid #2196F3 2px;
  }
`;
