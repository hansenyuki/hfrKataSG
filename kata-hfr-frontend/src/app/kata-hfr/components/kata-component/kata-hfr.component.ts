import { Component, Inject, OnInit } from '@angular/core';
import { KATA_HFR_PROVIDER, KataHfrProviderInterface } from '../../kata-hfr.provider.interface';
import { take } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kata-hfr',
  templateUrl: './kata-hfr.component.html',
  styleUrls: ['./kata-hfr.component.scss']
})
export class KataHfrComponent implements OnInit {
  
  resultat: string;
  form: FormGroup;

  constructor(@Inject(KATA_HFR_PROVIDER) private readonly kataHfrProvider: KataHfrProviderInterface, private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.form = this.fb.group({
      chaineSaisie: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }
  
  onSubmit() {
    const chaineSaisie = this.form.value.chaineSaisie;
    this.kataHfrProvider.getChaine(chaineSaisie).pipe(take(1)).subscribe(result => {
      this.resultat = result;
    });
  }

  get chaineSaisie() { return this.form.get('chaineSaisie'); }
  
  clearData(): void {
    this.form.reset();
    this.resultat = '';
  }
}
