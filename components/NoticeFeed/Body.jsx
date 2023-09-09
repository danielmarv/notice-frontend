import React from 'react';

const NoticeView = ({ notice }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{notice.department}</div>
          <div className="font-light text-neutral-500">{notice.details}</div>
        </div>
      </div>
    </div>
  );
}

export default NoticeView;
