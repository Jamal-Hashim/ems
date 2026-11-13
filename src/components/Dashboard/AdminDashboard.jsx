import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className='w-full min-h-screen bg-gray-100'>
            <div className='p-5'>
                <Header data={props.data} changeUser={props.changeUser} />
                <CreateTask/>
                <AllTask/>
            </div>
        </div>
    )
}

export default AdminDashboard