import React, { useState } from "react";
import {
  EmojiIcon,
  GifIcon,
  ImageIcon,
  PollIcon,
  ScheduleIcon,
} from "../icons/icon";
import db from "../firebase";
import firebase from "firebase";

const TweetBox = () => {
  //kullanıcının yazdığı alanı tutabilmek için oluşturduk.
  const [content, setContent] = useState("");

  const sendTweet = () => {
    //textarea'dan aldığımız content'i firestore veri tabanımıza kaydedeceğimiz method burası
    if (content !== "") {
      db.collection("feed").add({
        displayName: "Ümit Yaşar Türk",
        username: "@umitturk13",
        content,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(), //serverTimesstamp tweeten firebase server'ına ne zaman ulaştığının verisini tutuyor.
        image:
        "https://images.unsplash.com/photo-1621682877540-edd7c9dae368?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        avatar:
          "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png",
      });
      setContent("");
    }
  };

  return (
    <div className="flex flex-col flex-1 mt-2 px-2">
      <textarea
        className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent"
        placeholder="what's happening?"
        onChange={(e) => setContent(e.target.value)}
        value={content} //value değerimizi state deki content değeri ile eşleştiriyoruz.
      />
      <div className="flex items-center justify-between">
        <div className="flex -ml-3">
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest cursor-pointer">
            <ImageIcon className="w-6 h-6 text-primary-base" />
          </div>

          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest cursor-pointer">
            <GifIcon className="w-6 h-6 text-primary-base" />
          </div>

          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest cursor-pointer">
            <PollIcon className="w-6 h-6 text-primary-base" />
          </div>

          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest cursor-pointer">
            <EmojiIcon className="w-6 h-6 text-primary-base" />
          </div>

          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest cursor-pointer">
            <ScheduleIcon className="w-6 h-6 text-primary-base" />
          </div>
        </div>
        <button
          className="bg-primary-base text-white rounded-full px-4 py-2 font-medium"
          onClick={sendTweet}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetBox;
