import styled from 'styled-components';
import { Link } from '@kkt/pro';
import { ReactComponent as LogoIcon } from './logo-large.svg';
import { Example } from './Example';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 9;
  padding-bottom: 60px;
`;

const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 900;
  line-height: 2.5rem;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 0;
`;
const SubTitle = styled.h2`
  color: var(--color-fg-subtle);
  font-size: 1.5rem;
  font-weight: normal;
  line-height: 2rem;
  text-align: center;
  max-width: 36rem;
  margin: 0.75rem auto 2rem auto;
`;

const Logo = styled(LogoIcon)`
  margin: 60px auto;
  display: block;
`;

const Nav = styled.nav`
  text-align: center;
  margin-bottom: 3rem;
  gap: 0.845rem;
  display: flex;
  justify-content: center;
  a {
    padding: 0.63rem 1.1rem;
    font-weight: 700;
    background: var(--color-neutral-muted);
    border-radius: 0.3rem;
    transition: all 0.3s;
    text-decoration: none;
    &:hover {
      background: var(--color-canvas-subtle);
    }
  }
`;

const Header = styled.div``;
const VersionInfo = styled.sup`
  text-align: center;
  color: var(--color-fg-subtle);
  position: absolute;
  font-size: 12px;
  font-weight: normal;
  margin-left: 10px;
  line-height: 12px;
`;

// const version = VERSION;

const Home = () => {
  return (
    <Wrapper>
      <Header>
        <Logo height="4rem" />
      </Header>
      <Title>
        React Login Page
        {/* <VersionInfo>v{version}</VersionInfo> */}
      </Title>
      <SubTitle>
        Install and use react login page components quickly and easily, with
        flexible APIs for modifying these components.
      </SubTitle>
      <Nav>
        <Link to="/docs">Documentation</Link>
        <a
          href="https://github.com/uiwjs/react-login-page"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </Nav>
      <Example />
    </Wrapper>
  );
};

export default Home;
