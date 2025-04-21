import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonaListComponent } from './persona-list.component';

describe('PersonaListComponent', () => {
  let component: PersonaListComponent;
  let fixture: ComponentFixture<PersonaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaListComponent] // Carga el componente
    }).compileComponents();

    fixture = TestBed.createComponent(PersonaListComponent); // Crea instancia para pruebas
    component = fixture.componentInstance; // Accede al componente
    fixture.detectChanges(); // Dispara el ciclo de detección de cambios
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que se crea correctamente
  });
});
