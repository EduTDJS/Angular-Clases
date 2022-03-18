import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Types } from 'src/app/models/Types';
import { Type } from 'src/app/models/Type';

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

  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      amount: [''],
      date: [''],
      type: ['']
    })
  }
  public saveTransaccion(type: Types){
    console.log(this.form.getRawValue())
  }

  public getTypes(type: Types): Type[] {
    return this.types.filter(t => t.type == type)
  }
}
