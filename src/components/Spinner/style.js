import styled from '@emotion/styled'

export const StyledSpinner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;
  background-color: var(--background-opacity);
  backdrop-filter: blur(10px);

  div {
    width: 48px;
    height: 48px;
    border: 3px solid #fff;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    ::after {
      content: '';
      box-sizing: border-box;
      position: absolute;
      left: 0;
      top: 0;
      background: var(--primary);
      width: 16px;
      height: 16px;
      transform: translate(-50%, 50%);
      border-radius: 50%;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`
