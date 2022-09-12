import React from 'react';
import styled from 'styled-components';

const SideNav = () => {

  return (
    <SideNavContainer>
      <div className="drawer ">
          <ul className="menu p-4 overflow-y-auto w-80 bg-slate-300 text-base-content pt-8">
            <li className="bg-slate-400 rounded-l-lg"><a className='font-medium text-white'> Workstations </a></li>
          </ul>
      </div>
    </SideNavContainer>
  )
}

export default SideNav

const SideNavContainer = styled.div`
  transition: .25s ease-in-out;
  width: 200px;
`