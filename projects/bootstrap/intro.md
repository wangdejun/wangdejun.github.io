sudo npm install -g local-web-server

cd 到index.html文件夹中
ws




* 调整二级菜单全尺寸fixed显示
```
.navbar-nav > li > .dropdown-menu{
}
```
* 通栏subcategory open
```
.open > .dropdown-menu{
    display: block;
    position: fixed;
    top: 52px;
    width: 100%;
}
```

* 调整为mobile样式之后，对导航栏的样式调整
```
@media (max-width: 767px) {
  .navbar-nav .open .dropdown-menu {
    ；
}
```