# Pluck

## About the Project
A cross-platform mobile application built to help users increase productivity while achieving their personal financial goals.

## Table of Contents
* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Installation](#installation)
  * [Prerequisites](#prerequisites)
* [API](#api)
* [Contact](#contact)

## Getting Started

### Installation
1. Clone Repository
```sh
git clone https://github.com/davidhk21/Pluck.git
```

2. Install Packages
```sh
npm install
```

### Prerequisites
To Be Updated...

## API
Action                       | Method | URL
---------------------------- | ------ | --------------------
Add a Task                   | POST   | '/api/user/:id/tasks'
Get user's information       | GET    | '/api/user/:id'
Get user's incompleted tasks | GET    | '/api/user/:id/incompleted-tasks'
Get user's completed tasks   | GET    | '/api/user/:id/completed-tasks'
Get a random quote           | GET    | '/api/quotes'
Update a task to completed   | PUT    | '/api/user/:id/incompleted-tasks'
Delete an incomplete task    | DELETE | '/api/user/:id/incompleted-tasks'

## Contact
David Kim - davidhk21@gmail.com