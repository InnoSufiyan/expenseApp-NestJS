import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('report/:type')
export class AppController {
  @Get('')
  getAllReports() {
    return [];
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
