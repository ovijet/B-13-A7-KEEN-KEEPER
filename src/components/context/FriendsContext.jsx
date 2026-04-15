import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export let Context = createContext();
const FriendsContext = ({ children }) => {
  //   const handleCall = (currentCall) => {
  //     const isExistCall = call.find((item) => item.id === currentCall.id);
  //     console.log(currentCall, call, "id");
  //     if (isExistCall) {
  //       toast.error("data already listed");
  //       return;
  //     } else {
  //       setCall((prev) => [...prev, currentCall]);
  //       toast(`${currentCall.name} is name`);
  //     }
  //   };
  //   const handleText = (currentText) => {
  //     const isExistCall = text.find((item) => item.id === currentText.id);
  //     console.log(currentText, text, "id");
  //     if (isExistCall) {
  //       toast.error("data already listed");
  //     } else {
  //       setText((prev) => [...prev, currentText]);
  //       toast(`${currentText.name} is name`);
  //     }
  //   };
  //   const handleVideo = (currentVideo) => {
  //     const isExistCall = video.find((item) => item.id === currentVideo.id);
  //     console.log(currentVideo, video, "id");
  //     if (isExistCall) {
  //       toast.error("data already listed");
  //       return;
  //     } else {
  //       setVideo((prev) => [...prev, currentVideo]);
  //       toast(`${currentVideo.name} is name`);
  //     }
  //   };

  const [call, setCall] = useState([]);

  const handleCall = (currentBook) => {
    console.log(call, "book");
    let isExistBook = call.find((book) => book.id === currentBook.id);
    if (isExistBook) {
      // toast.error("Mark is already exjist");
      alert(`${currentBook.bookName} is already exist`);
    } else {
      setCall([...call, currentBook]);
      // toast.success(`${currentBook.bookName} is added to list`);
    }
  };

  let data = {
    call,
    setCall,
    handleCall,
    // text,
    // setText,
    // handleText,
    // handleVideo,
    // video,
    // setVideo,
    text: "ovi",
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default FriendsContext;
