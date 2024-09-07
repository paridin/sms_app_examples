# SMS Application Examples

This repository contains examples of how to integrate and use our SMS sending service in various programming languages and frameworks. These examples demonstrate the process of authentication, retrieving application information, and sending SMS messages using our API.

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Repository Structure](#repository-structure)
4. [Node.js Example](#nodejs-example)
5. [API Endpoints](#api-endpoints)
6. [Contributing](#contributing)
7. [Support](#support)

## Introduction

Our SMS sending service allows you to easily integrate SMS functionality into your applications. This repository provides working examples to help you get started quickly and understand the integration process.

## Prerequisites

Before you begin, ensure you have the following:

- An active account with our SMS service
- Your unique `CLIENT_ID` and `CLIENT_SECRET`
- The URL for our Identity Provider (IDP) and Hub API
- Node.js installed on your machine (for the Node.js example)

## Repository Structure

This repository is organized as follows:

```
sms_app_examples/
├── nodejs_example/
│   ├── .env.example
│   ├── package.json
│   ├── server.js
│   ├── public/
│   └── views/
├── [other_language_examples]/
└── README.md
```

Each subdirectory contains a complete example application for a specific programming language or framework.

## Node.js Example

To run the Node.js example:

1. Navigate to the `nodejs_example` directory:
   ```bash
   cd nodejs_example
   ```

2. Create a `.env` file based on the `.env.example` file:
   ```bash
   cp .env.example .env
   ```

3. Open the `.env` file and fill in your credentials:
   ```
   CLIENT_ID=your_client_id_here
   CLIENT_SECRET=your_client_secret_here
   IDP_ENDPOINT=https://our_idp/oauth/token
   HUB_ENDPOINT=your_assigned_secret
   ```

4. Install the required dependencies:
   ```bash
   npm install
   ```

5. Start the application:
   ```bash
   npm run start
   ```

6. Open your web browser and visit `http://localhost:3000`

You should now see a web interface where you can enter a phone number and message to send an SMS.

## API Endpoints

The examples in this repository interact with the following API endpoints:

1. Identity Provider (IDP) for authentication:
   - Endpoint: `https://IDP_ENDPOINT/oauth/token`
   - Method: POST
   - Purpose: Obtain an access token using the OAuth 2.0 client credentials flow

2. Hub API for retrieving application information:
   - Endpoint: `https://HUB_ENDPOINT/hub/my/apps`
   - Method: GET
   - Purpose: Retrieve the application ID associated with your account

3. SMS Sending API:
   - Endpoint: `https://HUB_ENDPOINT/hub/sms/transactional`
   - Method: POST
   - Purpose: Send an SMS message

Refer to our API documentation for more detailed information on these endpoints and their usage.
