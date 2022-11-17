# [Beauty-saloon Appointment Booking](https://whimsical-melomakarona-52a460.netlify.app) - MERN Stack Website
  [Front End](https://github.com/sathiyapriyakm/beauty-saloon-frontend)
  [Back End](https://github.com/sathiyapriyakm/beauty-saloon-backend)



## Brief Description

Beauty-saloon Appointment Booking web application can help customer book appointment with their beautician as per  convenience and Time. Customers can get information about Beauticians from various specialised fields.

### `Short tech summary`
  - Implemented authentication,authorization using Json Web Token for login,along with all CRUD features.
  -React is Used for Front end and nodeJS as Back end along with MongoDB as database  
  - Socket.IO and mongo DB change stream are used for  real time update and notification


## Features

### `User features`
  - User can see the List of beauticians as well can filter  beauticians based on their speciality.
  - To book appointmet  user has to register and login .
  -  user can make appointment with beuticion on checking their date and time slot as per convenience and need
  - If time slot is already booked then user will be notified through popup
  - user can see all the previous as well as current appointments and can cancel apppointments if need arises to do so
  
  
  
### `Admin features`
  - Admin has right to add Beautician.
  - Admin can remove beautician if they are no longer providing service to beauty-saloon
  - Admin can see list of all appointments and update accordingly
  - Whenever any user schedules appointment then Admin gets realtime popup through push notification.
  
  
## Tech Used
  - ReactJS
  - ExpressJS
  - NodeJS
  - MongoDB and MongoDB ChangeStream
  - Socket.io - for Push Notification
  

## Screenshots📷
- Homepage
![Homepage](/ScreenShots/Homepage.JPG "Homepage")
- Beautician  List
![Beautician  List](/ScreenShots/BeauticianList.JPG "Beautician  List")
- Appoinment Form
![Appoinment Form](/ScreenShots/AppoinmentForm.JPG "Appoinment Form")
- Customer Appointment view
![Customer Appointment view](/ScreenShots/CustomerViewAppointment.JPG "Customer Appointment view")
- Admin Add Beautician Form
![Admin Add Beautician Form](/ScreenShots/AddBeautician.JPG "Admin Add Beautician Form")
- Admin BeauticianList
![Admin BeauticianList](/ScreenShots/AdminBeauticianList.JPG "Admin BeauticianList")
- Admin Appoinment View
![Admin Appoinment View](/ScreenShots/AdminAppointmentList.JPG "Admin Appoinment View")
