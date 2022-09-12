import React, { useEffect, useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TextField from '@mui/material/TextField';
import Schedule from './Schedule';

const WorkstationCard = (props) => {
  const dayjs = require('dayjs')
  const { handleWorkstationCardClose, workstation } = props; 
  const [reservationColour, setReservationColour] = useState('')
  const [selectedDate, setSelectedDate] = React.useState(dayjs());
  const [selectedTime, setSelectedTime] = React.useState(dayjs());

  const onWorkstationCardClose = () => {

    handleWorkstationCardClose()
  }

   useEffect(() => {
    if (workstation.reservation_status === 'reserved') {
      setReservationColour("badge-error")
    } else {
      setReservationColour("badge-primary")
    }
   }, [workstation.reservation_status])
  
  return (
    <div className='w-[400px] h-full rounded-r-3xl shadow-md bg-white p-8 relative mt-10'>
      <div className='p-4 text-center '>
        <div class={`badge ${reservationColour} text-white mb-4`}>{workstation.reservation_status}</div>
        <div className='text-2xl'>
          Desk
        </div>
        <div className='text-5xl'>
            #{workstation.desk_number}
          </div>
        <div className='text-sm text-gray-400 mt-4'>
        id#{workstation.id}
        </div>
      </div>
      <div className="text-center">
        <div className='mb-4'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select Start Date"
            value={selectedDate}
            onChange={(newValue) => {
              setSelectedDate(newValue)
            }}
            renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Select Start Time"
              value={selectedTime}
              onChange={(newValue) => {
                setSelectedTime(newValue)
              }}
              renderInput={(params) => <TextField {...params} />}
              />
          </LocalizationProvider>
        </div>
        <div className='mt-6'>
          <p className='text-sm'>
            You are booking this machine for :
          </p>
          <h6 className='font-bold mt-2'>
            {(dayjs(selectedDate).format('ll'))}
          </h6>
          <p className='text-sm'>
            at
          </p>
          <h6 className='font-bold'>
            {(dayjs(selectedTime).format(' LT'))}
          </h6>
        </div>
        
      </div>
      <div className='absolute bottom-36 right-5'>
        <div className='btn btn-success text-white' onClick={onWorkstationCardClose}>Submit</div>
      </div>
      <div className='absolute bottom-36 left-5'>
        <div className='btn btn-warning text-white' onClick={onWorkstationCardClose}>Close</div>
      </div>
      <Schedule
        workstation={workstation} />
    </div>
)}


export default WorkstationCard