import { AuthService } from '../../src/application/auth/AuthService';

describe('AuthService', () => {
  it('should authenticate user', async () => {
    const authService = new AuthService();
    const auth = await authService.authenticate('user', 'password');
    expect(auth.username).toBe('user');
  });
});