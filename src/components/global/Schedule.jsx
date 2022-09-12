import React from 'react';

const Schedule = (props) => {
  const { workstation } = props;
  const dayjs = require('dayjs')

  return (
      <div className="shadow-sm text-left rounded mt-4">
        <div className='card-body'>
        <h5 className="font-medium">Schedule for #{workstation.id}</h5>
        {workstation.bookings?.map((eachBooking) => {
          return <li
            key={eachBooking.booking_id}
            className="list-none shadow-sm alert alert-info p-2 text-sm text-white"
          >
            {dayjs(eachBooking.starts_at).format('LLL')} - 30 mins
          </li>
        })}
        </div>
      </div>
  )
}


export default Schedule