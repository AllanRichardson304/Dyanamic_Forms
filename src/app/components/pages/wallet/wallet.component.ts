import { Component, OnInit } from '@angular/core';
interface Person {
  key: string;
  coinname: string;
  available: number;
  holdearn: number;
  amount: number;
}
interface page {
  key: string;
  date: string;
  id: string;
  address: string;
  amount: number;
}

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listOfData: Person[] = [
    {
      key: '1',
      coinname: 'BTC',
      available: 3455,
      holdearn: 2.45,
      amount:34.3455,
    },
    {
      key: '1',
      coinname: 'USDT',
      available: 3455,
      holdearn: 2.45,
      amount:34.3455,
    },
    {
      key: '1',
      coinname: 'BNB',
      available: 3455,
      holdearn: 2.45,
      amount:34.3455,
    },
    {
      key: '1',
      coinname: 'ADA',
      available: 3455,
      holdearn: 2.45,
      amount:34.3455,
    },
    {
      key: '1',
      coinname: 'MATIC',
      available: 3455,
      holdearn: 2.45,
      amount:34.3455,
    },
    {
      key: '1',
      coinname: 'DOGE',
      available: 3455,
      holdearn: 2.45,
      amount:34.3455,
    },
    {
      key: '1',
      coinname: 'LTC',
      available: 3455,
      holdearn: 2.45,
      amount:34.3455,
    },
    {
      key: '1',
      coinname: 'ETH',
      available: 3455,
      holdearn: 2.45,
      amount:34.3455,
    },
    {
      key: '1',
      coinname: 'BUSD',
      available: 3455,
      holdearn: 2.45,
      amount:34.3455,
    },
    {
      key: '1',
      coinname: 'LINK',
      available: 3455,
      holdearn: 2.45,
      amount:34.3455,
    },
   
  ];

  listTable: page[] = [
    {
      key: '1',
      date: 'OCT 20 ,2021, 4:30PM',
      id: 'XEIOFN#2876534',
      address: 'CBIASFB6236zxfaf',
      amount:34.3455,
    },
    {
      key: '1',
      date: 'OCT 20 ,2021, 4:30PM',
      id: 'XEIOFN#2876534',
      address: 'CBIASFB6236zxfaf',
      amount:34.3455,
    },
    {
      key: '1',
      date:'OCT 20 ,2021, 4:30PM',
      id: 'XEIOFN#2876534',
      address: 'CBIASFB6236zxfaf',
      amount:34.3455,
    },
  ];

}
