import React from 'react'

const Header = () => {
  return (
  <div className="navbar bg-slate-700">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-white text-xl">Invicara</a>
    </div>
    <div className="flex-none gap-2">
      <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered bg-white" />
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex="0" className="btn btn-ghost btn-circle avatar online">
          <div className="w-10 rounded-full online">
            <img src="https://placeimg.com/80/80/people" />
          </div>
        </label>
        <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
               Bookings
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
}



export default Header