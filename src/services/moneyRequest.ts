import {Injectable} from '@angular/core';  
import {Http} from '@angular/http';

@Injectable()
export class MoneyRequestService {  
    constructor(private http: Http) {
    }

    sendMoneyRequest(fiId, participantUserId, contactID, requestAmount, name, senderMemo, invoiceNumber, invoiceDueDate,
    fiAccountID, creditUnionID, routeNumber, transitNumber, accountNumber, minutesBeforeExpire, isEditableFulfillAmount) {
        let response = this.http.get(`http://localhost:8080/sendmoneyrequest?ParticipantFIID=${fiId}&ParticipantUserId=${participantUserId}&ContactID=${contactID}&RequestAmount=${requestAmount}&Name=${name}&SenderMemo=${senderMemo}&InvoiceNumber=${invoiceNumber}&InvoiceDueDate=${invoiceDueDate}&FIAccountID=${fiAccountID}&CreditUnionID=${creditUnionID}&RouteNumber=${routeNumber}&TransitNumber=${transitNumber}&AccountNumber=${accountNumber}&MinutesBeforeExpire=${minutesBeforeExpire}&IsEditableFulfillAmount=${isEditableFulfillAmount}`);
        return response;
    }
}