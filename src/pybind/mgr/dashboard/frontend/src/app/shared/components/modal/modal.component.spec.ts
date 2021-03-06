import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { configureTestBed } from '../../../../testing/unit-test-helper';
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  configureTestBed({
    imports: [ModalModule.forRoot()],
    declarations: [ModalComponent]
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the hide callback function', () => {
    spyOn(component.hide, 'emit');
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.hide.emit).toHaveBeenCalled();
  });

  it('should hide the modal', () => {
    component.modalRef = new BsModalRef();
    spyOn(component.modalRef, 'hide');
    component.close();
    expect(component.modalRef.hide).toHaveBeenCalled();
  });
});
