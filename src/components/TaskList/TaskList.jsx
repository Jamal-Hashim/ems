import AcceptTask from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import NewTask from "./NewTask"
import FailedTask from "./FailedTask"

const TaskList = ({data}) => {
  console.log(data);
  
  return (
    <div className="w-full p-3 sm:p-5 bg-white mt-5 rounded-xl">

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">

        {data.tasks.map((elem,idx)=>{
          if(elem.active){
            return <AcceptTask key={idx} data={elem} />
          }
          else if(elem.newTask){
            return <NewTask key={idx} data={elem} />
          }
          else if(elem.completed){
            return <CompleteTask key={idx} data={elem} />
          }
          else if(elem.failed){
            return <FailedTask key={idx} data={elem} />
          }
        })}

      </div>
    </div>
  )
}

export default TaskList