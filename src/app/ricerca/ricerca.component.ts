import { Component, OnInit } from '@angular/core';
import { RicercaCartaService } from '../service/ricerca-carta.service';
import { Carta } from '../model/carta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css']
})
export class RicercaComponent implements OnInit {

  carta: Carta;
  carte: Carta[];
  codice: String;

  constructor(private router: Router, 
    private ricercaCartaService: RicercaCartaService) {
      this.carta = new Carta;
  }

  ngOnInit() {}

  onSubmit(){
    this.codice  = (<HTMLInputElement>document.getElementById("codice")).value;
    this. ricercaCartaService.findAll(this.codice).subscribe(result => this.carte=result);
  }

}
