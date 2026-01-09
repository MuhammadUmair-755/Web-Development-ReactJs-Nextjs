"use client";

import { useRef, useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { CameraIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE } from "@/app/slices/modalSlice";
import { useSession } from "next-auth/react";
import { db, storage } from "@/app/lib/firebase";
import { addDoc, doc, collection, serverTimestamp, updateDoc } from "@firebase/firestore";
import { ref, getDownloadURL, uploadString } from "firebase/storage";

export default function Modal() {
  const { isOpen: isModalOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  const filePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const captionRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession(); //useSession(

  const uploadPost = async () => {
    if (loading) return;
    // 1 Create a post and add to firestore 'posts' collection
    // 2 get the post ID for the newly created post
    // 3 upload the image to firebase storage with the post ID
    // 4 get a download URL from firebase storage and update the original post with image

    setLoading(true);

    const docRef = await addDoc(collection(db, "posts"), {
      username: session?.user?.username || "GuestUser",
      caption: captionRef.current.value,
      profileImg: session?.user?.image || "",
      image: selectedFile,
      timestamp: serverTimestamp(),
    });

    dispatch(TOGGLE()); //close the modal
    setLoading(false);
    setSelectedFile(null);
    const imageRef = ref(storage, `posts/${docRef.id}/image`); 

    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);

        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadURL,
        });
      }
    );

  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (readerEvent) => {
        setSelectedFile(readerEvent.target.result);
      };
    }
  };
  const removeImage = () => {
    setSelectedFile(null);
    // Input field ki value reset karna lazmi hai
    if (filePickerRef.current) {
      filePickerRef.current.value = "";
    }
  };

  return (
    <Dialog
      open={isModalOpen}
      onClose={() => dispatch(TOGGLE())}
      className="relative z-50"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity dark:bg-gray-900/80"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        {/* items-center ensures middle of screen on all devices */}
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:my-8 w-full max-w-sm dark:bg-gray-800 p-6"
          >
            <div>
              {selectedFile ? (
                <div
                  className="w-full h-64 cursor-pointer overflow-hidden rounded-3xl  mb-4"
                  onClick={removeImage} // Image par click karke remove kar sakte hain
                >
                  <img
                    src={selectedFile}
                    alt="selected"
                    className="w-full h-full object-contain "
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center mb-4">
                  <div
                    className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100 cursor-pointer hover:bg-red-200 transition-colors"
                    onClick={() => filePickerRef.current.click()}
                  >
                    <CameraIcon className="text-red-600 w-10 h-10" />
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Upload a Photo
                  </p>
                </div>
              )}

              {/* Flex Column Container for Input and Button */}
              <div className="flex flex-col gap-4">
                <input
                  hidden
                  type="file"
                  ref={filePickerRef}
                  onChange={addImageToPost}
                />

                <input
                  className="w-full border-none focus:ring-0 text-center text-sm placeholder-gray-400 dark:bg-gray-700 dark:text-white rounded-md p-2"
                  type="text"
                  ref={captionRef}
                  placeholder="Please enter a caption..."
                />

                <button
                  type="button"
                  disabled={!selectedFile  || loading}
                  onClick={uploadPost}
                  className="w-full rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-red-500 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
                >
                  {loading ? "Uploading Post..." : "Upload Post"}
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
