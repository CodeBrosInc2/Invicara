# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### Test Answers


Requirements 
- In the app the user will create a user account.
- Once they have a user account they can see all the workstations available in a shared computer lab.
- If a computer is not currently reserved it should appear as open and immediately available
- If a computer is currently reserved it should appear as unavailable
- The user should be able to see a list of Workstations and times that each are available to reserve them
- Reservations should be in 30 minute time chunks, with a limit of 90 minutes per user per day
- Users can reserve workstations only up to 5 days ahead of time

User Interface
1. Provide a short description of what the user interface you design might look like?

  - The UI, depending on the platform layout and objectives, might be a list of available workspaces
  found on the left side of the screen in a sub-navigation. Each WS shows the desk number and if its currently reserved or not (indicator badge).
  Users would be able to filter through workstations by reserved/unreserved @ time.
  On hover, a popup would display next available slot for booking as an FYI.
  The user can click a given WS and a card on the right will pop up which would display the required information + scheduler + CTA.
  This method would emphasise the workstation rather than availability where the default view would be of a list of Workstations
  Alternatively, the UI could be a timetable with slots of available workstaions listed as small sqaures.
  Each square on the timetable would display Desk # and current reserved status.
  onClick a larger popup would appear with more information + CTA to reserve the machine.
  This would place a larger empahis on availability of machines, rather than specific machines.
  Stylistically, base tones would be used with subtle use of accented colours, good use of whitespace, rounded-md for border-radiuses. 

4. What REST endpoint Method and URI would you put in place to get a Workstations schedule? Include any query params or request body.

  ```Get /workstations/{:workstation_id}/bookings```
  ```Get /workstations/{:workstation_id}/bookings/{:bookings_id}```
  ```Get /workstations/{:workstation_id}/bookings?range=30```
  ```Get /workstations/{:workstation_id}/bookings?start_at={datetime}?ends_at={datetime}```

-```query params {
    booking_id?,
    bookings[]?,
    duration?,
  }```
 ``request body {
    workstation_id
}``

  5. What REST endpoint Method and URI would you put in place to reserve a Workstation for a specific user? Include any query params or request body data you think it might need.
  
  ```POST /workstations/{:workstation_id}/bookings```
   ``request body  {
    workstation_id,
    user_id,
    booking_id,
    start_grace?,
    starts_at?,
    duration?,
    end_grace?,
    created_at?,
    updated_at?
  }``

## Data Persistence
6. What might be the different types of data you would need to store and access for this app?

  - User data + auth
  - User current region/locale + tz
  - Workstation data
   -  Device data
    - scheduling in UTC

## Other
7. What questions would you ask the PM providing these requirements?
  - Can any/all users book workstations?
  - Can users only book a max on 90 minutes per 12:00-12:00 or a rolling 24 hour period from their last booking
  - Can users book multiple 30 minutes chunks consecutively? If not, what is the minimum time interval
  - Can users book for less than 30 minutes
  - Can users book multiple workstations at the same time?
  - Are there any other resources that booking machines are linked to?
  - Are bookings automatically approved?
  - Aside from any overlaps, are there any other reasons why a booking shouldn't be validated.
  