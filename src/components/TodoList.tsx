"use client";
import React, { useState } from "react";
import {
  Plus,
  Trash2,
  Check,
  ArrowLeft,
  Bell,
  Clock,
  Info,
  X,
  Edit2,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function TaskList() {
  const [active, setActive] = useState("Today");
  const router = useRouter();
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [tasks, setTasks] = useState([
    { title: "Meeting with Client", time: "11:00 am", active: true },
    { title: "Laptop Service", time: "1:00 pm", active: false },
    { title: "Daily UI Exercise", time: "3:00 pm", active: false },
    { title: "Work Submission", time: "7:00 pm", active: false },
  ]);

  const notifications = [
    {
      id: 1,
      title: "Upcoming Meeting",
      desc: "Client meeting starts in 15 mins",
      time: "10:45 AM",
      icon: <Clock className="w-4 h-4" />,
    },
    {
      id: 2,
      title: "Task Missed",
      desc: "Laptop service was scheduled for 1:00 PM",
      time: "Yesterday",
      icon: <Info className="w-4 h-4" />,
    },
  ];

  const toggleTask = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, active: !task.active } : task,
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const addTask = () => {
    if (!newTask.trim()) return;
    const now = new Date();
    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setTasks([...tasks, { title: newTask, time: time, active: false }]);
    setNewTask("");
  };

  const editTask = (index: number) => {
    setEditingIndex(index);
    setEditValue(tasks[index].title);
  };
  const saveTask = (index: number) => {
    if (!editValue.trim()) return;
    const update = tasks.map((task, i) =>
      i === index ? { ...task, title: editValue } : task,
    );
    setTasks(update);
    setEditingIndex(null);
    setEditValue("");
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditValue("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      {/* Mobile Frame */}
      <div className="relative w-full max-w-2xl h-[650px] bg-white rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col border border-slate-100">
        {/* Header */}
        <header className="px-8 pt-12 pb-6 bg-white">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => router.push("/")}
              className="p-2 -ml-2 hover:bg-slate-50 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-slate-400" />
            </button>
            <h1 className="text-lg font-bold tracking-tight text-slate-800">
              All Tasks
            </h1>
            <button
              onClick={() => setShowNotifications(true)}
              className="p-2 -mr-2 hover:bg-slate-50 rounded-full cursor-pointer"
            >
              <Bell className="w-5 h-5 text-slate-400" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex gap-6 mb-6">
            {["Today", "Daily", "Monthly"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`text-sm font-semibold transition-all relative pb-1 ${
                  active === tab ? "text-teal-600" : "text-slate-400"
                }`}
              >
                {tab}
                {active === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Clean Input Field */}
          <div className="relative flex items-center group">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
              placeholder="Add a new task..."
              className="w-full bg-slate-50 border-none px-5 py-3.5 rounded-2xl text-sm focus:ring-2 focus:ring-teal-500/20 transition-all outline-none"
            />
            <button
              onClick={addTask}
              className="absolute right-2 p-2 bg-teal-600 text-white rounded-xl shadow-lg shadow-teal-200 active:scale-90 transition-transform"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* 2. Notification Overlay (The Style) */}
        {showNotifications && (
          <div className="absolute inset-0 z-50 flex flex-col justify-end">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity"
              onClick={() => setShowNotifications(false)}
            />

            {/* Notification Card (Slide up animation) */}
            <div className="relative bg-white rounded-t-[2.5rem] p-8 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom duration-300">
              {/* Pull Bar */}
              <div className="w-12 h-1.5 bg-slate-100 rounded-full mx-auto mb-6" />

              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-800">
                  Notifications
                </h2>
                <button
                  onClick={() => setShowNotifications(false)}
                  className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4 mb-4">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group transition-all hover:border-teal-100"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600">
                      {n.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm font-bold text-slate-800">
                          {n.title}
                        </h3>
                        <span className="text-[10px] text-slate-400 font-medium uppercase">
                          {n.time}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {n.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowNotifications(false)}
                className="w-full py-4 text-sm font-bold text-slate-400 hover:text-teal-600 transition-colors"
              >
                Mark all as read
              </button>
            </div>
          </div>
        )}

        {/* Task List */}
        <main className="flex-1 px-6 overflow-y-auto no-scrollbar pb-10">
          <div className="space-y-3">
            {tasks.map((task, index) => (
              <div
                key={index}
                className={`group flex items-center justify-between p-4 rounded-2xl transition-all border ${
                  task.active
                    ? "bg-teal-50/50 border-teal-100 shadow-sm"
                    : "bg-white border-slate-100 hover:border-slate-200"
                }`}
              >
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleTask(index)}
                    className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all border-2 ${
                      task.active
                        ? "bg-teal-600 border-teal-600 shadow-md shadow-teal-100"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    {task.active && (
                      <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />
                    )}
                  </button>

                  <div className="flex flex-col">
                    {editingIndex === index ? (
                      <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") saveTask(index);
                          if (e.key === "Escape") cancelEdit();
                        }}
                        className="text-sm font-medium bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 outline-none focus:ring-2 focus:ring-teal-500/20"
                        autoFocus
                      />
                    ) : (
                      <>
                        <span
                          className={`text-sm font-medium transition-all ${
                            task.active
                              ? "text-teal-900 line-through opacity-50"
                              : "text-slate-700"
                          }`}
                        >
                          {task.title}
                        </span>

                        <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                          {task.time}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  {editingIndex === index ? (
                    <>
                      <button
                        onClick={() => saveTask(index)}
                        className="p-1 bg-teal-600 text-white rounded-xl shadow-lg shadow-teal-100"
                      >
                        <Check className="w-4 h-4 stroke-[3px]" />
                      </button>
                      <button
                        onClick={() => cancelEdit()}
                        className="p-1 bg-slate-50 text-slate-400 rounded-xl"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => editTask(index)}
                        className="p-2 text-slate-300 hover:text-teal-600 hover:bg-teal-50 rounded-lg cursor-pointer"
                      >
                        {!task.active && <Edit2 className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => deleteTask(index)}
                        className="p-2 text-slate-300 hover:text-red-400 hover:bg-red-50 rounded-lg cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Bottom Home Indicator (iOS Style) */}
        <div className="h-8 flex justify-center items-center">
          <div className="w-32 h-1.5 bg-slate-100 rounded-full" />
        </div>
      </div>
    </div>
  );
}
