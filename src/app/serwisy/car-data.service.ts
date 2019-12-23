import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DefaultDataService, DefaultDataServiceConfig, HttpUrlGenerator, Logger, QueryParams} from '@ngrx/data';

import {Observable} from 'rxjs';
import {Samochod} from '../Samochod';

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: "http://localhost:9090",
  entityHttpResourceUrls: {
    Samochod: {
      entityResourceUrl: 'http://localhost:9090' + '/pobierz_samochody',
      collectionResourceUrl: 'http://localhost:9090' + '/pobierz_samochody'
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class CarDataService extends DefaultDataService<Samochod> {


  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator, logger: Logger) {
    super('pobierz_samochody', http, httpUrlGenerator, defaultDataServiceConfig);
    this.httpUrlGenerator.collectionResource('', "pobierz_samochody");
    logger.log('Created custom Hero EntityDataService');
  }

  getAll(): Observable<Samochod[]> {
    return super.getAll();
  }

  getById(id: string | number): Observable<Samochod> {
    return super.getById(id);
  }

  getWithQuery(params: string | QueryParams): Observable<Samochod[]> {
    return super.getWithQuery(params);
  }
}
