import React, { useState } from 'react'
import Markdown from 'react-markdown'

const Creationitem = ({item}) => {

    const [expanded , setExpanded] = useState(false)
  return (
    <div onClick={() => (setExpanded(!expanded))} className='p-4 max-w-5xl text-sm bg-white border border-gray-200
    rounded-lg cursor-pointer
    '>
        <div className="flex justify-between items-center gap-4">
            <div>
                <h2>{item.prompt}</h2>
                <p className='text-gray-600'>{item.type} - {new Date(item.created_at).toLocaleDateString()}</p>
            </div>
            <button className='bg-[#EFF6FF] border border-[#BFDBFE] text-[1E40AF] px-4 py-1 rounded-full'>{item.type}</button>
        </div>
        {
            expanded && (
                <div>
                    {item.type === 'image' ? (
                        <div className="">
                            <img src={item.content} alt="mt-3 w-ful max-w-md" />
                        </div>
                    ) : (
                        <div className="reset-tw">
                            <Markdown>{item.content}</Markdown>
                        </div>
                    )} 
                </div>
            )
        }
    </div>
  )
}

export default Creationitem