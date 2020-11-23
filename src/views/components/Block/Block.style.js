/**
 * @file
 * Contains BlockContainer component styles.
 */
import { dFlex } from '../../../utils/index';
import styled from 'styled-components';

export const BlockContainer = styled.div`
  ${({ styles }) =>
    styles &&
    dFlex({
      justify: styles.justify,
      align: 'center',
      direction: styles.direction,
    })};
  overflow-y: ${(props) =>
    props?.styles?.overflow ? props.styles.overflow : ''};
  margin-right: ${(props) =>
    props?.styles?.marginR ? props.styles.marginR : ''};
  padding: 10px 20px;
  background-color: white;
  width: 100%;
  height: 100%;
  font-size: 17px;
  text-align: center;
`;
