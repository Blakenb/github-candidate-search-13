# Candidate Search App

The **Candidate Search App** is a React-based web application that allows users to search for GitHub users, view their profiles, and save them for future reference. The app is built with TypeScript, React Router, and Vite, and it leverages the GitHub API to fetch user data.

## Features

### 1. Candidate Search
- Users can search for GitHub profiles by entering a username in the search bar.
- Displays detailed information about the searched user, including:
  - Name
  - Username
  - Location
  - Email
  - Company
  - Bio
  - Profile link
  - Avatar image

### 2. Browse Candidates
- The app fetches a list of GitHub users and allows users to browse through them.
- Users can navigate between candidates using "Next" and "Save" buttons.

### 3. Save Candidates
- Users can save candidates to a local list stored in `localStorage`.
- Saved candidates are displayed on a separate page with detailed information.

### 4. Remove Saved Candidates
- Users can remove saved candidates from their list, which updates both the UI and `localStorage`.

### 5. Error Handling
- Displays a custom 404 error page when users navigate to an invalid route.

## Project Structure

The app is organized into the following directories:

- **`src/`**: Contains the main application code.
  - **`api/`**: API-related logic for fetching GitHub user data.
  - **`components/`**: Reusable components like the navigation bar.
  - **`interfaces/`**: TypeScript interfaces for defining data structures.
  - **`pages/`**: Page components for routing (e.g., Candidate Search, Saved Candidates, Error Page).
  - **`assets/`**: Static assets like images or icons.
- **`public/`**: Public assets served directly by Vite.
- **`environment/`**: Environment configuration files.

## Key Files

- **`src/pages/CandidateSearch.tsx`**: Implements the candidate search functionality.
- **`src/pages/SavedCandidates.tsx`**: Displays and manages the list of saved candidates.
- **`src/pages/ErrorPage.tsx`**: Custom 404 error page.
- **`src/components/Nav.tsx`**: Navigation bar for routing between pages.
- **`src/api/API.tsx`**: Handles API calls to GitHub.
- **`src/interfaces/Candidate.interface.tsx`**: Defines the `Candidate` interface for type safety.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For type safety and better developer experience.
- **React Router**: For client-side routing.
- **Vite**: For fast development and build tooling.
- **Bootstrap**: For styling and responsive design.
- **GitHub API**: For fetching user data.

## Installation

1. Clone the repository:

## How to reach me

blake@email.com
https://github.com/blakenb

Here is a link to my Portfolio
https://blakenb-portfolio.netlify.app/

https://github-candidate-search-13-2.onrender.com