import { css } from '@emotion/react';
import COLORS from '@/constants/colors';

export type PolaroidSize = 'sm' | 'lg';

const style = {
  empty: (bottomPosition: number, leftPosition: number) => css`
    position: absolute;
    bottom: ${bottomPosition}rem;
    left: ${leftPosition}rem;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    width: 4.25rem;
    height: 6.25rem;
    padding: 0.25rem;
    border: 1px dashed var(--Letter-chips-letter-chip2, #6f6b63);
    border-radius: 0.125rem;
    background: var(--Letter-chips-letter-chip-bg, rgb(204 199 190 / 0.3));
    cursor: pointer;
    transform: rotate(-15deg);
  `,
  img: (
    bottomPosition: number,
    leftPosition: number,
    size: PolaroidSize,
  ) => css`
    background: #fff;
    ${size === 'sm' &&
    `
      bottom: ${bottomPosition}rem;
      left: ${leftPosition}rem;
    `}
    ${sizeStyle[size]}
  `,
};

const sizeStyle = {
  sm: css`
    position: absolute;
    width: 4.25rem;
    height: 6.25rem;
    padding: 0.25rem 0.25rem 1rem;
    border: 0.030375rem solid ${COLORS.gray5};
    border-radius: 0.162rem;
    cursor: pointer;
    transform: rotate(-15deg);
  `,
  lg: css`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    height: 52vh;
    padding: 1.25rem 1.25rem 5rem;
    border-radius: 0.5rem;
    background-size: cover;
  `,
};

export default style;
