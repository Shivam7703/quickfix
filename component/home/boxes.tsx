import React from 'react';

const data = [{
    heading:"lorem ipsum Wembley Laboratories",
    para:"Wembley Laboratories Ltd was founded in the year 1952, by pioneering entrepreneur S. Amarjit Singh Lamba and his brothers. In their quest for new, innovative products suitable for the people of a newly independent India,"
},
{
    heading:"lorem ipsum Wembley Laboratories",
    para:"Wembley Laboratories Ltd was founded in the year 1952, by pioneering entrepreneur S. Amarjit Singh Lamba and his brothers. In their quest for new, innovative products suitable for the people of a newly independent India,"
},
{
    heading:"lorem ipsum Wembley Laboratories",
    para:"Wembley Laboratories Ltd was founded in the year 1952, by pioneering entrepreneur S. Amarjit Singh Lamba and his brothers. In their quest for new, innovative products suitable for the people of a newly independent India,"
}
]

export default function Boxes() {
  return (
    <div className='grid md:grid-cols-3 bg-blue-600 lg:px-16'>
      {data?.map((cards:any, index:number) => (
        <div key={index} className='lg:p-9 p-6 space-y-2 md:space-y-3 md:border-r border-b border-blue-400 last:border-none text-white'>
            <h3 className='text-base font-bold sm:text-lg'>{cards?.heading}</h3>
            <p className='sm:text-sm text-xs'>{cards?.para}</p>
        </div>
      ))}
    </div>
  )
}
