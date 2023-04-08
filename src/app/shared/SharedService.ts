import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private _refresh = new BehaviorSubject<boolean>(false);

  public getRefresh() {
    return this._refresh.asObservable();
  }

  public setRefresh(value: boolean) {
    this._refresh.next(value);
  }

  private _empId = new BehaviorSubject<string>('0');

  public getEmpId() {
    return this._empId.asObservable();
  }

  public setEmpId(value: string) {
    this._empId.next(value);
  }
}