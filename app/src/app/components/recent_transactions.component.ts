// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-recent_transactions',
  templateUrl: './recent_transactions.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class recent_transactionsComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_iT45l6ubttfGlRtq(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_iT45l6ubttfGlRtq(bh) {
    try {
      bh = this.sd_24yGIaxnCe3JxafU(bh);
      //appendnew_next_sd_iT45l6ubttfGlRtq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iT45l6ubttfGlRtq');
    }
  }

  addNewTransaction(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_hyAjrLsl5KAzl6ZB(bh);
      //appendnew_next_addNewTransaction
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ss8AmJqajMm8fhw0');
    }
  }
  //appendnew_flow_recent_transactionsComponent_start

  sd_24yGIaxnCe3JxafU(bh) {
    try {
      const page = this.page;
      bh.local.data = {
        total_budget: 10000,
        remaining: 6560,
        expense: {
          Food: 650,
          Utilities: 590,
          Entertainment: 800,
          Cloths: 1000,
          Others: 400,
        },
      };

      const expenseArray = Object.entries(bh.local.data.expense).map(
        ([name, value]) => ({ name, value })
      );

      bh.local.transactions = expenseArray;

      bh = this.sd_KfLFa1L6gMzbHq99(bh);
      //appendnew_next_sd_24yGIaxnCe3JxafU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_24yGIaxnCe3JxafU');
    }
  }

  sd_KfLFa1L6gMzbHq99(bh) {
    try {
      this.page.transactions = bh.local.transactions;
      //appendnew_next_sd_KfLFa1L6gMzbHq99
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KfLFa1L6gMzbHq99');
    }
  }

  sd_hyAjrLsl5KAzl6ZB(bh) {
    try {
      const page = this.page;
      if (page.newName && page.newValue) {
        bh.local.newTransaction = {
          name: page.newName,
          value: page.newValue,
        };
        page.transactions.unshift(bh.local.newTransaction);
        page.newValue = null;
        page.newName = null;
      }

      //appendnew_next_sd_hyAjrLsl5KAzl6ZB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hyAjrLsl5KAzl6ZB');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    throw e;
  }
  //appendnew_flow_recent_transactionsComponent_Catch
}
