import { Component, OnInit } from '@angular/core';
import { Data } from "../provider/Data";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-detalhe',
  templateUrl: './item-detalhe.component.html',
  styleUrls: ['./item-detalhe.component.scss']
})
export class ItemDetalheComponent implements OnInit {

  public item;
  public description;
  constructor(private route: ActivatedRoute, private router: Router, private data: Data) { }

  ngOnInit() {
    if (this.data.storage === undefined) {
      this.router.navigate(['/']);
    } else {
      this.item = this.data.storage.itemDetalhe;
      this.description = this.data.storage.description;
      console.log(this.item);
      console.log(this.data.storage.description);
    }
  }

}
