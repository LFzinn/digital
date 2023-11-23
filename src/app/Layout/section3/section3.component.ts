import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.css'
})
export class Section3Component {

  boxs = [
    { aparelho : 'TV BOX' },
    { aparelho : 'TV SMART' },
    { aparelho : 'TV ANDROID' },
    { aparelho : 'SMARTPHONE ANDROID'},
    { aparelho : 'SMARTPHONE iOS'},
    { aparelho : 'COMPUTADORES'},
    { aparelho : 'CHROMECAST'},
    { aparelho : 'XBOX ONE & PS4'},
    { aparelho : 'FIRE STICK'},

  ]

}
