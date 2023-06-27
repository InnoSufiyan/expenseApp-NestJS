/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Post, Put, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ReportType, data } from './data';

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
  getReportById() {
    return {};
  }
  @Post('')
  createReport(){
    return "created";
  }
  @Put(':id')
  updateReport(){
    return "updated";
  }
  @Delete(':id')
  deleteReport(){
    return "deleted";
  }
}
