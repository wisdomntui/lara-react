import {useEffect, useState} from 'react';
import api from '../api/api';
import Header from '../components/Header';
import Table from '../components/Table';

function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [isLOading, setIsLoading] = useState(false);

  useEffect(() => {
    api
      .get('/tasks')
      .then((d) => setData(d.data))
      .catch((e) => setError(e.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLOading) return <p>Loading!</p>;

  return (
    <>
      <div className="flex flex-col w-full">
        <Header title="Task Manager App" />
        <div className="w-full justify-items-center mt-5">
          {data.length > 0 && <Table tasks={data} />}
        </div>
      </div>
    </>
  );
}

export default Home;
