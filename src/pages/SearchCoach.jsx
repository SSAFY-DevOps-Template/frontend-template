import { getCoach, getCoachList } from '../api/coachAPI';

const SearchCoach = () => {
  const handleGetCoachButtonClick = async () => {
    const response = await getCoach(1);
    console.log(response.data);
  };

  const handleGetCoachListButtonClick = async () => {
    const response = await getCoachList();
    console.log(response.data);
  };

  return (
    <>
      <h2>코치 조회</h2>
      <form>
        <label>코치 id</label>
        <input />
        <button>검색하기</button>
      </form>
    </>
  );
};

export default SearchCoach;
