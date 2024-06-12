import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { PrinciplesComponent } from './components/principles/principles.component';
import { HeroEsComponent } from './components/hero-es/hero-es.component';
import { FooterEsComponent } from './components/footer-es/footer-es.component';
import { ServicesEsComponent } from './components/services-es/services-es.component';
import { PrinciplesEsComponent } from './components/principles-es/principles-es.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeroComponent, FooterComponent, ServicesComponent, PrinciplesComponent, HeroEsComponent, FooterEsComponent, ServicesEsComponent, PrinciplesEsComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'nebit';
  language = 'spanish';
}
