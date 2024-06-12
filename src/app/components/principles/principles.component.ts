import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'principles',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './principles.component.html'
})
export class PrinciplesComponent {
  dolarIcon = faDollarSign;
  items = [
    {
        icon: faDollarSign,
        src: "https://treact.owaiskhan.me/static/media/shield-icon.daefe14b320b14fbd9cbd18908ac93ec.svg",
        title: "Affordable",
        description: "We promise to offer you the best rate we can - at par with the industry standard."
    },
    {
        src: "https://treact.owaiskhan.me/static/media/support-icon.f9253ffa8cb6ffde5bbaa05eb5136375.svg",
        title: "Professionalism",
        description: "We assure you that our templates are designed and created by professional designers."
    },
];
}
