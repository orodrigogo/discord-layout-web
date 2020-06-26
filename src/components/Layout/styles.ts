import styled from 'styled-components';

/**
 * Anotações da Estrutura do Grid Layout
 * 
 * SL = Server List
 * SN = Server Name
 * CI = Channel Info
 * CL = Channel List
 * CD = Channel Data
 * UI = User Info
 * 
 * É uma grid e 3 linhas e 4 colunas.
 */


export const Grid = styled.div`
  display: grid;

  grid-template-columns: 71px 240px auto 240px;
  grid-template-rows: 46px auto 52px;

  grid-template-areas: 
  'SL SN CI CI'
  'SL CL CD UL'
  'SL UI CD UL'
  ;

  height: 100vh;
  
`;
