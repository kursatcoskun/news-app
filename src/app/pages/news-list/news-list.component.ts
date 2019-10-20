import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  news: any;
  extData: any;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    if(this.dataService.data){
      if (this.dataService.data.status === 'ok') {
        this.news = this.dataService.data;
        this.extData = this.dataService.extData;
        console.log(this.dataService.data);
      }
    } else{
      this.router.navigateByUrl('/home');
    }
  }

}
