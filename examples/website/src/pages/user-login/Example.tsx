import styled, { css } from 'styled-components';
import { Link } from '@kkt/pro';
import UserLogin from '@uiw-admin/user-login';
import * as datas from './Examples';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 0.953rem;
`;

const Title = styled.div`
  width: auto !important;
  height: auto !important;
  position: absolute;
  transform: scale(1) !important;
  background-color: rgba(var(--color-rgb) / 39%);
  color: var(--color-canvas-default);
  border-radius: 5px;
  padding: 1px 4px 3px 4px;
  top: -25px;
  left: 10px;
  transition: all 0.3s;
`;

const Inner = styled(Link)<{ magnify?: number }>`
  overflow: hidden;
  display: block;
  position: relative;
  width: 326px;
  height: 265px;
  border-radius: 0.571rem;
  text-decoration: none;
  box-shadow: 0 0px 3px transparent;
  border: 1px solid transparent;
  transition: all 0.3s;
  &::before {
    content: '';
    display: block;
    position: absolute;
    background-color: transparent;
    transition: all 0.3s;
    z-index: 2;
    inset: 0;
  }
  &:hover {
    box-shadow: 0 0px 3px rgba(0, 0, 0, 0.1);
    border-color: rgb(0 0 0 / 11%);
  }
  &:hover ${Title} {
    top: 10px;
  }
  &:hover::before {
    background-color: var(--color-neutral-muted);
  }
  & > * {
    transform-origin: top left;
    ${({ magnify = 2 }) => css`
      transform: scale(${326 / (326 * magnify)});
      width: ${326 * magnify}px;
      height: ${265 * magnify}px;
    `}
  }
`;

const defulat = {
  magnify: 2.3,
  children: <UserLogin api="/api/login" />,
};

export const Example = () => {
  return (
    <Wrapper>
      <Inner
        target="_blank"
        to={`https://github.com/uiwjs/uiw-admin/blob/master/packages/user-login/README.md`}
        magnify={defulat.magnify}
      >
        {defulat.children}
        <Title>defulat</Title>
      </Inner>
      {Object.keys(datas).map((path, key) => {
        const comps = datas[path as keyof typeof datas];
        return (
          <Inner
            target="_blank"
            key={key}
            to={`https://uiwjs.github.io/react-login-page/#/pages/${path}`}
            magnify={comps.magnify}
          >
            {comps.children}
            <Title>{path}</Title>
          </Inner>
        );
      })}
    </Wrapper>
  );
};
