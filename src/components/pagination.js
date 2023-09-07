import React from 'react'

function pagination({totalPages}) {
    const pages = [...Array(totalPages).keys()].map(num => num + 1)
    console.log(pages)
  return (
    <div>
        {pages.map((num => (
            <button>{num}</button>
        )))}
    </div>
  )
}


export default pagination