import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { ILabel } from '../label.model';

@Component({
  selector: 'jhi-label-detail',
  templateUrl: './label-detail.html',
  imports: [SharedModule, RouterLink],
})
export class LabelDetail {
  label = input<ILabel | null>(null);

  previousState(): void {
    globalThis.history.back();
  }
}
