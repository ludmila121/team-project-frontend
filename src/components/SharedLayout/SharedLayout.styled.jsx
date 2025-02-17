import styled from 'styled-components';
import { theme } from 'styles';

export const LayoutContainer = styled.div`
  min-width: 320px;
  margin: 0 auto;
  padding: 20px 20px 0;
  position: relative;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 26px 32px 0;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 30px 16px 0;
  }
`;
