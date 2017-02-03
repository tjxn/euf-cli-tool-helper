import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  creditUnions : CreditUnion[] = [
    { 
      name: 'Select a credit union',
      cuId: '',
      route: '',
      transit: '',
      interacApiVersion: '',
      defaultParticipantUserId: '',
      defaultContactId: '',
    },
    { 
      name: 'Affinity',
      cuId: '378601001',
      route: '889',
      transit: '52498',
      interacApiVersion: '3.4',
      defaultParticipantUserId: 'CLFLNWHLQPVZKP8QN1ATD0S1WCP0ASVX',
      defaultContactId: 'CA9tSMQtdWUa',
    },
    {
      name: 'Interior Savings',
      cuId: '833600041',
      route: '809',
      transit: '00490',
      interacApiVersion: '3.4',
      defaultParticipantUserId: '',
      defaultContactId: '',
    },
    { 
      name: 'First Calgary',
      cuId: '046610100',
      route: '899',
      transit: '96419',
      interacApiVersion: '3.4',
      defaultParticipantUserId: '0899964190281989910200002605327',
      defaultContactId: 'CANuUvFp3XT3',
    },
  ];

  fiId = [ 'CA000709', 'CA000809' ];

  commands = [
    {
      commandName: 'Send money request',
      shortName: 'SMR',
      requiredParams: [ 'ParticipantFIID', 'ParticipantUserID', 'CreditUnionID', 'RouteNumber', 'TransitNumber', 
                        'ContactID', 'RequestAmount', 'AccountNumber', 'MinutesBeforeExpire', 'IsEditableFulfillAmount', 'Name', ],
      optionalParams: [ 'MinFulfillAmount', 'MaxFulfillAmount', 'SenderMemo', 'InvoiceNumber', 'InvoiceDueDate', 'FIAccountID' ]
    },
    /*
    {
      commandName: 'Register for Autodeposit',
      shortName: 'RFAD',
      requiredParams: [ 'ParticipantFIID', 'ParticipantUserID', 'Email', 'CreditUnionID', 'RouteNumber', 'TransitNumber' ],
      optionalParams: [ 'Language', 'FirstName', 'MiddleName', 'LastName', 'CompanyName', 'TradeName', 'FIAccountID' ]
    },
    {
      commandName: 'Get autodeposit registrations',
      shortName: 'GADR',
      requiredParams: [ 'ParticipantFIID', 'ParticipantUserID', 'CreditUnionID' ],
      optionalParams: []
    },*/
  ]

  // Two way bound fields
  contactId: string;
  requestAmount: number = 10.01;
  customerName: string = 'Requestor';
  minFulfillAmount: number = 5.05;
  maxFulfillAmount: number = 100.99;
  senderMemo: string = 'A memo';
  invoiceNumber: string = 'C1-10001';
  fiAccountId: string = '123456';
  customerAccountNumber: string = '7890';
  isEditableFulfillAmount: boolean = false;
  minutesBeforeExpire: number = 1440;
  
  companyName: string = 'Central1';
  tradeName: string = 'Central1';
  firstName: string = 'John';
  middleName: string = 'Edward';
  lastName: string = 'Smith';
  email: string = 'pyan@central1.com';
  selectedCommand: string = this.commands[0].shortName;
  selectedFiId: string = this.fiId[0];
  selectedCreditUnion : CreditUnion;

  participantUserId: string;
  invoiceDueDate : Date = new Date();

  copyBtnText = "Copy to clipboard";

  copyText() {
    this.copyBtnText = "Copied!";
  }

  getCreditUnionId() : string {
    return ' --CreditUnionID ' + this.selectedCreditUnion.cuId;
  }

  getRoute() : string {
    return ' --RouteNumber ' + this.selectedCreditUnion.route;
  }

  getTransit() : string {
    return ' --TransitNumber ' + this.selectedCreditUnion.transit;
  }

  getFiId() : string { 
    return ' --ParticipantFIID ' + this.selectedFiId;
  }
  getParticipantUserId() : string { 
    return ' --ParticipantUserID ' + this.participantUserId;
  }
  getContactId() : string {
    return ' --ContactID ' + this.contactId;
  }
  getRequestAmount() : string {
    return ' --RequestAmount ' + this.requestAmount.toFixed(2);    
  }
  getAccountNumber() : string {
    return ' --AccountNumber ' + this.customerAccountNumber;    
  }
  getMinutesBeforeExpire() : string {
    return ' --MinutesBeforeExpire ' + this.minutesBeforeExpire;    
  }
  getName() : string {
    return ' --Name "' + this.customerName + '"';    
  }
  getSenderMemo() : string {
    return ' --SenderMemo "' + this.senderMemo + '"';
  }
  
  getIsEditableFulfillAmount() : string {
    return ' --IsEditableFulfillAmount ' + this.isEditableFulfillAmount;    
  }
  /*
  getMinFulfillAmount() : string {
    return ' --MinFulfillAmount ' + this.minFulfillAmount.toFixed(2);    
  }
  getMaxFulfillAmount() : string {
    return ' --MaxFulfillAmount ' + this.maxFulfillAmount.toFixed(2);    
  }
  */
  getInvoiceNumber() : string {
    return ' --InvoiceNumber "' + this.invoiceNumber + '"';    
  }
  getInvoiceDueDate() : string {
    return ' --InvoiceDueDate ' + this.invoiceDueDate.getDate() + '/' + (this.invoiceDueDate.getMonth() + 1) + '/' + this.invoiceDueDate.getFullYear();    
  }
  getFIAccountId() : string {
    return ' --FIAccountID "' + this.fiAccountId + '"';    
  }

  prepopulateFields( selected : CreditUnion ) : void {
    this.selectedCreditUnion = selected;
    this.participantUserId = selected.defaultParticipantUserId;
    this.contactId = selected.defaultContactId; 
  }

  constructor() {
    this.selectedCreditUnion = this.creditUnions[0];
  }
}

export interface CreditUnion {
  name: string,
  cuId: string,
  route: string,
  transit: string,
  interacApiVersion: string,
  defaultParticipantUserId: string,
  defaultContactId: string,
}


