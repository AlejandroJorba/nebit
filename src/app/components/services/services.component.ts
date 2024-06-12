import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html'
})

export class ServicesComponent {
 items = [
    {
        src: "https://treact.owaiskhan.me/static/media/shield-icon.daefe14b320b14fbd9cbd18908ac93ec.svg",
        title: "Secure",
        description: "We strictly only deal with vendors that provide top notch security."
    },
    {
        src: "https://treact.owaiskhan.me/static/media/support-icon.f9253ffa8cb6ffde5bbaa05eb5136375.svg",
        title: "24/7 Support",
        description: "Our systems are designed to be highly reliable and efficient."
    },
    {
        src: "https://treact.owaiskhan.me/static/media/customize-icon.367468c90fd796009b97fbfba67b2c6a.svg",
        title: "Customizable",
        description: "Experience lightning-fast speed with our services."
    },
    {
      src: "https://treact.owaiskhan.me/static/media/reliable-icon.1367510a8f0a1bec76dc425d25f92f43.svg",
      title: "Reliable",
      description: "We strictly only deal with vendors that provide top notch security."
  },
  {
      src: "https://treact.owaiskhan.me/static/media/fast-icon.dbb971a73d4805d2fc3bcdacdb55beba.svg",
      title: "Fast",
      description: "Our systems are designed to be highly reliable and efficient."
  },
  {
      src: "https://treact.owaiskhan.me/static/media/simple-icon.673b7e1750b2a4ef32907fc164828d00.svg",
      title: "Easy",
      description: "Experience lightning-fast speed with our services."
  }
];

}
