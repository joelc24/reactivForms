import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IntegrantesService } from '../services/integrantes.service';
import { Integrante } from '../../../models/integrantes.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  data: any = []
  constructor(private route: Router, private service: IntegrantesService) { }

  ngOnInit(): void {
    this.service.getIntegrantes().subscribe(data => {
      data.forEach((element:any) => {
        const { name, id } = element;
        const [ conct_exp ]  = element.conct_exp;
        const { email, telefono, cargo } = conct_exp
        this.data.push({ id, name, email, telefono, cargo});
        console.log(this.data);
      });
    })
  }

  eliminar(id: any){
    this.service.deleteIntegrante(id).subscribe(data => {
      console.log(data);
    })
  }

  editar(id: any){
    this.route.navigate(['/integrantes/edit', id]);
  }



}
