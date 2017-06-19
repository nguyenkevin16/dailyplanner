# Component Hierarchy

## Persistent Components

NavbarContainer
  - Navbar
    * Search
    * Site Navigation + Session Form Links

## Main Page Components

Splash
  - Carousel/Images
  - Features/Testimonials
  - FooterContainer
    - Footer
    - About
    - Credits

UserContainer
  - User
    * Calendar Navigation
    * TodoIndex
    * JournalEntryContainer
      - JournalEntry

## Modals

SessionContainer
  - SessionForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/"   | "Splash" |
| "/users/:userId" | "UserContainer" |
| "/about" | "About" |
| "/credits" | "Credits" |
