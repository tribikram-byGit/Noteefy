import {useState, useEffect} from 'react'
import Card from "./components/Task_card";
import API from "./services/api";

function App() {
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');
    const [task, setTask] = useState([]);

    //fetch data from backend
    useEffect(() => {
        API.get("/tasks")
            .then(res => setTask(res.data))
            .catch(err => console.log(err));
    }, []);

    //add new task
    const addTask = async (e) => {
      e.preventDefault();
      if(!title) return alert("Task cannot be empty!");
      API.post("/tasks", {title, detail})
        .then(res => {setTask(prev => [...prev, res.data]);
              });
      setTitle('')
      setDetail('')
    }

  return (
    <div className="min-h-screen md:flex bg-gray-900">
    
      <form input='text'
            className='flex md:w-1/2 items-start flex-col p-4 gap-3 md:border-r-2'
          onSubmit={(e)=>{
            addTask(e)
          }}
          >

          <input type='text'
            placeholder='Enter Task name'
            className='w-full p-2 ml-1 font-medium text-indigo-500 border-2 rounded-t-lg outline-none hover:border-green-500'
            name="title"
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}/>

          <textarea placeholder='Enter Detail'
            className='w-full h-30 p-2 ml-1 font-medium text-indigo-500 border-2 rounded-b-lg outline-none hover:border-green-500'
            name='detail'
            value={detail}
            onChange={(e)=>{
              setDetail(e.target.value)
            }}>
          </textarea>
          <button 
            className='w-full bg-sky-600 active:scale-95 text-zinc-200 font-bold text-xl px-4 py-2 rounded-xl outline-none hover:bg-sky-500'>
              Add Task
          </button>
        </form>
    
        <div className="lg:w-1/2 p-4">
            <h1 className='text-xl font-bold text-slate-400'>Your NoTes</h1>
            <div className="flex flex-wrap mt-2 gap-5 overflow-auto">
              {task.map(function(elem,idx) {
                return (
                  <Card title={elem.title} detail={elem.detail} key={idx}/>
                )
              })}
            </div>
        </div>
    </div>
  );
}

export default App;
