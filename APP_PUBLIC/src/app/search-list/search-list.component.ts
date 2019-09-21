import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs-compat/operator/switchMap';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  searchTerm="";
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getSearchList();
  }

  getSearchList() {
    this.searchTerm = this.route.snapshot.paramMap.get('searchTerm');
    
  }

}
