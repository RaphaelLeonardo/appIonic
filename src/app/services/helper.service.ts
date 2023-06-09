import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  public getUrlParameter(urlParameterName: string): string | null {
    const result = (new RegExp('[?&]' + encodeURIComponent(urlParameterName) + '=([^&]*)')).exec(location.search);

    if (result !== null)
      return decodeURIComponent(result[1]);

    return null;
  }
}

