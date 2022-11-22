---
title: 跨域快速验证
author: Qanx
top: false
cover: false
toc: true
mathjax: false
date: 2022-11-22 13:56:29
img:
coverImg:
password:
summary:
tags: [跨域, Cors]
categories: [js,XMLHttpRequest]
description: '在前后端分离的项目中, 都需要配置跨域相关设置, 那么怎么才能快速的检验跨域配置是否生效？'
---

### 跨域快速验证方案
```js
var xhr = new XMLHttpRequest();
xhr.open('POST', 'XXX/api/UserCenter/Login');  // 请求的地址
xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");  // 设置请求类型
xhr.send(JSON.stringify({email: "admin",userPwd: "123456"}));
xhr.onload = function(e) {
var xhr = e.target;
	console.log(xhr.responseText);
}
```