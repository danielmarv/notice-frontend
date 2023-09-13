export const getStaticPaths = async () => {
    const res = await fetch("<http://localhost:1337/api/notices?populate=*>")
    const { data: notices } = await res.json()

        const paths = notices.map( (notice) => {
        return  {
            params: { 
                id: notice.id.toString(),
            }
     }})

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    const {id} = params
    const res = await fetch(`http://localhost:1337/api/notices/${id}?populate=*`)
    const {data: notice } = await res.json()

          return {
        props: {notice},
        revalidate: 1,
    }

}