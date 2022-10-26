# 경일대 모바일 개발플랫폼(Morpheus MADP) 기반의  APP 개발 TEAM-PROJECT ( LAMAH )

`팀장` - 우윤하
`팀원` - 김민정, 손한솔, 우희진, 조대한

### 프로젝트 명 - `LAMAH`
### 주제 - `숙박예약 앱`
### 프로젝트 기간 - `2022-10-19(수요일) ~ 2022-11-22(화요일)`

#### 기획 - 
#### 개념 설계 - 
#### 프론트 - 
#### 백 - 
#### 데이터베이스 설계 - 

#### IDE - `VScode, Android Studio, Morpheus, Eclipse, sts4`
#### Design tool - `PhotoShop, Illustrator, XD, `
#### Platform - `Android App`
#### Language - `HTML,CSS,JavaScript,JAVA`
#### Framework - `Morpheus, React, Spring`

<hr/>
<hr/>

# 세팅 방법
+ ## 프로그램 설치
    + ### nodeJS 설치 
    [https://nodejs.org/ko/](https://nodejs.org/ko/)
    + ### git 설치
        + #### `WINDOW`
        [https://git-scm.com/download/win](https://git-scm.com/download/win)
        + #### `MAC`
        + 맥은 설치전 homebrew 설치[https://brew.sh/](https://brew.sh/)
        ```
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
        ```
        [https://git-scm.com/download/mac](https://git-scm.com/download/mac)
    + ### vscode 설치
    [https://code.visualstudio.com/](https://code.visualstudio.com/)
    + ### android Studio 설치 (필요시)
        + #### `WINDOW`
        [https://redirector.gvt1.com/edgedl/android/studio/install/2021.2.1.16/android-studio-2021.2.1.16-windows.exe](https://redirector.gvt1.com/edgedl/android/studio/install/2021.2.1.16/android-studio-2021.2.1.16-windows.exe)
        + #### `MAC INTEL`
        [https://redirector.gvt1.com/edgedl/android/studio/install/2021.2.1.16/android-studio-2021.2.1.16-mac.dmg](https://redirector.gvt1.com/edgedl/android/studio/install/2021.2.1.16/android-studio-2021.2.1.16-mac.dmg)
        + #### `MAC M1`
        [https://redirector.gvt1.com/edgedl/android/studio/install/2021.2.1.16/android-studio-2021.2.1.16-mac_arm.dmg](https://redirector.gvt1.com/edgedl/android/studio/install/2021.2.1.16/android-studio-2021.2.1.16-mac_arm.dmg)


+ ## Terminal에서
    + ### 1. git project 가져오기
    ```
    git clone https://github.com/Wuyuh-sun/kiu-team-project.git
    ```
    + ### 2. git branch 만들기
    #### 브랜치 명
    우윤하 - `yunha`
    김민정 - `minjeong`
    손한솔 - `hansol`
    우희진 - `heejin`
    조대한 - `daehan`

    ```
    git branch 이름
    ```
    + ### 3. node modules 설치
    ```
    npm i
    ```

+ ## 추천 Extension
    + `Prettier`
    + `Material Icon Theme`
    + `Auto Rename Tag`

+ ## 문서구조
    + node_modules
    + public (정적 경로)
        + index.html (root div)
    + src
        + components    (컴포넌트들 저장 경로)
        + css   (css, css.module 저장 경로)
        + img   (img 저장)
        + routes    (router 저장)
        + store     (redux state 저장)
        + App.js    (앱 - 가장 큰 박스)
        + index.js  (정적경로에 앱넣기)
    + .gitignore    (git에 제외할 파일, 폴더 지정)
    + package-lock.json
    + package.json  (프로젝트 패키지 저장)
    + README.md (프로젝트 설명 글)

+ ##

<hr/>
<hr/>

# create-react-app default README.md
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
