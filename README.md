# SwiftSend Courier Management System

<img width="1125" height="978" alt="image" src="https://github.com/user-attachments/assets/5a119c74-a881-47e2-bc3d-cffb1be052ce" />

# SwiftSend Courier Management System

**Work Integrated Learning Project – XISD5319**  
**Team:** High Rollers  
**Members:**

* Refilwe Phore (ST10458818)
* Ntembeko Ndayi (ST10180342)

\---

## Project Overview

SwiftSend Couriers is a Johannesburg-based courier company that previously relied on phone calls, paper forms and spreadsheets. This project delivers a digital Courier Management System that allows:

* Customers to register, log in, book deliveries and track parcels
* Drivers to view assigned deliveries and update status (including Proof of Delivery)
* Administrators to manage customers, drivers, deliveries and generate reports

The system follows a three-tier architecture (Presentation, Application, Data layers) and incorporates DevOps practices (version control, continuous testing and deployment planning).

\---

## Features

### Public Website

* Home page
* About Us
* Services
* Contact

### Customer Portal

* Registration
* Login (with SSO option)
* Dashboard
* Book Delivery
* Track Parcel (with timeline)
* Notifications
* Logout

### Driver App

* Registration \& Login (with SSO)
* View assigned deliveries
* Update delivery status (Pending → Picked Up → In Transit → Delivered)
* Proof of Delivery
* Settings (profile, change password, SSO linking, notifications)
* Logout

### Admin Dashboard

* Login (with SSO)
* Overview statistics
* Customer Management
* Driver Management
* Delivery Management (assign drivers)
* Reports (Delivery Performance \& Driver Efficiency)
* Logout

\---

## How to Run the Prototype

1. Download `index.html`
2. Open the file in any modern web browser (Chrome, Edge or Firefox recommended)
3. Use the role buttons in the top-right corner:

   * **Public** – Marketing pages
   * **Customer** – Customer portal (starts at Login)
   * **Driver** – Driver interface (starts at Login)
   * **Admin** – Admin dashboard (starts at Login)

### Demo Login Credentials

|Role|Email|Password|
|-|-|-|
|Customer|customer@swiftsend.co.za|password123|
|Driver|sipho@swiftsend.co.za|driver123|
|Admin|admin@swiftsend.co.za|admin123|

You can also register a new customer — the name and email you enter will appear on the Customer Dashboard after login.

\---

## Project Structure

```
SwiftSend-Courier-Management-System/
├── index.html          # Full interactive HTML/CSS/JS prototype
└── README.md           # This file
```

\---

## Technology Stack

* **Frontend:** HTML, CSS, JavaScript 
* **Version Control:** GitHub
* **Target Platforms:**

  * Web (Customer \& Admin)
  * Mobile-ready interface (Driver)

\---

## Key Requirements Covered

* Online delivery booking
* Real-time tracking
* Automated notifications
* Driver status updates \& Proof of Delivery
* Admin management of customers, drivers and deliveries
* Performance and efficiency reports
* User registration \& login
* Single Sign-On (SSO) simulation
* Role-based access
* Settings management

\---

## Team Responsibilities

|Activity|Refilwe Phore|Ntembeko Ndayi|
|-|-|-|
|Project Planning|Lead|Assist|
|Requirements \& System Analysis|Lead|Assist|
|UI/UX, Sitemap \& Wireframes|Review|Lead|
|Database Design \& ERD|Lead|Assist|
|Website Development|Assist|Lead|
|Mobile App Development|Assist|Lead|
|Testing \& Documentation|Lead|Contribute|

\---

## Future Development

* Full backend (ASP.NET Core / API)
* Real database (SQL Server / Azure)
* Native Android application
* Live notifications (SMS / Email)
* Azure DevOps CI/CD pipeline
* Automated testing with GitHub Actions

\---

## Submission Notes

This prototype demonstrates the complete website sitemap, client needs, user flows and system design documented in the XIDS Updated Document and previous Requirement Analysis / System Design submissions.

**Course:** XISD5319 – Work Integrated Learning  
**Year:** 2026

