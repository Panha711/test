"use client";
import { Pin, ThumbsUp } from "lucide-react";
import { useState } from "react";
export default function CommentComponents() {
  const [newComment, setNewComment] = useState("");

  const [comments, setComments] = useState([
    { text: "Starting the review process now.", time: "02/04/2026 14:30" },
  ]);

  const addNewComment = () => {
    if (!newComment.trim()) return;
    const now = new Date();
    const dateTime = now.toLocaleString([], {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    setComments([...comments, { text: newComment, time: dateTime }]);
    setNewComment("");
  };

  const deleteCard = (index: number) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-4xl mx-auto mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Tabs */}
      <div className="p-4 border-b border-gray-100 flex gap-2">
        <button className="bg-gray-700 text-white px-4 py-1 rounded text-xs font-bold">
          All {comments.length}
        </button>
        <button className="bg-white border border-gray-200 text-gray-500 px-4 py-1 rounded text-xs">
          Comment {comments.length}
        </button>
      </div>

      <div className="divide-y divide-gray-100">
        {/* Status Update Logs */}
        {comments?.map((log, index) => (
          <div key={index} className="p-4 flex justify-between">
            <div className="flex items-start gap-2">
              <img
                src="https://imgs.search.brave.com/kF2lr_4uWAqgX9xLxBSWeYel6gxaOZxKpLeOc1QrYd0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuaW1hZ2V0b2lt/YWdlLmFwcC9hc3Nl/dHMvZ2FsbGVyeS9p/dGVtNy53ZWJw"
                className="rounded-full w-10 h-10"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">빤냐 (LENG PANHA )</span>
                  <span className="text-gray-400 text-xs">{log.time}</span>
                </div>
                <p className="mt-1 text-gray-600 ">{log.text}</p>
                <div className="mt-2 ml-1">
                  <div className="mt-3 flex items-center gap-4 text-gray-400 text-xs">
                    <button className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4" /> Like
                    </button>
                    <button>Reply</button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex items-start
             gap-3 text-gray-400 text-xs"
            >
              <span className="cursor-pointer">Edit</span>
              <span
                className="cursor-pointer hover:text-red-500"
                onClick={() => deleteCard(index)}
              >
                Delete
              </span>
              <Pin className="w-4 h-4 rotate-45" />
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="p-4 border-t border-gray-100 flex gap-3">
        <img
          src="https://imgs.search.brave.com/kF2lr_4uWAqgX9xLxBSWeYel6gxaOZxKpLeOc1QrYd0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuaW1hZ2V0b2lt/YWdlLmFwcC9hc3Nl/dHMvZ2FsbGVyeS9p/dGVtNy53ZWJw"
          className="rounded-full w-8 h-8"
        />
        <div className="flex-1 relative">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addNewComment()}
            placeholder="Press Shift + Enter to add a new line and Enter to post"
            className="w-full border border-gray-200 rounded px-4 py-2 pr-10 focus:outline-none focus:border-gray-400"
          />
          <button className="absolute right-3 top-2.5">
            <Pin className="w-5 h-5 text-gray-400 -rotate-45" />
          </button>
        </div>
      </div>
    </div>
  );
}
