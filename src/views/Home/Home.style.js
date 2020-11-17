/**
 * @file
 * Contains Login page component styles.
 */

import styled from 'styled-components';

export const HomeContainerStyled = styled.div`
  .get-started-container {
    p {
      color: ${props => props.theme.colors.dark.main};
      font-size: 14px;
      font-weight: 300;
    }
    a {
      text-transform: uppercase;
      font-weight: 900;
      font-size: 16px;
      padding-left: 5px;
    }
  }

`;
