import React from 'react'

const ToC = ({ anchor }) => {
  return (
      <>
        <hr className={'m-4'}/>
        <div className={'px-4'}>
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
        <hr className={'m-4'}/>
      </>
  )
}

export default ToC
