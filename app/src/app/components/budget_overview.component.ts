// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-budget_overview',
  templateUrl: './budget_overview.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class budget_overviewComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_EbDEvhVGyw32j667(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_EbDEvhVGyw32j667(bh) {
    try {
      bh = this.sd_1st4B0IDnz3urJYi(bh);
      //appendnew_next_sd_EbDEvhVGyw32j667
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EbDEvhVGyw32j667');
    }
  }

  //appendnew_flow_budget_overviewComponent_start

  sd_1st4B0IDnz3urJYi(bh) {
    try {
      const page = this.page;
      bh.local.data = {
        total_budget: 10000,
        expense: {
          Food: 650,
          Utilities: 590,
          Entertainment: 800,
          Cloths: 1000,
          Others: 400,
        },
      };
      page.barChartLabels = Object.keys(bh.local.data.expense);

      Object.values(bh.local.data.expense);
      page.barChartData = [
        { data: Object.values(bh.local.data.expense), label: 'Amount' },
      ];

      bh.totalexpense = Object.values(bh.local.data.expense).reduce(
        (sum: number, item: number) => {
          return sum + item;
        },
        0
      );

      bh.local.remaining = bh.local.data.total_budget - bh.totalexpense;
      bh = this.sd_jX0kiSDKrKbUktAD(bh);
      //appendnew_next_sd_1st4B0IDnz3urJYi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1st4B0IDnz3urJYi');
    }
  }

  sd_jX0kiSDKrKbUktAD(bh) {
    try {
      this.page.barChartLabels = this.page.barChartLabels;
      this.page.barChartData = this.page.barChartData;
      this.page.expenseData = bh.local.data;
      this.page.remaining = bh.local.remaining;
      //appendnew_next_sd_jX0kiSDKrKbUktAD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jX0kiSDKrKbUktAD');
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
  //appendnew_flow_budget_overviewComponent_Catch
}
