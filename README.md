# This is a React App built to demonstrate how to use LaunchDarkly (LD)'s Feature Management
1. After installing a react framework with NPM, create a new React App and change into the file with 'npx create-react-app hello-react --template typescript && cd hello-react'

2. Install the LD React client SDK in your app with 'npm install --save launchdarkly-react-client-sdk@3.3.2'

3. Open the application in an IDE of your choice and initialize the React Web SDK. For this web app we used the asynchronous function which initializes the React Web SDK and returns a Context.Provider, which is a React component that can be placed in index.tsx to render and imported into our app.tsx to use the useFlags() function. This repo already has these placed in index.tsx and app.tsx but the initial code blocks can be copy and pasted from the link below

NOTE: To render your app only after SDK initialization is complete, use await with asyncWithLDProvider. To render your app first, and then initialize the SDK and process flag updates, use withLDProvider. (LaunchDarkly Docs (https://docs.launchdarkly.com/sdk/client-side/react/react-web))

5. Be sure to replace the clientSideId in index.tsx with your own that can be found here https://app.launchdarkly.com/settings/projects. The React SDK uses the "ClientSideId"-- not the "SDK key" or the "Mobile key". This is required for the app to connect to your project in LD. For any feature flag that you will be using in React code, you must also check the "Make this flag available to client-side SDKs" box on that flag's Settings page (We'll touch on this again when recreating the flags). (LaunchDarkly Github (https://github.com/launchdarkly/react-client-sdk/blob/main/README.md))

6. Recreate the Flags in your LD Portal. There are three flags in this app.
    Button Arrangement - This will toggle the arrangement of the button elements into a row or a column
    Button Text - This will toggle the text within each of the button elements
    Sample feature - This will toggle the banner color, the text of the company in the welcome phrase, and 
6a. In the top right of your LD Portal, select create flag. Enter a name and a unique key that will be used to call the flag (the key is permanent, so be sure it is in a usable format). Enter a quick description describing the use of the flag. Choose the custom flag option in the Configuration section. The options are:
    Custom: A flag that you can configure exactly how you wish.
    Release: A temporary flag that initially serves false to all targets, then progressively rolls out to 100%.
    Kill switch: A permanent flag that enables or disables non-core functionality.
    Experiment: A flag that you can use to test a hypothesis and improve on your findings.
    Migration: A temporary flag used to migrate data or systems while keeping your application available.
    (LaunchDarkly Docs (https://docs.launchdarkly.com/home/flags/new))
Select Custom Flag and select Boolean Flag type. Below is a quick description of all of your options
    Boolean: optionally update the Name of the true and false variations.
    String: enter a Value for each variation, and optionally update the Name of each variation. To add more variations, click +Add variation.
    Number: enter a Value for each variation, and optionally update the Name of each variation. To add more variations, click +Add variation.
    JSON: enter a Value for each variation, and optionally update the Name of each variation. To add more variations, click +Add variation.
    (LaunchDarkly Docs (https://docs.launchdarkly.com/home/flags/new))
6b. For the Button Arrangement Flag, set the true value to "Row" and the false value to "Column". These are the respective values for the ternary that the app will read to render the arrangement of the buttons. Click Create Flag. Repeat step 6a to create next flag

6c. For the Button Text Flag, set the true value to "Button X" and the false value to "Phrase". These are the respective values for the ternary that the app will read to render the text of the buttons. Click Create Flag. Repeat step 6a to create next flag

6d. For the Sample Feature Flag, set the true value to "Tim Hortons" and the false value to "Dunkin". These are the respective values for the ternary that the app will read to render the banner color, company name, and logo. Click Create Flag. You have now created all of the flags for this application.

7(Optional). Create a segment for dev users and target the segment in one of your flags with a rule. Segments let you target groups of contexts individually or by attribute. Contexts are people, services, machines, or other resources that encounter feature flags in your product (LaunchDarkly Docs (https://docs.launchdarkly.com/home/flags/segments)). This is one way to implement rules which alternate the flag behavior for whatever segment you have targeted.

7a. Click Create Segment in the top right. Name your segment for what context(s) you want to associate. Click Create. Add targets to the segment. These can be as specific towards one user context or to a specific group (e.g. all users from a certain region) to display a specific flag behavior towards that target. For this app, add your user context as a target.

7b. Click into one of your previously created flags. Create an additional rule that will target the segment you've just created. Associate it to the true or false value. Once the change is saved, you should see the flag toggle will no longer alter the associated elements in your app. The context is now being targeted by the rule to present a specific mode of the flag.

8. With the flags created, when user initializes the app with 'npm start'. They should be able to toggle any of the features within the app in real time.