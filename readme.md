# Angular Programming
1. Create a Project using Angular CLI
    - Command Line Tool to
        - Create Angular Project
            - Commands for Adding
                - Component
                - Services
                - Directives
                - Pipes
        - Build Project
        - Test Project
        - Create Production Build
2. Install Angular CLI using Node Package Manager (npm) from Command Prompt
    - npm install -g @angular/cli, on windows
    - sudo npm install -g @angular/cli on Linux and MacOS
    - Angular CLI Provides 'ng' command Line tool
        - ng new <ANGULAR-PROJECT-NAME>
        - ng serve to run the project in Node Environment for developer and test and serve Build JS libraries to Browser 
            - ng serve --prod, to run the project in Node Environment for production and serve Build JS libraries to Browser     
        - ng test
            - Execute Test Cases         

# Angular Project Structure
1. package.json
    - Each JS Front-App is package and this is deployed or distributed as Package
    - This package must contains package.json file 
        - created using 'npm init -y' command 
    - Sections of pcakegs.json
        - 'name', name of the package used during deployment or districution
        - 'versoin', the version of package when distributed using respository
            - git
            - https://www.npmjs.com
        - devDependencies
            - List of dependencies used by the package while developing and/or testing the package   
                - all dev dependant packages will be installed using following command
                    - npm install --save-dev <PACKAGE-NAME>  
        - dependencies
            - List of all dependencies needed for production and execution of the package
                - all dependencies will be isnatlled using following command
                    - npm install --save <PACKAGE-NAME>       
        - scripts
            - defines command for package operations
                - excution
                    - start, npm run start command
                - build
                    - build, npm run build
                - test                    
                    - test, npm run test         
2. tsconfig.json
    - tsconfig.app.json
      - Extends tsconfig.json for Angular Application Compilation for Angular Classes e.g. Modules, Components, Directives, Services and Pipes 
    - tsconfig.spec.json
    - File that manages TypeScript Code COmpilation into JavaScript
      - Angular TS Setings
        - "strict": true,
          - Each variable must be declared
          - "noImplicitReturns": true, 
            - If method returns value then the return-type must be defined in method declaration
          -  "noFallthroughCasesInSwitch": true,
            - The switch..case must use 'default'
          - "experimentalDecorators": true,   
            - The 'Angular Decorator(?)' must be compiled and executed first befor executing the TypeScript code that is compiled into JavaScript  
          - "moduleResolution": "node",
            - Implicitely perform file-path look-up using Node.js 'path' module
3. karma.config.js
  - Karma Engine for Testing
4. tslint.json
  - TyepScript Langugae Quality Settings
5. angular.json
  - Like Web.Config file of AS.NET  /ASP.NET MVC
6. src folder
    - app folder
        - app.module.ts
        - app-routing.module.ts
    - main.ts
    - polyfills.ts
    - test.ts   

# Understanding Angular Packages
1. @angular/compiler
    - Provides compilation for Angular app for Build and Execution
        - Development Build
            - Just-In-Time (JIT) Build (Default upto Angular 9)
                - The JavaScrtipt code will be loaded in browser and the code ill be compiled and executed based on demand e.g. CLick the button and execute a function  
        - Deployment aka Production build (AOT is default true from Angular 9+)
            - Ahead-of-Time Compiler (AOT)
                - Code is compiled on Server (ng serv --prod) and compiled minidied code is loaded in browser       
            - AOT + Ivy (Angular 10+)
                - Compilation and Minification of HTML code into JavaScript object and upto 80% compression for the build code
                    - ng serve --prod
2. @angular/common
    - Provide the facility of Angular standard Module loading and the Angular Application Rendering in the browser
        - Offers 'CommonModule'
            - Manages loading of ThirdParty Angular Modules into the main Angular Application
    - @angular/common/http
        - Provides 'HttpClientModule' that provides an Infrastructure for all HTTP Communications from Angular Application          
3. @angular/platform-browser-dynamic
    - Provides 'platformBrowserDynamic()' method to bootstarp (aka load) angular app in browser for the fisrt time                          
4. @angular/platform-browser
    - Provides 'BrowserModule' that mamanages the rendering of Angular UI in browser once app is loaded in browser    
        - 'Only One Instance' of BrowserModule is possible per Angular App
5. @angular/core
    - The most impoprtant module that contains most of the  standard important Angular Classes     
    - Classes for
        - CReating  Angular Module, NgModule
        - Component, Component
        - Serveice, Injectable
        - Directive, Directive
        - Pipe,  Pipe
        - Commucation Across COmponents wity Parent Child Relationship 
            - Input and Output  
        - Parent Component contains multipe Children
            - ViewChild and ViewChildren
        - Custom Directive Rendering
            - Renderer2 and ElementRef
        - Custom Events
            - EventEmitter<T>
        - Linking a method with Event
            - HostListener             
6. @angular/forms
    - Working with HTML Forms as Angular Forms
        - FormsModule
            - Two-Way Binding
        - ReactiveFormsModule
            - Line-of-Business Forms with Model Binding like ASP.NET MVC Strongly-Type View    
7. @angular/router
    - Used for Angular Routing for Single-Page-Application (SPA)
    - RouterModule class
8. @angular/elements
    - Distributing Angular Component as 'Custom HTML element' to third party JavaScript Apps for Micro-FrontEnd Apps                

# Angular Dependencies

1. rxjs
    - Provides 'Observable' class for State Management for HTTP Responses
2. tslib
    - Manages the TypeScript Transpilation (ES 6) to Browser Compatible JavaScript, ES 6 to ES 5 (Default)
    - Internally uses tsconfoig.json
3. zone.js
    - Manages the Code Execution and DOM Errors in Browser during Angular APp execution in browser       

# Programming with Angular
1. Install Boostrtap Framework as 'dependency' for runtine
  - npm install --save bootstrap
    - Run the command from the command prompt from Angular Application path
