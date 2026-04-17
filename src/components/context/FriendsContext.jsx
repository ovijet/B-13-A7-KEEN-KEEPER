import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export let Context = createContext();
const FriendsContext = ({ children }) => {
  const [call, setCall] = useState([]);
  const [text, setText] = useState([]);
  const [video, setVideo] = useState([]);

  const handleCall = (currentCall) => {
    const isExistCallList = call.find((item) => item.id === currentCall.id);
    if (isExistCallList) {
      toast.error("Call already listed");
      return;
    }

    const isExistAnywhere =
      call.find((item) => item.id === currentCall.id) ||
      text.find((item) => item.id === currentCall.id) ||
      video.find((item) => item.id === currentCall.id);

    if (isExistAnywhere) {
      toast.error("Already added in another list");
      return;
    }

    console.log(call, "book");
    let isExistCall = call.find((book) => book.id === currentCall.id);
    if (isExistCall) {
      toast.error(`${currentCall.name} is already exist`);
    } else {
      setCall([...call, currentCall]);
      toast.success(`${currentCall.name} is added to call list`);
    }
  };
  const handleText = (currentText) => {
    const isExistTextList = text.find((item) => item.id === currentText.id);
    if (isExistTextList) {
      toast.error("Text already listed");
      return;
    }

    const isExistAnywhere =
      call.find((item) => item.id === currentText.id) ||
      text.find((item) => item.id === currentText.id) ||
      video.find((item) => item.id === currentText.id);

    if (isExistAnywhere) {
      toast.error("Already added in another list");
      return;
    }
    console.log(text, "text");
    let isExistText = text.find((text) => text.id === currentText.id);
    if (isExistText) {
      toast.error("Mark is already exjist");
      alert(`${currentText.name} is already exist`);
    } else {
      setText([...text, currentText]);
      toast.success(`${currentText.name} is added to text list`);
    }
  };
  const handleVideo = (currentVideo) => {
    const isExistVideoList = video.find((item) => item.id === currentVideo.id);
    if (isExistVideoList) {
      toast.error("video already listed");
      return;
    }

    const isExistAnywhere =
      call.find((item) => item.id === currentVideo.id) ||
      text.find((item) => item.id === currentVideo.id) ||
      video.find((item) => item.id === currentVideo.id);

    if (isExistAnywhere) {
      toast.error("Already added in another list");
      return;
    }
    console.log(video, "video");
    let isExistVideo = video.find((video) => video.id === currentVideo.id);
    if (isExistVideo) {
      toast.error(`${currentVideo.name} is already exist`);
    } else {
      setVideo([...video, currentVideo]);
      toast.success(`${currentVideo.name} is added to video list`);
    }
  };

  let data = {
    call,
    setCall,
    handleCall,
    text,
    setText,
    handleText,
    handleVideo,
    video,
    setVideo,
    // text: "ovi",
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default FriendsContext;
