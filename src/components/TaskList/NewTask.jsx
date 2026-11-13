
import React from 'react'

const NewTask = ({data}) => {
    return (
        <div className="group bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-[280px] flex flex-col">

            {/* Header */}
            <div className="flex justify-between items-center gap-3">
                <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold">
                    {data.category}
                </span>

                <span className="text-xs sm:text-sm text-slate-400 font-medium">
                    {data.taskDate}
                </span>
            </div>

            {/* Content */}
            <div className="mt-6 flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {data.taskTitle}
                </h2>

                <p className="text-sm text-slate-500 mt-3 leading-6">
                    {data.taskDescription}
                </p>
            </div>

            {/* Accept Button */}
            <div className="mt-6">
                <button className="w-full bg-emerald-500 hover:bg-emerald-600 cursor-pointer text-white text-sm font-semibold py-3 px-4 rounded-xl transition-all duration-200 active:scale-95 shadow-sm">
                    <span className="mr-1">✓</span> Accept Task
                </button>
            </div>

        </div>
    )
}

export default NewTask
