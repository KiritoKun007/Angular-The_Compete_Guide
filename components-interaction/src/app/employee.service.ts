import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private _url: string = "/assets/data/employees.json"

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error)
      this.log(`${operation} failed: ${error.message}`)
      return of(result as T)
    }
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService ) { }

  getEmployees() : Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
      .pipe(
        tap(_ => this.log('fetched Employee')),
        catchError(this.handleError<IEmployee[]>('getEmployee', []))
      )
  }
  
  // Log a EmployeeService message with the MessageService
  private log(message: string) {
    this.messageService.add(`EmployeeService: ${message}`);
  }
}
