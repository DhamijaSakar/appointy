import { Injectable } from '@angular/core';
import { Li } from './li';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LiService {

  constructor(
 private http : HttpClient
) { }

 private lisUrl= 'api/lis';

 httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

getLi(id:number): Observable<Li>
{
const url=`${this.lisUrl}/${id}`;
return this.http.get<Li>(url)
           .pipe(
catchError(this.handleError<Li>(`getLi id=${id}`))
);  
}

private handleError<T> (operation='operation',result?:T){
return(error:any): Observable<T> => { console.error(error);
return of(result as T);
};
}

getLis() : Observable<Li[]>
{ 
return this.http.get<Li[]>(this.lisUrl).pipe(
catchError(this.handleError('getLis',[])));
}

updateLi (li: Li): Observable<any> {
  return this.http.put(this.lisUrl, li, this.httpOptions).pipe(
    catchError(this.handleError<any>('updateLi'))
  );
}


addLi (li: Li): Observable<Li> {
  return this.http.post<Li>(this.lisUrl, li, this.httpOptions).pipe(
    
    catchError(this.handleError<Li>('addLi'))
  );
}


deleteLi (li: Li | number): Observable<Li> {
  const id = typeof li === 'number' ? li : li.id;
  const url = `${this.lisUrl}/${id}`;

  return this.http.delete<Li>(url, this.httpOptions).pipe(
        catchError(this.handleError<Li>('deleteLi'))
  );
}

searchLis(term: string): Observable<Li[]> {
  if (!term.trim()) {
        return of([]);
  }
  return this.http.get<Li[]>(`${this.lisUrl}/?item=${term}`).pipe(
        catchError(this.handleError<Li[]>('searchLis', []))
  );
}
}
