import { Component } from '@angular/core';
import { Carta } from '../model/carta';
import { CartaService } from '../service/carta.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carta-form',
  templateUrl: './carta-form.component.html',
  styleUrls: ['./carta-form.component.css']
})
export class CartaFormComponent  {

  carta: Carta;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private cartaService: CartaService) {
    this.carta = new Carta();
  }
 

  onSubmit() {
    this.cartaService.save(this.carta).subscribe(result => this.gotoCartaList());
  }

  gotoCartaList() {
    this.router.navigate(['/carta']);
  }

}
