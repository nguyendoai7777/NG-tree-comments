import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { catchError, concatMap, debounceTime, distinctUntilChanged, switchMap, throttleTime } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-debounce-input',
  templateUrl: './debounce-input.component.html',
  styleUrls: [ './debounce-input.component.scss' ]
})
export class DebounceInputComponent implements OnInit {
  search$ = new Subject<string | number>();
  constructor(
    private http: HttpClient
  ) {
  }
  ehe(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    // console.log((e.target as HTMLInputElement).value)
    this.search$.next(value)
  }
  ngOnInit(): void {
    this.search$.pipe(
      throttleTime(1000),
      distinctUntilChanged(),
      switchMap(t => {
        return this.http.get(`
        https://api.github.com/search/repositories?q=${t}/
        `);
      }),
      catchError(e => {
        console.log(e)
        return e;
      })
    ).subscribe((next) => {
      console.log(next)
    })
  }
}
