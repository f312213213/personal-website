import React from 'react'

const ToC = ({ anchor }) => {
  return (
      <div className={'mt-4'}>
        Table of Contents
        <ul>
          {
            anchor.map(a => (
                    <li key={a}>
                      <a href={`#${a}`}>{a}</a>
                    </li>
            ))
          }
        </ul>
      </div>
  )
}

export default ToC
