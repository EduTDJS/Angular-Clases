import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Types } from 'src/app/models/Types';
import { Type } from 'src/app/models/Type';
import { Transaccion } from 'src/app/models/Transaccion';
import { AppService } from 'src/app/app.service';

@Injectable()
export class PresupuestoService {
  public form: FormGroup;

  public types: Type[] = [
    {
      name: "Transporte", type: Types.OUTCOME
    },
    {
      name: "Nomina", type: Types.INCOME
    }
  ]

  constructor(private formBuilder: FormBuilder, private appSrv: AppService) {
    this.form = this.formBuilder.group({
      amount: ['', [Validators.required, Validators.min(10)]],
      date: [''],
      type: ['']
    })
  }


  public saveTransaccion() {

    const tran: Transaccion = {
      id: this.getId(),
      amount: this.form.get("amount")?.value,
      date: this.form.get("date")?.value,
      type: this.form.get("type")?.value
    };

    this.appSrv.addTransaccion(tran);
  }
  


  public getTypes(type: Types): Type[] {
    return this.types.filter(t => t.type == type)
  }

  private getId(): string{
    return Math.random().toString().substring(2)
  }

  get amount(){
    return this.form.get("amount")
  }

  get date(){
    return this.form.get("date")
  }

  get type(){
    return this.form.get("type")
  }
}
