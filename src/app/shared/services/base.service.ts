import {inject, Injectable} from "@angular/core";
import {environments} from "../../../environments/environments";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class BaseService<T>{
  protected httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

  protected http: HttpClient = inject(HttpClient);

  protected baseUrl: string = `${environments.serverBasePath}`;

  protected resourceEndPoint: string = '/resources';

  protected resourcePath(): string {
    return `${this.baseUrl}${this.resourceEndPoint}`;
  }

  protected handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error(`An error occurred: ${error.error.message}`);
    } else {
      console.error(`Backend returned code: ${error.status}, body was: ${error.error}`);
    }
    return throwError(() => new Error("Something bad happened; please try again later."));
  }

  public getAll(): Observable<Array<T>> {
    return this.http.get<Array<T>>(this.resourcePath(), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
 public getById(id: number): Observable<T> {
    return this.http.get<T>(`${this.resourcePath()}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}

