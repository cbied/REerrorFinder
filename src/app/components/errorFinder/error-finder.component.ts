import { Component } from '@angular/core';
import * as Excel from '@grapecity/spread-excelio';
import * as GC from '@grapecity/spread-sheets';
import { saveAs } from 'file-saver'

@Component({
  selector: 'app-error-finder',
  templateUrl: './error-finder.component.html',
  styleUrls: ['./error-finder.component.css']
})
export class ErrorFinderComponent {
title = 'errorFinder';
  spreadBackColor = 'aliceblue';
  hostStyle = {
    width: '95vw',
    height: '80vh'
  };
  private spread;
  private excelIO;
  descCol:string = '';
  descRow:string = '';
  landVal:string = '';
  descRowArr:string[] = [];
  count = 0;

  constructor() {
    this.spread = new GC.Spread.Sheets.Workbook();
    this.excelIO = new Excel.IO();
    
  }

  workbookInit(args: any) {
    const self = this;
    self.spread = args.spread;
    const sheet = self.spread.getActiveSheet();

}





async findErrors() {
  const sheetOne = this.spread.getSheet(1);
  let colCount = sheetOne.getColumnCount(GC.Spread.Sheets.SheetArea.viewport)
  let rowCount = sheetOne.getRowCount(GC.Spread.Sheets.SheetArea.viewport)
  console.log(rowCount)
  
  // Find Row
  for (let row = 0; row < rowCount; row++) {
   
  // Find Col
  for (let col = 0; col < colCount; col++) {
    let cellName = sheetOne.getText(row, col, GC.Spread.Sheets.SheetArea.viewport).toString().trim()
    let landValue = sheetOne.getValue(row, 7)
    let grossAc = sheetOne.getValue(row, 12)
    let structType = sheetOne.getValue(row, 13)
    let structName = sheetOne.getValue(row, 14)
    let landUse = sheetOne.getValue(row, 6)
    let landType = sheetOne.getValue(row, 25)
    let style = new GC.Spread.Sheets.Style();
    
    style.backColor = "red";
    // Find row that is a condo
    if (cellName === 'CONDO' || cellName === 'DUPLEX CONDOS') {
      
      // land value should be 0 for condos
      // grossAc should also be 0 for condos
      // if not, flag row red
      if (landValue !== 0 || grossAc !== 0 || 
          landUse !== "CDO" || landType !== "NL" || 
          structType !== "Condo" || structName !== "Condo") {
        sheetOne.setStyle(row,col,style,GC.Spread.Sheets.SheetArea.viewport);
        this.count++;
      }

      if (structType !== structName ) {
        style.backColor = 'green'
        sheetOne.setStyle(row,0,style,GC.Spread.Sheets.SheetArea.viewport);
        this.count++;
      }

      // if statement for if floor, type, or view has empty cell, flag for error


      // if statement if land type !== "NL"
    }

    // Townhomes should have land and land value
    if (cellName === "TOWNHOUSE") {
      if (landValue === 0 || grossAc === 0 && structType !== structName) {
        sheetOne.setStyle(row,0,style,GC.Spread.Sheets.SheetArea.viewport)
        this.count++;
      }

      if (landValue === 0 || grossAc === 0 ) {
        sheetOne.setStyle(row,col,style,GC.Spread.Sheets.SheetArea.viewport)
        this.count++;
      }
    }





    // These ColNames should not be in condos
    // const residentialTypes = ["RESIDENTIAL", "COMM CONDO", "MULTIFAMILY 2-4", "APARTMENT", "FEDERAL EXEMPT", "COMMERICAL"];
    const residentialTypes = ["TOWNHOUSE", "CONDO", "DUPLEX CONDO"];
if (!residentialTypes.includes(cellName)) {
  style.backColor = 'orange';
  sheetOne.setStyle(row, col, style, GC.Spread.Sheets.SheetArea.viewport);
  this.count++;   
}
   }
  }

  alert('Done! Please press "Save Excel!" to download updated Excel spread sheet')
}

onFileChange(args: any) {
  const self = this, file = args.srcElement && args.srcElement.files && args.srcElement.files[0];
  if (self.spread && file) {
    self.excelIO.open(file, (json: any) => {
      self.spread.fromJSON(json, {});
      // setTimeout(() => {
      //   alert('load successfully');
      // }, 0);
    }, (error: any) => {
      alert('load fail:' + error);
    });
  }
}

onClickMe(args: any) {
  const self = this;
  const filename = 'exportExcel.xlsx';
  const json = JSON.stringify(self.spread.toJSON());
  self.excelIO.save(json, function (blob: string | Blob) {
    saveAs(blob, filename);
  }, function (error: any) {
    console.log(error);
  });
}

}


