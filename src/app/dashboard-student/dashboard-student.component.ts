import { Component, OnInit, ViewChild } from '@angular/core';
import {FlightSchedule} from '../types/FlightSchedule';
import * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-dashboard-student',
  templateUrl: './dashboard-student.component.html',
  styleUrls: ['./dashboard-student.component.css']
})
export class DashboardStudentComponent implements OnInit {

  public records: any[] = null;
  file:File;
  arrayBuffer:any;
  sumOfAllFlightPassengers:number;
  invalidFile=false;

  @ViewChild('reader') reader: any;
  constructor(private tstr:ToastrService) { }

  ngOnInit(): void {
  }

  uploadListener($event: any): void {
    console.log($event);
    let file = $event.srcElement.files[0];
    if(file){
      this.sumOfAllFlightPassengers=0;
      this.invalidFile=false;
    }
    if (this.isValidCSVFile(file)) {
      this.populateCSVData(file);

    } else if(this.isValidExcelFile(file)){
      this.populateExcelData(file);
    }
    else{
      alert("Please import valid .csv or xlsx file.");
      this.fileReset();
    }
  }

  populateExcelData(file)
  {

  this.file=file;
  let fileReader = new FileReader();
  fileReader.readAsArrayBuffer(this.file);
  fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, {type:"binary"});
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      let recordsArray = XLSX.utils.sheet_to_json(worksheet,{header:1});

      let allRecords=[];

      for (let i = 0; i < recordsArray.length; i++) {
        let curruntRecord = recordsArray[i];
        let headerLength=7;
        if (Object.keys(curruntRecord).length == headerLength) {
          let excelRecord:FlightSchedule = new FlightSchedule();
          excelRecord.id = curruntRecord[0];
          excelRecord.airlineName = curruntRecord[1];
          excelRecord.iata = curruntRecord[2];
          excelRecord.icao = curruntRecord[3];
          excelRecord.country = curruntRecord[4];
          excelRecord.active = curruntRecord[5];
          excelRecord.totalPassengers=curruntRecord[6];
          this.sumOfAllFlightPassengers+=Number.parseInt(excelRecord.totalPassengers);
          allRecords.push(excelRecord);
        }
        else{
          this.showInvalidFileError();
        }
      }
    this.records=allRecords;

  }
}


    populateCSVData(file){
      let reader = new FileReader();
      reader.readAsText(file);

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);

        let headersRow = this.getHeaderArray(csvRecordsArray);

        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);

      };

      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };

    }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];

    for (let i = 0; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');
        if (curruntRecord.length == headerLength) {
          let csvRecord:FlightSchedule = new FlightSchedule();
          csvRecord.id = curruntRecord[0].trim();
          csvRecord.airlineName = curruntRecord[1].trim();
          csvRecord.iata = curruntRecord[2].trim();
          csvRecord.icao = curruntRecord[3].trim();
          csvRecord.country = curruntRecord[4].trim();
          csvRecord.active = curruntRecord[5].trim();
          csvRecord.totalPassengers=curruntRecord[6].trim();
          this.sumOfAllFlightPassengers+=Number.parseInt(csvRecord.totalPassengers);

          csvArr.push(csvRecord);
        }
        else{
          this.showInvalidFileError();
        }


    }
    return csvArr;
  }

  showInvalidFileError(){
    this.invalidFile=true;
    this.tstr.error('','Uploaded file is invalid!');
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  isValidExcelFile(file: any) {
    return file.name.endsWith(".xlsx")
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.reader.nativeElement.value = "";
    this.records = [];
  }

}
