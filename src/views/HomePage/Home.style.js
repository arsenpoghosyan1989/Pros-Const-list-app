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
