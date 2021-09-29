import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgGridAddRowStatusBarComponent } from './add-row-status-bar.component';

describe('AgGridAddRowStatusBarComponent', () => {
  let component: AgGridAddRowStatusBarComponent;
  let fixture: ComponentFixture<AgGridAddRowStatusBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgGridAddRowStatusBarComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridAddRowStatusBarComponent);
    component = fixture.componentInstance;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const params: any = {
      api: {
        applyTransaction: () => { return {}; }
      },
      columnApi: {
        getAllColumns: () => ([{ getColId: () => ('') }])
      }
    }
    component.agInit(params);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke onAddRow', () => {
    const onAddRowSpy = jest.spyOn(component, 'onAddRow');
    const componentElm = fixture.debugElement.nativeElement;
    const addButtonElm = componentElm.querySelector('span.material-icons');
    addButtonElm.click();

    expect(onAddRowSpy).toBeCalled();
  });

});
