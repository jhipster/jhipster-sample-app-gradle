import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FormatMediumDatetimePipe } from 'app/shared/date';
import SharedModule from 'app/shared/shared.module';
import { IOperation } from '../operation.model';

@Component({
  selector: 'jhi-operation-detail',
  templateUrl: './operation-detail.html',
  imports: [SharedModule, RouterLink, FormatMediumDatetimePipe],
})
export class OperationDetail {
  operation = input<IOperation | null>(null);

  previousState(): void {
    globalThis.history.back();
  }
}
