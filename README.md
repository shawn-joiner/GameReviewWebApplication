# 2023_F_Shawn

# Project Summary

A game review web application that will allow users to post reviews and view other user's reviews. As opposed to providing a single overall score for a game,
when writing a review is prompted for an overall text submission as well as a score in each of five categories including gameplay, presentation, engagement, difficulty, and replayability.

### Team Members
- Shawn Joiner    | Team Lead    | 495
- Michael Rosario | Sr Developer | 394
- Fabian Abarca   | Jr Developer | 294

### Tech Stack
- ReactJS
- Microsoft SQL Server
- .NET Core Web API (C#)

### Installations
  - NodeJs
  - SQL Server
  - SQL Server Management Stuido
  - Visual Studio and Visual Code
  - GitHub Desktop
    - Install GitHub Desktop and sign into your GitHub account.
    - Click on the current repository tab (top left under menu bar)
    - Select add, clone repository, and choose FranklinCSPracticum/2023_F_Shawn
   
### DB Setup
 - Run SSMS 
   - Click Connect -> database engine
   - For server name type: (localdb)\MSSQLLocalDB and click connect
   - Right-click Databases Folder and select New Database. Name it "TestDB" and then click ok.
   - Refresh
   - Right click TestDB and select new Query.
   - Paste the contents of GRDB Seed into window and run query
   - Press refresh and the tables we will need should be created


### Run Project
- Unless you changed directory options in GitHub desktop when cloning the project you should be able to find the project
  under ../Documents/GitHub/2023_F_Shawn. Double click GR.sln which should automatically open the solution in Visual Studio 2022.
- Select "Build" on the menu bar and then "Build Solution" in the drop down.
- Select "Debug" on the menu bar and then "Start Debugging" in the drop down.
- Open a command prompt and navigate to the file named "ui" in the project folder.
- type "npm install" and then "npm start"
