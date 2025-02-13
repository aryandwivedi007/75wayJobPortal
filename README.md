# Project Name

## Description
This Job Portal project provides JWT authentication for users and it has two roles "CANDIDATE" and "EMPLOYER". BOTH CANDIDATE and EMPLOYER uses common login signup functionality which furhter bifurcates their role based on roles as discussed above,
User with role "CANDIDATE" can apply to job which futher is streamlined by employer by resume screening, interviews and if candidate selected or not. Each status is notified to CANDIDATE by email as well as status is updated in db which can be visualized further with ui.This way a application is tracked seamlessly from form submission to hiring.
Design patterns are quite robust and can be extended furhter to incorporate furhter changes to meet the current requirements

<img src="/75waydatabasedocs.png" alt="Swagger Image" width="full" height="full"/>
## Prerequisites
- Docker
- Node.js23 (If you plan to run the project locally without Docker)

## Setup

### 1. Clone the repository:
```bash
git clone <your-repository-url>
cd <your-project-directory>
npm install
npm run dev

## If MYSQL8 is not installed locally use docker and run docker-compose.yml file
```bash
docker-compose up -d
npm i
npm run dev