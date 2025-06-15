import { Injectable, resource } from '@angular/core';
import { apiUrl } from '../../app.config';
import { Product } from '../../domain/product';

@Injectable({ providedIn: 'root' })
export class ProductsApi {
  // NOTE: https://angular.jp/guide/signals/resource
  productsResource = resource<Product[], undefined>({
    loader: async ({ abortSignal }) => {
      const response = await fetch(`${apiUrl}/products`, { signal: abortSignal });
      return response.json();
    },
  });
}
