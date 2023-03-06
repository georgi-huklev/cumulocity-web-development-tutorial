import { Injectable } from '@angular/core';
import { NavigatorNode, NavigatorNodeFactory } from '@c8y/ngx-components';

@Injectable()
export class NamedDashboardNavigationFactory implements NavigatorNodeFactory {
  private readonly DASHBOARD_NAVIGATOR_NODE = new NavigatorNode({
    label: 'Dashboard',
    icon: 'robot',
    path: 'named-dashboard',
    priority: 50,
  });

  get() {
    return this.DASHBOARD_NAVIGATOR_NODE;
  }
}
