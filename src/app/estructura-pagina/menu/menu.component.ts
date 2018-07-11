import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../_modelos/usuario';
// import { EstructuraService } from '../estructura.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: []
})
export class MenuComponent implements OnInit {
  usuario: Usuario;
  constructor() { }

  ngOnInit() {
  }

}
