# 경일대 모바일 개발플랫폼(Morpheus MADP) 기반의  APP 개발 TEAM-PROJECT ( LAMAH )

## 최종 수정 일자 - 2022-10-31 
## 수정자 - 우윤하

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
#### Design tool - `PhotoShop, Illustrator, XD`
#### Platform - `Android App`
#### Language - `HTML,CSS,JavaScript`
#### Database - `MySQL`
#### Framework, library - `Morpheus, React, Redux, nodeJs, Express`
#### Team Colloboration tool - `Slack, discord, mindmeister`

<hr/>
<hr/>

# 세팅 방법 ( 개발 진행 전 세팅하세요 )
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

    github에 연결되어 있는 모든 branch를 보고자 하면
    ```
    git branch -a
    ```

    내 로컬에만 있는 branch를 볼려면
    ```
    git branch
    ```

    + ### 2_1. git checkout (중요!!! 깃 체크아웃해서 브랜치 변경 후 커밋 -> 푸쉬, main브랜치 절대 선택하지 마세요.)
    ```
    git checkout 이름
    ```
    + ### 2_2. 프로젝트 올리기 ( 개발 진행 후에 하세요 )
    
    1. 변경된 파일들 깃 스테이지에 올리기 (1단계)
    ```
    git add .
    ```
    2. 스테이지에 있는 파일들 저장 (2단계)
    ```
    git commit -m "커밋내용"
    ```
    `example`
    ```
    git commit -m "my first commit"
    ```

    3. 저장된 파일 깃허브 저장소에 업로드 (3단계)
    ```
    git push origin 이름(2_1에서 선택한 브랜치 이름)
    ```
    `example`
    ```
    git push origin yunha
    ```

    + ### 3. node modules 설치
    ```
    npm i
    ```
    + ### 4. 개발 시작

+ ## 추천 Extension
    + `Prettier`
    + `Material Icon Theme`
    + `Auto Rename Tag`

+ ## 문서구조
    + node_modules
    + public (정적 경로)
        + index.html (root div)
        + img (img 폴더 - public)
        + js (Morpheus 프레임워크 폴더)
    + src
        + components    (컴포넌트들 저장 경로)
            + Main (Main 페이지 컴포넌트)
                + MainContent (Main 페이지 콘텐츠별 저장 폴더 [둘러보기, 위시리스트, 홈, 알림, 프로필])
                    + MainHome.js ( 콘텐츠 홈 컴포넌트 )
                    + MainNotice.js ( 콘텐츠 알림 컴포넌트 )
                    + MainProfile.js ( 콘텐츠 프로필 컴포넌트 )
                    + MainSearch.js ( 콘텐츠 둘러보기 컴포넌트 )
                    + MainWishList.js ( 콘텐츠 위시리스트 컴포넌트 )
                + MainContent.js (Main 페이지 콘텐츠 영역 컴포넌트)
                + MainNav.js (Main 페이지 내비게이션 영역 컴포넌트)
                + MainNavItem.js (Main 페이지 내비게이션 아이템박스 컴포넌트)
            + Example.js (예시 파일)
        + css   (css, css.module 저장 경로)
            + Main (Main 페이지 스타일링 폴더)
                + MainContent.module.css (메인 콘텐츠 영역 스타일링 파일 - 모듈화)
                + MainNav.module.css (메인 내비게이션 영역 스타일링 파일 - 모듈화)
                + MainNavItem.module.css (메인 내비게이션 아이템박스 스타일링 파일 - 모듈화)
            + App.css (앱 전체 공통 스타일링)
        + img   (img 폴더 - src)
        + routes    (router 저장)
            + ExmapleRoute.js (라우터 예시 파일)
            + Main.js (Main 페이지 라우터)
        + store     (redux state 저장)
            + modules ( redux state 모듈화 폴더 )
                + exampleSlice.js ( redux 예시 파일 )
                + mainNavSlice.js ( mainNav 상태 변경 - 기본값 = search )
            + store.js ( redux module 저장소)
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
