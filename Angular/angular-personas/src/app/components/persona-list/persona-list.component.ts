import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa funciones comunes de Angular
import { PersonaService } from '../../services/persona.service'; // Servicio que obtiene los datos

@Component({
  selector: 'app-persona-list', // Selector del componente
  standalone: true, // Indica que este componente es standalone
  imports: [CommonModule], // Importa funcionalidades básicas (ngIf, ngFor, etc.)
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {
  personas: any[] = []; // Lista de personas
  errorMessage: string = ''; // Mensaje de error para mostrar

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.loadPersonas(); // Carga las personas al iniciar
  }

  loadPersonas(): void {
    this.personaService.getPersonas().subscribe({
      next: (data) => this.personas = data, // Asigna los datos recibidos
      error: (err) => this.errorMessage = 'Error al cargar las personas. Verifica la conexión.' // Maneja errores
    });
  }
}
