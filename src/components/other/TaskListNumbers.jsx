
const TaskListNumbers = ({data}) => {
    return (
        <div className='bg-white p-3 sm:p-5 mt-5 rounded-xl'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5'>

                <div className="rounded-xl py-5 sm:py-6 px-5 sm:px-7 hover:shadow-lg transition-all duration-300 bg-blue-400">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-white">{data.taskCounts.newTask}</h2>
                    <h3 className="text-base sm:text-xl font-medium text-white">New Task</h3>
                </div>

                <div className="rounded-xl py-5 sm:py-6 px-5 sm:px-7 hover:shadow-lg transition-all duration-300 bg-green-400">
                    <h2 className="text-2xl sm:text-3xl font-semibold hover:shadow-lg transition-all duration-300 text-white">{data.taskCounts.completed}</h2>
                    <h3 className="text-base sm:text-xl font-medium text-white">Completed</h3>
                </div>

                <div className="rounded-xl py-5 sm:py-6 px-5 sm:px-7 hover:shadow-lg transition-all duration-300 bg-yellow-400">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-white">{data.taskCounts.active}</h2>
                    <h3 className="text-base sm:text-xl font-medium text-white">Accepted</h3>
                </div>

                <div className="rounded-xl py-5 sm:py-6 px-5 sm:px-7 hover:shadow-lg transition-all duration-300 bg-red-400">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-white">{data.taskCounts.failed}</h2>
                    <h3 className="text-base sm:text-xl font-medium text-white">Failed</h3>
                </div>

            </div>
        </div>
    )
}

export default TaskListNumbers