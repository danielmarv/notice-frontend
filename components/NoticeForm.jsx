import Link from "next/link";

const NoticeForm = ({ type, notice, setNotice, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Notice</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and share all your Information that you would like to pass 
        to the community.
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your Notice Header 
          </span>

          <input
            value={notice.notice}
            onChange={(e) => setNotice({ ...post, notice: e.target.value })}
            type='text'
            placeholder='#Notice Heading'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your Department
          </span>

          <input
            value={notice.department}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Department'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your 
          </span>

          <input
            value={post.details}
            onChange={(e) => setPost({ ...post, details: e.target.value })}
            type='text'
            placeholder='#Details'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Field of Prompt{" "}
            <span className='font-normal'>
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your School
          </span>

          <input
            value={post.school}
            onChange={(e) => setNotice({ ...post, school: e.target.value })}
            type='text'
            placeholder='#School'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default NoticeForm;
