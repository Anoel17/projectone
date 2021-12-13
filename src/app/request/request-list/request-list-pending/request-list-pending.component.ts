import { Component, OnInit } from '@angular/core';
import { Request } from '../../request.model';
import { RequestService } from '../../request.service';
@Component({
  selector: 'app-request-list-pending',
  templateUrl: './request-list-pending.component.html',
  styleUrls: ['./request-list-pending.component.css']
})
export class RequestListPendingComponent implements OnInit {
 

  constructor( private requestService: RequestService) { 

  }
    ngOnInit(): void {
    }


    allPending: Request[]= [];

    allResolved: Request[]=[];
    
    newFlag = false;
    errorMsg: string='';
    pendingFlag = false;
    resolvedFlag = false;


    newPending= {
      userId:0,
      id:0,
      date:"",
      amount:0,
      status:"pending"
      
    }

   loadPendingRequests() {
     this.requestService.getAllPendingForUser(Number(sessionStorage.getItem("userId"))).subscribe(
       (response) => {
          console.log(response);
          this.allPending=response;
       },
       (error) => {
          console.log(error);
          this.errorMsg = 'Error!!';
          console.log(this.errorMsg);
       }
       
     );
   }


   loadResolvedRequests() {
    this.requestService.getAllResolvedForUser(Number(sessionStorage.getItem("userId"))).subscribe(
      (response) => {
         console.log(response);
         this.allResolved=response;
      },
      (error) => {
         console.log(error);
         this.errorMsg = 'Error!!';
         console.log(this.errorMsg);
      }
      
    );
   }


  removeRequest(id: number) {
    this.requestService.removeRequestService(id).subscribe(
      (response) => {
        console.log(response);
        this.loadPendingRequests();
      },
      (error) => {
        console.log(error);
        this.errorMsg='error!!';
        console.log(this.errorMsg);
      }
    );
  }

  addRequest() {
    this.requestService.addRequestService(this.newPending).subscribe(
      (response) => {
        console.log(response);
        this.loadPendingRequests();
      },
      (error) => {
        console.log(error);
      }
    )
  }

  setNewFlag() {
    if (this.newFlag == true) this.newFlag=false;
    else this.newFlag = true;
    this.newPending.userId = (Number(sessionStorage.getItem("userId")));
  }


  setPendingFlag() {
    this.loadPendingRequests();
    if (this.pendingFlag==true) this.pendingFlag=false;
    else this.pendingFlag=true;
  }


  setResolvedFlag() {
    this.loadResolvedRequests();
    if (this.resolvedFlag==true) this.resolvedFlag=false;
    else this.resolvedFlag=true;
  }

}


