import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShieldAlt, faMobileAlt, faCogs, faRobot, faSyncAlt, faHeadset, faServer, faCode, faTools, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'services-es',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './services-es.component.html'
})
export class ServicesEsComponent {
  items = [
    {
      icon: faCode,
      title: "Desarrollo de Software",
      description: "Creamos soluciones personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio."
    },
    {
      icon: faNetworkWired,
      title: "Desarrollo de APIs",
      description: "Creamos APIs a medida que permiten la integración fluida entre distintas plataformas y servicios."
    },
    {
      icon: faMobileAlt,
      title: "Desarrollo Mobile",
      description: "Diseñamos y desarrollamos apps innovadoras para iOS y Android, enfocadas en la experiencia del usuario."
    },
    {
      icon: faSyncAlt,
      title: "Migración de Sistemas",
      description: "Facilitamos la migración segura y eficiente de tus sistemas a nuevas tecnologías, minimizando riesgos y garantizando la continuidad operativa."
    },
    {
      icon: faRobot,
      title: "Automatización",
      description: "Optimizamos los procesos internos de tu empresa, mejorando la eficiencia y reduciendo costos operativos."
    },
    {
      icon: faTools,
      title: "Soporte y Mantenimiento",
      description: "Ofrecemos soporte continuo y mantenimiento para asegurar que tus sistemas funcionen sin problemas a largo plazo."
    }
  ];

}
