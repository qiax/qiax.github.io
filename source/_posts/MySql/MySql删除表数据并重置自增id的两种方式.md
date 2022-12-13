---
title: MySql删除表数据的两种方式
author: Qanx
top: false
cover: false
toc: true
mathjax: false
tags:
  - MySql
  - delete
  - 重置自增 id
categories:
date: 2022-12-12 13:37:20
summary:
---
### delete

delete 不能重置自增 id，需要配合`alter`语句使用：

```sql
delete from `user`;
alter table `user` AUTO_INCREMENT=0; 
```

### truncate

```sql
truncate table `user`;
```

