'use client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { css ,jsx} from '@emotion/react';

const buttonStyle = css({
  boxSizing: 'border-box',
  width: 300,
  height: 200,
})

const Navbar = () => {
  return (
    <nav css={css`
    background-color: red ;
    wih`}>
        <div
          css={css`
            padding: 32px;
            background-color: hotpink;
            font-size: 24px;
            border-radius: 4px;
            &:hover {
              color: red;
            }
          `}
        >
          Hover to change color.
        </div>
  </nav>
  )
}

export default Navbar
