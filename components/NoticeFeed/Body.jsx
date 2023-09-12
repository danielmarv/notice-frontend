import Link from 'next/link'


export const getStaticProps = async () => {
  const res = await fetch("<http://localhost:1337/api/notices?populate=*>")
  const data = await res.json()
  
  return {
    props: {
        getNotices: data.data
    }
  }
}

const NoticePage = ({getNotices}) => {
    
    const MAX_LENGTH = 250

    return ( 
     <>
          <section className="w-full px-4 py-24 mx-auto max-w-7xl md:w-4/5">
               <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    {getNotices.map( notice => (
                        <Link key={notice.key} href={'/notices/' + notice.id}>
                          <div>
                             <h2 className="mb-2 text-xl font-bold leading-snug text-gray-900">
                                 <a href="#" className="text-gray-900 hover:text-purple-700">{notice.attributes.notice}</a>
                             </h2>
                                 <p className="mb-4 text-sm font-normal text-gray-600">
                                    {notice.attributes.details.substring(0, MAX_LENGTH) + " ..."}
                                  </p>
                             <a className="flex items-center text-gray-700" href="#">
                               <div className="avatar">
                                  <img
                                    className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
                                    src={`http://localhost:1337${notice.attributes.images.data.attributes.url}`}
                                    alt={"Photo of " + notice.attributes.description} 
                                   />
                                </div>
                               <div className="ml-2">
                                   <p className="text-sm font-semibold text-gray-900">{notice.attributes.department}</p>
                                   <p className="text-sm text-gray-600">{notice.attributes.email}</p>
                               </div>
                             </a>
                           </div>
                        </Link>
                    ))}   
               </div>
     
             {/* btns */}
             <div className="flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
                 <Link href="/"><a href="#" className="px-3 py-2 text-indigo-500 border border-indigo-500 border-solid hover:text-black md:w-auto">Home</a>
                 </Link>
             </div>
         </section>     
     </>
     )
}
 
export default NoticePage;
