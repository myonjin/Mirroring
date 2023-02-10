import { css } from '@emotion/react'

export const videoList = (props) => {
  return css`
    display: ${props.mode === 0 ? 'flex' : 'none'};
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  `
}

export const codeEidt = (props) => {
  return css`
    display: ${props.mode === 1 ? 'block' : 'none'};
    border: 1px solid black;
    border-radius: 25px;
    height: 95%;
    width: 90%;
    margin: auto;
    font-family: 'D2coding' !important;
  `
}

export const share = (props) => {
  return css`
    display: ${props.mode === 2 ? 'flex' : 'none'};
    align-items: center;
  `
}
