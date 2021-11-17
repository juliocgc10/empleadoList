import { Empleado } from './../../models/Empleado';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  listEmpelado: Empleado[] = [
    { legajo: 1, nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino', salario: 25800 },
    { legajo: 2, nombre: 'Gabriela', apellido: 'Roman', sexo: 'Femenino', salario: 35000 },
    { legajo: 3, nombre: 'Octavio', apellido: 'Camarena', sexo: 'Masculino', salario: 5000 },
    { legajo: 4, nombre: 'Sandra', apellido: 'Sol', sexo: 'Femenino', salario: 40000 },
    { legajo: 5, nombre: 'Alejandro', apellido: 'Manriquez', sexo: 'Masculino', salario: 88000 },
    { legajo: 6, nombre: 'Alejandra', apellido: 'Manriquez', sexo: 'Femenino', salario: 88000 },
  ];

  radioButtonSeleccionado: string = 'Todos';

  constructor() { }

  ngOnInit(): void {
  }

  obtenerTotalEmpleados():number{
    return this.listEmpelado.length;
  }

  obtenerTotalFemeninos(): number{
    return this.listEmpelado.filter(x=>x.sexo === 'Femenino').length;
  }

  obtenerTotalMasculinos(): number{
    return this.listEmpelado.filter(x=>x.sexo === 'Masculino').length;
  }

  empleadoCountRadioButtonChange(radioButtonSelect: string): void{
    this.radioButtonSeleccionado = radioButtonSelect;
  }

}
