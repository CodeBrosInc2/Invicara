
// Requirements 
// • In the app the user will create a user account.
// • Once they have a user account they can see all the workstations available in a shared computer lab.
// • If a computer is not currently reserved it should appear as open and immediately available
// • If a computer is currently reserved it should appear as unavailable
// • The user should be able to see a list of Workstations and times that each are available to reserve them
// • Reservations should be in 30 minute time chunks, with a limit of 90 minutes per user per day
// • Users can reserve workstations only up to 5 days ahead of time

// User Interface
// 1. Provide a short description of what the user interface you design might look like?

  // The UI, depending on the platform layout and objectives, might be a list of available workspaces
  // found on the left side of the screen in a sub - navigation. Each WS shows the desk number and if its currently reserved or not (indicator badge).
  // Users would be able to filter through workstations by reserved/unreserved @ time.
  // On hover, a popup would display next available slot for booking as an FYI.
  // The user can click a given WS and a card on the right will pop up which would display the required information + scheduler + CTA.
  // This method would emphasise the workstation rather than availability wince the default view would be of a list of WS's
  // Alternatively, the UI could be a timetable with slots of available workstaions listed as small sqaures.
  // Each square on the timetable would display Desk #.
  // onClick a larger popup would appear with more information + CTA to reserve the machine.
  // This would place a larger empahis on availability of machines, rather than specific machines.
  // Stylistically, base tones would be used with subtle use of accented colours.



// 2. Please write a React component for a workstation, that displays its id, desk number, current
// reserved status, and a schedule showing when it is reserved and available. Assume that the schedule component is provided by another React component. 
//  Assume the Workstation component fetches its own reserved status and schedule on mounting.
//  Feel free to split up the component into multiple components in order to make them as clean and reus able as possible.
//  3. Current reserved status is displayed with either a green dot (currently unreserved) or a red dot (currently reserved). 
//  Please include this in #2 above and provide the CSS for the dots. 
//  REST API
// 4. What REST endpoint Method and URI would you put in place to get a Workstations schedule? Include any query params or request body.
  // Get /workstations/{:workstation_id}/bookings
  // Get /workstations/{:workstation_id}/bookings?range=30
  // Get /workstations/{:workstation_id}/bookings?start_at={datetime}?ends_at={datetime}
  // query params {
    // booking_id?
    // bookings?
    // bookings_id?duration?
  // }
  // request body {
    // workstation_id
  // }

  // 5. What REST endpoint Method and URI would you put in place to reserve a Workstation for a specific user? Include any query params or request body data you think it might need.
  // POST https://SWAPI.com/workstations/{:workstation_id}/bookings
  //  request body  {
    // workstation_id
    // user_id
    // booking_id
    // start_grace?
    // starts_at?
    // duration?
    // end_grace?
    // created_at?
    // updated_at?
  // }

// Data Persistence
// 6. What might be the different types of data you would need to store and access for this app?
  // User data + auth
  // User current region/locale + tz
  //
  // Workstation data
    // Device data
    // scheduling in UTC

// Other
// 7. What questions would you ask the PM providing these requirements?
  // Can any/all users book workstations?
  // Can users only book a max on 90 minutes per 12:00-12:00 or a rolling 24 hour period from their last booking
  // Can users book multiple 30 minutes chunks consecutively? If not, what is the minimum time interval
  // Can users book for less than 30 minutes
  // Can users book multiple workstations at the same time?
  // Are there any other resources that booking machines are linked to?
  // Are bookings automatically approved?
  // Aside from any overlaps, are there any other reasons why a booking shouldn't be validated.
  

import './App.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/global/Header';
import SideNav from './components/global/SideNav';
import WorkstationsList from './components/WorkstationsList.jsx';
import WorkstationCard from './components/global/WorkstationCard';

import { WORKSPACE } from '../src/factory/workstations'

function App() {

  const [showReservations, setShowReservations] = useState(false)
  const [whichCardsToShow, setWhichCardsToShow] = useState('')

  const handleSetShowReservations = () => {
    setShowReservations(true)
  }

  const handleWorkstationCardClose = () => {
    setShowReservations(false)
  }

   const handleWhichCardToShow = (workstationId) => {
    setWhichCardsToShow(workstationId)
   }
  
  const selectedWorkstation = WORKSPACE.filter((workstation) => { 
    return workstation.id === whichCardsToShow
  });

  return (
    <div className="App bg-white h-screen h-100">
      <Header />
      <Container>
        <SideNav />
        <WorkstationsList
          workstations={WORKSPACE}
          handleSetShowReservations={handleSetShowReservations}
          handleWhichCardToShow={handleWhichCardToShow}
        />
        {showReservations ? 
          selectedWorkstation.map((workstation) => {
            return <WorkstationCard
            key={workstation.id}
            handleWorkstationCardClose={handleWorkstationCardClose}
            workstation={workstation}
        />
        })
      : false }
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`