/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

module.exports = {
  // Banner
  SERVICE_DESC:
    'Services provide an abstract way to expose applications running on a Pod as network services.',
  // List
  SERVICE_EMPTY_DESC: 'Please create a Service.',
  UNKNOWN: 'Unknown',
  // List > Edit YAML
  // List > Edit Service
  UNKNOWN_SERVICE_TYPE: 'Unknown Service Type',
  // List > Delete
  // Create
  INTERNAL_ACCESS_MODE: 'Internal Access Mode',
  CREATE_SERVICE: 'Create Service',
  // Create > Basic Information
  SERVICE_NAME_DESC:
    'The name can contain only lowercase letters, numbers, and hyphens (-), must start with a lowercase letter, and must end with a lowercase letter or number. The maximum length is 63 characters.',
  // Create > Service Settings
  VIRTUAL_IP_TITLE: 'Virtual IP Address',
  INTERNAL_DOMAIN_NAME: 'Internal Domain Name',
  CONTAINER_PORT: 'Container Port',
  INVALID_PORT: 'Invalid port.',
  PORT_EMPTY: 'Please set at least one port.',
  ENTER_SELECTOR_TIP: 'Please set a workload selector.',
  Ports: 'Ports',
  SPECIFY_WORKLOAD: 'Specify Workload',
  SELECT_WORKLOAD_DESC: 'Use labels of a workload as the selector.',
  VIRTUAL_IP_DESC:
    'A virtual IP address is assigned to the Service. The Service can be accessed within the cluster through the virtual IP address.',
  INTERNAL_DOMAIN_NAME_DESC:
    'No IP address is assigned to the Service. The Service can be accessed within the cluster through the cluster DNS mechanism.',
  SERVICE_PORTS_DESC: 'Set the container ports and Service ports.',
  NO_WORKLOAD_MATCH_SELECTOR: 'The current selector matches no workload.',
  WORKLOADS_MATCH_SELECTOR_SI:
    'The current selector ({selector}) matches {count} workload.',
  WORKLOADS_MATCH_SELECTOR_PL:
    'The current selector ({selector}) matches {count} workloads.',
  WORKLOAD_SELECTOR: 'Workload Selector',
  // Create > Advanced Settings
  STICKY_SESSION: 'Sticky Session',
  MAXIMUM_STICKINESS_DURATION: 'Maximum Stickiness Duration (s)',
  STICKY_SESSION_DESC:
    'Set the system to forward all requests from the same client to the same Pod within a specified duration.',
  SERVICE_EXTERNAL_ACCESS_DESC:
    'Set the method for accessing the Service from outside the cluster.',
  ACCESS_NODEPORT_TIP: 'Use a port of the cluster nodes to access the Service.',
  ACCESS_LOADBALANCER_TIP: 'Use a load balancer to access the Service.',
}
