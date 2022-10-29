강의 메모

# React

## what's react?

A javascript library for building user interfaces

## what's user interface

Renders UI and responds to(=reacts to) events

## React

2013 may -?ㅽ뵂?뚯뒪
2015 may -react native
2019 feb -?⑥닔??而댄룷?뚰듃(hooks) v16.8
2022 mar -ssr+ v18

## React 醫낅쪟

react
react-native
react+electron

spa : single page application
csr : client side rendering => js,react_lib ?대씪?댁뼵?몄륫?먯꽌 ?뚮뜑留?
ssr : server side rendering => Next.js

ssg : static site generation => Gatsby : react + graphQL 湲곕컲 ?뺤쟻 HTML ?앹꽦湲?

frame-work : 萸붽? 留뚮뱾???꾪빐 媛뽰떠吏?紐 ⑤뱺寃? ?뺥빐吏??(怨 ④꺽) ?ㅼ씠 媛뽰떠吏?

- ?⑥젏 : ?ъ슜?먭? ?좏깮?좎닔 ?놁쓬, 紐 ⑤뱺嫄?怨듬??댁빞?섎뒗寃?
  library : ?뺥빐吏  吏  ?딆븯吏  留? ui 瑜?留뚮뱾???덇쾶 ?꾩?二쇰뒗 =react
- ?μ젏 : ?먯쑉??

## components

a highly cohesive building block for UIs
loosely coupled with other components.

## ?대뼡 ?⑥쐞濡?而댄룷?뚰듃瑜??섎닠???섎굹?

?ъ궗?⑹꽦 -DRY : dont't repeat yourself
?⑥씪 梨낆엫 - SR : single Responsibility : ?덈Т 留롮? 湲곕뒫???덈떎硫??섎늻?붽쾶 醫뗫떎

## react virtual dom

Virtual DOM Tree(蹂  寃쎈맂) **vs** previous tree(?댁쟾) => ?낅뜲?댄듃 DOM Tree

its still fast = 60fps ?뺣룄???섏뼱???ъ슜?먭? ?먮겮湲곗뿉 遺덊렪?⑥씠 ?녿떎.

## React ?숈옉?먮━

?곗씠?곕? State(?대??곹깭) Props(?몃?濡?遺 ???꾨떖?섎뒗 ?곹깭) ?섑??대뒗 render 媛  ?덈떎.
?곹깭媛  蹂  寃쎈맆?뚮쭏??re-render ?쒕떎.

## ?대옒??而댄룷?뚰듃???⑥젏??

?대옒?ㅻ뒗 ?대젮?? this 諛붿씤???댁뒋, 濡쒖쭅?ㅼ쓣 ?ъ궗?⑺븯湲??대젮?(?곸냽,?쇱씠?꾩궗?댄겢)

reactHooks
濡쒖쭅?ㅼ쓣 ?ъ궗?⑺븯湲곗쐞???⑥닔??.
hooks are functions that let you "hook into" React
state and lifecycle feature(?ъ궗?⑷??ν븳 濡쒖쭅?? from function component
=> hooks? (=?⑥닔?? 媛믪쓽 ?ъ궗?⑹씠 ?꾨땲??"濡쒖쭅???ъ궗?????꾪븳寃껋씠??

## tool

vscode
iterm2 or cmder
node
git

## yarn ?ㅼ튂

node v16.10 >= ?대㈃ corepack enable
node v16.10 < ?대㈃ npm i -g corepack

node : javascript runtime environment (framework)
that executes JavaScript code outside a web browser "javascript everywhere"

npm : package manager
publish and share course code of Node.js packages
simplify installation, updating, and uninstallation of package.

npx : bundled with npm.. tool for executing package (?쇱씠釉뚮윭由 щ? ?ㅽ뻾?대낵???덉쓬)

yarn : by facebook
-npm 瑜?蹂댁셿?섍쾶 ?섏??? 蹂묐젹?곸쑝濡??ㅼ튂 ?섎?濡?鍮좊Ⅴ?? 蹂댁븞???덉쟾?섎떎??
-faster, consistent, and secure

git --version
node -v
npm -v
yarn -v

## 遺곷쭏??

-reactjs.org : react 怨듭떇 臾몄꽌

## 以묒슂 tool

- Babel : javascript transcompiler
  횩convert ECMAScript 2015+ --> older version
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

## [eslint] plugin error ?섎㈃ (=app?뚯씪 ??text 瑜??섏젙?덈뒗???먮윭?섎㈃)

yarn add -D eslint-config-react-app

yarn start

猷 ⑦듃??.yarnrc.yml ?앹꽦
.yarnrc.yml ??
packageExtensions :
react-scripts@_:
peerDependecies :
eslint-config-react-app: "_"

yarn cache clean

yarn install

yarn start

## react custom snippet ?묒꽦 => >snippet 留뚮뱾怨??묒꽦

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
    "body": [
      "import styles from './$TM_FILENAME_BASE.module.css'"
    ],
    "description": "Import PostCSS"
  },
  "ClassName": {
    "prefix": "cn",
    "body": ["className={styles.$1}"],
    "description": "Adding className"
  }
}
```
