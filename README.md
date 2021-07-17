# DyteCamScanner

A React-Native App to implement Document Scanning functionalities

<b>How to use:</b>
1. Download the files from repository.
2. Create an new Expo project --> "expo init DyteCamScanner", choose the "blank" option from "Managed Workflow"
3. Replace the automatically built files (such as "App.js", "app.json") in the recently created Expo project from the same named files from the respositoy.
4. Copy paste the "app" folder from the repository to the Expo project.
5. Now download "Expo Go" in your android device.
6. Open the location of the Expo project in Command Prompt/Terminal and then type "expo start", it will open a new tab in your browser called "Metro Bundler".
7. Now open your "Expo Go" app on your mobile device and scan the QR code from the tab. It will open the app and let you use it. [NOTE: Your Computer and Mobile Device must be on the same wireless network]
8. Currently the app lets you to take a pic and svaes it in a new folder called "Expo", and lets you access the gallery.
 
You can use the Above metioned steps or You can also just use the published version of the app:

1. Go to <a href="https://expo.io/@kumaraksh/dytecamscanner"> DyteCamScannerApp</a>.
2. Open "Expo Go" on your android device and scan the QR code here.

<b>Notes:</b>
1. The App woud request for some permissions, please give it the permissions for smooth opertions. 
2. If the Scanner or Gallery funtions are not working after giving permissions, then go back to home screen and enter the Scanner or Gallery again.
3. When you open the Gallery from the home page it will take you to another page with words "Gallery" written on them, press the "Gallery" text as it will then open the Gallery in your phone.



<b>Prerequisites:</b>
1. Node.js > 12.0.0
2. React
3. React Native
4. Expo
5. all the prerequisite libraries are mentioned in "package.json"->"dependencies"

<b>Future Work:</b>
Currently I am having dificulty in transfering data between screens (namely, transfering the image taken from "cameraScreen2" to "cropperScreen2"). I would work on it and try to resolve it. Also the app has only been tested upon "Android OS", due to not having access to any "iOS" device or "Xcode" on "MacOS", so I am not sure how it will operate on "iOS"


