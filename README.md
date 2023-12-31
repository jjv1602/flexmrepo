# FLEXMREPO

## Getting Started

To get a local copy up and running, please follow these simple steps.

### Prerequisites
- Node.js (Version: >=20.x)
- PostgreSQL
- Npm _(recommended)_
### Technology Used
* `Database` - PostgreSQL
* Node.js
* Express
* React.js
* Vite
  
### Setup

1. Clone the repo into a public GitHub repository (or fork https://github.com/jjv1602/flexmrepo.git). 

   ```sh
   git clone https://github.com/jjv1602/flexmrepo.git
   ```
2. Go to the project folder

   ```sh
   cd 
   ```

3. Install backend packages with npm

   ```sh
   npm i
   ```
4. Install frontend packages with npm
   ```sh
   cd frontend
   npm i
   ```
5. Set up your `.env` file

   - Duplicate `.env.example` to `.env`

6. Run the project
   In the root folder
    ```sh
   npm run dev
   ```
   

#### Quick start with Docker

> - **Requires Docker and Docker Compose to be installed**
1. Clone the repo into a public GitHub repository (or fork https://github.com/jjv1602/flexmrepo.git). 

   ```sh
   git clone https://github.com/jjv1602/flexmrepo.git
   ```
2. Build the Docker Image:
   ```sh
   docker build -t your-image-name .
   ```
3. Run the Docker Container:
    ```sh
   docker run -p 5000:5000 -p 5173:5173 your-image-name
   ```
4. Finally run localhost:5173 in your device
### SQL queries for Table Creation
   Go to sqlqueries folder where you will find all the table creation code <br>
   Run these queries for creating table inside your database 
## Deployed Website Link
- [x] <b> Deployed Website URL </b>-  [https://flexmrepo.vercel.app/](https://flexmrepo-dwox3sll1-jjv1602.vercel.app/login)
## ER Diagram and Blueprint
### ER Diagram
<img src="/ProjectImages/ERDiagram.jpg" width="80%" height="80%">

### Blueprint
<img src="/ProjectImages/blueprint.jpg" width="80%" height="80%">
  
