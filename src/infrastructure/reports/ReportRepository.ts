import { Report } from '../domain/reports/Report';

export class ReportRepository {
  async generateReport(userId: string): Promise<Report> {
    // Implementación de generación de reporte
    return new Report('1', userId, {})
  }
}