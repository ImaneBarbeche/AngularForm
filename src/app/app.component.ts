import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulaireComponent } from './pages/formulaire/formulaire.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormulaireComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';

}
