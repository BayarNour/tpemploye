import { Injectable } from '@angular/core';
import { Employe } from '../model/employe.model';


@Injectable({
  providedIn: 'root'
})



export class EmployeService {
    employe:Employe[];
constructor() { 
    this.employe = [{idEmploye : 1, nomEmploye : "amira ben salah" , salaireEmploye : 2000.000, dateEmploye : new Date("02/10/2021")},
      {idEmploye :2, nomEmploye : "youssef zribi" , salaireEmploye : 2500.000, dateEmploye : new Date("12/20/2022")},
      {idEmploye :3, nomEmploye : "mohamed tounsi" , salaireEmploye : 1800.000, dateEmploye : new Date("09/19/2023")}
 ];
  }


  listEmploye():Employe[]{
    return this.employe;
  }
  ajouterEmploye(emp:Employe){
    this.employe.push(emp);
  }
  supprimerEmploye( emp: Employe){
    const index = this.employe.indexOf(emp, 0);
    if (index > -1) {
    this.employe.splice(index, 1);
    }
    
    }
    consulterEmploye(id:number):Employe{
      return this.employe.find(e => e.idEmploye == id)!; 
      }
    
      trierEmploye(){
        this.employe = this.employe.sort((n1,n2) => {
        if (n1.idEmploye! > n2.idEmploye!) {
        return 1;
        }
        if (n1.idEmploye! < n2.idEmploye!) {
        return -1;
        }
        return 0;
        });
        }

        
        updateEmploye(e:Employe)
        {
        // console.log(p);
        this.supprimerEmploye(e);
        this.ajouterEmploye(e);
        this.trierEmploye();
        }
        

  }



