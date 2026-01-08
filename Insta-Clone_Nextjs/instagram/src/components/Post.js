import { db } from "@/app/lib/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {
  HiDotsHorizontal,
  HiHeart,
  HiOutlineBookmark,
  HiOutlineChat,
  HiOutlineEmojiHappy,
  HiOutlineHeart,
  HiOutlinePaperAirplane,
} from "react-icons/hi";
import Comment from "./Comment";
function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session?.user?.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session?.user?.uid), {
        username: session.user.username,
      });
    }
  };

  useEffect(() => {
    const q = query(
      collection(db, "posts", id, "comments"),
      orderBy("timestamp", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(snapshot.docs);
    });

    return () => unsubscribe();
  }, [id]);

  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [id]
  );

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    );
  });

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center gap-3">
          <img
            src={userImg}
            alt="UserImg"
            className="rounded-full h-12 w-12 border border-pink-500 object-contain p-0.5"
          />
          <p className="font-bold">{username}</p>
        </div>
        <HiDotsHorizontal />
      </div>

      {/* img */}
      <div className="">
        <img src={img} alt="post image" className="w-full object-cover" />
      </div>
      {/* Buttons */}
      {session && (
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            {!hasLiked ? (
              <HiOutlineHeart className="postBtn" onClick={likePost} />
            ) : (
              <HiHeart className="postBtn text-red-500" onClick={likePost} />
            )}
            <HiOutlineChat className="postBtn" />
            <HiOutlinePaperAirplane className="postBtn rotate-45" />
          </div>
          <HiOutlineBookmark className="postBtn" />
        </div>
      )}

      {/* caption */}
      <div className="px-5">
        {likes.length > 0 && (
          <div className="font-bold ">{likes.length} likes</div>
        )}
        <p className="truncate"> 
          <span className="font-bold pe-2">{username}</span>
          {caption}
        </p>
      </div>
      {/* comments */}
      {comments.length > 0 && (
        <div className="mx-4 h-20 overflow-y-auto scrollbar-thin">
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      )}
      {/* input box */}
      {session && (
        <form className="flex items-center p-4 gap-2 ">
          <HiOutlineEmojiHappy className="h-5 w-5" />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="border-none flex-1 focus:ring-0 outline-none"
          />
          <button
            type="submit"
            disabled={comment === null}
            onClick={sendComment}
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
