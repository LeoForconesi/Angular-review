import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: object;

  constructor(private httpService: HttpService) {} // injected a dependency

  ngOnInit() {
    this.httpService.getBeer().subscribe(data => {
      this.brews = data;
      console.log(data);
    });
  }

}
