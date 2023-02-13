import { createCoach } from '../api/coachAPI';

const CreateCoach = () => {
  const handleCreateCoachButtonClick = async () => {
    const coachData = {
      name: 'hyeonsoo',
      role: 'coach',
    };
    const response = await createCoach(coachData);
    console.log(response.data);
  };

  return (
    <>
      <h2>코치 추가</h2>
      <form>
        <label>코치 이름</label>
        <input />
        <label>코치 역할</label>
        <input />
        <button>추가하기</button>
      </form>
    </>
  );
};

export default CreateCoach;
