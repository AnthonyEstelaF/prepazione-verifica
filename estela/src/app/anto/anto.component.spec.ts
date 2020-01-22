import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntoComponent } from './anto.component';

describe('AntoComponent', () => {
  let component: AntoComponent;
  let fixture: ComponentFixture<AntoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
