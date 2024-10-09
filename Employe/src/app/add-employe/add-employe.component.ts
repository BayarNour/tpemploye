import { Component ,OnInit } from '@angular/core';
import { Employe } from '../model/employe.model';
import { EmployeService } from '../services/employe.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html'
})

export class AddEmployeComponent implements OnInit {
  newEmploye = new Employe();
  constructor(private employeService: EmployeService , private router :Router) { }
  ngOnInit(): void {
  }

  addEmploye(){
    this.employeService.ajouterEmploye(this.newEmploye);
    this.router.navigate(["employe"]);

    }
    

}
