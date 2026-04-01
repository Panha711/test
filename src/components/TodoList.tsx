const TodoList = () => {
  const tasks = [
    { text: "Add prototype device type", completed: false },
    { text: "Do we need a design for the new SE?", completed: false },
    { text: "Link design in JIRA", completed: true },
    { text: "Draw new chevron icon", completed: false },
    { text: "Ask for new feedback", completed: true },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F8F9FD]">
      <div className="w-[500px] bg-white rounded-[40px] shadow-2xl p-10 font-sans">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-1">
          <h1 className="text-5xl font-bold text-black tracking-tight">
            To Do
          </h1>
          <div className="bg-[#F3F4F8] p-4 rounded-2xl shadow-sm border border-gray-100 mt-2">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" fill="#FEF9C3" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          </div>
        </div>

        <p className="text-[#6B7280] text-xl font-semibold mb-10">
          Deadline for changes: <span className="text-[#4B5563]">5.22</span>
        </p>

        <hr className="border-[#F3F4F6] mb-10" />

        {/* List */}
        <div className="space-y-8">
          {tasks.map((task, index) => (
            <div key={index} className="flex items-center gap-5">
              {/* Checkbox */}
              <div className={`
                w-8 h-8 rounded-xl border-2 flex items-center justify-center
                ${task.completed ? 'bg-[#F3F4F6] border-[#E5E7EB]' : 'bg-white border-[#E5E7EB]'}
              `}>
                {task.completed && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>

              {/* Text */}
              <span className={`text-[22px] font-medium leading-tight ${task.completed ? 'text-[#D1D5DB]' : 'text-[#4B5563]'}`}>
                {task.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;