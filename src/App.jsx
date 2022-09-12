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