import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TopNav = () => {
  const path = useLocation();

  const routerInfo = [
    { path: '/', navName: '홈' },
    { path: '/search-coach', navName: '코치 검색' },
    { path: '/coach-list', navName: '코치 목록' },
    { path: '/create-coach', navName: '코치 추가' },
    { path: '/update-coach', navName: '코치 수정' },
  ];

  return (
    <Ul>
      {routerInfo.map((route, idx) => (
        <Li key={idx}>
          <H2>
            <NavLink
              to={route.path}
              isactive={route.path === path.pathname ? 1 : 0}
            >
              {route.navName}
            </NavLink>
          </H2>
        </Li>
      ))}
    </Ul>
  );
};

const Ul = styled.ul`
  display: flex;
  padding: 0px;
  list-style: none;
`;

const Li = styled.li`
  margin-right: 1rem;
`;

const H2 = styled.h2`
  font-size: 1.2rem;
`;

const NavLink = styled(Link)`
  text-decoration: ${(props) => (props.isactive ? 'underline' : 'none')};
  color: ${(props) => (props.isactive ? 'royalblue' : 'black')};
`;

export default TopNav;
