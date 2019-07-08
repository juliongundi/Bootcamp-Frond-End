import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaDeVideosComponent } from './fila-de-videos.component';

describe('FilaDeVideosComponent', () => {
  let component: FilaDeVideosComponent;
  let fixture: ComponentFixture<FilaDeVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilaDeVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaDeVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
