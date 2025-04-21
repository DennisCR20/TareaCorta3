import { TestBed } from '@angular/core/testing';
import { PersonaService } from './persona.service';

describe('PersonaService', () => {
  let service: PersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({}); // Crea el entorno de prueba
    service = TestBed.inject(PersonaService); // Inyecta el servicio
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); // Verifica que el servicio se creó
  });
});
