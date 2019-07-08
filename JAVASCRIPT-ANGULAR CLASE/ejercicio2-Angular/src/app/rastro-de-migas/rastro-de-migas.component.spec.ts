import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RastroDeMigasComponent } from './rastro-de-migas.component';

describe('RastroDeMigasComponent', () => {
  let component: RastroDeMigasComponent;
  let fixture: ComponentFixture<RastroDeMigasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RastroDeMigasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RastroDeMigasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
