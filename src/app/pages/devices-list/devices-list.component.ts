import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DeviceService } from '../../core/services/device.service';
import { AlertsService } from '../../core/services/alerts.service';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrl: './devices-list.component.css'
})
export class DevicesListComponent implements OnInit {
  @Input() devicesList = new Array<any>();
  deviceForm!: FormGroup;
  pagedDevices: any[] = [];
  toggle = false;
  page = 1;
  pageSize = 5;
  totalPages = 0;
  sortDirection: 'asc' | 'desc' = 'asc';
  isDropdownDeviceOpen = false;
  selectedDevice: any;

  constructor(private alertService: AlertsService, private deviceService: DeviceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.getAllDevices();
    this.setPage(this.page)
  }

  initForm() {
    this.deviceForm = this.fb.group({
      id: new FormControl(''),
      deviceName: new FormControl('', Validators.required),
      deviceType: new FormControl('', Validators.required),
      acquisitionDate: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    });
  }

  getAllDevices() {
    this.deviceService.getAll().subscribe({
      next: (data) => {
        this.devicesList = data;
        this.totalPages = this.devicesList.length / this.pageSize;
      },
      error: (err) => {
        this.alertService.showWarning('Error en el backend');
      }
    })
  }

  setPage(page: number): void {
    this.page = page;
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize - 1, this.devicesList.length - 1);
    this.pagedDevices = this.devicesList.slice(startIndex, endIndex + 1);
  }

  getNewPage(action: any) {
    if (action == 'prev') {
      if (this.page > 1) {
        this.page--;
      }
    } else if (action == 'next') {
      if (this.page < (this.totalPages)) {
        this.page++;
      }
    }
    this.setPage(this.page);
  }

  uploadDeviceData(device: any) {
    this.deviceForm.patchValue(device);
  }

  getById(deviceId: any) {
    this.deviceService.getById(deviceId).subscribe({
      next: (data) => {
        this.deviceForm.patchValue(data);
      },
      error: (err) => {
        this.alertService.showWarning('Ha ocurrido un error en el backend al encontrar el dispositivo');
      }
    });
  }

  deleteDevice(deviceId: any) {
    this.deviceService.deleteDevice(deviceId).subscribe({
      next: (data) => {
        this.ngOnInit();
        this.getAllDevices();
        this.setPage(this.page);
        this.alertService.showSuccess('Se ha eliminado correctamente');
      },
      error: (err) => {
        this.alertService.showWarning('Ha ocurrido un error en el backend al actualizar el dispositivo');
      }
    });
  }

  uploadDataDevice(device: any, toggle: boolean) {
    this.toggle = toggle;
    this.deviceForm.patchValue(device);
  }

  updateDevice(deviceId: any) {
    if (this.deviceForm.valid) {
      this.deviceService.updateDevice(deviceId, this.deviceForm.value).subscribe({
        next: (data) => {
          this.alertService.showSuccess('Se ha creado el actualizado correctamente');
        },
        error: (err) => {
          this.alertService.showWarning('Ha ocurrido un error en el backend al actualizar el dispositivo');
        }
      })
    } else {
      this.alertService.showWarning('Ha ocurrido un error en el backend');
    }
  }

  sortDevicesByDate() {
    const direction = this.sortDirection === 'asc' ? 1 : -1;
    this.devicesList.sort((a, b) => {
      const dateA = new Date(a.acquisitionDate).getTime();
      const dateB = new Date(b.acquisitionDate).getTime();
      return direction * (dateA - dateB);
    });
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.setPage(this.page);
  }

  selectDevice(device: any) {
    this.selectedDevice = device;
    this.uploadDeviceData(device);
  }

  toggleDropdownDevices() {
    this.isDropdownDeviceOpen = !this.isDropdownDeviceOpen;
  }
}
