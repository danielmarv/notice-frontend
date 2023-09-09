import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const Head = ({ post, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {
    console.log(post);

    if (post.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  const handleCopy = () => {
    setCopied(post.details);
    navigator.clipboard.writeText(post.details);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className='notice_card mt-5 w-screen p-10 overflow-x-hidden'>
      <div className='flex-row justify-center items-center'>
        <div
          className='flex-1 flex justify-center items-center gap-3 cursor-pointer mb-3'
          onClick={handleProfileClick}
        >
          <Image
            src={post.creator.image}
            alt='user_image'
            width={40}
            height={40}
            className='rounded-full object-contain'
          />

          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-gray-900'>
              {post.creator.username}
            </h3>
            <p className='font-inter text-sm text-gray-500'>
              {post.creator.email}
            </p>
          </div>
        </div>

          <div className="w-full h-[60vh] overflow-x-hidden rounded-xl relative">
            <Image
              src={post.noticeImage}
              fill
              className="object-cover w-full"
              alt="Image"
            />
          </div>
          <div className="flex">
            <div className="flex flex-row items-center gap-4 justify-between">
              <div className="flex flex-col">
                <div className="text-lg font-semibold">{post.school}</div>
                <div className="text-lg font-semibold">{post.department}</div>
                <div className="font-light text-neutral-500">{post.details}</div>
              </div>
              <div className='copy_btn justify-end' onClick={handleCopy}>
                <Image
                  src={
                    copied === post.details
                      ? "/assets/icons/tick.svg"
                      : "/assets/icons/copy.svg"
                  }
                  alt={copied === post.details ? "tick_icon" : "copy_icon"}
                  width={12}
                  height={12}
                />
              </div>
            </div>
          </div>
          {session?.user.id === post.creator._id && pathName === "/profile" && (
            <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
              <p
                className='font-inter text-sm green_gradient cursor-pointer'
                onClick={handleEdit}
              >
                Edit
              </p>
              <p
                className='font-inter text-sm orange_gradient cursor-pointer'
                onClick={handleDelete}
              >
                Delete
              </p>
            </div>
          )}
        </div>
    </div>
  );
}

export default Head;
