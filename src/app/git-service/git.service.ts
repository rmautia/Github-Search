import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class GitService {

  private userName: string;
  // private clientId: string = '<Client Id>';
  // private clientSecret: string = '<Client Secret Key>';
  private clientId: string = '922c8f6ccfa1661f8838da56c0a3d7208480ce60';
  private clientSecret: string = 'd1c186c6373f96571c0bfcf76b84e4dc6fd0c15a';

  constructor(private _http: HttpClient) { 
    //console.log('Github Service Ready.');
    this.userName = '';

  }
  getUser() {
    if (this.userName) {
        return this._http.get('http://api.github.com/users/' + this.userName
            + '?client_id=' + this.clientId
            + '&client_secret=' + this.clientSecret)
            .map(res => res.json())
            .catch(this.handleError);
}
