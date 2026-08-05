import { Auth } from '../domain/auth/Auth';

export class AuthRepository {
  async authenticate(username: string, password: string): Promise<Auth> {
    // Implementación de autenticación
    return new Auth('1', username, password);
  }
}