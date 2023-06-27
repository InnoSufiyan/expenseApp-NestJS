/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Post, Put, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ReportType, data } from './data';
import { v4 as uuid } from 'uuid';

@Controller('report/:type')
export class AppController {
  @Get('')
  getAllReports(@Param('type') type: string) {
    console.log(type, "==>>type")
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    const filteredData = data.report.filter((report) => report.type === reportType);
    return filteredData;
  }
  @Get(':id')
  getReportById(
    @Param('type') type: string,
    @Param('id') id: string
  ) {
    return data.report.filter((report) => report.type === type && report.id === id)[0]
  }
  @Post('')
  createReport(
    @Param('type') type: string,
    @Body() { source, amount }: { source: string, amount: number }
  ) {
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type === "income" ? ReportType.INCOME : ReportType.EXPENSE,
    }
    console.log(newReport, "==>>newReport")
    data.report.push(newReport);
    return newReport;
  }
  @Put(':id')
  updateReport(
    @Param('type') type: string,
    @Param('id') id: string,
    @Body() { source, amount }: { source: string, amount: number }
  ) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    const reportIndex = data.report.findIndex((report) => report.type === reportType && report.id === id);
    console.log(reportIndex, "==>>reportIndex")
    data.report[reportIndex] = {
      ...data.report[reportIndex],
      source,
      amount,
      updated_at: new Date(),
    }
    if (!(reportIndex >= 0)) return "Report not found";
    return data.report[reportIndex];
  }
  @Delete(':id')
  deleteReport() {
    return "deleted";
  }
}
