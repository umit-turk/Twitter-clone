import React, { useEffect, useState } from "react";
import Divider from "../components/Divider";
import TweetBox from "../components/TweetBox";
import { PopulerIcon } from "../icons/icon";
import db from "../firebase";
import FeedList from "../components/FeedList";

const Content = () => {

  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    db.collection("feed") //feed collection'u dinleyeceğim
      .orderBy("timestamp", "desc") //timestamp'e göre sıralamak istiyoruz.son attığım tweet en yukarıda gözüksün diye desc ile yapıyoruz.
      .onSnapshot((snapshot) =>
        setTweets(snapshot.docs.map((doc) => doc.data()))
      ); //her bir id'li kısım doc.bütün tweetleri dolaş firestoredeki ve datasını çağırıyoruz yani tweet'i.
  }, []);

  console.log(tweets);

  return (
    <main className=" flex-1 flex-col border-r border-l border-gray-extraLight">
      <header className="sticky top-0 z-10  flex justify-between items-center p-4 border-b border-gray-extraLight bg-white">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <PopulerIcon className="w-6 h-6 text-primary-base" />
      </header>
      <div className="flex px-4 py-3 space-x-4">
        <img
          src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png"
          alt="Profile"
          className="w-11 h-11 rounded-full"
        />
        {/* TweetBox */}
        <TweetBox />
      </div>
      <Divider />

      {/* Feed */}
      <FeedList tweets={tweets}/>
    </main>
  );
};

export default Content;
