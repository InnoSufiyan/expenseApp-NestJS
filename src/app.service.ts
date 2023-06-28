import { Injectable } from '@nestjs/common';
import { ReportType, data } from './data';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AppService {
  getAllReports(type: ReportType) {
    const filteredData = data.report.filter((report) => report.type === type);
    return filteredData;
  }
  getReportById(type: string, id: string) {
    return data.report.filter(
      (report) => report.type === type && report.id === id,
    )[0];
  }
  createReport(source: string, amount: number, type: string) {
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type === 'income' ? ReportType.INCOME : ReportType.EXPENSE,
    };
    console.log(newReport, '==>>newReport');
    data.report.push(newReport);
    return newReport;
  }
}
