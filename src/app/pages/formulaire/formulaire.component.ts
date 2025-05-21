import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})

export class FormulaireComponent {
  submitted = false;

 form: FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
    firstName: FormControl<string | null>;
    lastName: FormControl<string | null>;
}> = new FormGroup({
    email: new FormControl<string | null>('', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    password: new FormControl<string | null>('', [Validators.required, Validators.minLength(6)]),
    firstName: new FormControl<string | null>('', [Validators.required, Validators.maxLength(10)]),
    lastName: new FormControl<string | null>('', [Validators.required, Validators.maxLength(10)])
});


 onSubmit() {
     this.submitted = true;

  if (this.form.invalid) {
    this.form.markAllAsTouched(); // Pour forcer l'affichage des erreurs
    return;
  }
}
}