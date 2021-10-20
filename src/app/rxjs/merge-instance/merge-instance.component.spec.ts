import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeInstanceComponent } from './merge-instance.component';

describe('MergeInstanceComponent', () => {
  let component: MergeInstanceComponent;
  let fixture: ComponentFixture<MergeInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeInstanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
