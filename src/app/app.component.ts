import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MainSectionComponent } from './Layout/main-section/main-section.component';
import { Section2Component } from './Layout/section2/section2.component';
import { Section3Component } from './Layout/section3/section3.component';
import { Section4Component } from './Layout/section4/section4.component';
import { Section5Component } from './Layout/section5/section5.component';
import { Section6Component } from './Layout/section6/section6.component';
import { Section7Component } from './Layout/section7/section7.component';
import { FooterComponent } from './Layout/footer/footer.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [
      CommonModule,
      RouterOutlet,
      MainSectionComponent,
      Section2Component,
      Section3Component,
      Section4Component,
      Section5Component,
      Section6Component,
      Section7Component,
      FooterComponent
    ]
})
export class AppComponent {
  title = 'digital';
}
