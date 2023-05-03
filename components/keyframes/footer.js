import { keyframes } from "styled-components";

export const slidein = keyframes`
  from {
    opacity: 0;
    bottom: -100px;
    transform: translateY(100%);
  }

  to {
    bottom: 24px;
    opacity: 1;
    transform: translateY(0);
  }
`;
export const slideout = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(100%);
  }
`;
