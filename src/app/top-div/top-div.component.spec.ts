import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDivComponent } from './top-div.component';

describe('TopDivComponent', () => {
  let component: TopDivComponent;
  let fixture: ComponentFixture<TopDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
