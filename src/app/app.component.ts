import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<nav class="navbar navbar-inverse navbar-toggleable-md navbar-light bg-faded">
       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
         <span class="navbar-brand" href="#"><img src="img/logo1.jpg"/></span>
         <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
           <li class="nav-item active">
             <a class="nav-link mx-4 px-2" href="#">Home <span class="sr-only">(current)</span></a>
           </li>
           <li class="nav-item active">
           <li class="nav-item active">
             <a class="nav-link mx-4 px-2" href="#">Fares <span class="sr-only">(current)</span></a>
           </li>
           <li class="nav-item active">
             <a class="nav-link mx-4 px-2" href="#">Drivers <span class="sr-only">(current)</span></a>
           </li>
           <li class="nav-item active">
             <a class="nav-link mx-4 px-2" href="#">Business <span class="sr-only">(current)</span></a>
           </li>
         </ul>
       <button type="submit" class="btn btn-app py-3">Get the App</button>
       </div>
   </nav>
   <!-- navbar end -->

   <!-- carousel -->

    <!-- jumbo -->
  `,
})
export class AppComponent  { name = 'Angular'; }
