import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import SearchCoach from './pages/SearchCoach';
import CoachList from './pages/CoachList';
import CreateCoach from './pages/CreateCoach';
import UpdateCoach from './pages/UpdateCoach';
import TopNav from './components/TopNav';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <h1>SSAFY COACH APP</h1>
      <TopNav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search-coach" element={<SearchCoach />} />
        <Route path="/coach-list" element={<CoachList />} />
        <Route path="/create-coach" element={<CreateCoach />} />
        <Route path="/update-coach" element={<UpdateCoach />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 480px;
`;

export default App;
