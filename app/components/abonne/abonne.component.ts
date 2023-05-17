import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Abonne } from 'src/app/models/Abonne';
import { AbonneService } from 'src/app/service/abonne.service';


declare var window:any;
@Component({
  selector: 'app-abonne',
  templateUrl: './abonne.component.html',
  styleUrls: ['./abonne.component.scss']
})
export class AbonneComponent {
  AbonneData!:any;
  formModal!:any;
  formValue!:FormGroup;
  number!:number;
  showAdd!:boolean;
  showUpdate!:boolean;
  abonneModel: Abonne = new Abonne()

  constructor(private formbuilder: FormBuilder, private api: AbonneService){}

  ngOnInit(): void{

    this.number=-1;
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
    this.formValue = this.formbuilder.group({
      nom : [''],
      prenom : [''],
      age : [''],
      sexe : [''],
      rue : [''],
      profession : [''],
      id_motivation : [''],
      code_postal : [''],
      ville : [''],
      paye : [''],
      telephone : [''],
      email : [''],
    })
    this.getAbonne();

  }
  openModal(){
    this.formModal.show();

  }
  doSomeThing(){
    this.formModal.hide();
  }
  clickAddAbonne(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate= false
  }

  //insertion des abonnes
  postAbonne(){
    this.abonneModel.nom = this.formValue.value.nom;
    this.abonneModel.prenom = this.formValue.value.prenom;
    this.abonneModel.age = this.formValue.value.age;
    this.abonneModel.rue = this.formValue.value.rue;
    this.abonneModel.sexe = this.formValue.value.sexe;
    this.abonneModel.profession = this.formValue.value.profession;
    this.abonneModel.id_motivation = this.formValue.value.id_motivation;
    this.abonneModel.code_postal = this.formValue.value.code_postal;
    this.abonneModel.ville = this.formValue.value.ville;
    this.abonneModel.paye = this.formValue.value.paye;
    this.abonneModel.telephone = this.formValue.value.telephone;
    this.abonneModel.email = this.formValue.value.email;
    this.api.postAbonne(this.abonneModel).subscribe(res=>{
      console.log(res);
      console.log(this.abonneModel);
      alert('Abonne Enregistree avec succcess')
      this.getAbonne();
      this.formValue.reset();
      let ref = document.getElementById("cancel");
      ref?.click();

    },
    err=>{
      alert("Echec de l'ajout");
    })
  }

  // affichage des abonnees

  getAbonne(){
    this.api.getAbonne()
    .subscribe(res=>{
      this.AbonneData=res
    })
  }

  // suppression des Abonnees

  deleteAbonne(abonne: any){
    this.api.deleteAbonne(abonne.id)
    .subscribe(res=>{
      alert(`Abonne supprime`)
      this.getAbonne();
    })
  }

  // affectation des donnees pour modification
  modifierAbonne(abonne:any){
    this.showAdd = false;
    this.showUpdate= true;
    this.abonneModel.id =abonne.id;
    this.number=abonne.id;
    this.formValue.controls['nom'].setValue(abonne.nom);
    this.formValue.controls['prenom'].setValue(abonne.prenom);
    this.formValue.controls['age'].setValue(abonne.age);
    this.formValue.controls['rue'].setValue(abonne.rue);
    this.formValue.controls['sexe'].setValue(abonne.sexe);
    this.formValue.controls['profession'].setValue(abonne.profession);
    this.formValue.controls['id_motivation'].setValue(abonne.id_motivation);
    this.formValue.controls['code_postal'].setValue(abonne.code_postal);
    this.formValue.controls['ville'].setValue(abonne.ville);
    this.formValue.controls['paye'].setValue(abonne.paye);
    this.formValue.controls['email'].setValue(abonne.email);
    this.formValue.controls['telephone'].setValue(abonne.telephone);
  }


  // mise ajour

  updateAbonne(){
    this.abonneModel.nom = this.formValue.value.nom;
    this.abonneModel.prenom = this.formValue.value.prenom;
    this.abonneModel.age = this.formValue.value.age;
    this.abonneModel.rue = this.formValue.value.rue;
    this.abonneModel.sexe = this.formValue.value.sexe;
    this.abonneModel.profession = this.formValue.value.profession;
    this.abonneModel.id_motivation = this.formValue.value.id_motivation;
    this.abonneModel.code_postal = this.formValue.value.code_postal;
    this.abonneModel.ville = this.formValue.value.ville;
    this.abonneModel.paye = this.formValue.value.paye;
    this.abonneModel.telephone = this.formValue.value.telephone;
    this.abonneModel.email = this.formValue.value.email;
    this.api.updateAbonne(this.abonneModel,this.number)
    .subscribe(res=>{
      alert('mise ajour effectue avec sucess');
      this.formValue.reset();
      let ref = document.getElementById("cancel");
      ref?.click();
      this.getAbonne();
    })
  }
}
