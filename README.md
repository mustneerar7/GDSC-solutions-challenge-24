# Instructions for developers
This is an expo development build project. A project which allows devs to access native projects without relying on expo managed application allowing deeper control over the native code.

### Requirments
`JAVA JDK 17` must be installed for android builds as with `React Native 0.73`, the minimum version of Java required has been updated to Java 17, which can be downloaded from [here](https://aka.ms/download-jdk/microsoft-jdk-17.0.10-windows-x64.zip).

An emulator or physical device connected to the system. Expo app is not required for this project.

### To Start the project
```
npm / yarn install
npx expo prebuild
npx expo run:android / run:ios
```

**Note**: You need to run `npx expo prebuild` before running the project for the first time or after adding a new package to the project. Other than that it can be skipped.