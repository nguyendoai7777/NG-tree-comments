import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CommentProps } from '../../types/shared.type';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: [ './comment-item.component.scss' ]
})
export class CommentItemComponent implements OnInit {
  @Input() commentProps!: CommentProps;
  @Input() index?: number;
  @Input() hasSubComments?: boolean;
  constructor() {
  }
  ngOnInit(): void {
  }

}
