import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxIconModule, IgxCardModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxListModule, IgxChipsModule, IgxInputGroupModule } from 'igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IgxIconModule, IgxCardModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxListModule, IgxChipsModule, IgxInputGroupModule, IgxCategoryChartModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
