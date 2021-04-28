import {Inject, Injectable, InjectionToken} from '@angular/core';

const REST_URL = new InjectionToken<string>('rest.url');

@Injectable()
export class RESTService {
  public readonly URL: string;

  constructor(@Inject(REST_URL) url: string) {
    this.URL = url;
  }
}
