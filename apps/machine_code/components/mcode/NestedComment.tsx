"use client";
import { useState } from "react";

interface IComment {
  id: number;
  text: string;
  replies: IComment[];
}

const Comment = ({
  comment,
  handleAddComment,
  level = 0,
}: {
  comment: IComment;
  handleAddComment: (id: number, reply: IComment) => void;
}) => {
  const [replyVal, setReplyVal] = useState("");
  const [showReplyForm, setShowReplyForm] = useState(false);

  const toggleReplyForm = () => setShowReplyForm((prev) => !prev);

  const handleAddReply = () => {
    if (!replyVal.trim()) return; // Prevent empty replies

    const newReply: IComment = {
      id: Date.now(), // More reliable unique ID
      text: replyVal,
      replies: [],
    };

    handleAddComment(comment.id, newReply);
    setReplyVal("");
    setShowReplyForm(false);
  };

  return (
    <div className="comment">
      <div
        style={{
          marginLeft: level * 10 + "px",
        }}
        className="comment_reply"
      >
        <p>{comment.text}</p>
        {!showReplyForm ? (
          <button className="reply_btn" onClick={toggleReplyForm}>
            Reply
          </button>
        ) : (
          <div className="reply_form">
            <input
              className="px-2 border-black"
              type="text"
              placeholder="Add reply"
              value={replyVal}
              onChange={(e) => setReplyVal(e.target.value)}
            />
            <Button onClick={handleAddReply}>Reply</Button>
          </div>
        )}
      </div>

      {comment.replies.length > 0 && (
        <div className="replies">
          {comment.replies.map((reply) => (
            <Comment
              key={reply.id}
              comment={reply}
              handleAddComment={handleAddComment}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

function Comments() {
  const [commentVal, setCommentVal] = useState("");

  // nested comments state structure
  const initialComments: IComment[] = [
    {
      id: 1,
      text: "This is a comment _id 1",
      replies: [
        {
          id: 2,
          text: "This is a reply _id 2",
          replies: [
            {
              id: 3,
              text: "This is a nested reply _id 3",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      text: "This is another comment _id 4",
      replies: [
        {
          id: 5,
          text: "This is another reply _id 5",
          replies: [],
        },
      ],
    },
  ];

  const [comments, setComments] = useState(initialComments);

  const addComment = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!commentVal) return;
    const comment = {
      id: comments.length + 1 + Math.random(),
      text: commentVal,
      replies: [],
    };
    setComments((prevComments) => [...prevComments, comment]);
    setCommentVal("");
  };

  function findAndUpdateComment(
    comments: IComment[],
    id: number,
    newComment: IComment
  ) {
    for (let i = 0; i < comments.length; i++) {
      const comment: IComment = comments[i];
      console.log(comment.id, comment.text);
      if (comment.id == id) {
        comment.replies = [...comment.replies, newComment];
      }
      if (comment.replies) {
        findAndUpdateComment(comment.replies, id, newComment);
      }
    }
    return comments;
  }

  const handleAddComment = (id: number, comment: IComment) => {
    const commentCopy = [...comments];
    const newComments = findAndUpdateComment(commentCopy, id, comment);
    console.log("newComments", newComments);
    setComments(newComments);
  };

  // Main render
  return (
    <div className="comments">
      <h2>Nested Comments</h2>
      <div className="post_comment">
        <textarea
          placeholder="Add comment"
          value={commentVal}
          onChange={(e) => setCommentVal(e.target.value)}
        />
        <button type="button" onClick={addComment}>
          Post Comment
        </button>
      </div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          handleAddComment={handleAddComment}
        />
      ))}
    </div>
  );
}
export default Comments;
