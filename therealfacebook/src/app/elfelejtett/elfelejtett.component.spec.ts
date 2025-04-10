import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElfelejtettComponent } from './elfelejtett.component';

describe('ElfelejtettComponent', () => {
  let component: ElfelejtettComponent;
  let fixture: ComponentFixture<ElfelejtettComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElfelejtettComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElfelejtettComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
