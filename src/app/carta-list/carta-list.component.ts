import { Component, OnInit } from '@angular/core';
import { Carta } from '../model/carta';
import { CartaService } from '../service/carta.service';

@Component({
  selector: 'app-carta-list',
  templateUrl: './carta-list.component.html',
  styleUrls: ['./carta-list.component.css']
})
export class CartaListComponent implements OnInit {

  carta: Carta[];

  constructor(private cartaService: CartaService) {
  }

  ngOnInit() {
    this.cartaService.findAll().subscribe(data => {
      this.carta = data;
    });
  }

}
