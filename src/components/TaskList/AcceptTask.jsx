
import React from 'react'

const AcceptTask = ({data}) => {
    console.log(data);
    
    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-[280px] flex flex-col">

            {/* Header */}
            <div className="flex justify-between items-center">
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold">
                    {data.category}
                </span>

                <span className="text-xs sm:text-sm text-slate-400 font-medium">
                    {data.taskDate}
                </span>
            </div>

            {/* Content */}
            <div className="mt-6 flex-1">
                <h2 className="text-xl font-bold text-slate-800">
                   {data.taskTitle}
                </h2>

                <p className="text-sm text-slate-500 mt-3 leading-6">
                    {data.taskDescription}
                </p>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-6">
                <button className="bg-emerald-500 hover:bg-emerald-600 cursor-pointer text-white text-sm font-semibold py-3 px-2 rounded-xl transition-all duration-200 active:scale-95 shadow-sm">
                    <span className="mr-1">✓</span> Complete
                </button>

                <button className="bg-rose-500 hover:bg-rose-600 cursor-pointer text-white text-sm font-semibold py-3 px-2 rounded-xl transition-all duration-200 active:scale-95 shadow-sm">
                    <span className="mr-1">✕</span> Failed
                </button>
            </div>

        </div>
    )
}

export default AcceptTask
