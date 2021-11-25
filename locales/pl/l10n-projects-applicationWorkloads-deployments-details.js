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
  // More > Roll Back
  ROLL_BACK: 'Roll Back',
  CURRENT_REVISION_RECORD: 'Current Revision Record',
  TARGET_REVISION_EMPTY_DESC: 'Please select a target revision record.',
  TARGET_REVISION_RECORD: 'Target Revision Record',
  // More > Edit Autoscaling
  EDIT_AUTOSCALING: 'Edit Autoscaling',
  TARGET_CPU_USAGE_UNIT: 'Target CPU Usage (%)',
  AUTOSCALING: 'Autoscaling',
  RESOURCE_NAME: 'Resource Name',
  TARGET_CPU_USAGE_DESC: 'The system automatically decreases/increases the number of Pod replicas when the actual CPU usage is higher/lower than the target.',
  TARGET_MEMORY_USAGE_DESC: 'The system automatically decreases/increases the number of Pod replicas when the actual memory usage is higher/lower than the target.',
  MINIMUM_REPLICAS_DESC: 'Set the minimum number of Pod replicas allowed. The default value is 1.',
  MAXIMUM_REPLICAS_DESC: 'Set the maximum number of Pod replicas allowed. The default value is 1.',
  TARGET_MEMORY_USAGE_UNIT: 'Target Memory Usage (MiB)',
  MINIMUM_REPLICAS: 'Minimum Replicas',
  MAXIMUM_REPLICAS: 'Maximum Replicas',
  // More > Edit Settings > Update Strategy
  EDIT_SETTINGS: 'Edit Settings',
  // More > Edit Settings > Containers
  // More > Edit Settings > Volumes
  // More > Edit Settings > Volumes > Mount Volume
  // More > Edit Settings > Volumes > Mount ConfigMap or Secret
  // More > Edit Settings > Pod Scheduling Rules
  RULE_NOT_COMPLETE: 'Please set a complete rule.',
  // Details
  // Revision Records
  CONFIG_FILE: 'Configuration File',
  // Resource Status
  REPLICAS_CURRENT: 'Current',
  // Metadata
  // Monitoring
  // Monitoring > View All Replicas (visible only when replicas > 5)
  VIEW_ALL_REPLICAS: 'View All Replicas',
  SHOW_SELECTED_ONLY: 'Show Selected Only',
  MONITORING_SELECT_LIMIT_MSG: 'A maximum of 10 resources can be selected.',
  // Environment Variables
  ENVIRONMENT_VARIABLE_PL: 'Environment Variables'
};