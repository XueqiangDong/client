import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import 'rxjs/Rx';
import {Http} from '@angular/http';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // dataSource: Observable<any>;
  // products: Array<any> = [];
  products: Observable<any>;

  constructor(protected http: Http) {
    // let myHeaders: Headers = new Headers();
    // myHeaders.append("Authorization", "Basic 123456");
    // this.dataSource = this.http.get('/api/products').map((res) => res.json());
    this.products = this.http.get('/api/products').map((res) => res.json());
  }

  ngOnInit() {
    // this.dataSource.subscribe((data) => this.products = data);
  }

}
