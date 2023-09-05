    // to fetch data
    export const getStaticProps = async () => {
        const res = await fetch("<http://localhost:1337/api/notices?populate=*>")
        const data = await res.json()
        
        return {
             props: {
                  getNotices: data.data
             }
        }
   }