"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const NoticeDetail = () => {
//   const router = useRouter();
  const searchParams = useSearchParams();
  const noticeId = searchParams.get("id");

  const [notice, setNotice] = useState([]);

  useEffect(() => {
    const fetchNoticeDetail = async () => {
        const res = await fetch(`http://localhost:1337/api/notices?populate=*&id=${noticeId}`);
        const data = await res.json();
        console.log(data);
        setNotice(data.data);
    };

    if (noticeId) fetchNoticeDetail();
  }, [noticeId]);
  
  return ( 
    <NoticeDetail 
        key={notice.id} 
        notice={notice} 
    />


   )
}

export default NoticeDetail;