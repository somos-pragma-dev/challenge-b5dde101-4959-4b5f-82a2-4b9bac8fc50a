import { ReportService } from '../../src/application/reports/ReportService';

describe('ReportService', () => {
  it('should generate report', async () => {
    const reportService = new ReportService();
    const report = await reportService.generateReport('user1');
    expect(report.userId).toBe('user1');
  });
});