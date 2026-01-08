import moment from "moment";

export default function Comment({ comment }) {
  const commentData = comment.data();
  
  return (
    <div className="flex items-center space-x-2 mb-3">
      <img src={commentData.userImage} className="h-7 rounded-full" alt="" />
      <p className="text-sm flex-1">
        <span className="font-bold">{commentData.username}</span>{" "}
        {commentData.comment}
      </p>
      
      {/* Timestamp Fix */}
      <span className="text-xs text-gray-400 pr-2">
        {commentData.timestamp ? (
          moment(commentData.timestamp.toDate()).fromNow()
        ) : (
          "just now"
        )}
      </span>
    </div>
  );
}