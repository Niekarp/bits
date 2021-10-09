import { Component, OnInit } from '@angular/core';
import { FormDataService } from 'src/app/services/form-data/form-data.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  constructor(public formData: FormDataService) { }

  ngOnInit(): void {
  }

}
