T-Mobile Yeoman Generator for AngularJS
=========================
Generate AngularJS components quickly and plug them in with this generator. 

Why a generator?
----------------
  - Remove setup overhead
  - Push best practices and consistencies
  - Make life easy
  - Generate common code patterns
 
Why a custom generator?
-----------------------
Different projects have custom technology stacks. These technology stacks utilize these technologies to define a custom structure to the application that aligns well.

Installation
------------
The generator can be installed by doing the following command (within the generator-ng-twapp-angular folder):

    > npm install & npm link

Running npm install will install the dependencies for the generator application. Running npm link will connect the generator to the global npm dependencies.

Generators
----------


    > yo tmo-angular:app

#### Purpose: 
Setup the base application


#### Questions:
 - What would you like the application name to be? (Default: Parent folder name)
 - Would you like to include Bootstrap? (Default: Bootstrap 3.2..0)
 - What component would you like to use for routing? (angular-ui-router)
 - Which Angular sub-modules would you like to include?
 - What additional libraries would you like to include?
 - Would you like to include a global busy spinner?

#### Commands ran afterwards:
bower install & npm install
npm wiredep (bower dependency injection)


#### Next:
Run grunt serve (without force, please!)

    > yo tmo-angular:baseconfig
    
This is a generator utilized by the app generator to do some initial setup to the application.
    > yo tmo-angular:controller
    
#### Purpose:
Create a controller with a spec and possibly a view.

#### Questions:
 - What is the name of the new controller? (No default, appends Controller automatically)
 - Will this controller be shared? (Default: No)
 - (Shared) What is the name of the shared_module? (Type in name)
 - (Not shared) Which module should contain controller ___Controller?
 - Would you like to create a matching view? (Default: No)

#### Result:
 - A generated skeleton controller with the JSDoc header in the module’s controllers folder.
 - A generated spec in the module’s test folder.


    > yo tmo-angular:directive
    
#### Purpose:
Create a directive with a spec and possibly a view.

#### Questions:
 - What is the name of the new directive? (No default, appends “directive” to the file name)
 - Will this directive be shared? (Default: Yes)
 - (Shared) What is the name of the shared_module? (Type in name)
 - (Not shared) Which module should contain directive ___?
 - Would you like to generate the template in a separate file? (Default: Yes)
	 - This is asking if the template for the directive should be within the directive itself or in its own file.

#### Result:
 - A generated skeleton directive with the JSDoc header in the module’s directives folder.
 - An internal or external view for the directive.
 - A generated spec in the module’s test folder.


    > yo tmo-angular:factory
    > yo tmo-angular:provider
    > yo tmo-angular:service

#### Purpose:
Create a factory, service, or provider with a spec.

#### Questions:
 - What is the name of the new ___? (No default, appends type to end, except for providers)
 - Will this ___ be shared? (Default: No, except for providers)
 - (Shared) What is the name of the shared_module? (Type in name)
 - (Not shared) Which module should contain ___?

#### Result:
 - A generated skeleton service with the JSDoc header in the module’s services folder.
 - A generated spec in the module’s test folder.

    
    > yo tmo-angular:filter
    
#### Purpose:
Create a filter with a spec

#### Questions:
 - What is the name of the new filter? (No default, appends ‘filter’ to file name)
 - Will this filter be shared? (Default: Yes)
 - (Shared) What is the name of the shared_module? (Type in name)
 - (Not shared) Which module should contain ___?

#### Result:
 - A generated skeleton filter function with the JSDoc header in the module’s filters folder.
 - A generated spec in the module’s test folder.


    > yo tmo-angular:module
    
#### Purpose: 
Create a new module with a configuration and possibly a controller and view.

#### Questions:
 - What is the name of the new module? (No default, appends ‘module’ to the file name)
 - Would you also like to create a controller and view? (Default: Yes)
 - (Controller and View) What is the controller’s name? (Default: Module Name with ‘Controller’ appended)
 - (Controller and View) What is the view’s name? (Default: module name)
 - (Controller and View & ui router) What is the url for the state? (Default: module name)
 - (Controller and View) What is the route to the state/route configuration? (Default: app\scripts\route-config.js)

Result:
 - A module folder and module configuration.
 - Module added to app.js.

    
    > yo tmo-angular:route
    
#### Purpose:
Add a route or state to a configuration. Used by other generators as well to add routes or states.

#### Questions:
 - What is the state’s controller name? (Type in controller name)
 - What is the state’s view? (Type in full path)
 - What is the url for the state? (Type in url)
 - What is the path to the state configuration? (Default: app\scripts\route-config.js)

#### Result:
An added route to the specified route configuration.

#### Required:
A needle within the configuration of where to inject the new route/state.


    > yo tmo-angular:spec

#### Purpose: 
Add an unit test spec to the application unit test folder.

#### Questions:
 - What is the name of the new spec? (Type in name)
 - Will this spec be shared? (Default: No)
 - (Shared) What is the name of the shared_module? (Type in name)
 - (Not shared) Which module should contain ___?

#### Result:
 - A new test spec.


    > yo tmo-angular:view
    
#### Purpose:
Add a new view to the application.

#### Questions:
 - What is the name of the new view? (Type in name)
 - Will this view be shared? (Default: No)
 - (Shared) What is the name of the shared_module? (Type in name)
 - (Not shared) Which module should contain ___?

#### Result:
 - A new view with a namespace ID in the designated module.


    > yo tmo-angular:update
    
#### Purpose:
Create / update the .yo-rc file based on various settings of the application. This will be used mostly for adding custom-made modules to the Yeoman Generator configuration.
