"use client";
import { PlusIcon } from "lucide-react"
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE } from "@/app/slices/modalSlice";
import Modal from "./ui/Modal";

function AddPostIcon() {
    const {isOpen: isModalOpen} = useSelector((store) => store.modal);
    const dispatch = useDispatch();   
    return (
        <>
       <PlusIcon className="h-8 w-8 cursor-pointer" onClick={() => dispatch(TOGGLE())}/>
        {isModalOpen && <Modal/>}
        </>
    )
}

export default AddPostIcon
