import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task';
  citiesData: any[] = [];
  searchInput = ''
  paginateInput = 5
  tempData: any = [];

  constructor( private appService: AppService) {
    this.getAllCities()  
  }

  onPaginationChange() {
    this.citiesData = this.tempData.slice(0, this.paginateInput)
  }

  getAllCities() {
    this.appService.getAllCitiesList().subscribe((res: any) => {
      if (res.data) {
        this.citiesData = res?.data
        this.tempData = res?.data
      }
    })
  }
}
