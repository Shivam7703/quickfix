import React from 'react';

const data = [{
    heading:"lorem ipsum Wembley Laboratories",
    para:"Wembley Laboratories Ltd was founded in the year 1952, by pioneering entrepreneur S. Amarjit Singh Lamba and his brothers. In their quest for new, innovative products suitable for the people of a newly independent India,",
    color:"blue-500"
},
{
    heading:"lorem ipsum Wembley Laboratories",
    para:"Wembley Laboratories Ltd was founded in the year 1952, by pioneering entrepreneur S. Amarjit Singh Lamba and his brothers. In their quest for new, innovative products suitable for the people of a newly independent India,",
    color:"yellow-500"
},
{
    heading:"lorem ipsum Wembley Laboratories",
    para:"Wembley Laboratories Ltd was founded in the year 1952, by pioneering entrepreneur S. Amarjit Singh Lamba and his brothers. In their quest for new, innovative products suitable for the people of a newly independent India,",
    color:"blue-500"
}
]

export default function Boxes() {
  return (
    <section className='flex bg-white max-w-svw overflow-x-auto'>
      {data?.map((cards:any, index:number) => (
        <div key={index} className={`lg:p-9 p-6 space-y-2 sm:w-1/2 md:w-1/3 max-sm:min-w-svw md:space-y-3 md:border-r text-white bg-${cards?.color}`}>
            <h3 className='text-base font-bold sm:text-lg'>{cards?.heading}</h3>
            <p className='sm:text-sm text-xs'>{cards?.para}</p>
        </div>
      ))}
    </section>
  )
}
