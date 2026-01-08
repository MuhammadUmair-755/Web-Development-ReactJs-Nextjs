"use client";
import { useEffect, useState } from "react";
import Post from "./Post";
import List from "./ui/List";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "@/app/lib/firebase";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));

    const unSubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <div className="px-15">
      <List
        list={posts}
        render={(doc) => {
          const post = doc.data(); 
          return (
            <Post
              key={doc.id}
              id={doc.id}
              username={post.username}
              userImg={post.profileImg} 
              img={post.image}           
               caption={post.caption}
            />
          );
        }}
      />
    </div>
  );
}

export default Posts;