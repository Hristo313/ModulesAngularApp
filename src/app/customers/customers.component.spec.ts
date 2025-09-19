import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxIconModule, IgxButtonModule, IgxRippleModule, IgxInputGroupModule, IgxSelectModule, IgxGridModule, IgxPaginatorModule, IgxChipsModule, IgxActionStripModule, IgxDialogModule, IgxSnackbarModule } from 'igniteui-angular';
import { CustomersComponent } from './customers.component';

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomersComponent],
      imports: [NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxInputGroupModule, IgxSelectModule, IgxGridModule, IgxPaginatorModule, IgxChipsModule, IgxActionStripModule, IgxDialogModule, IgxSnackbarModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
