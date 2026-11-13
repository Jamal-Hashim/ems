import { useState } from "react";

const CreateTask = () => {

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('')

  const [newTask,setNewTask]=useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false});
    
    const data=JSON.parse(localStorage.getItem('employees'));
    
    data.forEach(elem => {
        if(assignTo==elem.firstName){
          elem.tasks.push(newTask)          
                    
        }
    });
    localStorage.setItem('employees',JSON.stringify(data));

    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
    
    

  }

  return (
    <div className='w-full p-4 sm:p-6 bg-white mt-5 sm:mt-7 rounded-xl shadow-sm border border-slate-100'>

      <h2 className='text-xl sm:text-2xl font-bold text-slate-800 mb-6'>
        Create New Task
      </h2>

      <form onSubmit={(e) => {
        submitHandler(e);
      }} className='grid grid-cols-1 lg:grid-cols-2 gap-6'>

        {/* Left Side - Task Details */}
        <div className='flex flex-col gap-4'>

          <div>
            <label className='block text-sm font-semibold text-slate-700 mb-2'>
              Task Title
            </label>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value)
              }}
              className='w-full text-sm py-3 px-4 rounded-lg outline-none bg-slate-50 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all'
              type="text"
              placeholder='Make a UI Design'
            />
          </div>

          <div>
            <label className='block text-sm font-semibold text-slate-700 mb-2'>
              Date
            </label>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value)
              }}
              className='w-full text-sm py-3 px-4 rounded-lg outline-none bg-slate-50 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all'
              type="date"
            />
          </div>

          <div>
            <label className='block text-sm font-semibold text-slate-700 mb-2'>
              Assign To
            </label>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value)
              }}
              className='w-full text-sm py-3 px-4 rounded-lg outline-none bg-slate-50 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all'
              type="text"
              placeholder='Employee Name'
            />
          </div>

          <div>
            <label className='block text-sm font-semibold text-slate-700 mb-2'>
              Category
            </label>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
              }}
              className='w-full text-sm py-3 px-4 rounded-lg outline-none bg-slate-50 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all'
              type="text"
              placeholder='Design, Development, etc.'
            />
          </div>

        </div>

        {/* Right Side - Description */}
        <div className='flex flex-col'>

          <label className='block text-sm font-semibold text-slate-700 mb-2'>
            Description
          </label>

          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value)
            }}
            className='w-full min-h-[180px] lg:h-full lg:min-h-[250px] text-sm py-3 px-4 rounded-lg outline-none bg-slate-50 border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none'
            placeholder='Write task description here...'
          ></textarea>

          <button
            type="submit"
            className='bg-blue-600 py-3 px-5 rounded-lg text-sm mt-5 w-full text-white font-semibold hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 cursor-pointer'
          >
            Create Task
          </button>

        </div>

      </form>
    </div>
  )
}

export default CreateTask