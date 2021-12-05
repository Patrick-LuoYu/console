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
  // List
  STATEFULSET_EMPTY_DESC: 'Please create a StatefulSet.',
  // List > Edit Information
  // List > Edit YAML
  // List > Delete
  // List > Create
  // List > Create > Basic Information
  // List > Create > Pod Settings
  POD_SETTINGS: '容器組設置',
  POD_REPLICAS: '容器組副本數量',
  ONDELETE: '刪除容器組時更新',
  ONDELETE_DESC: '控制器不會自動更新容器組，將會在容器組被手動刪除時，更新並替換容器組實例。',
  PARTITION_ORDINAL: 'Ordinal for Dividing Pod Replicas',
  PARTITION_ORDINAL_DESC: 'Set an ordinal to divide the Pod replicas into two groups. When the StatefulSet is updated, only Pod replicas with an ordinal greater than or equal to the value of this parameter are updated.',
  // List > Create > Volume Settings > Volume Templates
  ADD_VOLUME_TEMPLATE_DESC: '添加儲存卷模板，儲存卷的生命週期將隨容器組的生命週期存在',
  STATEFULSETS_ADD_VOLUME_TEMPLATE_DESC: '請添加一個儲存卷模板',
  VOLUME_CAPACITY_TCAP: '儲存卷容量',
  MOUNT_PATH: '掛載路徑',
  MOUNT_VOLUME_OR_TEMPLATE: '請至少添加一個儲存卷或儲存卷模板',
  VOLUME_TEMPLATES: '儲存卷模板',
  // List > Create > Advanced Settings
  // List > Create > Cluster Differences
  SERVICE_PORT: '服務端口',
  SERVICE_PORT_VALUE: '服務端口：{value}',
  // List > Create > Cluster Differences (Displayed after you add a volume template)
  VOLUME_TEMPLATE_SETTINGS: '儲存卷模板設置',
  CLUSTER_VOLUME_DIFF_DESC: '可針對不同集群，選擇不同的儲存類型'
};