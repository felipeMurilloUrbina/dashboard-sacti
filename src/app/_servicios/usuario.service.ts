import { Usuario } from './../_modelos/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Usuario[]>('/api/users');
    }
}
