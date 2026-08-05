import { Report } from '../domain/reports/Report';
import { ReportRepository } from '../infrastructure/reports/ReportRepository';

export class ReportService {
  private reportRepository: ReportRepository;

  constructor() {
    this.reportRepository = new ReportRepository();
  }

  async generateReport(userId: string): Promise<Report> {
    return this.reportRepository.generateReport(userId);
  }
}