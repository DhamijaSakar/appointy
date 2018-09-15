import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
 
import { Li } from '../li';
import { LiService } from '../li.service';


@Component({
  selector: 'app-li-search',
  templateUrl: './li-search.component.html',
  styleUrls: ['./li-search.component.css']
})
export class LiSearchComponent implements OnInit {


lis$: Observable<Li[]>;
  private searchTerms = new Subject<string>();
 
  constructor(private liService: LiService) {}
 
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
 
  ngOnInit(): void {
    this.lis$ = this.searchTerms.pipe(
      debounceTime(300),
 
      distinctUntilChanged(),
 
      switchMap((term: string) => this.liService.searchLis(term)),
    );
  }
}




