import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  public getUrlParameter(urlParameterName) {
    if (urlParameterName = (new RegExp('[?&]' + encodeURIComponent(urlParameterName) + '=([^&]*)')).exec(location.search))
      return decodeURIComponent(urlParameterName[1]);
  }
}

