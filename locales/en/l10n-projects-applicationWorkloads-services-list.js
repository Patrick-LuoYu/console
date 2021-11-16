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
  SERVICE_TYPES_Q: 'What Service types does KubeSphere support?',
  SERVICE_TYPES_A:
    'KubeSphere supports stateless Services and stateful Services. Pod replicas in a stateless Service share the same volume, while each Pod replica in a stateful Service has an independent volume.',
  SCENARIOS_FOR_SERVICES_Q:
    'What are the use cases of stateless Services and stateful Services?',
  SCENARIOS_FOR_SERVICES_A:
    'Stateless Services applies to scenarios where data persistence is not required, such as Nginx and Tomcat. Stateful Services applies to scenarios where data persistence is required, such as MySQL databases, Kafka, and Zookeeper.',

  // Service List
  SERVICE_TYPE: 'Service Type',

  // List > Create
  CREATE_SERVICE_DESC: 'Select a Service creation method.',
  SELECT_SERVICE_TYPE_DESC:
    'Create a stateless or stateful Service, or map a Service to an external Service.',
  SERVICE_FROM_CODE: 'Create Service from Source Code',
  SERVICE_FROM_ARTIFACT: 'Create Service from Artifact',
  SERVICE_FROM_CODE_DESC:
    'Build an image from existing source code and deploy the image.',
  SERVICE_FROM_ARTIFACT_DESC:
    'Build an image from an existing artifact and deploy the image.',
  CUSTOMIZE_SERVICE: 'Customize Service',
  CUSTOMIZE_SERVICE_DESC:
    'Specify workloads or edit a YAML configuration file to create a Service.',

  // List > Create > Select Service Type > Stateless Service
  // List > Create > Select Service Type > Stateful Service
  // List > Create > Select Service Type > External Service
  CREATE_EXTERNAL_SERVICE_DESC:
    'Create a Service and map it to an external Service.',
  CREATE_EXTERNAL_SERVICE: 'Create External Service',
  EXTERNAL_SERVICE_ADDRESS_EMPTY_DESC:
    'Please enter the domain name of an external Service.',
  EXTERNAL_SERVICE_ADDRESS: 'External Service Address',
  EXTERNAL_SERVICE_ADDRESS_DESC:
    'Enter the domain name of an external Service.',

  // List > Create > Create Service from Source Code
  JAVA: 'Java',
  NODEJS: 'Node.js',
  PYTHON: 'Python',
  LANGUAGE_TYPE_VALUE: 'Language Type: {value}',

  // List > Create > Create Service from Source Code > Java > Basic Information
  // List > Create > Create Service from Source Code > Java > Build Settings
  // List > Create > Create Service from Source Code > Java > Pod Settings
  // List > Create > Create Service from Source Code > Java > Volume Settings
  // List > Create > Create Service from Source Code > Java > Advanced Settings
  // List > Create > Create Service from Source Code > Node.js > Basic Information
  // List > Create > Create Service from Source Code > Node.js > Build Settings
  // List > Create > Create Service from Source Code > Node.js > Pod Settings
  CONTAINER_SETTINGS: 'Container Settings',

  // List > Create > Create Service from Source Code > Node.js > Volume Settings
  // List > Create > Create Service from Source Code > Node.js > Advanced Settings
  // List > Create > Create Service from Source Code > Python > Basic Information
  // List > Create > Create Service from Source Code > Python > Build Settings
  // List > Create > Create Service from Source Code > Python > Pod Settings
  // List > Create > Create Service from Source Code > Python > Volume Settings
  // List > Create > Create Service from Source Code > Python > Advanced Settings
  // List > Create > Create Service from Artifact
  ARTIFACT_TYPE_VALUE: 'Artifact Type: {value}',

  // List > Create > Create Service from Artifact > JAR > Basic Information
  // List > Create > Create Service from Artifact > JAR > Build Settings
  // List > Create > Create Service from Artifact > JAR > Pod Settings
  // List > Create > Create Service from Artifact > JAR > Volume Settings
  // List > Create > Create Service from Artifact > JAR > Advanced Settings
  // List > Create > Create Service from Artifact > WAR > Basic Information
  // List > Create > Create Service from Artifact > WAR > Build Settings
  // List > Create > Create Service from Artifact > WAR > Pod Settings
  // List > Create > Create Service from Artifact > WAR > Volume Settings
  // List > Create > Create Service from Artifact > WAR > Advanced Settings

  // List > Create > Create Service from Artifact > Binary > Basic Information
  BINARY: 'Binary',

  // List > Create > Create Service from Artifact > Binary > Build Settings
  // List > Create > Create Service from Artifact > Binary > Pod Settings
  // List > Create > Create Service from Artifact > Binary > Volume Settings
  // List > Create > Create Service from Artifact > Binary > Advanced Settings

  // List > Create > Customize Service > Specify Workload > Basic Information
  SPECIFY_WORKLOAD_TO_CREATE_SERVICE: 'Specify Workload to Create Service',
  EDIT_YAML_TO_CREATE_SERVICE: 'Edit YAML to Create Service',
  SPECIFY_WORKLOAD_DESC:
    'Create a Service by using one or more existing workloads.',

  // List > Create > Customize Service > Specify Workload > Service Settings
  // List > Create > Customize Service > Specify Workload > Advanced Settings
  // List > Edit Information
  // List > Edit YAML
  // List > Edit Service
  // List > Edit External Access

  // List > Delete
  NO_SERVICE_RELATED_RESOURCE_DESC:
    'No resource related to the Service is found.',
  DELETE_SERVICE_DESC:
    'You are about to delete the service(s) {resource}. Please confirm whether to delete the associated resource?',
  DELETE_SERVICE_DESC_PL:
    'You are about to delete the Services {resource}.<br/>Do you want to also delete the following resources related to the Services?',
  DELETE_SERVICE_DESC_SI:
    'You are about to delete the Service {resource}.<br/>Do you want to also delete the following resource related to the Service?',

  // Service Topology
  SERVICE_TOPOLOGY: 'Service Topology',
  AUTO_REFRESH: 'Auto Refresh',
  POD_COUNT_VALUE: 'Pods: {value}',
}
