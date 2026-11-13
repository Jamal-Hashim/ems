
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {

    const authData = useContext(AuthContext);

    const employees = authData?.employeesData || [];

    // Calculate total tasks
    const totalTasks = employees.reduce((total, elem) => {
        return total +
            (elem.taskCounts?.newTask || 0) +
            (elem.taskCounts?.active || 0) +
            (elem.taskCounts?.completed || 0) +
            (elem.taskCounts?.failed || 0);
    }, 0);

    return (
        <div className="w-full bg-white p-4 sm:p-5 rounded-xl mt-5 shadow-sm border border-slate-200">

            {/* Heading */}
            <div className="flex items-center justify-between mb-5">

                <div>
                    <h2 className="text-xl font-bold text-slate-800">
                        All Tasks
                    </h2>

                    <p className="text-sm text-slate-500 mt-1">
                        Manage and track all assigned tasks
                    </p>
                </div>

                <span className="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-sm font-semibold">
                    {totalTasks} Tasks
                </span>

            </div>

            {/* Employee Task List */}
            <div className="w-full max-h-[400px] overflow-auto">

                {/* Table Header */}
                <div className="min-w-[750px] flex sticky top-0 z-10 bg-slate-100 border border-slate-200 py-3 px-4 items-center rounded-lg mb-3">

                    <h3 className="text-xs font-bold text-slate-500 uppercase w-[20%]">
                        Employee
                    </h3>

                    <h3 className="text-xs font-bold text-blue-600 uppercase w-[20%] text-center">
                        New
                    </h3>

                    <h3 className="text-xs font-bold text-amber-600 uppercase w-[20%] text-center">
                        Active
                    </h3>

                    <h3 className="text-xs font-bold text-green-600 uppercase w-[20%] text-center">
                        Completed
                    </h3>

                    <h3 className="text-xs font-bold text-red-600 uppercase w-[20%] text-center">
                        Failed
                    </h3>

                </div>

                {/* Employee Rows */}

                {employees.length > 0 ? (

                    employees.map((elem) => (

                        <div
                            key={elem.id}
                            className="min-w-[750px] bg-slate-50 border border-slate-200 hover:bg-blue-50/50 transition-colors mb-3 py-4 px-4 flex items-center rounded-lg"
                        >

                            {/* Employee Name */}
                            <div className="w-[20%]">
                                <h2 className="text-sm font-semibold text-slate-700">
                                    {elem.firstName}
                                </h2>

                                <p className="text-xs text-slate-400 mt-1">
                                    {elem.email}
                                </p>
                            </div>

                            {/* New Tasks */}
                            <div className="w-[20%] text-center">
                                <span className="inline-block min-w-10 text-xs font-bold text-blue-700 bg-blue-100 px-3 py-2 rounded-lg">
                                    {elem.taskCounts?.newTask || 0}
                                </span>
                            </div>

                            {/* Active Tasks */}
                            <div className="w-[20%] text-center">
                                <span className="inline-block min-w-10 text-xs font-bold text-amber-700 bg-amber-100 px-3 py-2 rounded-lg">
                                    {elem.taskCounts?.active || 0}
                                </span>
                            </div>

                            {/* Completed Tasks */}
                            <div className="w-[20%] text-center">
                                <span className="inline-block min-w-10 text-xs font-bold text-green-700 bg-green-100 px-3 py-2 rounded-lg">
                                    {elem.taskCounts?.completed || 0}
                                </span>
                            </div>

                            {/* Failed Tasks */}
                            <div className="w-[20%] text-center">
                                <span className="inline-block min-w-10 text-xs font-bold text-red-700 bg-red-100 px-3 py-2 rounded-lg">
                                    {elem.taskCounts?.failed || 0}
                                </span>
                            </div>

                        </div>

                    ))

                ) : (

                    <div className="text-center py-10 text-slate-500 text-sm">
                        No employees found.
                    </div>

                )}

            </div>

        </div>
    );
};

export default AllTask;
