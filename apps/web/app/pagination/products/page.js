"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import styles from "./comments.module.css";

export default function Comments() {
  const [commentVal, setCommentVal] = useState('');


  const handleChange = () => {
    fetchPosts();
  }


  return (
    <div >
      
    </div>
  );
}
