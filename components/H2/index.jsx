import React from 'react'

const H2 = ({ children }) => {
  return (
      <h2 id={children.props.content[0].text.replaceAll(' ', '-').toLowerCase()} className={'hover:after:content-["#"] after:ml-1 after:prose-lg relative'}>
        <a href={`#${children.props.content[0].text.replaceAll(' ', '-').toLowerCase()}`} className={'border-none w-full absolute h-full'} />
        {children}
      </h2>
  )
}

export default H2
