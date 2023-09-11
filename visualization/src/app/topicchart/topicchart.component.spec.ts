import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicchartComponent } from './topicchart.component';

describe('TopicchartComponent', () => {
  let component: TopicchartComponent;
  let fixture: ComponentFixture<TopicchartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopicchartComponent]
    });
    fixture = TestBed.createComponent(TopicchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
