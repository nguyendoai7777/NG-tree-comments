import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: [ './behavior-subject.component.scss' ]
})
export class BehaviorSubjectComponent implements OnInit {
  arrayNumber: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  parameter$ = this.arrayNumber.asObservable();
  constructor() {
  }
  ngOnInit(): void {
    this.arrayNumber.next([ 2, 1, 23, 25, 64, 34, 75, 91 ])
    this.parameter$.pipe(
      map(arr => arr.filter(c => c % 2 === 0))
    ).subscribe(
      (next) => {
        console.log(next)
      }
    )
  }
}
