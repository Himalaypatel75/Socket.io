import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { WebSocketService } from '../web-socket.service';
@Component({
  selector: 'app-trader-screen',
  templateUrl: './trader-screen.component.html',
  styleUrls: ['./trader-screen.component.css'],
})
export class TraderScreenComponent implements OnInit {
  showDealEntryForm = false;
  DelstrategyName: any;
  NonDelstrategyName: any;
  showMainContent = false;
  showNewDealButton = true;
  showCancelDealButton = false;
  Deliverable = false;
  dropDownEnable = false;
  validationsForm!: FormGroup;
  validationMessages: any;
  selected: any;
  CurrencySelectedOne: any;
  CurrencySelectedTwo: any;
  filteredStrategy: any;
  currancypair: any;

  DealId = [];
  Size = [];
  Status = [];
  TimeDate = [];

  STRATEGY=[];
  CURRENCY=[];
  TENOR=[];
  LEVEL=[];
  BUYER=[];
  SELLER=[];
  VENUE=[];

  constructor(private formBuilder: FormBuilder, private webSocketService: WebSocketService) { }

  strategyData = [
    { id: 1, value: 'Del_Outright', delNdelid: 1 },
    { id: 2, value: 'Del_Swap', delNdelid: 1 },
    { id: 3, value: 'Del_Butterfly', delNdelid: 1 },
    { id: 4, value: 'ND_Outright', delNdelid: 2 },
    { id: 5, value: 'NDS', delNdelid: 2 },
    { id: 6, value: 'ND_Butterfly', delNdelid: 2 },
    // { id: 7, value: 'ND_Test', delNdelid: 2 },
    // { id: 8, value: 'Del_Test', delNdelid: 1 },
  ];
  currancyData = [
    { id: 1, value: 'USD' },
    { id: 2, value: 'TRY' },
    { id: 3, value: 'VND' },
  ];
  currancypairTest = [
    { ccmid1: 1, ccmid2: 2, delNdid: 1 },
    { ccmid1: 1, ccmid2: 3, delNdid: 2 },
  ];

  createFormControl() {
    this.validationsForm = this.formBuilder.group({
      CcyOne: new FormControl(
        '',
        Validators.compose([
          Validators.required,

          Validators.maxLength(25),
          Validators.minLength(5),
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),

          Validators.required,
        ])
      ),
      CcyTwo: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(25),
          Validators.minLength(5),
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        ])
      ),
      Strategy: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(25),
          Validators.minLength(5),
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        ])
      ),
    });
  }

  public onStrategySelected(event: any) {
    const value = event.target.value;
    this.selected = value;
    this.DelstrategyName = value;

    this.showDealEntryForm = true;
  }

  public onCurrencySelectedOne(event: any) {
    const value = event.target.value;
    this.CurrencySelectedOne = parseInt(value);
    this.getCurrencyPair(this.CurrencySelectedOne, this.CurrencySelectedTwo);
  }
  public onCurrencySelectedTwo(event: any) {
    const value = event.target.value;
    this.CurrencySelectedTwo = parseInt(value);
    this.getCurrencyPair(this.CurrencySelectedOne, this.CurrencySelectedTwo);
  }

  getCurrencyPair(val1: any, val2: any) {
    var res = this.currancypairTest.filter(
      (e) => e.ccmid1 === val1 && e.ccmid2 === val2
    );
    if (val1 && val2) {
      this.filteredStrategy = this.strategyData.filter(
        (e) => e.delNdelid === res[0].delNdid
      );

    }

  }

  SaveDealData() { }

  newDeal() {
    this.showMainContent = true;
    this.showNewDealButton = false;
    this.showCancelDealButton = true;
  }

  cancelDeal() {
    this.showNewDealButton = true;
    this.selected = null;
    this.DelstrategyName = null;
    this.showMainContent = false;
    this.showCancelDealButton = false;
    this.showDealEntryForm = false;
    this.CurrencySelectedOne = null;
    this.CurrencySelectedTwo = null;
  }

  ngOnInit(): void {
    this.createFormControl();
    // here we are going to listion from socket.io server
    this.webSocketService.listen('test1').subscribe((data:any) =>{

        this.DealId = data['DealId'];
        this.Size = data['Size'];
        this.Status = data['Status'];
        this.TimeDate = data['TimeDate'];

        this.STRATEGY=data['STRATEGY'];
        this.CURRENCY=data['CURRENCY'];
        this.TENOR=data['TENOR'];
        this.LEVEL=data['LEVEL'];
        this.BUYER=data['BUYER'];
        this.SELLER=data['SELLER'];
        this.VENUE=data['VENUE'];
    })
  }
}
