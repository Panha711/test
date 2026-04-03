"use client";
import { Heart, Paperclip, Pin, Reply, X } from "lucide-react";
import { useState } from "react";

interface ReplyItem {
  id: string;
  user: string;
  text: string;
  time: string;
}

interface Comment {
  id: string;
  user: string;
  text: string;
  time: string;
  replies: ReplyItem[];
}

export default function CommentComponents() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      user: "빤냐 (LENG PANHA )",
      text: "oun search mix tan",
      time: "24/07/2025 08:40",
      replies: [
        {
          id: "1-1",
          user: "빤냐 (LENG PANHA )",
          text: "Oun sml bos b oun research muy muy sin kor ban dea...",
          time: "24/07/2025 08:43",
        },
      ],
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [newReply, setNewReply] = useState("");
  const [editCommentIndex, setEditCommentIndex] = useState<number | null>(null);
  const [editCommentValue, setEditCommentValue] = useState("");
  const [editReplyPos, setEditReplyPos] = useState<{
    cIdx: number;
    rIdx: number;
  } | null>(null);
  const [editReplyValue, setEditReplyValue] = useState("");
  const [replyingToIndex, setReplyingToIndex] = useState<number | null>(null);
  const [likedIndices, setLikedIndices] = useState<string[]>([]);
  const getDateTime = () => {
    return new Date().toLocaleString([], {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // --- Actions ---
  const addNewComment = () => {
    if (!newComment.trim()) return;
    const newItem = {
      id: Date.now().toString(),
      user: "빤냐 (LENG PANHA )",
      text: newComment,
      time: getDateTime(),
      replies: [],
    };
    setComments([...comments, newItem]);
    setNewComment("");
  };

  const addNewReply = (parentIndex: number) => {
    if (!newReply.trim()) return;
    const updatedComments = [...comments];
    updatedComments[parentIndex].replies.push({
      id: Date.now().toString(),
      user: "빤냐 (LENG PANHA )",
      text: newReply,
      time: getDateTime(),
    });
    setComments(updatedComments);
    setNewReply("");
    setReplyingToIndex(null);
  };

  const toggleLike = (id: string) => {
    setLikedIndices((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const deleteComment = (index: number) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  const deleteReply = (cIdx: number, rIdx: number) => {
    const updated = [...comments];
    updated[cIdx].replies = updated[cIdx].replies.filter((_, i) => i !== rIdx);
    setComments(updated);
  };

  // --- Edit Logic: Main Comment ---
  const startEditComment = (index: number) => {
    setEditCommentIndex(index);
    setEditCommentValue(comments[index].text);
  };

  const saveEditComment = (index: number) => {
    if (!editCommentValue.trim()) return;
    const updated = comments.map((c, i) =>
      i === index ? { ...c, text: editCommentValue } : c,
    );
    setComments(updated);
    setEditCommentIndex(null);
  };

  // --- Edit Logic: Reply ---
  const startEditReply = (cIdx: number, rIdx: number, text: string) => {
    setEditReplyPos({ cIdx, rIdx });
    setEditReplyValue(text);
  };

  const saveEditReply = (cIdx: number, rIdx: number) => {
    if (!editReplyValue.trim()) return;
    const updated = [...comments];
    updated[cIdx].replies[rIdx].text = editReplyValue;
    setComments(updated);
    setEditReplyPos(null);
  };

  const avatarUrl =
    "https://imgs.search.brave.com/kF2lr_4uWAqgX9xLxBSWeYel6gxaOZxKpLeOc1QrYd0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuaW1hZ2V0b2lt/YWdlLmFwcC9hc3Nl/dHMvZ2FsbGVyeS9p/dGVtNy53ZWJw";

  return (
    <div className="max-w-4xl mx-auto mt-4 bg-white border border-gray-200 rounded-lg shadow-sm font-sans">
      <div className="divide-y divide-gray-100">
        {comments.map((comment, cIdx) => (
          <div key={comment.id} className="p-4 flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <div className="flex gap-3 flex-1">
                <img
                  src={avatarUrl}
                  className="rounded-full w-10 h-10 object-cover"
                  alt="Avatar"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm">{comment.user}</span>
                    <span className="text-gray-400 text-[11px]">
                      {comment.time}
                    </span>
                  </div>

                  {/* Main Comment Text or Edit Input */}
                  {editCommentIndex === cIdx ? (
                    <input
                      autoFocus
                      className="w-full mt-1 border border-blue-400 rounded-md px-3 py-4 text-sm focus:outline-none"
                      value={editCommentValue}
                      onChange={(e) => setEditCommentValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") saveEditComment(cIdx);
                        if (e.key === "Escape") setEditCommentIndex(null);
                      }}
                    />
                  ) : (
                    <>
                      <p className="text-sm text-gray-700 mt-0.5">
                        {comment.text}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-gray-500 text-xs font-medium">
                        <button
                          onClick={() => toggleLike(comment.id)}
                          className={`flex items-center gap-1 ${likedIndices.includes(comment.id) ? "text-blue-600" : ""}`}
                        >
                          <Heart
                            className={`w-3.5 h-3.5 ${likedIndices.includes(comment.id) ? "fill-current" : ""}`}
                          />{" "}
                          Like
                        </button>
                        <button
                          onClick={() => setReplyingToIndex(cIdx)}
                          className="flex items-center gap-1 hover:text-blue-500"
                        >
                          <Reply className="w-3.5 h-3.5 rotate-180" /> Reply
                        </button>
                      </div>
                    </>
                  )}
                </div>

                {/* Main Comment Controls */}
                {editCommentIndex !== cIdx && (
                  <div className="flex items-start gap-3 text-gray-400 text-[11px]">
                    <button
                      onClick={() => startEditComment(cIdx)}
                      className="hover:text-gray-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteComment(cIdx)}
                      className="hover:text-red-500"
                    >
                      Delete
                    </button>
                    <Pin className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            </div>

            {/* Render Replies */}
            {comment.replies.map((reply, rIdx) => (
              <div key={reply.id} className="ml-12 flex gap-3 mt-4">
                <div className="text-gray-300 text-xl font-light">↳</div>
                <img
                  src={avatarUrl}
                  className="rounded-full w-8 h-8 object-cover"
                  alt="Avatar"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm">{reply.user}</span>
                    <span className="text-gray-400 text-[11px]">
                      {reply.time}
                    </span>
                  </div>

                  {/* Reply Text or Edit Input */}
                  {editReplyPos?.cIdx === cIdx &&
                  editReplyPos?.rIdx === rIdx ? (
                    <input
                      autoFocus
                      className="w-full mt-1 border border-blue-400 rounded-md px-2 py-2 text-sm focus:outline-none"
                      value={editReplyValue}
                      onChange={(e) => setEditReplyValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") saveEditReply(cIdx, rIdx);
                        if (e.key === "Escape") setEditReplyPos(null);
                      }}
                    />
                  ) : (
                    <p className="text-sm text-gray-700 mt-0.5">{reply.text}</p>
                  )}
                </div>

                {/* Reply Controls */}
                {!(
                  editReplyPos?.cIdx === cIdx && editReplyPos?.rIdx === rIdx
                ) && (
                  <div className="flex items-start gap-3 text-gray-400 text-[11px]">
                    <button
                      onClick={() => startEditReply(cIdx, rIdx, reply.text)}
                      className="hover:text-gray-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteReply(cIdx, rIdx)}
                      className="hover:text-red-500"
                    >
                      Delete
                    </button>
                    <Pin className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {/* Nested Reply Input */}
            {replyingToIndex === cIdx && (
              <div className="ml-12 mt-2 bg-gray-50 p-3 rounded-lg border border-gray-100">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Reply className="w-3 h-3 rotate-180" /> Reply to{" "}
                    <span className="font-bold text-gray-700">
                      {comment.user}
                    </span>
                  </div>
                  <X
                    className="w-4 h-4 cursor-pointer text-gray-400"
                    onClick={() => setReplyingToIndex(null)}
                  />
                </div>
                <div className="flex gap-3">
                  <img
                    src={avatarUrl}
                    className="w-8 h-8 rounded-full"
                    alt="Me"
                  />
                  <div className="relative flex-1">
                    <input
                      autoFocus
                      className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
                      placeholder="Write a reply..."
                      value={newReply}
                      onChange={(e) => setNewReply(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") addNewReply(cIdx);
                        if (e.key === "Escape") setReplyingToIndex(null);
                      }}
                    />
                    <Paperclip className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 cursor-pointer" />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Main Bottom Input */}
      <div className="p-4 border-t border-gray-100 flex gap-3">
        <img src={avatarUrl} className="rounded-full w-9 h-9" alt="User" />
        <div className="flex-1 relative">
          <input
            className="w-full border border-gray-200 rounded-md px-4 py-2 pr-10 text-sm focus:outline-none focus:border-gray-400"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addNewComment()}
          />
          <Pin className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
