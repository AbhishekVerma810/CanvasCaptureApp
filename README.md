Canvas Capture App

Description:
This app allows users to capture images using a canvas, manipulate them, and export them. Users can view all the images they've captured and exported across different pages in the app.

Prerequisites:
Before running the project, make sure you have the following installed:

- Node.js version 20
- Angular version 18
- Ionic version 8

You can check your current versions by running the following commands:

  node -v
  ng version
  ionic --version

If you don't have them installed, follow these steps:

1. Install Node.js from https://nodejs.org
2. Install Angular CLI globally by running: npm install -g @angular/cli
3. Install Ionic CLI globally by running: npm install -g @ionic/cli

Installation:
To get started with the project, follow these steps:

1. Clone the repository:
   git clone https://github.com/AbhishekVerma810/CanvasCaptureApp.git
   cd canvas-capture-app

2. Install the required dependencies:
   npm install

3. Install platform-specific dependencies:
   - For Android:
     ionic capacitor add android
   - For iOS (macOS only):
     ionic capacitor add ios

Running the App:

Development Mode:
To run the app in development mode (for testing and development purposes), use the following command:
  ionic serve

This will open the app in your browser for testing.

Android:
To build and run the app on an Android emulator or connected device, run:
  ionic capacitor run android

iOS (macOS only):
To build and run the app on an iOS emulator or a connected device, run:
  ionic capacitor run ios

Build Commands:

Android:
To build the app for production:
  ionic build --prod
  ionic capacitor copy android
  ionic capacitor open android

iOS:
To build the app for production:
  ionic build --prod
  ionic capacitor copy ios
  ionic capacitor open ios

Additional Notes:
- Make sure you have Android Studio and Xcode installed for Android and iOS development respectively.
- For any issues or errors, check the logs in Android Studio or Xcode for more detailed debugging information.


