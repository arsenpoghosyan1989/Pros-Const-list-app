/**
 * @file
 * Contains Home page component styles.
 */

import { dFlex } from '../../utils/index';
import styled from 'styled-components';

export const HomeContainerStyled = styled.div`
  width: 555px;
  color: ${(props) => props.theme.colors.white};
  box-shadow: ${(props) => props.theme.shadow.boxShadow};
  background-color: ${(props) => props.theme.colors.dark.secondary};

  @media ${(props) => props.theme.device.tablet} {
  }
`;

export const ProsConsContainer = styled.div`
  ${dFlex({ justify: 'center', align: 'center' })};
  color: ${(props) => props.theme.colors.dark.main};
  height: ${(props) => (props?.styles?.height ? props.styles.height : '')};
  margin-top: ${(props) =>
    props?.styles?.marginT ? props.styles.marginT : ''};
`;

export const Block = styled.div`
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
