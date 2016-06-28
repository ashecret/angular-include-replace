# angular-include-replace (ng-include-replace)
Angular directive to replace original ng-include directive element 


 
Without angular-include-replace directive your code render as below-

    <div ng-include="'template2.html'" class="ng-scope">
      <h2>I'm grubby ng-include element</h2>
    </div> 
    

With angular-include-replace your code render as-

    <h1 class="ng-scope">I'm clean dictating ng-include</h1>



## Installation

    npm install angular-include-replace

or

    bower install angular-include-replace
Or download from github and add 'angular-include-replace.js' to your project.


## Usage

in angular

    angular.module('CoolApp', ['angular-include-replace']);

in html 

    <div ng-include="'template.html'" ng-include-replace></div>
    

## Example

http://plnkr.co/edit/2sacyBXVTnwGFLEKvczn?p=preview



