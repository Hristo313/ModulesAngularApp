import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IgxIconModule, IgxCardModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxListModule, IgxChipsModule, IgxInputGroupModule, IgxSelectModule, IgxGridModule, IgxPaginatorModule, IgxActionStripModule, IgxDialogModule, IgxSnackbarModule, IgxTabsModule, IgxAccordionModule, IgxExpansionPanelModule, IgxCheckboxModule, IgxButtonGroupModule, IgxNavbarModule, IgxToggleModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { IgxCategoryChartModule, IgxPieChartModule } from 'igniteui-angular-charts';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { DealsComponent } from './deals/deals.component';
import { ReportsComponent } from './reports/reports.component';
import { RevealViewComponent } from 'reveal-sdk-wrappers-angular';
import { SupportComponent } from './support/support.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomersComponent,
    CustomerDetailsComponent,
    DealsComponent,
    ReportsComponent,
    SupportComponent,
    CalendarComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxIconModule,
    IgxCardModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxCategoryChartModule,
    IgxListModule,
    IgxChipsModule,
    IgxInputGroupModule,
    FormsModule,
    ReactiveFormsModule,
    IgxSelectModule,
    IgxGridModule,
    IgxPaginatorModule,
    IgxActionStripModule,
    IgxDialogModule,
    IgxSnackbarModule,
    IgxTabsModule,
    IgxAccordionModule,
    IgxExpansionPanelModule,
    IgxCheckboxModule,
    IgxButtonGroupModule,
    RevealViewComponent,
    IgxPieChartModule,
    IgxNavbarModule,
    IgxToggleModule,
    IgxNavigationDrawerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
