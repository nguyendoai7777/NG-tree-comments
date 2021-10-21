import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-debounce-input',
  templateUrl: './debounce-input.component.html',
  styleUrls: [ './debounce-input.component.scss' ]
})
export class DebounceInputComponent implements OnInit {
  search$ = new Subject<string>();
  constructor() {
  }
  ehe(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    // console.log((e.target as HTMLInputElement).value)
    this.search$.next(value)
  }
  ngOnInit(): void {
    this.search$.subscribe((next) => {
      console.log(next)
    })
  }
}
