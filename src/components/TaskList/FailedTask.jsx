
import React from 'react'

function FailedTask({data}) {
    return (
        <div className="group bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-[280px] flex flex-col">

            {/* Header */}
            <div className="flex justify-between items-center gap-3">
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold">
                    {data.category}
                </span>

                <span className="text-xs sm:text-sm text-slate-400 font-medium">
                    {data.taskDate}
                </span>
            </div>

            {/* Content */}
            <div className="mt-6 flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800 group-hover:text-red-600 transition-colors">
                    {data.taskTitle}
                </h2>

                <p className="text-sm text-slate-500 mt-3 leading-6">
                    {data.taskDescription}  
                </p>
            </div>

            {/* Failed Status */}
            <div className="mt-6">
                <div className="flex items-center justify-center gap-2 bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-sm font-bold">
                    <span className="flex items-center justify-center w-5 h-5 bg-red-500 text-white rounded-full text-xs">
                        ✕
                    </span>
                    Task Failed
                </div>
            </div>

        </div>
    )
}

export default FailedTask
