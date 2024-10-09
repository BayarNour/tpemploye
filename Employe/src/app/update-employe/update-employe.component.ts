import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { EmployeService } from '../services/employe.service';
import { Employe } from '../model/employe.model'

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styles: ``
})

export class UpdateEmployeComponent implements OnInit {
  currentEmploye= new Employe();

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private employeService: EmployeService) { }

  ngOnInit(){
    this.currentEmploye = this.employeService.consulterEmploye(this.activatedRoute.snapshot. params['id']);
    console.log(this.currentEmploye);
  } 
  updateEmploye()
  {
      this.employeService.updateEmploye(this.currentEmploye);
      this.router.navigate(['employe']);


  }

}
  


