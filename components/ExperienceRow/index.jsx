import React from 'react'

const ExperienceRow = ({ companyName, timeLine, description }) => {
  return (
      <li className={'py-6'}>
        <div className={'flex justify-items-start items-center'}>
          <h3 className={'text-2xl'}>{companyName}</h3>
          <p className={'ml-4 text-sm'}>{timeLine}</p>
        </div>
        <p className={'text-left mt-4 text-sm'}>
          {description}
        </p>
      </li>
  )
}

export default ExperienceRow
