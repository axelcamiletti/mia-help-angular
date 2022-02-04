import { Inject, Injectable } from '@angular/core';
import { MiaHelp } from '../entities/mia_help';
import { MiaBaseCrudHttpService, MiaCoreConfig, MIA_CORE_PROVIDER } from '@agencycoda/mia-core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiaHelpService extends MiaBaseCrudHttpService<MiaHelp> {

  constructor(
    @Inject(MIA_CORE_PROVIDER) protected config: MiaCoreConfig,
    protected http: HttpClient,
  ) {
    super(config, http);
    this.basePathUrl = config.baseUrl + 'mia-help';
  }
 
}