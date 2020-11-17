/**
 * @file
 * Contains Button component styles.
 */
import styled from 'styled-components';

export const ButtonContainer = styled.button`
  font-size: ${props => `${props.textsize}px` || '25px'}

  ${props => console.log(props)}
  ${props => props.rotate && `
    img {
      transform: rotate(${props.rotate}deg);
    }
  `}
`;
