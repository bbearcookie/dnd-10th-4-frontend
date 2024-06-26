import { css } from '@emotion/react';

const style = {
  background: (imageUrl: string) => css`
    @keyframes gradient {
      0% {
        background-position: 0% 0%;
      }

      100% {
        background-position: 36000% 0%;
      }
    }

    min-height: 100svh;
    background-color: #ffeecb;
    background-image: url(${imageUrl});
    background-size: 390px 100svh;
    background-repeat: repeat-x;
    animation: gradient linear infinite;

    @media (min-width: 0) and (max-width: 450px) {
      background-size: 90vw 100%;
    }

    @media (min-width: 0) {
      animation-duration: 1000s;
    }

    @media (min-width: 450px) {
      animation-duration: 2400s;
    }

    @media (min-width: 600px) {
      animation-duration: 4800s;
    }

    @media (min-width: 650px) {
      animation-duration: 6400s;
    }

    @media (min-width: 700px) {
      animation-duration: 9600s;
    }

    @media (min-width: 800px) {
      animation-duration: 14400s;
    }

    @media (min-width: 900px) {
      animation-duration: 16000s;
    }

    @media (min-width: 1000px) {
      animation-duration: 19200s;
    }

    @media (min-width: 1200px) {
      animation-duration: 28800s;
    }

    @media (min-width: 1400px) {
      animation-duration: 40000s;
    }
  `,
};

export default style;
