import { inject, Injectable, linkedSignal } from '@angular/core';
import { ProductsApi } from '../../../infrastructures/api/products';

@Injectable()
export class TopStore {
  private readonly productsApi = inject(ProductsApi);
  state = linkedSignal(() => this.productsApi.productsResource);
}
