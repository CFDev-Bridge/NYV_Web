import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceOffering } from '../../../core/models/site.models';

@Component({
  selector: 'app-service-card',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss',
})
export class ServiceCard {
  readonly service = input.required<ServiceOffering>();
  /** Cuando es verdadero muestra la descripción completa y los entregables. */
  readonly detailed = input(false);
}
