"use client"
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

export default function Blogsbyid(){
    const params = useParams();
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    const onFetchBlogs=async()=>{
        try{
            setLoading(true)
            let res = await fetch(`/api/blogs/${params.id}`)
            let data = await res.json()
            setData(data.data)
            setLoading(false)
        }catch(err){
            console.log('err', err)
            setData(null)
            setLoading(false)
        }
    }

    useEffect(()=>{
        onFetchBlogs()
    },[])

    if(isLoading) return (<>Loading...</>)

    return (
        <>
            <div className='margin-0 mx-auto w-2/3'>
                <h2 className="text-center text-[32px] font-bold w-full">{data.title}</h2>
                <div className='mt-10  ' dangerouslySetInnerHTML={{ __html: data.content }}/>
            </div>
        </>
    );
}