import {DefaultDataService, HttpUrlGenerator, Logger, QueryParams} from '@ngrx/data';
import {Samochod} from '../Samochod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export class SamochodDataService extends DefaultDataService<Samochod> {

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator, log: Logger) {
    super('Samochod', http, httpUrlGenerator);
    log.log('Created custom Samochod EntityDataService');
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
