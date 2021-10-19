import { Component } from '@angular/core';
import { CommentProps } from '../types/shared.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  title = 'tree-comment';
  comments: CommentProps[] = [
    {
      commentText: 'Hello hello',
      backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
      username: 'Mr.DxD',
      subComments: [
        {
          username: 'Mrs 4tun',
          commentText: 'Pro 9x hehe',
          backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
          subComments: [
            {
              username: 'Mrs 4tun',
              commentText: 'Pro 9x hehe',
              backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
              subComments: [
                {
                  username: 'Mrs 4tun',
                  commentText: 'Pro 9x hehe',
                  backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
                  subComments: [
                    {
                      username: 'Mrs 4tun',
                      commentText: 'Pro 9x hehe',
                      backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
                    },
                    {
                      username: 'Mrs 4tun',
                      commentText: 'Pro 9x hehe',
                      backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
                    },
                  ]
                },
                {
                  username: 'Mrs 4tun',
                  commentText: 'Pro 9x hehe',
                  backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
                },
              ]
            },
            {
              username: 'Mrs 4tun',
              commentText: 'Pro 9x hehe',
              backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
              subComments: [
                {
                  username: 'Mrs 4tun',
                  commentText: 'Pro 9x hehe',
                  backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
                },
                {
                  username: 'Mrs 4tun',
                  commentText: 'Pro 9x hehe',
                  backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
                  subComments: [
                    {
                      username: 'Mrs 4tun',
                      commentText: 'Pro 9x hehe',
                      backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
                    },
                    {
                      username: 'Mrs 4tun',
                      commentText: 'Pro 9x hehe',
                      backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
                    },
                  ]
                },
              ]
            },
            {
              username: 'Mrs 4tun',
              commentText: 'Pro 9x hehe',
              backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
            },
            {
              username: 'Mrs 4tun',
              commentText: 'Pro 9x hehe',
              backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
            },
          ]
        },
        {
          username: 'Mrs 4tun',
          commentText: 'Pro 9x hehe',
          backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
        },
        {
          username: 'Mrs 4tun',
          commentText: 'Pro 9x hehe',
          backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
        },
        {
          username: 'Mrs 4tun',
          commentText: 'Pro 9x hehe',
          backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
        },
        {
          username: 'Mrs 4tun',
          commentText: 'Pro 9x hehe',
          backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
          subComments: [
            {
              username: 'Mrs 4tun',
              commentText: 'Pro 9x hehe',
              backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
            },
            {
              username: 'Mrs 4tun',
              commentText: 'Pro 9x hehe',
              backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
            },
            {
              username: 'Mrs 4tun',
              commentText: 'Pro 9x hehe',
              backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
            },
          ]
        },
      ]
    },
    {
      commentText: 'Hello hello',
      backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
      username: 'Mr.DxD',
      subComments: [
        {
          username: 'Mrs 4tun',
          commentText: 'Pro 9x hehe',
          backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
          subComments: [
            {
              username: 'Mrs 4tun',
              commentText: 'Pro 9x hehe',
              backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
            },
            {
              username: 'Mrs 4tun',
              commentText: 'Pro 9x hehe',
              backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
            },
          ]
        },
        {
          username: 'Mrs 4tun',
          commentText: 'Pro 9x hehe',
          backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
        },
        {
          username: 'Mrs 4tun',
          commentText: 'Pro 9x hehe',
          backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
          subComments: [
            {
              username: 'Mrs 4tun',
              commentText: 'Pro 9x hehe',
              backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
            },
            {
              username: 'Mrs 4tun',
              commentText: 'Pro 9x hehe',
              backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
            },
            {
              username: 'Mrs 4tun',
              commentText: 'Pro 9x hehe',
              backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
            },
            {
              username: 'Mrs 4tun',
              commentText: 'Pro 9x hehe',
              backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
            },
          ]
        },
        {
          username: 'Mrs 4tun',
          commentText: 'Pro 9x hehe',
          backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
        },
      ]
    },
    {
      commentText: 'Hello hello',
      backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
      username: 'Mr.DxD'
    },
    {
      commentText: 'Hello hello',
      backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
      username: 'Mr.DxD',
      subComments: [
        {
          username: 'Mrs 4tun',
          commentText: 'Pro 9x hehe',
          backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
        },
        {
          username: 'Mrs 4tun',
          commentText: 'Pro 9x hehe',
          backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
        },
      ]
    },
    {
      commentText: 'Hello hello',
      backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
      username: 'Mr.DxD'
    },
    {
      commentText: 'Hello hello',
      backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
      username: 'Mr.DxD',
      subComments: [
        {
          username: 'Mrs 4tun',
          commentText: 'Pro 9x hehe',
          backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
        },
        {
          username: 'Mrs 4tun',
          commentText: 'Pro 9x hehe',
          backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
        },
        {
          username: 'Mrs 4tun',
          commentText: 'Pro 9x hehe',
          backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
        },
        {
          username: 'Mrs 4tun',
          commentText: 'Pro 9x hehe',
          backgroundImage: 'https://angular.io/assets/images/logos/angular/angular.svg',
        },
      ]
    },
  ]
}
