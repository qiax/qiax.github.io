---
title: https请求http资源警告
author: Qanx
top: false
cover: false
toc: true
mathjax: false
tags:
  - https
  - http资源
  - 网络协议
categories:
  - Other
  - Error
  - Warning
date: 2022-12-07 17:42:38
summary:
---

#### 错误信息

> Mixed Content: The page at 'https://xxx.cn/Net/NetCore/' was loaded over HTTPS, but requested an insecure image 'http://img.xxx.cn/image/image-20221206173538190.jpg'. This content should also be served over HTTPS.

#### 解决办法

在页面头部加入元信息：

```html
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
```



