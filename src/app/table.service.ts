import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  newData: any;
  tableData: any = [];
  dataUpdate: any = [];
  arrForm: any = []
  sendData: any;

  constructor() { }

  data(value: any) {
    this.newData = value
    this.dataUpdate.push(this.newData)
    localStorage.setItem('data', JSON.stringify(this.dataUpdate))
    console.log(this.newData, '001110')
  }
  updateData() {
    this.tableData.push(this.newData)

    console.log(this.tableData, '000')
    return this.tableData
  }
  updateTableData(){
    return this.dataUpdate
  }
  setData(item: any,i:any,flag:any) {
    let data = {
      items:item,
      index:i,
      flag:true
    }
    this.sendData = data
    console.log(item, '00099',this.sendData)
  }
  returnData() {
    return this.sendData
  }
}
