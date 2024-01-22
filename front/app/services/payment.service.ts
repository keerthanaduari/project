import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../entity/payment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  addEmpURL : string;
  getEmpURL : string;
  updateEmpUrl : string;
  deleteEmpUrl : string;

  constructor(private http : HttpClient) {

    this.addEmpURL = 'http://localhost:8086/postpayment';
    this.getEmpURL = 'http://localhost:8086/payment';
    this.updateEmpUrl = 'http://localhost:8086/updatepayment';
    this.deleteEmpUrl = 'http://localhost:8086/deletepaument';

   }

   addPayment(payment : Payment): Observable<Payment> {
     return this.http.post<Payment>(this.addEmpURL,payment);
   }

   getAllPayment(): Observable<Payment[]>{
     return this.http.get<Payment[]>(this.getEmpURL);
   }

   updatePayment(payment :Payment) : Observable<Payment>{
     return this.http.put<Payment>(this.updateEmpUrl, payment);
   }
   
  findAll(): Observable<any> {
    console.log(Payment)
    return this.http.get('http://localhost:8086/payment');
  }

   deletePayment(payment : Payment) : Observable<Payment> {
     return this.http.delete<Payment>(this.deleteEmpUrl+'/'+payment. pId);
   }
  

}