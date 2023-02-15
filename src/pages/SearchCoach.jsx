import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { getCoach } from '../api/coachAPI';
import styled from 'styled-components';

const SearchCoach = () => {
  const [coachId, setCoachId] = useState('');
  const [coach, setCoach] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleInputChange = (e) => {
    setCoachId(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await getCoach(coachId);
      setCoach(response.data);
      setErrorMsg(null);
    } catch (error) {
      setCoach(null);
      setErrorMsg('알 수 없는 에러가 발생했습니다.');
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Container>
          <IdInput
            value={coachId}
            placeholder="코치 id(숫자)를 입력해주세요."
            id="coach-id"
            onChange={handleInputChange}
          />
          <Button width="6rem" height="auto">
            검색하기
          </Button>
        </Container>
      </form>
      {coach ? <p>{`이름: ${coach.name} | 역할: ${coach.role}`}</p> : null}
      {errorMsg ? <p>{errorMsg}</p> : null}
    </>
  );
};

const Container = styled.div`
  display: flex;
`;

const IdInput = styled(Input)`
  margin-right: 0.5rem;
`;

export default SearchCoach;
