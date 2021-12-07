import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IStudent } from 'src/assets/model/student';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  btnTrigger = new Subject<string>();
  countDownValue = new Subject<any>();
  currentCountValue = new Subject<any>();

  private marksUrl: string = '../../assets/config/marks.json';
  private productDataUrl:string='../../assets/config/product.json';
  constructor(private http: HttpClient) { }

  getTime(): string {
    let date = new Date();
    let hr: any = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    hr = hr < 10 ? '0' + hr : hr;
    let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    let suffix = date.getHours() >= 12 ? 'PM' : 'AM';

    return hr + ':' + min + ':' + sec + ' ' + suffix;
  }

  getData(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this.marksUrl);
  }

  getProductData():Observable<any>{
    return this.http.get<any>(this.productDataUrl);
  }
}
