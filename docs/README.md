# DailyPlanner

## Minimum Viable Product

DailyPlanner is a full-stack web application built on Ruby on Rails and React.js/Redux. 
This app will satisfy the following minimum criteria with adequate CSS styling, 
smooth/bug-free navigation, and seed data:

>Minimum Features:
- [ ] Hosting on Heroku
- [ ] Sign Up / Sign In / Sign Out / Demo
- [ ] Google/Facebook login integration
- [ ] Production README
- [ ] Journal Entry CRUD
- [ ] To-do item CRUD
- [ ] Search

>Bonus Features
- [ ] Active Sync
- [ ] Tags for Journal Entries

## Design Docs
- [View Wireframes][wireframes]
- [React Components][components]
- [API endpoints][api-endpoints]
- [DB schema][schema]
- [Sample State][sample-state]

[wireframes]: ./wireframes
[components]: ./component-hierarchy.md
[sample-state]: ./sample-state.md
[api-endpoints]: ./api-endpoints.md
[schema]: ./schema.md

## Implementation Timeline (10 days)

### Phase 1: Backend setup, Front End Authentication (Google/Facebook login Integration), Splash Page, Heroku Deployment (2 days)
Objective: Functioning rails project with front-end auth, and heroku deployment

>Components:
  - SessionContainer
    * SessionForm
  - Splash
    * Carousel/Images
    * Features/Testimonials
  - Navbar
    * Site Navigation/Sessiom Form Links

### Phase 2: To-do/Journal Model, API, AWS Hosting, and Basic User Show Page (2 days)
Objective: To-dos and Journal Entries can be created, read, edited, and destroyed through the API and hosted via AWS S3

>Components:
  - UserContainer
  - User

### Phase 3: Search + Journal Entry Editor (1 days)
Objective: Journal Entries or to-dos can be searched for via titles or date assigned

>Components:
  - Navbar
    * Search

### Phase 4: User Show Pages (3 days)
Objective: Users have a show page with a to-do index listing, a calendar navigation component, and journal entry section

>Components:
  - UserContainer
  - User
    * Calendar Navigation
    * TodoIndex
    * JournalEntryContainer
      - JournalEntry

### Phase 5: Cleanup, Styles, About, Credits (2 days)
Objective: Add about and credits pages for general additional info and clean up code/styling

>Components:
  - Splash
    * FooterContainer
    * Footer
    * About
    * Credits
