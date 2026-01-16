import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token-interceptor';

import { LoginComponent } from './components/login/login'
providers: [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
]

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, LoginComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('DWES2526ClienteJWT');
}



