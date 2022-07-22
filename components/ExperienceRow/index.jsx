import React from 'react'

const ExperienceRow = ({ companyName, timeLine, description, title }) => {
  return (
      <li className={'py-6'}>
        <div className={'flex flex-col sm:flex-row justify-items-start items-start sm:items-center'}>
          <h3 className={'text-xl sm:text-2xl'}>{title} @{companyName}</h3>
          <p className={'sm:ml-4 text-sm'}>{timeLine}</p>
        </div>
        <p className={'text-left mt-4 text-sm'}>
          {description}
        </p>
      </li>
  )
}

export default ExperienceRow
