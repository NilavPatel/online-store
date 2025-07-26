# Online Store

## Technologoies
- Angular
- Module Federation

## Commands
1. Create angular application
```
ng new online-store --create-application=false
cd online-store
```
2. Add module federation package
```
npm install @angular-architects/module-federation --save-dev
```
3. Create portal application as Host
```
ng generate application portal --routing --style=scss
ng add @angular-architects/module-federation --project portal --type host --port 4400
```
4. Create user application as Remote
```
ng generate application user --routing --style=scss
ng add @angular-architects/module-federation --project user --type remote --port 4401
```
5. Create products application as Remote
```
ng generate application products --routing --style=scss
ng add @angular-architects/module-federation --project products --type remote --port 4402
```
6. Create cart application as Remote
```
ng generate application cart --routing --style=scss
ng add @angular-architects/module-federation --project cart --type remote --port 4403
```
7. Create cart application as Remote
```
ng generate application cart-shared --routing --style=scss
ng add @angular-architects/module-federation --project cart-shared --type remote --port 4404
```
8. Create shared library
```
ng generate library mod-fed-helper  
Note: Build mod-fed-helper library first and then build remaining projects.
```

## How to share authentication data between Host-Remote and Remote-Remote?
```
1. There is a AuthService interface defined in `mod-fed-helper` library.   
Which is implemented in `portal` application using `AUTH_SERVICE_TOKEN` dependecy injection token.  
Here we have added `mod-fed-helper` library as singleton in host application webpack config.  
And now in other remote applciation we can use same instance of AuthService via token.  
```
```
2. There is a another cart-shared project created.
Which exposes cart-shared module which contains service for cartStore.
Check prodcut and cart applications to know how to create object of cartStore in another remote app.  
```

## Enterprise Application Structure
```
In a big solution of entrprise level application, do not use monorepo.  
1. Create separate repo for mod-fed-helper library and deploy it as npm package.  
2. Create separate repos for all projects like portal (Host), User (Remote), Product (Remote), Cart (Remote).
3. Add test-shell as a project in all other Remote project which will work as a Host application, where you can implement AuthService separately as a mock which will be helpful for local development.  
```

## How to do CSS isolation applications?
```
1. Add `ViewEncapsulation.ShadowDom` in root component of all applications
2. You can use CSS variables defined in Host application in global style as they are shared in shadowdom.
```

![login](https://github.com/NilavPatel/online-store/blob/master/docs/login.JPG?raw=true)
![products](https://github.com/NilavPatel/online-store/blob/master/docs/products.JPG?raw=true)
![product_details](https://github.com/NilavPatel/online-store/blob/master/docs/product_details.JPG?raw=true)
![cart](https://github.com/NilavPatel/online-store/blob/master/docs/cart.JPG?raw=true)
