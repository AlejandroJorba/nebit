import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faCogs, faDollarSign, faEye, faLightbulb, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'principles-es',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './principles-es.component.html'
})
export class PrinciplesEsComponent {
  items = [
    {
      icon: faLightbulb,
      title: "Creatividad",
      description: "Desarrollamos soluciones únicas e innovadoras que transforman tus retos en oportunidades."
    },
    {
      icon: faEye,
      title: "Transparencia",
      description: "Nos guiamos por la claridad y honestidad en todos nuestros procesos."
    },
    {
      icon: faCogs,
      title: "Eficiencia",
      description: "Maximizamos la productividad para ofrecerte los mejores resultados en el menor tiempo posible."
    },
    {
      icon: faCheckCircle,
      title: "Fiabilidad",
      description: "Proveemos soluciones robustas y confiables para garantizar un alto rendimiento."
    },
  ];

}
