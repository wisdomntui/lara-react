import {useState} from 'react';
import Header from '../components/Header';
import api from '../api/api';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';

function NewTask() {
  const [name, setName] = useState('');
  const [completed, setCompleted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    if (!name.trim()) {
      setIsSubmitting(false);
      toast.error('The name field is required');
      return;
    }

    const data = {
      name,
      completed,
    };

    // Send post request
    api
      .post('/tasks', data)
      .then((response) => handleSuccess(response))
      .catch((error) => handleError(error))
      .finally(() => setIsSubmitting(false));
  };

  const handleSuccess = (response) => {
    console.log(response);
    toast.success(response.data.message);
    navigate('/home');
  };

  const handleError = (error) => {
    toast.error(error?.response?.data?.message);
  };

  return (
    <div className="flex flex-col w-full">
      <Header title="Create New Task" />
      <div className="w-full justify-items-center mt-5 border border-slate-200 py-4 rounded-md">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex flex-col text-left">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="border border-slate-200 rounded-md text-dark w-md h-[35px]"
              value={name}
              onInput={(e) => setName(e.target.value)}
            ></input>
          </div>

          <div className="flex gap-4 border-b border-slate-200 pb-3">
            <label>Completed</label>
            <div className="flex flex-col">
              <label>false</label>
              <input
                type="radio"
                name="completed"
                value={false}
                onChange={(e) => setCompleted(false)}
                checked
              />
            </div>
            <div className="flex flex-col">
              <label>true</label>
              <input
                type="radio"
                name="completed"
                value={true}
                onChange={(e) => setCompleted(true)}
              />
            </div>
          </div>

          <div className="text-left">
            <button
              type="submit"
              className="bg-blue-500 text-xs text-white rounded-md p-2"
              disabled={isSubmitting ? true : false}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewTask;
