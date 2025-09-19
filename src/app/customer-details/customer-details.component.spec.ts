import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxButtonModule, IgxRippleModule, IgxIconModule, IgxTabsModule, IgxGridModule, IgxAccordionModule, IgxExpansionPanelModule, IgxAvatarModule, IgxCheckboxModule, IgxListModule, IgxChipsModule } from 'igniteui-angular';
import { CustomerDetailsComponent } from './customer-details.component';

describe('CustomerDetailsComponent', () => {
  let component: CustomerDetailsComponent;
  let fixture: ComponentFixture<CustomerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerDetailsComponent],
      imports: [NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxTabsModule, IgxGridModule, IgxAccordionModule, IgxExpansionPanelModule, IgxAvatarModule, IgxCheckboxModule, IgxListModule, IgxChipsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
