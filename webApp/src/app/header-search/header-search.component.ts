import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Data } from "../provider/Data";
@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.scss']
})
export class HeaderSearchComponent implements OnInit {

  public searchItems: any;
  constructor(private http: HttpClient, private router: Router, private data: Data) {
    this.searchItems = '';
  }

  ngOnInit() {}

  buscarItems() {
    if (this.searchItems !== '' && this.searchItems !== undefined) {
      this.http.get(`http://127.0.0.1:3131/api/sites/${this.searchItems}`, {})
      .subscribe(data => {
        this.data.storage = data;
        this.router.navigate(['/items', {search: this.searchItems}]);
      });
    }
  }

}
