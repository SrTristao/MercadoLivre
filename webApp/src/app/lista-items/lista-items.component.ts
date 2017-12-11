import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from "../provider/Data";
@Component({
  selector: 'app-lista-items',
  templateUrl: './lista-items.component.html',
  styleUrls: ['./lista-items.component.scss']
})
export class ListaItemsComponent implements OnInit {

  public items;
  constructor(private route: ActivatedRoute, private router: Router, private data: Data, private http: HttpClient) {
    this.items = [];
  }

  ngOnInit() {
    if (this.data.storage === undefined) {
      this.router.navigate(['/']);
    } else {
      this.items = this.data.storage;
      console.log(this.items);
    }
  }

  detalhesItem(item) {
    this.http.get(`http://127.0.0.1:3131/api/items/${item.id}`, {})
    .subscribe(itemDetalhe => {
      this.data.storage.itemDetalhe = itemDetalhe;
      this.router.navigate(['/itemDetalhe', {id: item.id}]);
    });
  }

}
