import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'hero-es',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hero-es.component.html'
})
export class HeroEsComponent {

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}
  scrollTo(fragment: string) {
    // Navega al componente si es necesario
    this.router.navigate(['/']).then(() => {
      // Hacer scroll al ID específico
      this.viewportScroller.scrollToAnchor(fragment);
    });
  }
}
