import { Injectable } from '@angular/core';
import { Coffee } from '../models/Coffee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  constructor(protected httpClient: HttpClient) {}

  async getNewCoffee(): Promise<Coffee> {
    const endpoint = 'https://random-data-api.com/api/coffee/random_coffee';

    return await this.httpClient
      .get<Coffee>(endpoint)
      .toPromise()
      .then(coffee => coffee ?? <Coffee>{});
  }
}
