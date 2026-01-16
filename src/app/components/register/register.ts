import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class RegisterComponent {

  // atributos
  username = '';
  password = '';
  email = '';

  // constructor
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  // metodo para registrar
  register() {
    this.authService.register({
      username: this.username,
      password: this.password,
      email: this.email
    }).subscribe({
      next: () =>  {
        alert('Usuario registrado correctamente');
        this.router.navigate(['/login']);
      },
      error: () => alert('Error al registrar usuario')
    });
  }
}
