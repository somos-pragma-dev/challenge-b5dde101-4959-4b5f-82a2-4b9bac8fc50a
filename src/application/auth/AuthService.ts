import { Auth } from '../domain/auth/Auth';
import { AuthRepository } from '../infrastructure/auth/AuthRepository';

export class AuthService {
  private authRepository: AuthRepository;

  constructor() {
    this.authRepository = new AuthRepository();
  }

  async authenticate(username: string, password: string): Promise<Auth> {
    return this.authRepository.authenticate(username, password);
  }
}