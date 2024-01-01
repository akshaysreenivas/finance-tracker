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
  selector: 'bh-dashboard',
  templateUrl: './dashboard.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dashboardComponent {
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
      this.sd_PXv4SeCFfcpDBrL7(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_PXv4SeCFfcpDBrL7(bh) {
    try {
      bh = this.sd_mSp1WXFQXYGoNfHq(bh);
      //appendnew_next_sd_PXv4SeCFfcpDBrL7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PXv4SeCFfcpDBrL7');
    }
  }

  //appendnew_flow_dashboardComponent_start

  sd_mSp1WXFQXYGoNfHq(bh) {
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

      bh = this.sd_kv3TXgwlxSpcUi7m(bh);
      //appendnew_next_sd_mSp1WXFQXYGoNfHq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mSp1WXFQXYGoNfHq');
    }
  }

  sd_kv3TXgwlxSpcUi7m(bh) {
    try {
      this.page.expenseData = bh.local.data;
      //appendnew_next_sd_kv3TXgwlxSpcUi7m
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kv3TXgwlxSpcUi7m');
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
  //appendnew_flow_dashboardComponent_Catch
}
