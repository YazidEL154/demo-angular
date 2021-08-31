import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,  // Classe responsable de la construction du formulaire
  FormGroup,    // Conteneur de champs de formulaire (permet de lire les états des champs)
  FormControl,  // Champs de formulaire avec le suivis des états et quelques fonctions
  Validators,   // La classe responsable des validations de champs
} from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css'],
})
export class FormulaireComponent implements OnInit {
  // attribut du composant pour garder en mémoire le formulaire et son état
  formulaire: FormGroup;

  // injection du constructeur de formulaire
  constructor(fb: FormBuilder) {
    // initialisation du formulaire
    this.formulaire = new FormGroup({
      // Champ de formulaire avec 1 validateur
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      // Champ avec plusieurs validateurs
      age: new FormControl('', [Validators.min(0), Validators.max(120)]),
      email: new FormControl('', [Validators.email, Validators.required]),
    });
  }

  ngOnInit(): void {}

  envoyerFormulaire(): void {
    // affichage en console du FormGroup qui contient les controls
    console.log(this.formulaire);
  }
}