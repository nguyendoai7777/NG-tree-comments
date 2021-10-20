import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, merge } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: [ './rxjs.component.scss' ]
})
export class RxjsComponent implements OnInit {
  interval$ = interval(1000).pipe(
    take(5)
  )
  click$ = fromEvent<Event>(document, 'click').pipe(
    take(3)
  )
  constructor() {
  }
  ngOnInit(): void {
    /*this.interval$.subscribe(
      (next) => {
        console.log(next)
      }
    )
    this.click$.subscribe(
      (next) => console.log(next)
    )*/
    merge(this.click$, this.interval$, 1).subscribe((next) => console.log(next))
  }
}
