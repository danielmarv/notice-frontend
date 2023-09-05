import Link from 'next/link';

const NoticeCard = ({ notice }) => {
    const MAX_LENGTH = 250;
  
    return (
      <Link key={notice.key} href={`/notices/${notice.id}`}>
        <div>
          <h2 className="mb-2 text-xl font-bold leading-snug text-gray-900">
            <a href="#" className="text-gray-900 hover:text-purple-700">
              {notice.attributes.Notice}
            </a>
          </h2>
          <p className="mb-4 text-sm font-normal text-gray-600">
            {notice.attributes.description.substring(0, MAX_LENGTH) + ' ...'}
          </p>
          <a className="flex items-center text-gray-700" href="#">
            <div className="avatar">
              <img
                className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
                src={`http://localhost:1337${notice.attributes.Images.data.attributes.url}`}
                alt={`Photo of ${notice.attributes.Department}`}
              />
            </div>
            <div className="ml-2">
              <p className="text-sm font-semibold text-gray-900">
                {notice.attributes.Department}
              </p>
              <p className="text-sm text-gray-600">{notice.attributes.Email}</p>
            </div>
          </a>
        </div>
      </Link>
    );
};

export default NoticeCard;
  