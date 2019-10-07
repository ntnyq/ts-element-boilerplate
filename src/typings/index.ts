import { RouteConfig } from 'vue-router'

/**
 *
 */
export interface AppRouteConfig extends RouteConfig {
  readonly hidden?: boolean;
  children?: AppRouteConfig[]
}
