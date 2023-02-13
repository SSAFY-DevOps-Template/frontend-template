import { Routes, Route, Link } from 'react-router-dom';
import Main from './pages/Main';
import SearchCoach from './pages/SearchCoach';
import CreateCoach from './pages/CreateCoach';
import UpdateCoach from './pages/UpdateCoach';

function App() {
  return (
    <>
      <h1>SSAFY COACH APP</h1>
      <ul>
        <li>
          <button>
            <Link to="/">홈</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/search-coach">코치 조회</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/create-coach">코치 추가</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/update-coach">코치 수정</Link>
          </button>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search-coach" element={<SearchCoach />} />
        <Route path="/create-coach" element={<CreateCoach />} />
        <Route path="/update-coach" element={<UpdateCoach />} />
      </Routes>
    </>
  );
}

export default App;
