import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    const data =  this.http.get<any>(`${this.BASE_URL}/product`);
    console.log('Que la data', data);
    return data;
  }
  getProduct(id:string): Observable<Product>{
    return this.http.get<Product>(`${this.BASE_URL}/product/${id}`);
  }
  createProduct(product:Product): Observable<Product>{
    return this.http.post<Product>(`${this.BASE_URL}/product/create`, product);
  }
  deleteProduct(id: string): Observable<Product>{
    return this.http.delete<Product>(`${this.BASE_URL}/product/delete?productID=${id}`);
  }
  updateProduct(id:string, product:Product): Observable<Product> {
    return this.http.put<Product>(`${this.BASE_URL}/product/update?productID=${id}`, product);
  }

}
