import { Component, OnInit } from '@angular/core';
import { Examen, ListaExamenes } from '../Interfaces/examen';
import {Estado} from '../Interfaces/estados';
import {ActivatedRoute,Route} from '@angular/router';


@Component({
  selector: 'app-detalle-examen',
  templateUrl: './detalle-examen.component.html',
  styleUrls: ['./detalle-examen.component.scss']
})
export class DetalleExamenComponent implements OnInit {

  ListaExamenes =ListaExamenes;
  Examen : any;
  id: number =0;
  Estado: any;

  constructor(private ruta:ActivatedRoute) { 
    this.ruta.params.subscribe(datos=>{
         this.id=datos["id"];
         console.log(this.id);  
    })
 }


  ngOnInit(): void {
  
  }

}
