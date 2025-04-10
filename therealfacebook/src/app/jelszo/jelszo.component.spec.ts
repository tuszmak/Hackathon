import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JelszoComponent } from './jelszo.component';

describe('JelszoComponent', () => {
  let component: JelszoComponent;
  let fixture: ComponentFixture<JelszoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JelszoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JelszoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
