---
title: JQuery中0和空字符串比较问题
author: Qanx
top: false
cover: false
toc: true
mathjax: false
tags:
  - JQuery
  - 比较
categories:
  - JavaScript
  - JQuery
description: 在JQuery中空字符串和数字0比较的问题
date: 2022-11-22 13:56:29
img:
coverImg:
password:
summary:
---

### 比较
```js
console.log(0 == '');  // true
console.log('0' == '');  // false
console.log(0 === '');  // false
```
有疑问的是第一条比较。直接把数字和字符串比较，因为用的是`==`所以这里涉及到一个转换，即把字符串`''`转换为数字：
```js
console.log(Number('')); // 数值 0
```
所以这里`0 == ''`相当于`0 == Number('')`，先有一个转换，然后用转换后的结果进行比较，当然返回的是 true 了。