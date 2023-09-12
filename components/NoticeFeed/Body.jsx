"use client";

import React, { useState, useEffect} from 'react';
import Link from 'next/link';


const NoticePage = () => {
  const [noticeData, setNoticeData] = useState([]);

  const fetchNoticeData = async () => {
    const res = await fetch("http://localhost:1337/api/notices?populate=*");
    const data = await res.json();
    const getNotices = data.data || [];

    setNoticeData(getNotices);
  };

  useEffect(() => {
    fetchNoticeData();
  }, []); 
    
  const maxLength = 250;

    return ( 
     <>
          <section className="w-full px-4 py-24 mx-auto max-w-7xl md:w-4/5">
               <div className="flex flex-col py-4 space-y-4 md:space-y-0 md:flex-row mt-5 md:justify-center md:space-x-4">
                    {noticeData.map((notice) => (
                        <Link key={notice.key} href={'/notices/' + notice.id}>
                          <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg space-x-4 md:w-1/2">
                             <h2 className="mb-2 text-xl font-bold leading-snug text-gray-900">
                                 <a href="#" className="text-gray-900 hover:text-purple-700">{notice.attributes.notice}</a>
                             </h2>
                             <div className="flex items-center text-gray-700" href="#">
                               <div className="avatar ">
                                  <img
                                    className="md:flex h-56 w-56 rounded-lg"
                                    src={`http://localhost:1337${notice.attributes.images.data.attributes.url}`}
                                    alt={"Photo of " + notice.attributes.description} 
                                   />
                                </div>
                                
                               <div>
                                  <p className="text-sm font-semibold text-gray-900">{notice.attributes.department}</p>
                                  <p className="text-sm text-gray-600">{notice.attributes.email}</p> 
                               </div>
                             </div>
                              <div>
                                <p className="mb-4 text-sm font-normal text-gray-600 mt-4">
                                  { notice.attributes.details}
                                </p>
                              </div>
                           </div>
                        </Link>
                    ))}   
               </div>
         </section>     
     </>
     )
}
 
export default NoticePage;
