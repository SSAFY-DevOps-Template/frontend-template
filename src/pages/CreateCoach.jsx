import { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';
import { createCoach } from '../api/coachAPI';

const CreateCoach = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [result, setResult] = useState(null);

  const handleNameInputChange = (e) => {
    setName(e.target.value);
  };

  const handleRoleInputChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const coachData = {
      name: name,
      role: role,
    };
    try {
      const response = await createCoach(coachData);
      setResult(
        `코치가 추가되었습니다. 이름: ${response.data.name} | 역할: ${response.data.role}`,
      );
    } catch (error) {
      setResult('알 수 없는 에러가 발생했습니다.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Ul>
          <Li>
            <Input
              value={name}
              id="name"
              placeholder="이름을 입력해주세요."
              onChange={handleNameInputChange}
            />
          </Li>
          <Li>
            <Input
              value={role}
              id="role"
              placeholder="역할을 입력해주세요."
              onChange={handleRoleInputChange}
            />
          </Li>
        </Ul>
        <Button width="6rem">추가하기</Button>
      </form>
      {result ? <p>{result}</p> : null}
    </>
  );
};

const Ul = styled.ul`
  padding: 0px;
  list-style: none;
`;

const Li = styled.li`
  margin-bottom: 1rem;
`;

export default CreateCoach;
