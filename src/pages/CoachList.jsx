import { useEffect, useState } from 'react';
import { getCoachList } from '../api/coachAPI';

const CoachList = () => {
  const [coachLi, setCoachLi] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const asyncGetCoachList = async () => {
      try {
        const response = await getCoachList();
        setCoachLi(response.data);
        setErrorMsg(null);
      } catch (error) {
        setCoachLi([]);
        setErrorMsg('알 수 없는 에러가 발생했습니다.');
      }
    };
    asyncGetCoachList();
  }, []);

  return (
    <>
      <ul>
        {coachLi.map((coach, idx) => (
          <li key={idx}>{`이름: ${coach.name} | 역할: ${coach.role}`}</li>
        ))}
      </ul>
      {errorMsg ? <p>{errorMsg}</p> : null}
    </>
  );
};

export default CoachList;
