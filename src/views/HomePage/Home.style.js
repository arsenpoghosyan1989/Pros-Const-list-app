/**
 * @file
 * Contains Home page component styles.
 */

import { dFlex } from '../../utils/index';
import styled from 'styled-components';

export const HomeContainerStyled = styled.div`
  width: 555px;
  color: ${(props) => props.theme.colors.dark.main};
  box-shadow: 0px 0px 3px 1px #a2a2a2;
  background-color: ${(props) => props.theme.colors.dark.secondary};

  @media ${(props) => props.theme.device.tablet} {
  }
`;

export const ProsConsContainer = styled.div`
  ${dFlex({ justify: 'center', align: 'center' })};
  color: ${(props) => props.theme.colors.dark.main};
  height: ${(props) => (props.height ? props.height : '')};
  margin-top: ${(props) => (props.marginT ? props.marginT : '')};
`;

export const Block = styled.div`
  ${({ justify = 'center', direction = 'row' }) =>
    dFlex({ justify, align: 'center', direction })
  };
  overflow-y: ${(props) => (props.overflow ? props.overflow : '')};
  margin-right: ${(props) => (props.marginR ? props.marginR : '')};
  padding: 10px 20px;
  background-color: white;
  width: 100%;
  height: 100%;
  font-size: 17px;
`;
