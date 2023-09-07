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
            onChange={(e) => setNotice({ ...notice, notice: e.target.value })}
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
            onChange={(e) => setNotice({ ...notice, department: e.target.value })}
            type='text'
            placeholder='#Department'
            required
            className='form_input'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your Details
          </span>

          <textarea
            value={notice.details}
            onChange={(e) => setNotice({ ...notice, details: e.target.value })}
            placeholder='Write your detail here'
            required
            className='form_textarea'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Field of Notice{" "}
            <span className='font-normal'>
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
          <input
            value={notice.tag}
            onChange={(e) => setNotice({ ...notice, tag: e.target.value })}
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
            value={notice.school}
            onChange={(e) => setNotice({ ...notice, school: e.target.value })}
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
