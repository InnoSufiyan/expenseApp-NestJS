/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Post, Put, Param, Body, ParseUUIDPipe, ParseEnumPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { ReportType, data } from './data';
import {CreateReportDto} from './dto/report.dto'


@Controller('report/:type')
export class AppController {

  constructor(private readonly appService: AppService) {

  }

  @Get('')
  getAllReports(@Param('type', new ParseEnumPipe(ReportType)) type: string) {
    console.log(type, "==>>type")
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.getAllReports(reportType);
  }
  @Get(':id')
  getReportById(
    @Param('type') type: string,
    @Param('id', ParseUUIDPipe) id: string
  ) {
    return this.appService.getReportById(type, id);
  }
  @Post('')
  createReport(
    @Param('type') type: string,
    @Body() { source, amount }: CreateReportDto
  ) {
    return this.appService.createReport(source,
      amount, type);
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
