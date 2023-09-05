"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { getNoticesData } from '../api/notice';
import NoticeCard from './NoticeCard';

export const getStaticProps = async () => {
  const getNotices = await getNoticesData();

  return {
    props: {
      getNotices
    }
  };
};

const NoticePage = ({ getNotices }) => {
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getNoticesData();
            setNotices(data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching notices:', error);
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);
  
    return (
      <section className="w-full px-4 py-24 mx-auto max-w-7xl md:w-4/5">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {notices && notices.length > 0 ? (
            notices.map((notice) => <NoticeCard key={notice.key} notice={notice} />)
            ) : (
                <p>No notices available.</p>
            )}
        </div>
  
        {/* Buttons */}
        <div className="flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
          <Link href="/" className="px-3 py-2 text-indigo-500 border border-indigo-500 border-solid hover:text-black md:w-auto">
            {/* <a href="#" className="px-3 py-2 text-indigo-500 border border-indigo-500 border-solid hover:text-black md:w-auto">
              Home
            </a> */}
            Home
          </Link>
        </div>
      </section>
    );
  };
  
  export default NoticePage;