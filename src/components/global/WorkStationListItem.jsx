import React from 'react'
import { useEffect, useState} from 'react';


const WorkstationListItem = (props) => {

  const { workstation, onWorkstationClick, onSelectedWorkstation} = props; 
  
  const [reservationColour, setReservationColour] = useState("")
 
  const handleOnWorkStationClick = () => {
    onWorkstationClick()
  }

  const handleselectWorkstationId = (workstationId) => {
    onSelectedWorkstation(workstationId)
  }

  // Sets reservation badge colour
  useEffect(() => {
    if (workstation.reservation_status === 'reserved') {
      setReservationColour("badge-error")
    } else {
      setReservationColour("badge-primary")
    }
  }, [workstation.reservation_status])

  return (
    <div
      className="indicator mt-3 rounded-xl p-1 border-2 border-slate-200"
      onClick={() => {
        handleOnWorkStationClick();
        handleselectWorkstationId(workstation.id)
      }}>
      <span className={`indicator-item badge ${reservationColour} badge-sm`}></span>
      <li className="list-none w-40 rounded-lg"
      >
        <span>
          Desk {workstation.desk_number}
        </span>
      </li> 
    </div>
  )
}

export default WorkstationListItem