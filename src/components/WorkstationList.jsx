import React from 'react';
import WorkstationListItem from './global/WorkStationItem';

const WorkstationList = (props) => {
  
  const { workstations, handleSetShowReservations } = props;
  
  const onWorkstationClick = () => {
    handleSetShowReservations()
  }

  return (
    <div className="drawer">
          <ul className="menu p-4 overflow-y-auto w-80 bg-slate-300 text-base-content">
            {workstations.map((workstation) => (
              <WorkstationListItem
                workstation={workstation}
                onWorkstationClick={onWorkstationClick}
              />
            ))}
          </ul>
      </div>
  )
}

export default WorkstationList