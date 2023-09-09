"use client";

import React, { useState, useEffect } from 'react';
import Head from './Head';
import { useSession } from 'next-auth/react';

const Notice = ({ data }) => {
  return (
    <div className='mt-16 notice_layout'>
      {data.map((post) => (
        <Head
          key={post._id}
          post={post}
          // handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
}

const NoticeFeed = () => {
  // const { data: session } = useSession();
  const [noticeData, setNoticeData] = useState([]);
  
  const fetchNoticeData = async () => {
    const response = await fetch("/api/notice"); // Replace with the actual path to your API route.
    const data = await response.json();
    const sortedData = data.sort((a, b) => b.createdAt - a.createdAt);
    const latestItems = sortedData.slice(0, 2);
    setNoticeData(latestItems);
  };

  useEffect(() => {
    fetchNoticeData();
  }, []); 

  return (
    <section className='notice'>
      <Notice
        data={noticeData} // Replace with the actual field names from your notice data.
      />
    </section>
  );
}

export default NoticeFeed;
