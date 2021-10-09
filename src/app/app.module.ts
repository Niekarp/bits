import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
import { SaveDraftOnChangeDirective } from './directives/save-draft-on-change/save-draft-on-change.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    FormPageComponent,
    DefinitionStepComponent,
    MockupStepComponent,
    MenuButtonComponent,
    SummaryStepComponent,
    TooltipComponent,
    FormRowComponent,
    FormFieldComponent,
    SaveDraftOnChangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
