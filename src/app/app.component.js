"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<nav class=\"navbar navbar-inverse navbar-toggleable-md navbar-light bg-faded\">\n       <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\" aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n         <span class=\"navbar-toggler-icon\"></span>\n       </button>\n       <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\n         <span class=\"navbar-brand\" href=\"#\"><img src=\"img/logo1.jpg\"/></span>\n         <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n           <li class=\"nav-item active\">\n             <a class=\"nav-link mx-4 px-2\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n           </li>\n           <li class=\"nav-item active\">\n           <li class=\"nav-item active\">\n             <a class=\"nav-link mx-4 px-2\" href=\"#\">Fares <span class=\"sr-only\">(current)</span></a>\n           </li>\n           <li class=\"nav-item active\">\n             <a class=\"nav-link mx-4 px-2\" href=\"#\">Drivers <span class=\"sr-only\">(current)</span></a>\n           </li>\n           <li class=\"nav-item active\">\n             <a class=\"nav-link mx-4 px-2\" href=\"#\">Business <span class=\"sr-only\">(current)</span></a>\n           </li>\n         </ul>\n       <button type=\"submit\" class=\"btn btn-app py-3\">Get the App</button>\n       </div>\n   </nav>\n   <!-- navbar end -->\n\n   <!-- carousel -->\n\n    <!-- jumbo -->\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map