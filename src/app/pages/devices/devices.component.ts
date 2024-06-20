import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DeviceService } from '../../core/services/device.service';
import { AlertsService } from '../../core/services/alerts.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.css'
})
export class DevicesComponent implements OnInit {
  deviceForm!: FormGroup;
  deviceFound: any;
  showAlert = false;

  constructor(private alertService: AlertsService, private deviceService: DeviceService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.deviceForm = this.fb.group({
      id: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      deviceName: new FormControl('', Validators.required),
      deviceType: new FormControl('', Validators.required),
      acquisitionDate: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]),
      status: new FormControl('', Validators.required),
    });
  }

  createDevices() {
    if (this.deviceForm.valid) {
      this.deviceService.newDevice(this.deviceForm.value).subscribe({
        next: (data) => {
          this.alertService.showSuccess('¡Se ha creado el dispositivo correctamente!');
          this.ngOnInit();
          this.closeModal();
        },
        error: (err) => {
          this.alertService.showWarning('Ha ocurrido un error en el backend al crear el dispositivo');
        }
      })
    } else {
      this.alertService.showWarning('Por favor diligencia correctamente el formulario');
    }
  }

  closeModal(): void {
    const modal = document.getElementById('staticBackdropp');
    modal?.classList.remove('show');
    modal?.setAttribute('aria-hidden', 'true');
    modal?.setAttribute('style', 'display: none');

    const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
    modalBackdrop.parentNode?.removeChild(modalBackdrop);
  }

  toggleAlert() {
    this.showAlert = !this.showAlert;
  }
}
