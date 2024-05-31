import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private baseService: BaseService) { }
  items:Array<any>=[];
  searchText:any
  ngOnInit(): void {
    this.getData();
  }

 async getData() { 
      const newData = await this.baseService.callDummyMethod().then((data:any) => {
        this.items = data;
      })
  }

}
