# React

## what's react?

A javascript library for building user interfaces

## what's user interface

Renders UI and responds to(=reacts to) events

## React

2013 may -오픈소스
2015 may -react native
2019 feb -함수형 컴포넌트(hooks) v16.8
2022 mar -ssr+ v18

## React 종류

react
react-native
react+electron

spa : single page application
csr : client side rendering => js,react_lib 클라이언트측에서 렌더링
ssr : server side rendering => Next.js

ssg : static site generation => Gatsby : react + graphQL 기반 정적 HTML 생성기

frame-work : 뭔가 만들어 위해 갖춰진 모든것, 정해진 틀(골격) 들이 갖춰진

- 단점 : 사용자가 선택할수 없음, 모든걸 공부해야하는것
  library : 정해지지 않았지만, ui를 만들수 있게 도와주는 =react
- 장점 : 자율성

## components

a highly cohesive building block for UIs
loosely coupled with other components.

## 어떤 단위로 컴포넌트를 나눠야 하나?

재사용성 -DRY : dont't repeat yourself
단일 책임 - SR : single Responsibility : 너무 많은 기능이 있다면 나누는게 좋다

## react virtual dom

Virtual DOM Tree(변경된) **vs** previous tree(이전) => 업데이트 DOM Tree

its still fast = 60fps 정도는 되어야 사용자가 느끼기에 불편함이 없다.

## React 동작원리

데이터를 State(내부상태) Props(외부로 부터 전달되는 상태) 나타내는 render가 있다.
상태가 변경될때마다 re-render 된다.

## 클래스 컴포넌트의 단점들

클래스는 어려워, this 바인딩 이슈, 로직들을 재사용하기 어려움(상속,라이프사이클)

reactHooks
로직들을 재사용하기위해 함수다..
hooks are functions that let you "hook into" React
state and lifecycle feature(재사용가능한 로직들) from function component
=> hooks은 (=함수는) 값의 재사용이 아니라 "로직의 재사용"을 위한것이다.

## tool

vscode
iterm2 or cmder
node
git

## yarn 설치

node v16.10 >= 이면 corepack enable
node v16.10 < 이면 npm i -g corepack

node : javascript runtime environment (framework)
that executes JavaScript code outside a web browser "javascript everywhere"

npm : package manager
publish and share course code of Node.js packages
simplify installation, updating, and uninstallation of package.

npx : bundled with npm.. tool for executing package (라이브러리를 실행해볼수 있음)

yarn : by facebook
-npm를 보완하게 나와서, 병렬적으로 설치 하므로 빠르다. 보안에 안전하다??
-faster, consistent, and secure

git --version
node -v
npm -v
yarn -v

## 북마크

-reactjs.org : react 공식 문서

## 중요 tool

- Babel : javascript transcompiler
  ßconvert ECMAScript 2015+ --> older version
  ex) ts , jsx -> js
- Webpack : bunding the code, javascript module bundler
- Eslint : checking your code
- Jest : delightfull Javascript testing framework
- PostCSS : expandable CSS libraries
  tool for transforming CSS with JavaScript

## chrome extensions

react devloper tools

## vscode extendsion

Auto Import

## CSR(client-side-rendering)

## [eslint] plugin error 나면 (=app파일 내 text를 수정했는데 에러나면)

yarn add -D eslint-config-react-app

yarn start

루트에 .yarnrc.yml 생성
.yarnrc.yml 내
packageExtensions :
react-scripts@_:
peerDependecies :
eslint-config-react-app: "_"

yarn cache clean

yarn install

yarn start

## react custom snippet 작성 => >snippet 만들고 작성

```json
{
  "reactFunction": {
    "prefix": "rfc",
    "body": "import React from 'react';\n\nexport default function ${1:${TM_FILENAME_BASE}}() {\n\treturn (\n\t\t<div>\n\t\t\t\n\t\t</div>\n\t);\n}\n\n",
    "description": "Creates a React Function component"
  },
  "reactStatelessImplicitReturn": {
    "prefix": "rsi",
    "body": "import React from 'react';\n\nexport const ${1:${TM_FILENAME_BASE}} = (props) => (\n\t\t\t$0\n\t);",
    "description": "Creates a React Function component"
  },
  "Import Module CSS": {
    "prefix": "si",
    "body": ["import styles from './$TM_FILENAME_BASE.module.css'"],
    "description": "Import PostCSS"
  },
  "ClassName": {
    "prefix": "cn",
    "body": ["className={styles.$1}"],
    "description": "Adding className"
  }
}
```

#useEffect
: state를 변경이 되었을때나, http통신을 사용하거나 할때 사용할수 있다.
: return를 정의하여 destory될때 속성을 지정하고,
: dependency에 state를 등록하여 useEffect를 의 재호출이 결정된다.

#useState
:state : 내부적으로 상태를 가지고 DOM과 관련이 있을경우 정의하여 사용한다.

#list에서의 Key 속성 :
list 형태의 DOM 에서 key 속성을 통해, key 값이 변경된것만 업데이트 처리되므로
성능향상을 위해서 key 라는 속성을 써서 가져가야한다.

# React

데이터를 state(내부상태) props(외부로 부터 전달받는 상태) 나타내는 render가 있다.
상태가 변경될때마다 re-render된다.
