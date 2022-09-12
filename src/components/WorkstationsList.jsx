import React from 'react';
import WorkstationListItem from './global/WorkStationListItem';

const WorkstationList = (props) => {
  
  const { workstations, handleSetShowReservations, handleWhichCardToShow} = props;
  
  const onWorkstationClick = () => {
    handleSetShowReservations()
  }
  const onSelectedWorkstation = (workstationId) => {
    handleWhichCardToShow(workstationId)
  }

  return (
  <div className="drawer w-[210px]">
      <ul className="menu p-4 overflow-y-auto w-80 bg-slate-100 text-base-content">
        {workstations.map((workstation) => (
          <WorkstationListItem
      key={workstation.id}
            
            workstation={workstation}
            onWorkstationClick={onWorkstationClick}
            onSelectedWorkstation={onSelectedWorkstation}
          />
        ))}
      </ul>
    </div>
  )
}

export default WorkstationList