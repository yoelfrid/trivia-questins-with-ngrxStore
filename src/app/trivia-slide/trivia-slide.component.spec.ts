import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaSlideComponent } from './trivia-slide.component';

describe('TriviaSlideComponent', () => {
  let component: TriviaSlideComponent;
  let fixture: ComponentFixture<TriviaSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriviaSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
