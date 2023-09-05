import { useEffect, useState } from 'react';
import Link from 'next/link';

const NoticePage = ({ getNotices }) => {
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Fetch or set your notices data here
      // Example: fetchNotices().then(data => setNotices(data));
      // Make sure to handle loading and error states as needed
    }, []);
  
    return (
      <section className="w-full px-4 py-24 mx-auto max-w-7xl md:w-4/5">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {loading ? (
            <p>Loading notices...</p>
          ) : (
            notices.map((notice) => <NoticeCard key={notice.key} notice={notice} />)
          )}
        </div>
  
        {/* Buttons */}
        <div className="flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
          <Link href="/">
            <a href="#" className="px-3 py-2 text-indigo-500 border border-indigo-500 border-solid hover:text-black md:w-auto">
              Home
            </a>
          </Link>
        </div>
      </section>
    );
  };
  
  export default NoticePage;