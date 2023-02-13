import { updateCoach } from '../api/coachAPI';

const CreateCoach = () => {
  const handleUpdateCoachButtonClick = async () => {
    const coachData = {
      name: 'siwon',
      role: 'coach',
    };
    const response = await updateCoach(1, coachData);
    console.log(response.data);
  };

  return (
    <>
      <h2>코치 수정</h2>
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
