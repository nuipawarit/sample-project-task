import {Component, OnInit} from '@angular/core';
import {TaskModalService} from '../service/task-modal/task-modal.service';
import {Task} from '../service/task/task';

const mockData1: Task = {
  'TaskID': 67327,
  'TaskTitle': 'รบกวนแก้ไขรายงานวิเคราะห์อายุลูกหนี้ (Aging_AR)',
  'TaskDetail': '<div>     เนื่องจากรายงานวิเคราะห์อายุลูกหนี้ (Aging_AR) ในระบบ Magic กับใน ระบบ Impress มียอดไม่ตรงกัน ซึ่งรายการในระบบ Magic นั้น มียอดไม่ถูกต้อง ซึ่งเกิดจากรายการดังต่อไปนี้<br><br>     1. รายการที่ตัดหนี้แล้วแต่ยังค้างอยู่ในระบบ magic<br>     2. รายการเช็คคืนซึ่งปรับปรุงรายการใน Impress แต่ไม่มีรายการในระบบ magic<br>     3. รายการเงินมัดจำซึ่งต้องคืนเงินลูกค้าจะไม่มียอดในระบบ magic (เปิดใบลดหนี้)<br>     4. รายการอื่น ๆ ที่เกิดจากการทดลองระบบมียอดโชว์ใน magic<br><br>     ซึ่งรายการที่มีขอแตกต่างกันระหว่างระะบบ magic กับ ระบบ Impress แยกแต่ละสาขามีตามไฟล์แนบค่ะ (เป็นรายการ ณ วันที่ 30 เม.ย. 60 ค่ะ) <br>     รบกวน IT แก้ไขและปรับปรุงรายการดังกล่าวเพื่อให้ ระบบ Magic มี ยอดรวมตรงกันกับ ระบบ Impress ด้วยค่ะ <br><br><br>     <strong>รายงานที่เรียกจากระบบ magic (รายงานวิเคราะห์อายุลูกหนี้)<br></strong><strong><a href="https://www.2smetal.com/Uploads/Task//51367_20170515091438-0.png" data-trix-attachment=\'{"contentType":"image/png","filename":"image.png","filesize":67971,"height":768,"href":"https://www.2smetal.com/Uploads/Task//51367_20170515091438-0.png","url":"https://www.2smetal.com/Uploads/Task//51367_20170515091438-0.png","width":1024}\' data-trix-content-type="image/png" target="_blank"><figure class="attachment attachment-preview png"><img src="https://www.2smetal.com/Uploads/Task//51367_20170515091438-0.png" width="1024" height="768"><figcaption class="caption">image.png <span class="size">66.38 KB</span></figcaption></figure></a></strong><strong><br></strong><br></div>',
  'TaskDueDate': '                                                  ',
  'TaskDueDateTo': null,
  'ReponsedBy': 64,
  'ReponsedName': 'จารุวรรณ  จันทร์ประอบ',
  'ReponsedEmpKey': 3,
  'ReponsedParID': 7,
  'TaskCategory': 0,
  'TaskCategoryName': null,
  'isPublic': 1,
  'AssignedBy': 728,
  'AssignedDate': '2017-05-15 09:21:26.000',
  'AssignedName': 'อโณทัย  มามะเริง',
  'AssignedEmpKey': 879,
  'TaskPartyID': 0,
  'TaskPartyCode': '          ',
  'TaskCustomerName': 'เดอะไพเรทส์พาร์คหาดใหญ่ 2559 บจก.',
  'TaskIsCompleted': 0,
  'TaskCompleteDate': '1900-01-01 00:00:00.000',
  'TaskSystem': 'Approve',
  'TaskType': 1,
  'TaskTypeName': 'มอบหมายงาน',
  'TaskMail_CC': 'jaruwan@ss.co.th,napatsawan@ss.co.th,natcha@ss.co.th,pakorn@ss.co.th,sangrung@ss.co.th,boonchauy@ss.co.th',
  'TaskExpectDate': '2017-08-19 00:00:00.000',
  'TaskCloseReq': null,
  'CloseByAssign': 1,
  'TaskEmpIDCanCloseJob': 0,
  'TaskCloserName': null,
  'StatusEdit': 0,
  'ResponseDeptID': 7,
  'TaskParentID': 0,
  'TaskLevel': 0,
  'TaskStartDate': null,
  'TaskPriority': 3,
  'TaskUserIDEdit': 3,
  'TaskEditDate': '2017-07-20 13:38:39.000',
  'TaskPercenttage': 0,
  'TaskFristParentID': 0,
  'TaskSupplierID': 0,
  'TaskSupplierName': '',
  'TaskExpenseType': 0,
  'TaskPVCompany': '',
  'TaskPVBranchID': 0,
  'TaskPVCostCenter': 0,
  'TaskPVBusinessType': 0,
  'IsCash': 0,
  'TaskTag': 'มอบหมายงาน,แก่ไขรายงานวิเคระห์อายุลูกหนี้',
  'Ar_Approve1': null,
  'Ar_Approve2': null,
  'Ar_Approve3': null,
  'Ar_UserID1': null,
  'Ar_UserID2': null,
  'Ar_UserID3': null,
  'Ar_Amount': null,
  'Ar_AmountOLD': null,
  'Ar_CusCrTerm': null,
  'Ar_CusCrTermOLD': null,
  'Ar_CusCrTerm2': null,
  'Ar_CusCrTermOLD2': null,
  'Ar_CusCrTerm3': null,
  'Ar_CusCrTermOLD3': null,
  'Ar_CusCrTerm0': null,
  'Ar_CusCrTermOLD0': null,
  'Ar_CustCT1PayValue': null,
  'Ar_CustCT1PayValue_Old': null,
  'Ar_CustCT2PayValue': null,
  'Ar_CustCT2PayValue_Old': null,
  'Ar_EmpName1': null,
  'Ar_EmpName2': null,
  'Ar_EmpName3': null,
  'Ar_EmpParID1': null,
  'Ar_EmpParID2': null,
  'Ar_EmpParID3': null,
  'Ar_Company': null,
  'Ar_BranchID': null,
  'APP_RTPath1': null,
  'APP_RTPath2': null,
  'APP_RTPath3': null,
  'ASS_RTPath': '/1/2/4/                                                                                                                                                                                                                                                      ',
  'REP_RTPath': '/1/2/                                                                                                                                                                                                                                                        ',
  'CommentCount': 17,
  'AttachFileCount': 0,
  'TaskSubscription': 1,
  'HasNotify': 0,
  'SupportedType': true
};
const mockData2: Task = {
  'TaskID': 59171,
  'TaskTitle': 'ทดสอบ : ทเสอบขออนุมัติวงเงิน',
  'TaskDetail': '',
  'TaskDueDate': '                                                  ',
  'TaskDueDateTo': null,
  'ReponsedBy': 710,
  'ReponsedName': 'ปวริศ จงไกรจักร',
  'ReponsedEmpKey': 826,
  'ReponsedParID': 7,
  'TaskCategory': 0,
  'TaskCategoryName': null,
  'isPublic': 1,
  'AssignedBy': 710,
  'AssignedDate': '2017-11-06 10:23:04.000',
  'AssignedName': 'ปวริศ จงไกรจักร',
  'AssignedEmpKey': 826,
  'TaskPartyID': 7884,
  'TaskPartyCode': 'T2168     ',
  'TaskCustomerName': 'ทดสอบ',
  'TaskIsCompleted': 0,
  'TaskCompleteDate': '1900-01-01 00:00:00.000',
  'TaskSystem': 'Approve',
  'TaskType': 3,
  'TaskTypeName': 'ขออนุมัติวงเงิน/วัน',
  'TaskMail_CC': '',
  'TaskExpectDate': null,
  'TaskCloseReq': null,
  'CloseByAssign': 0,
  'TaskEmpIDCanCloseJob': 0,
  'TaskCloserName': null,
  'StatusEdit': 0,
  'ResponseDeptID': 7,
  'TaskParentID': 0,
  'TaskLevel': 0,
  'TaskStartDate': null,
  'TaskPriority': 3,
  'TaskUserIDEdit': 607,
  'TaskEditDate': '2017-11-06 10:23:04.000',
  'TaskPercenttage': 0,
  'TaskFristParentID': 0,
  'TaskSupplierID': 0,
  'TaskSupplierName': '',
  'TaskExpenseType': 0,
  'TaskPVCompany': '',
  'TaskPVBranchID': 0,
  'TaskPVCostCenter': 0,
  'TaskPVBusinessType': 0,
  'IsCash': 0,
  'TaskTag': '',
  'Ar_Approve1': null,
  'Ar_Approve2': null,
  'Ar_Approve3': null,
  'Ar_UserID1': 1,
  'Ar_UserID2': 0,
  'Ar_UserID3': 0,
  'Ar_Amount': 350000,
  'Ar_AmountOLD': 0,
  'Ar_CusCrTerm': 30,
  'Ar_CusCrTermOLD': 0,
  'Ar_CusCrTerm2': 30,
  'Ar_CusCrTermOLD2': 0,
  'Ar_CusCrTerm3': 0,
  'Ar_CusCrTermOLD3': 0,
  'Ar_CusCrTerm0': 0,
  'Ar_CusCrTermOLD0': 0,
  'Ar_CustCT1PayValue': 3,
  'Ar_CustCT1PayValue_Old': 0,
  'Ar_CustCT2PayValue': 3,
  'Ar_CustCT2PayValue_Old': 0,
  'Ar_EmpName1': 'แสงรุ้ง นิติภาวะชน',
  'Ar_EmpName2': null,
  'Ar_EmpName3': null,
  'Ar_EmpParID1': 1,
  'Ar_EmpParID2': null,
  'Ar_EmpParID3': null,
  'Ar_Company': null,
  'Ar_BranchID': 0,
  'APP_RTPath1': '/1/                                                                                                                                                                                                                                                           ',
  'APP_RTPath2': null,
  'APP_RTPath3': null,
  'ASS_RTPath': '/1/2/31/                                                                                                                                                                                                                                                     ',
  'REP_RTPath': '/1/2/31/                                                                                                                                                                                                                                                     ',
  'CommentCount': 1,
  'AttachFileCount': 4,
  'TaskSubscription': 1,
  'HasNotify': 0,
  'SupportedType': true
}; // งานรออนุมัติวงเงิน
const mockData3: Task = {
  'TaskID': 44317,
  'TaskTitle': 'ขอรับพนักงานทดแทนคนเก่า (นายกฤษภัคร  คงข',
  'TaskDetail': 'ขอรับพนักงานทดแทนคนเก่า (นายกฤษภัคร  คงขันธ์) ที่ลาออกไปค่ะ อัตราเงินเดือน 9,240 บาท+เงินช่วยค่าครองชีพเดือนละ 500 บาท รายละเอียดคนใหม่ นายสุรชัย ปลอดภัย ที่จะรับเข้ามา ตามไฟล์แนบค่ะ สอบถามพร้อมเริ่มทำงาน 30/01/2017',
  'TaskDueDate': '                                                  ',
  'TaskDueDateTo': '2017-01-28 00:00:00.000',
  'ReponsedBy': 1,
  'ReponsedName': 'แสงรุ้ง นิติภาวะชน',
  'ReponsedEmpKey': 1,
  'ReponsedParID': 1,
  'TaskCategory': 0,
  'TaskCategoryName': null,
  'isPublic': 1,
  'AssignedBy': 19,
  'AssignedDate': '2017-01-27 12:39:07.340',
  'AssignedName': 'ศุกร์พรรณ หวังกู้เกียรติ',
  'AssignedEmpKey': 68,
  'TaskPartyID': 0,
  'TaskPartyCode': '0000      ',
  'TaskCustomerName': 'เดอะไพเรทส์พาร์คหาดใหญ่ 2559 บจก.',
  'TaskIsCompleted': 1,
  'TaskCompleteDate': '2017-01-28 15:47:53.237',
  'TaskSystem': 'Approve',
  'TaskType': 5,
  'TaskTypeName': 'ขออนุมัติทั่วไป',
  'TaskMail_CC': 'manatsanan@ss.co.th',
  'TaskExpectDate': null,
  'TaskCloseReq': null,
  'CloseByAssign': 0,
  'TaskEmpIDCanCloseJob': 19,
  'TaskCloserName': 'ศุกร์พรรณ หวังกู้เกียรติ',
  'StatusEdit': 0,
  'ResponseDeptID': 4,
  'TaskParentID': 0,
  'TaskLevel': 0,
  'TaskStartDate': null,
  'TaskPriority': 0,
  'TaskUserIDEdit': null,
  'TaskEditDate': null,
  'TaskPercenttage': 100,
  'TaskFristParentID': 0,
  'TaskSupplierID': 0,
  'TaskSupplierName': '',
  'TaskExpenseType': 0,
  'TaskPVCompany': '',
  'TaskPVBranchID': 0,
  'TaskPVCostCenter': 0,
  'TaskPVBusinessType': 0,
  'IsCash': 0,
  'TaskTag': null,
  'Ar_Approve1': 1,
  'Ar_Approve2': 1,
  'Ar_Approve3': null,
  'Ar_UserID1': 1,
  'Ar_UserID2': 26,
  'Ar_UserID3': 0,
  'Ar_Amount': 0,
  'Ar_AmountOLD': 0,
  'Ar_CusCrTerm': 0,
  'Ar_CusCrTermOLD': 0,
  'Ar_CusCrTerm2': 0,
  'Ar_CusCrTermOLD2': 0,
  'Ar_CusCrTerm3': 0,
  'Ar_CusCrTermOLD3': 0,
  'Ar_CusCrTerm0': 0,
  'Ar_CusCrTermOLD0': 0,
  'Ar_CustCT1PayValue': 0,
  'Ar_CustCT1PayValue_Old': 0,
  'Ar_CustCT2PayValue': 0,
  'Ar_CustCT2PayValue_Old': 0,
  'Ar_EmpName1': 'แสงรุ้ง นิติภาวะชน',
  'Ar_EmpName2': 'ทรรศนีย์ ภูนุชอภัย',
  'Ar_EmpName3': null,
  'Ar_EmpParID1': 1,
  'Ar_EmpParID2': 4,
  'Ar_EmpParID3': null,
  'Ar_Company': '2S',
  'Ar_BranchID': 1,
  'APP_RTPath1': '/1/                                                                                                                                                                                                                                                           ',
  'APP_RTPath2': '/1/2/                                                                                                                                                                                                                                                         ',
  'APP_RTPath3': null,
  'ASS_RTPath': '/1/2/3/                                                                                                                                                                                                                                                      ',
  'REP_RTPath': '/1/                                                                                                                                                                                                                                                           ',
  'CommentCount': 3,
  'AttachFileCount': 0,
  'TaskSubscription': 0,
  'HasNotify': 0,
  'SupportedType': true
}; // งานอนุมัติแล้ว
const mockData4: Task = {
  'TaskID': 55635,
  'TaskTitle': 'สำรวจทัศนคติและความพอใจของผู้ปฏิบัติงาน',
  'TaskDetail': '<div>สำรวจพนักงานสาขา  นครราชสีมา<br>1. NES<br>2. 2 S<br>3. MEGA</div>',
  'TaskDueDate': '                                                  ',
  'TaskDueDateTo': null,
  'ReponsedBy': 663,
  'ReponsedName': 'กุลวรินทร์   สระภู',
  'ReponsedEmpKey': 100117,
  'ReponsedParID': 9,
  'TaskCategory': 0,
  'TaskCategoryName': null,
  'isPublic': 1,
  'AssignedBy': 663,
  'AssignedDate': '2017-07-06 11:58:40.000',
  'AssignedName': 'กุลวรินทร์ สระภู',
  'AssignedEmpKey': 100117,
  'TaskPartyID': 0,
  'TaskPartyCode': '          ',
  'TaskCustomerName': 'เดอะไพเรทส์พาร์คหาดใหญ่ 2559 บจก.',
  'TaskIsCompleted': 0,
  'TaskCompleteDate': '1900-01-01 00:00:00.000',
  'TaskSystem': 'Approve',
  'TaskType': 1,
  'TaskTypeName': 'มอบหมายงาน',
  'TaskMail_CC': 'sangrung@ss.co.th',
  'TaskExpectDate': '2017-07-31 00:00:00.000',
  'TaskCloseReq': 1,
  'CloseByAssign': 1,
  'TaskEmpIDCanCloseJob': 1,
  'TaskCloserName': 'แสงรุ้ง นิติภาวะชน',
  'StatusEdit': 0,
  'ResponseDeptID': 9,
  'TaskParentID': 0,
  'TaskLevel': 0,
  'TaskStartDate': null,
  'TaskPriority': 3,
  'TaskUserIDEdit': 377,
  'TaskEditDate': '2017-08-14 15:24:29.000',
  'TaskPercenttage': 0,
  'TaskFristParentID': 0,
  'TaskSupplierID': 0,
  'TaskSupplierName': '',
  'TaskExpenseType': 0,
  'TaskPVCompany': '',
  'TaskPVBranchID': 0,
  'TaskPVCostCenter': 0,
  'TaskPVBusinessType': 0,
  'IsCash': 0,
  'TaskTag': '',
  'Ar_Approve1': null,
  'Ar_Approve2': null,
  'Ar_Approve3': null,
  'Ar_UserID1': null,
  'Ar_UserID2': null,
  'Ar_UserID3': null,
  'Ar_Amount': null,
  'Ar_AmountOLD': null,
  'Ar_CusCrTerm': null,
  'Ar_CusCrTermOLD': null,
  'Ar_CusCrTerm2': null,
  'Ar_CusCrTermOLD2': null,
  'Ar_CusCrTerm3': null,
  'Ar_CusCrTermOLD3': null,
  'Ar_CusCrTerm0': null,
  'Ar_CusCrTermOLD0': null,
  'Ar_CustCT1PayValue': null,
  'Ar_CustCT1PayValue_Old': null,
  'Ar_CustCT2PayValue': null,
  'Ar_CustCT2PayValue_Old': null,
  'Ar_EmpName1': null,
  'Ar_EmpName2': null,
  'Ar_EmpName3': null,
  'Ar_EmpParID1': null,
  'Ar_EmpParID2': null,
  'Ar_EmpParID3': null,
  'Ar_Company': null,
  'Ar_BranchID': null,
  'APP_RTPath1': null,
  'APP_RTPath2': null,
  'APP_RTPath3': null,
  'ASS_RTPath': '/1/2/                                                                                                                                                                                                                                                        ',
  'REP_RTPath': '/1/2/                                                                                                                                                                                                                                                        ',
  'CommentCount': 11,
  'AttachFileCount': 0,
  'TaskSubscription': 1,
  'HasNotify': 0,
  'SupportedType': true
}; // งานรออนุมัติปิดงาน
const mockData5: Task = {
  'TaskID': 59173,
  'TaskTitle': 'ทดสอบงานขออนุมัติทั่วไป',
  'TaskDetail': '',
  'TaskDueDate': '                                                  ',
  'TaskDueDateTo': null,
  'ReponsedBy': 64,
  'ReponsedName': 'จารุวรรณ  จันทร์ประอบ',
  'ReponsedEmpKey': 3,
  'ReponsedParID': 7,
  'TaskCategory': 0,
  'TaskCategoryName': null,
  'isPublic': 1,
  'AssignedBy': 64,
  'AssignedDate': '2018-01-09 22:57:58.000',
  'AssignedName': 'จารุวรรณ จันทร์ประอบ',
  'AssignedEmpKey': 3,
  'TaskPartyID': 0,
  'TaskPartyCode': '          ',
  'TaskCustomerName': 'เดอะไพเรทส์พาร์คหาดใหญ่ 2559 บจก.',
  'TaskIsCompleted': 0,
  'TaskCompleteDate': '1900-01-01 00:00:00.000',
  'TaskSystem': 'Approve',
  'TaskType': 5,
  'TaskTypeName': 'ขออนุมัติทั่วไป',
  'TaskMail_CC': '',
  'TaskExpectDate': null,
  'TaskCloseReq': null,
  'CloseByAssign': 0,
  'TaskEmpIDCanCloseJob': 0,
  'TaskCloserName': null,
  'StatusEdit': 0,
  'ResponseDeptID': 7,
  'TaskParentID': 0,
  'TaskLevel': 0,
  'TaskStartDate': null,
  'TaskPriority': 3,
  'TaskUserIDEdit': 3,
  'TaskEditDate': '2018-01-09 22:57:58.000',
  'TaskPercenttage': 0,
  'TaskFristParentID': 0,
  'TaskSupplierID': 0,
  'TaskSupplierName': '',
  'TaskExpenseType': 0,
  'TaskPVCompany': '',
  'TaskPVBranchID': 0,
  'TaskPVCostCenter': 0,
  'TaskPVBusinessType': 0,
  'IsCash': 0,
  'TaskTag': '',
  'Ar_Approve1': null,
  'Ar_Approve2': null,
  'Ar_Approve3': null,
  'Ar_UserID1': 1,
  'Ar_UserID2': 0,
  'Ar_UserID3': 0,
  'Ar_Amount': 0,
  'Ar_AmountOLD': 0,
  'Ar_CusCrTerm': 0,
  'Ar_CusCrTermOLD': 0,
  'Ar_CusCrTerm2': 0,
  'Ar_CusCrTermOLD2': 0,
  'Ar_CusCrTerm3': 0,
  'Ar_CusCrTermOLD3': 0,
  'Ar_CusCrTerm0': 0,
  'Ar_CusCrTermOLD0': 0,
  'Ar_CustCT1PayValue': 0,
  'Ar_CustCT1PayValue_Old': 0,
  'Ar_CustCT2PayValue': 0,
  'Ar_CustCT2PayValue_Old': 0,
  'Ar_EmpName1': 'แสงรุ้ง นิติภาวะชน',
  'Ar_EmpName2': null,
  'Ar_EmpName3': null,
  'Ar_EmpParID1': 1,
  'Ar_EmpParID2': null,
  'Ar_EmpParID3': null,
  'Ar_Company': '2S',
  'Ar_BranchID': 1,
  'APP_RTPath1': '/1/                                                                                                                                                                                                                                                           ',
  'APP_RTPath2': null,
  'APP_RTPath3': null,
  'ASS_RTPath': '/1/2/                                                                                                                                                                                                                                                        ',
  'REP_RTPath': '/1/2/                                                                                                                                                                                                                                                        ',
  'CommentCount': 1,
  'AttachFileCount': 0,
  'TaskSubscription': 1,
  'HasNotify': 0,
  'SupportedType': true
}; // งานรออนุทัติทั่วไป
const mockData6: Task = {
  'TaskID': 59175,
  "TaskTitle": "อภิชัยค้าเหล็ก  ร้าน : ทดสอบงานเกี่ยวกับลูกค้า 2",
  "TaskDetail": "",
  "TaskDueDate": "                                                  ",
  "TaskDueDateTo": null,
  "ReponsedBy": 1,
  "ReponsedName": "แสงรุ้ง นิติภาวะชน",
  "ReponsedEmpKey": 1,
  "ReponsedParID": 1,
  "TaskCategory": 0,
  "TaskCategoryName": null,
  "isPublic": 1,
  "AssignedBy": 1,
  "AssignedDate": "2018-01-10 01:07:21.000",
  "AssignedName": "แสงรุ้ง นิติภาวะชน",
  "AssignedEmpKey": 1,
  "TaskPartyID": 5255,
  "TaskPartyCode": "อ0070     ",
  "TaskCustomerName": "อภิชัยค้าเหล็ก  ร้าน",
  "TaskIsCompleted": 0,
  "TaskCompleteDate": "1900-01-01 00:00:00.000",
  "TaskSystem": "ข้อมูลพื้นฐาน",
  "TaskType": 7,
  "TaskTypeName": "เกี่ยวกับลูกค้า",
  "TaskMail_CC": "",
  "TaskExpectDate": null,
  "TaskCloseReq": null,
  "CloseByAssign": 1,
  "TaskEmpIDCanCloseJob": 0,
  "TaskCloserName": null,
  "StatusEdit": 0,
  "ResponseDeptID": 1,
  "TaskParentID": 0,
  "TaskLevel": 0,
  "TaskStartDate": null,
  "TaskPriority": 3,
  "TaskUserIDEdit": 1,
  "TaskEditDate": "2018-01-10 01:07:21.000",
  "TaskPercenttage": 0,
  "TaskFristParentID": 0,
  "TaskSupplierID": 0,
  "TaskSupplierName": "",
  "TaskExpenseType": 0,
  "TaskPVCompany": "",
  "TaskPVBranchID": 0,
  "TaskPVCostCenter": 0,
  "TaskPVBusinessType": 0,
  "IsCash": 0,
  "TaskTag": "",
  "Ar_Approve1": null,
  "Ar_Approve2": null,
  "Ar_Approve3": null,
  "Ar_UserID1": null,
  "Ar_UserID2": null,
  "Ar_UserID3": null,
  "Ar_Amount": null,
  "Ar_AmountOLD": null,
  "Ar_CusCrTerm": null,
  "Ar_CusCrTermOLD": null,
  "Ar_CusCrTerm2": null,
  "Ar_CusCrTermOLD2": null,
  "Ar_CusCrTerm3": null,
  "Ar_CusCrTermOLD3": null,
  "Ar_CusCrTerm0": null,
  "Ar_CusCrTermOLD0": null,
  "Ar_CustCT1PayValue": null,
  "Ar_CustCT1PayValue_Old": null,
  "Ar_CustCT2PayValue": null,
  "Ar_CustCT2PayValue_Old": null,
  "Ar_EmpName1": null,
  "Ar_EmpName2": null,
  "Ar_EmpName3": null,
  "Ar_EmpParID1": null,
  "Ar_EmpParID2": null,
  "Ar_EmpParID3": null,
  "Ar_Company": null,
  "Ar_BranchID": null,
  "APP_RTPath1": null,
  "APP_RTPath2": null,
  "APP_RTPath3": null,
  "ASS_RTPath": "/1/                                                                                                                                                                                                                                                           ",
  "REP_RTPath": "/1/                                                                                                                                                                                                                                                           ",
  "CommentCount": 1,
  "AttachFileCount": 0,
  "TaskSubscription": 1,
  "HasNotify": 0,
  "SupportedType": true
}; // งานเกี่ยวกับลูกค้า

@Component({
  selector: 'app-test-zone',
  templateUrl: './test-zone.component.html',
  styleUrls: ['./test-zone.component.css']
})
export class TestZoneComponent implements OnInit {

  constructor(private taskModalService: TaskModalService) { }

  ngOnInit() {
    setTimeout(() => {
      this.taskModalService.openAddTaskModel();
      //this.taskModalService.open('edit', mockData6);
    });
  }

}
