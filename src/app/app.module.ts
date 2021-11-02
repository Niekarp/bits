import { FlatpickrModule } from 'angularx-flatpickr';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { DefinitionStepComponent } from './pages/form-page/local-components/steps/definition-step/definition-step.component';
import { MockupStepComponent } from './pages/form-page/local-components/steps/mockup-step/mockup-step.component';
import { MenuButtonComponent } from './pages/form-page/local-components/menu-button/menu-button.component';
import { SummaryStepComponent } from './pages/form-page/local-components/steps/summary-step/summary-step.component';
import { TooltipComponent } from './common/tooltip/tooltip.component';
import { FormRowComponent } from './common/form-row/form-row.component';
import { FormFieldComponent } from './common/form-field/form-field.component';
import { FormDisplayPipe } from './pipes/form-display.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardPageContainerComponent } from './pages/dashboard-page/dashboard-page.container';
import { FormPageContainerComponent } from './pages/form-page/form-page.container';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    DashboardPageContainerComponent,
    FormPageComponent,
    FormPageContainerComponent,
    DefinitionStepComponent,
    MockupStepComponent,
    MenuButtonComponent,
    SummaryStepComponent,
    TooltipComponent,
    FormRowComponent,
    FormFieldComponent,
    FormDisplayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlatpickrModule.forRoot(),
    Ng2FlatpickrModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
