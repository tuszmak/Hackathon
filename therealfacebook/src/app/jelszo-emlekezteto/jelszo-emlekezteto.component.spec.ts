import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JelszoEmlekeztetoComponent } from './jelszo-emlekezteto.component';

describe('JelszoEmlekeztetoComponent', () => {
  let component: JelszoEmlekeztetoComponent;
  let fixture: ComponentFixture<JelszoEmlekeztetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JelszoEmlekeztetoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JelszoEmlekeztetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
