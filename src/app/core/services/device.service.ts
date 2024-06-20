import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  api = 'http://localhost:3000/devices/';

  constructor(private http: HttpClient) { }

  newDevice(device: any){
    return this.http.post<any>(this.api, device, {
      observe: 'response'
    });
  }

  getById(deviceId: any): Observable<any>{
    return this.http.get<any>(this.api + deviceId);
  }

  deleteDevice(deviceId: any){
    return this.http.delete<any>(this.api + deviceId);
  }

  getAll(){
    return this.http.get<any>(this.api);
  }

  updateDevice(deviceId: any, device: any){
    return this.http.put<any>(this.api + deviceId, device, {
      observe: 'response'
    });
  }
}
