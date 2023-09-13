"use client";

import React, { useState, useEffect} from 'react';
import Link from 'next/link';


const NoticeList = () => {
  const [noticeData, setNoticeData] = useState([]);
  const [selectedNoticeIndex, setSelectedNoticeIndex] = useState(null);

  const fetchNoticeData = async () => {
    const res = await fetch("http://localhost:1337/api/notices?populate=*&sort[0]=createdAt:desc&sort[1]=status");
    const data = await res.json();
    const getNotices = data.data || [];

    setNoticeData(getNotices);
  };

  useEffect(() => {
    fetchNoticeData();
  }, []); 
  
    
  const maxLength = 250;
  const handleItemClick = (notice) => {
    setSelectedNoticeIndex(notice);
  };

  return (
    <>
      <section className="w-full px-2 py-4 mx-auto max-w-7xl md:w-4/5">
        <div className="flex flex-col py-4  md:space-y-0 mt-5">
          {noticeData.map((notice) => (
              <div key={notice.id} className="flex flex-col md:flex-row bg-gray-100 rounded-lg pt-4">
                <div className="md:w-1/2">
                  <div className="avatar">
                    <img
                      className="md:flex h-70 w-70 rounded-lg"
                      src={`http://localhost:1337${notice.attributes.images.data.attributes.url}`}
                      alt={"Photo of " + notice.attributes.description}
                    />
                  </div>
                </div>
  
                <div className="md:w-1/2 p-4">
                  <h2 className="mb-2 text-xl font-bold leading-snug text-gray-900">
                    <a href="#" className="text-gray-900 hover:text-purple-700">{notice.attributes.notice}</a>
                  </h2>
                  <div className="flex items-center text-gray-700" href="#">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{notice.attributes.department}</p>
                      <p className="text-sm font-semibold text-gray-600">{notice.attributes.email}</p>
                      <p className="text-sm font-semibold text-gray-600">{notice.attributes.venue}</p>
                    </div>
                  </div>
                  <div>
                    <p className="mb-4 text-sm font-normal text-gray-600 mt-4">
                      {notice.attributes.description}
                    </p>
                  </div>
                  <button
                    onClick={() => handleItemClick(notice)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    View Details
                  </button>
                </div>
              </div>
          ))}
        </div>
      </section>
      {selectedNoticeIndex !== null && (
        <div className="fixed top-4 left-4 right-4 bottom-4 flex justify-center items-center bg-white bg-opacity-75 overflow-y-auto">
          <div className="flex flex-col md:flex-row bg-white rounded-lg pt-4">
            <div className="md:w-1/2">
              <div className="avatar">
                <img
                  className="md:flex h-70 w-70 rounded-lg"
                  src={`http://localhost:1337${selectedNoticeIndex.attributes.images.data.attributes.url}`}
                  alt={"Photo of " + selectedNoticeIndex.attributes.description}
                />
              </div>
            </div>
            <div className="md:w-1/2 p-4">
              <h2 className="text-xl font-bold mb-2">
                {selectedNoticeIndex.attributes.notice}
              </h2>
              <p className="mb-4">{selectedNoticeIndex.attributes.description}</p>
              <div className="flex items-center text-gray-700" href="#">
                <div>
                  <p className="text-sm font-semibold text-gray-900">{selectedNoticeIndex.attributes.department}</p>
                  <p className="text-sm font-semibold text-gray-600">{selectedNoticeIndex.attributes.email}</p>
                  <p className="text-sm font-semibold text-gray-600">{selectedNoticeIndex.attributes.venue}</p>
                </div>
              </div>
              <div>
                <p className="mb-4 text-sm font-normal text-gray-600 mt-4">
                  {selectedNoticeIndex.attributes.description}
                </p>
              </div>

              <div>
                <p className="mb-4 text-sm font-normal text-gray-600 mt-4">
                  {selectedNoticeIndex.attributes.details}
                </p>
              </div>

            <button
              onClick={() => setSelectedNoticeIndex(null)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
            </div>
          </div>
          </div>
      )}
    </>
  );
  
}
 
export default NoticeList;
