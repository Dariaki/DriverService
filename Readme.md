## Task 3 Node.js

### Running development mode:
- `npm start dev`
You will be redirected to http://localhost:8081/. 

### Basic Technology Stack:
- Node.js + Express.js (Back-End);
- React.js (Front-End);
- MongoDB + Mongoose ODM (Data Base);

#### Libraries used:
- JWT-token (Login logic);
- Joi (Data-validation);
- Bcrypt (Password hashing);
- Eslint (Code proof-reading);

### Features implemented for all users:
- Register as driver or shipper;
- Login into the system;
- View user profile info;
- Change the password;

### Features implemented for shipper only:
- Delete his account;
- Create loads in the system;
- View created loads;
- Update loads with status ‘NEW';
- Delete loads with status 'NEW';
- Post a load;**
- View shipping info.***

** Don't forget to use console to see what is going on. If the truck is found,
the load appears in the shipment section. 

*** Don't forget to re-fresh your page to see any updates regarding the load state.
When the driver delivers the load, it will be automatically placed to the history 
section.

### Features implemented for drivers only:
- Add trucks;
- View created trucks;
- Assign truck to himself;
- Update not assigned to the driver trucks info;
- Delete not assigned to the driver trucks;
- View assigned to the driver load;
- Interact with assigned loads (pick up and deliver).** 

N.B. Driver cannot edit or delete truck assigned to him. 
Likewise driver is not able to reassign from the current truck or assign
another one in case he/she has loads to deliver.  

** To see how load changes its state, please, re-fresh the page.

P.S. Use console to follow what is going on right now.

### Available drivers:

| Name      | Password   | Email             |
|  :---:    | :---:      |  :---:            |
| Tom1      | 111        | tom1@email.com    |
| Tom2      | 222        | tom2@email.com    |
| Tom3      | 333        | tom3@email.com    |

### Available shippers:

| Name      | Password   | Email             |
|  :---:    | :---:      |  :---:            |
| Sam1      | 111        | sam1@email.com    |
| Sam2      | 222        | sam2@email.com    |
| Sam3      | 333        | sam3@email.com    |

#### You are more than welcome to create your own users and test functionality available depending on their roles. Enjoy:)
