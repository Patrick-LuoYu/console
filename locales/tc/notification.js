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
  WORKSPACE: '企業空間',
  WORKSPACE_PL: 'Workspaces',
  WORKSPACE_LOW: 'workspace',
  Workspaces: '企業空間',
  WORKSPACE_SETTINGS: '企業空間設置',
  'Workspace Settings': '企業空間設置',
  'Workspace Members': '企業空間成員',
  WORKSPACE_MEMBER: 'Workspace Member',
  WORKSPACE_MEMBER_PL: 'Workspace Members',
  WORKSPACE_MEMBER_TCAP: 'Workspace member',
  WORKSPACE_MEMBER_TCAP_PL: 'Workspace members',
  WORKSPACE_ROLE_PL: '企業角色',
  'Workspace Role': '企業角色',
  CREATE_WORKSPACE_ROLE: '創建企業角色',
  'Edit Workspace Role': '編輯企業角色',
  'Workspace Name': '企業空間名稱',
  'Workspace Logo': '企業空間 Logo',
  'Workspaces Manager': '企業空間管理員',
  CREATE_WORKSPACE: '創建企業空間',
  DEPARTMENT_MANAGEMENT: 'Department Management',
  SET_DEPARTMENTS: 'Set Departments',
  DEPARTMENT_PL: '企業組織',
  'Maintain Organization': '維護組織結構',

  devops: 'DevOps 项目',

  'Project Number': '項目數量',
  'DevOps Project Number': 'DevOps 项目數量',
  EDIT_QUOTAS: '編輯配額',

  'View Workspace': '進入企業空間',
  DELETE_WORKSPACE: '刪除企業空間',

  EDIT_WORKSPACE_QUOTAS: 'Edit Workspace Quotas',
  'Edit Workspace Quota': '企業空間配額',

  WORKSPACE_INFO: '企業空間資訊',

  'Manage Organizations': '管理組織結構',

  'Involved Projects': '參與項目',
  'Created Projects': '創建的項目',
  'Workspace name exists': '企業空間名稱已存在',
  'The current name is not applicable.': '目前名稱不可用',

  'Cluster Authorization Info': '集群授權資訊',
  WS_NETWORK_ISOLATION: '企業空間網路隔離',

  NO_AVAILABLE_CLUSTER: '暫時沒有可用集群',

  'All members': '全部成員',
  Assigned: '已分配',

  WORKSPACE_OVERVIEW_DESC:
    '企業空間為 KubeSphere 提供了安全隔離的、具有訪問權限控制的工作平台。這裡您可以看到目前企業空間内資源運行的概況。',

  WORKSPACE_DESC:
    '企業空間是一個組織您的項目和 DevOps 项目、管理資源訪問權限以及在團隊内部共享資源等的邏輯單元，可以作為團隊工作的獨立工作空間。',

  WORKSPACE_SEARCH_PLACEHOLDER: '請輸入企業空間名稱進行查找',

  WORKSPACE_CREATE_DESC:
    '企業空間是一個組織您的項目和 DevOps 项目、管理資源訪問權限以及在團隊内部共享資源等的邏輯單元，可以作為團隊工作的獨立工作空間。',

  WORKSPACE_NAME_DESC:
    '請盡量保持名稱簡短，比如用企業名稱的縮寫或者大家經常的稱呼，無需使用企業的完整名稱或者營業執照上的註冊名稱。',

  WORKSPACE_ROLE_DESC: '企業角色定義了在目前企業空間下用戶所擁有的權限。',
  WORKSPACE_ROLE_EMPTY_DESC: 'Please create a workspace role.',
  WORKSPACE_LOGO_PLACEHOLDER:
    '企業標誌尺寸必須小於 200px X 200px，支持 png、jpg 格式。建議從上傳透明背景的 png 格式圖片以達到最佳顯示效果。',

  'Remove from Workspace': '從企業空間移除',
  WORKSPACE_NAME_EMPTY_DESC: '請輸入企業空間名稱',

  NO_WORKSPACE_TIP:
    '您的帳號目前不屬於任何企業空間，請您創建一個企業空間或者聯繫管理員邀請您到其企業空間内進行工作',

  SEARCH_WORKSPACE_TIP: '請輸入企業名稱進行查找',

  WORKSPACE_MEMBER_DESC:
    'Workspace members can view or manage workspace resources. You can manage members and control their permissions in the workspace.',
  INVITE_WORKSPACE_MEMBER_DESC: 'You can invite members to the workspace.',

  DELETE_WORKSPACE_TIP:
    '確定刪除企業空間 <strong> {resource} </strong> ？ 刪除後將無法恢復，企業空間下的資源也同時會被銷毀。',

  DELETE_WORKSPACE_DESC: '刪除後將無法恢復，企業空間下的資源也同時會被銷毀。',

  WORKSPACE_BASE_INFO_Q1: '如何為企業空間申請更多的集群？',
  WORKSPACE_BASE_INFO_A1:
    'Contact the platform or cluster administrator to apply for more clusters.',
  WORKSPACE_BASE_INFO_Q2: '如何定義網路策略？',
  WORKSPACE_BASE_INFO_A2: '',

  WORKSPACE_CLUSTERS_DESC: '集群資訊是企業空間對集群資源的使用情況的統計',

  HOW_TO_APPLY_MORE_CLUSTER_Q: '如何為企業空間申請更多的集群？',
  HOW_TO_APPLY_MORE_CLUSTER_A:
    'Contact the platform or cluster administrator to apply for more clusters.',

  NO_CLUSTER_AVAILABLE_DESC:
    '暫無可用的公開集群，請在企業空間創建完畢後，向平台管理員或集群管理員申請集群的授權。',
  WORKSPACE_NO_CLUSTER_TIP:
    '您需要聯繫平台管理員或者集群管理員為企業空間授權集群的訪問權限。',

  DEPARTMENT_MANAGEMENT_DESC:
    'A department in a workspace is a logical unit used for permission control. You can set a workspace role, multiple project roles, and multiple DevOps project roles in a department, and assign users to the department to control user permissions in batches.',
  DEPARTMENT_EMPTY_DESC: 'No Department Available',
  WORKSPACE_GROUP_USER_EMPTY_DESC: '暫時沒有可分配的成員',
  WORKSPACE_QUOTAS_DESC:
    'Workspace quotas are used to control the total resource usage of all projects and DevOps projects in a workspace.',

  DELETE_WORKSPACE_PROJECTS_DESC: '刪除該企業空間關聯項目',
  DELETE_WORDSPACE_RELATED_RESOURCES_DESC: '刪除該企業空間關聯項目',

  // App Repositories
  ACCESS_KEY_ID: 'Access Key ID',
  SECRET_ACCESS_KEY: 'Secret Access Key',

  // Basic Information
  WORKSPACE_BASIC_INFO_DESC:
    'Basic information provides the overview of the workspace. You can view the basic information of the workspace.',
  SURE_TO_DELETE_WORKSPACE: 'Are you sure you want to delete the workspace?',
  ON: 'On',
  OFF: 'Off',
  ONLINE: 'Online',
  OFFLINE: 'Offline',
  NETWORK_POLICY_UNINSATLLED_DESC:
    'The network policy component is not installed in this cluster.',
  WS_MEMBER_SCAP: 'Workspace member',
  WS_MEMBER_SCAP_PL: 'Workspace members',

  // Quota Management
  QUOTA_MANAGEMENT: 'Quota Management',
  RESOURCE_LIMIT: 'Resource limit',
  USED_PERCENT: 'Used: {percent}%',

  // Worksapce Members
  CHANGE_MEMBER_ROLE: 'Change Member Role',
  INVITE_MEMBER: 'Invite Member',
  INVITE: 'Invite',
  WORKSPACE_MEMBERS: 'Workspace Members',

  // Department Management
  'Workspace Groups': 'Department Mangement',
  NOT_ASSIGNED_TCAP: 'Not Assigned',
  ASSIGNED: 'Assigned',
  WORKSPACE_ROLE: 'Workspace Role',
  WORKSPACE_MEMBER_EMPTY_DESC: 'Please invite a user to the workspace.',
  PROJECT_VALUE: 'Project: {value}',
  PROJECT_ROLE_VALUE: 'Project role: {value}',
  DEVOPS_VALUE: 'DevOps project: {value}',
  DEVOPS_PROJECT_ROLES_VALUE: 'DevOps project role: {value}',

  // Workspace Members > Details
  REMOVE_MEMBER_PL: 'Remove Members',
  SELECT_PROJECT_DESC: '選擇一個項目。',
  PROJECT_NOT_SELECT_DESC: '請選擇一個項目。',
  REPLICA_LOW_SI: '副本',
  REPLICA_LOW_PL: '副本',
  Workload: '工作負載',
  WORKLOAD: '工作負載',
  WORKLOAD_PL: '工作負載',
  WORKLOAD_LOW: '工作負載',
  Workloads: '工作負載',
  IMAGE_TIME_SIZE_LAYER: 'Updated {time}',
  IMAGE_TIME_SIZE_LAYER_PL: 'Updated {time}, {size}, {layer} layer',
  IMAGE_TIME_SIZE_LAYER_SI: 'Updated {time}, {size}, {layer} layers',
  CPU_REQUEST: 'CPU 預留',
  CPU_LIMIT: 'CPU 限制',
  CPU_REQUEST_SCAP: 'CPU 預留',
  CPU_LIMIT_SCAP: 'CPU 限制',
  MEMORY_REQUEST: '記憶體預留',
  MEMORY_LIMIT: '記憶體限制',
  MEMORY_REQUEST_SCAP: '記憶體預留',
  MEMORY_LIMIT_SCAP: '記憶體限制',
  ADD_PROBE: '添加檢查器',
  LABEL_TYPE: '{label} <span style="{style}">（{type}）</span>',
  SELINUX_CONTEXT: 'SELinux 上下文',
  CAPABILITIES_BETA: '權能（測試中）',
  SYNC_HOST_TIMEZONE: '同步宿主機時區',
  POD_SETTINGS: '容器組設置',
  MOUNT_PATH_EMPTY: '請輸入掛載路徑。',
  CONFIGMAP: '配置字典',
  CONFIGMAP_PL: 'ConfigMaps',
  CONFIGMAPS: 'ConfigMaps',
  CONFIGMAP_LOW: 'ConfigMap',
  DEPLOYMENT_EMPTY_DESC: 'Please create a Deployment.',
  STATEFULSET_EMPTY_DESC: 'Please create a StatefulSet.',
  DAEMONSET_EMPTY_DESC: 'Please create a DaemonSet.',
  JOB_EMPTY_DESC: 'Please create a Job.',
  CRONJOB_EMPTY_DESC: 'Please create a CronJob.',
  SERVICE_TOPOLOGY: 'Service Topology',
  'Service Configuration': '服務配置',

  'Available number of nodes scheduled': '可用節點數',
  'Desired number of nodes scheduled': '期望節點數',
  'Current number of nodes scheduled': '目前節點數',
  VIEW_YAML: '查看 YAML',
  EDIT_YAML: '編輯配置文件',
  YAML_FILE: 'YAML File',
  'Add Labels': '添加標籤',
  EDIT_LABELS: '編輯標籤',
  POD_REPLICAS: '容器組副本數量',
  DEFAULT_RULES: 'Default Rules',
  DEFAULT_RULES_DESC:
    'Schedules the Pod replicas to nodes according to default rules.',
  CONTAINERS: '容器鏡像',
  CONTAINER_IMAGE: '容器鏡像',
  ADD_CONTAINER: '添加容器',
  'Pod Status': '容器組運行狀態',
  'Container Setting': '容器設置',
  'Pods List': '容器組列表',
  POD_SCALE_DESC: '可以彈性擴展容器組實例數量',
  CONTAINER_LOGS: '容器紀錄',
  'Resource Info': '資源資訊',
  'Node Name': '主機名稱',
  POD_IP_ADDRESS: '容器組 IP 地址',
  POD_IP_ADDRESS_SCAP: '容器組 IP 地址',
  NODE_NAME: '主機名稱',
  POD_IP_TCAP: '容器組 IP',
  IMAGE: '鏡像',
  IMAGE_VALUE: '鏡像：{value}',
  IMAGE_ID: '鏡像 ID',
  'Port(s)': '端口',
  Port: '端口',
  EDIT_CONTAINER: '編輯容器',
  NODE_PORTS: '主機端口',
  NODE_PORT_SCAP: 'Node port',
  NODE_PORTS_SCAP: 'Node ports',
  ADD_PORT: '添加端口',
  'target port': '目標端口',
  Environment: '環境變量',
  'Mount point': '掛載點',
  MOUNT_PATH: '掛載路徑',
  'Mount Volume': '掛載儲存卷',
  'Set Mount Path': '設置掛載路徑',
  'Mount Temporary Volume': '掛載臨時儲存卷',
  'Select by Node': '指定節點',
  Mount: '掛載',
  CAPACITY: '容量',
  capacity: '容量',
  VOLUME_CAPACITY_TCAP: '儲存卷容量',
  'Storage Size': '儲存大小',
  'Access Mode': '訪問模式',
  PROVISIONER: '供應者',
  'Volume Source': '儲存卷來源',
  VOLUME_CAPACITY: '儲存卷容量',
  TOTAL_CAPACITY: 'Total capacity',
  Provisioner: '供應者',
  mounted: '已掛載',
  created: '已創建',
  EmptyDir: '臨時儲存卷',
  TEMPORARY_VOLUME: '臨時儲存卷',
  HOSTPATH_VOLUME: 'HostPath 儲存卷',
  'New Volume': '新建儲存卷',
  EXISTING_VOLUME: '已有儲存卷',
  VOLUME_NAME: '儲存卷名稱',
  CLUSTER_DIFF: 'Cluster Differences',
  REPLICA_SCHEDULING_MODE: '部署模式',
  POD_SCHEDULING_RULES: '容器组调度策略',
  CUSTOM_RULES: 'Custom Rules',
  CUSTOM_RULES_DESC:
    'Pod replicas are scheduled to nodes according to user-defined rules.',
  ADD_RULE: '添加部署模式',
  POD_SCHEDULING_RULES_DESC: '您可以为容器組調度指定規則',
  'Instance Status': '實例狀態',

  NO_REQUEST: '不預留',
  NO_LIMIT: '不限制',
  NO_REQUEST_TCAP: '不預留',
  NO_LIMIT_TCAP: '不限制',
  GPU_TYPE: 'GPU Type',
  GPU_TYPE_SCAP: 'GPU type',
  GPU_LIMIT: 'GPU Limit',
  GPU_LIMIT_SCAP: 'GPU limit',
  'Not Limited': '未限制',
  Cost: '占用',
  PROJECT_REMAINING_QUOTAS: '項目剩餘配額',
  WORKSPACE_REMAINING_QUOTAS: '企業空間剩餘配額',
  QUOTA_OVERCOST_TIP: '目前資源占用已超過剩餘配額',
  QOS_CLASS: 'QoS Class',

  'Resource Request': '資源預留',
  'Resource Limit': '資源限制',

  'Resource requests remaining quota': '資源預留剩餘配額',
  'Resource limits remaining quota': '資源限制剩餘配額',

  NO_RESOURCE_LIMIT: '無資源限制',

  'Job Settings': '任務設置',
  STRATEGY_SETTINGS: 'Strategy Settings',
  'CronJob Settings': '定時任務設置',
  'Job Template': '任務模板',

  VOLUME_SETTINGS: '掛載儲存',
  STORAGE_SETTINGS: 'Storage Settings',

  'Add Volume': '添加儲存卷',
  MOUNT_CONFIGMAP_OR_SECRET: '掛載配置文件或密鑰',
  USE_CONFIGMAP_OR_SECRET: '引用配置文件或密鑰',

  'Collecting file log': '收集落盤紀錄',

  ADD_METADATA: '添加元數據',
  'Set Node Scheduling Policy': '設置節點調度策略',
  'You can allow Pod replicas to run on specified nodes.':
    '可以讓容器組副本在指定的節點運行',

  'Additional metadata settings for resources such as Labels and Annotations.':
    '對資源進行額外的元數據設置，例如 Label 和 Annotation',
  'Additional metadata settings for resources.': '對資源進行額外的元數據設置',

  SELECT_NODES: '設置節點調度策略',
  SELECT_NODES_DESC: '可以讓容器組副本在指定的節點運行',
  WORKLOAD_SPECIFY_NODE_DESC: '可以讓容器組副本在指定的節點運行',
  ADD_METADATA_DESC: '對資源進行額外的元數據設置，例如 Label 和 Annotation',
  ROUTE_ADD_METADATA_DESC: 'Add metadata to the Route.',
  SERVICE_ADD_METADATA_DESC: 'Add metadata to the Service.',
  VOLUME_ADD_METADATA_DESC: 'Add metadata to the volume.',
  WORKLOAD_ADD_METADATA_DESC: 'Add metadata to the workload.',
  POD_ADD_METADATA_DESC: 'Add metadata to the Pod replicas.',

  LOCATION: '位置',

  SELECT_CONFIGMAP_DESC: '將配置中的值添加為卷。',
  SELECT_SECRET_DESC: '將密鑰中的值添加為卷。',

  SELECT_VOLUME: '選擇已有儲存卷',
  SELECT_TYPE: '選擇{type}',
  SELECT_VOLUME_DESC: '請選擇一個已經創建好的持久化儲存卷掛載至容器',

  REQUEST_EXCCED: '資源預留不能超過資源限制',
  REQUEST_EXCEED_AVAILABLE_QUOTA: '資源设置不能大於可用資源限制',
  REQUEST_EXCEED_LIMIT: '資源預留不能超過資源限制。',

  WORKLOAD_DESC:
    '工作負載 (Workload) 通常是訪問服務的實際載體, 也是對節點紀錄收集、監控等系統應用的實際運行載體，是對一組容器組 (Pod) 的抽象模型。',

  WORKLOAD_EMPTY_DESC:
    '工作負載 (Workload) 通常是訪問服務的實際載體, 也是對節點紀錄收集、監控等系統應用的實際運行載體，是對一組容器組 (Pod) 的抽象模型。',

  JOB_DESC:
    'Jobs are used to perform short-lived, one-off tasks. A Job creates one or more Pods and ensures that a specific number of Pods successfully terminate.',
  CRONJOB_DESC:
    'CronJobs manages Jobs on a time-based schedule and can be used to perform periodic or recurring tasks.',

  CRONJOB_NAME_DESC:
    '最長 52 個字元，只能包含小寫字母、數字及分隔符號("-")，且必須以小寫字母或數字開頭及結尾',
  CRONJOB_NAME_TOO_LONG: '最長 52 個字元',

  IMAGE_PLACEHOLDER: '點擊右側圖標可選擇鏡像，或直接輸入名稱 例：nginx:latest',
  IMAGE_EMPTY: '請設置鏡像',
  IMAGE_REGISTRY_PLACEHOLDER: '請選擇鏡像倉庫密鑰',
  IMAGE_DESC:
    '要從私有鏡像倉庫部署，需要先<a href={link} target="_blank">創建鏡像倉庫密鑰</a>，然後拉取鏡像。',
  'Replicas Number': '副本數量',
  GRAYSCALE_REPLICAS_DESC: '指定副本數量',
  REPLICA_STATUS: '副本運行狀態',
  REPLICAS_DESC: '{module}將會被創建，由它維護集群中容器組的所需數量',
  'Strategy Type': '策略類型',
  'Update Strategy': '更新策略',
  UPDATE_STRATEGY: '更新策略',
  ONDELETE: '刪除容器組時更新',
  SIMULTANEOUS_UPDATE: '替換升級',
  RollingUpdate: '滾動更新',
  ROLLING_UPDATE_RECOMMENDED: '滾動更新(推薦)',
  RESTART_PL: '重啟次數',
  RESTART: 'Restart',
  RESOURCE_REQUESTS: '資源預留',
  RESOURCE_LIMITS: '資源限制',
  IMAGE_PULL_POLICY: '鏡像拉取策略',
  Privileged: '特權模式',
  'Desired Replicas': '期望副本',
  REPLICAS_CURRENT: '實際運行副本',
  PARTITION_ORDINAL: 'Ordinal for Dividing Pod Replicas',
  PARTITION_ORDINAL_DESC:
    'Set an ordinal to divide the Pod replicas into two groups. When the StatefulSet is updated, only Pod replicas with an ordinal greater than or equal to the value of this parameter are updated.',
  ADJUST_REPLICAS: '立即生效？',
  ADJUST_TRAFFIC_DISTRIBUTION: 'Adjust Traffic Distribution',
  REPLICAS_SCALE_NOTIFY_CONTENT:
    '您已將工作負載的副本數調整為 <strong>{num}</strong>, 您也可以繼續調整副本數量，或者您可以使它立即生效。',
  REPLICAS_SCALE_NOTIFY_CONFIRM: '立即生效({seconds}s)',
  REPLICAS_SCALE_NOTIFY_CANCEL: '放棄更改',

  ROLLING_UPDATE_SETTINGS: '更新時容器組數量',
  MAX_UNAVAILABLE_PODS: '容器組最大不可用數量',
  MAX_EXTRA_PODS: '容器組最大超出數量',
  UPDATE_STRATEGY_DESC:
    '配置升級過程中替換容器組的策略 <a href="{link}" target="_blank">了解更多</a>',
  MAX_UNAVAILABLE_PODS_DESC:
    '升級過程中「允許存在的不可用的容器組」所占總容器組數的最大百分比或數量',
  MAX_EXTRA_PODS_DESC:
    '升級過程中「允許超出副本數量的容器組」的最大數量或百分比',
  ROLLING_UPDATE_POD_TIP:
    '更新時，會根據目前容器組的副本數對最小可用及最大數量進行限制；最小容器組數不可以超過目前副本數，且最大容器組數量不能超過目前副本數的2倍。',
  ONDELETE_DESC:
    '控制器不會自動更新容器組，將會在容器組被手動刪除時，更新並替換容器組實例。',
  ROLLINGUPDATE_DESC:
    '滾動升級將逐步用新版本的實例替換版本的實例，升級的過程中，業務流量會同時負載平衡分布到新舊的實例上，因此業務不會中斷。',
  SIMULTANEOUS_UPDATE_DESC:
    '替換升級會先刪除舊的容器組，再創建新容器組；升級過程中業務會中斷。',

  STATEFULSET_PARTITION_DESC:
    '當更新有狀態副本集時，將更新具有大於或等於 partition 的序數的所有容器組',
  PARTITION_ORDINAL_EMPTY: 'Please set a ordinal for dividing Pod replicas.',
  MIN_READY_SECONDS_DESC: '指定守護進程集中容器組啟動可用所需的最小的秒數',

  'UI Mode': '界面模式',
  'Coding Mode': '代碼模式',

  LABEL_EXIST_DESC: 'The label already exists. Please enter another label.',
  EMPTY_LABEL_DESC: '請添加標籤。',
  DUPLICATE_LABELS: '標籤組重複',
  'Labels cannot be empty': '標籤不能為空',
  ADD_LABEL: '添加標籤',
  'Add Container': '添加容器',
  'Add new container': '添加新的容器',
  'Adding new contianer': '正在添加新的容器',
  ADD_NODE_SELECTOR: '添加節點選擇器',
  CONTAINER_EMPTY_DESC: '請至少添加一個容器',
  CONTAINER_NAME: '容器名稱',
  CONTAINER_TYPE: '容器類型',
  'Advanced Options': '高級選項',
  'CPU(m)': 'CPU(m)',
  Commands: '命令',
  'Add command': '添加命令',
  ARGUMENTS: '參數',
  Argument: '參數',
  'Add argument': '添加參數',
  Protocols: '協定',
  MUST_MATCH: '必須匹配',
  MATCH_IF_POSSIBLE: '盡可能滿足',
  SCHEDULE_WITH_TARGET: '與目標部署到壹起',
  SCHEDULE_AWAY_FROM_TARGET: '遠離目標部署',
  RULE_NOT_COMPLETE: '請填寫完整策略',
  SESSION_AFFINITY: '會話親和性',
  SELECTOR: 'Selector',
  'environment variables': '環境變量',
  ADD_ENVIRONMENT_VARIABLE: '添加環境變量',
  'Read Write Mode': '讀寫模式',
  'Please input mount point': '請輸入掛載點',
  'Please select a storage class': '請選擇儲存卷類型',
  'Please select image': '請選擇鏡像',

  'Invalid name': '名稱格式不合法。{message}',
  'Invalid pod': '容器組數量格式不合法',
  SET_IMAGE_DESC: '請選擇鏡像',
  INVALID_NAME_DESC:
    'Invalid name. The name can contain only lowercase letters, numbers, and hyphens (-), and must start and end with a lowercase letter or number. The maximum length is 63 characters.',
  'Service Labels': '服務標籤',

  'Add Existing Volume': '添加已有儲存卷',
  'Add Temporary Volume': '添加臨時儲存卷',
  'Add HostPath': '添加 HostPath',
  'Add Volume Template': '添加儲存卷模板',

  WORKLOAD_MOUNT_VOLUME_DESC: '支持臨時儲存卷以及持久化儲存卷',

  MOUNT_CONFIGMAP_OR_SECRET_DESC: '將配置文件或密鑰掛載至指定目錄',

  'Please specify an image': '請指定鏡像',

  'Please select protocol': '請選擇協定',
  'Please input port': '請輸入端口',
  PROBE_COMMAND_EMPTY: '請輸入命令',
  VOLUME_NAME_EMPTY: '請輸入儲存卷名稱',

  PORT_INPUT_DESC: 'The port name already exists. Please enter another name.',

  PORT_NAME_DESC:
    'The port name can contain only lowercase letters, numbers, and hyphens (-) and must begin and end with a lowercase letter or number. The maximum length is 63 characters.',

  WORKLOAD_PORT_NAME_DESC:
    'The port name can contain only lowercase letters, numbers and hyphens (-), and must begin and end with a lowercase letter or number. The maximum length is 15 characters.',

  TARGET_CPU_USAGE_DESC: '當 CPU 使用率超過或低於此目標值時，將添加或刪除副本',
  TARGET_MEMORY_USAGE_DESC:
    '當記憶體使用量超過或低於此目標值時，將添加或刪除副本',
  MINIMUM_REPLICAS_DESC: '彈性伸縮可以設置的副本數量的下限',
  MAXIMUM_REPLICAS_DESC: '副本數量的上限',
  REPLICAS_PLACEHOLDER: '預設值: 1',

  DEPLOYMENTS_BASEINFO_DESC:
    '您可以給部署取一個名字，以便在使用的時候容易區分。',
  DEPLOYMENT_POD_TEMPLATE_DESC:
    '工作負載可以根據容器組模板以及您設置的副本數量，自動生成指定數量的容器組',
  DEPLOYMENTS_VOLUME_DESC:
    '可以將同一個臨時儲存卷或持久化儲存卷掛載至部署的容器組的各個副本内。',
  DEPLOYMENT_LABEL_SETTINGS_DESC:
    '標籤是一個或多個關聯到資源如容器組上的鍵值對，我們通常透過標籤來識别、組識或查找資源對象',
  DEPLOYMENT_NODE_SELECT_DESC:
    '通過使用選擇器將容器組調度到期望運行的節點上，這些選擇器是一組或多組鍵值對匹配節點標籤。',
  DEPLOYMENT_JOB_SETTINGS_DESC:
    '您可以在此配置任務 (Job) 的 Job Spec 格式，Job Controller 負責根據 Job Spec 創建 Pod，並持續監控 Pod 的狀態，直到其成功結束。如果失敗，則根據 RestartPolicy（支持 OnFailure 和 Never）決定是否創建新的 Pod 再次重試任務。',
  DEPLOYMENT_CRONJOB_SETTINGS_DESC:
    '您可以在此配置定時任務 (CronJob) 的 Job Spec 格式，Job Controller 負責根據 Job Spec 創建 Pod，並持續監控 Pod 的狀態，直到其成功結束。如果失敗，則根據 RestartPolicy（支持 OnFailure 和 Never）決定是否創建新的 Pod 再次重試任務。',

  STATEFULSETS_BASEINFO_DESC:
    '您可以給有狀態副本起一個名字，以便在使用的時候容易區分。',
  STATEFULSETS_VOLUME_TEMPLATE_DESC:
    '為有狀態副本集的每個容器組創建專屬的持久化儲存卷，並掛載至相應的容器組',
  STATEFULSETS_ADD_VOLUME_TEMPLATE_DESC: '請添加一個儲存卷模板',
  STATEFULSETS_SERVICE_CONFIG_DESC:
    '集群不為服務生成 IP，集群内部通過服務的後端 Endpoint IP 直接訪問服務。此類型適合後端異構的服務，比如需要區分主從的服務。',

  DAEMONSETS_BASEINFO_DESC:
    '守護進程集保證在每個主機上都運行一個容器副本，常用來部署一些集群的紀錄、監控或者其他系統管理應用。',
  DAEMONSETS_VOLUME_DESC:
    '可將 HostPath，臨時儲存卷，持久化儲存卷掛載至守護進程集的容器組内。',

  JOBS_BASEINFO_DESC: '',
  JOBS_POD_TEMPLATE_DESC: '指定任務中運行的容器組模板',
  JOBS_VOLUME_DESC: '可以將臨時儲存卷，持久化儲存卷掛載至任務的容器組内。',
  CRONJOBS_BASEINFO_DESC: '創建定時任務所需的基本資訊，需指定名稱與定時計畫',
  CRONJOBS_VOLUME_DESC:
    '可以將臨時儲存卷，持久化儲存卷掛載至定時任務的容器組内。',
  CRONJOB_CRON_DESC:
    'Set a schedule for the CronJob. KubeSphere uses UTC by default and you need to adjust the schedule according to your time zone. <a href="//en.wikipedia.org/wiki/Cron" target="_blank">Learn More</a>',

  MOUNT_VOLUME_DESC:
    '持久化儲存卷請選擇支持多節點讀寫模式 (ROX 或者 RWX) 的儲存卷，否則可能因容器組不在同一節點導致容器組更新失敗。如果您選擇了單節點讀寫 (RWO) 模式的儲存卷您也可以通過節點選擇將容器組安排在同一節點上來避免因儲存卷訪問模式造成的更新錯誤。',

  Job: '任務',
  JOB: '任務',
  CronJob: '定時任務',
  CRONJOB: '定時任務',
  CRONJOB_PL: '定時任務',
  NUMBER_OF_CRONJOBS: 'Number of CronJobs',
  CRONJOB_LOW: '定時任務',
  Revision: '版本',
  EVERY_DAY: '0 0 * * * (every day)',
  EVERY_HOUR: '0 * * * * (every hour)',
  EVERY_MONTH: '0 0 1 * * (every month)',
  EVERY_WEEK: '0 0 * * 0 (every week)',
  Schedule: '定時計畫',
  REVISION_RECORDS: '版本記錄',
  'Revision Rollback': '版本回退',
  'Rollback Revisions': '回退版本',
  'Current Revision': '目前版本',
  'Execution Records': '執行記錄',
  REVISION_RECORD: 'Revision record',
  ROLL_BACK: '回退',
  EDIT_AUTOSCALING: 'Edit Autoscaling',
  TARGET_REVISION_RECORD: '回退版本',
  CURRENT_REVISION_RECORD: '目前修改记录',
  RUNNING_RECORDS: '執行記錄',
  'Cluster Resource Status': '集群資源狀態',
  RESOURCE_STATUS: '資源狀態',
  RESOURCE_NAME: '資源名稱',
  'Config Template': '配置模板',
  'Edit Config Template': '編輯配置模板',
  EDIT_SETTINGS: '編輯配置模板',
  EDIT_APP_SETTINGS: 'Edit App Settings',
  ENVIRONMENT_VARIABLE_PL: '環境變量',
  ENVIRONMENT_VARIABLE: '環境變量',
  'File List': '文件列表',
  RERUN: '重新執行',
  ENTER_SCHEDULE_TIP: '請选择定時計畫。',

  TARGET_REVISION_EMPTY_DESC: '請選擇回退版本',

  HORIZONTAL_POD_AUTOSCALING: '彈性伸縮',
  AUTOSCALING: '彈性伸縮',
  'Container Config': '容器配置',
  EDGENODE_CONFIG_COMMAND: '添加命令',
  PROBE_PL: '探針',
  'Add Probe': '添加探針',
  'Initial Delay': '初始延遲',
  INITIAL_DELAY_S: '初始延遲（s）',
  INITIAL_DELAY_TIMEOUT_VALUE: '{delay}s 初始延遲, {timeout}s 超時時間',
  TIMEOUT_PERIOD_S: '超時時間（s）',
  CHECK_INTERVAL_S: '執行探測頻率(秒)',
  SUCCESS_THRESHOLD: '健康臨界值',
  FAILURE_THRESHOLD: '不健康臨界值',
  HTTP_REQUEST: 'HTTP 請求檢查',
  HTTP_PATH_EMPTY: '請設置 HTTP 檢查的路徑。',
  TCP_PORT: 'TCP 端口檢查',
  WORKER_CONTAINER: '工作容器',
  'Request Type': '請求類型',

  MAXIMUM_DELAY: 'Maximum Start Delay (s)',
  SUCCESSFUL_JOBS_RETAINED: '保留完成任务數',
  FAILED_JOBS_RETAINED: '保留失敗任务數',
  CONCURRENCY_POLICY: '並發策略',
  RUN_JOBS_CONCURRENTLY: 'Run Jobs concurrently',
  SKIP_NEW_JOB: 'Skip new Job',
  SKIP_OLD_JOB: 'Skip old Job',

  'Select resource': '選擇資源',
  RESTART_POLICY: '重啟策略',
  RESOURCE: '選擇資源',
  'Restart Policy': '重啟策略',

  LIVENESS_CHECK: '容器存活檢查',
  READINESS_CHECK: '容器就緒檢查',
  STARTUP_CHECK: '容器啟動檢查',

  RECREATE: '重新部署',
  RECREATE_SUCCESS_DESC: '重新部署成功',

  RECREATE_CONFIRM_DESC:
    '您即將重新部署工作負載 {resource} ({type}) , 容器組將根據更新策略進行重新部署，您的業務可能會被暫時中斷。',

  MORE: '更多操作',
  MANAGE: '管理',

  REVISION_ROLLBACK_SELECT: '請選擇要回退的版本',
  REVISION_TITLE: '{name}版本',
  'is running': '正在運行',
  PROBE_TIME: '初始延時: {delay}s 超時時間:{timeout}s',
  READINESS_PROBE: '就緒探針',
  LIVENESS_PROBE: '存活探針',
  STARTUP_PROBE: '啟動探針',

  INITIAL_DELAY_DESC: '在檢查其運行狀況之前，容器啟動後需要等待多長時間。',
  TIMEOUT_PERIOD_DESC:
    '等待探針完成多長時間。如果超過時間，則認為探測失敗。預設為1秒。最小值為1。',
  CHECK_INTERVAL_DESC: '執行探測的頻率（以秒為單位）。預設為10秒。最小值為1。',
  SUCCESS_THRESHOLD_DESC:
    '探測失敗後，連續最小成功探測為成功。預設值為1。最小值為1。存活探針和啟動探針内必須為1。',
  FAILURE_THRESHOLD_DESC: '探針進入失敗狀態時需要連續探測失敗的最小次數。',

  CONFIGURE_AUTOSCALING_DESC:
    '根據 CPU 和記憶體使用情況自動伸縮副本。如果同時指定 CPU 和記憶體，則滿足任一條件後即添加或刪除副本',
  PROBE_MSG:
    'Readiness Probe 檢查容器是否準備好處理請求。失敗意示著容器不應該從代理接收任何流量，即使它正在運行。Liveness Probe 檢查配置它的容器是否仍在運行。如果活動狀態探測器失敗，則會殺死容器，容器將遵循其重啟策略',
  WORKLOAD_REPLICA_MSG:
    '在用戶定義範圍内，如果 Pod 增多，則 ReplicationController 會終止額外的 Pod，如果減少，RC 會創建新的 Pod，始終保持在定義範圍。例如，RC 會在 Pod 維護（例如内核升級）後在節點上重新創建新 Pod。',
  DEPLOYMENTS_REPLICA_DESC:
    '部署 (Deployment) 用來描述期望應用達到的目標狀態，主要用來描述無狀態應用，副本的數量和狀態由其背後的控制器來維護，確保狀態與定義的期望狀態一致。您可以增加副本數量來滿足更高負載；回滾部署的版本來消除程式的錯誤修改；創建自動伸縮器來彈性應對不同場景下的負載。',
  STATEFULSETS_REPLICA_DESC:
    '有狀態副本集 (StatefulSet) 用來描述有狀態應用，比如副本之間有主從關係，數據需要做持久化。與部署 (Deployment) 相同的是，有狀態副本集創建的副本也是完全相同的，不同的是每個副本有個固定且唯一的標示，即使副本被重新調度了，標示也不會發生變化。您可以用有狀態副本集來實現應用的有序部署，有序的刪除，有序的滾動更新。',
  DAEMONSETS_REPLICA_DESC:
    '守護進程集 (DaemonSet) 可以確保集群中的每個節點運行一個副本，當有節點加入集群或者离開集群的時候，會自動地調整副本的數量來保證副本的數量與集群的節點數量一致。您可以使用守護進程集來運行儲存服務，如 GlusterFS，Ceph 等；運行紀錄搜集服務，如 Fluentd，Logstash 等；運行監控服務等。',

  FAILED_JOBS_RETAINED_DESC: '允許保留的失敗的任務個數。',
  SUCCESSFUL_JOBS_RETAINED_DESC: '允許保留的成功的任務個數。',
  CONCURRENCY_POLICY_DESC:
    'Select a concurrency policy of a Job created by the CronJob.',
  'Can be found by node IP or node name': '可以通過節點 IP 或者節點名稱查找',
  MAXIMUM_DELAY_DESC:
    'Deadline for starting the Job if the scheduled run is missed for any reason.',
  'Container CPU Resource Request, 1 Core = 1000m':
    '容器的 CPU 資源請求值, 1核 = 1000m',
  'Container Memory Resource Request': '容器的 記憶體 資源請求值',
  'The minimum of the replicas that can be set by HPA':
    '彈性伸縮可以設置的副本數量的下限',
  MINIMUM_REPLICAS: '最小副本數',
  MAXIMUM_REPLICAS: '最大副本數',
  'Maximum number of replicas': '副本數量的上限',
  TARGET_CPU_USAGE: '目標使用率',
  TARGET_MEMORY_USAGE: '目標使用量',
  'Current Utilization': '目前使用率',
  TARGET_CPU_USAGE_UNIT: 'CPU 目標使用率',
  'Memory Target Utilization': '記憶體目標使用率',
  TARGET_MEMORY_USAGE_UNIT: '記憶體目標使用量',

  'min replicas number should not be greater than max replicas number':
    '最大副本數應不小於最小副本數',

  HPA_SET_TIP: '已設置彈性伸縮策略',

  'Mount path is already in use': '掛載路徑已使用',
  'Please specify the read and write mode and mount path':
    '請指定讀寫方式及掛載路徑',
  'Please add at least one volume': '請至少添加一個儲存卷',
  'Please add at least one volume or volume template':
    '請至少添加一個儲存卷或儲存卷模板',
  'Please select a volume': '請選擇儲存卷',
  'Please select a configmap': '請選擇配置文件',
  'Please select a secret': '請選擇密鑰',
  COLLECT_LOGS_ON_VOLUMES_Q: 'How do I collect logs on volumes?',
  MOUNT_PATH_IN_USE: '掛載路徑已使用',
  READ_WRITE_MOUNT_EMPTY: '請指定讀寫方式及掛載路徑',
  MOUNT_VOLUME: '添加儲存卷',
  MOUNT_VOLUME_OR_TEMPLATE: '請至少添加一個儲存卷或儲存卷模板',
  VOLUME_NOT_SELECT: '請選擇儲存卷',
  CONFIGMAP_NOT_SELECT: '請選擇配置文件',
  SECRET_NOT_SELECT: '請選擇密鑰',
  'What is Disk Log Collection?': '什麼是落盤紀錄收集？',

  'for example': '例如',
  CONTAINER_LOG_PATH: '容器紀錄相對路徑',
  'log path relative to container mount path': '紀錄路徑相對於容器掛載路徑',

  SPECIFY_SUBPATH: '點擊添加子路徑',
  SUBPATH: '子路徑',
  SPECIFY_SUBPATH_TIP: '僅適用於儲存卷掛載，不適用於主機路徑映射',

  'Host Path': '主機路徑',

  HOST_PATH_DESC:
    'HostPath 允許掛載主機上的文件系統到容器組裡面去。如果容器組需要使用主機上的文件，可以使用 HostPath。',
  SELECT_SPECIFIC_KEYS: '選擇特定的鍵和路徑',
  SELECT_SPECIFIC_KEYS_DESC:
    '選擇要使用的密鑰以及將公開每個密鑰的文件路徑，文件路徑相當於裝載路徑，每個文件的内容都是密鑰的值。',
  EMPTY_DIR_DESC:
    '臨時儲存卷隨 Pod 被分配在主機上。當 Pod（不管任何原因）從主機上被刪除時，臨時儲存卷也同時會刪除，儲存卷的數據也將永久刪除。<br />注：刪除容器不影響臨時儲存卷。',
  SELECT_VOLUME_TYPE_DESC: '您可以根據需要選擇適合您的儲存卷類型進行添加',

  MAXIMUM_RETRIES: '最大重試次數',
  PARALLEL_PODS: '並行數',
  COMPLETE_PODS: '完成數',
  MAXIMUM_DURATION: '退出超時時限（s）',

  MAXIMUM_RETRIES_DESC:
    'Maximum number of retries before the Job is marked as failed. The default value is 6.',
  PARALLEL_PODS_DESC: 'Number of Pods that run concurrently.',
  COMPLETE_PODS_DESC:
    'Number of Pods that complete successfully required for the Job to be marked as complete.',
  MAXIMUM_DURATION_DESC:
    'Maximum duration of the Job. The Job is terminated when it reaches the specified deadline.',

  RESTART_POLICY_NEVER_DESC: 'Never（容器組出現故障時創建新的容器組）',
  RESTART_POLICY_ONFAILURE_DESC: 'On failure（容器組出現故障時内部重啟容器）',

  RESTART_POLICY_TIP:
    'RestartPolicy 只能指定 Never 或 OnFailure，當任務未完成的情況下：<br/>* 如果 RestartPolicy 指定 Never，則任務會在容器組出現故障時創建新的容器組，且故障容器組不會消失。<br/>* 如果 RestartPolicy 指定 OnFailure，則任務會在容器組出現故障時其内部重啟容器，而不是創建容器組。',

  MONITORING_ALERT_DESC:
    '目前監控最多可顯示五個副本的運行狀態監控，當超過五個副本時，可以點擊具體監控項目的「查看全部副本」，查看更多的副本監控。',

  CONTAINER_CPU_DESC:
    '作為容器調度時資源分配的判斷依賴。只有當節點上可分配CPU總量 ≥ 容器CPU最小使用值時，才允許將容器調度到該節點。單位換算規則: 1核 = 1000m',
  CONTAINER_MEMORY_DESC:
    '作為容器調度時資源分配的判斷依賴。只有當節點上可分配記憶體總量 ≥ 容器記憶體最小使用值時，才允許將容器調度到該節點。',
  'request CPU should not be greater than limit CPU':
    '最小使用 CPU 值應不大於最大使用 CPU 值',
  'request memory should not be greater than limit memory':
    '最小使用記憶體值應不大於最大使用記憶體值',

  INVALID_IMAGE: '鏡像無效。',
  IMAGE_PULL_POLICY_ALWAYS: '嘗試重新下載鏡像（Always）',
  IMAGE_PULL_POLICY_IFNOTPRESENT: '優先使用本地鏡像（IfNotPresent）',
  IMAGE_PULL_POLICY_NEVER: '僅使用本地鏡像（Never）',
  IMAGE_PULL_POLICY_ALWAYS_DESC: '在創建及更新時，每次都會嘗試下載新的鏡像',
  IMAGE_PULL_POLICY_IFNOTPRESENT_DESC: '如果本地存在鏡像就優先使用本地鏡像',
  IMAGE_PULL_POLICY_NEVER_DESC:
    '僅會使用本地鏡像，如果本地不存在所需鏡像，則會導致容器異常',

  LIVENESS_CHECK_DESC: '該檢查方式用於檢測容器是否活著。',
  READINESS_CHECK_DESC: '該檢查方式用於檢測容器是否準備好開始處理用戶請求。',
  STARTUP_CHECK_DESC: '該檢查方式用於檢測容器是否啟動成功。',
  STARTUP_CHECK_TIP: '需要 Kubernetes v1.18 或以上版本。',

  VOLUME_OR_TEMPLATE_EMPTY:
    '您已開啟落盤紀錄收集，請至少添加一個儲存卷並指定紀錄所在目錄',
  VOLUME_EMPTY: '您已開啟落盤紀錄收集，請至少添加一個儲存卷並指定紀錄所在目錄',
  COLLECT_LOGS_ON_VOLUMES_DESC:
    'After you add a volume (ReadAndWrite mode), you can collect logs inside the volume. When you enable disk log collection, the Filebeat image will be used as a sidecar pattern and injected into the Pod to collect logs.',

  PROJECT_COLLECT_SAVED_DISABLED_DESC:
    'Please contact the project administrator to enable disk log collection in <b>Project Settings</b> > <b>Advanced Settings</b>.',

  ADD_VOLUME_TEMPLATE_DESC:
    '添加儲存卷模板，儲存卷的生命週期將隨容器組的生命週期存在',

  CONTAINER_LOG_PATH_TIP:
    '容器紀錄相對路徑是從容器掛載路徑開始的路徑，可以 glob 方式給出，多組時以英文逗号分隔。例如當容器掛載路徑為 /data 時，容器紀錄相對路徑配置為 log/*.log，表示匹配 /data/log 目錄下所有 .log 後缀文件。<br/>若需要匹配 /data/log 目錄及其子目錄下的所有 .log 後缀文件，可將容器紀錄相對路徑配置為 log/**/*.log',

  NO_DEFAULT_PORT: '暫無預設端口配置',
  ports: '端口',
  layers: '層級',
  REGISTRY: '倉庫',
  'Private Registry': '私有倉庫',
  'Image Name': '鏡像名稱',
  NO_IMAGE_FOUND: '沒有找到此鏡像',
  DECENTRALIZED_SCHEDULING: '容器組分散部署',
  'Pod Soft Decentralized Deployment': '容器組軟分散部署',
  'Pod Hard Decentralized Deployment': '容器組硬分散部署',
  CENTRALIZED_SCHEDULING: '容器組聚合部署',
  'Pod Soft Aggregation Deployment': '容器組軟聚合部署',
  'Pod Hard Aggregation Deployment': '容器組硬聚合部署',
  DECENTRALIZED_SCHEDULING_DESC: '容器組副本將會盡量分散在不同的節點中',
  CENTRALIZED_SCHEDULING_DESC: '容器組副本將會盡量部署在同一節點上',
  'Pod replicas will be deployed by the default policy.':
    '容器組副本將根據預設策略部署',
  ADD_CONTAINER_DESC:
    'Kubesphere 支持從鏡像倉庫拉取鏡像以及通過代碼構建新的鏡像並部署',

  SCHEDULING_INFORMATION: '調度資訊',
  SCHEDULING_RESULT: '節點調度資訊',
  POD_STATUS_ANALYSIS: '容器狀態分析',
  CURRENT_STATUS: '目前階段(phase)',
  SCHEDULED_TO_NODE: '調度至 {value}',
  SCHEDULING_NOT_SUCCESSFUL: 'Scheduling Not Successful',
  POD_SCHEDULING_METHOD: '容器組如何被調度至節點?',
  'Pod CPU Request': '容器組CPU請求',
  'Pod Memory Request': '容器組記憶體請求',

  MIN_READY_SECONDS: '最小就緒時間 (MinReadySeconds)',
  MIN_READY_SECONDS_EMPTY:
    'Please set the minimum stable running time required for the Pod to be considered ready.',

  POD_CONDITION_INITIALIZED: 'Initialized',
  POD_CONDITION_INITIALIZED_DESC: '所有 init 容器都已成功啟動',
  POD_CONDITION_READY: '開始運行(Ready)',
  POD_CONDITION_READY_DESC: '容器組已經開始運行，並可以通過服務進行訪問',
  POD_CONDITION_CONTAINERSREADY: '容器準備就緒(ContainersReady)',
  POD_CONDITION_CONTAINERSREADY_DESC: '容器組内容器準備就緒.',
  POD_CONDITION_PODSCHEDULED: '調度成功(PodScheduled)',
  POD_CONDITION_PODSCHEDULED_DESC: '容器組已經被安排到一個節點中',

  POD_REASON_FAILEDCREATE: '創建失敗(FailedCreate)',
  POD_REASON_SUCCESSFULCREATE: '創建成功(SuccessfulCreate)',
  POD_REASON_FAILEDDELETE: '刪除失敗(FailedDelete)',
  POD_REASON_SUCCESSFULDELETE: '刪除成功(SuccessfulDelete)',

  POD_ASSIGNED_DESC:
    '根據容器組中容器設置的請求值 (即 Request) 作為容器調度時資源分配的判斷依據。只有節點上可分配總量 ≥ 容器請求值時，才允許將容器調度到該節點。',

  CrashLoopBackOff: '容器退出，kubelet 正在將它重啟',
  InvalidImageName: '無法解析鏡像名稱',
  ImageInspectError: '無法校驗鏡像',
  ErrImageNeverPull: '目前策略禁止拉取鏡像',
  ImagePullBackOff: '正在重試拉取鏡像',
  RegistryUnavailable: '無法连接鏡像倉庫',
  ErrImagePull: '鏡像拉取失敗',
  CreateContainerConfigError: '不能創建 kubelet 使用的容器配置',
  CreateContainerError: '創建容器失敗',
  'm.internalLifecycle.PreStartContainer': '執行 hook 報錯',
  RunContainerError: '啟動容器失敗',
  PostStartHookError: '執行 hook 報錯',
  ContainersNotInitialized: '容器未初始化',
  ContainersNotReady: '容器沒有準備就緒',
  ContainerNotReady: '容器沒有準備就緒',
  ContainerCreating: '容器創建中',
  PodInitializing: '容器組初始化中',
  DockerDaemonNotReady: 'Docker 還沒有完全啟動',
  NetworkPluginNotReady: '網路插件還沒有完全啟動',
  POD_DESC:
    '容器組 (Pod) 是 Kubernetes 應用程式的基本執行單元，是您創建或部署的 Kubernetes 對象模型中最小和最簡單的單元。',
  POD_EMPTY_DESC:
    '容器組 (Pod) 是 Kubernetes 應用程式的基本執行單元，是您創建或部署的 Kubernetes 對象模型中最小和最簡單的單元。',
  FILL_IMAGE_DEFAULT_PORTS_DESC: '是否暴露該鏡像的預設端口？',

  ISTIO_PROTOCOL_TIP:
    'To fully use the Application Governance feature, select a protocol based on the actual usage of the Service. The port name will be generated in the <Protocol>-<Name> format.',

  STATUS_INFORMATION: '狀態分析(Conditions)',
  WORKLOAD_CONDITION_AVAILABLE: '可用性(Available)',
  WORKLOAD_CONDITION_PROGRESSING: '創建進度(Progressing)',
  WORKLOAD_REASON_REPLICASETUPDATED: '副本已更新(ReplicaSetUpdated)',
  WORKLOAD_REASON_REPLICASETCREATEERROR: '新建副本錯誤(ReplicaSetCreateError)',
  WORKLOAD_REASON_NEWREPLICASETCREATED: '已創建新副本(NewReplicaSetCreated)',
  WORKLOAD_REASON_FOUNDNEWREPLICASET: '發現新副本(FoundNewReplicaSet)',
  WORKLOAD_REASON_NEWREPLICASETAVAILABLE: '可用新副本(NewReplicaSetAvailable)',
  WORKLOAD_REASON_PROGRESSDEADLINEEXCEEDED:
    '處理超時(ProgressDeadlineExceeded)',
  WORKLOAD_REASON_DEPLOYMENTPAUSED: '部署中止(DeploymentPaused)',
  WORKLOAD_REASON_DEPLOYMENTRESUMED: '部署已恢復(DeploymentResumed)',
  WORKLOAD_REASON_MINIMUMREPLICASAVAILABLE:
    '最小副本可用(MinimumReplicasAvailable)',
  WORKLOAD_REASON_MINIMUMREPLICASUNAVAILABLE:
    '最小副本不可用(MinimumReplicasUnavailable)',
  WORKLOAD_REASON_FAILEDCREATE: '創建失敗(FailedCreate)',

  ReplicaSetUpdated: '副本已更新',
  ReplicaSetCreateError: '新建副本錯誤',
  NewReplicaSetCreated: '已創建新副本',
  FoundNewReplicaSet: '發現新副本',
  NewReplicaSetAvailable: '可用新副本',
  ProgressDeadlineExceeded: '處理超時',
  DeploymentPaused: '部署中止',
  DeploymentResumed: '部署已恢復',
  MinimumReplicasAvailable: '最小副本可用',
  MinimumReplicasUnavailable: '最小副本不可用',
  FailedCreate: '創建失敗',
  SuccessfulCreate: '創建成功',
  FailedDelete: '刪除失敗',
  SuccessfulDelete: '刪除成功',

  USE_DEFAULT_PORTS: '使用預設端口',

  CONTAINER_NOT_SELECTED: '請至少選擇一個容器進行掛載',
  'Sure to delete the workload(s)?': '確認刪除工作負載',
  NO_RELATED_RESOURCE_FOUND: '沒有關聯的資源',
  'No related resources found with the current workload(s)':
    '目前工作負載下沒有關聯的資源',
  DELETE_WORKLOAD_DESC_SI:
    'You are about to delete the workload {resource}.<br/>Do you want to also delete the resource related to the workload?',
  DELETE_WORKLOAD_DESC_PL:
    'You are about to delete the workloads {resource}.<br/>Do you want to also delete the resources related to the workloads?',

  CONTAINER_SECURITY_CONTEXT: '容器 Security Context',
  POD_SECURITY_CONTEXT: '容器組 Security Context',
  USER_AND_USER_GROUP: '用戶和用戶組',
  USER_GROUP: '用戶組',
  CONTAINER_SECURITY_CONTEXT_DESC:
    'Security Context的目的是限制不可信容器的行為，保護系統和其他容器不受其影響。',
  POD_SECURITY_CONTEXT_DESC: '自定義容器組的訪問控制和權限設置。',
  POD_SECURITY_CONTEXT_TIP:
    '容器組 Security Context 可以為容器組内的容器提供預設的用戶和用戶組設置以及 seLinuxOptions 的參數設置，如果容器中已經對這些參數進行了定義，則優先以容器中的設置為準。',
  PRIVILEGED_MODE: '特權模式',
  PRIVILEGED_MODE_DESC: '此時容器中的進程本質上等價於宿主節點上的 root 用戶。',
  ALLOW_PRIVILEGE_ESCALATION: '允許擴大特權(AllowPrivilegeEscalation)',
  ALLOW_PRIVILEGE_ESCALATION_DESC:
    '進程是否可以獲取比父進程更多的特權。當以特權模式運行時，則為允許狀態。',
  ROOT_DIRECTORY_READONLY: '文件系統root唯讀(ReadOnlyRootFilesystem)',
  ROOT_DIRECTORY_READONLY_DESC: '該容器的文件系統根路徑是否唯讀。',
  RUN_AS_NON_ROOT: '僅允許非 Root 用戶',
  RUN_AS_NON_ROOT_DESC:
    'Kubernetes 在運行容器之前將執行檢查，以確保容器進程不是以 root 用戶（UID為0）運行，否則將不能啟動容器。',
  RUN_AS_USER_DESC: '執行容器 entrypoint 進程的 UID。預設為 docker 引擎的 GID',
  RUN_AS_USER_GROUP_DESC:
    '執行容器 entrypoint 進程的 GID。預設為 docker 引擎的 GID',

  COMPARE_WITH: '與上一個版本 {version} 的對比',
  REVISION_RECORDS_DESC:
    '對工作負載的資源模板進行修改後會生成一個新的紀錄並重新調度 容器組（Pod）進行版本的疊代，預設保存10個最近的版本。您可以根據修改紀錄進行重新部署。',

  CLUSTER_DIFF_CONTAINER_SETTINGS_DESC:
    '根據不同的需要在不同的集群中設置不同的容器',
  CLUSTER_DIFF_PORT_SETTINGS_DESC: '可以在不同集群設置不同的服務端口',
  CLUSTER_DIFF_ENVIRONMENT_VARIABLES_DESC: '可以在不同集群設置不同的環境變量',

  CONTAINER_RESOURCE_LIMIT_TIP:
    '請設置容器的資源限制與資源預留，這將能夠幫助系統更好地調度容器，提高穩定性。您也可在【項目設置】中，通過【基本資訊】->【項目管理】->【編輯資源預設請求】，來統一設置預設值。',

  REPLICAS_AVAILABLE: '實際副本',
  REPLICAS_DESIRED: '期望副本数',

  SYNC_HOST_TIMEZONE_DESC: '時區與主機同步後，容器内的時區將與主機節點一致。',
  HOSTPATH_TIP:
    'HostPath 將主機的文件系統掛載到Pod中，它使一些應用程式能逃出對其做出的隔離限制，請謹慎使用。',

  DEPLOY_PLACEMENT_TIP_TITLE: '什麼是部署位置？',
  DEPLOY_PLACEMENT_TIP_VALUE:
    '可以將容器組部署在不同集群中，並對集群中部署的副本數量進行定義。不同集群中的容器組將由聯邦集群控制器(Federation Controller Manager)進行統一的調度及狀態同步。',
  CERT_ERROR: '發現證書錯誤，是否忽略證書驗證並再次',
  IGNORE_CERT_WARN_DESC: '忽略驗證證書，可能會導致帳戶密碼被欺騙。',
  INVALID_PROJECT: '項目不可選',
  DESC_CREATE_CONFIGMAP_SECRET: '如果沒有合適的配置文件或密鑰引用, 您可以',

  // Pods Page
  NODE_IP: '{node}（{ip}）',

  // Jobs
  JOB_PL: 'Jobs',
  JOBS: 'Jobs',
  NUMBER_OF_JOBS: 'Number of Jobs',
  JOB_LOW: 'Job',
  CRONJOBS: 'CronJobs',
  SCHEDULE: 'Schedule',

  // CronJobs
  ADD_VOLUME: 'Add Volume',
  RESTART_POLICY_DESC: 'Set the Pod restart policy.',
  MOUNT_VOLUMES: 'Mount Volumes',

  // Workload
  GPU_SETTING_TIP: 'Set the GPU Limit to null means no limit.',
  NETWORK_SEGMENT_SCAP: 'Network segment',
  JOB_COMPLETED: 'Completed',
  JOB_FAILED: 'Failed',
  JOB_RUNNING: 'Running',
  CRONJOB_PAUSED: 'Paused',
  CRONJOB_RUNNING: 'Running',
  CRONJOB_FAILED: 'Failed',
  'Submit for Review': '提交審核',
  CANCEL_SUBMISSION: '取消審核',
  'Release to Store': '發佈到商店',
  'View in Store': '在商店查看',
  SUSPEND_VERSION: '下架版本',
  ACTIVATE_VERSION: '上架版本',
  'Delete Version': '刪除版本',
  SUSPEND_APP: '下架應用',
  ACTIVATE_APP: '上架應用',

  VERSION_DELETE_TIP: '確定要刪除版本 <strong>{name}</strong> 嗎? ',
  VERSION_SUBMIT_TIP: '確定要提交版本 <strong>{name}</strong> 去審核?',
  VERSION_CANCEL_TIP: '確定要取消版本 <strong>{name}</strong> 的審核嗎?',
  VERSION_SUSPEND_TIP:
    '版本 <strong>{name}</strong> 下架後，關聯的應用將不顯示該版本，您確定要下架嗎？',
  VERSION_RECOVER_TIP:
    '版本 <strong>{name}</strong> 上架後，關聯的應用將顯示出該版本，您確定要上架嗎？',
  VERSION_RELEASE_TIP:
    '版本 <strong>{name}</strong> 發佈到商店後，用戶可以查看並部署該應用版本，您確定要發佈嗎？',
  APP_SUSPEND_TIP:
    '應用<strong>{name}</strong>下架後，用戶無法從商店中購買到此應用，您確定要下架該應用嗎？',
  APP_RECOVER_TIP:
    '應用<strong>{name}</strong>上架後，相關的下架版本都將變成上架，您確定要上架該應用嗎？',

  'Version Management': '版本管理',
  'App Information': '應用資訊',
  'Audit Records': '應用審核',
  'App Instances': '應用實例',
  'Deployed Instances': '部署實例',
  Versions: '版本',

  PACKAGE_FILE_DESC:
    'Package.json 檔案，用於描述應用或版本的基本資訊，包括名稱版本號等',
  CONFIG_FILE_DESC: '應用的預設值配置檔案',
  LICENSE_FILE_DESC: '文本格式的協定',
  LOCALE_EN__FILE_DESC: '應用配置的國際化英文翻譯',
  LOCALE_ZH_FILE_DESC: '應用配置的國際化中文翻譯',
  CHART_FILE_DESC: 'Yaml 檔案，用於描述 Chart 的基本資訊，包括名稱版本等',
  README_FILE_DESC: '應用介绍、使用說明',
  REQUIREMENTS_FILE_DESC: '用於存放目前 Chart 依賴的其它 Chart 的說明檔案',
  VALUES_FILE_DESC: 'Chart 的預設值配置檔案',
  CHARTS_FILE_DESC: '該目錄中放置目前 Chart 依賴的其它 Chart',
  TEMPLATES_FILE_DESC:
    '部署檔案模板目錄，模板填入 values.yaml 中相應值，生成最終的 Kubernetes 配置檔案',
  NOTES_FILE_DESC: '使用指南',

  'Version Update Info': '版本更新說明',
  NO_VERSION_INFO_DESC: 'No version information is found.',

  developer: '開發者',
  isv: '應用服務商',
  business: '商務審核者',
  technical: '技術審核者',
  global_admin: '超級管理員',
  admin: '管理員',

  DOWNLOAD_SUCCESSFUL: '下載成功',

  PASSED: '已通過',
  Rejected: '已拒絕',
  Draft: '待提交',
  Suspended: '已暫停',
  Starting: '啟動中',
  Working: '工作中',
  Stopping: '停止中',
  Submitted: '等待審核',
  Submit: '提交',
  Review: '審核',
  Pass: '通過',
  Reject: '拒絕',
  Release: '發佈',
  Developing: '開發中',
  Published: '已上架',
  Recalled: '已下架',
  Recall: '下架',
  Activated: '已啟用',
  'In-review': '審核中',
  'in-review': '審核中',
  'Pending-review': '審核中',
  creating: '創建中',
  deleting: '刪除中',

  'Test Steps': '測試步驟',
  VERSION_SUBMIT_TEST_STEPS:
    '1. 所有依賴的 Chart 已經分别提交<br/>' +
    '2. 可以成功通過静態檢查 (helm lint) <br/>' +
    '3. 可以用預設值成功啟動應用 (helm install)：所有 Pod 是 running 狀態，所有服務 (service) 都至少有一個 endpoint<br/>' +
    '4. 使用的鏡像沒有安全漏洞 <br/>' +
    '5. 支持升級 <br/>' +
    '6. 支持自定義應用配置<br/>' +
    '7. 不要使用 Kubernetes 的 alpha 功能<br/>' +
    '8. 需要提供詳細的 README 檔案，包括對應用的介紹，前置條件和如何自定義配置參數<br/>',

  VERSION_SUBMIT_NOTE:
    '在正式提交審核之前，請確認您的應用已經通過了以下基本功能的測試',
  VERSION_SUBMIT_DOC: '更全面的測試手冊請參看',
  'Develop and test guide': '《開發者測試指南》',
  UPDATE_LOG_DESC: '用於詳細描述此次更新的具體内容',

  'Wrong version number format': '版本號的格式錯誤',

  // App Templates > Details
  APP_INSTANCES: 'App Instances',
  UPLOAD_NEW_VERSION: 'Upload New Version',
  UPLOAD_NEW_VERSION_DESC: 'Upload a new version of the app.',
  APP_VERSION_SCAP: 'App version',
  UPDATE_TIME_SCAP: 'Update time',
  TEST_INSTALLATION: 'Test Installation',
  SUBMIT_FOR_RELEASE: 'Submit for Release',
  VERSION_INFO: 'Version Information',
  INSTALL: 'Install',
  users: '用戶',
  User: '用戶',
  USER: '用戶',
  USER_LOW: 'user',
  USER_EMPTY_DESC: 'Please create a user.',
  Accounts: '帳號',
  'User Management': '用戶管理',
  'Authorized Projects': '授權項目',
  'Create User': '創建用戶',
  CREATE_USER: '添加用戶',
  EDIT_USER: '編輯用戶',
  user_active: '活躍',
  Avatar: '頭像',
  NOT_LOGIN_YET: '尚未登入',
  NOT_LOGGED_IN: '尚未登入',
  'Change Password': '修改密碼',
  PASSWORD_SETTINGS: '密碼設置',
  EMAIL: '郵箱',
  USER_AVATAR_TIP: '頭像尺寸必須小於 120px X 120px，支持 png，jpg 格式。',
  EMAIL_DESC: '郵箱可作為登入帳號',
  USERNAME_DESC:
    '最長 32 個字元，只能包含小寫字母、數字、點及隔符號("-")，且必須以小寫字母或數字開頭及結尾',
  USER_SETTING_EMAIL_DESC: '郵箱可作為登入帳號',
  PASSWORD_DESC: '密碼必須包含數字和大小寫字母，長度為 6 ~ 64 位',
  PASSWORD_INVALID_DESC: '密碼必須包含數字和大小寫字母，長度為 6 ~ 64 位',
  PLATFORM_ROLE_DESC:
    '角色類型根據權限範圍分為集群和項目兩類，目前角色的授權範圍為整個集群.',
  'New Password': '新的密碼',
  USERNAME_EMPTY_DESC: '請輸入用戶名稱',
  EMAIL_EMPTY_DESC: '請輸入郵箱',
  'Please repeat the new password': '請重複新的密碼',
  ENTER_CURRENT_PASSWORD_TIP: '請輸入目前密碼',
  PASSWORD_NOT_SAME_DESC: '兩次輸入的密碼必須一致',
  'Please select role': '請選擇角色',
  USERNAME_INVALID: '用戶名稱格式不合法。{message}',
  USERNAME_EXISTS: '用戶名稱已存在',
  EMAIL_EXISTS: '郵箱已存在',
  'Unable to delete itself': '無法刪除自己',
  'Login History': '登入歷史',
  Time: '時間',
  TIME: '時間',
  CONFIRM_PASSWORD: '重複新的密碼',

  USER_ACTIVE: '活躍',
  USER_AUTHLIMITEXCEEDED: '限制登入',
  USER_PENDING: '等待中',
  USER_DISABLED: '已禁用',
  USER_DESC:
    '系統管理員用此功能模組管理帳號，如創建、更新、讀取、刪除帳號等，同時還能關聯每個帳號的角色；用戶用帳號名稱或郵件地址登入 KubeSphere 平台。',
  USER_CREATE_DESC:
    '系統管理員用此功能模組管理帳號，如創建、更新、讀取、刪除帳號等，同時還能關聯每個帳號的角色；用戶用帳號名稱或郵件地址登入 KubeSphere 平台。',
  CLUSTER_ROLE_DESC: '集群角色定義了在集群範圍内授權用戶的訪問權限。',
  ROLE_BASEINFO_DESC: '',
  ROLE_AUTHORIZATION_DESC: '',
  MEMBER_ROLE_CREATE_DESC:
    '用戶的權限管理依賴項目角色定義，角色標識了用戶的身份，定義了用戶和可訪問/操作的資源之間的關係。當 KubeSphere 預設角色不滿足使用需求的時候，可以根據實際情況，為用戶創建自定義角色，自定義角色最大的優勢就是對平台資源的針對性管理，指定該角色擁有某些指定資源的何種權限。',

  'A built-in cluster administrator': '預設創建的管理員帳戶。',

  CURRENT_PASSWORD: '目前密碼',

  ENTER_CURRENT_PASSWORD_DESC: '您必須輸入正確的目前密碼才可更改為新的密碼',

  'At least 1 uppercase and lowercase letter': '至少 1 個大寫和小寫字母',
  'At least 1 number': '至少 1 個數字',
  'Password length is at least 6 characters': '密碼長度至少為 6',
  'Password Strength': '密碼強度',
  'Avoid using the password that has already been used on other websites or the one that can be easily guessed.':
    '避免使用您在其它網站上的密碼，或者是其他人很容易猜到的密碼',

  // Users > Details
  SOURCE_IP_ADDRESS: 'Source IP Address',
  LOGIN_HISTORY: 'Login History',
  NO_LOGIN_HISTORY: 'No login history is found.',
  CHANGE_PASSWORD: 'Change Password',
  SUCCESSFUL: 'Successful',
  FAILED: 'Failed',
  NEW_PASSWORD: 'New Password',
  CONFIRM_PASSWORD_TIP: 'Please enter the new password again.',
  LANGUAGE: 'Language',
  USER_SETTINGS: 'User Settings',
  LOG_OUT: 'Log Out',
  ABOUT: 'About',
  USERNAME_OR_EMAIL: 'Username or Email',
  WELCOME: 'Welcome',
  'Launch kubectl': '啟動 kubectl',
  COPIED_SUCCESSFUL: '複製成功',
  Copy: '複製',
  Disconnect: '斷開連接',
  connected: '已連接',
  disconnected: '未連接',
  'Kubeconfig File': 'Kubeconfig 檔案',
  'Put this into': '把它加入到',
  'KubeSphere Terminal': 'KubeSphere 終端',
  'Download File': '下載檔案',

  KUBECONFIG_TIP: `
    <h2><a id="KubeConfig__0"></a>kubeconfig 配置方法</h2>
    <p>查閱更多命令請參照 <a href="https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/" target="_blank">官方文件</a></p>
  `,

  VIEW_KUBE_CONFIG: 'kubeConfig 配置的相關操作包含查看和下載',

  KUBECTL_TIP: `
    <h2><a id="KubeCtl__0"></a>kubectl 常用命令</h2>
    <p>查閱更多命令請參照 <a href="https://kubernetes.io/docs/reference/kubectl/overview/" target="_blank">官方文件</a></p>
    <h3><a id="kubectl__3"></a>kubectl 輸出格式</h3>
    <ul>
    <li>顯示 Pod 的更多資訊</li>
    </ul>
    <p><code>kubectl get pod &lt;pod-name&gt; -o wide</code></p>
    <ul>
    <li>以 yaml 格式顯示 Pod 的詳細資訊</li>
    </ul>
    <p><code>kubectl get pod &lt;pod-name&gt; -o yaml</code></p>
    <h3><a id="kubectl__13"></a>kubectl 操作</h3>
    <h4><a id="1__15"></a>1. 創建資源對象</h4>
    <ul>
    <li>根據 yaml 配置檔案一次性創建 service 和 rc</li>
    </ul>
    <p><code>kubectl create -f my-service.yaml</code></p>
    <ul>
    <li>對目錄下所有 .yaml、.yml、.json 檔案進行創建操作</li>
    </ul>
    <p><code>kubectl create -f &lt;directory&gt;</code></p>
    <h4><a id="2__25"></a>2. 查看資源對象</h4>
    <ul>
    <li>查看所有 Pod 列表</li>
    </ul>
    <p><code>kubectl get pods</code></p>
    <ul>
    <li>查看 rc 和 service 列表</li>
    </ul>
    <p><code>kubectl get services</code></p>
    <h4><a id="3__35"></a>3. 查看資源詳情</h4>
    <ul>
    <li>顯示 Node 的詳細資訊</li>
    </ul>
    <p><code>kubectl describe nodes &lt;node-name&gt;</code></p>
    <ul>
    <li>顯示 Pod 的詳細資訊</li>
    </ul>
    <p><code>kubectl describe pods/&lt;pod-name&gt;</code></p>
  `,
  ACCESS_MODE_RWO: '單個節點讀寫',
  ACCESS_MODE_ROX: '多節點唯讀',
  ACCESS_MODE_RWX: '多節點讀寫',
  // Volume Pages
  ACCESS_MODE_TCAP: '訪問模式',

  VOLUME_STATUS_BOUND: '準備就緒',
  VOLUME_STATUS_LOST: '丢失',
  VOLUME_STATUS_PENDING: '等待中',
  VOLUME_STATUS_TERMINATING: '刪除中',
  VOLUME_STATUS_UPDATING: '更新中',

  VOLUME_CONDITION_FILESYSTEMRESIZEPENDING: '硬碟擴容中(FilesystemSizePending)',

  volumes: '儲存卷',
  VOLUMES: '儲存卷',
  PersistentVolumeClaim: '儲存卷',
  'Volume Usage': '儲存卷用量',
  VOLUME: '儲存卷',
  BACKEND_IDENTIFIER: 'Backend Identifier',
  VOLUME_PL: '儲存卷數量',
  NUMBER_OF_VOLUMES: 'Number of volumes',
  VOLUME_LOW: 'volumes',
  VOLUME_INSTANCE: 'Volume Instance',
  VOLUME_INSTANCE_PL: 'Volume Instances',
  VOLUME_INSTANCE_LOW: 'volume instance',
  VOLUME_INSTANCE_EMPTY_DESC: 'Please bind a volume to a workload.',
  'Create Volume': '創建儲存卷',
  'Delete Volume': '刪除儲存卷',
  'storage classes': '儲存類型',
  storageclasses: '儲存類型',
  'Create Storage Class': '創建儲存類型',
  'Storage Class': '儲存類型',
  STORAGE_CLASS: '儲存類型',
  STORAGE_CLASS_PL: 'Storage Classes',
  STORAGE_CLASS_LOW: 'storage class',
  STORAGE_CLASS_EMPTY_DESC: 'Please create a storage class.',
  STORAGE_CLASS_VALUE: 'Storage class: {value}',
  STORAGE_CLASS_SETTINGS: '儲存類型設置',
  MOUNT_INFORMATION: '掛載資訊',
  // Volumes List Page
  MOUNT_STATUS: '掛載',
  MOUNTED: '已掛載',
  NOT_MOUNTED: '未掛載',
  Scalable: '可擴容性',
  CREATE: '創建',
  UPDATE: 'Update',
  RECLAIM_POLICY: '回收機制',
  DELETE_STORAGE_TIP: '如果儲存卷正在被掛載時，等待工作負載被刪除時一同刪除。',
  SRORAGE_SETTING_DESC:
    'ReadWriteOnce：單個節點讀寫。<br/>ReadOnlyMany：多節點唯讀。<br/>ReadWriteMany：多節點讀寫。<br/>掛載時只能使用一種模式。',
  'Default Storage Class': '預設儲存類型',
  'Default Volume': '預設儲存卷',
  'Parameters (key-value pairs)': '參數 (鍵值對)',
  'Mount Options': '掛載選項',
  VOLUME_EXPANSION: '儲存卷擴容',
  'Mount Status': '掛載狀態',
  MOUNTED_PODS: '已掛載容器組',
  AVAILABLE: '閒置',
  IN_USER: '使用中',

  VOLUME_NAME_EXIST: '儲存卷名稱已使用',

  'Used Capacity': '已分配儲存容量',
  AVAILABLE_CAPACITY: '剩餘儲存容量',

  PersistentVolumes: '持久化儲存卷',

  SET_AS_DEFAULT_STORAGE_CLASS: '設為預設儲存類型',
  'Storage Class Name': '儲存類型名稱',
  DEFAULT: '預設',
  StorageClasses: '儲存類型',
  STORAGE_SYSTEM: '儲存系統',

  ACCESS_MODE: '支持的訪問模式',
  ACCESS_MODE_SCAP: '訪問模式',

  'Custom Provisioner': '自定義供應者',
  Parameters: '參數',
  'Apply immediately': '立即生效',

  VOLUME_SIZE_TIP: '儲存卷容量必須大於 0。',

  STORAGECLASSES_BASEINFO_DESC:
    '儲存類型記錄管理員所提供的某類儲存的配置資訊，創建特定類型的儲存卷之前必須已配置相應的儲存類型。',
  VOLUMES_BASEINFO_DESC:
    '儲存卷可將數據持久化，生命週期獨立於應用負載，創建儲存卷前請確保已創建儲存類型。',
  VOLUME_SETTINGS_DESC:
    '按照需求填寫儲存卷的容量大小，儲存卷大小和訪問模式必須與儲存類型和儲存服務端能力相適應，訪問模式通常選擇為 RWO。',

  VOLUME_DESC:
    '儲存卷供用戶創建的工作負載使用，是將工作負載數據持久化的一種資源對象。',
  VOLUME_EMPTY_DESC:
    '儲存卷供用戶創建的工作負載使用，是將工作負載數據持久化的一種資源對象。',
  STORAGE_CLASS_DESC:
    '存儲類型（StorageClass）支持動態卷供應，使管理員能夠按需創建新的存儲卷。',
  STORAGE_CLASS_CREATE_DESC:
    '儲存類型 (StorageClass) 是由集群管理員配置儲存服務端參數，並按類型提供儲存給集群用戶使用。',
  'STORAGE-CLASSES_BASEINFO_DESC':
    '儲存類型記錄管理員所提供的某類儲存的配置資訊，創建特定類型的儲存卷之前必須已配置相應的儲存類型。',
  STORAGE_CLASS_SETTING_DESC:
    '儲存類型記錄管理員所提供的某類儲存的配置資訊，創建特定類型的儲存卷之前必須已配置相應的儲存類型。',

  STORAGE_CLASS_SET_DEFAULT_DESC:
    '設置為預設儲存類型後，如果沒有特殊指定，系統將預設創建該類型的儲存卷。一個 KubeSphere 集群中僅允許設置一個預設儲存類型',

  PROVISIONER_DESC: '提供後端儲存',
  VOLUME_STORAGE_CLASS_DESC: '選擇一個存儲類型來創建具體種類的存儲卷。',

  ACCESS_MODES_DESC: '選擇儲存類型支持的訪問模式',

  WHAT_IS_STORAGE_CLASS_Q: '什麼是存儲類型?',
  WHAT_IS_STORAGE_CLASS_A:
    '存儲類型（Storage Class）是由集群管理員配置的多種存儲類型，不同的存儲類型為集群用戶提供不同類型的存儲卷。',

  WHAT_IS_LOCAL_VOLUME_Q: '什麼是本地儲存卷（Local Volume）?',
  WHAT_IS_LOCAL_VOLUME_A:
    '本地儲存卷表示掛載的本地儲存設備，如硬碟、分割區或目錄。',
  CHOOSE_STORAGE_SYSTEM_TIP: '選擇您需要儲存系統',
  PROVISIONER_DEPENDENCE_DESC:
    'You need to deploy a plugin in your storage system before it provides services.',

  EXPAND_VOLUME: '儲存卷擴容',
  EXPAND: 'Expand',
  VOLUME_EXPAND_TIPS:
    '当前儲存卷已掛載至工作負載，因此擴容會導致工作負載重啟，並產生新的版本。可能業務會短暫的中斷。',
  Expand: '擴容',

  QINGCLOUD_CSI_DESC:
    'Use QingCloud CSI as the underlying storage plugin. <a href="https://github.com/yunify/qingcloud-csi/blob/master/README.md#feature-matrix">Learn More</a>',

  MAXSIZE: 'Maximum Size',
  MINSIZE: 'Minimum Size',
  STEPSIZE: 'Step Size',
  FSTYPE: 'File System Type',
  TAGS: 'Tag',

  QINGCLOUD_CSI_TYPE_DESC:
    '在青雲雲平台中，0 代表性能型硬碟，2 代表容量型硬碟，3 代表超高性能型硬碟，5 代表企業級分布式 SAN（NeonSAN）型硬碟，100 代表基礎型硬碟，200 代表企業型硬碟',
  CREATE_VOLUME_MAX_SIZE: 'Maximum size of the volume.',
  CREATE_VOLUME_STEP_SIZE: 'Step size of the volume.',
  CREATE_VOLUME_MIN_SIZE: 'Minimum size of the volume.',
  VOLUME_FS_TYPE: 'Supports ext3, ext4, and XFS. The default type is ext4.',
  QINGCLOUD_VOLUME_TAGS_DESC:
    'Add tags to the storage volume. Use commas to separate multiple tags.',

  GLUSTERFS_RESTURL_DESC:
    'Heketi REST URL that provisions volumes, for example, <Heketi Service cluster IP Address>:<Heketi Service port number>.',
  GLUSTERFS_ID_DESC: 'Gluster cluster ID.',
  GLUSTERFS_RESTAUTHENABLED_DESC: ' Gluster 啟用对 REST 伺服器的認證',
  GLUSTERFS_RESTUSER_DESC:
    'Username of Gluster REST service or Heketi service.',
  GLUSTERFS_SECRET_NAMESPACE_DESC: 'Namespace of the Heketi user secret.',
  GLUSTERFS_SECRET_NAME_DESC: 'Name of the Heketi user secret.',
  GLUSTERFS_GID_MIN_DESC: 'Minimum GID of the volume.',
  GLUSTERFS_GID_MAX_DESC: 'Maximum GID of the volume.',
  GLUSTERFS_VOLUME_TYPE_DESC:
    'Type of volume. The value can be none, replicate:<Replicate count>, or disperse:<Data>:<Redundancy count>. If the volume type is not set, the default volume type is replicate:3.',

  CEPHRBD_MONITORS_DESC: 'IP address of Ceph monitors.',
  CEPHRBD_ADMIN_ID_DESC: 'ceph 集群能夠創建卷的用戶 ID',
  CEPHRBD_ADMIN_SECRET_NAME_DESC: 'Secret name of adminid.',
  CEPHRBD_ADMIN_SECRET_NAMESPACE_DESC: 'adminSecrect 所在的項目',
  CEPHRBD_POOL_DESC: 'Name of the Ceph RBD pool.',
  CEPHRBD_USERID_DESC: 'ceph 集群能夠掛載卷的用戶 ID',
  CEPHRBD_USER_SECRET_NAME_DESC: 'userid 的密鑰名',
  CEPHRBD_USER_SECRET_NAMESPACE_DESC: 'userSecret 所在的項目',
  CEPHRBD_FS_TYPE_DESC: 'File system type of the storage volume.',
  CEPHRBD_IMAGE_FORMAT_DESC:
    'Option of the Ceph volume. The value can be "1" or "2". imageFeatures needs to be filled when you set imageFormat to "2".',
  CEPHRBD_IMAGE_FEATURES_DESC:
    'Additional function of the Ceph cluster. The value should only be set when you set imageFormat to "2".',

  DEPENDENT_STORAGE_CLASS_DELETE_TIPS:
    'Make sure if there are resources dependent on the storage class. If there are, you need to disable the resources before it the resource functions are affected.',

  CREATE_VOLUME_WITH_SNAPSHOT: '基於快照創建儲存卷',

  CREATE_SNAPSHOT: '創建快照',
  CLONE_VOLUME: '儲存卷克隆',
  CLONE: 'Clone',
  ALLOW_VOLUME_SNAPSHOT: '允許存儲卷快照',
  ALLOW_VOLUME_CLONE: '允許存儲卷克隆',
  ALLOW_VOLUME_EXPANSION: '允許存儲卷擴容',
  PV: '存儲卷後端',
  VOLUME_BACKEND_TCAP: '存儲卷後端',
  PV_STATUS_AVAILABLE: '可用',
  PV_STATUS_BOUND: '已綁定',
  PV_STATUS_RELEASED: '删除中',
  PV_STATUS_FAILED: '失败',
  'Bound Volume': '已綁定存儲卷',
  RECYCLING_STRATEGY: '回收機制',
  VOLUME_SNAPSHOT_STATUS_CREATING: '創建中',
  VOLUME_SNAPSHOT_STATUS_READY: '創建成功',
  VOLUME_SNAPSHOT_STATUS_FAILED: '創建失敗',
  VOLUME_SNAPSHOT_STATUS_DELETING: '刪除中',

  SNAPSHOT_PL: '快照資訊',

  VolumeSnapshots: '儲存卷快照',
  VOLUME_SNAPSHOT_DESC:
    '儲存卷快照表示儲存卷的時間點副本。快照可用於配置新卷（預先填充快照數據）或將現有儲存卷還原到先前狀態（由快照表示）',
  VOLUME_SNAPSHOT_EMPTY_DESC:
    '儲存卷快照表示儲存卷的時間點副本。快照可用於配置新卷（預先填充快照數據）或將現有儲存卷還原到先前狀態（由快照表示）',
  WHAT_IS_VOLUME_SNAPSHOTS: '什麼是儲存卷快照',

  CREATE_VOLUME_BY_STORAGE_CLASS: '通過儲存類型',
  CREATE_VOLUME_BY_SNAPSHOT: '通過儲存卷快照創建',
  SELECT_SNAPSHOT_TO_CREATE_VOLUME: '選擇已有的儲存卷快照來創建存儲卷。',
  SELECT_STORAGE_CLASS_CREATE_VOLUME: '選擇已有的存儲類型來創建存儲卷。',

  CLUSTER_VOLUME_DIFF_DESC: '可針對不同集群，選擇不同的儲存類型',

  VOLUME_MONITORING_TIP:
    'KubeSphere 採集的是儲存卷的設備用量數據，未掛載的儲存卷暫時採集不到，並且對於如 OpenEBS/Local PV、NFS 等路徑型儲存卷通常與實際用量有一定出入。詳見<a href="https://github.com/kubesphere/kubesphere/issues/2921" target="_blank">儲存卷監控數據分析</a>。',
  VOLUME_FUNCTION_MANAGEMENT_TIP:
    'Volume Management only controls whether the following features are enabled in the KubeSphere web console. Before the features are enabled, contact your system administrator to confirm that they are supported by the storage system.',

  // Storage Class > GlusterFS
  RESTURL: 'REST URL',
  CLUSTER_ID: 'Cluster ID',
  REST_AUTH_ENABLED: 'REST Authentication',
  REST_USER: 'REST User',
  VOLUME_TYPE: 'Volume Type',
  SECRET_NAME: 'Secret Name',
  REST_AUTH_TRUE: 'True',
  CEPH_MONITOR_IP: 'IP address and port number',
  SECRET_NAMESPACE: 'Secret Namespace',
  GID_MIN: 'Minimum GID',
  GID_MAX: 'Maximum GID',
  CUSTOM: 'Custom',
  PARAMETERS: 'Parameters',
  VOLUME_SNAPSHOT_CLASS: '快照類型',
  SNAPSHOT_EMPTY_TIP: '請選擇一個快照類型。',
  VOLUME_BINDING_MODE: 'Volume Binding Mode',
  IMMEDIATE_BINDING: 'Immediate binding',
  BINDING_WAIT: 'Delayed binding',
  DEFAULT_STORAGE_CLASS: 'Default Storage Class',

  // Storage Class > Detail
  STORAGE_CLASS_SCAP: 'Storage class',
  CREATE_VOLUME: 'Create Volume',
  VOLUME_MANAGEMENT: 'Volume Management',
  SET_DEFAULT_STORAGE_CLASS_TITLE: 'Set as Default Storage Class',
  VOLUME_COUNT: 'Volumes',
  NODE_CPU_UTILISATION: 'CPU 使用率',
  NODE_LOAD1: 'CPU 平均負載',
  NODE_MEMORY_UTILISATION: '記憶體使用率',
  NODE_DISK_SIZE_UTILISATION: '本地儲存用量',
  NODE_POD_UTILISATION: '容器組用量',
  NODE_DISK_INODE_UTILISATION: 'Inode 使用率',

  SORT_BY_NODE_CPU_UTILISATION: '按 CPU 使用率排行',
  SORT_BY_NODE_MEMORY_UTILISATION: '按記憶體使用率排行',
  SORT_BY_NODE_DISK_SIZE_UTILISATION: '按本地儲存用量排行',
  SORT_BY_NODE_POD_UTILISATION: '按容器組用量排行',
  SORT_BY_NODE_DISK_INODE_UTILISATION: '按 Inode 使用率排行',

  SORT_BY_NODE_LOAD1: '按 CPU 平均負載排行',
  SORT_BY_NAMESPACE_MEMORY_USAGE_WO_CACHE: '按記憶體使用量排行',
  SORT_BY_NAMESPACE_CPU_USAGE: '按 CPU 使用量排行',
  SORT_BY_NAMESPACE_POD_COUNT: '按容器組用量排行',
  SORT_BY_NAMESPACE_NET_BYTES_RECEIVED: '按網路流入速率排行',
  SORT_BY_NAMESPACE_NET_BYTES_TRANSMITTED: '按網路流出速率排行',
  SORT_BY_WORKSPACE_MEMORY_USAGE: '按記憶體使用量排行',
  SORT_BY_WORKSPACE_MEMORY_USAGE_WO_CACHE: '按記憶體使用量排行',
  SORT_BY_WORKSPACE_POD_COUNT: '按容器組用量排行',
  SORT_BY_WORKSPACE_CPU_USAGE: '按 CPU 使用量排行',
  SORT_BY_WORKSPACE_NET_BYTES_TRANSMITTED: '按網路流出速率排行',
  SORT_BY_WORKSPACE_NET_BYTES_RECEIVED: '按網路流入速率排行',
  SORT_BY_WORKLOAD_CPU_USAGE: '按 CPU 使用量排行',
  SORT_BY_WORKLOAD_MEMORY_USAGE_WO_CACHE: '按記憶體使用量排行',
  SORT_BY_WORKLOAD_NET_BYTES_TRANSMITTED: '按網路流出速率排行',
  SORT_BY_WORKLOAD_NET_BYTES_RECEIVED: '按網路流入速率排行',
  PLATFORM_SETTINGS: '平台設置',
  'Platform Settings': '平台設置',

  'Third-party Login': '第三方登入',

  'Protocol Type': '協定類型',

  Configure: '配置',
  'not configured': '暫未配置',

  'Current third-party login configurations': '目前第三方登入配置',

  'Server Address': '伺服端地址',

  'Please input client id': '請輸入 Client ID',
  'Please input server address': '請輸入伺服端地址',

  THIRD_PARTY_LOGIN_DESC:
    '當使用第三方服務登入的方式進行對接時，需要用戶輸入相關屬性資訊，之後會自動創建一個與該用戶關聯的本地用戶，以便於在環境中進行安全登入。',

  THIRD_PARTY_LOGIN_Q: '支持哪些第三方登入？',
  THIRD_PARTY_LOGIN_A: '支持 LDAP, AD, OAuth 以及 Github OAuth',

  OAUTH_DESC:
    'OAuth 協定為用戶資源的授權提供了一個安全的、開放而又簡易的標準。',
  GITHUB_OAUTH_DESC: 'GitHub OAuth 使用組織成員身份授予訪問權限。 ',
  ServiceAccounts: '服務帳戶',
  ServiceAccount: '服務帳戶',
  SERVICE_ACCOUNT: '服務帳戶',
  SERVICE_ACCOUNT_PL: '服務帳戶',
  SERVICE_ACCOUNT_LOW: 'service account',
  'Edit Service Account': '編輯服務帳戶',
  CHANGE_ROLE: '修改角色',
  SECRET_DETAILS: '保密字典詳情',
  SERVICE_ACCOUNT_DESC:
    '服務帳戶（Service Account）為 Pod 中運行的進程提供了壹個標識，用於訪問 API Server。',
  SERVICE_ACCOUNT_EMPTY_DESC: 'Please create a service account.',
  INVALID_YAML_FILE_FORMAT: 'YAML 文件格式錯誤。',

  SELECT_PROJECT_ROLE_DESC: '選擇一個項目角色以指定權限。',

  SERVICEACCOUNT_KUBECONFIG_DESC:
    'Kubeconfig 配置方法請參照 <a href="https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/" target="_black">官方文檔</a> ，下載後請將服務地址修改為 Kubernetes API 的外部地址。',

  // Service Account Detail Page
  SECRET_VALUE: '保密字典：{value}',
  SERVICE_MONITORING_EXPORTER: '服務監控導出器',
  'Target Service': '目標服務',
  EXPORTER_SERVICE_PORTS: '導出服務端口',
  SCRAPE_INTERVAL_MIN: '採集間隔（分鐘）',
  'View Monitor': '查看監控',
  MONITORING_EXPORTER: '監控導出器',
  MONITORING_EXPORTER_VALUE: 'Monitoring exporter: {value}',

  SELECT_AUTHENTICATION_METHOD: '選擇認證方式',
  PORT_CONNECTION_AUTHENTICATION: '端口連接認證。',

  CREATE_A_NEW_SECRET: '建創新保密字典',
  REFRESH_SECRETS: '刷新保密字典。',

  NO_AUTH_TIP: '接口可直接連接，無須認證。',

  SCRAP_INTERVAL_DESC: '監控數據採集區間隔，默認為 1 分鐘',
  SCRAP_TIMEOUT_DESC: '超時，默認值 10 秒',

  // Service Monitoring Exporter Form
  CERTIFICATE_AUTHORITY: 'Certificate Authority',
  ENCRYPTION_KEY: 'Encryption Key',
  SERVER_NAME: 'Server Name',
  NO_AUTHENTICATION_TCAP: 'No Authentication',
  TLS_SETTINGS_TCAP: 'TLS Settings',
  BEARER_TOKEN_TCAP: 'Bearer Token',
  BASIC_AUTHENTICATION_TCAP: 'Basic Authentication',
  services: '服務',
  routes: '應用路由',
  Ports: '端口',
  selector: '選擇器',
  EXTERNAL_IP_ADDRESS: '外部 IP 地址',
  EXTERNAL_IP_ADDRESS_SCAP: 'External IP address',
  'LoadBalancer IP': '負載平衡 IP',
  CREATE_SERVICE: '創建服務',
  'Delete Service': '刪除服務',
  'Target Port': '目標端口',
  CONTAINER_PORT: '容器端口',
  CONTAINER_PORT_SCAP: 'Container port',
  SERVICE_PORT_SCAP: 'Service port',
  CONTAINER_PORT_VALUE: '容器端口：{value}',
  SERVICE_PORT: '服務端口',
  SERVICE_PORT_VALUE: '服務端口：{value}',
  'Node Port': '節點端口',
  'Node Port(s)': '節點端口',
  EDIT_SERVICE: '編輯服務',
  EDIT_EXTERNAL_ACCESS: '編輯外網訪問',
  EDIT_MONITORING_EXPORTER: 'Edit Monitoring Exporter',
  'Please select Service': '請選擇 Service',
  'Path is Required': '請填寫 Path',
  VIRTUAL_IP: '虛擬 IP',
  VIRTUAL_IP_ADDRESS: 'Virtual IP address',

  SERVICE_TYPE_TCAP: '服務類型',
  SERVICE_TYPE_DESC: 'Select a Service type.',
  SELECT_SERVICE_TYPE_DESC:
    'Create a stateless or stateful Service, or map a Service to an external Service.',
  APP_SELECT_SERVICE_TYPE_DESC: 'Create a stateless or stateful Service.',
  JAVA: 'Java',
  NODEJS: 'Node.js',
  PYTHON: 'Python',
  BINARY: 'Binary',
  ACCESS_INFORMATION: '服務訪問',
  STATELESS_SERVICE: '無狀態服務',
  STATEFUL_SERVICE: '有狀態服務',
  EXTERNAL_SERVICE: '外部服務',
  'Simple Service': '簡單服務',
  'Associated Application': '關聯應用',
  'Service Mesh': '服務治理',

  'Internal access': '内部訪問',
  ACCESS_TYPE: '訪問類型',
  INTERNAL_ACCESS_MODE: 'Internal Access Mode',

  'Service Name': '服務名稱',
  'Please input service name': '請輸入服務名稱',
  EXTERNAL_SERVICE_ADDRESS_EMPTY_DESC: '請輸入 ExternalName。',
  SPECIFY_WORKLOAD: '指定工作負載',
  SPECIFY_WORKLOAD_TO_CREATE_SERVICE: 'Specify Workload to Create Service',
  EDIT_YAML_TO_CREATE_SERVICE: 'Edit YAML to Create Service',
  CREATE_EXTERNAL_SERVICE: 'Create External Service',
  'Specify Node': '指定節點',
  'Please input ExternalName': '請輸入 ExternalName',
  'Specify Workload': '指定工作負載',
  SPECIFY_NODE: '指定節點',
  'Add Selector': '添加選擇器',

  AUTO_REFRESH: '自动',

  INVALID_PORT_DESC: 'Please enter a valid port number.',
  INVALID_PORT: '端口無效。',
  'Not Associate': '不關聯',

  CUSTOM_SERVICE: 'Custom Service',
  CUSTOMIZE_SERVICE: 'Customize Service',
  'Create service by specifying workloads': '指定工作負載創建服務',
  'Create service by Yaml': '通過 Yaml 創建服務',

  'Sure to delete the service(s)?': '確認刪除服務',
  NO_SERVICE_RELATED_RESOURCE_DESC: '目前服務下沒有關聯的資源',
  NO_WORKLOAD_RELATED_RESOURCE_DESC:
    'No resource related to the workload is found.',

  'Automatically assign Service IP': '自動分配服務 IP',
  'Do not assign Service IP': '不分配服務 IP',
  'Map Services outside the cluster': '映射集群外部的服務',
  ENTER_PORT_NUMBER: '請輸入端口',
  PORT_EMPTY: '請輸入端口',
  'Please select a workload': '請選擇一個工作負載',
  ENTER_SELECTOR_TIP: 'Please set a workload selector.',
  TOTAL_WORKLOADS_VALUE: '共 {count} 個工作負載',

  STICKY_SESSION: '會話保持',
  MAXIMUM_STICKINESS_DURATION: '最大會話保持時間（s）',
  STICKY_SESSION_DESC:
    'Set the system to forward all requests from the same client to the same backend within a specified duration.',

  SERVICE_NAME_DESC:
    'The name can contain only lowercase letters, numbers, and hyphens (-), must start with a lowercase letter, and must end with a lowercase letter or number. The maximum length is 63 characters.',

  SERVICE_DESC:
    'Services provide an abstract way to expose applications running on a Pod as network services.',
  SERVICE_EMPTY_DESC: 'Please create a Service.',

  SERVICES_BASEINFO_DESC:
    '創建服務需要提供服務的名稱和描述，服務名稱不能和同一項目下已有的服務名稱相同。',
  SERVICES_SETTINGS_DESC: '服務設置定義了如何來訪問已有的工作負載。',

  CREATE_EXTERNAL_SERVICE_DESC:
    '通過返回 CNAME 和它的值，可以將服務映射到 externalName 字段的内容',

  ACCESS_NONE_TIP: '不提供外網訪問。',
  ACCESS_NODEPORT_TIP: '通過集群節點的對應端口來訪問服務。',
  ACCESS_LOADBALANCER_TIP: '通過負載平衡器來訪問服務。',

  'The current selector': '目前設置的選擇器',
  NO_WORKLOAD_MATCH_SELECTOR: 'The current selector matches no workload.',
  WORKLOADS_MATCH_SELECTOR_SI:
    'The current selector ({selector}) matches {count} workload.',
  WORKLOADS_MATCH_SELECTOR_PL:
    'The current selector ({selector}) matches {count} workloads.',
  'Commonly included tags in the current workloads':
    '目前的工作負載中共同包含的標籤',
  SERVICE_SELECTOR_AFFECT_2: '共影響到 {count} 個工作負載',
  ' has no corresponding workload.': '沒有對應的工作負載',
  'Please input selectors that have corresponding workloads':
    '請輸入有對應工作負載的選擇器',
  Creating: '正在創建',
  'Creation failed, please delete and try again': '創建失敗，請刪除後重試',

  ADD_ROUTING_RULE: '添加路由規則',

  VIRTUAL_IP_TITLE: 'Virtual IP Address',
  VIRTUAL_IP_DESC:
    'The cluster generates a unique IP address for the Service and the Service can be accessed within the cluster using this IP address.',
  INTERNAL_DOMAIN_NAME: 'Internal Domain Name',
  INTERNAL_DOMAIN_NAME_DESC:
    'The cluster does not generate an IP address for the Service and the Service can be directly accessed using the Endpoint IP address of the Service.',
  HEADLESS_EXTERNAL_NAME_TITLE:
    '映射集群外部的地址來訪 Headless (externalname)',
  HEADLESS_EXTERNAL_NAME_DESC: '將集群或者項目外部服務映射到集群或項目内。',

  SERVICE_EXTERNAL_ACCESS_DESC: '將服務暴露给外網',

  SERVICE_NODE_PORT_DESC:
    '如果您目前的網路與集群節點在同一網路内，那麼您可以透通<集群 IP 地址>:<NodePort>進行訪問，或者通過<節點 IP 地址>:<NodePort>進行訪問。',

  SERVICE_TYPE: 'Service Type',
  SELECT_SERVICE_TYPE: 'Select Service Type',

  SELECT_WORKLOAD_DESC: '將工作負載所創建的容器組副本的 Label 作為預填充内容。',

  SPECIFY_NODE_DESC: '指定節點可以將節點的 Label 作為預填充內容',

  SERVICE_TYPES_Q: '服務的類型',
  SERVICE_TYPES_A:
    '服務分為無狀態服務 (Virtual Service + Depolyment) 及有狀態服務 (Headless Service +Statefulset), 無狀態服務中多個副本可以共享一個儲存卷、有狀態服務需要擁有自己獨立的儲存卷',

  SCENARIOS_FOR_SERVICES_Q: '無狀態服務和有狀態服務的使用場景?',
  SCENARIOS_FOR_SERVICES_A:
    '無狀態服務適用於不需要數據持久化的場景，並且多個實例對統一請求的響應式相同的場景(例如 Nginx、Tomcat 等)；有狀態服務適用於需要數據儲存功能的服務、或者指多線程類型的服務，列隊等 (mysql 資料庫、kafka、zookeeper 等)。',
  STATEFUL_SERVICE_DESC:
    '有狀態服務用來管理有狀態應用，可以保證部署和擴容縮容的順序，提供了穩定的持久化儲存和網路標識，有序伸縮等',
  STATELESS_SERVICE_DESC:
    '容器服務中最常用的一種服務，通過定義容器組模板來控制容器組狀態，包括滾動升級和回滾',
  SERVICE_FROM_CODE: '通過代碼構建新的服務',
  SERVICE_FROM_ARTIFACT: '通過成品構建新的服務',
  SERVICE_FROM_CODE_DESC:
    '您可以將已有的代碼通過  Source to Image 的方式構建成鏡像並部署',
  SERVICE_FROM_ARTIFACT_DESC: '您可以將已有成品構建成新的鏡像並完成部署',
  LANGUAGE_TYPE_VALUE: '語言類型：{value}',
  ARTIFACT_TYPE_VALUE: 'Artifact Type: {value}',
  SPECIFY_WORKLOAD_DESC: '通過已有的容器組來創建服務',
  DELETE_SERVICE_DESC_SI:
    '您即將刪除服務 {resource}，請您進行確認是否刪除關聯資源?',
  DELETE_SERVICE_DESC_PL:
    '您即將刪除服務 {resource}，請您進行確認是否刪除關聯資源?',

  CUSTOMIZE_SERVICE_DESC:
    '您可以通過指定工作負載或者編輯配置 (Yaml) 來創建服務',

  SERVICE_TYPE_STATEFULSERVICE: '有狀態服務',
  SERVICE_TYPE_STATELESSSERVICE: '無狀態服務',
  SERVICE_TYPE_EXTERNALSERVICE: '映射外部服務',
  SERVICE_TYPE_STATEFULSERVICE_SCAP: 'Stateful service',
  SERVICE_TYPE_STATELESSSERVICE_SCAP: 'Stateless service',
  SERVICE_TYPE_EXTERNALSERVICE_SCAP: 'External service',

  SERVICE_PORTS_DESC: 'Set the container ports and Service ports.',

  INTERNAL_DOMAIN_NAME_SCAP: '集群内部訪問方式(DNS)',

  MAXIMUM_STICKINESS_DURATION_DESC:
    'Set a maximum stickiness duration. The value range is 0 to 86400 and the default value is 10800.',

  // Services
  WORKLOAD_SELECTOR: 'Workload Selector',
  UNKNOWN_SERVICE_TYPE: 'Unknown Service Type',
  HEADLESS: 'Headless',
  EXTERNALNAME: 'ExternalName',
  EXTERNAL_SERVICE_ADDRESS: 'External Service Address',
  EXTERNAL_SERVICE_ADDRESS_DESC:
    'Enter the domain name of an external Service.',
  UNKNOWN: 'Unknown',
  EXTERNALNAME_EXAMPLE: 'Example: ',
  PORT_PL: 'Ports',
  ENDPOINT: 'Endpoint',
  secrets: '密鑰',
  Secrets: '密鑰',
  Secret: '密鑰',
  SECRET: '保密字典',
  CODE_REPOSITORY_KEY: '代碼倉庫密鑰',
  SECRET_PL: '保密字典',
  SECRET_LOW: '保密字典',
  SECRET_FIELD_COUNT: '字段數量',
  EDIT_SECRET: '編輯保密字典',
  DATA_SETTINGS: 'Data Settings',
  KUBECONFIG_SETTINGS: 'kubeconfig Settings',
  PRIVATE_KEY_TCAP: '私鑰',
  IMAGE_REGISTRY_INFORMATION: '鏡像倉庫保密字典',
  TLS_INFORMATION: 'TLS information',
  IMAGE_REGISTRY_SECRET_TCAP: '鏡像倉庫保密字典',
  CREDENTIAL_NAME_EMPTY_DESC: '請輸入憑證 ID。',
  ENTER_PRIVATE_KEY_DESC: '請輸入私鑰。',
  ENTER_DATA_DESC: '請添加數據。',
  Unverified: '鏡像倉庫密鑰驗證失敗。',
  SECRET_TYPE_DESC: '選擇一個保密字典類型',

  SECRET_DESC:
    '保密字典（Secret）是一種包含少量敏感資訊的資源對象，例如密碼、token、秘鑰等，以鍵值對形式保存並且可以在容器組中使用。',
  SECRET_EMPTY_DESC:
    '保密字典是一種包含少量敏感資訊的資源對象，例如密碼、token、秘鑰等，以鍵/值對形式保存並且可以在容器組中使用。',

  SECRET_NO_CHINESE_CODE_DESC:
    '保密字典的鍵必須由字母數字字符、連字符（-）、下劃線（_）或句點（.）組成。',

  REGISTRY_ADDRESS_TCAP: '倉庫地址',
  REGISTRY_SECRET_VER_ERR: '鏡像倉庫驗證失敗。',
  REGISTRY_SECRET_VER_SUC: '鏡像倉庫驗證通過。',
  USERNAME_PASSWORD: '帳號密碼保密字典',
  ACCOUNT_PASSWORD_SECRET_TCAP: '帳號密碼保密字典',

  DATA: '數據',
  ADD_DATA_TCAP: '添加數據',
  EDIT_DATA_TCAP: '編輯數據',
  ADD_DATA_DESC: '添加鍵值對數據。',

  DATA_KEY: '鍵（Key）',
  DATA_VALUE: '值(Value)',
  REGISTRY_ADDRESS_TIP: '設置鏡像倉庫地址，例如 docker.io。',

  IMAGE_REGISTRY_REQUIRED_DESC: '請設置倉庫地址、用戶名和密碼信息。',

  IMAGE_REGISTRY_VALIDATE_TIP: '創建鏡像倉庫密鑰前, 請先驗證用戶名和密碼。',

  'Please input the registry address': '請輸入鏡像倉庫地址。',
  // Secret Type Drop-down List
  SECRET_VALUE_LABEL: '{value}（{label}）',
  CREATE_SECRET: '新建保密字典',
  'Set Replicas': '固定副本数量',
  SPECIFY_WEIGHTS_DESC:
    '設定的總副本數將按照設定的權重分配到選擇的集群中，非可用集群的副本會自定遷移到可用集群上。',
  SPECIFY_REPLICAS_DESC: '明確指定各集群所需部署的副本數。',
  'Total Replicas Number': '總副本數',
  WEIGHT: '權重',
  SPECIFY_REPLICAS: 'Specify Replicas',
  WEIGHTS: 'Weights',
  SPECIFY_WEIGHTS: 'Specify Weights',
  TOTAL_REPLICAS: '副本總數',
  ENTER_POSITIVE_INTEGER_DESC: '副本輸入不合法',
  TOTAL_REPLICAS_EMPTY_DESC: '請輸入副本總數',
  STORAGE_MANAGEMENT_SCAP: '存儲卷管理',
  VOLUME_CLONE: '存儲卷克隆',
  ALLOW_VOLUME_CLONE_DESC: 'Allows users to clone volumes.',
  ALLOW_VOLUME_SNAPSHOT_DESC: 'Allows users to create volume snapshots.',
  'Volume Expansion': '存儲卷擴容',
  ALLOW_VOLUME_EXPANSION_DESC:
    'Allows users to extend volumes. Volumes can only be extended and cannot be shrunk.',
CODE_URL: '代碼地址',
  CODE_REPOSITORY_URL: '代碼地址',
  'New Tag': '新標籤',
  IMAGE_NAME_BUILDING: 'Image: {name}/Building',
  IMAGE_NAME_FAILED: 'Image: {name}/Failed',
  IMAGE_NAME_SUCCESSFUL: 'Image: {name}/Successful',
  'Release Time': '發佈時間',
  SORT_BY: '以{ name }排序',
  creationTimestamp: '結束時間',
  'Environment Params': '環境變量參數',
  'is Failed': '構建失敗',
  'Add Environment Variables': '添加環境參數',
  CONTAINER_SETTINGS: '容器設置',
  NEW_TAG_DESC: '輸入重新構建鏡像的標籤',
  S2I_RELATIVE_PATH_DESC:
    '源代碼倉庫地址（目前支持 git）並且可以指定代碼分支及在源代碼終端的相對路徑',
  S2I_RELATIVE_PATH_TIP: '可以指定代碼編譯的相對路徑，預設為 /。',
  CODE_RELATIVE_PATH_DESC: '可以指定代碼編譯的相對路徑，預設為 /',
  'building logs': '構建紀錄',
  'Building Log': '構建紀錄',
  'Building Image': '構建鏡像',
  sourceUrl: '來源地址',
  SourceUrl: '來源地址',
  builderImage: '鏡像模板',
  IMAGE_ARTIFACTS: '鏡像成品',
  'Code Resource': '代碼資源',
  Builder: '構建',
  BuilderImage: '編譯模板',
  IMAGE_NAME: '鏡像名稱',
  IMAGE_NAME_SCAP: 'Image name',
  IMAGE_NAME_EMPTY_DESC: 'Please enter an image name.',
  IMAGE_TAG_EMPTY_DESC: 'Please enter an image tag.',
  TARGET_IMAGE_REPOSITORY_EMPTY_DESC: 'Please set a target image registry.',
  IMAGE_TAG: 'Image Tag',
  BuilderPullPolicy: '鏡像拉取策略',
  builderPullPolicy: '鏡像拉取策略',
  JOB_RECORDS: '任務紀錄',
  'Source to image jobs': 'S2I 任務',
  S2IJobs: 'S2I 任務',
  'Repo url': '倉庫地址',
  'builder name': '編譯名稱',
  Building: '正在構建',
  'Image Building': '正在構建鏡像',
  'Rebuild Image': '重新構建鏡像',
  'New Image Tag': '新鏡像 Tag',
  'Repo URL': '倉庫地址',
  IMAGE_FROM_S2I: '通過代碼構建新的容器鏡像',
  IMAGE_FROM_B2I: '通過成品構建新的鏡像',
  S2I_DESC: '選擇您的代碼開發語言。',
  B2I_DESC: '選擇您成品的文件類型。',
  PORT_SETTINGS_DESC: '設置容器的訪問策略',
  CONTAINER_SETTINGS_DESC: '對容器的名稱及容器的計算資源進行設置',
  HEALTH_CHECKER_DESC: '根據用戶需要，定時檢查容器健康狀況。',
  STARTUP_COMMAND: '啟動命令',
  STARTUP_COMMAND_DESC:
    '在預設情况下，鏡像會運行預設命令，如果想運行特定命令或重寫鏡像預設值。',
  'Run Command': '運行命令',
  CONTAINER_COMMAND_DESC:
    '容器的啟動命令參數，預設使用打包時使用的啟動命令, 如需多個請以 "," 分隔',
  CONTAINER_ARGUMENT_DESC: '容器的啟動命令參數, 如需多個請以 "," 分隔',
  PROBE_COMMAND_DESC: '如需多個請以 "," 分隔',
  CONTAINER_ENVIRONMENT_DESC: '添加容器的環境變量',
  IMAGE_PULL_POLICY_DESC: '在預設情况下，優先使用本地鏡像',
  S2I_ENVIRONMENT_DESC:
    '應用程式開發人員可以使用環境變量來配置此鏡像的運行時行為；詳細的配置說明請查看 <a href={link} target="_blank">編譯模板</a>。',
  S2I_UPDATE_WORKLOAD: '構建成功後更新工作負載',
  S2I_UPDATA_WORKLOAD_DESC:
    '重新構建鏡像成功後，將更新相關工作負載的鏡像，同時工作負載的版本也會被更新',
  'No Log Records': '無紀錄紀錄',
  S2I_SECRET_DESC: '如果是私有代碼倉庫，請選擇代碼倉庫密鑰。',
  S2I_IMAGE_REPONSITRY_DESC:
    '源代碼倉庫地址（目前支持 Git）並且可以指定代碼分支及在源代碼終端的相對路徑。',
  S2I_RELATIVE_PATH: '代碼相對路徑(可選)',
  S2I_BUILDERNAME_DESC:
    '選擇編輯環境，您也可以查看對應的 <a href={link} target="_blank">編譯模板</a>',
  S2I_TARGET_IMAGE_REPOSITORY_DESC:
    '選擇一個有鏡像倉庫推送權限的保密字典，如果沒有可以<a href={link} target="_blank">新建鏡像倉庫保密字典</a>。',
  S2I_IMAGENAME_DESC: '鏡像名稱及標籤，預設為代碼倉庫的項目名稱。',
  CODE_REPOSITORY_KEY_DESC: '如果是私有代碼倉庫，請選擇代碼倉庫密鑰',
  CODE_REPOSITORY_URL_DESC:
    '源代碼倉庫地址(目前支持 git)並且可以指定代碼分支及在源代碼終端的相對路徑',
  CODE_RELATIVE_PATH: '代碼相對路徑(可選):',
  S2I_IMAGE_NAME_DESC: '鏡像名稱及 Tag，預設為代碼倉庫的項目名稱',
  TARGET_IMAGE_REPOSITORY: '目標鏡像倉庫',
  'Rebuilt successfully; the image status will be refreshed soon.':
    '重建成功，鏡像狀態稍後將會更新',
  'Image building failed': '構建鏡像失敗',
  'Image building succeeded': '構建鏡像成功',
  RevisionId: '修訂版本號碼',
  'Image Builder': '構建鏡像',
  IMAGE_BUILDER: '構建鏡像',
  PULL_POLICY: 'Pull Policy',
  SOURCE_URL: 'Source URL',
  REMOTE_TRIGGER: 'Remote Trigger',
  BUILDER_IMAGE: 'Builder Image',
  BUILDER_IMAGE_SCAP: 'Builder image',
  IMAGE_BUILDER_LOW: 'image builder',
  LAST_BUILD_ENVIRONMENT: '最後一次構建環境',
  'Build Times': '構建次數',
  ImageName: '鏡像名稱',
  StartTime: '開始時間',
  s2i: '代碼構建鏡像',
  b2i: '成品構建鏡像',
  LOADING_DOTS: '正在載入',
  LOG_MODULE_NOT_INSTALLED: '紀錄模組未安裝',
  BUILD_ENVIRONMENT: '構建環境',
  FILE_UPLOADED_TIP: '上傳檔案成功。',
  'Upload Percent': '上傳進度',
  FILE_SIZE_VALUE: '檔案大小：{value}',
  DOWNLOAD_ARTIFACT: '下載成品',
  'File Uploaded Successfully': '上傳檔案成功',
  'Download Artifact': '下載成品',
  IMAGE_BUILDER_PL: '構建鏡像',
  'Artifact Type': '成品類型',
  IMAGE_BUILDER_DESC:
    '鏡像構建器（Image Builder）是將代碼或者成品製作成容器鏡像的工具。您可以通過簡單的設置將成品或代碼直接製作成容器鏡像。',
  PULL_COMMAND: '拉取命令',
  PULL_COMMAND_SCAP: 'Pull command',
  IMAGE_SIZE_SCAP: '鏡像大小',
  'Published Time': '發佈時間',
  UPLOAD_ARTIFACT_TIP: '請上傳一個檔案。',
  UPLOAD_FAILED: 'Upload failed.',
  binary: '二進制檔案',
  BUILD_IMAGE_FOR_SERVICE: '為 {service} 服務構建鏡像。',
  CLICK_UPLOAD_ARTIFACT: '點擊上傳成品檔案',
  UPLOAD_ARTIFACT: '上傳成品',
  ARTIFACT_FILE_EMPTY_DESC: '檔案還未上傳',
  'Upload file failed': '檔案上傳失敗',
  'Build image for service x': '為 {service} 服務構建鏡像',
  UPLOAD_ARTIFACT_FILE: '點擊成品檔案進行上傳',
  ARTIFACT_FILE: '上傳成品',
  BUILD_MODE: '選擇語言',
  B2I_DEFAULT_DESC: '請上傳成品檔案以構建容器鏡像。',
  JAR_DESC:
    'JAR 檔案是一種軟體包檔案格式，通常用於聚合大量的 Java 類檔案、相關的元數據和資源（文本、圖片等）檔案到一個檔案',
  WAR_DESC:
    'WAR 檔案是用於分發 Jar 檔案，JavaServer Pages，Java Servlet，Java類，XML 檔案，標記庫，静態網頁（HTML 和相關檔案）以及共同構成 Web 應用程式的其他資源的集合的檔案。',
  BINARY_DESC: '',
  IMAGE_BUILDER_EMPTY_DESC: '請創建一個鏡像構建器。',
  S2I_NO_SECRET: '目前代碼倉庫不需要密鑰。',
  CODE_REPOSITORY_KEY_NOT_REQUIRED: '目前代碼倉庫不需要密鑰',
  'Repository Not Found': '尚未找到代碼倉庫',
  'Currently only supports git repo': '目前僅支持 git 倉庫',
  'Authentication required': '需要認證資訊，請選擇密鑰。',
  'Repo reading failed': '讀取倉庫失敗',
  'exec: "git": executable file not found in $PATH': '目前 URL 未發現代碼倉庫',
  WRONG_FILE_EXTENSION_NAME: '選擇的檔案類型不符合，請選擇 {type} 類型。',
  SECRET_CODE: '觸發令牌',
  SECRET_CODE_RULE_DESC: '只能包含大小寫字母、數字。',
  TRIGGER_TOKEN: '觸發令牌',
  TRIGGER_TOKEN_DESC:
    'Set a token used to authenticate a client against KubeSphere when the client attempts to trigger image building on KubeSphere. The token can contain only uppercase letters, lowercase letters, and numbers.',
  INVALID_TRIGGER_TOKEN_DESC: '只能包含大小寫字母、數字',
  'Remote Trigger Link': '遠程觸發鏈接',

  // Image Builder List Page

  // Creation Page
  UPLOAD_PERCENT: '已上傳：{percent}%',
  UPLOAD_FULLY: '已上傳：100%',
  FILE_SIZE: '檔案大小：{size}',
  S2I_SECRET: '密鑰',
  roles: '角色',
  Roles: '角色',
  Role: '角色',
  'Role Management': '角色管理',
  'Account Role': '帳戶角色',
  PLATFORM_ROLE: 'Platform Role',
  PLATFORM_ROLE_EMPTY_DESC: 'Please create a platform role.',
  PLATFORM_ROLE_PL: 'Platform Roles',
  'Platform Roles': 'Platform Roles',
  'Account Roles': '帳戶角色',
  CREATE_ROLE: '創建角色',
  'Edit Role': '編輯角色',
  'Project Details': '項目詳情',
  'Cluster Role': '集群角色',
  PERMISSION_PL: '權限列表',
  AUTHORIZED_USER_PL: '授權用戶',
  'Authorization Settings': '權限設置',
  Cluster: '集群',
  Member: '成員',

  EDIT_PERMISSIONS: '編輯權限',
  WORKSPACE_ROLE_NAME_TIP: '請設置一個唯一識別碼作為角色名稱。',

  'Create Project Role': '創建項目角色',
  'Edit Project Role': '編輯項目角色',
  CREATE_PLATFORM_ROLE: '創建帳戶角色',
  'Edit Account Role': '編輯帳戶角色',
  'Create Cluster Role': '創建集群角色',
  'Edit Cluster Role': '編輯集群角色',

  'Please specify role authorization': '請選擇角色權限',

  'Role Name': '角色名稱',
  'Role Type': '角色類型',
  ROLE_NAME_EMPTY_DESC: '請輸入角色名稱',
  'Invalid role name': '角色名稱格式不合法',
  'Role name exists': '角色名稱已存在',
  MODULES: '功能模組',
  'Authorized Actions': '可執行操作',
  NO_PERMISSION: '暫無權限規則',
  NO_AVAILABLE_ROLE: '目前項目無可用角色',
  JOIN_PROJECT_PLACEHOLDER: '輸入用戶名稱或者郵箱邀請用戶加入到項目中',
  ROLE_DELETE_TIP: '目前角色已有用戶綁定，請解綁後重試',
  ROLE_NO_AVAILABLE_TIP: '目前項目無可用角色',
  ROLE_PROJECTS_JOIN_TIP: '輸入用戶名或者郵箱邀請用戶加入到項目中',
  ROLE_TYPE_DESC:
    '角色類型根據權限範圍分為集群、項目兩類，目前角色的授權為該項目範圍。',
  DELETE_ROLE: 'Delete Role',
  DELETE_ROLE_TIP:
    'Are you sure you want to delete the role <strong>{resource}</strong>?',
  DELETE_ROLE_USER_TIP_PL:
    'The role is authorized to <strong>{count}</strong> users. Please delete the users or change the roles of the user first.',
  DELETE_ROLE_USER_TIP:
    'The role is authorized to <strong>{count}</strong> user. Please delete the user or change the role of the user first.',
  DELETE_ROLE_DEPARTMENT_TIP_PL:
    'The role is authorized to <strong>{count}</strong> departments. Please delete the departments or change the roles of the departments first.',
  DELETE_ROLE_DEPARTMENT_TIP:
    'The role is authorized to <strong>{count}</strong> department. Please delete the department or change the role of the department first.',

  DEPENDS_ON: '依賴於',
  'Clusters Management': '集群管理',
  CLUSTERS_MANAGEMENT: '集群管理',
  CLUSTERS_MANAGEMENT_DESC: '創建刪除集群，管理所有集群下的資源',
  CLUSTERS_VIEW: '集群查看',
  CLUSTERS_VIEW_DESC: '查看平台中所有的集群及集群下所有的資源',
  USERS_MANAGEMENT: '帳戶管理',
  USERS_MANAGEMENT_DESC: '支持帳戶的管理，包括添加/刪除/更新帳戶資訊',
  USERS_VIEW: '帳戶查看',
  USERS_VIEW_DESC: '可以查看目前平台有哪些用戶',
  ROLES_MANAGEMENT: '角色管理',
  ROLES_MANAGEMENT_DESC: '支持帳戶角色的管理，包括添加/刪除/更新帳戶角色',
  ROLES_VIEW: '角色查看',
  ROLES_VIEW_DESC: '可以查看目前平台有哪些角色',
  WORKSPACES_MANAGEMENT: '企業空間管理',
  WORKSPACES_MANAGEMENT_DESC:
    '支持企業空間的管理，包括添加/刪除/編輯企業空間，查看平台的所有企業空間。',
  WORKSPACES_VIEW: '企業空間查看',
  WORKSPACES_VIEW_DESC: '可以查看用戶目前授權的企業空間',
  APP_TEMPLATES_VIEW: '應用商店查看',
  APP_TEMPLATES_VIEW_DESC: '查看平台級别的應用商店',
  APP_TEMPLATES_MANAGEMENT: '應用商店管理',
  APP_TEMPLATES_MANAGEMENT_DESC:
    '管理平台級别的應用商店，對雲原生應用的上架、下架以及審核等應用全生命週期的統一管理。',
  PLATFORM_SETTINGS_MANAGEMENT: '平台設置管理',
  PLATFORM_SETTINGS_MANAGEMENT_DESC:
    '管理平台設置，如自定義平台資訊，logo，配置紀錄收集，郵件通知等。',

  WORKSPACE_GROUPS_MANAGEMENT: '企業組織管理',
  WORKSPACE_GROUPS_MANAGEMENT_DESC:
    '管理企業組織架構，邀請/移除組織成員，為組織授權',
  WORKSPACE_GROUPS_VIEW: '企業組織查看',
  WORKSPACE_GROUPS_VIEW_DESC: '查看企業組織架構及成員',
  WORKSPACE_ROLES_VIEW: '企業角色查看',
  WORKSPACE_ROLES_MANAGEMENT: '企业空间角色管理',
  WORKSPACE_ROLES_VIEW_DESC: '查看企業空間角色',
  WORKSPACE_ROLES_MANAGEMENT_DESC:
    '可以 創建/編輯/刪除 企業空間角色，系統預設角色無法刪除',
  WORKSPACE_MEMBERS_VIEW: '企業成員查看',
  WORKSPACE_MEMBERS_MANAGEMENT: '企業成員管理',
  WORKSPACE_MEMBERS_VIEW_DESC: '查看企業空間成員',
  WORKSPACE_MEMBERS_MANAGEMENT_DESC: '邀請/編輯/移除企業空間成員',
  WORKSPACE_APP_REPOS_VIEW: '應用倉庫查看',
  WORKSPACE_APP_REPOS_MANAGEMENT: '應用倉庫管理',
  WORKSPACE_APP_REPOS_VIEW_DESC: '查看應用倉庫列表',
  WORKSPACE_APP_REPOS_MANAGEMENT_DESC: '可以 創建/編輯/刪除 應用倉庫',
  WORKSPACE_APP_TEMPLATES_VIEW: '應用模板查看',
  WORKSPACE_APP_TEMPLATES_MANAGEMENT: '應用模板管理',
  WORKSPACE_APP_TEMPLATES_VIEW_DESC: '查看企業空間應用模板',
  WORKSPACE_APP_TEMPLATES_MANAGEMENT_DESC:
    '上传/編輯/刪除 企業空間應用模板，上架/下架應用到平台的應用商店',

  PROJECTS_MANAGEMENT: '項目管理',
  PROJECTS_VIEW: '項目查看',
  PROJECTS_CREATE: '項目創建',
  DEVOPS_MANAGEMENT: 'DevOps 项目管理',
  DEVOPS_VIEW: 'DevOps 项目查看',
  DEVOPS_CREATE: 'DevOps 项目創建',

  PROJECTS_MANAGEMENT_DESC:
    '管理企業空間裡的所有項目，可以 創建/編輯/刪除 項目',
  PROJECTS_CREATE_DESC: '擁有創建項目的權限，項目管理員只能為創建者自己',
  PROJECTS_VIEW_DESC: '可以查看企業空間裡的所有項目',
  FEDERATED_PROJECTS_MANAGEMENT_DESC:
    '管理企業空間裡的所有多集群項目，可以 創建/編輯/刪除 多集群項目',
  DEVOPS_MANAGEMENT_DESC:
    '管理企業空間裡的所有 DevOps 项目，可以 創建/編輯/刪除 DevOps 项目',
  DEVOPS_CREATE_DESC:
    '擁有創建DevOps 项目的權限，DevOps 项目管理員只能為創建者自己',
  DEVOPS_VIEW_DESC: '可以查看企業空間裡的所有DevOps 项目',

  APPLICATION_WORKLOADS_VIEW: '應用負載查看',
  APPLICATION_WORKLOADS_MANAGEMENT: '應用負載管理',
  APPLICATION_WORKLOADS_VIEW_DESC:
    '查看項目裡的應用，服務，工作負載，任務，灰度發佈，構建鏡像等資源',
  APPLICATION_WORKLOADS_MANAGEMENT_DESC:
    '創建/編輯/刪除/項目裡的應用，服務，工作負載，任務，灰度發佈，構建鏡像等資源',
  VOLUMES_VIEW: '儲存卷查看',
  VOLUMES_MANAGEMENT: '儲存卷管理',
  VOLUMES_VIEW_DESC: '查看項目裡的儲存卷',
  VOLUMES_MANAGEMENT_DESC: '創建/編輯/刪除/項目裡的儲存卷',
  SECRETS_VIEW: '密鑰查看',
  SECRETS_MANAGEMENT: '密鑰管理',
  SECRETS_VIEW_DESC: '查看項目裡的密鑰',
  SECRETS_MANAGEMENT_DESC: '創建/編輯/刪除/項目裡的密鑰',
  CONFIGMAPS_VIEW: '配置查看',
  CONFIGMAPS_MANAGEMENT: '配置管理',
  CONFIGMAPS_VIEW_DESC: '查看項目里的配置',
  CONFIGMAPS_MANAGEMENT_DESC: '創建/編輯/刪除/項目里的配置',
  SERVICEACCOUNT_MANAGEMENT: '服務帳戶管理',
  SERVICEACCOUNT_VIEW: '服務帳戶查看',
  SERVICEACCOUNT_MANAGEMENT_DESC: '創建/編輯/刪除/項目裏的服務帳戶',
  SERVICEACCOUNT_VIEW_DESC: '查看項目裏的服務帳戶',
  ALERTING_POLICIES_VIEW: '告警策略查看',
  ALERTING_POLICIES_MANAGEMENT: '告警策略管理',
  ALERTING_POLICIES_VIEW_DESC: '查看告警策略',
  ALERTING_POLICIES_MANAGEMENT_DESC: '創建/編輯/刪除 告警策略',
  ALERTING_MESSAGES_VIEW: '告警訊息查看',
  ALERTING_MESSAGES_MANAGEMENT: '告警訊息管理',
  ALERTING_MESSAGES_VIEW_DESC: '查看告警訊息',
  ALERTING_MESSAGES_MANAGEMENT_DESC: '評論/刪除 告警訊息',

  CUSTOM_MONITORING_VIEW: '自定義監控查看',
  CUSTOM_MONITORING_MANAGEMENT: '自定義監控管理',
  CUSTOM_MONITORING_VIEW_DESC: '查看自定義監控',
  CUSTOM_MONITORING_MANAGEMENT_DESC: '創建管理自定義監控',

  PROJECT_ROLES_VIEW: '角色查看',
  PROJECT_ROLES_MANAGEMENT: '角色管理',
  PROJECT_ROLES_VIEW_DESC: '查看項目角色',
  PROJECT_ROLES_MANAGEMENT_DESC:
    '可以 創建/編輯/刪除 項目角色，系統預設角色無法刪除',
  PROJECT_MEMBERS_VIEW: '成員查看',
  PROJECT_MEMBERS_MANAGEMENT: '成員管理',
  PROJECT_MEMBERS_VIEW_DESC: '查看項目成員',
  PROJECT_MEMBERS_MANAGEMENT_DESC: '邀請/編輯/移除項目成員',
  PROJECT_SETTINGS_DESC:
    '管理項目設置，編輯項目資訊、外網訪問、網路策略、資源配額、落盤紀錄收集配置等',

  CLUSTER_RESOURCES_MANAGEMENT: '集群資源管理',
  PROJECT_RESOURCES_MANAGEMENT: '項目資源管理',
  'Nodes View': '節點查看',
  NODES_VIEW_DESC: '查看節點資訊',
  NODES_MANAGEMENT_DESC: '管理節點，停用/啟用、汙點管理等',
  'Components Management': '服務組件管理',
  COMPONENTS_MANAGEMENT_DESC: '管理集群的服務組件',
  'CRD Management': '自定義資源(CRD)管理',
  CRD_MANAGEMENT_DESC: '管理集群的自定義資源，可 查看/修改/刪除 集群 CRD 資源',
  'Network Policies Management': '網路策略管理',
  'Network Policies View': '網路策略查看',
  NETWORK_POLICIES_MANAGEMENT_DESC: '創建/編輯/刪除 集群網路策略',
  NETWORK_POLICIES_VIEW_DESC: ' 查看集群網路策略',
  'StorageClasses View': '儲存類型查看',
  'StorageClasses Management': '儲存類型管理',
  STORAGECLASSES_VIEW_DESC: '查看集群所有儲存類型',
  STORAGECLASSES_MANAGEMENT_DESC: '創建/編輯/刪除 儲存類型，設置預設儲存類型',
  VOLUME_SNAPSHOTS_VIEW: '儲存快照查看',
  VOLUME_SNAPSHOTS_MANAGEMENT: '儲存快照管理',
  VOLUME_SNAPSHOTS_VIEW_DESC: '查看所有儲存快照',
  VOLUME_SNAPSHOTS_MANAGEMENT_DESC: '創建/編輯/刪除 儲存快照',
  'Cluster Monitoring View': '集群監控查看',
  CLUSTER_MONITORING_VIEW_DESC: '查看集群物理資源，應用資源的監控數據',
  'Cluster Roles View': '角色查看',
  'Cluster Roles Management': '角色管理',
  CLUSTER_ROLES_VIEW_DESC: '查看集群角色',
  CLUSTER_ROLES_MANAGEMENT_DESC:
    '可以 創建/編輯/刪除 集群角色，系統預設角色無法刪除',
  'Cluster Members View': '成員查看',
  'Cluster Members Management': '成員管理',
  CLUSTER_MEMBERS_VIEW_DESC: '查看集群成員',
  CLUSTER_MEMBERS_MANAGEMENT_DESC: '邀請/編輯/移除集群成員',

  PIPELINES_MANAGEMENT: '流水線管理',
  PIPELINES_VIEW: '流水線查看',
  PIPELINES_MANAGEMENT_DESC:
    '授予管理 DevOps 项目流水線的權限，包含 創建/編輯/刪除 等操作.',
  PIPELINES_VIEW_DESC: '授予查看 DevOps 项目流水線的權限，下載成品等.',
  CREDENTIALS_VIEW: '憑證查看',
  CREDENTIALS_MANAGEMENT_DESC:
    '管理 DevOps 项目憑證，包含 創建/編輯/刪除 等操作.',
  CREDENTIALS_VIEW_DESC: '查看與使用憑證',

  'DevOps Roles View': '角色查看',
  'DevOps Roles Management': '角色管理',
  DEVOPS_ROLES_VIEW_DESC: '查看 DevOps 项目角色',
  DEVOPS_ROLES_MANAGEMENT_DESC:
    '可以 創建/編輯/刪除  DevOps 项目角色，系統預設角色無法刪除',
  'DevOps Members View': '成員查看',
  'DevOps Members Management': '成員管理',
  DEVOPS_MEMBERS_VIEW_DESC: '查看 DevOps 项目成員',
  DEVOPS_MEMBERS_MANAGEMENT_DESC: '邀請/編輯/移除 DevOps 项目成員',
  DEVOPS_SETTINGS: 'DevOps 项目設置',
  DEVOPS_SETTINGS_DESC: '管理 DevOps 项目設置，編輯 DevOps 项目資訊',

  'Default user role which allows a user to manage resources within the projects created by the user himself or invited by others. It does not allow the user to manage unauthorized resources in the cluster.':
    '預設用戶角色，僅允許對自己創建或受邀加入的項目中的資源進行管理，無權操作集群範圍内其他資源。',

  NO_AUTHORIZED_USER_DESC: '目前沒有用戶被授權此角色',

  'Unable to delete preset role': '無法刪除預設角色',

  ROLE_PLATFORM_ADMIN: '平台管理員，可以管理平台内的所有資源。',
  ROLE_PLATFORM_REGULAR:
    '平台普通用戶，在被邀請加入企業空間或集群之前沒有任何資源操作權限。',
  ROLE_USERS_MANAGER: '平台用戶管理員，管理平台所有用戶。',

  ROLE_CLUSTER_ADMIN: '集群管理員，可以管理集群中所有的資源。',
  ROLE_CLUSTER_VIEWER: '集群觀察者，可以查看集群下所有的資源。',

  ROLE_WORKSPACE_ADMIN: '企業空間管理員，可以管理企業空間下所有的資源。',
  ROLE_WORKSPACES_MANAGER: '平台企業空間管理員，管理平台所有企業空間。',
  ROLE_WORKSPACE_REGULAR: '企業空間普通成員，無法創建 DevOps 项目和項目。',
  ROLE_WORKSPACE_VIEWER: '企業空間的觀察者，可以查看企業空間下所有的資源資訊。',
  ROLE_WORKSPACE_SELF_PROVISIONER:
    '企業空間普通成員，可以在企業空間下創建 DevOps 项目和項目。',

  ROLE_PROJECT_ADMIN: '項目管理員，可以管理項目下所有的資源。',
  ROLE_PROJECT_OPERATOR: '項目維護者，可以管理項目下除用戶和角色之外的資源。',
  ROLE_PROJECT_VIEWER: '項目觀察者，可以查看項目下所有的資源。',

  ROLE_DEVOPS_ADMIN: 'DevOps 项目管理員，可以管理 DevOps 项目下所有的資源。',
  ROLE_DEVOPS_OPERATOR:
    'DevOps 项目普通成員，可以在 DevOps 项目下創建流水線憑證等。',
  ROLE_DEVOPS_VIEWER: 'DevOps 项目觀察者，可以查看 DevOps 项目下所有的資源。',

  ACCOUNT_ROLE_DESC: '帳號角色可以定義平台内的帳號擁有的權限',
  ACCOUNT_ROLE_CREATE_DESC: '帳號角色可以定義平台内的帳號擁有的權限',

  NEXT_STEP: '接下來要做的事情',
  NEXT_STEP_DESC: '接下來您需要編輯權限，編輯好權限後帳號角色才能創建成功。',

  DESELECT_RESOURCE_FIRST: '當前權限被 {resource} 依賴，無法移除',

  WORKSPACE_SETTINGS_VIEW: '企業空間設置查看',
  WORKSPACE_SETTINGS_MANAGEMENT: '企業空間設置管理',
  WORKSPACE_SETTINGS_DESC: '管理企業空間設置，編輯企業空間信息、網絡策略等',
  WORKSPACE_SETTINGS_VIEW_DESC: '查看企業空間設置',
  WORKSPACE_SETTINGS_MANAGEMENT_DESC:
    '管理企業空間設置，編輯企業空間信息、網絡策略等',
  'System Point': '節點',
  'Project Usage Rank': '項目資源用量排行',
  'Workspace Usage Rank': '企業空間資源用量排行',
  EXPORT: '匯出',
  TOP_5_FOR_RSC_USAGE: '資源用量 Top 5',
  'Workspace Usage Top5': '企業空間資源用量 Top5',
  QUOTA_LIMIT_TIP:
    '這裡配置是指 Kubernetes 資源管理中的 Limits, 主要用於限制每個容器使用資源的最大值',
  'Application Resources Usage Ranking': '應用資源用量排行',
  CPU_AVERAGE_LOAD: 'CPU 平均負載',
  CLUSTER: '集群',
  CLUSTER_PL: '集群',
  CLUSTER_VALUE: '集群：{value}',
  CREATE_MULTI_CLUSTER_PROJECT: 'Create Multi-cluster Project',
  Deployment: '部署',
  StatefulSet: '有狀態副本集',
  DaemonSet: '守護進程集',
  LoadBalancer: '負載平衡',
  Volume: '儲存卷',
  Terminating: '刪除中',
  CREATE_PROJECT: '創建項目',
  EDIT_PROJECT: '編輯項目',
  Details: '詳情',
  Members: '成員',
  PROJECT_ROLE_PL: '項目角色',
  'Project Role': '項目角色',
  // Create ServiceAccount Page
  PROJECT_ROLE_SI: '項目角色',
  projects: '項目',
  Projects: '項目',
  'Project Overview': '項目預覽',
  'Members Management': '成員管理',
  PROJECT_ADMINISTRATOR: '項目管理員',
  MANAGE_PROJECT: '項目管理',
  RESOURCE_QUOTA_PL: '資源配額',
  PROJECT_NAME: '項目名稱',
  PROJECT_MEMBER_PL: '項目成員',
  PROJECT_RESOURCE_QUOTAS: 'Project Resource Quotas',
  'Project Members': '項目成員',
  'project members': '項目成員',
  'Member Name': '成員名稱',
  'Modify Member Role': '修改成員角色',
  'Modify Members Role': '修改成員角色',
  'Remove Members': '移除成員',
  REMOVE_MEMBER: '移除成員',
  REMOVE_MULTIPLE_MEMBERS: 'Remove Multiple Members',
  REMOVE_MULTIPLE_MEMBERS_TIP:
    'Enter the usernames <strong>{resource}</strong> to confirm that you understand the risks of this operation.',
  'Invite Member': '邀請成員',
  GATEWAY: '網關資訊',
  ENABLE_GATEWAY: '設置網關',

  GATEWAY_NOT_ENABLED: '網關未設置',

  PROJECT_INFO: '項目資訊',
  PROJECT_QUOTA: '項目配額',
  EDIT_PROJECT_QUOTAS: 'Edit Project Quotas',
  'Quota Management': '配額管理',
  WORKSPACE_QUOTA_PL: 'Workspace Quotas',
  PROJECT_QUOTA_PL: 'Project Quotas',

  'Project Placement': '項目位置',

  'Multi-cluster Project': '多集群項目',
  MULTI_CLUSTER_PROJECT: '多集群項目',
  MULTI_CLUSTER_PROJECT_LOW: '多集群項目',
  MULTI_CLUSTER_PROJECT_SCAP: '多集群項目',
  MULTI_CLUSTER_PROJECT_PL: '多集群項目',
  'Multi-cluster Projects': '多集群項目',

  Opened: '已開啟',
  Closed: '已關閉',

  CREATE_PROJECT_DESC:
    'KubeSphere 中的項目對應的是 Kubernetes 的 namespace，是對一組資源和對象的抽象集合，常用來將系統内部的對象劃分為不同的項目組或用戶組。',
  PROJECT_NAME_DESC:
    '最長 63 個字元，只能包含小寫字母、數字及分隔符號("-")，且必須以小寫字母開頭, 字母或數字結尾',
  PROJECT_NAME_INVALID_DESC:
    '最長 63 個字元，只能包含小寫字母、數字及分隔符號("-")，且必須以小寫字母開頭, 字母或數字結尾',
  'Please input project name': '請輸入項目名稱',
  'Invalid project name': '項目名稱格式不合法',
  'Project name exists': '項目名稱已存在',

  DELETE_MEMBER_TIP:
    '確定移除成員 <strong>{name}</strong> ? 移除後該成員將無法訪問此項目。',

  'DevOps Projects': 'DevOps 项目',
  'Select Project Type': '選擇項目類型',

  ADD_QUOTA: '添加配額項目',
  EDIT_PROJECT_QUOTA: 'Edit Project Quota',

  deployments: '部署',
  statefulsets: '有狀態副本集',
  daemonsets: '守護進程集',
  jobs: '任務',
  cronjobs: '定時任務',
  pods: '容器組',

  REQUESTS_CPU: 'CPU 需求',
  LIMITS_CPU: 'CPU 限額',
  REQUESTS_MEMORY: '記憶體需求',
  LIMITS_MEMORY: '記憶體限額',

  EDIT_DEFAULT_CONTAINER_QUOTA: 'Edit Default Container Quota',
  EDIT_DEFAULT_CONTAINER_QUOTAS: 'Edit Default Container Quotas',
  'Edit Resource Default Request': '編輯資源預設請求',
  DEFAULT_CONTAINER_QUOTA_PL: 'Default Container Quotas',

  RESOURCE_TYPE: '資源類型',
  RESOURCE_TYPE_SCAP: '資源類型',

  'Help Information': '幫助資訊',

  'Enter Project': '進入項目',
  'Enter DevOps Project': '進入项目',
  Project_Admin: '项目管理員',
  'No Platform Manage Authorization': '無平台管理權限',

  'Default limit resource': '預設最大使用資源',
  'Default request resource': '預設最小使用資源',

  ASSIGN_WORKSPACE: '分配企業空間',
  'Target Workspace': '目標企業空間',
  SELECT_WORKSPACE_DESC: '選擇一個企業空間',
  'Not Assigned': '未分配',
  PROJECT_ADMINISTRATOR_DESC: '選擇企業空間的用戶作為管理員。',

  DISK_LOG_COLLECTION: '落盤紀錄收集',
  COLLECT_LOGS_ON_VOLUMES: '落盤紀錄收集',
  LOG_COLLECTION_ENABLED_DESC:
    'After this function is enabled or disabled, you need to restart the Pod replicas to make the change take effect.',

  'Are you sure to close ?': '確認關閉？',
  "The project's file log collection is about to close.":
    '項目的落盤紀錄收集即將關閉.',

  SELECT_CLUSTER_DESC: '選擇要創建項目的集群。',
  CLUSTER_EMPTY_DESC: '請選擇集群。',

  'Project Member': '項目成員',

  'Number of volumes': '存儲卷（數量）',

  FEDPROJECT_CANNOT_ADD_CLUSTER: '無法添加新的集羣',

  DISABLE_LOG_COLLECTION_TIP:
    'Are you sure you want to disable log collection? After it is disabled, services that have enabled log collection will continue to collect logs saved in the volumes before the Pod replicas are restarted. If you need to collect the logs again, please enable log collection and restart the Pod replicas.',

  Usage: '用量',
  PROJECTS_DESC:
    'KubeSphere 中的項目對應的是 Kubernetes 的 namespace，是對一組資源和對象的抽象集合，常用來將系統内部的對象劃分為不同的項目組或用戶組。',
  PROJECT_BASEINFO_DESC: '項目基礎資訊設置',
  PROJECT_ADVANCE_DESC: '設置項目資源預設請求',

  PROJECT_TYPES_PROJECT_TITLE: '創建資源類型項目',
  PROJECT_TYPES_PROJECT_DESC:
    'KubeSphere 中的項目對應的是 Kubernetes 的 namespace，是對一組資源和對象的抽象集合，可以根據不同的業務部門或者產品項目進行資源分組。',
  PROJECT_TYPES_DEVOPS_TITLE: '創建一個 DevOps 项目',
  PROJECT_TYPES_DEVOPS_DESC: '持續、自動地構建/測試軟體項目。',

  PROJECT_ASSIGN_DESC: '項目一旦被分配到企業空間後將不允許修改企業空間',

  'Invite Members to the Project': '邀請成員到該項目',
  INVITE_DEVOPS_MEMBER: '邀請成員到該 DevOps 项目',
  INVITE_MEMBER_DESC:
    'You can invite members who belong to the workspace to the project.',
  INVITE_MEMBER_DESC_DEVOPS: '您可以邀請當前企業空間成員至該 DevOps 项目。',
  PROJECT_MEMBER_EMPTY_DESC:
    'Please invite a member of the current workspace to the project.',
  INVITE_MEMBER_SEARCH_PLACEHOLDER: '輸入用戶名邀請項目成員',
  ASSIGN_ROLE: 'Assign Role',
  PROJECT_ADMIN_DESC: '可以指定項目内一個成員為管理員',

  ENABLE_GATEWAY_DESC:
    '在創建應用路由之前，需要先啟用外網訪問入口，即網關。這一步是創建對應的應用路由控制器，用來負責將請求轉發到對應的後端服務。',

  DELETE_INTERNET_ACCESS_TITLE: 'Remove Network Access Settings',
  DELETE_INTERNET_ACCESS_DESC:
    'Are you sure you want to remove network access settings? You can reset the network access after the settings are removed.',

  NO_RELATE_PROJECTS_TITLE: '沒有找到與您相關聯的項目',
  NO_RELATE_PROJECTS_DESC:
    '您可以創建或者聯繫項目管理員將您邀請到項目中開始您的工作',

  DELETE_PROJECT_TIP:
    '確定刪除項目 <strong>{resource}</strong> ? 刪除後將無法恢復, 項目下的資源也同時會被銷毀。',

  'default request CPU should not be greater than default limit CPU':
    '最低保證可以使用的 CPU 數不應大於限制使用的 CPU 數',
  'default request memory should not be greater than default limit memory':
    '最低保證可以使用的記憶體不應大於限制使用的記憶體',

  'Empty value means no limit, CPU 1 Core = 1000m':
    '值為空表示無限制, CPU 1核 = 1000m',

  DEFAULT_RESOURCE_UNIT_DESC: 'CPU無單位時為核心數, 1核 = 1000m',
  DEFAULT_RESOURCE_ALERT:
    '創建工作負載時，如未設置工作負載的資源使用限制，將預設使用此設置。如無特殊需求，請保持此設定預設。',

  QUOTA_EDIT_TIP: '值為空時將不限制配額',

  PROJECT_BASIC_INFO_DESC:
    'Basic information provides an overview of the project. You can view the project information and resource quotas.',
  PROJECT_ADVANCED_SETTINGS_DESC:
    'Advanced settings are used to configure external access, application governance, and log collection in the project.',
  PROJECT_MEMBERS_DESC: '對項目内的成員進行管理及角色分配',
  PROJECT_ROLE_DESC: '項目角色定義了在目前項目下用戶所擁有的權限',
  SERVICE_ACCOUNT_PROJECT_ROLE_DESC:
    'Select the role of the service account in the current project.',
  PROJECT_ROLE_EMPTY_DESC: 'Please create a project role.',
  COLLECTING_FILE_LOG_DESC:
    '對容器内的落盤紀錄進行收集，並轉發到標準輸出，然後由紀錄收集系統統一採集。',

  HOW_TO_USE_QUOTA_Q: '如何使用資源配額?',
  HOW_TO_USE_QUOTA_A:
    'Resource quotas are a mechanism used to limit the resource usage. You can edit project resource quotas and default container quotas by clicking <b>Edit Project</b>.',

  WHAT_ARE_DEFAULT_CONTAINER_QUOTAS_Q: 'What are default container quotas?',
  WHAT_ARE_DEFAULT_CONTAINER_QUOTAS_A:
    'Default container quotas specify the default CPU request, CPU limit, memory request, and memory limit of containers created in the project.',

  PROJECT_QUOTAS_DESC:
    'Project quotas specify the number of available CPU and memory resources and the maximum number of application resources such as Pods, Deployments, and Services in the project.',
  DEFAULT_CONTAINER_QUOTAS_DESC:
    'Default container quotas specify the default CPU request, CPU limit, memory request, and memory limit of containers created in the project.',
  WHAT_IS_INTERNET_GATEWAY: '什麼是外網訪問網關?',
  COLLECT_LOGS_ON_VOLUMES_A:
    'To collect logs on volumes, you need to mount a volume in read and write mode to a container and set the container to export logs to the volume.',

  HOW_TO_INVITE_MEMBER_Q: 'How do I invite members to the project?',
  HOW_TO_INVITE_MEMBER_A:
    '項目管理員或者擁有成員邀請權限的用戶可以邀請目前企業空間内的成員加入項目。',

  HOW_TO_INVITE_USERS: '邀請其他成員到目前項目中?',
  HOW_TO_SET_PROJECT_GATEWAY: '如何設置項目網關？',
  RESOURCE_QUANTITY_LIMIT: 'Resource quantity limit',
  SET_PROJECT_RESOURCE_QUOTA:
    'You can set the resource quota by specifying a number.',

  PROJECT_TYPES_Q: '項目中的服務如何通過外網訪問？',
  PROJECT_TYPES_A:
    '項目網關負責創建對應的應用路由控制器，用來負責將請求轉發到對應的後端服務；開啟項目網關後可以將服務通過 Ingress 暴露给外網訪問。',
  PROJECT_CLUSTER_SETTINGS_DESC:
    '選擇要創建項目的集群. 當選擇了多個集群時, 將創建聯邦項目',
  NETWORK_ISOLATED_DESC: '設置網路隔離策略',

  PROJECT_NAME_EXISTS_IN_CLUSTER: '項目名稱在集群 {cluster} 中已存在',

  MULTI_CLUSER_PROJECT_TIP:
    '目前項目為多集群項目，項目將分布在不同集群中共同來構成多集群項目，您可以切換到不同集群查看項目在該集群中的設置。',

  MULTI_CLUSTER_RESOURCE_TIP:
    '目前資源為多集群資源，資源將分佈在不同集群中共同來構成多集群資源，您可以切換到不同集群查看資源在該集群中的設置。',

  FEDPROJECT_RESOURCE_TIP:
    '無法在集群管理内創建多集群項目的資源, 請到多集群項目頁面内進行操作.',
  FEDPROJECT_CANNOT_DEPLOY_APP_TIP: '無法在多集群項目裡部署應用.',

  PROJECT_NAME_EXISTS_IN_HOST: '項目名在主集群上已存在',

  MULTI_CLUSTER_PROJECT_DELETE_TIP:
    '刪除多集群項目同時也會刪除依賴於主集群上的同名項目,</br>請輸入{type}名稱 <strong>{resource}</strong> 確保您已經了解操作所带來的風險。',

  FED_HOST_NAMESPACE_TIP:
    '該項目為多集群項目的相關資源, 請勿在此項目下操作資源',

  CREATE_MULTI_CLUSTER_PROJECT_DESC:
    '您可以創建多集群項目，讓項目運行在多個集群中，為應用提供快速疊代開發的容器環境並實現高可用。',

  PROJECT_QUOTAS_NOT_SET: '項目配額未設置',
  DEFAULT_CONTAINER_QUOTAS_NOT_SET: '容器資源預設請求未設置',

  // Custom Monotoring
  CUSTOM_MONITORING_DASHBOARD_LOW: 'custom monitoring dashbord',

  // Basic Information
  PROJECT_NAME_SCAP: 'Project name',
  PROJECT_ROLE_SCAP: 'Project role',
  PROJECT_ROLE_SCAP_PL: 'Project roles',
  PROJECT_MEMBER_SCAP: 'Project member',
  PROJECT_MEMBER_SCAP_PL: 'Project members',
  CPU_REQUEST_LOW: 'CPU request',
  CPU_LIMIT_LOW: 'CPU limit',
  MEMORY_REQUEST_SCAP: 'Memory request',
  MEMORY_LIMIT_SCAP: 'Memory limit',
  CPU_REQUEST_CORE: '{value} Core',
  CPU_LIMIT_CORE: '{value} Core',
  MEMORY_REQUEST_MIB: '{value} Mi',
  MEMORY_LIMIT_MIB: '{value} Mi',
  WS_RESOURCE_REQUESTS: 'Resource requests:',
  WS_RESOURCE_LIMITS: 'Resource limits:',
  SELECT_RESOURCE_TIP: 'Select a resource or enter a resource name',
  NUMBER_OF_ROUTES: 'Number of Routes',
  NUMBER_OF_SECRETS: 'Number of Secrets',
  NUMBER_OF_CONFIGMAPS: 'Number of ConfigMaps',
  USAGE: 'Usage',

  // Project Members
  PROJECT_MEMBER: 'Project Member',
  PROJECT_MEMBER_DESC:
    'Project members can view or manage project resources. The project administrator can invite members who belong to the workspace to the project and manage project members.',

  // Advanced Settings
  REMOVE: 'Remove',
  DISABLED: 'Disabled',
  ENABLE: 'Enable',
  DISABLE: 'Disable',
  DISABLE_LOG_COLLECTION: 'Disable Log Collection',
  ENABLE_GATEWAY_TIP: '要使用網關，請在集群或項目中配置網關',

  // Network Isolation
  INGRESS: 'Ingress',
  INTERNAL_TRAFFIC_DIRECTION_DESC:
    'Egress indicates the direction from the current project to other projects. Ingress indicates the direction from other projects to the current project.',
  NETWORK_SEGMENT_EXAMPLE: 'Example: 10.0.0.0',
  PORT_EXAMPLE: 'Example: 80',
  'Discover branches from repository': '發現存儲庫上的分支',
  'Discover pull requests from origin': '發現原始儲存庫與目標儲存庫相同的 PR',
  'Discover pull requests from forks': '發現 Fork 儲存庫與目標儲存庫相同的 PR',
  'User types that can trigger builds': '可以觸發構建的用戶類型',
  NO_CONCURRENT_BUILD_DESC: '如果勾選此選項，則不能同時運行多個構建。',
  BUILD_PARAMETERS: '參數化構建',
  BUILD_TRIGGER: '構建觸發器',
  BUILD_PERIODICALLY: '定時構建',
  TRIGGER_REMOTE_BUILD: '觸發遠程構建（例如，使用腳本）',
  'Authentication Token': '身份驗證令牌',
  'Use the following URL to remotely triggerworkbench the build':
    '使用以下 URL 遠程觸發構建',
  BEHAVIORAL_STRATEGY: '行為策略',
  SCRIPT_PATH_DESC: '指定 Jenkinsfile 在源代碼倉庫的位置。',
  SCAN_TRIGGER: '倉庫掃描觸發器',
  SCAN_PERIODICALLY: '如果沒有掃描觸發，則定期掃描',
  SCAN_INTERVAL: '掃描時間間隔',
  WEBHOOK_PUSH_URL: 'Webhook 推送 URL',
  BUILD_SETTINGS: '構建設置',
  BRANCH_SETTINGS: ' 分支設置',
  PIPELINE_NAME_DESC: '流水線的名稱，同一個項目内 Pipeline 不能重名。',
  PIPELINE_PARAM_DEFAULT_DESC:
    '指定字段的預設值，您也可以在手動運行流水線前修改預設值。',
  PARAMETER_DESCRIPTION_DESC: '參數的描述。',
  CHOICE_PARAM_OPTION_DESC: '備用選擇，每行一個。第一行的將作為預設選項。',
  'No need': '不需要',
  CODE_REPOSITORY_ADDRESS_DESC: '請使用包含 Jenkinsfile 的倉庫。',
  CODE_REPOSITORY_ADDRESS_EMPTY_TIP:
    'Please enter the address of a code repository.',
  SELECT_CREDENTIAL_DESC:
    '獲取倉庫代碼可能需要憑證, 選擇已有憑證或添加一個新的憑證。',
  'For accessing GitHub': '用於獲取 GitHub',
  BRANCH_COUNT: '分支數量',
  PIPELINE: '流水線',
  PIPELINE_PL: '流水線',
  PIPELINE_LOW: '流水線',
  'Pipeline List': '流水線列表',
  EDIT_PIPELINE: '編輯流水線',
  EDIT_JENKINSFILE: '編輯 Jenkinsfile',
  RUN: '運行',
  RUN_ID: 'Run ID',
  COMMIT_PL: '提交',
  BRANCH_SI: '分支',
  BRANCH_PL: 'Branches',
  CODE_REPOSITORY_BRANCH: '分支',
  LAST_MESSAGE: '最後訊息',
  LAST_MESSAGE_SCAP: 'Last message',
  Duration: '持續時間',
  DURATION: 'Duration',
  DURATION_VALUE: 'Duration: {value}',
  TASK_STATUS: '運行狀態',
  HEALTH: '健康狀態',
  CREDENTIAL_PL: '憑證',
  CREDENTIAL: '憑證',
  CREDENTIAL_LOW: 'credential',
  CREDENTIAL_SI: '憑證',
  CREDENTIALS_MANAGEMENT: '憑證管理',
  'Add Parallel Stage': '添加並行階段',
  'Add Step': '添加步驟',
  'Pipeline Configuration': '編輯流水線',
  VIEW_LOGS: '查看紀錄',
  CODE_REPOSITORY: '代碼倉庫',
  DELETE_OUTDATED_BUILD_RECORDS: '丢棄舊的構建',
  DELETE_OUTDATED_BRANCHES: '丢棄舊的分支',
  BUILD_RECORD_RETENTION_PERIOD_DAYS: '保留構建的天數',
  MAXIMUM_BUILD_RECORDS: '保留構建的最大個數',
  BRANCH_RETENTION_PERIOD_DAYS: '保留分支的天數',
  MAXIMUM_BRANCHES: '保留分支的最大個數',
  BUILD_RECORD_RETENTION_PERIOD_DAYS_DESC:
    '達到保留天數的構建將被刪除，默認值為 7。',
  NO_CONCURRENT_BUILDS: '不允許並發構建',
  PIPELINE_NAME_TIP: '請輸入流水線名稱。',
  CREATE_PIPELINE: '創建流水線',
  MAXIMUM_BUILD_RECORDS_DESC:
    '如果構建超過保留的最大數量，將丟棄舊的構建。默認值為 10。',
  SCAN_REPOSITORY: '掃描遠程分支',
  'Press enter for the next': '按Enter鍵以進行下一步',
  'Wrong Token': 'Token 錯誤',
  SELECT_CODE_REPOSITORY: '選擇代碼倉庫',
  CODE_REPOSITORY_ADDRESS: '倉庫 URL',
  REPOSITORY_NAME: '倉庫名稱',
  REPOSITORY_NAME_EMPTY_TIP: 'Please enter the name of a repository name.',
  'get token': '獲取 Token',
  PIPELINE_DESC: `流水線是一組可擴展的工具，可以通過組合它們來實現持續集成和持續交付。
    您可以在此頁面創建並管理流水線。`,
  CREATE_CREDENTIAL: '創建憑證',
  CREDENTIAL_NAME: '憑證 ID',
  username_password: '帳戶憑證',
  CREDENTIAL_TYPE_USERNAME_PASSWORD: 'Username and password',
  CREDENTIAL_TYPE_SSH: 'SSH key',
  CREDENTIAL_TYPE_SECRET_TEXT: 'Access token',
  CREDENTIAL_TYPE_KUBECONFIG: 'kubeconfig',
  login_Plateform: '登入平台',
  SCRIPT_PATH: '腳本路徑',
  WEBHOOK_PUSH: 'Webhook 推送',
  DISCOVER_TAG_BRANCHES: '發現 Tag 分支',
  DISCOVER_BRANCHES: '發現分支',
  DISCOVER_PR_FROM_ORIGIN: '以原倉庫中發現 PR',
  DISCOVER_PR_FROM_FORKS: '以 Fork 倉庫中發現 PR',
  PULL_STRATEGY: '拉取策略',
  TRUSTED_USERS: '可信任用戶',
  ADD_ACTION: '添加操作',
  ALL_BRANCHES: '所有分支',
  ENABLE_TAG_BRANCH_DISCOVERY: '啟用發現 Tag 分支',
  DISABLE_TAG_BRANCH_DISCOVERY: '停用發現 Tag 分支',
  EXCLUDE_PR_BRANCHES: '排除作為 PR 提交的分支',
  ONLY_PR_BRANCHES: '只有被提交為 PR 的分支',
  OPTIONS_PR_PARAMS_1: 'PR 與目標分支合併後的源代碼版本',
  OPTIONS_PR_PARAMS_2: 'PR 本身的源代碼版本',
  OPTIONS_PR_PARAMS_3: `當 PR 被發現時會創建兩個流水線，
    一個流水線使用 PR 本身的源代碼版本，
    一個流水線使用 PR 與目標分支合併後的源代碼版本`,
  USERS_WITH_PERMISSION: '管理員或有編輯權限的用戶',
  Normal: '通用',
  'Run Pipeline': '運行流水線',
  ARTIFACT_PL: '成品',
  artifacts: '成品',
  Queue: '列隊中',
  Recipient: '收件人',
  Sender: '寄件人',
  CC: '副本',
  Subject: '主題',
  bcc: '密件副本',
  remote: '倉庫地址',
  'Print message': '打印訊息',
  CREDENTIALS_DESC: `憑證是包含了一些敏感數據的對象，如用戶名密碼，SSH 密鑰和 Token 等,
    用於在 Pipeline 運行時, 為拉取代碼、push/pull 鏡像、SSH 執行腳本等過程提供認證`,
  'Credential Id': '憑證 ID',
  NO_ARTIFACT_FOUND_TIP: '沒有成品紀錄',
  SELECT_THIS_REPOSITORY: '選擇此倉庫',
  SCAN_REPO_SUCCESSFUL: '掃描倉庫觸發成功',
  PIPELINE_RUN_LOGS: '流水線運行紀錄',
  DOWNLOAD_LOGS: '下载紀錄',
  'Time Used': '用時',
  NOT_RUNNING: '未運行',
  NOT_BUILT: 'Not built',
  'Not Build': '未執行',
  Failure: '失敗',
  COMMIT: '提交',
  COMMIT_ID: 'Commit ID',
  'Please input images name': '請輸入鏡像名稱',
  'defaultValue -1 means not to discard': '預設值 -1: 不會丢棄紀錄',
  NO_STATUS: '沒有狀態',
  SKIPPED: '已跳過',
  SUB_HEALTHY: '亞健康',
  STOP_PIPELINE_SUCCESSFUL: '任務已停止，狀態稍後更新',
  REPOSITORY_SCAN_LOGS: '掃描倉庫紀錄',
  VIEW_SCAN_LOGS: 'View Scan Logs',
  'Started By': '實施者',
  RESCAN: '重新掃描',
  LOGS_OBTAINED_SUCCESSFULLY: '掃描紀錄成功。',
  'Configuration error': '配置資訊錯誤',
  'branch success': '分支成功',
  BUILD_PARAMETERS_TIP: `參數化構建過程可以在進行構建時傳入一個或多個參數。
  例如：如果您有一個進行發佈軟體的流水線，並且希望一起上傳發行說明，這可以通過在此處添加文本參數來完成。
  每個參數都有一個 Name 和某種 Value，Value 的值取決於參數類型。在流水線當中可以使用
    params.Name
  或 Name 訪問這些值。請註意，此處定義的每個參數應具有唯一的名稱。
  當參數化項目時，構建會被替換為參數化構建，並將提示用戶為每個定義好的參數輸入值。
  如果沒有輸入值，則構建以每個參數的預設值進行。
  如果項目的構建是自動啟動，例如，由定時觸發器啟動，這時將使用參數的預設值進行觸發。`,
  AUTHENTICATION_TOKEN_TIP: `如果需要通過訪問預定義 URL 開觸發構建，請啟用此選項。
    此功能的的一個典型用法是通過源代碼管理系統的鉤子腳本來進行觸發。
    您需要提供一個字符串形式的授權令牌，以便只有擁有授權令牌的人才能觸發遠程構建。`,
  DELETE_OUTDATED_BUILD_RECORDS_TIP:
    '這將確定何時應丢棄流水線的構建紀錄。構建紀錄包括控制台輸出，存檔製品以及與特定構建相關的其他元數據。\n' +
    '保留較少的構建可以節省 Jenkins 所使用的硬碟空間。\n' +
    'KubeSphere 提供了兩個選項來確定應何時丢棄舊的構建：\n' +
    '1. 保留構建的天數：如果構建達到一定的天數，則丢棄構建。\n' +
    '2. 保留構建的最大個數：至多保留一定數量的構建，並丟棄最舊的構建。\n' +
    '這兩個選項可以同時對構建進行作用，如果超出任一限制，則將丢棄超出該限制的任何構建。',
  DELETE_OUTDATED_BRANCHES_TIP: `這將确定何時應丢棄分支以及分支下的所有構建紀錄。構建紀錄包括控制台輸出、
    存檔製品以及與特定構建相關的其他元數據。保留較少的構建可以節省 Jenkins 所使用的硬碟空間。
    KubeSphere 提供了兩個選項来確定應何時丢棄舊的分支：1. 保留分支的天數：如果分支達到一定的天數，則丢棄分支。
    2. 保留分支的最大個數：至多保留一定數量的分支，並丟棄最舊的分支。這兩個選項可以同時對分支進行作用，
    如果超出任一限制，則將丢棄超出該限制的任何分支。`,
  BUILD_PERIODICALLY_TIP: '提供類似 cron 的功能來定期執行此流水線。',
  BRANCH_RETENTION_PERIOD_DAYS_DESC: '達到保留天數的分支將被刪除，默認值為 7。',
  MAXIMUM_BRANCHES_DESC:
    '如果分支數量超過保留的最大數量，將丟棄舊的分支。默認值為 5。',
  CRON_TIP:
    '該字段遵循 cron 的語法 (略有不同)。具体來說，每行包含由製表符或空格分隔的 5 個字段。\n' +
    '分鐘: 一個小時中的第幾分鐘 (0-59)\n' +
    '小時: 一天中的第幾小時 (0-23)\n' +
    ' 月份的第幾天:  一個月份中的第幾天 (1-31)\n' +
    ' 月份: 第幾個月份 (1-12)\n' +
    '星期的第幾天 一個星期的第幾天 (0-7)，0 和 7 都是星期天。',
  'Edit Config': '編輯配置',
  PIPELINES_BASEINFO_DESC: '請輸入流水線的基本資訊',
  PIPELINE_ADVANCE_SETTINGS_DESC: '	為流水線配置複雜行為策略（可選）',
  CREDENTIALS_CREATE_DESC: '創建用於 DevOps 項目中的憑證',
  WAITING_FOR_INPUT: '等待輸入',
  BREAK: '終止',
  PROCEED: '繼續',
  'credential Id': '憑證 ID',
  Branches: '分支',
  'Clean when aborted': '清理失敗不影響運行',
  'Not fail build': '失敗不影響運行',
  submitter: '審核者',
  submitterParameter: '提交參數',
  PRIVATE_KEY: '私鑰',
  PASSPHRASE: '密碼短語',
  'This name has been used.': '此名稱已被使用',
  'Automatically generated by GitHub': '由 GitHub 自動生成',
  SET_PARAMETERS: '輸入參數',
  "Missing one or more required properties: 'name'": 'name 不能為空',
  'Please add at least one step.': '至少添加一個步驟',
  'Please input the credential name.': '請輸入憑證名稱',
  SCM: '代碼倉庫',
  NO_COMMIT_FOUND: '沒有提交紀錄',
  'Clean Workspace': '清理企業空間',
  'Save Artifact': '保存成品',
  'Change Current Directory': '更改目前目錄',
  CHECKOUT_DESC: '拉取代碼，常用於拉取非 Git 代碼，例如 SVN 等等',
  'Send messages by email': '可以通過郵件發送訊息',
  'Send messages in the build': '可以在構建中發送訊息',
  'Shell commands can be executed in the container':
    '可以在容器中執行 shell 命令',
  'You can execute shell commands or windows batch commands in the build.':
    '可以在構建中執行 shell 命令或者 windows 的 batch 命令',
  'Pull code by SVN': '通過 SVN 拉取代碼',
  'Pull code by Git': '通過 Git 拉取代碼',
  'Add nesting steps': '添加嵌套步驟',
  'instance failed to match at least one schema': '至少需要一個嵌套步驟',
  'Load credentials into environment variables': '加載憑證到還境變量',
  'Password Variable': '密碼變量',
  'Username Variable': '用戶名變量',
  PRIVATE_IMAGE_DESC:
    '要從私有鏡像倉庫部署，需要先創建鏡像倉庫，然後拉取鏡像。',
  AGENT_TYPE_DESC: `Agent 部分指定整個 Pipeline 或特定階段將在 Jenkins 還境中執行的位置，
    具體取決於該 agent 部分的放置位置。該部分必須在流水線塊内的頂層定義，但 stage 級使用是可選的。`,
  AUTHENTICATION_TOKEN_DESC: `使用以下 URL 遠程觸發構建：
    JENKINS_URL / job / JOB_NAME / build？token =TOKEN_NAME
    或者/ buildWithParameters？token = TOKEN_NAME 可選擇附加＆cause =原因提供將包含在紀錄的構建原因中的文本。`,
  SELECT_CODE_REPO_DESC: '請選擇一個代碼倉庫作為流水線的代碼來源。',
  NO_PIPELINE_CONFIG_FILE_TIP: '未找到流水線配置文件',
  ACTIVITY_EMPTY_TIP: '目前 Pipeline 還沒有運行',
  PIPELINE_NO_CONFIG: '目前 Pipeline 中並沒有找到相關配置文件',
  INVALID_JENKINSFILE_TIP:
    '目前 Jenkinsfile 不是標準的聲明式 Jenkinsfile，無法進行圖形化顯示',
  PIPELINE_SCHEDULE_DESC: `語法請參照
    <a href="//jenkins.io/doc/book/pipeline/syntax/#cron-syntax" target="_blank">CRON</a>。`,
  'passphrase Variable': '密碼變量',
  'show yaml editor': '用 YAML 編輯器編輯',
  'Enable Variable Substitution in Config': '在配置中啟用變量替換',
  'Kubernetes Secrets': 'Kubernetes 密鑰',
  'Kubernetes Namespace for Secret': 'Kubernetes 密鑰命名空間',
  'Docker Container Registry Credentials': 'Docker 容器倉庫憑證',
  'Docker Registry URL': 'Docker 倉庫 URL',
  'Registry Credentials': '倉庫憑證',
  'Show Advanced Settings': '顯示高级設置',
  'Config File Path': '配置文件路徑',
  'Add another credential': '增加一個憑證',
  'Deploy resources to the Kubernetes cluster': '將資源部署到 kubernetes 集群',
  REMOTE_REPOSITORY_URL: '遠程倉庫地址',
  BRANCH_INCLUDED: '包括分支',
  BRANCH_EXCLUDED: '排除分支',
  KUBECONFIG_CONTENT_DESC: '預設內容為目前用户的 kubeconfig。',
  'The label on which to run the Pipeline or individual stage':
    '流水線或單個階段的標籤',
  SINGLE_SVN: '單分支 SVN',
  SVN: 'SVN',
  WEBHOOK_PUSH_DESC: '推送訊息到此 URL 以觸發倉庫的重新索引。',
  'single Svn': '單分支 SVN',
  WEBHOOK_DESC: 'Configure webhook notifications by setting a webhook server.',
  TIME_TRIGGER_DESC: `某些類型的項目會在收到外部推送消息會自動重新索引。但在某些情况下，訊息通知可能失敗。
    這個選項將檢查指定時間間隔内是否執行了索引，如果沒有則觸發索引。`,
  'Are you sure to close this pipeline Editor ?': '確定關閉流水線編輯？',
  CLOSE_JENKINSFILE_EDITOR_TIP: '確定關閉 Jenkinsfile 編輯器？',
  KUBERNETES_DEPLOY_DESC: `在 kubernetes 集群中進行部署，在持續集成/持續部署的環境當中，
    只有那些需要定期更新的資源才應該放到部署步驟當中，所以此步驟大多數時間都在處理部署這類資源.`,
  KUBERNETES_DEPLOY_DESC_MORE: `<br />
    <label>該步驟主要有以下特點:</label>
    <li>無需 kubectl 的情況下實現部署</li>
    <li>Jenkinsfile 中的變量替換，可以進行動態部署。</li>
    <li>支持從私有鏡像倉庫拉取 Docker 鏡像</li>
    <label>目前該步驟支持以下資源:</label>
    <br />
    <li>配置</li>
    <li>密鑰</li>
    <li>部署</li>
    <li>守護進程集</li>
    <li>應用路由</li>
    <li>名稱空間</li>
    <li>任務</li>
    <li>服務</li>
    <li>Replica Set</li>
    <li>
      Replication
      Controller (不支持滾動更新，如果要使用滾動更新請使用部署)
    </li>`,
  'username or group name, multiple values ​​used, separated':
    '用戶名或組名，多個值使用英文逗號分隔',
  'key File Variable': '私鑰變量',
  'Text Variable': '文本變量',
  'Kubeconfig Variable': 'kubeconfig 變量',
  PIPELINE_PREPARE_DESC: '正在準備環境，稍後有圖形化顯示',
  PARAMS_DESC:
    '下列參數是根據流水線設置或 Jenkinsfile 中的 parameters 部分生成的字段，請根據運行需求輸入。',
  'Chinese is not allowed in the pipeline configuration':
    '配置中不允許含有中文',
  'Edit Credential': '編輯憑證',
  EDIT_CREDENTIAL_DESC: '下列表單不會顯示原有憑證資訊，重新輸入會將其覆蓋。',
  PASSWORD_TOKEN: '令牌/密碼',
  "Sorry, you don't have the permission to do this.":
    '抱歉，您沒有權限進行此操作',
  'Drag and drop tasks to sort': '可以拖放任務進行排序',
  Unnamed: '未命名',
  TASK_FAILED_NOT_OPERATIONAL: '任務已失敗，不可操作',
  CANCELLED_IN_REVIEW: '已在審核中取消',
  'Executes the code inside the block with a determined time out limit.':
    '使用確定的超時限制執行塊内的代碼.',
  'Timeout after no activity in logs for this block':
    '此區塊代碼無紀錄輸出後開始計算超時',
  'Absolute duration': '代碼塊所用的絕對時間',
  pipeline_conditions: '條件',
  'The conditions required to implement the current phase (optional).':
    '執行目前階段段所需要滿足的條件 （可選）',
  'Add conditions': '添加條件',
  'Add nesting conditions': '添加嵌套條件',
  'Current branch name must match the input value': '目前分支名稱需符合輸入值',
  'The environment variable entered before running the pipeline is match the current value.':
    '運行流水線前輸入的環境變量與目前值一致',
  'Enter an expression': '輸入一個表達式',
  'Negative prefix': '否定前缀',
  'Internal nesting conditions must be matched': '内部嵌套的條件需全部滿足',
  'Internal nested conditions only need to satisfy one':
    '内部嵌套的條件只需符合一個',
  'Environment name': '環境變量名稱',
  expression: '表達式',
  PARAMS_STRING: '字符串參數 (String) ',
  PARAMS_TEXT: '文本 (Text) ',
  PARAMS_BOOLEAN: '布林值 (Boolean) ',
  PARAMS_CHOICE: '選項參數 (Choice) ',
  PARAMS_PASSWORD: '密碼參數 (Password) ',
  PARAMS_TEXT_TCAP: '字符串參數 (String) ',
  critical: '嚴重',
  blocker: '阻斷',
  BLOCKER: 'Blocker',
  CRITICAL: 'Critical',
  MAJOR: 'Major',
  MINOR: 'Minor',
  NOTICE: 'Notice',
  major: '重要',
  minor: '次要',
  info: '提示',
  ISSUE_PL: '問題',
  'Code Quality Check': '代碼質量檢查',
  CODE_LINE_COUNT: '行數',
  VULNERABILITY_PL: '代碼漏洞',
  CODE_SMELL_PL: '容易出錯',
  COVERAGE: '覆蓋率',
  "Didn't pass": '未通過',
  TEST_RESULTS: '檢測結果',
  CODE_CHECK: '代碼質量',
  LINE_VALUE: '行：{value}',
  DISPLAY_ALL: '顯示全部',
  CODE_SMELL: '容易出錯',
  BUG: 'Bug',
  BUG_PL: 'Bugs',
  VULNERABILITY: '漏洞',
  SECURITY_HOTSPOT: '安全',
  Line: '行',
  DISPLAY_ONLY_LAST_TEN: '僅顯示最近 10 條',
  abortPipeline: '檢查結果是否影響後續任務',
  waitForQualityGate: '代碼質量檢查(SonarQube)',
  mail: '郵件',
  echo: '打印訊息',
  dir: '切換目錄',
  withCredentials: '添加憑證',
  container: '指定容器',
  archiveArtifacts: '保存成品',
  input: '審核',
  timeout: '超時',
  Timeout: '超時',
  TIMEOUT_VALUE: '超時：{value}',
  withSonarQubeEnv: 'Sonarqube 配置',
  sh: 'shell 腳本',
  CLONE_SETTINGS: 'Git 克隆參數',
  CLONE_DEPTH: '克隆深度',
  REGEX: '過濾規則',
  FILTER_BY_REGEX: '根據名稱過濾（正則匹配）',
  FILTER_BY_REGEX_DESC:
    '啟用正則表達式，將忽略與提供的正則表達式不匹配的名稱（包括分支與PR等)',
  ENABLE_SHALLOW_CLONE: '開啟淺克隆',
  CLONE_TIMEOUT_PERIOD: '流水線克隆超時時間（單位：分鐘）',
  'config name': '配置名稱',
  waitForQualityGate_desc:
    '代碼質量檢查標準來源於SonarQube的 Quality Gate (質量閥)，如果需要自定義檢查標準請前往 SonarQube 設置',
  'Inspection results do not affect subsequent tasks': '檢查結果不影響後續任務',
  'Start the follow-up task after the inspection': '檢查通過後開始後續任務',
  'Load the sonarqube configuration provided by Jenkins into the Pipeline.':
    '將 Jenkins 中的 sonarqube 配置加載到流水線中',
  PIPELINE_CREATE_DESC: '初始化完成後將開始 Pipeline 的任務執行',
  INITIALIZING_PIPELINE: 'Pipeline 初始化中',
  INITIALIZING_PIPELINE_DESC:
    'Please wait until the pipeline initialization is complete.',
  'Specify a container to add nested tasks to execute inside the container':
    '指定容器，可添加嵌套任務在容器内執行',
  INPUT_DESC:
    '流水線運行至此任務將會暫停，創建者和被@的人可以選擇繼續或終止流水線',
  INPUT_MESSAGE_DESC: '流水線運行狀態中將會顯示此訊息',
  '@somebody to help review': '可以@某人來幫助審核',
  REVIEW_DESC: '流水線運行至此任務將會暫停，審核後可選擇繼續或终止',
  withSonarQubeEnv_DESC: '快速的定位代碼中潛在的或者明顯的錯誤',
  waitForQualityGate_DESC: '在執行代碼分析後執行',
  script_DESC: '執行groovy腳本',
  QUEUED: '列隊中',
  ABORTED: 'Aborted',
  UNSTABLE: 'Unstable',
  PIPELINE_QUEUED_TITLE: 'Pipeline 即將進行初始化',
  PIPELINE_QUEUED_DESC:
    '您需要等待 agent 啟動並執行流水線（注：如 agent 長時間沒有啟動請檢查 agent 配置和集群資源情況）',
  pipeline_owner: 'DevOps 项目的所有者，可以進行 DevOps 项目的所有操作',
  pipeline_maintainer:
    'DevOps 项目的主要維護者，可以進行項目内的憑證配置、Pipeline 配置等操作',
  pipeline_developer: 'DevOps 项目的開發者，可以進行 Pipeline 的觸發以及查看',
  pipeline_reporter: 'DevOps 项目的觀察者，可以查看 Pipeline 的運行情况',
  'sonar is the default config name.': '預設配置名稱是 sonar',
  credentialsId: '憑證 ID',
  enableConfigSubstitution: '啟用變量替換',
  configs: '配置',
  secretNamespace: '密鑰命名空間',
  secretName: '秘鑰名稱',
  dockerCredentials: 'Docker 容器倉庫憑證',
  passwordVariable: '密碼變量',
  usernameVariable: '用戶名變量',
  keyFileVariable: '私鑰變量',
  passphraseVariable: '密碼變量',
  NO_BRANCH_FOUND_TIP: '未發現任何分支',
  LoadPrevData_Desc: '檢測到此流水線上次未編輯成功，是否加載上次數據繼續編輯？',
  Continue: '繼續編輯',
  Discard: '忽略',
  'Jenkinsfile syntax error, message': 'Jenkinsfile 語法錯誤，訊息',
  PATTERN_PIPELINE_NAME_VALID_NAME_TIP:
    '名稱不合法 （僅支持大小寫字母、數字、_、-）',
  INCORRECT_GITHUB_TOKEN_DESC: `Token 錯誤
  <a
    class="float-right"
    href="https://github.com/settings/tokens/new?scopes=repo,read:user,user:email,write:repo_hook"
    target="_blank"
  >
    重新獲取 Token
  </a>`,
  GET_GITHUB_TOKEN_DESC: `用於獲取 GitHub 代碼倉庫
  <a
    class="float-right"
    href="https://github.com/settings/tokens/new?scopes=repo,read:user,user:email,write:repo_hook"
    target="_blank"
  >
    獲取 Token
  </a>`,
  BITBUCKET_SERVER_CREDENTIAL_EMPTY: '請輸入 BitBucket 帳號資訊。',
  GITHUB_CREDENTIAL_EMPTY: '請輸入 GitHub 訪問令牌。',
  BITBUCKET_ADDRESS_EMPTY_TIP:
    'Please enter the address of a Bitbucket server.',
  BITBUCKET_ADDRESS_INVALID_TIP: 'Invalid Bitbucket server address.',
  'pipeline syntax error': '流水線語法錯誤',
  PIPELINES_FOOTER_SEE_MORE: '前往分支詳情頁查看更多 →',
  PIPELINE_CRON_DESC: '上次運行時間 {lastTime}，下次運行時間 {nextTime}。',
  'not support edit nested stage': '暫不支持編輯嵌套階段',
  JENKINS_LINS_ERROR: '第 {line} 行有語法錯誤',
  'Delete all resources of the deployment file': '刪除部署文件所對應的所有資源',
  PIPELINE_EVENT_TRIGGER: '流水線事件觸發器',
  WHEN_CREATE_PIPELINE: '創建流水線',
  WHEN_DELETE_PIPELINE: '當刪除流水線',
  WHEN_DELETE_PIPELINE_DESC:
    '當有流水線被刪除時，將自動觸發指定流水線中的任務。',
  WHEN_CREATE_PIPELINE_DESC:
    '當創建新的流水線時，將自動觸發指定流水線中的任務。',
  SELECT_PIPELINE_SCAP: '選擇一個流水線。',
  timer: '定時器',
  STARTED_BY_NAME: '由{name}觸發掃描',
  CREDENTIAL_NAME_EXIST_DESC: '憑證 ID 已存在。',
  'Invalid credential ID': '憑證 ID 格式不合法',
  CI: '持續集成 (CI)',
  CI_DESC:
    '持續集成（CI）是在源代碼變更後自動檢測、拉取、構建和（在大多數情況下）進行單元測試的過程。 ',
  CICD: '持續集成&交付 (CI/CD)',
  CICD_DESC:
    '持續部署（CD）是指能夠自動提供持續交付管道中發布版本給最終用戶使用的想法。根據用戶的安裝方式，在雲環境中自動部署、app 升級（如手機上的應用程序）、更新網站或只更新可用版本列表。 ',
  CUSTOM_PIPELIEN: '自定義流水線',
  CUSTOM_PIPELIEN_DESC: '您可以選擇您需要的任務自定義流水線的工作內容',
  COPY_PIPELINE: '複製流水線',
  PIPELINE_RUN_START_SI: 'Starts to run the pipeline...',
  PIPELINE_RUN_START_PL: 'Starts to run the pipelines...',
  BATCH_RUN_SUCCESS_SI: 'The pipeline was run successfully.',
  BATCH_RUN_SUCCESS_PL: 'The pipelines were run successfully.',
  'Batch Run Fail': '批量運行失敗',
  'Run Start': '運行開始',
  GITLAB_SERVER_ADDRESS: 'Gitlab 服務',
  GITLAB_SERVER_EMPTY_TIP: 'Please enter the address of a GitLab server.',
  PROJECT_GROUP_OWNER: 'GitLab 項目所屬組',
  PROJECT_GROUP_OWNER_EMPTY_TIP:
    'Please enter the name of a GitLab project group or project owner.',
  BITBUCKET_SERVER_ADDRESS: 'Bitbucket Server Address',
  BITBUCKET_SERVER_EMPTY_TIP: 'Please enter the address of a Bitbucket server.',
  CREATE_PIPELINE_DESC: '使用流水線進行構建，測試和部署',
  'Choose a Pipeline Template': '選擇流水線模板',
  BATCH_RUN_UNSUPPORTED_DESC: '多分支流水線不支持批量運行。',
  SYNC_STATUS: '同步狀態',

  // Pipeline List Page
  PULL_REQUEST_PL: '拉取請求',
  PULL_REQUEST_COUNT: 'Pull Requests',
  HEALTHY: '健康',

  // Pipeline Creation Page
  DEVOPS_PROJECT_DESC:
    'DevOps 项目用於對資源進行分組管理以及控製不同用戶的資源管理權限。',
  PIPELINE_CREATE_DEVOPS_PROJECT_DESC:
    'Select the DevOps project to which the pipeline belongs.',
  CODE_REPOSITORY_OPTIONAL: '代碼倉庫（可選）',
  OPTIONS: '備用選項',
  NOTIFICATION_MANAGEMENT: '通知管理',
  NO_AUTH: '無須認證',
  'Notification Management': '通知管理',
  NOTIFICATION_CONFIGURATION: '通知配置',
  'Notification Configuration': '通知配置',
  SERVER_SETTINGS: '服務器设置',
  RECIPIENT_SETTINGS: '接收設置',
  'Receive Notification': '接收通知',
  NOTIFICATION_CONFIGURATION_DESC:
    'KubeSphere supports notification configuration for multiple notification channels. You can set servers and recipients, and enable or disable notifications.',

  'Notification On': '通知開啟',
  'Notification Off': '通知關閉',

  NOTIFICATION_CONDITIONS: 'Notification Conditions',
  NOTIFICATION_CONDITION_SETTING_TIP:
    'Operators <strong>Includes values</strong> and <b>Does not include values</b> require one or more label values. Use a carriage return to separate values.</br>Operators <b>Exists</b> and <b>Does Not Exist</b> determine whether a label exists, and do not require a label value.',
  NOTIFICATION_CONDITION_SETTINGS_DESC:
    'You will receive only notifications that meet the conditions.',
  INCLUDES_VALUES: '包含值',
  DOES_NOT_INCLUDE_VALUES: '不包含值',
  EXISTS: 'Exists',
  DOES_NOT_EXIST: 'Does not exist',
  'Please select a tag': '請選擇標簽',
  'Please select a regex filter': '請選擇過濾規則',
  PATTERN_TAG_INVALID_TIP:
    'Invalid label. The label can contain only uppercase and lowercase letters, numbers, hyphens (-), underscores (_), and dots (.), and must begin and end with an uppercase or lowercase letter or number.',
  INVALID_NOTIFICATION_CONDITION: '請填寫正確的通知條件。',

  SEND_TEST_MESSAGE: '發送測試信息',
  SEND_TEST_MESSAGE_DESC:
    'After the configurations are complete, you can send a test message for verification.',
  SEND_TEST_MESSAGE_SUCCESS_DESC:
    '驗證成功。已向您發送了一條測試消息，請查收。',

  Mail: '郵件',
  SMTP_SERVER_ADDRESS: 'SMTP 服務器地址',
  USE_SSL_SECURE_CONNECTION: 'Use SSL secure connection',

  MAIL_SETTING_DESC: '可以通過郵件接收平臺的通知，需要配置郵件發送服務器。',
  SENDER_MAIL: '發件人郵箱',
  MAIL_DESC:
    'Configure email notifications by setting a server and recipients.',
  SENDER_EMAIL: '發件人郵箱',
  MAIL_SETTINGS_CHANGE_NEED_SAVE_TIP:
    '您當前的郵件設置已發生變化，請保存配置，或者取消修改',

  'Please enter an email address': '請輸入要添加的郵箱',
  'This email address has existed': '此郵箱已存在',
  INVALID_ADDRESS_DESC: 'Please enter a valid address.',
  INVALID_EMAIL: '郵箱格式不合法',
  'Please add the recipient email address': '請添加接收郵箱',
  MAX_EAMIL_COUNT: 'You can add a maximum of {count} emails.',

  DingTalk: '釘釘',
  CONVERSATION_SETTINGS: '會話設置',
  CONVERSATION_ID: '會話 ID',
  CHATBOT_SETTINGS: '群機器人設置',
  keywords: '關鍵字',
  KEYWORDS_LIST: 'Keyword List',
  CONVERSATION_ID_TIP:
    '會話 ID 需要系統管理員進行配置才能獲取，如需設置請聯系系統管理員。',

  ENTER_CONVERSATION_ID_DESC: 'Please enter a conversation ID.',
  ENTER_KEYWORD_DESC: '請輸入關鍵字。',
  CONVERSATION_ID_EXISTS:
    'The conversation ID already exists. Please add another conversation ID.',
  KEYWORD_EXISTS: 'The keyword already exists. Please add another keyword.',
  MAX_CID_COUNT: 'You can add a maximum of {count} conversation IDs.',
  MAX_KEYWORD_COUNT: 'You can add a maximum of {count} keywords.',
  EMPTY_KEYWORDS_DESC: 'No keyword is added.',
  DINGTALK_SETTING_TIP: '請設置會話或者群機器人。',
  DINGTALK_CHATBOT_SECURITY_TIP: 'Please enter a secret or keywords',

  DINGTALK_DESC:
    'Configure DingTalk notifications by setting a conversation or chatbot.',
  DINGTALK_KEYWORDS_DESC: 'ChatBot 的自定義關鍵字, 如需多個請以 "," 分隔',
  DINGTALK_SETTINGS_CHANGE_NEED_SAVE_TIP:
    '您當前的釘釘設置已發生變化，請保存設置，或者取消修改',

  WeCom: '企業微信',

  WECOM_SETTING_DESC:
    '可以通過企業微信接收平臺的通知，需要配置企業微信發送服務器。',
  WECOM_CORP_ID: 'Corporation ID',
  WECOM_AGENT_ID: 'App AgentId',
  WECOM_SECRET: 'App Secret',
  USER_ID: '用戶 ID',
  DEPARTMENT_ID: '部門 ID',
  TAG_ID: '標簽 ID',
  TOUSER_LIST: 'Added User IDs',
  TOPARTY_LIST: 'Added Department IDs',
  TOTAG_LIST: 'Added Tag IDs',
  WECOM_TOUSER_PLACEHOLDER: 'User ID',
  WECOM_TOPARTY_PLACEHOLDER: 'Department ID',
  WECOM_TOTAG_PLACEHOLDER: 'Tag ID',
  RECIPIENT_SETTINGS_TIP:
    'At least one item needs to be configured to receive notifications.',
  EMPTY_TOUSER_DESC: 'No user ID is added.',
  EMPTY_TOPARTY_DESC: 'No department ID is added.',
  EMPTY_TOTAG_DESC: 'No tag ID is added.',

  ENTER_WECOM_CORP_ID_DESC: 'Please enter a corporation ID.',
  ENTER_WECOM_AGENT_ID_DESC: 'Please enter an applicaiton AgentId.',
  ENTER_WECOM_SECRET_DESC: 'Please enter an application Secret.',
  ENTER_TOUSER_TIP: 'Please enter a user ID.',
  ENTER_TOPARTY_TIP: 'Please enter a department ID.',
  ENTER_TOTAG_TIP: 'Please enter a tag ID.',
  TOUSER_EXISTS: 'The user ID already exists. Please enter another user ID.',
  TOPARTY_EXISTS:
    'The department ID already exists. Please enter another department ID.',
  TOTAG_EXISTS: 'The tag ID already exists. Please enter another tag ID.',
  MAX_TOUSER_COUNT: 'You can add a maximum of {count} users.',
  MAX_TOPARTY_COUNT: 'You can add a maximum of {count} departments.',
  MAX_TOTAG_COUNT: 'You can add a maximum of {count} tags.',

  WECOM_DESC:
    'Configure WeCom notifications by setting a server and recipients.',
  WECOM_SETTINGS_CHANGE_NEED_SAVE_TIP:
    '您當前的企業微信設置已發生變化，請保存設置，或者取消修改',

  Channel: '接收頻道',
  CHANNEL_SETTINGS: '接收頻道設置',
  ADDED_CHANNELS: 'Added Channels',
  EMPTY_CHANNEL_DESC: 'No channel is added.',

  SLACK_TOKEN_DESC: 'Please enter a Slack token.',
  ADD_CHANNEL_DESC: 'Please add a channel.',
  CHANNEL_EXISTS: 'The channel already exists. Please add another channel.',
  CHANNEL_SETTINGS_DESC: 'Please add a channel.',
  MAX_CHANNEL_COUNT: 'You can add a maximum of {count} channels.',

  SLACK_DESC:
    'Configure Slack notifications by setting a server and Slack channels.',
  SLACK_SETTINGS_CHANGE_NEED_SAVE_TIP:
    '您當前的 slack 設置已發生變化，請保存設置，或者取消修改',

  'Webhook Settings': 'Webhook 設置',
  'Webhook Url': 'Webhook 地址',
  'Server Name': '服務名稱',
  'Root CA': '根證書',
  'Client Certificate Cert': '客戶端證書 Cert',
  'Client Certificate Key': '客戶端證書 Key',
  VERIFICATION_TYPE: '驗證類型',
  SKIP_TLS_VERFICATION: 'Skip TLS verification (insecure)',
  VERIFICATION_TYPE_DESC: '請選擇驗證類型。',

  WEBHOOK_SETTING_DESC:
    '可以通過 webhook 接收平臺的通知，需要配置 webhook 發送服務器。',
  WEBHOOK_SETTINGS_CHANGE_NEED_SAVE_TIP:
    '您當前的 webhook 設置已發生變化，請保存設置，或者取消修改',

  PLEASE_ENTER_VALUE_CUSTOM: '請輸入{value}。',
  // Notification Configuration
  CONTAINER: 'Container',
  VALUES: 'Values',
  LABEL: 'Label',
  CONDITION_OPERATOR: 'Operator',
  SMTP_USER: 'SMTP Username',
  SMTP_PASSWORD: 'SMTP Password',
  ENTER_PASSWORD_TIP: 'Please enter the password.',
  ENTER_RECIPIENT_EMAIL_DESC:
    'Please add at lease one email address of a recipient.',
  INVALID_EMAIL_ADDRESS_DESC:
    'The email format is incorrect. Please enter a correct email address.',
  SMTP_USER_EMPTY_DESC: 'Please enter a SMTP username.',
  DINGTALK_SECRET: 'Secret',
  MAIL_TITLE: 'Email',
  DINGTALK_TITLE: 'DingTalk',
  WECOM_TITLE: 'WeCom',
  SLACK_TITLE: 'Slack',
  WEBHOOK_TITLE: 'Webhook',
  SLACK_TOKEN: 'Slack Token',
  SLACK_CHANNEL: 'Slack channel',
  TOKEN: 'Token',
  BASIC_AUTH: 'Basic authentication',
  BEARER_TOKEN: 'Bearer token',
  NODE_SI: '節點',
  NODE_PL: '節點',
  MASTER_NODE_SI: 'Master 節點',
  MASTER_NODE_PL: 'Master 節點',
  WORKER_NODE_SI: '工作節點',
  WORKER_NODE_PL: '工作節點',

  'Cluster Node': '集群節點',
  CLUSTER_NODE_PL: '集群節點',
  CLUSTER_NODE: 'Cluster Node',
  'Cluster Nodes': '集群節點',

  'Edge Node': '邊緣節點',
  EDGE_NODE_PL: '邊緣節點',
  'Master Node': 'Master 節點',
  'Worker Node': '工作節點',
  ADD_NODE: '添加節點',
  'System Version': '系統版本',
  ONLINE_NODES: '在線節點',
  ALL_NODES: '全部節點',
  IP_ADDRESS: 'IP 地址',
  LINUX: 'Linux',
  'Node IP': '節點 IP',
  Unschedulable: '無法調度',
  SCHEDULABLE: '可調度',
  ARCHITECTURE: '系統架構',
  'OS Image': '操作系統',
  OS_TYPE: '操作系統類型',
  OS_VERSION: '操作系統',
  KERNEL_VERSION: '内核版本',
  CONTAINER_RUNTIME: '容器版本',
  KUBELET_VERSION: 'Kubelet 版本',
  KUBE_PROXY_VERSION: 'Kube-Proxy 版本',
  lastHeartbeatTime: '最近更新時間',
  LATEST_UPDATE_VALUE: 'Latest update: {value}',
  NODE_ONLINE_STATUS: '節點在線狀態',
  PODS: '容器組',
  'Pod Usage': '容器組使用情況',
  'Pod Quantity Trend': '容器組數量變化',
  'Local Storage Capacity': '本地儲存容量',
  used: '已用',
  'Resource Usage Status': '資源使用狀態',
  TAINTS: '汙點',
  taints: '汙點',
  Taint: '汙點',
  taint: '汙點',
  Conditions: '狀態',
  ANNOTATION_PL: '注解',
  WORKLOAD_ANNOTATIONS: 'Workload Annotations',

  'Resource Usage': '資源使用情況',

  'CPU Requests': 'CPU 請求',
  'CPU Limits': 'CPU 限制',
  'Memory Requests': '記憶體請求',
  'Memory Limits': '記憶體限制',

  NODE_STATUS_UNSCHEDULABLE: '無法調度',
  NODE_STATUS_RUNNING: '運行中',
  NODE_STATUS_WARNING: '異常中',

  NOSCHEDULE: '不允許調度 (NoSchedule)',
  PREFER_NOSCHEDULE: '盡量不調度 (PreferNoSchedule)',
  NOEXECUTE: '不允許並驅逐已有容器組 (NoExecute)',

  EDIT_TAINT: '汙點管理',
  EDIT_TAINTS: '汙點管理',
  COMMON_TAINTS: '公共汙點',
  'Node List': '主機列表',
  'Node Taints': '主機汙點',
  TAINTS_DESC:
    '汙點表示此節點已被 key=value 汙染，容器組調度不允許（PodToleratesNodeTaints 策略）或盡量不（TaintTolerationPriority 策略）調度到此節點，除非是能夠容忍（Tolerations）key=value 汙點的容器組。',
  TAINTS_TIPS:
    '如果主機中存在一個或多個影響策略為 NoSchedule 的汙點，該容器組不會被調度到該主機<br>如果主機中不存在影響策略為 NoSchedule 的汙點，但是存在一個或多個影響策略為 PreferNoSchedule 的汙點，該容器組會盡量不調度到該主機<br>如果主機中存在一個或多個影響策略為 NoExecute 的汙點，該容器組不會被調度到該主機，並且會驅逐已經調度到該主機的容器組實例',
  NO_TAINTS_TIPS: '暫未設置汙點',
  TAINT_SELECT_TIPS: '加入公共汙點',
  TAINT_DELETE_TIPS: '刪除汙點',
  ADD_TAINT: '添加汙點',
  'Delete All Taints': '全部刪除',
  'CPU Used': '已使用 CPU ',
  'Memory Used': '已使用記憶體',
  'Pod Used': '已使用容器組',
  'Scheduling Policy': '調度策略',
  'Add Type': '添加類型',
  'Add Node Type': '添加節點類型',
  'Type Name': '類型名稱',
  'Allocated CPU': '已分配 CPU',
  'Allocated Memory': '已分配記憶體',
  ALLOCATED_RESOURCES: '已分配資源',

  METADATA: '元數據',

  CLUSTER_NODE_DESC:
    '集群節點提供了目前集群下節點的運行狀態，以及可以編輯刪除節點',
  CLUSTER_NODE_EMPTY_DESC:
    '集群節點提供了目前集群下節點的運行狀態，以及可以編輯刪除節點',
  EDGE_NODE_DESC:
    '邊緣節點提供了目前集群下節點的運行狀態，以及可以編輯刪除節點',
  EDGE_NODE_EMPTY_DESC:
    '邊緣節點提供了目前集群下節點的運行狀態，以及可以編輯刪除節點',
  NODE_NETWORKUNAVAILABLE: '網路配置 (NetworkUnavailable)',
  NODE_NETWORKUNAVAILABLE_DESC: '檢查節點上的網路配置是否正確',
  NODE_OUTOFDISK: '硬碟可用空間 (OutOfDisk)',
  NODE_OUTOFDISK_DESC: '檢查節點上是否有空間添加新的容器組',
  NODE_MEMORYPRESSURE: '記憶體壓力 (MemoryPressure)',
  NODE_MEMORYPRESSURE_DESC: '如果節點上的記憶體使用壓力過大,則調度失敗',
  NODE_DISKPRESSURE: '硬碟壓力 (DiskPressure)',
  NODE_DISKPRESSURE_DESC: '硬碟大小存在壓力 - 即硬碟容量低',
  NODE_PIDPRESSURE: '進程壓力 (PIDPressure)',
  NODE_PIDPRESSURE_DESC: '如果節點進程壓力過大，則會調度失敗',
  NODE_READY: '節點就緒 (Ready)',
  NODE_READY_DESC: '節點健康且可以接收新的容器組',

  NODE_TYPES_Q: '集群節點的類型？',
  NODE_TYPES_A: '節點分為主控 (Master) 節點和工作 (Worker) 節點',
  WHAT_IS_NODE_TAINTS_Q: '什麼是節點汙點？',
  WHAT_IS_NODE_TAINTS_A:
    '節點汙點 (Taints) 可以阻止某些容器組 (Pod) 副本部署至該節點中, 與容忍度 (Tolerations) 一起工作確保容器組不會被調度到不合適的節點上',

  NODE_TYPE_DESC:
    '節點類型為提供了主機節點分組功能，用戶可以通過創建合適關係的節點類型並將主機節點加入相應的分組，從而將容器組按照分組關係部署到合適的物理節點上，來提高資源的可用性，業務的連續性。',

  NODE_TYPE_DESCRIPTION_DEC:
    '描述資訊在選擇節點類型時將幫助用戶更好的選擇節點類型並使用集群',
  ADD_EDGE_COMMAND: '將命令複製到命令行中進行創建邊緣節點',
  IN_USE_Node_IP: '節點 IP {ip} 已被使用',
  IN_USE_Node_NAME: '節點名稱 {name} 已被使用',
  'Add Edge Node': '添加邊緣節點',
  NODE_NAME_EMPTY_DESC: '請輸入節點名稱',
  EDGENODE_NAME_EMPTY_DESC: '請輸入節點名稱',
  EDGENODE_CONFIG_COMMAND_TIP:
    '運行命令前請確保已在邊緣節點安裝容器運行時如 docker 或 container。<a href="https://kubeedge.io/en/docs/" target="_blank">了解更多</a>',
  ADD_DEFAULT_TAINT: '添加默認污點 {params}',
  'Network Policy': '網路策略',
  NETWORK_POLICY: '網路策略',
  NETWORK_POLICY_PL: '網路策略',
  NETWORK_POLICY_LOW: '網路策略',
  NETWORK_POLICY_EMPTY_DESC: '請創建一個網路策略。',
  NETWORK_ISOLATION: '網路隔離',
  CREATE_NETWORK_POLICY_TCAP: '創建網路策略',
  // Network Policies Page
  CREATE_BTN: '創建',
  ADD_ALLOWLIST_ENTRY: '添加白名單',
  EGRESS: '出口',
  Ingress: '入口',
  EGRESS_TRAFFIC: '流量出口',
  INGRESS_TRAFFIC: '流量入口',
  DESTINATION: '目的地',

  TRAFFIC_DIRECTION: '流量方向',
  NETWORK_POLICY_DESC:
    '通過配置網路策略，允許在同個集群内時現網路的隔離，也就是可以在某些實例（Pod）之間架起防火牆。',
  NETWORK_ISOLATION_DESC:
    '通過配置網路隔離控制同一集群内 Pod 之間的流量以及來自外部的流量，從而實現隔離應用並增強應用的安全性。',
  CREATE_NETWORK_POLICY_DESC:
    '通過配置網路策略控制同一集群内 Pod 之間的流量以及來自外部的流量，從而實現隔離應用並增強應用的安全性。',
  NETWORK_POLICY_Q: '如何更好地使用網路策略?',
  NETWORK_ISOLATION_Q: '如何更好地使用網路隔離?',
  NETWORK_POLICY_A:
    '根據實際使用場景我们整理了幾種較為常見的應用場景，您可以查閱文件了解更多',
  NETWORK_POLICY_Q1: 'CNI 插件實現網絡策略需滿足哪些必要條件？',
  NETWORK_ISOLATION_Q1:
    'What are the requirements on the CNI plugin for implementing network isolation?',
  NETWORK_POLICY_A1:
    'Kubernetes 所使用 CNI 必須支持 Kubernetes 原生<a href="https://kubernetes.io/zh/docs/concepts/services-networking/network-policies/" target="_blank">網路策略</a>，例如 Calico, Cilium, Kube-router, Romana and Weave Net。',
  NETWORK_POLICY_EMP_TITLE: '網路隔離未開啟',
  NETWORK_POLICY_EMP_DESC:
    'After the project network access is enabled, other projects will be unable to access the project. But you can allow projects, Services, and external IP addresses to access this project based on your needs.',
  PROJECT_NETWORK_ISOLATION: '項目網路隔離',
  EXTERNAL_EGRESS_DESC:
    'Pods in the current project are allowed to access the following network segments and ports.',
  EXTERNAL_INGRESS_DESC:
    'Pods in the current project are allowed to be accessed by the following network segments and ports.',
  INTERNAL_EGRESS_DESC:
    'Allows access to resources that match any of the following network policies.',
  INTERNAL_INGRESS_DESC:
    'Allows access from resources that match any of the following network policies.',
  INTERNAL_ALLOWLIST: '内部白名單',
  INTERNAL_ALLOWLIST_DESC:
    'Specifies the allowed access to and from projects and services in the cluster.',
  INTERNAL_ALLOWLIST_TIP:
    'Add projects and services in the cluster to the allowlist.',
  EXTERNAL_ALLOWLIST: 'External Allowlist',
  EXTERNAL_ALLOWLIST_DESC:
    'Specifies the allowed access to and from network segments outside the cluster.',
  EXTERNAL_ALLOWLIST_TIP:
    'Add network segments outside the cluster to the allowlist.',
  EXTERNAL_TRAFFIC_DIRECTION_DESC:
    'Egress indicates the direction from the current project to outside the cluster. Ingress indicates the direction from outside the cluster to the current project.',
  NETWORK_SEGMENT_DESC: 'Set a network segment (CIDR is supported).',

  CIDR_DESC: '將根據流量的方向',
  SELECT_RULE_DIRECTION_TIP: 'Please select a traffic direction.',
  ENTER_VALID_SEGMENT_DESC: 'Please enter a valid network segment.',
  ENTER_VALID_PORT_NUMBER_DESC: 'Please enter a valid port number.',
  EMPTY_RESOURCE_DESC: 'Please select at least one project or Service.',
  ALLOWLIST_ENTRY: '白名單條目',
  ALLOWLIST_ENTRY_LOW: '白名單條目',
  MONITORING: '監控',
  'Monitoring Center': '監控中心',
  'Physical Resources': '物理資源',
  PHYSICAL_RESOURCES_MONITORING: '物理資源監控',
  SERVICE_COMPONENT_MONITORING: '服務組件監控',
  'Application Resources': '應用資源',
  APPLICATION_RESOURCE_PL: '應用資源監控',
  PHYSICAL_RESOURCE_PL: 'Physical Resources',

  NODE_COUNT: '節點數量',
  CLUSTER_STATUS: '集群狀態',
  'Cluster Monitors': '集群監控',
  'Cluster Resource Monitoring': '集群資源監控',
  ETCD_MONITORING: 'etcd 監控',
  'ETCD Service Status': 'etcd 服務狀態',
  'ETCD Nodes': 'etcd 節點',
  SERVICE_STATUS: '服務狀態',
  EXTERNAL_ETCD: '外部 etcd',
  API_SERVER_MONITORING: 'API Server 監控',
  SCHEDULER_MONITORING: '調度器監控',
  'Historical Monitoring': '歷史監控',
  RESOURCE_USAGE_RANKING: 'Resource Usage Ranking',
  'Usage Ranking': '用量排行',
  'Resources Usage': '資源用量',
  'Resources Usage Trend': '資源用量趨勢',
  'Physical Resources Usage': '物理資源用量',
  APPLICATION_RESOURCES_USAGE: '應用資源用量',
  PHYSICAL_RESOURCES: '物理資源用量',
  APPLICATION_RESOURCE_USAGE: '應用資源用量',
  PROJECT_CHANGE_TREND: '項目變化趨勢',
  PROJECT_COUNT: '項目數量',
  CLUSTER_RESOURCE_USAGE: '集群資源使用情況',
  RESOURCE_USAGE: '資源使用情況',
  CLUSTER_NODE_STATUS: '集群節點狀態',
  COMPONENT_STATUS: '組件狀態',
  PHYSICAL_RESOURCE_STATUS: '物理資源狀態',
  'Disk Usage': '硬碟使用量',
  'Disk Capacity': '硬碟容量',
  INODE_USAGE: 'Inode Usage',
  RUNNING_PODS: 'Running Pods',
  'Abnormal Pods': '異常容器組',

  CONTROLLER_MANAGER: '管理控制中心',
  KUBERNETES_SCHEDULER: 'K8s 調度器',
  SCHEDULER: '調度器',
  Node: '節點',

  SELECT_TIME_RANGE: '選擇時間範圍',
  CUSTOM_TIME_RANGE: '自定義時間範圍',
  SHOW_SELECTED_ONLY: '僅顯示已選',
  VIEW_ALL_REPLICAS: '查看所有副本',
  'View All': '查看全部',
  VIEW_MORE: '查看更多',

  Interval: '間隔',
  Last: '最近',
  LAST_TIME_S: '最近 {num} 秒',
  LAST_TIME_M: '最近 {num} 分鐘',
  LAST_TIME_H: '最近 {num} 小時',
  LAST_TIME_D: '最近 {num} 天',
  TIME_M: '{num} 分鐘',
  TIME_H: '{num} 小時',
  TIME_D: '{num} 天',
  UTILIZATION: '使用率',
  RESOURCE_USAGE_TITLE: '資源使用情况',
  MONITORING_CLUSTER_DESC:
    'Cluster status displays the overview and details of cluster resources. You can view the monitoring data and the usage ranking of cluster resources.',
  MONITORING_PHYSICAL_DESC: '監控集群物理資源的運行狀態',
  MONITORING_APPLICATION_DESC:
    'Application resources provide the monitoring data of application resource usage and usage ranking.',
  TIMERANGE_SELECTOR_MSG: '結束時間需晚於開始時間。',
  MONITORING_SELECT_LIMIT_MSG: '最多可以選擇 10 個資源',

  second: '秒',
  ms: '毫秒',
  times: '次',
  'times/s': '次/秒',
  USAGE_RANKING: 'Usage Ranking',
  OUTBOUND_TRAFFIC: 'Outbound Traffic',
  INBOUND_TRAFFIC: 'Inbound Traffic',
  QUOTA: 'Quota',
  QUOTA_PL: 'Quotas',
  QUOTA_VALUE: 'Quota: {value}',
  RAFT_PROPOSAL: 'Raft 提議',
  PROPOSAL_COMMIT_RATE: '提議提交速率',
  PROPOSAL_APPLY_RATE: '提議應用速率',
  PROPOSAL_PENDING_TOTAL: '提議待處理總數',
  DB_SIZE: '資料庫大小',
  CLIENT_TRAFFIC: '客戶端流量',
  RECEIVED: '接收',
  SENT: '發送',
  GRPC_STREAM_MESSAGES: 'gRPC 流式訊息',
  WAL_FSYNC: 'WAL 紀錄同步時間',
  DB_FSYNC: '資料庫同步時間',
  REQUEST_LATENCY: '請求延遲',
  REQUEST_LATENCY_MS: 'Request Latency (ms)',
  'Total Average': '總平均值',
  'APIs Average': 'APIs 平均值',
  REQUEST_PER_SECOND: '每秒請求數',
  API_REQUESTS_PER_SECOND: '每秒 API 請求數',
  API_REQUEST_LATENCY: 'API 請求延遲',
  REQUEST: '請求',
  REQUEST_COUNT: 'Requests',
  SCHEDULE_ATTEMPTS: '調度次數',
  SCHEDULING_RATE: '調度速率',
  SCHEDULING_LATENCY: '調度延遲',

  AVERAGE: '平均值',
  TOTAL_AVERAGE: '總平均值',
  SUCCESS: '成功',
  NOT_SUCCESSFUL: 'Not successful',
  ERROR: '錯誤',
  FAILURE: '失敗',
  ETCD_NODE_TITLE: 'ETCD節點',
  ETCD_LEADER_TITLE: 'Leader exists',
  ETCD_CHANGES_TITLE: 'Leader changes in 1 h',
  ETCD_STATUS: '服務 <span>狀態</span>',
  ETCD_PROPOSAL: 'Raft <span>提議</span>',
  ETCD_DB_SIZE: '資料庫 <span>大小</span>',
  ETCD_CLIENT_TRAFFIC: '客戶端 <span>流量</span>',
  REQUEST_LATENCY_TCAP: '請求 <span>延遲</span>',
  REQUEST_RATE: '請求 <span>速率</span>',
  SCHEDULE_ATTEMPTS_TCAP: '調度 <span>次數</span>',
  SCHEDULING_RATE_TCAP: '調度 <span>速率</span>',
  PROPOSAL_COMMITTED: '提議提交速率',
  PROPOSAL_APPLIED: '提議應用速率',
  PROPOSAL_FAILED: '提議失敗速率',
  PROPOSAL_PENDING: '提議待處理數',

  EDIT_TEMPLATE: '編輯模板',
  SAVE_TEMPLATE: '保存模板',

  'No Refreshing': '不刷新',

  GRAPH_COLORS: '圖表配色',
  SINGLE_GRAPH_TYPE: '最常見的圖表類型',
  SINGLE_GRAPH_TYPE_NAME: '基礎圖',
  STACKED_GRAPH_TYPE: '堆疊圖',
  STACKED_GRAPH_TYPE_DESC: '適用於各大類總量及分量之間的對比顯示',
  CHART_TYPES: '圖表類型',
  GRAPH_TYPES: '圖例類型',
  ADD_MONITOR_ITEM: '添加監控項',
  ADD_MONITOR_ROW: '添加監控組',
  MONITOR_TYPE_NO_SUPPORT: '目前不支持該類型',
  TABLE_SETTINGS: '表格設置',
  PER_PAGE_LINES: '每頁行數',
  CUSTOM_DISPLAY_STYLE: '設置顯示格式',
  CUSTOM_DISPLAY_MODAL_DESC: '根據需要定制Table中的顯示格式',
  DATA_TYPE: '數據類型',
  DECIMALS: '精確位',
  THRESHOLD_FILL: '臨界值填充',
  THRESHOLD_FILL_DESC: '可以設置臨界值，數值超出後可以自動更改樣式提示',
  HIGHT_RULES: '高亮規則',
  TIME_FORMAT: '時間格式',
  MONITOR_METRIC: '監控指標',
  DEBUGB_DATA: '除錯數據',
  LINE_CHART: '折線圖',
  BAR_CHART: '柱狀圖',
  SINGLE_STATE_CHART: '即時文本',
  APPLICABLE_SCENE: '適用場景',
  BASE_LINE_CHART: '基礎折線圖',
  STACK_LINE_CHART: '堆疊面積圖',
  BASE_BAR_CHART: '基礎柱狀圖',
  STACK_BAR_CHART: '堆疊柱狀圖',

  LINE_CHART_DESC: '折線圖主要用來展示數據隨著時間推移的趨勢或變化。',
  BASE_LINE_CHART_DESC:
    '折線圖主要用來展示數據相隨著時間推移的趨勢或變化。折線圖非常適合用於展示一個連續的二維數據，如某網站訪問人數或商品銷量價格的波動。',
  STACK_LINE_CHART_DESC:
    '堆積面積圖是一種特殊的面積圖，可以用來比較在一個區間内的多個變量。如果有多個數據系列，並想分析每個類别的部分到整體的關係，並展現部分量對於總量的貢獻時，使用堆積面積圖是非常合適的選擇。',
  BAR_CHART_DESC:
    '柱狀圖是最常見的圖表類型，通過使用水平或垂直方向柱子的高度來顯示不同類别的數值。',
  BASE_BAR_CHART_DESC:
    '基礎柱狀圖的一個軸顯示正在比較的類别，而另一個軸代表對應的刻度值。',
  STACK_BAR_CHART_DESC:
    '堆疊柱狀圖是柱狀圖的擴展，不同的是，柱狀圖的數據值為並行排列，堆疊柱圖則是一個個疊加起來的。它可以展示每一個分類的總量，以及該分類包含的每個小分類的大小及占比，因此非常適合處理部分與整體的關係。',
  SELECT_CHART_TYPE: '選擇圖表類型',
  SELECT_CHART_TYPE_MODAL_DESC: '選擇您要添加的自定義圖表類型',
  DISPLAY_POSITION: '圖表布局位置',
  DISPLAY_FORMAT: '顯示格式',
  FIELD_NAME: '字段名稱',
  COLUMN_NAME: '列名稱',
  METRIC_NAME: '圖例名稱',
  GRAPH_NAME: '圖表名稱',
  TABLE: '表格',
  VALUE_FOMATER: '數據取值',
  Y_AXIS: 'Y軸',
  'Custom Monitoring': '自定義監控',
  CustomMonitorDashboards: '自定義監控面板',
  CustomMonitorDashboard: '自定義監控面板',
  CUSTOM_MONITORING: '自定義監控',
  CUSTOM_MONITORING_DASHBOARD_DESC:
    'Custom monitoring provides application monitoring templates. You can customize monitoring dashboards based on your needs.',
  CUSTOMMONITORDASHBOARD_CREATE_DESC:
    'You can customize application monitoring dashboards based on your needs.',

  'Default Color': '預設配色',
  'Cool Color': '冷色調',
  'Warm Color': '暖色調',

  EMPTY_CHART_PLACEHOLDER: '圖表將顯示在此區域',

  // Cluster Status
  DISK_USAGE: 'Disk Usage',
  DISK_USAGE_SCAP: 'Disk usage',
  POD_COUNT: 'Pods',
  POD_COUNT_VALUE: 'Pods: {value}',
  API_SERVER: 'API Server',
  AVERAGE_CPU_LOAD: 'Average CPU Load',
  POD_USAGE: 'Pod Usage',
  DISK_THROUGHPUT: 'Disk Throughput',
  NETWORK_BANDWIDTH: 'Network Bandwidth',
  POD_STATUS: 'Pod Status',
  NO_MONITORING_DATA: 'No Monitoring Data',
  NOT_ENABLED: 'Not enabled',
  COMPLETED: 'Completed',
  WARNING: 'Warning',
  REST_CREATE: 'CREATE',
  REST_DELETE: 'DELETE',
  REST_DELETECOLLECTION: 'DELETECOLLECTION',
  REST_GET: 'GET',
  REST_POST: 'POST',
  REST_PATCH: 'PATCH',
  REST_PUT: 'PUT',
  REST_UPDATE: 'UPDATE',
  REST_LIST: 'LIST',
  COUNT: 'Count',
  NODE_IP_ADDRESS_VALUE: 'Node IP Address: {value}',
  NODE_IP_ADDRESS: 'Node IP Address',

  // Application Resources
  WORKSPACES: 'Workspaces',
  ACCOUNTS: 'Accounts',
  PROJECT_PL: 'Projects',
  PROJECT_LOW: 'project',
  DEVOPS_PROJECT_TCAP: 'DevOps project',
  DEVOPS_PROJECT_PL: 'DevOps Projects',
  DEVOPS_PROJECT_TCAP_PL: 'DevOps projects',
  DEVOPS_PROJECT_LOW: 'DevOps project',
  DEVOPS_PROJECT_LOW_PL: 'DevOps projects',
  PROJECTS: 'Projects',
  DEVOPS_PROJECTS: 'DevOps Projects',
  SERVICES: 'Services',
  ROUTES: 'Routes',
  LAST_TIME: 'Last {value}',
  TIME_RANGE_LAST: 'Time range: last {value}',
  TIME_RANGE_RANGE: 'Time range: {startTime} - {endTime}',

  // Custom Monitoring
  CUSTOM_MONITOR_DASHBOARD: 'Custom Monitoring Dashboard',
  CUSTOM_MONITOR_DASHBOARD_CREATE_DESC:
    'You can customize application monitoring dashboards based on your needs.',
  UPLOAD_FROM_LOCAL_STORAGE: 'Upload from Local Storage',
  UPLOAD_FROM_URL: 'Upload from URL',
  'Consumption Bill': '消費帳單',
  Memory: 'Memory',
  EXPORT_BILL: '導出 csv 格式的資源消費記錄',
  CONSUMPTION_HISTORY: '截止到昨天的消費歷史',
  BILLING_CYCLE: '對帳週期',
  CONSUMER_TRENDS: '消費者趨勢',
  CURRENT_RESOURCE_CONSUMPTION: '當前包含的資源',
  Trend: '趨勢圖',
  AVERAGE_USAGE: '平均用量',
  TOTAL_CONSUMPTION: '共消費',
  'Total Consumption By Creation': '自創建以來共消費',
  Consumption: '消費',
  'Net Received': '網絡流入',
  'Net Transmitted': '網絡流出',
  VIEW: '查看',
  RESOURCE_CONSUMPTION_DESC: '選擇您要查看的類別',
  CLUSTER_CONSUMPTION: '集群資源消費情況',

  CLUSTER_CONSUMPTION_DESC:
    '集群資源消費情況以集群為維度統計集群，節點的CPU、內存、存儲等資源消費情況',
  CLUSTER_RESOURCE_CONSUMPTION_DESC:
    '<strong>集群</strong> 的CPU、內存、存儲等資源消費情況',
  CLUSTER_NODE_CONSUMPTION_DESC:
    '集群中 <strong>節點</strong> 的CPU、內存、存儲等資源消費情況',
  CLUSTER_POD_CONSUMPTION_DESC:
    '節點中 <strong>容器組</strong> 的CPU、內存等資源消費情況',
  WORKSPACE_CONSUMPTION: '企業空間(項目)資源消費情況',
  WORKSPACE_CONSUMPTION_DESC:
    '企業空間(項目)資源消費情況以企業空間為維度統計企業空間和項目的CPU、內存、存儲等資源消費情況',
  WORKSPACE_RESOURCE_CONSUMPTION_DESC:
    '<strong>企業空間</strong> 的CPU、內存、存儲等資源消費情況',
  WORKSPACE_PROJECT_CONSUMPTION_DESC:
    '企業空間中的 <strong>項目</strong> 的CPU、內存、存儲等資源消費情況',
  PROJECT_CONSUMPTION_DESC:
    '項目中的 <strong>應用、服務、容器組</strong> 等資源的CPU、內存、存儲等資源消費情況',
  APP_CONSUMPTION_DESC: '應用商店模板資源消費統計',
  APP_RESOURCE_CONSUMPTION_DESC:
    '應用商店模板資源消費統計支持對模板在 KubeSphere 平台中被部署的次數查詢，支持以下查詢',
  APP_WORKSPACE_CONSUMPTION_DESC:
    '應用模板在 <strong>企業空間</strong> 中的部署次數',
  APP_WORKSPACE_PROJECT_CONSUMPTION_DESC:
    '應用模板在企業空間下的某個 <strong>項目</strong> 中的部署次數',
  MAXIMUM_USAGE: '最大用量',
  MINIMUM_USAGE: '最小用量',
  'Meter CPU Usage': 'CPU 用量',
  'Meter Memory Usage': '內存 用量',
  'Meter Volume Usage': '存儲卷 用量',
  'Meter Net Received Usage': '網絡流入 用量',
  'Meter Net Transmitted Usage': '網絡流出 用量',
  TOTAL_CONSUMPTION_Q: '共消費表示什麼？',
  TOTAL_CONSUMPTION_A: '共消費表示在當前對帳週期中每個計費採樣點的資源用量之和',
  TIMERANGE_MORE_30DAY_MSG:
    '結束時間與開始時間的間隔大於 30 天時，時間間隔最小為 1 天',
  TOTAL_COST: '總金額({unit})',
  '￥': '￥',
  $: '$',
  Price: '價格',
  PRICE_CONFIG_DESC: '暫未配置價格信息',
  METER_RESOURCE_DESC: '最近 1 小時的消費統計',
  METERING_NOT_ENABLED_DESC: '暫無啟用計量模塊的集群',
  INVALID_METERING: '未開啟消費統計',
  NO_METER_DATA: '新創建的資源，需要等待一小時後才能查看數據',

  // Resource Consumption Statistics
  METER_CPU_USAGE: 'CPU Usage',
  METER_MEMORY_USAGE: 'Memory Usage',
  METER_VOLUME_USAGE: 'Volume Usage',
  METER_NET_RECEIVED_USAGE: 'Inbound Traffic Usage',
  METER_NET_TRANSMITTED_USAGE: 'Outbound Traffic Usage',
  NET_RECEIVED: 'Inbound Traffic',
  NET_TRANSMITTED: 'Outbound Traffic',
  COMPOSING_APP: 'Composed app',
  CLUSTER_NODE_SCAP: 'Cluster node',
  POD_SCAP: 'Pod',
  APP_TEMPLATE_SCAP: 'Template-based app',
  COMPOSING_APP_SCAP: 'Composed app',
  DEPLOYMENT_SCAP: 'Deployment',
  STATEFULSET_SCAP: 'StatefulSet',
  DAEMONSET_SCAP: 'DaemonSet',
  WORKSPACE_SCAP: 'Workspace',
  CLUSTER_SCAP: 'Cluster',
  PROJECT_SCAP: 'Project',
  SERVICE_SCAP: 'Service',
  HOST_CLUSTER_SCAP: 'Host cluster',
  MEMBER_CLUSTER_SCAP: 'Member cluster',
  'Log In': '登入',
  'Please Log In': '歡迎登入',
  'Username or Email': '用戶名或者信箱',
  Captcha: '驗證碼',
  'User does not exist': '用戶名不存在',
  INCORRECT_USERNAME_OR_PASSWORD: '用戶名或密碼錯誤',
  'Unable to access the backend services': '無法訪問後端服務',
  'Unable to access the api server': '無法訪問 API 服務器',

  'Internal Server Error': '服務器內部錯誤',
  'Please input the correct captcha': '驗證碼錯誤',

  Reload: '刷新',
  'Reload Captcha': '刷新驗證碼',

  INTERNAL_SERVER_ERROR_TIP: '對不起，服務器有小差錯了',
  'Too many failed login attempts, please wait!':
    '登入失敗次數過多，請稍後重試',
  LOG_IN_WITH_TITLE: '通過 {title} 登入',

  INPUT_USERNAME_OR_EMAIL_TIP: '請輸入用戶名或信箱',
  PASSWORD_EMPTY_DESC: '請輸入密碼',
  'Please input captch': '請輸入驗證碼',
  'Please confirm your account info': '請確認您的帳戶資訊',
  'Please input username': '請輸入用戶名',

  'Please reset your password': '請重置您的密碼',

  'Modify Later': '稍後修改',

  'Your password must meet the following requirements':
    '您的密碼必须符合如下要求',

  CHANGE_PASSWORD_TIP: '由于您是第一次登入，處於安全考慮請重置您的密碼',

  // Login
  LOG_IN: 'Log In',
  TIME_S: '{num}s',
  'Log Management': '紀錄管理',
  QUERYING_RULES: '查詢規則',
  TOTAL_LOGS:
    '總共收錄了 <span class={className}>{containers}</span> 個容器<br/> <span class={className}> {logs} </span> 條紀錄資訊',
  LOG_DATE: 'YYYY年MM月DD日HH時',
  EVENT_DATE: 'YYYY年MM月DD日0時',
  TOPIC: '主題',
  Keyword: '關鍵字',
  CONTAINER_LOG_SOURCE: 'Container Log Source',
  REFRESH_RATE_COLON: '刷新頻率：',
  KEYWORD: '關鍵字',
  'Region Data': '元數據',
  'Refresh Rate': '刷新頻率',
  'Back to previous': '返回上一級',
  'Log Start Time': '紀錄起始時間',
  'Current Statistics Start Time': '本次統計起始時間',
  CONTAINER_LOG_TRENDS_12H: '最近 12 小時紀錄總數變化趨勢',
  'Search Logs by': '通過{field}查詢紀錄',
  CONTAINER_LOG_KEYWORD_TIP:
    '請輸入關鍵字查詢紀錄, 還可以通過 “Error” “Fail” “Fatal” “Exception ” “Warning” 等關鍵字查詢錯誤紀錄',
  CONTAINER_LOG_PROJECT_TIP: '可以根據項目名稱查看相關的紀錄資訊',
  CONTAINER_LOG_WORKLOAD_TIP: '可以根據工作負載名稱查看相關的紀錄資訊',
  CONTAINER_LOG_CONTAINER_TIP: '可以根據容器名稱查看相關的紀錄資訊',
  CONTAINER_LOG_POD_TIP: '可以根據容器組名稱查看相關的紀錄資訊',
  RESOURCE_EVENT_TRENDS_12H: '最近 12 小時事件總數變化趨勢',
  'Search Events by': '通過{field}查詢事件',
  RESOURCE_EVENT_WORKSPACE_TIP: '可以根據企業空間查看相關的事件資訊',
  RESOURCE_EVENT_PROJECT_TIP: '可以根據項目查看相關的事件資訊',
  RESOURCE_EVENT_RESOURCE_TYPE_TIP: '可以根據資源類型查看相關的事件資訊',
  RESOURCE_EVENT_RESOURCE_NAME_TIP: '可以根據資源名稱查看相關的事件資訊',
  RESOURCE_EVENT_REASON_TIP: '可以根據原因查看相關的事件資訊',
  RESOURCE_EVENT_MESSAGE_TIP: '可以根據消息查看相關的事件資訊',
  RESOURCE_EVENT_CATEGORY_TIP: '可以根據類别查看相關的事件資訊',
  'Pod Event Query Tip': '可以根據容器組查看相關的事件資訊',
  'Event statistics': '事件統計',
  TIME_TOPOLOGY: '時間拓撲圖',
  'Display Content': '顯示内容',
  SEARCH_RESULTS: '搜尋結果',
  'Please enter a filter to search for logs.': '請輸入條件過濾紀錄',
  'Log Query': '紀錄查詢',
  CONTAINER_LOG_COUNT: '紀錄統計',
  AUDIT_LOG_COUNT: '操作審計統計',
  EXACT_QUERY: '精準匹配',
  FUZZY_QUERY: '模糊匹配',
  'Log Collections': '紀錄收集',

  RESOURCE_NAME_AND_TYPE: '資源名稱與類型',

  'Search Auditing Logs by': '通過{field}查詢審計',
  AUDIT_LOG_WORKSPACE_TIP: '可以根據企業空間查看相關的操作審計',
  AUDIT_LOG_PROJECT_TIP: '可以根據項目查看相關的操作審計',
  AUDIT_LOG_RESOURCE_NAME_TIP: '可以根據資源名稱查看相關的操作審計',
  AUDIT_LOG_RESOURCE_TYPE_TIP: '可以根據資源類型查看相關的操作審計',
  AUDIT_LOG_VERB_TIP: '可以根據操作行為查看相關的操作審計',
  AUDIT_LOG_STATUS_CODE_TIP: '可以根據狀態碼查看相關的操作審計',
  AUDIT_LOG_OPERATOR_TIP: '可以根據操作帳號查看相關的操作審計',
  AUDIT_LOG_SOURCE_IP_ADDRESS_TIP: '可以根據來源IP查看相關的操作審計',
  'Auditing log trends in the last 12 hours':
    '最近 12 小時操作審計總數變化趨勢',

  TOTAL_AUDITING_TODAY:
    '今日總共收錄了 <span class={className}> {auditing} </span> 條操作審計',
  NO_AUDIT_LOG_TODAY: '今日沒有收錄的操作審計',

  LOG_COLLECTION_DESC:
    '系統將收集每個容器的標準輸出和標準錯誤輸出紀錄，並將其發送到一個或多個目標服務',
  ADD_LOG_RECEIVER: '添加紀錄接收者',
  EMPTY_LOG_COLLECTIONS:
    'No log receiver is found. You can add log receivers and send logs to external log receivers.',
  LOG_COLLECTION_TIPS: 'You can add one log receiver for each type.',

  Address: '地址',
  SERVICE_ADDRESS: '服務地址',
  ADD_SERVICE_ADDRESS: '添加',
  ENTER_SERVICE_ADDRESS: '請輸入服務地址。',

  URL_SYNTAX_ERROR: 'URL 語法錯誤',
  ADDRESS_EMPTY_DESC: 'Please enter an address.',
  LOG_COLLECTION_ES_URL_TIPS:
    'The built-in Elasticsearch service is used by default. You can also enter the IP address of Elasticsearch independently deployed inside or outside the cluster.',
  LOG_COLLECTION_ES_INDEX_TIPS:
    'Use the index prefix to speed up queries. The index prefix is automatically generated in <Index prefix>-<Year-month-date> format.',
  LOG_COLLECTION_FLUENTD_URL_TIPS:
    'Enter the address of the Fluentd service that receives logs.',

  'Refresh Interval': '刷新頻率',
  REFRESH_INTERVAL_VALUE: 'Refresh interval: {value}s',
  'Recently Updated': '最近刷新',
  'Recently Configured Updated': '最近配置更新',
  Collecting: '收集中',
  CHANGE_STATUS: '更改狀態',
  'Release Collection': '釋放收集',
  'Delete Log Receiver': '刪除紀錄接收者',
  'Log Receiver': '紀錄接收者',
  Activate: '啟用',
  'Real-Time Data': '實時數據',
  INDEX_PREFIX: '索引前缀',

  TOOLBOX_SHIFT_TIPS: ' 👻 Shift + 鼠標左鍵 可以在新視窗中打開',
  HIDE_HELP_INFORMATION: '不再顯示幫助資訊',
  ES_DESC: 'Elasticsearch 是分布式、RESTful 風格的搜索和分析引擎',
  KAFKA_DESC: 'Kafka 是流行的開源流處理平台',
  FLUENTD_DESC: 'Fluentd 是提供統一紀錄處理層的開源數據收集器',
  LOG_COLLECTION_ENABLE_TIPS: '新的狀態需 1 分鐘左右生效',
  'Passwords must be at least 6 characters long': '密碼至少 6 個字元',
  CONTAINER_LOGS_NOT_SUPPORTED: '容器在目前狀態下不支持實時紀錄，請稍後再試',
  TOTAL_LOGS_TODAY:
    '今日總共收錄了 <span class={className}>{containers}</span> 個容器<br/> <span class={className}> {logs} </span> 條紀錄資訊',
  START_REAL_TIME_LOG: '開始實時紀錄',
  STOP_REAL_TIME_LOG: '關閉實時紀錄',
  EXPORT_LOGS: '紀錄導出',
  CUSTOM_MONITORING_DASHBOARD: '自定義監控面板',
  CUSTOM_MONITORING_DASHBOARD_PL: 'Custom Monitoring Dashboards',
  CUSTOMMONITORDASHBOARD_PL: 'Custom Monitoring Dashboards',
  CUSTOMMONITORDASHBOARD_LOW: 'custom monitoring dashboard',
  CUSTOM_MONITORING_DASHBOARD_EMPTY_DESC:
    'Please create a custom monitoring dashboard.',
  CREATE_CUSTOM_MONITORING_DASHBOARD: '創建自定義監控面板',
  MONITORING_TEMPLATE: '監控模板',
  CUSTOM_MONITORING_TEMPLATE_DESC:
    'Select a default template, upload a template, or customize a template to generate a custom monitoring dashboard.',
  SERVICE_BUILT_INTERFACE: '服務已内置監控數據抓取介面',
  TOTAL_EVENTS_TODAY:
    '今日總共收錄了 <span class={className}> {events} </span> 條事件',
  NO_RESOURCE_EVENTS_TODAY: '今日沒有收錄的事件',
  UPLOAD_GRAFANA_DASHBOARD: 'Upload Grafana Dashboard',
  IMPORT_GRAFANA_JSON_FILE: '導入 Grafana JSON 文件',
  UPLOAD_GRAFANA_URL: 'Upload a Grafana dashboard from URL.',
  SUPPORT_JSON_FILE: 'Only files in JSON format are supported.',
  FILE_UPLOAD_ERROR: 'Only one file can be uploaded.',
  UPLOAD_FILE_TIP: 'Please upload a file.',
  ENTER_GRAFANA_URL: 'Please enter a Grafana dashboard URL.',
  UPLOAD_FROM_LOCAL_TITLE: 'Select or Drag a File',
  EVENT_NOT_ENABLED_DESC: '暫無啟用事件查詢的集群',
  AUDITING_NOT_ENABLED_DESC: '暫無啟用審計模組的集群',
  LOGGING_NOT_ENABLED_DESC: '暫無啟用紀錄模組的集群',
  'No cluster with event query enabled': '暫無啟用事件查詢的集群',
  'No cluster with auditing module enabled': '暫無啟用審計模組的集群',
  'No cluster with logging module enabled': '暫無啟用紀錄模組的集群',
  LOGGING_DISABLED: 'Logging Disabled',

  LOGGING_LOG_COLLECTOR: '紀錄接收者',
  EVENTS_LOG_COLLECTOR: '事件紀錄接收者',
  AUDITING_LOG_COLLECTOR: '審計紀錄接收者',

  // Log Collection
  LOG_COLLECTION: 'Log Collection',
  LOG_RECEIVER_PL: 'Log Receivers',
  LOG_ADDRESS: 'Address: ',
  LOG_COLLECTING: 'Collecting',
  LOG_DISABLED: 'Disabled',
  INVALID_SERVICE_ADDRESS: 'Please enter a correct service address.',
  EXAMPLE: 'Example: ',
  PORT_NUMBER_EMPTY: 'Please enter a port number.',
  PARAMETER_REQUIRED: 'This parameter is mandatory.',
  EVENT_PL: 'Events',
  CREATION_TIME: 'Creation time',

  // Log Collection > Details
  ADDRESS: 'Address',
  CHANGE_STATUS_SCAP: 'Change status',
  EVENTS: 'Events',
  SELECT_STATUS_TIP: 'Select a status',

  // Container Log Search
  LOG_EXPORT_SCAP: 'Log export',
  SEARCH_BY_KEYWORD: 'Search by Keyword',
  SEARCH_BY_PROJECT: 'Search by Project',
  SEARCH_BY_WORKLOAD: 'Search by Workload',
  SEARCH_BY_POD: 'Search by Pod',
  SEARCH_BY_CONTAINER: 'Search by Container',
  START_TIME_COLON: 'Start Time: ',
  LOG: 'Log',
  DISPLAY: 'Display',
  HIDE: 'Hide',
  STOP_REAL_TIME_CONTAINER_LOG: 'Pause real-time container logs',
  START_REAL_TIME_CONTAINER_LOG: 'View real-time container logs',
  REASON_COLON: 'Reason: ',
  MESSAGE_COLON: 'Message: ',

  // Resource Event Search
  STOP_REAL_TIME_RESOURCE_EVENT: 'Pause real-time resource events',
  START_REAL_TIME_RESOURCE_EVENT: 'View real-time resource events',
  RESOURCE_EVENT_COUNT: 'Resource Events',
  SEARCH_BY_MESSAGE: 'Search by Message',
  SEARCH_BY_WORKSPACE: 'Search by Workspace',
  SEARCH_BY_RESOURCE_TYPE: 'Search by Resource Type',
  SEARCH_BY_RESOURCE_NAME: 'Search by Resource Name',
  SEARCH_BY_REASON: 'Search by Reason',
  SEARCH_BY_CATEGORY: 'Search by Category',

  // Audit Log Search
  VERB: 'Verb',
  STATUS_CODE: 'Status Code',
  SUBRESOURCE: 'Subresource',
  SEARCH_BY_VERB: 'Search by Verb',
  SEARCH_BY_STATUS_CODE: 'Search by Status Code',
  SEARCH_BY_OPERATOR: 'Search by Operator',
  SEARCH_BY_SOURCE_IP_ADDRESS: 'Search by Source IP Address',
  KUBE_ASCENDING_ORDER: '正序排列…',
  KUBE_DESCENDING_ORDER: '倒序排列…',
  KUBE_OPERATE: '操作',
  KUBE_FILTER: '過濾選項',
  KUBE_PLEASE_SELECT: '請選擇',
  KUBE_NO_AVAILABLE_DATA: '暫無數據',
  KUBE_SUN: '日',
  KUBE_MON: '一',
  KUBE_TUE: '二',
  KUBE_WED: '三',
  KUBE_THU: '四',
  KUBE_FRI: '五',
  KUBE_SAT: '六',
  KUBE_SUNDAY: '星期日',
  KUBE_MONDAY: '星期一',
  KUBE_TUESDAY: '星期二',
  KUBE_WEDNESDAY: '星期三',
  KUBE_THURSDAY: '星期四',
  KUBE_FRIDAY: '星期五',
  KUBE_SATURDAY: '星期六',
  KUBE_JAN: '1月',
  KUBE_FEB: '2月',
  KUBE_MAR: '3月',
  KUBE_APR: '4月',
  KUBE_MAY: '5月',
  KUBE_JUN: '6月',
  KUBE_JUL: '7月',
  KUBE_AUG: '8月',
  KUBE_SEP: '9月',
  KUBE_OCT: '10月',
  KUBE_NOV: '11月',
  KUBE_DEC: '12月',
  KUBE_JAN_LH: '一月',
  KUBE_FEB_LH: '二月',
  KUBE_MAR_LH: '三月',
  KUBE_APR_LH: '四月',
  KUBE_MAY_LH: '五月',
  KUBE_JUN_LH: '六月',
  KUBE_JUL_LH: '七月',
  KUBE_AUG_LH: '八月',
  KUBE_SEP_LH: '九月',
  KUBE_OCT_LH: '十月',
  KUBE_NOV_LH: '十一月',
  KUBE_DEC_LH: '十二月',
  KUBE_AM: '上午',
  KUBE_PM: '下午',
  KUBE_WEEK_ABBREVIATION: '週',
  KUBE_RANGE_SEPARATOR: ' 至 ',
  KUBE_SCROLL_TO_INCREMENT: '點擊切換 12/24 小時時制',
  KUBE_CLICK_TO_TOGGLE: '滾動切換',
  KUBE_YEAR: '年',
  ALL: 'All',
  'Pod IP Pool': '容器組 IP 地址範圍',
  'Pod IP Pools': '容器組 IP 地址範圍',

  'Create Pod IP Pool': '創建容器組 IP 地址範圍',

  IP_MASK_BIT_TCAP: 'IP / 遮罩位元',
  USED_IP_TCAP: '已用 IP',
  NETWORK_SEGMENT: 'IP / 遮罩位元',
  'Used IP': '已用 IP',

  Mask: '遮罩',
  MASK_BIT_TCAP: '遮罩位元',
  NETWORK: '網路',
  NETWORK_RESOURCE_PL: 'Network Resources',

  STARTING_IP_ADDRESS: '起始 IP 地址',
  ENDING_IP_ADDRESS: '結束 IP 地址',
  AVAILABLE_ADDRESSES: '可用數量',

  POD_IP_POOL: '容器組 IP 地址範圍',
  POD_IP_POOL_PL: '容器組 IP 池',
  POD_IP_POOL_LOW: '容器組 IP 池',
  POD_IP_POOL_EMPTY_DESC: '請創建一個容器組 IP 池。',

  NUMBER_OF_CREATION_TCAP: '創建數量',
  'Pod IP Pools to be created': '即將創建的容器組 IP 地址範圍',
  'Set to be globally available': '設為全局可用',

  'Please input the IP address': '請輸入 IP 地址。',
  MASK_BIT_TIP: '請輸入遮罩位元。',
  'Please input the IP/mask bit': '請輸入 IP 地址 / 遮罩位元',

  IP_POOL_NUM_TIP: '請輸入需要創建的容器組 IP 地址範圍數量。',

  POD_IP_POOL_DESC:
    '容器組 IP 池用於規劃集群內 Pod 的網絡地址空間，您可以按需創建容器組 IP 池。',
  IP_POOL_CREATE_COUNT_DESC:
    '可以同時創建多個容器組 IP 地址範圍，數量範圍為 1～10',
  IPPOOL_USAGE_Q: '如何利用 IP 地址範圍規劃容器組網路？',
  IPPOOL_USAGE_A:
    'IP 地址範圍用於規劃 Pod 網路地址空間，每個 IP 地址範圍之間地址空間不能。創建工作負載時，可選擇特定的 IP 地址範圍，這樣創建出的容器組將從該 IP 地址範圍中分配 IP。',

  IPPOOL_ASSIGN_WORKSPACE_DESC:
    'IP 地址範圍分配给企業空間之後才能被企業空間使用。',
  IPPOOL_ASSIGN_WORKSPACE_ALLOCATED_WARNING:
    'IP 地址範圍已被使用，無法分配给某一個具體的企業空間',
  IPPOOL_ASSIGN_WORKSPACE_CHANGE_WARNING:
    'IP 地址範圍已被使用，且已指定具體的企業空間，無法更改目標企業空間',

  IPPOOL_WORKSPACE_EMPTY_TIP: '暫無企業空間使用此 IP 地址範圍',
  IP_POOL_CREATE_DESC: 'Pod IP Pools to be created',
  Route: '應用路由',
  ROUTE: '應用路由',
  ROUTE_PL: 'Routes',
  ROUTE_LOW: 'Route',
  'Create Route': '創建應用路由',
  PATH_EMPTY_DESC: '請添加至少一個路徑。',
  RULES: '規則',
  EDIT_RULES: '編輯規則',
  EDIT_ANNOTATION: '編輯注解',
  Rules: '規則',
  EDIT_RULES_TCAP: '編輯規則',
  EDIT_ANNOTATIONS: '編輯注解',
  ROUTING_RULES: '路由規則',
  GATEWAY_ADDRESS_TCAP: '網關地址',
  GATEWAY_ADDRESS_SCAP: 'Gateway address',
  DOMAIN_NAME_EMPTY_DESC: '請輸入域名。',
  VISIT: '點擊訪問',
  PATH_SERVICE_TIP: '服務',
  ADD_PATH_TCAP: '添加路径',
  EDIT_ROUTING_RULES: 'Edit Routing Rules',
  'Please select a service': '請選擇一個服務',
  'Add Path': '添加 Path',
  ADD_ANNOTATION: '添加注解',

  SET_ROUTING_RULES: '設置路由規則',

  AUTO_GENERATE_TCAP: '自動生成',
  SPECIFY_DOMAIN_TCAP: '指定域名',

  UNABLE_TO_ACCESS: '無法訪問服務',

  INVALID_DOMAIN_DESC: '域名格式錯誤',

  GATEWAY_IP_ADDRESS: '網關 IP',
  GATEWAY_ACCESS_MODE: '網關類型',

  MODE_TCAP: '模式',
  PATH_PL: '路徑',
  PATH_SI: '路徑',
  PATH_VALUE: '路徑：{value}',
  DOMAIN_NAME_TCAP: '域名',
  DOMAIN_NAME_VALUE: 'Domain Name: {value}',

  INVALID_PATH_DESC: '請填寫正確路徑。',
  PATH_EXIST: 'PATH 重複，請重新輸入。',
  ROUTE_DESC:
    '應用路由提供一種聚合服務的方式，您可以將集群的内部服務通過一個外部可訪問的 IP 地址暴露給集群外部。',
  ROUTE_EMPTY_DESC:
    '應用路由提供一種聚合服務的方式，您可以將集群的内部服務通過一個外部可訪問的 IP 地址暴露給集群外部。',
  ROUTE_ANNOTATION_DESC:
    '可以通過給應用路由添加注解來設置應用路由的行為。詳細的可供配置的注解列表，參見 <a href="https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/" target="_blank">Annotations</a>。',

  INGRESS_CONTROLLER_NODEPORT_DESC:
    '開啟網關後，系統會自動分配 http 及 https 相應的端口號；應用路由可以通過反向代理的方式對服務進行訪問。',
  INGRESS_CONTROLLER_LOADBALANCER_DESC:
    '如需使用 QingCloud LoadBalancer 作為服務網關，需要部署 QingCloud Cloud Controller Manager 外掛程式。',

  GATEWAY_TRACING_TIP:
    '如果您不需要使用應用治理的功能，無需打開此項；如果您需要使用應用治理的 Tracing 功能，請打開開此項。打開此項後，如果您的應用路由無法訪問，請檢查應用路由中是否添加 `nginx.ingress.kubernetes.io/service-upstream: true` 注解，如無，請手動添加。',

  ADD_ROUTING_RULE_DESC: '添加一個路由規則將域名映射至服務。',
  ROUTING_RULE_EMPTY_DESC: 'Please add at least one routing rule.',
  UNABLE_TO_ACCESS_TIP:
    '● 請確保您設置的域名可以解析到訪問入口的 IP 地址;<br/>● 如果在私有雲環境中，請修改本地的 host 檔案，並通過&lt域名&gt:&ltNodePort&gt的方式來訪問;<br/>● 通過配置 DNS 訪問，將域名修改為&ltHostname&gt.&lt網關地址&gt.nip.io，然後可以通過&ltHostname&gt.&lt網關地址&gt.nip.io:&ltNodePort&gt的形式來訪問服務;<br/>● 如果通過域名訪問被拒絕，請確認您的域名是真實域名而且已經申請通過。',

  NO_GATEWAY_DESC:
    '若要使用自動生成模式，請聯系項目管理員在此項目的高級設置中設置網關訪問方式。',
  UNABLE_CREATE_ROUTE_TIP:
    '目前項目中沒有找到可用的網關地址，無法創建應用路由。',

  RULE_SETTING_MODE_AUTO:
    '配置路徑以自動生成域名，域名格式為 &lt服務名稱&gt + &lt項目名稱&gt + &lt網關地址&gt + nip.io，然後可以通過 &lt服務名稱&gt.&lt項目名稱&gt.&lt網關地址&gt.nip.io:&ltNodePort&gt 的形式來訪問服務。<br/>請確保所在網路環境可以正常訪問網關地址。',
  RULE_SETTING_MODE_SPECIFY:
    '指定自定義域名，通過本地 hosts 文件或 DNS 服務器將域名解析為網關 IP 地址。',

  PREREQUESTS_FOR_USE_ROUTE_Q: '使用應用路由的前提條件?',
  PREREQUESTS_FOR_USE_ROUTE_A:
    '使用應用路由需要由項目管理員對當前項目設置網關。',

  ACCESS_TYPES_OF_ROUTE_Q: '應用路由支持的訪問方式?',
  ACCESS_TYPES_OF_ROUTE_A:
    'KubeSphere 應用路由支持 NodePort 訪問方式以及 LoadBalancer 訪問方式。',

  // Route Detail Page
  ROUTE_PATH_VALUE: '路徑：<strong>{value}</strong>',
  ROUTE_SERVICE_VALUE: '服務：<strong>{value}</strong>',
  ROUTE_PORT_VALUE: '端口：<strong>{value}</strong>',
  ACCESS_SERVICE: '訪問服務',
  ADD_MEMBER_TIP_SI:
    'Are you sure you want to assign the user to <strong>{group}</strong>?',
  ADD_MEMBER_TIP_PL:
    'Are you sure you want to assign the users to the department <strong>{group}</strong>?',
  principal: '負責人',
  CREATE_DEPARTMENT: 'Create Department',
  NO_DEPARTMENT_TIP:
    'No department available. Please create a department on the right.',
  'workspace role': '企業空間角色',
  PROJECT_ROLE: '項目角色',
  ADD_PROJECT: '添加項目',
  'project roles': '項目角色',
  DEVOPS_PROJECT_ROLE: 'DevOps 项目角色',
  DEVOPS_PROJECT_ROLE_SCAP: 'DevOps 项目角色',
  ADD_DEVOPS_PROJECT: '添加 DevOps 项目',
  SELECT_ROLE_TIP: 'Please select a role.',
  DEPARTMENT: 'Department',
  GROUP_WORKSPACE_ROLE_DESC: '企業空間角色將授予部門中的所有用戶。',

  DELETE_PARENT_GROUP_TIP:
    '確定刪除子部門 <strong>{group_name}</strong>? 刪除該部門的同時，其子部門也會被刪除，且所有成員的授權也將被取消。',
  DELETE_GROUP_TIP:
    '確定刪除子部門 <strong>{group_name}</strong>? 刪除該部門的同時，所有成員的授權也將被取消。',
  JOB_STATUS: '任務狀態',
  RELEASE_JOBS: 'Release Jobs',
  RELEASE_MODE_PL: '灰度策略',
  RELEASE_MODE: 'Release mode',
  GRAY_RELEASE_STRATEGY_SI: 'Grayscale Release Strategy',
  TOTAL_GRAY_RELEASE_JOB: '共計 {num} 個灰度任務',
  TOTAL_GRAY_RELEASE_JOBS: '共計 {num} 個灰度任務',
  NO_GRAYSCALE_RELEASE_JOB_FOUND: '沒有找到灰度發佈任務',
  NO_GRAYSCALE_RELEASE_TASK_FOUND_DESC: '請創建一個灰度發布任務。',

  BLUE_GREEN_DEPLOYMENT: '藍綠部署',
  CREATE_BLUE_GREEN_DEPLOYMENT_JOB: 'Create Blue-Green Deployment Job',
  CREATE_CANARY_RELEASE_JOB: 'Create Canary Release Job',
  CREATE_TRAFFIC_MIRRORING_JOB: 'Create Traffic Mirroring Job',
  CANARY_RELEASE: '金絲雀發佈',
  BLUE_GREEN_DEPLOYMENT_LOW: 'blue-green deployment',
  CANARY_RELEASE_LOW: 'canary release',
  TRAFFIC_MIRRORING_LOW: 'traffic mirroring',
  'A/B Testing': 'A/B 測試',
  TRAFFIC_MIRRORING: '流量鏡像',

  traffic: '流量',

  GRAY_RELEASE_JOB_NAME: '灰度任務名稱',
  GRAYSCALE_RELEASE_COMPONENT_PL: '灰度組件',
  NEW_VERSION_SETTINGS: 'New Version Settings',
  NEW_VERSION_NUMBER: 'New Version Number',
  GRAYSCALE_RELEASE_COMPONENT: '灰度組件',
  GRAYSCALE_RELEASE_VERSION_TCAP: '灰度版本',
  GRAYSCALE_RELEASE_VERSION_NUMBER: '灰度版本號',
  VERSION_COMPARISON: '版本對比',
  STRATEGY_CONFIGURATIONS_TCAP: '策略配置',

  CREATE_JOB: '發佈任務',

  RULE_DESCRIPTION: '規則描述',
  TRAFFIC_DISTRIBUTION: '流量比例',

  'Version Off': '版本下線',
  'Take Over': '接管所有流量',

  'Edit Grayscale Release Job': '編輯灰度任務',

  SELECT_GRAY_COMPONENT_TIP: '請選擇一個灰度組件。',

  EXACT_MATCH: '完全匹配',
  REGEX_MATCH: '正則匹配',
  PREFIX_MATCH: '前綴匹配',

  TRAFFIC_CONTROL: '流量控制',

  COOKIE_EXACT_MATCH: 'Cookie (exact match)',
  COOKIE_REGEX_MATCH: 'Cookie (regex match)',
  HEADER_EXACT_MATCH: 'Header (exact match)',
  HEADER_REGEX_MATCH: 'Header (regex match)',
  URL_PREFIX_MATCH: 'URL (prefix match)',
  URL_EXACT_MATCH: 'URL (regex match)',
  'Operating System': '操作系統',
  HEADER: '自定義 Header',
  'Mirrored traffic is only receiving traffic, no service':
    '鏡像流量只負責接收流量，不提供服務',
  'The current version is not online, you can let this version take over all traffic and bring it online.':
    '目前版本未上線，您可以讓該版本接管所有流量，使該版本上線',
  MIRRORED_TRAFFIC: '鏡像流量',

  'version number is invalid': '版本號不可用。',

  'Not online': '未上線',

  DELETE_JOB: '任務下線',

  JOB_OFFLINE_SUCCESSFULLY: '任務下線成功。',

  REAL_TIME_TRAFFIC_DIST_TCAP: '實時流量分布',
  TRAFFIC_MIRRORING_TRAFFIC_DISTRI_DESC:
    'A copy of traffic is sent to the new version for testing.',
  BLUE_GREEN_TRAFFIC_DISTRI_DESC:
    'The new version or old version receives all traffic.',
  ALLOCATE_TRAFFIC_DESC: '將所有流量按比例分配給灰度組件。',

  SERVICE_VERSION_RECEIVE_ALL_TRAFFIC:
    'The version <b>{version}</b> has taken over all traffic.',

  TRAFFIC_MONITORING: '流量監控',
  TRAFFIC: 'Traffic',
  SUCCESSFUL_REQUEST_RATE: '請求成功率',

  TRAFFIC_IN_LAST_FIVE_MINUTES: '最近五分鐘流量',

  UNFINISHED_GRAY_JOB: '存在未完成的灰度任務',
  UNSUPPORTED_WORKLOAD_TYPE: '不支持該工作負載類型',
  NO_WORKLOAD_FOUND_TIP: '未找到工作負載',

  CREATE_GRAYSCALE_RELEASE_JOB: '創建灰度任務',

  REQUEST_PARAMETERS: '灰度版本訪問規則',

  CLIENT_OS: '流量來自於以下操作系統',
  OS: 'OS',

  NEW_VERSION_NUMBER_EMPTY_DESC: '請輸入灰度版本號。',

  RESTORE: '恢復',

  BLUE_GREEN_STRATEGY_DESC: '兩個版本。',
  SELECT_VERSION: '流量規則',
  TAKE_OFFLINE: '下線此版本',
  TAKE_OVER: 'Take Over',
  TAKE_ONLINE: '接管所有流量',
  SPECIFY_TRAFFIC_DISTRIBUTION: '按流量比例下發',
  SPECIFY_REQUEST_PARAMETERS: '按請求内容下發',

  'Deploy sample application': '部署範例應用',
  DEPLOY_SAMPLE_APP: '部署範例應用',
  POLICY_REQUEST_CONTENT_TIP:
    '如果端口協定非 HTTP、HTTP2 或 gRPC，則按請求内容下發不可用。',

  NO_SERVICE_MESH_TIP: '未開啟應用治理的應用無法使用灰度發佈',

  BLUE_GREEN_DEPLOYMENT_DESC:
    '藍綠部署在保留舊版本的同時部署新版本，確保不停機。兩個版本中總有一個版本處於在線狀態接收所有流量，另一個版本則保持待機，如果有問題，可以快速回滾至舊版本。',
  CANARY_RELEASE_DESC:
    '金絲雀發佈將一部分實際流量引入一個新版本進行測試，測試新版本的性能和表現，在保證系統整體穩定運行的前提下，盡早發現新版本在實際環境上的問題。',
  AB_TESTING_DESC:
    '當產品已經相對穩定，同時又有新的業務需求或者產品形態，在保證業務的穩定運行前提下，獲取產品更新或者優化是否達到合理的預期。',
  TRAFFIC_MIRRORING_DESC:
    '流量鏡像用來更為真實地測試新版本，提前發現問題，同時不對生產環境產生影響，從而，提高版本發佈的安全性可靠性。',
  GRAY_RELEASE_VERSION_DESC: '將新版本引入已有的應用服務網格中',
  NEW_VERSION_NUMBER_DESC: '只能包含小寫字母及數字，長度在 16 個字元内',
  NEW_VERSION_NUMBER_INVALID_DESC:
    'Invalid new version number. The new version number can contain only lowercase letters and numbers. The maximum length is 16 characters.',
  POLICY_CONFIG_DESC:
    '基於流量比例發佈：根據流量比例配置規則，將從原版本中切分指定比例的流量到灰度版本。',

  MIRROR_POLICY_DESC:
    '流量鏡像將生產環境的流量復製到灰度版本中，在新版本上線到真實環境之前使用實時用戶流量對它進行測試。</br>因此，流量鏡像可以降低直接在生產環境進行變更所帶來的風險。',

  DELETE_GRAYSCALE_RELEASE_JOB_DESC:
    '您需要選擇一個下線版本，系統會保留一個可用版本並且自動將流量全部切換至該可用版本，保證服務正常運行。',
  NEW_VERSION_TAKEOVER_DESC:
    'The new version <b>{newVersion}</b> is receiving all traffic. If you delete the current grayscale release job, the old version <b>{oldVersion}</b> will be also be deleted.',
  OLD_VERSION_TAKEOVER_DESC:
    'The old version <b>{oldVersion}</b> is receiving all traffic. If you delete the current grayscale release job, the new version <b>{newVersion}</b> will be also be deleted.',

  GRAYSCALE_RELEASE_DESC:
    'Grayscale release represents an important method of application iteration in the production environment. You can choose different release methods for the smooth transition as you upgrade your applications to a new version.',

  SPECIFY_REQUEST_PARAMETERS_DESC:
    '根據請求内容配置規則，只有請求内容中滿足特定條件的流量會切分到灰度版本上。該策略只對直接訪問入口服務有效。',

  ADJUST_TRAFFIC_DISTRIBUTION_DESC:
    'Are you sure you want to send {ratioNew}% of traffic to the new version <b>{newVersion}</b> and {ratioOld}% to the old version <b>{oldVersion}</b>?',
  CANARY_BY_TRAFFIC_DESC:
    '根據流量比例，對組件 <b>{component}</b> 的 {ratio}% 的請求流量會轉發到灰度版本 <b>{newVersion}</b>。',

  DEPLOY_APP_CONFIRM: '確認部署範例應用?',

  DEPLOY_APP_TIP: '您即將部署範例應用 {name}',

  DEPLOY_SAMPLE_NO_INTERNET_ACCESS_TIP:
    '目前項目中沒有找到已開啟應用治理的網關，因此您無法部署範例應用。請聯繫您的項目管理員在【高級設置】中設置外網訪問方式',

  PREREQUEST_FOR_USE_GRAYRELEASE_Q: '使用灰度發佈的前提條件?',
  PREREQUEST_FOR_USE_GRAYRELEASE_A:
    '使用灰度發佈功能前，您需要創建自定義應用並且開啟應用治理功能。',

  // Grayscale release detail page
  GRAY_COMPONENT_DESC:
    'The grayscale release components used to serve the traffic.',
  TRAFFIC_LOW: '流量',
  VERSION_TRAFFIC_PERCENT: '{version} traffic {percent}%',

  // Grayscale release components tab
  GRAY_APP_NAME: '應用：{name}',
  GRAY_WORKLOAD_TYPE: '負載類型：',

  // Grayscale release version tab
  NEW_VERSION_NUMBER_EXIST_DESC:
    'Deployment {name} exists. Please enter another version number.',
  INIT_CONTAINER: 'Init 容器',
  INIT_CONTAINER_VALUE: 'Init Container: {value}',
  CONTAINER_VALUE: 'Container: {value}',
  GRAYSCALE_IMAGE: '鏡像：{image}',

  // Grayscale strategy configurations tab
  GRAYSCALE_VERSION: '版本：{version}',
  GRAYSCALE_REPLICA_SI: '副本數量：{count}',
  GRAYSCALE_REPLICA_PL: '副本數量：{count}',

  // Canary Strategy Tab
  COOKIE: 'Cookie',

  // Grayscale Release Job List
  GRAYSCALE_JOB_STRATEGY: '灰度策略',
  GRAYSCALE_JOB_COMPONENT: '灰度組件',
  GATEWAY_SETTINGS: '網關設置',
  DISABLE_GATEWAY: 'Disable Gateway',
  DISABLE_GATEWAY_TIP: 'Are you sure you want to disable the gateway?',
  DISABLE_SUCCESSFUL: 'Disabled successfully.',
  CLUSTER_GATEWAY_DESC:
    '對集群和項目中的外網訪問網關以及服務治理等配置進行設置和管理',
  PROJECT_GATEWAY_DESC:
    '對集群和項目中的外網訪問網關以及服務治理等配置進行設置和管理',
  CLUSTER_GATEWAY: '集群網關',
  PROJECT_GATEWAY: '項目網關',
  CLUSTER_GATEWAY_LOW: 'cluster gateway',
  PROJECT_GATEWAY_PL: 'Project Gateways',
  PROJECT_GATEWAY_LOW: 'project gateway',
  CLUSTER_ENABLE_GATEWAY_DESC:
    '創建應用路由之前，需要先啟用外網訪問入口，即網關。這一步是創建對應的應用路由控制器，負責將請求轉發到對應的後端服務。 ',
  PROJECT_ENABLE_GATEWAY_DESC:
    '集群管理頁面不支持項目網關的設置，如需設置需要轉到對應項目下進行設置。 ',
  CLUSTER_GATEWAY_NOT_ENABLED: '集群網關未設置',
  PROJECT_GATEWAY_NOT_ENABLED: '沒有找到 項目網關',
  'Gateway Not Set': '網關未設置',
  'Set Gateway': '設置網關',
  EDIT_GATEWAY: '編輯網關',
  'Update Gateway': '更新網關',
  CONFIGURATION_OPTIONS: '網關配置',
  'Gateway Config': '網關配置',
  GATEWAY_LOGS: '網關日志',
  GATEWAY_LOW: '網關',
  'Add Gateway Config': '添加網關配置',
  LOAD_BALANCER_PROVIDER: 'LoadBalancer提供商',
  LOAD_BALANCER_PROVIDER_SCAP: 'Load balancer provider',
  LOAD_BALANCER_SCAP: 'Load balancer',
  LOAD_BALANCERS_SCAP: 'Load balancers',
  USE_DEFAULT_ANNOTATIONS: '使用默認註解',
  GATEWAY_IP: '訪問地址',
  UPDATE_GATEWAY_DESC: '當前網關可升級',
  DISK_LOG_COLLECTION_DESC:
    'The Log Collection function allows the system to collect container logs saved on volumes. To use this function, you need to mount a volume in read and write mode to a container and set the container to export logs to the volume.',
  UPDATED_GATEWAY_DESC: '請在業務低峰期操作，升級過程可能會造成業務短暫中斷。 ',
  UPDATED_GATEWAY_TITLE: '升級網關確認?',
  CLUSTER_GATEWAY_GUIDE_DESC:
    '開啟集群網關後，無法再設置項目網關。若已存在項目網關，刪除後無法重新設置。 ',
  'Request Count': '請求量',
  CONNECTION_COUNT: '連接數',
  FAILED_REQUEST_COUNT: '請求錯誤',
  AVERAGE_LATENCY: '平均延遲',
  P_FIFTY_LATENCY: 'P50 延遲',
  P_NINETY_FIVE_LATENCY: 'P95 延遲',
  P_NINETY_NINE_LATENCY: 'P99 延遲',
  FOUR_XX_REQUEST_COUNT: '4xx 錯誤',
  FIVE_XX_REQUEST_COUNT: '5xx 錯誤',
  TOTAL_REQUESTS: '總請求數',
  SUCCESSFUL_REQUESTS: '請求成功',
  GATEWAYS_REPLICA_DESC:
    '部署 (Deployment) 用來描述期望應用達到的目標狀態，主要用來描述無狀態應用，副本的數量和狀態由其背後的控制器來維護，確保狀態與定義的期望狀態一致。您可以增加副本數量來滿足更高負載；回滾部署的版本來消除程序的錯誤修改；創建自動伸縮器來彈性應對不同場景下的負載。 ',
  PROJECT_GATEWAY_EMPTY_DESC:
    '集群管理页面不支持项目网关的设置，如需设置需要转到对应项目下进行设置。',
  DEVOPS_NAME: 'DevOps 项目名稱',
  DEVOPS_PROJECT: 'DevOps 项目',
  DEVOPS_PROJECT_SCAP: 'DevOps 项目',
  DEVOPS_PROJECT_MEMBER_EMPTY_DESC:
    'Please invite a member of the current workspace to the DevOps project.',
  'DevOps Role': '成員角色',
  'DevOps Roles': '成員角色',
  'DevOps Member': '项目成員',
  'DevOps Members': '项目成員',
  DEVOPS_PROJECT_CREDENTIAL_PL: 'DevOps 项目憑證',
  DEVOPS_CREDENTIAL: 'DevOps Credential',
  DEVOPS_CREDENTIAL_PL: 'DevOps 憑證',
  CREDENTIAL_EMPTY_DESC: '請創建一個 DevOps 项目憑證。',
  PIPELINE_CREDENTIAL_EMPTY_TIP: 'Please select a credential.',
  DEVOPS_CREDENTIAL_LOW: 'DevOps 憑證',
  'DevOps Basic Info': '基本資訊',
  DEVOPS_PROJECT_MANAGEMENT: '项目管理',
  DEVOPS_PROJECT_SETTINGS: '项目管理',
  MANAGE_DEVOPS_PROJECT: 'Manage DevOps Project',
  DEVOPS_PROJECT_MEMBER_PL: 'DevOps 项目成員',
  DEVOPS_PROJECT_MEMBER_SCAP: 'DevOps project member',
  DEVOPS_PROJECT_MEMBER_PL_SCAP: 'DevOps project members',
  DEVOPS_PROJECT_ROLE_PL: 'DevOps 项目角色',
  DEVOPS_PROJECT_ROLE_PL_SCAP: 'DevOps 项目角色',

  MANAGER: '管理員',
  'DevOps Project Manager': 'DevOps 项目管理員',
  CREATE_DEVOPS_PROJECT: '創建 DevOps 项目',
  DELETE_MULTIPLE_DEVOPS_PROJECTS: 'Delete Multiple DevOps Projects',
  DELETE_DEVOPS_PROJECT: '刪除 DevOps 项目',
  DELETE_DEVOPS_PROJECT_TIP:
    'Enter the DevOps project name <strong>{resource}</strong> to confirm that you understand the risks of this operation.',
  DELETE_DEVOPS_PROJECT_TIP_PL:
    'Enter the DevOps project names <strong>{resource}</strong> to confirm that you understand the risks of this operation.',

  DEVOPS_BASEINFO_DESC: '請輸入 DevOps 项目的基本資訊',

  DEVOPS_DESCRIPTION:
    'DevOps 是一個獨立的命名空間，其中定義了一組流水線。用戶可以按照自己的方式對流水線進行分組（例如：項目類型、組織類型）。',
  DEVOPS_PROJECT_CREATE_DESC:
    'DevOps 是一個獨立的命名空間，其中定義了一組流水線；用戶可以按照自己的方式對流水線進行分組 (例如：項目類型、組織類型)。',
  DEVOPS_PROJECT_EMPTY_DESC: 'Please create a DevOps project.',
  PIPELINE_EMPTY_DESC: 'Please create a pipeline.',
  DEVOPS_ADMIN_DESC: '指定项目内一個成員為管理員。',

  NO_RELATE_DEVOPS_TITLE: '沒有找到與您相關聯的 DevOps 项目',
  NO_RELATE_DEVOPS_DESC:
    '您可以創建或者聯繫項目管理員將您邀請到 DevOps 项目中開始您的工作',

  DEVOPS_PROJECT_CREDENTIALS_DESC:
    '憑證是包含了一些敏感數據的對象，如用戶名密碼，SSH 密鑰和令牌等，用於在流水線運行時，為拉取代碼、拉取或推送鏡像、SSH 執行腳本等過程提供認證。',
  DEVOPS_CREDENTIALS_DESC:
    '憑證是包含了一些敏感數據的對象，如用戶名密碼，SSH 密鑰和 Token 等，用於在 Pipeline 運行時，為拉取代碼、push/pull 鏡像、SSH 執行腳本等過程提供認證',

  DEVOPS_PROJECT_ROLES_DESC:
    '成員角色定義了在目前 DevOps 项目下用戶所擁有的權限。',

  DEVOPS_PROJECT_MEM_DESC: '對项目内的成員進行管理及角色分配。',
  DEVOPS_PROJECT_ROLE_EMPTY_DESC: 'Please create a DevOps project role.',
  DELETE_DEVOPS_TIP:
    '確定刪除 DevOps 项目 <strong>{resource}</strong> ? 刪除後將無法恢復, 项目下的資源也同時會被銷毀。',

  DEVOPS_TIP_GITOPS_Q: '如何落地 DevOps？',
  DEVOPS_TIP_GITOPS_A:
    '創建關聯代碼倉庫的流水線，並積極使用部署 Kubernetes 部署步驟，就可以實現 DevOps 了。',

  DEVOPS_TIP_TYPE_Q: '流水線 (Pipeline) 支持哪些代碼倉庫類別？',
  DEVOPS_TIP_TYPE_A:
    '流水線支持 Git、GitHub、Gitlab、SVN、以及 Bitbucket 代碼倉庫.',

  NO_DEVOPS_INSTALL: '未安裝 DevOps',

  // Credentials Creation Page
  CONTENT: '內容',
  INVALID_ID_TIP:
    'ID 最長 63 個字元，只能包含小寫字母、數字及分隔符號（-），且必須以小寫字母或數字開頭及結尾。',

  // CRDs > Details
  PROJECT_DEVOPS_PROJECT: 'Project/DevOps Project',
  KUBERNETES_DEPLOY_DEPRECATED_TIP:
    '該步驟會在後續版本中棄用，建議考慮其他替代方案。',
  DISK: '磁盘',
  Dashboard: '首頁',
  dashboard: '首頁',
  LAST_LOGIN: '最近登入',
  'involved project': '參與項目',
  'create project': '創建項目',
  'Project Top3': '項目 Top3',
  'KubeSphere Running Status': 'KubeSphere 運行狀態',
  quota: '配額',
  Utilization: '利用率',
  'Memory Usage': '記憶體使用量',
  'Memory Utilization': '記憶體利用率',
  'CPU Usage': 'CPU 使用量',
  'CPU Utilization': 'CPU 利用率',
  'CPU Load Average': 'CPU 平均負載',
  'Replica Availability': '副本可用率',
  'Disk Utilization': '硬碟利用率',
  'Node Status': '主機狀態',
  'View All Nodes': '查看全部主機',
  'Disk Throughput': '硬碟吞吐量',
  'Network Bandwidth': '網路頻寬',
  'Outbound Traffic': '網路流出速率',
  'Inbound Traffic': '網路流入速率',
  'Monitoring Data': '監控數據',
  'Log Data': '紀錄數據',

  'Super administrator': '超級管理員',
  'Regular user': '普通用戶',
  'Platform Usage Status': '平台使用情況',
  'Cluster Status': '集群狀況',
  TOP_5_FOR_RESOURCE_USAGE: '資源用量 Top 5',

  DEPLOYMENTS: '部署',
  NUMBER_OF_DEPLOYMENTS: 'Number of Deployments',
  STATEFULSETS: '有狀態副本集',
  NUMBER_OF_STATEFULSETS: 'Number of StatefulSets',
  DAEMONSETS: '守護進程集',
  NUMBER_OF_DAEMONSETS: 'Number of DaemonSets',
  Jobs: '任務',
  CronJobs: '定時任務',
  Services: '服務',
  Routes: '應用路由',
  Volumes: '儲存卷',
  'Storage Classes': '儲存類型',
  APP_REPO: '應用倉庫',
  Users: '用戶',
  'App Repositories': '應用倉庫',
  USER_PL: '用戶',

  DASHBOARD_TITLE: '您好 {username}',
  DASHBOARD_BANNER_TITLE: '平台運行概覽',
  DASHBOARD_BANNER_DESC: '集合了目前平台運行中資源和用量的統計資訊',
  DASHBOARD_DESC: 'Dashboard 提供了目前集群下各種資源的使用情況。',
  NODE_UNIT: '台',
  USAGE_VALUE: '使用量',
  USAGE_RATE: '使用率',
  NO_PROJECT: '暫時沒有找到可用項目',
  NO_POD_MONITOR_DATA: '暫時沒有容器組監控數據',
  RESOURCE_WARNING_TIPS: '有 {warnNum} 個 {tipName} 狀態異常',

  USER_DASHBOARD_EMPTY_TITLE: '您暫時不屬於任何企業空間',
  USER_DASHBOARD_EMPTY_DESC:
    '您可以聯繫某個企業空間的管理員邀請您加入企業空間中',
  CUSTOM_RESOURCE: 'Custom Resource',
  CUSTOM_RESOURCE_LOW: 'custom resource',
  CUSTOM_RESOURCE_PL: 'Custom Resources',
  CRD: 'CRD',
  CRD_PL: 'CRDs',
  CRD_LOW: 'CRD',
  CRD_EMPTY_DESC: 'Please create a CRD.',
  CUSTOM_RESOURCE_DEFINITION_LOW: 'custom resource definition',
  'Custom Resource Definition': '自定義資源',
  'Custom Resource Definitions': '自定義資源',

  CRD_DESC:
    '定製資源定義 (CRD) 是一種 Kubernetes 實現自定義資源類型的擴展方式，您可以如同操作内置資源對象一樣操作 CRD 對象。',
  CUSTOM_RESOURCE_DEFINITION_CREATE_DESC:
    '定製資源定義 (CRD) 是一種 Kubernetes 實現自定義資源類型的擴展方式，您可以如同操作内置資源對象一樣操作 CRD 對象。',

  // CRD List Page
  KIND_TCAP: '類別',
  SCOPE_TCAP: '作用域',
  CRDS: '定製資源定義',
  configmaps: '配置字典',
  ConfigMaps: '配置字典',
  ConfigMap: '配置字典',
  FIELDS: '配置項',
  CONFIGMAP_DESC:
    '配置字典常用於儲存工作負載所需的配置資訊，許多應用程序會從配置文件、命令行參數或環境變量中讀取配置資訊。',
  CONFIGMAP_EMPTY_DESC:
    '配置字典是儲存通用的配置變量的，用戶可以將分布式系統中用於不同模組的環境變量統一到一個對象中管理',
  EDIT_CONFIGMAP: '修改配置',
  CONFIG_FIELD_DESC: '此配置映射條目的唯一 key 值。',
  ENTER_CONFIG_VALUE_DESC:
    '配置是儲存通用的配置變量的，使用戶可以將分布式系統中用於不同模組的環境變量統一到一個對象中管理',
  'Config Value': '配置項',
  'Modify Config': '修改配置',
  'The unique key value of this configuration map entry':
    '此配置映射條目的唯一 key 值',
  'Enter the value of the configuration map entry or use the contents of the file':
    '輸入配置映射條目的值或使用文件的内容',
  CREATE_CONFIG: '新建配置項',
  RUNNING_STATUS: '運行狀態',
  'All Components': '全部服務組件',
  components: '服務組件',
  Components: '服務組件',
  'Installed Components': '已安裝組件',
  'Not Installed Components': '未安裝組件',
  INSTANCE_COUNT: '實例數量',

  SERVICE_DETAILS: '服務詳情',

  SERVICE_COMPONENTS_DESC:
    '服務組件提供 KubeSphere、Kubernetes 和 OpenPitrix 集群内各項服務組件的健康狀態監控，可以查看目前集群的健康狀態和運行時間，能夠幫助用戶監測集群的狀況和即時定位問題。',

  KS_ACCOUNT_DESC: '提供用戶、權限管理相關的 API',
  KS_APIGATEWAY_DESC: '負責處理服務請求和處理 API 調用過程中的所有任務',
  KS_APISERVER_DESC:
    '整個集群管理的 API 介面和集群内部各個模組之間通信的樞紐，以及集群安全控制',
  KS_CONSOLE_DESC: '提供 KubeSphere 的控制台服務',
  OPENLDAP_DESC: '負責集中儲存和管理用戶帳號資訊',
  REDIS_DESC: '將結構化的數據儲存在記憶體中的儲存系統',

  COREDNS_DESC: '為 Kubernetes 集群提供服務發現的功能',
  KUBE_CONTROLLER_MANAGER_DESC:
    '由一系列的控制器組成，處理集群中常規任務的後台線程',
  KUBE_SCHEDULER_DESC: 'Kubernetes 的調度器，將 Pod 調度到合適的 Node 節點上去',
  METRICS_SERVER_DESC:
    'Kubernetes 的監控組件，從每個節點的 Kubelet 採集指標資訊',
  TILLER_DEPLOY_DESC: 'Helm 的服務端，負責管理發佈 release',

  OPENPITRIX_API_GATEWAY_DESC:
    '負責處理平台的服務請求和處理 API 調用過程中的所有任務',
  OPENPITRIX_APP_MANAGER_DESC: '提供 OpenPitrix 的應用生命週期管理',
  OPENPITRIX_CATEGORY_MANAGER_DESC: '提供 OpenPitrix 中的應用分類管理',
  OPENPITRIX_CLUSTER_MANAGER_DESC: '提供 OpenPitrix 中的應用實例生命週期管理',
  OPENPITRIX_DB_DESC: 'OpenPitrix 資料庫',
  OPENPITRIX_ETCD_DESC: '高可用鍵值儲存系統，用於共享配置、服務發現和全局鎖',
  OPENPITRIX_IAM_SERVICE_DESC:
    '控制哪些用戶可使用您的資源（身份驗證）以及可使用的資源和採用的方式（授權）',
  OPENPITRIX_JOB_MANAGER_DESC: '具體執行 OpenPitrix 應用實例生命週期 Action',
  OPENPITRIX_MINIO_DESC: '對象儲存服務，用於儲存非結構化數據',
  OPENPITRIX_REPO_INDEXER_DESC: '提供 OpenPitrix 的應用倉庫索引服務',
  OPENPITRIX_REPO_MANAGER_DESC: '提供 OpenPitrix 的應用倉庫管理',
  OPENPITRIX_RUNTIME_MANAGER_DESC: '提供平台中的雲運行時環境管理',
  OPENPITRIX_TASK_MANAGER_DESC:
    '具體執行 OpenPitrix 應用實例生命週期 Action 子任務',

  ISTIO_CITADEL_DESC:
    '透過内建身份和憑證管理賦予强大的服務之間和最終用戶身份驗證',
  ISTIO_GALLEY_DESC:
    '代表其他的 Istio 控制平面組件，用來驗證用戶編寫的 Istio API 配置',
  ISTIO_INGRESSGATEWAY_DESC: '提供外網訪問的網關',
  ISTIO_PILOT_DESC: '為 Envoy sidecar 提供服務發現功能',
  ISTIO_POLICY_DESC:
    '用於向 Envoy 提供訪問策略控制，黑白名單控制，速率限制等相關策略',
  ISTIO_SIDECAR_INJECTOR_DESC: '為配置注入的 Pod 自動注入 sidecar',
  ISTIO_TELEMETRY_DESC: '為 Envoy 提供了數據上報和紀錄搜集服務',
  JAEGER_COLLECTOR_DESC:
    '收集 sidecar 的數據，istio 裡面 sidecar 就是 jaeger-agent',
  JAEGER_COLLECTOR_HEADLESS_DESC:
    '收集 sidecar 的數據，Istio 裡面 sidecar 就是 jaeger-agent',
  JAEGER_OPERATOR_DESC:
    '負責創建 jaeger 服務，並在配置更新時自動應用到 Jaeger 服務',
  JAEGER_QUERY_DESC:
    '接收查詢請求，然後從後端儲存系統中檢索 trace 並透過 UI 進行展示',

  KUBE_STATE_METRICS_DESC:
    '監聽 Kubernetes API server 以獲取集群中各種 API 對象的狀態包括節點，工作負載和 Pod 等，並生成相關監控數據供 Prometheus 抓取',
  NODE_EXPORTER_DESC: '收集集群各個節點的監控數據，供 Prometheus 抓取',
  PROMETHEUS_K8S_DESC: '提供節點、工作負載、 API 對象相關監控數據',
  PROMETHEUS_K8S_SYSTEM_DESC:
    '提供 etcd, coredns, kube-apiserver, kube-scheduler, kube-controller-manager 等 Kubernetes 組件的監控數據',
  PROMETHEUS_OPERATED_DESC:
    '所有 Prometheus 實例對應的服務，供 Prometheus Operator 内部使用',
  PROMETHEUS_OPERATOR_DESC: '管理 Prometheus 實例的 Operator',

  ELASTICSEARCH_LOGGING_DATA_DESC:
    '提供 Elasticsearch 數據儲存、備份、搜索等數據服務',
  ELASTICSEARCH_LOGGING_DISCOVERY_DESC: '提供 Elasticsearch 集群管理服務',
  LOGSIDECAR_INJECTOR_DESC: '為指定 Pod 自動注入落盤紀錄收集 Sidecar 容器',

  CONTROLLER_MANAGER_METRICS_SERVICE_DESC: '提供 S2I 控制器的監控數據',
  KS_JENKINS_DESC: 'Jenkins master 服務，提供 DevOps 基礎功能',
  KS_JENKINS_AGENT_DESC: 'Jenkins agent 連接 Jenkins master 所使用的服務',
  KS_SONARQUBE_POSTGRESQL_DESC: '代碼質量分析組件 Sonarqube 的後端資料庫',
  KS_SONARQUBE_SONARQUBE_DESC: 'Sonarqube 的主服務',
  S2IOPERATOR_DESC: 'S2I 控制器，S2I 的全生命週期管理',
  UC_JENKINS_UPDATE_CENTER_DESC: 'Jenkins 更新中心，提供 Jenkins 插件的安裝包',
  WEBHOOK_SERVER_SERVICE_DESC: '為 S2I 提供預設值和驗證 webhook',

  ETCD_DESC: '一個可靠的分布式資料儲存，能夠持久化儲存集群配置',
  MYSQL_DESC:
    '一個開源的資料庫管理系統，讓用戶能夠管理關係型資料庫。關係資料庫將數據保存在不同的表中，而不是將所有數據放在一個大倉庫内',
  TOWER_DESC: '一個可以在集群間通過代理方式創建網路連接的工具',
  KUBE_SCHEDULER_SVC_DESC:
    'Kubernetes 的調度器，將 Pod 調度到合適的 Node 節點上去',
  KUBE_CONTROLLER_MANAGER_SVC_DESC:
    '由一系列的控制器組成，處理集群中常規任務的背景執行緒',

  S2IOPERATOR_METRICS_SERVICE_DESC: 'S2I 監控服務組件，提供基礎監控數據',
  MINIO_DESC: '一個高性能的開源對象儲存伺服器，適合儲存大容量非結構化的數據',
  ALERTMANAGER_OPERATED_DESC:
    'Alertmanager 服務，用於 Prometheus 等與 Alertmanager 集成',
  ALERTMANAGER_MAIN_DESC: 'Alertmanager Web UI 服務',
  NOTIFICATION_MANAGER_SVC_DESC:
    'Notification Manager 服務，提供發送郵件、微信、Slack 等通知的接口',
  NOTIFICATION_MANAGER_CONTROLLER_METRICS_DESC:
    '提供 Notification Manager Controller 内部監控數據的服務',
  HYPERPITRIX_DESC:
    '針對基於 Helm 的應用程式提供應用商店服務，管理應用生命週期',
  JAEGER_OPERATOR_METRICS_DESC: '提供 operator 的監控 metrics',
  LOGSIDECAR_INJECTOR_ADMISSION_DESC:
    '為指定 Pod 自動注入落盤紀錄收集 Sidecar 容器',
  KS_EVENTS_ADMISSION_DESC: '為 Events 規則管理提供驗證 webhook',
  KS_EVENTS_RULER_DESC: 'Events 規則引擎服務，提供 Events 過濾和告警功能',
  KS_CONTROLLER_MANAGER_DESC:
    '實現業務邏輯，例如創建企業空間時，為其創建對應的權限；創建服務策略時，生成對應的 Istio 配置等',
  KUBE_AUDITING_WEBHOOK_SVC_DESC: '負責審計紀錄的收集、比對、持久化和告警',
  ADD_CLUSTER: '添加集群',
  'Add New Cluster': '添加新集群',
  'Import Kubernetes Cluster': '導入Kubernetes集群',
  Import: '導入',

  Validating: '校驗中',
  'Validation failed': '校驗失敗',

  CLUSTER_NAME: '集群名稱',
  'Cluster Management': '集群管理',
  'Nodes Management': '節點管理',
  'Node Types': '節點類型',
  'Network Management': '網路管理',
  'Custom Resources': '自定義資源 CRD',
  STORAGE: '儲存管理',
  CLUSTER_SETTINGS: '集群設置',
  'Network Policies': '網路策略',
  'Network Topology': '網路拓撲',
  CLUSTER_VISIBILITY_SCAP: '集群能見度',
  'Cluster Members': '集群成員',
  'Cluster Roles': '集群角色',
  'Kubernetes Settings': 'Kubernetes 設置',
  'Connection Method': '連接方式',

  KUBERNETES_VERSION: 'Kubernetes 版本',
  KUBESPHERE_VERSION: 'KubeSphere 版本',

  'Cluster List': '集群列表',
  CLUSTER_INFORMATION: '集群資訊',
  KUBERNETES_STATUS: 'Kubernetes 組件狀態',
  Tools: '工具',

  EDIT_VISIBILITY: '編輯可見範圍',

  'Go back': '返回上一步',

  'Choose a provider': '選擇服務商',

  USER_PROJECTS: '用戶項目',
  SYSTEM_PROJECTS: '系統項目',

  WAIT_FOR_CLUSTER: '等待集群加入...',

  'Click to Copy': '點擊複製',

  'Cluster initialization failed': '集群初始化失敗',

  'Not Ready': '未就緒',

  'Copy successfully': '複製成功',

  UNBIND: '解綁',

  UNBIND_CLUSTER: '解綁集群',

  'Cluster Member': '集群成員',

  AUTHORIZED: '已授權',
  Unauthorized: '待授權',

  'Authorize the cluster to workspace': '集群授權企業空間',
  SET_PUBLIC_CLUSTER: '設置為公開集群',

  'The current cluster is public': '目前集群處於公開狀態',

  AVAILABLE_CLUSTERS: '可用集群',
  SELECT_CLUSTERS: '集群選擇',
  EDIT_CLUSTER_INFO_DESC: '編輯集群基礎資訊',

  SCHEDULING_OPERATIONS: '排程器調度次數',
  SCHEDULING_OPERATION: '排程器調度次數',
  SCHEDULING_FAILURES: '調度失敗的容器組',
  SCHEDULING_FAILURE: '調度失敗的容器組',

  'Please select or input a tag': '請選擇或輸入標籤',
  'Please select or input a provider': '請選擇或輸入服務商',
  'Please input the kubesphere api server address of the cluster':
    '請輸入待加入集群的 Kubesphere API Server 地址',

  ALL_PROJECTS: '全部項目',

  'Enter the project': '進入項目',

  'How to Add': '添加方式',

  'New Cluster': '新建集群',

  'Import Cluster': '導入集群',

  'Cluster Basic Info': '集群基本信息',

  'Node Settings': '節點設置',

  'Please add at least one cluster node': '請至少添加一個集群節點',
  NODE_ROLE_EMPTY_DESC: '請指定節點的角色',

  'Add node to the cluster': '添加節點到集群中',

  INTERNAL_IP_ADDRESS: '節點內網 IP 地址',
  PORT: '端口',
  PORT_VALUE: '端口：{value}',
  EXTERNAL_IP: '外網 IP 地址',
  USERNAME_AND_PASSWORD: '用戶名和密碼',
  SSH_KEY_TCAP: 'SSH 密鑰',
  SSH_KEY_SCAP: 'SSH 密鑰',
  SSH_AUTH_MODE: 'SSH 認證方式',
  'Kubernetes Cluster Settings': 'Kubernetes 集群配置',
  'Network Plugin': '網路外掛',
  'Max Pods': '節點最大容器组數量',
  'Pods CIDR': '容器組 CIDR',
  'Service CIDR': '服務 CIDR',
  'Default Storage Plugin': '預設儲存外掛',
  'Private Registry Configuration': '私有倉庫配置',
  'etcd Backup': 'etcd 備份',

  'etcd Backup Dir': 'etcd 備份地址',
  'etcd Backup Period': 'etcd 備份地址',
  'Keep Backup Number': '保留的備份數量',

  'KubeSphere Settings': 'KubeSphere 設置',

  INVALID_IP_DESC: 'IP 地址格式錯誤。',

  CLUSTER_CREATION_PROGRESS: '集群創建進度',

  CURRENT_STEP: '當前進度：{step}',

  'Log Info': '紀錄資訊',
  CLUSTER_BASIC_INFO: 'Basic information',

  NO_CLUSTER_TIP: '請添加至少 1 個集群',
  NO_CLUSTER_TIP_DESC:
    '集群是一組運行著 Kubernetes 的節點（物理或者虛擬機）, Kubesphere 的功能也依靠於集群中的節點來運行',
  ADD_NEW_CLUSTER_DESC: '添加新的 Kubernetes 集群',
  CHOOSE_PROVIDER_DESC:
    'KubeSphere 提供了在主流服務商中快速部署 Kubernetes 集群的方案',

  VISIBILITY_PARTIAL: '部分可見',
  VISIBILITY_PUBLIC: '公開',

  MULTI_CLUSTER: '多集群',

  CLUSTER_SETTINGS_DESC: '定義集群配置資訊',
  TAG: '標籤',
  CLUSTER_TAG_DESC: 'Select a tag to identify the purpose of the cluster.',
  CLUSTER_PROVIDER_DESC: 'Select the provider of the cluster infrastructure.',
  CLUSTER_CONNECT_METHOD_DESC: '可以直接連接集群或者使用代理',

  CONNTECT_DIRECT: '直接連接Kubernetes集群',
  CONNTECT_PROXY: '集群連接代理',

  WAIT_FOR_CLUSTER_DESC:
    '暫時沒有可用的節點，集群為不可以用狀態，您可以添加以下配置文件以啟用該集群',

  CLUSTER_AGENT_TIP_1:
    '1. 請在通過 SSH 在目標集群中創建一個名稱為 agent.yaml 的文件',
  CLUSTER_AGENT_TIP_2: '2. 複製以下配置文件至 agent.yaml 中',
  CLUSTER_AGENT_TIP_3:
    '3. 通過命令行執行 <span class="code">kubectl create -f agent.yaml</span>',
  CLUSTER_AGENT_TIP_3_DESC: '執行命令之後等待集群狀態的更新',

  CLUSTER_CONDITIONS: '集群狀態',
  CLUSTER_BASE_INFO_DESC:
    'Basic information provides an overview of the cluster. You can view and edit cluster information.',
  CLUSTER_INFO_TCAP: 'Cluster Information',

  UNBIND_CLUSTER_DESC:
    '解綁集群後，KubeSphere 將無法再對該集群進行管理。 解綁後，該集群内的 Kubernetes 資源不會被刪除。',
  SURE_TO_UNBIND_CLUSTER: 'I understand the risks of this operation',

  'Invite members to the cluster': '邀請成員到該集群',
  INVITE_CLUSTER_MEMBER_DESC: '您可以邀請新的成員來此集群',

  AUTHORIZE_CLUSTER_TO_WORKSPACE_DESC:
    '集群授權可以將集群通過授權的形式指定给企業空間使用該集群',

  PUBLIC_CLUSTER_DESC:
    '公開狀態的集群意味著平台内的用戶都可以使用該集群，並在集群中創建和調度資源',

  CLUSTER_AUTHORIZATION_DESC:
    '集群授權可以將集群通過授權的形式指定給企業空間使用該集群',

  CLUSTER_VISIBILITY_Q1: '如何將集群授權給指定的企業空間使用？',
  CLUSTER_VISIBILITY_A1:
    'You can assign a cluster to specific workspaces by clicking Edit Visibility.',
  CLUSTER_VISIBILITY_Q2: '什麼是公開集群?',
  CLUSTER_VISIBILITY_A2:
    '公開狀態的集群意味著平台内的用戶都可以使用該集群，並在集群中創建和調度資源',

  SELECT_CLUSTERS_DESC: '選擇企業空間下可用的集群',

  CLUSTER_API_SERVER_TITLE: '待加入集群的 Kubesphere API Server',
  CLUSTER_API_SERVER_DESC: '需要添加待加入集群的 KubeSphere API Server 地址',

  INPUT_KUBECONFIG: '請填寫目標集群的 kubeConfig',

  CLUSTER_DIRECT_IMPORT_TIP:
    'KubeSphere 多集群控制平面通過提供的 kubeconfig 來直接連接導入集群，此種方式要求目前集群能夠通過 kubeconfig 中的 server 地址直接訪問待導入集群. </br>通常適用於:</br>1. 目前集群和待導入集群在同一内網網路中</br>2. 目前集群和待導入集群已通過vpn或穿隧協定等其它技術連通所在網路</br>3. kubeconfig 的 server 地址可以通過公網訪問',
  CLUSTER_AGENT_IMPORT_TIP:
    'KubeSphere 控制平面通過代理方式連接待導入集群，控制平面啟動一個公開的代理服務，待導入集群創建相應的客戶端組件連接代理服務，與控制平面之間建立一個反向代理。此種方式不需要待導入集群和控制平面在同一網路，也不要求待導入集群暴露集群的 ApiServer 地址，但會有一定的網路性能損耗</br></br>通常適用於:</br>1. 目前集群和待導入集群不在同一網路中<br/>2. 目前集群和待導入集群無法通過vpn或穿隧協定等其它技術連通所在網路<br/>3. 對集群間網路性能損耗能容忍',

  HOW_TO_GET_KUBECONFIG: '如何獲取 kubeconfig ？',

  CLUSTER_AGENT_TITLE: '請根據集群中提供的代理連接設置加入集群',
  CLUSTER_AGENT_DESC: '需要在集群中設置下相應的代理 Agent',

  SELECT_HOST_CLUSTER_WARNING:
    'The visibility of the multi-cluster environment will decrease if the host cluster is overloaded. It is not recommended to create resources on the host cluster.',
  HOST_CLUSTER_VISIBILITY_WARNING:
    '請謹慎將主集群授權给企業空間，主集群負載過高會導致多集群穩定性下降。',
  CLUSTER_VISIBILITY_REMOVE_WARNING:
    'After the authorization for a workspace to use the cluster is removed, all resources of the workspace on the cluster will be deleted.',
  REMOVE_WORKSPACE_CONFIRM_TITLE: 'Remove Authorization',
  REMOVE_WORKSPACE_CONFIRM_DESC:
    'Enter the name of the workspace(s) <strong>{resource}</strong> to confirm that you understand the risks of this operation.',

  'Host Cluster': '主集群',
  HOST_CLUSTER: '主集群',
  HOST_CLUSTER_TCAP: 'Host Cluster',
  HOST_CLUSTER_PL_TCAP: 'Host Clusters',
  'Host Clusters': '主集群',
  'Member Cluster': '成員集群',
  'Member Clusters': '成員集群',

  SELECT_ADD_CLUSTER_METHOD: '選擇添加集群的方式',
  SELECT_ADD_CLUSTER_METHOD_DESC: '支持添加新集群和導入已存在集群',

  NEW_CLUSTER_DESC: '添加新的 Kubernetes 集群',
  IMPORT_CLUSTER_DESC: '導入已有的 Kubernetes 集群',
  CLUSTER_NODE_SETTINGS_DESC: '添加集群需要的節點',
  NODE_INTERNAL_IP_DESC: '集群内各節點間可以互相訪問的內網 IP 地址',
  EDGENODE_INTERNAL_IP_DESC: '集群内各節點間可以互相訪問的內網 IP 地址',
  NODE_INTERNAL_IP_EMPTY_DESC: '请输入节点在私网内的 IP 地址。',
  EDGENODE_INTERNAL_IP_EMPTY_DESC: '请输入节点在私网内的 IP 地址。',
  NODE_ROLE_DESC:
    '集群角色中，master 節點數量需要為 1 或 3，woker 節點數量至少為 1',
  NODE_EXTERNAL_IP_DESC: '請填入當前主集群可以訪問到的 IP 地址',
  NODE_EXTERNAL_IP_EMPTY_DESC: '請填入當前主集群可以訪問到的 IP 地址',
  SSH_AUTH_MODE_DESC: '支持用戶名密碼以及 SSH 密鑰',
  NODE_USERNAME_DESC: '預設以 root 用戶登入',
  NODE_PASSWORD_DESC: '登入節點時需要的密碼',

  K8S_CLUSTER_SETTINGS_DESC: '對即將新建的 Kubernetes 集群進行初始化配置 ',

  CLUSTER_MAX_PODS_DESC: '可以在此 kubelet 上運行的 pod 的數量. 預設為 110.',

  K8S_NETWORK_PLUGIN_CALICO:
    'Calico 是一個純三層的網路方案，無縫集成 IaaS 雲架構，能夠提供的 VM、容器、實體機之間的 IP 通信',
  K8S_NETWORK_PLUGIN_FLANNEL:
    'Flannel 可以讓集群中的不同節點主機創建的 Docker 容器都具有全集群唯一的虛擬 IP 地址',
  K8S_NETWORK_PLUGIN_CILIUM: '基於 eBPF 的網路，具有安全性和可觀察性',

  KUBE_PODS_CIDR_DESC:
    '在節點上運行的 Pod 從節點的 Pod CIDR 範圍分配 IP 地址。',
  KUBE_SERVICE_CIDR_DESC: '分配給服務的 IP 池',

  CLUSTER_COMPONENTS_DESC: '對集群的服務組件進行訂製',

  CLUSTER_ADVANCED_SETTINGS_DESC: '可以根據需要配置您所需要的服務',
  CLUSTER_PRIVATE_REGISTRY_DESC:
    '給集群配置私有鏡像倉庫，當開始建構集群時會通過此鏡像倉庫拉取所需的全部鏡像。',

  CLUSTER_CONTROLPLANE_ENDPOINT: '授權集群訪問地址',
  CLUSTER_CONTROLPLANE_ENDPOINT_DESC:
    '通過授權的集群訪問地址與集群直接通信，為集群生成 kubeconfig 來訪問集群。',
  CLUSTER_ETCD_BACKUP_DESC: '對 etcd 進行定期備份設置',
  CLUSTER_ETCD_BACKUP_DIR_DESC: '在 etcd 主機上儲存 etcd 備份文件的位置。',
  CLUSTER_ETCD_BACKUP_PERIOD_DESC: '運行 etcd 備份任務的時間，單位為分鐘。',
  CLUSTER_ETCD_BACKUP_NUMBER_DESC: '要保留多少個備份副本。',
  CLUSTER_KUBESPHERE_SETTINGS_DESC: '針對 KubeSphere 的一些客制化設置',

  CREATING_CLUSTER: '集群正在創建中',
  CREATING_CLUSTER_DESC:
    '當前集群正在創建，暫時沒有可用的節點，所以集群為不可以用狀態',
  COPY_SUCCESSFUL: '复制成功。',
  CLUSTER_INIT_FAILED: 'Cluster initialization failed.',
  INIT_NODES: '初始化節點',
  PULL_IMAGES: '拉取鏡像',
  INIT_ETCD_CLUSTER: '初始化 etcd 集群',
  INIT_CONTROL_PLANE: '初始化控制平面',
  JOIN_NODES: '添加節點',
  INSTALL_ADDONS: '安裝插件',
  FETCHING_LOGS: `正在獲取紀錄...`,

  MASTER_NODE_COUNT_TIP: 'Master 節點數量需要為 1 或 3',
  WORKER_NODE_COUNT_TIP: 'Worker 節點數量至少為 1',

  CLUSTER_CREATION_PROGRESS_TIP:
    '根據所創建的的集群規模和網路連接的不同，創建完整整個集群大概需要 30 ~ 60 分鐘。',

  CLUSTER_UPGRADE_REQUIRED:
    'The cluster version does not support this function. Please upgrade the cluster to {version} or later.',
  MEMBER_CLUSTER_UPGRADE_TIP:
    'Member clusters with versions earlier than {version} do not support this function. Please upgrade the member clusters to {version} or later.',

  // Unbind Cluster
  UNBIND_CLUSTER_Q: 'Unbind Cluster',

  // Cluster Visibility
  NODE: 'Node',
  ADMINISTRATOR: 'Administrator',
  CLUSTER_VISIBILITY: '集群能見度',
  CLUSTER_VISIBILITY_DESC:
    'Cluster visibility controls the cluster authorization to workspaces. After a cluster is authorized to workspaces, you can view and manage the cluster resources in the workspaces.',
  EDIT_VISIBILITY_DESC: 'Edit the cluster visibility in workspaces.',
  UNAUTHORIZED: 'Unauthorized',
  AUDITING: 'Auditing',
  REMOVE_WORKSPACE_CONFIRM_SI:
    'Enter the workspace name <strong>{resource}</strong> to confirm that you understand the risks of this operation.',
  REMOVE_WORKSPACE_CONFIRM_PL:
    'Enter the workspace names <strong>{resource}</strong> to confirm that you understand the risks of this operation.',
BASIC_INFORMATION: '基本資訊',
  NAME: '名稱',
  RECORD: 'Record',
  NAME_VALUE: '名稱：{value}',
  ROLE: '角色',
  ROLE_PL: '角色',
  CPU_USAGE: 'CPU 使用量',
  CPU_USAGE_TIME: 'CPU 使用量（{time}）',
  MEMORY_USAGE: '記憶體使用量',
  MAXIMUM_PODS: 'Maximum Pods',
  MAXIMUM_PODS_SCAP: 'Maximum Pods',
  MEMORY_USAGE_TIME: '記憶體使用量（{time}）',
  POD_PL: '容器組',
  NUMBER_OF_PODS: 'Number of Pods',
  POD_LOW: '容器組',
  LEARN_MORE: '了解更多',
  DELETE: '刪除',
  DELETE_PROJECT: 'Delete Project',
  LOGS: '操作紀錄',
  NO_DATA: '暫無數據',
  NO_DATA_SCAP: 'No data',
  REFRESH: '刷新',
  DOWNLOAD: '下載',
  NO_RESOURCE: '暫時沒有 {resource}。',
  LOG_DATA_LOW: '紀錄數據',
  CANCEL: '取消',
  USERNAME: '用戶名稱',
  PASSWORD: '密碼',
  REPLICA_COUNT: '副本數量',
  REPLICA_COUNT_LOW: 'replicas',
  REPLICA: 'Replica',
  REPLICA_PL: 'Replicas',
  CREATE_NAME: '創建{name}',
  KEY: '鍵',
  KEY_EQ_VALUE: 'Key=Value',
  VALUE: '值',
  POLICY: 'Policy',
  DROP: '移除',
  TARGET: '目標',
  STRATEGY: '策略',
  STRATEGY_PL: 'Strategies',
  CERTIFICATE: 'Certificate',
  CERTIFICATE_VALUE: 'Certificate: {value}',

  // Cluster Node List
  MASTER: '主節點',
  WORKER: '工作節點',
  CONTROL_PLANE: 'Control plane',
  AGENT: 'Agent',
  EDGE: 'Edge node',
  EDGE_NODE: 'Edge Node',
  ALLOCATED_CPU: '已分配 CPU',
  ALLOCATED_MEMORY: '已分配記憶體',
  CPU_LIMIT_SI: '資源限制：{core} 核（{percent}）',
  CPU_LIMIT_PL: '資源限制：{core} 核（{percent}）',
  CPU_REQUEST_SI: '{core} 核（{percent}）',
  CPU_REQUEST_PL: '{core} 核（{percent}）',
  CORE: '核',
  CORE_PL: '核',
  CPU_CORE_PERCENT_SI: '{core} 核（{percent}）',
  CPU_CORE_PERCENT_PL: '{core} 核（{percent}）',
  MEMORY_GIB_PERCENT: '{gib} GiB（{percent}）',
  MEMORY_LIMIT_VALUE: '資源限制：{gib} GiB（{percent}）',
  MEMORY_REQUEST_VALUE: '{gib} GiB（{percent}）',
  TITLE_UNIT: '{title} ({unit})',
  RESOURCE_REQUEST: '資源預留',
  CORDON: '停止調度',
  UNCORDON: '啟動調度',
  VIEW_LOG: '查看紀錄',

  name: '名稱',
  Ready: '就緒',
  READY_VALUE: 'Ready: {readyCount}/{total}',
  STATUS_VALUE: 'Status: {value}',
  REASON_VALUE: 'Reason: {value}',
  MESSAGE_VALUE: 'Message: {value}',
  UPDATED_AT_VALUE: 'Updated At: {value}',
  UPDATED_AGO: 'Updated {value}',
  STATUS: '狀態',
  TYPE: '類型',
  TYPE_VALUE: 'Type: {value}',
  TYPE_CONFIGMAP: 'Volume type: ConfigMap',
  TYPE_SECRET: 'Volume type: Secret',
  TYPE_EMPTYDIR: 'Volume type: emptyDir',
  TYPE_HOSTPATH: 'Volume type: HostPath',
  PROJECT: '項目',
  WORKBENCH_PROJECT: 'Project',
  WORKBENCH_WORKSPACE: 'Workspace',
  WORKBENCH_DEVOPS: 'DevOps project',
  WORKBENCH_MULTI_CLUSTER_PROJECT: 'Multi-cluster project',
  WORKBENCH_CLUSTER: 'Cluster',
  PROJECT_EMPTY_DESC: 'Please create a project.',
  Service: '服務',
  SERVICE: '服務',
  SERVICE_VALUE: '服務：{value}',
  SERVICE_LOW: '服務',
  SERVICE_PL: '服務',
  NUMBER_OF_SERVICES: 'Number of Services',
  Overview: '概覽',
  OVERVIEW: '概覽',
  'Node Selector': '節點選擇器',
  START_TIME: '開始時間',
  START_TIME_SCAP: 'Start time',
  END_TIME: '結束時間',
  SAMPLING_INTERVAL: 'Sampling Interval',
  CREATION_TIME_TCAP: '創建時間',
  CREATED_BY: 'Created By',
  UPDATE_TIME_TCAP: '更新時間',
  RUNNING_TIME: '運行時間',
  CUSTOM_COLUMNS: '内容自定義',
  DESELECT: '取消選擇',
  Monitors: '監控',
  Events: '事件',
  LABEL_PL: '標籤',
  APPLICATION_WORKLOAD_PL: '應用負載',
  APPLICATION_WORKLOADS: '應用負載',
  Application: '應用',
  APPLICATION: '應用',
  Container: '容器',
  CONTAINER_PL: '容器',
  TERMINAL: '終端',
  COMMAND: '命令',
  COMMANDS: '命令',
  MAINTAINER_COLON: '維護者',
  CREATOR: '創建者',
  POD: '容器組',
  Pods: '容器組',
  MEMORY: '記憶體',
  memory: '記憶體',
  Custom: '自定義',
  Others: '其它',
  Error: '錯誤',

  Platform: '平台管理',
  PLATFORM_INFORMATION: '平台資訊',
  PLATFORM_VERSION: '平台版本',
  PLATFORM_ADDRESS: '平台地址',
  PLATFORM_TITLE: '平台標題',
  PLATFORM_DESCRIPTION: '平台描述',
  CLUSTER_COUNT: '集群數量',
  PLATFORM_RESOURCES: 'Platform Resource',
  LAST_UPDATE_TIME: 'Last update time',
  Workbench: '工作台',
  'Access Control': '訪問控制',
  ACCESS_CONTROL: '訪問控制',
  'App Templates': '應用模板',
  'Service Components': '服務組件',
  SYSTEM_COMPONENT_PL: '服務組件',
  Infrastructure: '基礎設施',
  'Basic Information': '基本資訊',
  MONITORING_AND_ALERTING: '監控告警',
  'MONITORING_&_ALERTING': '監控告警',
  CONFIGURATION_CENTER: '配置中心',
  STORAGE_MANAGEMENT: 'Storage Management',
  CONFIGURATION: '配置',
  PROJECT_SETTINGS: '項目設置',
  GRAYSCALE_RELEASE: '灰度發佈',

  'User Manual': '使用手冊',
  'API Documents': 'API 文件',

  History: '歷史紀錄',

  RECENT_ACCESS: '最近訪問',

  CLUSTERS_MANAGE_DESC:
    '對多集群以及每個集群的基礎資源、服務组件和應用資源等的統一管理',
  ACCESS_CONTROL_DESC: '對平台中的企業空間、帳號、以及角色權限進行統一管理',
  APP_STORE_MANAGEMENT_DESC:
    '對雲原生應用的上架、下架以及審核等應用全生命週期的統一管理',
  PLATFORM_SETTINGS_DESC: '客製化平台設置，如平台基本資訊、紀錄收集器等',

  LOADING: '載入中',
  Active: '已啟用',
  Running: '運行中',
  Succeeded: '運行中',
  Updating: '更新中',
  Warning: '異常',
  Draining: '疏散中',
  Pending: '等待中',
  Upgrading: '升级中',
  Stopped: '已停止',
  Disabled: '未开启',
  'Not Enabled': '未啟用',
  Enabled: '已啟用',
  ENABLED: '已啟用',
  Ceased: '已銷毀',
  Used: '已使用',
  USED: '已使用',
  Remain: '剩餘',
  All: '全部',
  Unresolved: '待解決',
  Deleted: '已刪除',
  Completed: '已完成',
  Unfinished: '未完成',
  Healthy: '健康',
  active: '已啟用',
  RUNNING: '運行中',
  IMAGE_BUILDING_FAILED: 'Image building failed',
  IMAGE_BUILDING_SUCCESSFUL: 'Image building successful',
  BUILDING_IMAGE: 'Building image',
  waiting: '等待中',
  pending: '等待中',
  updating: '更新中',
  'is updating': '正在更新',
  upgrading: '升級中',
  warning: '異常',
  stopped: '已停止',
  disabled: '未开启',
  deleted: '已刪除',
  unfinished: '未完成',
  terminated: '已終止',
  healthy: '健康',
  unknown: '未知',
  failed: '失敗',
  Failed: '失敗',
  Suspend: '暫停',

  EDIT: '編輯',
  EDIT_TITLE: 'Edit {title}',
  Restart: '重啟',
  PAUSE: '暫停',
  START: '啟動',
  Cordon: '停止調度',
  Uncordon: '啟動調度',
  Destroy: '銷毀',
  Enable: '啟用',
  Disable: '停用',
  RESET: '重置',
  Drain: '疏散',
  Visit: '訪問',
  SELECT: '選擇',
  'Select All': '選擇全部',
  SELECT_ALL: '選擇全部',
  VERSION: '版本',
  LATEST_VERSION: '最新版本',
  LATEST_VERSION_SCAP: '最新版本',
  Source: '來源',
  HEALTH_STATUS: '健康狀態',
  HEALTH_STATUS_SCAP: 'Health status',

  EDIT_INFORMATION: '編輯資訊',
  OK: '確定',
  Cancel: '取消',
  Apply: '應用',
  CLOSE: '關閉',
  PREVIOUS: '上一步',
  NEXT: '下一步',
  Update: '更新',
  Undo: '撤銷',
  Create: '創建',

  PATH: '路徑',
  HOST_PATH: '主机路徑',
  Scheme: '方案',
  type: '類型',
  status: '狀態',
  reason: '原因',
  REASON: '原因',
  message: '訊息',
  MESSAGE: '訊息',
  Count: '數量',
  Total: '總計',
  TOTAL: '總計',
  total: '總計',
  LEVEL: '等級',
  level: '等級',

  Unit: '單位',
  NUM_UNIT: '個',

  NOT_ENABLE: '{resource} 暫未啟用',
  NOT_AVAILABLE: '暫時沒有可用的 {resource}',
  RESOURCE_NOT_FOUND: '沒有找到資源。',
  NO_AVAILABLE_RESOURCE_VALUE: '暫時沒有可用的 {resource}',
  NO_RESOURCE_FOUND: '很抱歉，沒有找到您所尋找的資源。',
  NO_REPO_FOUND_DESC: 'No code repository is found.',
  NO_SERVICE_FOUND: 'No Service Found',
  NO_AVAILABLE_RESOURCE: '暫無可用資源',
  'No Data': '暫無數據',
  NO_RELEVANT_DATA: 'No Relavant Data Found',

  or: '或',
  refresh: '刷新',
  'refresh data': 'refresh data',
  Refresh: '刷新',
  IGNORE_AND_RETRY: '重試',
  More: '更多',
  Collapse: '收起',
  View: '查看',
  Current: '目前',
  'Display all': '顯示全部',
  'Display selected': '顯示已選',
  Display: '顯示',
  Hidden: '隱藏',
  FOLD: '折疊',
  UNFOLD: '展開',

  'Basic Info': '基本資訊',
  'Pod Template': '容器組模板',
  'Volume Settings': '儲存卷設置',
  VOLUME_TEMPLATES: '儲存卷模板',
  VOLUME_TEMPLATE_SETTINGS: '儲存卷模板設置',
  'Storage Device': '儲存設備',
  STORAGE_DEVICES: '儲存設備',
  'Port Settings': '端口設置',
  'Service Settings': '服務設置',
  'Health Checker': '健康檢查器',
  PORT_SETTINGS: '端口設置',
  SERVICE_SETTINGS: '服務設置',
  HEALTH_CHECKER: '健康檢查器',
  HEALTH_CHECK: '健康檢查',
  EXTERNAL_ACCESS: '外網訪問',
  'Advanced Settings': '高級設置',
  ADVANCED_SETTINGS: '高級設置',
  Settings: '設置',
  Configuration: '配置',
  MULTI_CLUSTER_DEPLOYMENT: '多集群部署',
  MULTI_CLUSTER_PROJECT_TIP: '該資源部署在多個集群',

  'Official Document': '官網文件',

  OPTIONAL: '選填',
  PROTOCOL: '協定',
  PROTOCOL_VALUE: '協定：{value}',
  Certificate: '憑證',
  key: '鍵',
  value: '值',
  Value: '值',
  'eg.': '例如：',
  SN_NO: '序號',
  KEY_IN_RESOURCE: '選擇鍵',

  Add: '添加',
  ADD: '添加',
  ADD_STRATEGY: 'Add Strategy',
  'Add ': '添加',
  'Edit ': '編輯',
  Set: '設置',
  New: '新建',
  YES: '是',
  true: '是',
  True: '是',
  TRUE: '是',
  FALSE: '否',
  NO: '否',
  false: '否',
  False: '否',

  'MMMM Do YYYY': 'YYYY 年 M 月 DD 日',
  'YYYY-MM-DD': 'YYYY年MM月DD日',
  'Do HH:mm': 'Do日 HH:mm',
  'Updated just now': '剛剛更新',
  'half month ago': '半個月前',
  'half month': '半個月',
  CREATED_AGO: '創建於 {diff}',
  CREATED_TIME: '創建於 {diff}',
  UPDATE_TIME: '更新於 {diff}',
  MONTH_AGO: '{count} 月前',
  MONTH_TIME: '{count} 月',
  WEEK_AGO: '{count} 週前',
  WEEK_TIME: '{count} 週',
  DAY_AGO: '{count} 天前',
  DAY_TIME: '{count} 天',
  HOUR_AGO: '{count} 小時前',
  HOUR_TIME: '{count} 小時',
  MINUTE_AGO: '{count} 分鐘前',
  MINUTE_TIME: '{count} 分鐘',
  SECOND_AGO: '{count} 秒前',
  SECOND_TIME: '{count} 秒',

  NAME_DESC:
    '最長 63 個字元，只能包含小寫字母、數字及分隔符號("-")，且必須以小寫字母或數字開頭及結尾',
  NAME_TOO_LONG: '最長 63 個字元',

  LONG_NAME_DESC:
    '最長 253 個字元，只能包含小寫字母、數字及分隔符號("-")，且必須以小寫字母或數字開頭及結尾',
  LONG_NAME_TOO_LONG: '最長 253 個字元',
  ALIAS_DESC: '别名可以由任意字元组成，幫助您更好的區分資源，最長 63 個字元。',
  LABEL_FORMAT_DESC:
    'The key and value can contain only uppercase and lowercase letters, numbers, hyphens (-), underscores (_), and dots (.), and must begin and end with an uppercase or lowercase letter or number. The maximum length is 63 characters. If the key contains the domain name, the maximum length is 253 characters.',
  DESCRIPTION_DESC: '描述資訊不超過 256 個字元',
  PROJECT_DESC: '將根據項目資源進行分組，可以按項目對資源進行查看管理',
  MULTI_CLUSTER_PROJECT_EMPTY_DESC:
    '將根據項目資源進行分組，可以按項目對資源進行查看管理',
  DESCRIPTION: '描述資訊',

  NAME_EMPTY_DESC: '請輸入名稱。',
  PARAMETER_NAME_EMPTY_DESC: 'Please set the parameter name.',
  ENTER_INTEGER_OR_PERCENTAGE: '請輸入值',
  MAX_UNAVAILABLE_EMPTY:
    'Please set the maximum number of unavailable Pod replicas allowed during the update process.',
  MAX_EXTRA_EMPTY:
    'Please set the maximum number of extra Pod replicas allowed during the update process.',
  'Please input value': '請輸入值',
  'Please select workspace': '請選擇企業空間',
  'Please select project': '請選擇項目',
  VERSION_EMPTY_DESC: '請選擇版本',
  'Filter by keyword': '請輸入關鍵字過濾',
  'Search by keyword': '請輸入關鍵字進行尋找',
  SEARCH_BY_NAME: '請輸入名稱進行尋找',
  NAME_VALIDATION_FAILED:
    '避免使用前綴為 kube- 的名稱，因為它是為 Kubernetes 系統命名空間保留的',
  NAME_EXIST_DESC: '名稱已存在',
  KEY_EXIST_DESC: 'The key already exists.',
  EMPTY_KEY_DESC: 'Please enter a key.',
  DUPLICATE_KEYS: '無法添加重複的 key',
  EMPTY_KEY: '無法添加空的 key',

  'Log Out': '登出',
  About: '關於',
  'User Settings': '個人設置',
  Language: '語言',

  READ: '讀',
  ReadOnly: '只讀',
  WRITE: '寫',
  ReadAndWrite: '讀寫',
  'Not Mount': '不掛載',
  OUT: '出',
  IN: '入',
  Read: '讀',
  READ_ONLY: '只讀',
  READ_ONLY_LOW: 'read-only',
  READ_AND_WRITE_LOW: 'read and write',
  Write: '寫',
  READ_AND_WRITE: '讀寫',
  NOT_MOUNT: '不掛載',
  Out: '出',
  In: '入',
  Upstream: '上行',
  Downstream: '下行',
  Outbound: '流出',
  Inbound: '流入',

  exists: '已存在',

  Quota: '配額',
  'No Limit': '無限制',
  'Remaining Quota': '剩餘配額',

  TOTAL_ITEMS: '共 {num} 個項目',

  SEARCH: '輸入查詢條件進行過濾',

  DELETE_TITLE_SI: '{type} 刪除確認？',
  DELETE_TITLE_PL: '{type} 刪除確認？',
  DELETE_SERVICE: 'Delete Service',
  DELETE_MULTIPLE_SERVICES: 'Delete Multiple Services',
  DELETE_WORKLOAD: 'Delete Workload',
  DELETE_MULTIPLE_WORKLOADS: 'Delete Multiple Workloads',
  DELETE_DESC:
    '確定刪除 {type} <strong>{resource}</strong> ？ {type} 刪除後將無法恢復。',
  DELETE_RESOURCE_TYPE_DESC:
    '請輸入 {type} 名稱 <strong>{resource}</strong> 確保您已了解操作所帶來的風險。',
  DELETE_RESOURCE_TYPE_DESC_SI:
    '請輸入 {type} 名稱 <strong>{resource}</strong> 確保您已了解操作所帶來的風險。',
  DELETE_RESOURCE_TYPE_DESC_PL:
    '請輸入 {type} 名稱 <strong>{resource}</strong> 確保您已了解操作所帶來的風險。',
  DELETE_APP_RESOURCE_TIP:
    '資源被應用 <strong>{app}</strong> 管理, 刪除後可能影響此應用的正常使用。請輸入 {type }名稱 <strong>{resource}</strong> 確保您已了解操作所帶來的風險。',

  REMOVE_USER_TIP: '確定移除用戶 <strong>{username}</strong> ？',

  REMOVE_MEMBER_TIP: '確定移除成員 <strong>{resource}</strong> ？',

  REMOVE_GROUP_TIP: '確定移除組織 <strong>{resource}</strong> ？',

  'Error Tips': '錯誤提示',
  TIPS: 'Tips',
  CREATE_BY_YAML_DESC: 'Customize the settings in the YAML file.',
  'Added Successfully': '添加成功',
  CREATE_SUCCESSFUL: '創建成功',
  ADDED_SUCCESS_DESC: '添加成功。',
  UPDATE_SUCCESSFUL: 'Updated successfully.',
  DELETE_SUCCESSFUL: '刪除成功。',
  'Canceled Successfully': '取消成功',

  EVENT_NORMAL: '正常',
  EVENT_WARNING: '異常',

  EDIT_MODE: '編輯模式',
  LOAD_MORE: '載入更多',
  'All Repositories': '全部倉庫',

  'Version Info': '版本資訊',
  HOMEPAGE: '首頁',
  'Params Configuration': '參數配置',
  ADD_PARAMETER: '添加參數',
  'Add Param': '添加參數',
  NO_PARAMETERS: '暫無參數。',
  'Back To List': '返回列表',
  SERVICE_LIST: '列表',
  TIME_RANGE: '時間範圍',
  TIME_RANGE_SCAP: 'Time range',
  'Updated at': '更新於',
  'Sure to delete': '確認刪除',
  'Sure to remove': '確認移除',
  ACTIVITY: '活動',
  RUN_RECORDS: 'Run Records',
  VIEW_RECORDS: 'View Records',
  Task: '任務',
  STEPS_COMPLETE_TOTAL: 'Steps: {complete}/{total}',
  Success: '成功',
  description: '描述',
  Agent: '代理',
  Confirm: '確認',
  STAGE: '階段',
  DEFAULT_VALUE: '預設值',
  Username: '用戶名稱',
  'Unknown User': '未知用戶',
  secret_text: '秘密文本',
  domain: '域名',
  Domain: '域名',
  Account: '帳戶',
  Strategy: '策略',
  secret: '密鑰',
  CONTRIBUTORS: '貢獻者',
  EVERYONE: '所有人',
  NOBODY: '無',
  'Add Task': '添加任務',
  Optional: '可選',
  Record: '紀錄',
  SERIAL_NUMBER: 'Serial number',
  Records: '紀錄',
  Detail: '詳情',
  platform: '平台',
  RESELECT: '重新選擇',
  body: '内容',
  AUTHOR: '作者',
  SIZE: '大小',
  password: '密碼',
  NONE: '無',
  To: '至',
  to: '至',
  Download: '下載',
  PAUSED: '已暫停',
  PARAM_REQUIRED: '此參數不能為空。',
  Images: '鏡像',
  filename: '文件名稱',
  DETAILS: '詳情',
  NODES: '節點',
  FILE_OVERSIZED_TIP: '文件過大，超過 2M 不能上傳！',
  'Load more': '載入更多',

  'Resource List': '資源列表',

  PLATFORM_LEVEL_ACCESS_CONTROL: '平台級的訪問控制',

  NOT_FOUND_DESC:
    '🙇 對不起沒有找到相關資源，系統將在 {time}s 後返回 <a href="{link}">工作台</a>',
  DETAIL_NOT_FOUND_DESC:
    '🙇 對不起沒有找到相關資源，返回 <a href="{link}">{title}</a>',
  TOOLBOX: '工具箱',
  TOOLBOX_DESC: '提供紀錄、事件、審計等相關查詢工具',
  'Analysis Tools': '分析工具',
  'Control Tools': '控制工具',
  THIRD_PARTY_TOOLS: '第三方工具',

  LOGGING: '紀錄',
  RESOURCE_EVENTS: 'Resource Events',
  AUDIT_LOGS: 'Audit Logs',
  logging: '紀錄',
  Auditing: '審計',
  auditing: '審計',
  LOG_SEARCH: '紀錄查詢',
  CONTAINER_LOG_SEARCH_DESC: '針對企業空間、項目、資源等多維度的紀錄查詢工具。',
  KUBECTL_DESC: '目前集群客戶端命令行工具',
  TOOLBOX_KUBECTL_DESC: '操作多集群的客戶端命令行工具',

  KUBECONFIG_DESC: '用於配置目前集群訪問資訊的文件',

  event: '事件',
  events: '事件',
  EVENT_CREATE_DESC: '您可以改變搜索條件重新查詢',
  EVENT_SEARCH: '事件查詢',
  RESOURCE_EVENT_SEARCH_DESC:
    '針對企業空間、項目、資源等多維度的事件查詢工具。',
  EVENT_DESC: '事件查詢（Event）是 KubeSphere 提供的平台内資源的歷史事件查詢',
  'Search By Condition': '根據條件進行尋找',
  'search condition': '搜索條件',
  'Search tips': '搜索提示',
  Preferences: '偏好設置',
  'Data Sources': '數據來源: 内建服務',
  'Number of events': '事件數量',
  'workspaces found': '共找到 {count} 個企業空間',
  'rules text': '如何定義操作審計收集規則？ 🤔',
  'rules desc':
    'KubeSphere可以根據您設置的規則進行操作審計的收集，點擊查看如何定義規則。',
  CATEGORY: '類别',
  Resource: '資源',
  EARLIEST_START_TIME: '最早發生時間',
  LATEST_START_TIME: '最近發生時間',
  'Related resources': '關聯資源',
  OPERATION_DETAILS: '操作詳情',
  'Event metadata': '事件元數據',

  'Auditing Operating': '操作審計',
  AUDIT_LOG_DESC: '針對企業空間、項目、資源等多維度的操作審計查詢工具。',
  verb: '操作行為',
  'Operation Account': '操作帳號',
  'Source IP': '來源 IP',
  Subresource: '子資源',
  'Status Code': '狀態代碼',

  NanoSeconds: '奈秒',
  MicroSeconds: '微秒',
  MilliSeconds: '毫秒',
  Seconds: '秒',
  Minutes: '分鐘',
  Hours: '小時',
  Days: '天',

  unit: '單位',
  time: '時間',
  email: '郵件',
  REQUIRED: '必填',
  Successful: '成功',
  Unknown: '未知',
  NOT_RUNNING_YET: '未運行',
  successful: '成功',
  Tag: '標籤',
  PATTERN_NAME_INVALID_TIP:
    'Invalid name. The name can contain only lowercase letters, numbers, and hyphens (-).',
  NO_MATCHING_RESULT_FOUND: '暫時沒有找到符合過濾條件的資源',
  'You can try to': '您可以嘗試',
  'clear search conditions': '清空過濾條件',
  CONTENT_NOT_SAVED_TIPS: '内容已經修改但並未保存',
  SAVE_EDIT_HINTS: '請確認修改的内容是正確的，您可以保存設置或者取消設置。',

  IN_PROGRESS: '設置中',
  CURRENT: 'Current',
  CURRENT_VALUE: 'Current: {value}',
  TARGET_CURRENT: '{target} (Current: {current})',
  NOT_SET: '未設置',
  FINISHED: '已設置',

  'Learn more': '了解更多',

  KS_DESCRIPTION:
    'KubeSphere 是一款開源項目，在目前主流容器調度平台 Kubernetes 之上構建的企業級分佈式多租戶容器管理平台，提供簡單易用的操作界面以及引導式操作方式，在降低用戶使用容器調度平台學習成本的同時，極大降低開發、測試、維運的日常工作的複雜度。',

  REPS_ADDRESS: '項目地址',
  ISSUE_FEEDBACK: '問題反饋',
  PART_IN_DISCUSSION: '參與討論',
  CODE_CONTRIBUTE: '貢獻代碼',
  GITHUB_STAR: '點亮Star',

  CONDITION_STATUS_ANALYSE: '狀態分析 (Conditions)',

  NAV_PROJECTS: '項目管理',
  NAV_ACCOUNTS: '帳戶管理',

  'Session timeout or this account is logged in elsewhere, please login again':
    '會話超時或此帳戶在其它地方登入，請重新登入',

  NOTE: '請注意',

  VolumeSnapshot: '儲存卷快照',
  VOLUME_SNAPSHOT: '儲存卷快照',
  VOLUME_SNAPSHOT_PL: 'Volume Snapshots',
  VOLUME_SNAPSHOT_LOW: 'volume snapshot',
  'Volume Snapshot': '儲存卷快照',

  CREATE_STATUS_SUCCESSFUL: '創建成功',
  CREATE_STATUS_UPDATING: '創建中',
  CREATE_STATUS_FAILED: '創建失敗',
  CREATE_STATUS_DELETING: '删除中',

  DATA_SOURCE: '數據源',

  EMPTY_WRAPPER: '未發現{resource}',

  'User Guides': '用戶指南',
  'Quick Support': '快速獲取幫助',
  'Developer Community': '開發者社區',
  NO_HISTORY_TITLE: 'No Recently Accessed Resource Found',
  NO_HISTORY_DESC: 'You can access platform resources.',
  USER_GUIDES_DESC: '最詳盡的 KubeSphere 用戶指南文件',
  DEVELOPER_DESC: '透過在開發者社區提出問題獲得幫助',
  API_DOCS_DESC: '最詳盡的 KubeSphere API 文件',
  GITHUB_ISSUES_DESC: '透過在 GitHub 提出 Issue 獲得幫助',

  ENV_PRODUCTION: '生產環境',
  ENV_DEVELOPMENT: '開發環境',
  ENV_TESTING: '測試環境',
  ENV_DEMO: '示範環境',

  HOW_TO_MODIFY_PLATFORM_INFO: '如何修改平台資訊？',
  PLATFORM_INFO_DESC:
    'Overview of the platform information. You can view and customize the platform information.',
  PLATFORM_SETTINGS_SELECTOR_DESC: '客製化平台的系統配置',

  EVENT_AGE: '發生時間',
  EVENT_AGE_DATA: '{lastTime}<br/>({count} times over {duration})',
  EVENT_AGE_DATA_TWICE: '{lastTime}<br/>(twice over {duration})',
  SOURCE: '來源',

  RESOURCE_CONSUMPTION_STATISTICS: '資源消費統計',
  METERING_AND_BILLING_DESC: '查看消費情况',

  // Workbench
  CLUSTER_COUNT_SI: 'Cluster',
  CLUSTER_COUNT_PL: 'Clusters',
  LAST_LOGIN_TIME: 'Last Login: ',
  APP_TEMPLATE_SCAP_PL: 'App templates',
  ACCOUNT_PL: 'Accounts',

  // Container Details Page
  CONTAINER_DETAILS_PAGE_SCAP: '容器詳情頁。',
  CPU_VALUE: 'CPU：{value}',
  MEMORY_VALUE: 'Memory：{value}',

  // Container Log Search
  CONTAINER_LOG_SEARCH: 'Container Log Search',
  RESOURCE_EVENT_SEARCH: 'Resource Event Search',
  AUDIT_LOG_SEARCH: 'Audit Log Search',

  // Toolbox
  CONTROL_TOOL: 'Control Tool',
  ANALYSIS_TOOLS: 'Analysis Tools',
  application: '應用',
  APP_PL: '應用',
  DEPLOYED_APPS: '已部署應用',
  CREATE_APP: '部署新應用',
  'Deploy App': '部署應用',
  CREATE_COMPOSED_APP: '構建應用',
  'App Template': '應用模板',
  APP_TEMPLATE: 'App Template',
  APP_TEMPLATE_PL: 'App Templates',
  TEMPLATE_BASED_APP_PL: 'Template-Based Apps',
  NO_TEMPLATE_BASED_APP_FOUND: 'No Template-Based App Found',
  TEMPLATE_BASED_APP_EMPTY_DESC:
    'Please create an app from the KubeSphere App Store or an app template.',
  APP_TEMPLATE_LOW: 'app template',
  APP_TEMPLATE_EMPTY_DESC: 'Please create an app template.',
  DEPLOY: '部署',
  APP_TYPES_Q: '應用類型',
  TOTAL_APPS: '共計 {num} 個應用',
  TOTAL_COLLECTIONS: '共計 {num} 個接收者',
  Upgrade: '升級',
  Rollback: '回滾',

  'Create Application by Service': '通過服務構建應用',

  APP_VERSION: '應用版本(可選)',
  APPLICATION_GOVERNANCE: '應用治理',
  APPLICATION_GOVERNANCE_SCAP: 'Application governance',
  APP_COMPONENT_PL: '應用組件',
  'Application Component': '應用組件',
  'Application Route': '應用路由',
  TRAFFIC_MANAGEMENT: '流量管理',
  NETWORK_TRAFFIC: 'Network Traffic',

  'Application governance is not enabled': '應用治理未啟用',

  'Build an app by services': '通過服務構建應用',
  'Build an app by app template': '應用模板部署',
  'Choose existing services or create new service components to build an app':
    '選擇已有服務或者新建服務組件來構建應用',
  'Deploy applications with one-click application templates provided by Kubesphere':
    '通過 Kubesphere 提供的應用模板一鍵部署應用',
  'Sample apps can help you get started with app creation and app governance':
    '示例應用可以幫助您快速入手應用創建, 以及應用治理功能',

  ADD_SERVICE: '添加服務',
  ADD_ROUTE: 'Add Route',
  'Add Component': '添加組件',
  EDIT_GRAYSCALE_RELEASE_JOB: '編輯組件',
  'Add New Component': '添加新組件',

  'Application Icon': '應用圖示',

  'Component Version': '組件版本',

  'Please input an application name': '請輸入應用名稱',
  APP: '應用',
  APP_LOW: '應用',
  'Service components should not be empty': '服務組件不能為空',
  'Please finish the sub form first': '請完成子表單的編輯',

  SERVICE_PORTS: '服務端口',
  'Traffic Entry': '流量入口',
  'Service Ports': '服務端口',
  TRAFFIC_ENTRY: '流量入口',

  APP_INTRODUCTION: 'App Introduction',

  COMPOSED_APP_PL: '自制應用',
  NO_COMPOSED_APP_FOUND: 'No Composed App Found',
  'Composing App': '自制應用',

  'Workload Type': '負載類型',

  'Current Version': '目前版本',

  'Cluster Selection': '集群選擇',

  'Traffic Monitoring': '流量監測',

  'Traffic (requests per second)': '流量(每秒請求)',
  TCP_INBOUND_TRAFFIC: 'TCP 入站流量',
  TCP_OUTBOUND_TRAFFIC: 'TCP 出站流量',

  'Connection timeout': '連接超時時間',
  'TCP connection timeout.': 'TCP 連接超時時間。',
  'Maximum requests': '最大請求數',
  'Maximum pending requests': '最大等待請求數(等待列隊的長度)',
  'Max request retries': '最大請求重試次數',
  'The maximum number of retries to the target host within the specified time.':
    '在指定時間内對目標主機最大重試次數。',
  'Max number of requests per connection': '每條連接最大請求數',
  'If the maximum number of requests in the backend connection is set to 1, the keep alive feature is disabled.':
    '對後端連接中最大的請求數量若設為1則會禁止 keep alive 特性。',
  'Max number of connections': '最大連接數',
  'The maximum number of HTTP1 or TCP connections to the target host.':
    '到目標主機 HTTP1 或 TCP 連接的最大數量。',
  'Load balance algorithm': '負載平衡算法',
  'Session retention': '會話保持',

  METHOD: '方式',
  CREATION_METHOD: 'Creation Method',
  'According to the HTTP header': '根據 HTTP header',

  On: '開啟',
  Off: '關閉',

  Traffic: '流量',
  Send: '發送',
  Receive: '接收',

  'Success rate': '成功率',

  'Circuit Breaker': '熔斷器',

  APPLICATIONS_DESC:
    '應用為用戶提供完整的業務功能，由一個或多個特定功能的組件組成。',
  CREATE_APP_DESC:
    '輕量化、可移植、自包含的軟體封裝技術，使應用可以在幾乎任何地方以相同的方式運行。',
  APPLICATION_GOVERNANCE_DESC:
    'Enable Application Governace to use the Traffic Monitoring, Grayscale Release, and Tracing features for the app.',

  VERSION_DESC: '最長 16 個字元，只能包含小寫字母及數字',

  APP_ICON_TIP: '點擊上傳應用圖示，尺寸最大為 120px * 120px',

  CLUSTER_NAME_DESC:
    '最長 53 個字元，只能包含小寫字母、數字及分隔符號("-")，且必須以小寫字母或數字開頭及結尾',

  SERVICE_PORT_NAME_DESC:
    '端口的名字必須遵循如下格式 <protocol>[-<suffix>]，可以是 http、http2、 grpc、 mongo、 或者 redis 作為 <protocol> ，這樣才能使用 Istio 的路由功能。例如 name: http2-foo 和 name: http 都是有效的端口名稱，而 name: http2foo 不是。',

  LB_ALG_DESC:
    '支持標準的負載平衡算法</br>ROUND_ROBIN：輪詢，預設負載平衡算法。</br>LEAST_CONN：随機選取兩個健康的主機，再從所選取的兩個主機中選擇一個連接數較少的主機。</br>RANDOM：從所有健康的主機中，随機選取一個。',
  LB_ROUND_ROBIN: '輪詢(ROUND_ROBIN)',
  LB_LEAST_CONN: '最小連接數(LEAST_CONN)',
  LB_RANDOM: '随機(RANDOM)',

  LAST_NUM_RECORDS: '最近 {num} 條紀錄',
  'Last {hour} hour': '最近 {hour} 小時',
  'Last {hour} hours': '最近 {hour} 小時',
  'Last {day} days': '最近 {day} 天',

  APP_WORKLOAD_TYPE_DESC: '支持無狀態服務(部署)及有狀態服務(有狀態副本集)',

  TYPE_SERVICE_DEPLOYMENT: '無狀態服務（部署）',
  TYPE_SERVICE_STATEFULSET: '有狀態服務（有狀態副本集）',
  TRACING_UNAVAILABLE: '暫時無法使用 Tracing',
  TRAFFIC_MONITORING_UNAVAILABLE_DESC:
    '應用長時間未收到請求，請訪問應用後嘗試流量治理',
  'Application components combine workloads and services as components in applications':
    '應用組件組合了工作負載和服務作為應用中的組件',
  'If you need to access applications by application route, add routing rules':
    '如果您需要將應用通過應用路由的方式進行訪問，請添加路由規則',

  'No result found': '未查詢到結果',
  TRACING_NO_DATA_DESC: '請嘗試其它查詢條件',
  TRACING: 'Tracing',
  NUM_SPAN_SI: '{num} span',
  NUM_SPAN_PL: '{num} spans',
  NUM_ERROR_SI: '{num} error',
  NUM_ERROR_PL: '{num} errors',
  'Deploy sample app Bookinfo': '部署示例應用 Bookinfo',
  SAVE_FORM_TIP: '請先保存目前表單',
  'Add Component Successfully': '添加組件成功',

  'Connection pool management': '連接池管理',
  CONNECTION_POOL_TIP:
    '為應用程序創建固定數量的連接對象，保存在池中以供重複使用。每次訪問時會從池中獲取已存在的連接對象，使用完畢後，連接對象將返回池中。',
  'Continuous error response (5xx) number': '連續錯誤響應(5xx)個數',
  'The number of consecutive 5xx errors in one inspection cycle':
    '在一個檢查週期内連續出现5xx錯誤的個數',
  'Inspection period (unit: s)': '檢查週期(單位: s)',
  'The response code will be filtered in the inspection cycle.':
    '將會對檢查週期内的響應碼進行篩選',
  'Pod isolation ratio (unit: %)': '容器組隔離比例(單位: %)',
  'Base ejection time (s)': '短隔離時間(s)',
  'Hash based on a specific HTTP header.':
    '根據 HTTP header 中的内容獲取哈希值',
  'Hash based on HTTP cookie.': '根據 HTTP cookie 中的内容獲取哈希值',
  'Hash based on the source IP address.': '根據來源 IP 獲取哈希值',
  'Based on HTTP header': '根據 HTTP header',
  'Based on HTTP cookie': '根據 HTTP cookie',

  'Called Services': '調用服務',
  'Called Depth': '調用深度',
  'Services & Operations': '服務與操作',
  Tags: '標籤',
  Process: '進程',
  Log: '紀錄',

  POD_ISOLATION_RATIO_DESC:
    '允許容器組被隔離的最大比例。採用向上取整，若 10 個實例，設為 13% 則最多會隔離 2 個實例',
  BASE_EJECTION_TIME_DESC:
    '容器組第一次被隔離的時間，之後每次隔離時間為次數與最短隔離時間的乘積',
  CIRCUIT_DESC:
    '熔斷機制是應對雪崩效應的一種微服務鏈路保護機制。當扇出鏈路的某個微服務不可用或者響應時間太長時，會進行服務的降級，進而熔斷該節點微服務的調用，快速返回錯誤的響應資訊。當檢測到該節點微服務調用響應正常後，恢復調用鏈路。',

  'Please input component version': '請輸入組件版本',
  INVALID_VERSION_TIP: '无效版本格式。',
  WORKLOAD_NAME_EXIST: '工作負載 {name} 已存在',

  APP_TYPES_A:
    'KubeSphere 支持來自於應用商店和應用倉庫的應用部署(基於 Helm)，同樣也支持自制應用(Application CRD)。',

  APPLICATION_SERVICE_DESC:
    '根據應用中服務類型的不同設置不同類型的服務組件，支持無狀態服務和有狀態服務',
  APP_BASIC_INFORMATION_DESC: 'ˇ對應用的名稱描述資訊等基本的資訊定義',

  HOW_TO_USE_APP_GOVERN_Q: '如何使用應用治理？',
  HOW_TO_USE_APP_GOVERN_A:
    '使用應用治理需要創建自制應用並對每項服務開啟服務治理功能',

  'App Types': '應用的類型',
  TIP_APP_TYPE:
    'KubeSphere 支持來自於應用商店和應用倉庫的應用部署(基於 Helm)，同样也支持自制應用(Application CRD)。',
  'How to use Application Governance': '如何使用應用治理',
  TIP_APP_GOVERNANCE:
    '使用應用治理需要創建自制應用並對每項服務開啟服務治理功能',
  'App store deployment': '應用商店部署',
  FROM_APP_STORE: '來自應用商店',
  FROM_APP_TEMPLATE: '來自應用模板',
  'From third party Helm': '來自第三方 Helm',
  FROM_APP_STORE_DESC:
    '來自KubeSphere官方應用商店，提供高質量應用和簡易的部署方式',
  FROM_APP_TEMPLATE_DESC:
    '來自於企業空間的自制應用模板以及應用倉庫中添加的第三方 Helm 應用模板',
  COMPOSED_APP_EMPTY_DESC:
    '通過資源編排的方式發佈服務構建應用(支持應用治理功能)',
  APP_TEMPLATES_MODAL_DESC:
    '應用模板來自於企業空間和第三方的 Helm 應用模板，支持一鍵部署並可通過視覺化的方式在 KubeSphere 中展示並提供部署及管理的功能',
  APP_REPOS_DESC:
    '應用倉庫來自於第三方的 Helm Chart Repo，通過視覺化的方式在 KubeSphere 中展示並提供部署及管理功能，用戶可以基於應用倉庫中的模板快速地一鍵部署應用。',

  CURRENT_WORKSPACE: '來自企業空間',
  SELECT_APP_REPOSITORY: 'Select app repository',
  APP_CREATE_SERVICE_DESC: '添加有狀態服務或無狀態服務',
  CREATE_SERVICE_DESC: 'Select a Service creation method.',
  'Add an Internet access rule for the application': '為應用添加外網訪問規則',
  ROUTE_SETTINGS: 'Route Settings',
  ROUTE_SETTINGS_DESC: '可以設置應用的外網訪問規則 (Ingress)',

  APPLICATION_GOVERNANCE_ENABLED: '微服務已啟用',
  APPLICATION_GOVERNANCE_DISABLED: '微服務未啟用',

  TRAFFIC_MANAGEMENT_NO_MICROSERVICE_TIP:
    '流量治理依賴於微服務模組，目前集群未啟用微服務模組',
  TRACING_NO_MICROSERVICE_TIP:
    'Tracing 依賴於微服務模組，目前集群未啟用微服務模組',
    APP_TEMPLATE_DESC:
    'KubeSphere 提供全生命週期的應用管理，可以上傳或者創建新的應用模板，並且快速部署它們，也可以通過應用商店進行發佈應用。',
  APP_TEMPLATE_CREATE_DESC:
    'KubeSphere 提供全生命週期的應用管理，可以上傳或者創建新的應用模板，並且快速部署它們，也可以通過應用商店進行發佈應用。',
  DEVELOP_APP_TITLE: '開發應用模板',
  DEVELOP_APP_DESC:
    '您可以上傳 Helm Chart 或者使用 KubeSphere 提供的資源編排工具進行應用模板的開發',
  HOW_PUBLISH_APP_TITLE: '如何發佈已有應用',
  HOW_PUBLISH_APP_DESC:
    'KubeSphere 目前支持將已有應用的 Helm Chart 上傳至企業空間的應用模板，提交審核後，可以將應用發佈在應用商店中。',
  HOW_APP_DEPLOY_TITLE: '如何部署和測試應用',
  UPLOAD_TEMPLATE: '上傳模板',
  APPS_CREATE_DESC:
    'KubeSphere 提供全生命週期的應用管理，可以上傳或者創建新的應用模板，並且快速部署它們，也可以通過應用商店進行發佈應用。',

  APPS_MANAGEMENT: '應用管理',
  'Apps Management': '應用管理',
  APP_STORE_MANAGEMENT: '應用商店管理',

  APP_INFORMATION: '應用資訊',
  'Base Info': '基本資訊',
  APP_DETAILS: '應用詳情',
  'App Config': '應用配置',
  APP_SETTINGS: 'App Settings',
  'Current App Config': '當前應用配置',
  'App Details': '應用詳情',
  CURRENT_APP_SETTINGS_READONLY: '當前應用配置',
  TARGET_APP_SETTINGS: 'Target App Settings',
  'New App Config': '新的應用配置',
  Introduction: '使用說明',
  'Terms of service': '服務條款',
  CONFIG_FILE: '配置文件',
  CHART_FILES: '配置文件',
  'Update Log': '更新紀錄',
  NO_UPDATE_LOG_DESC: 'No update log is found.',
  Note: '提示',
  APP_NAME_DESC: 'Name of the app. The maximum length is 20 characters.',
  'Select file': '選擇檔案',
  'Application Name': '應用名稱',
  'Application Version': '應用版本',
  APP_DESCRIPTION_DESC:
    'Description of the app. The maximum length is 120 characters.',
  APP_DETAIL_DESC: '在用戶搜索應用時會非常有幫助',
  'Upload Icon': '上傳圖標',
  APP_ICON_NOTE: '96px * 96px 以内 JPG 或者 PNG',
  APP_ICON_FORMAT: '格式: PNG 背景透明最佳',
  APP_ICON_SIZE: 'Icon size: 96x96 pixels',
  'Start editing': '開始編輯',
  File: '檔案',

  APP_STORE_DESC: '對已上架、已下架的應用進行管理',
  PROVIDER: '服務商',
  APP_CATEGORY: '應用分類',
  'Release / Suspended Time': '上架 (下架) 時間',

  APP_REVIEW: '應用審核',
  APP_REVIEWS: '應用審核',
  APP_RELEASE_DESC:
    'KubeSphere supports reviewing the contents of applications to be released. You can view the contents and approve or reject to publish the applications.',
  APP_REVIEW_EMPTY_DESC: 'No unreleased app is found.',
  APP_REVIEWS_CREATE_DESC: '對應用上架提供審核功能',
  UNREVIEWED: 'Unreviewed',
  REVIEWED: 'Reviewed',
  'Review Object': '審核對象',
  APP_RELEASE: '應用上架',
  Operator: '操作者',
  'Apply No / Reject Reason': '申請編號 / 拒絕原因',
  'Review Status': '審核狀態',
  Submitter: '提交者',
  Handle: '處理',
  REVIEW_CONTENT: '審核内容',
  APP_DETAILS_DESC: 'View details of the app to be released.',
  SUBMIT_REVIEW_DESC: 'Submit the app for release.',
  REVIEWS_CREATE_DESC: '暫時沒有相關的應用審核數據',

  'App Version': '應用版本',
  CURRENT_APP_VERSION: '當前應用版本',
  TARGET_APP_VERSION: 'Target App Version',
  'Service Provider': '服務提供商',
  'App Introduction': '應用介紹',
  'Reject Reason': '拒絕原因',
  REJECT_REASON_DESC: '請填寫拒絕審核的原因',
  REJECT_REASON_TIP: '請填寫拒絕原因',
  ENTER_VERSION_NUMBER_TIP: 'Please enter a version number.',
  APP_CATEGORIES_DESC:
    '您可以在此頁面創建、編輯、刪除分類，對已上架的應用進行分類管理。',
  AUDIT_RECORD_CREATE_DESC: '暫無相關的審核紀錄數據',

  APP_CATEGORY_PL: '應用分類',
  APP_CATEGORY_EMPTY_DESC: '該分類暫無綁定的應用。',
  ALL_CATEGORIES_VALUE: 'All Categories ({value})',
  'Adjust App Category': '調整應用分類',
  CHANGE_CATEGORY_DESC: '應用分類將決定該應用在應用商店中的分類',
  CHANGE_CATEGORY: '調整分類',
  DELETE_CATEGORY_WARNING:
    '該分類綁定了 <strong>{total}</strong> 個應用，請先將這些應用調整到其它分類後才能刪除',
  DELETE_CATEGORY_DESC:
    'Are you sure you want to delete the category <b>{name}</b>?',
  CHANGED_SUCCESSFULLY: 'Changed successfully.',

  APP_TEMPLATES_DESC:
    'KubeSphere 提供全生命週期的應用管理，可以上傳或者創建新的應用模板，並且快速部署它們，也可以通過應用商店進行發佈應用。',
  UPLOAD_HELM_TITLE: '上傳 Helm 配置文件',
  UPLOAD_HELM_CHART_DESC: '上傳已有的 Helm chart ',
  'Edit App Informatio': '編輯應用資訊',
  EDIT_APP_DESC: '對應用的基本資訊進行設置',
  'App Version Types': '交付類型',
  'Create Time': '創建時間',
  'Add Version': '添加版本',
  'New Version': '添加版本',
  'App Deploy': '應用部署',
  'Test Deployment': '測試部署',
  MODIFY_SUCCESSFUL: '修改成功',
  ADD_VERSION_SUCCESSFUL: '添加版本成功',
  'Submit Successfully': '提交成功',
  'Cancel Successfully': '取消成功',
  'Release Successfully': '發佈成功',
  REJECT_SUCCESSFUL: '拒絕成功',
  'Suspend Successfully': '下架成功',
  'Recover Successfully': '上架成功',
  'Activate Successfully': '上架成功',
  'In Project': '所屬項目',

  CREATE_APP_TEMPLATE: '創建應用模板',
  CREATE_APP_TEMPLATE_DESC:
    '輕量化、可移植、自包含的軟體封裝技術，使應用可以在幾乎任何地方以相同的方式運行。',
  RESOURCE_TOOL_TITLE: '通過資源編排工具創建',
  RESOURCE_TOOL_DESCRIPTION:
    'KubeSphere 提供了視覺化的資源編排工具，您可以通過資源預編輯來創建應用模板，部署測試',
  HELM_CHART_FORMAT_DESC: '支持 tar.gz 和 tgz 格式',
  UPLOAD: '開始上傳',
  'Start Create': '開始創建',
  APP_CREATE_GUIDE: '完整的應用開發規範請參考',
  HELM_DEVELOP_GUIDE: 'Helm 規範及應用開發',

  UPLOAD_SUPPORT_FORMAT: '文件格式支持 tar.gz 和 tgz',
  UPLOADING: '正在上傳',
  UPLOAD_SUCCESSFUL: '上傳成功',
  UPLOAD_AGAIN_TIP: 'Please try again.',
  FILE_FORMAT_PACKAGE: '文件格式支持 tar.gz 和 tgz',
  FILE_FORMAT_ICON: '圖示格式支持 png 和 jpg',
  FILE_FORMAT_SCREENSHOTS: '截圖格式支持 png 和 jpg',
  FILE_MAX_PACKAGE: '配置包大小不能超過 2M',
  FILE_MAX_ICON: '圖示大小不能超過 20KB',
  FILE_MAX_SIZE_ICON: 'The maximum size of the icon is 96x96 pixels.',
  FILE_MAX_SCREENSHOTS: '截圖大小不能超過 2M',
  UPLOAD_PACKAGE_OK_NOTE:
    'The version already exists. Please upload another version.',
  'Delete picture': '刪除圖片',
  'Re-upload': '重新上傳',
  'Package problems': '文件有問題',
  'Upload again': '重新上傳',
  'App Name': '應用名稱',
  'Select File': '選擇檔案',
  APP_SCREENSHOTS: '應用截圖',
  'Upload Screenshots': '上傳截圖',

  'Edit App Information': '編輯應用資訊',
  Uncategorized: '未分類',
  'Category Name': '分類名稱',
  CATEGORY_NAME_DESC:
    'The name can contain any characters and the maximum length is 20 characters.',
  ENTER_CATEGORY_NAME_TIP: '請輸入分類名稱。',
  ICON_DESC: '請選擇一個圖示來標示分類',
  'Please select icon': '請選擇圖示',
  WRONG_ADDRESS_TIP:
    'Incorrect format. Please enter a correct website address.',

  Screenshot: '截圖',
  'Version No': '版本號碼',
  'Deploy now': '立即部署',
  'Deploy after login': '登入後部署',
  'Evaluation stars': '綜合評價',
  'Business introduction': '業務介紹',
  'Company website': '公司官網',
  'Time of entry': '入駐時間',
  Discoveries: '發現',
  NEW_APPS: '最新上架',
  screenshots: '張截圖',
  'Delete all': '刪除全部',
  'A general introduction to the application': '對應用的概括性介紹',
  'Detail Introduction': '詳細介紹',
  'Very helpful when users search for apps': '在用戶搜索應用時會非常有幫助',
  Icon: '圖示',
  'Format png/svg background transparency is the best':
    '格式： png/svg 背景透明最佳',
  CHOOSE_APP_CATEGORY_DESC: 'Select a category for the app.',
  'Service Provider Website': '服務商網站',
  SERVICE_PROVIDER_WEBSITE_DESC:
    'Official website address of the service provider.',
  MODIFY_VERSION_TIPS: '每次修改的内容都將跟随下一次版本上架而真正生效。',
  UNDER_REVIEW_TIPS: '目前應用有版本正在審核中，以下資訊暫時不可更改',

  'Instance Name': '實例名稱',
  INDEX_SUCCESS_TIP: '同步成功。',

  NO_DEPLOY_RUNTIME_NOTE: '項目中沒有可用的部署運行環境',

  UPLOAD_ICON: '上傳圖示',

  APP_CATE_All: '全部',

  APP_CATE_UNCATEGORIZED: '未分類',

  MISS_FILE_NOTE: '文件 {file} 沒有找到',

  'Please select a project to deploy': '請選擇項目部署',
  WORKSPACE_EMPTY_DESC: '請選擇企業空間',
  'Please select a cluster': '請選擇集群',
  'Please select a project': '請選擇項目',
  'Please select a project role': '請選擇項目角色',
  'Please select a DevOps project': '請選擇 DevOps 项目',
  'Please select a DevOps project role': '請選擇项目角色',

  HELM_APP_SCHEMA_FORM_TIP:
    '此應用支持表單模式，可選擇通過表單或 YAML 編輯器來修改預設應用配置。注意：不同模式之間數據獨立。',
  DELETE_APP_TEMPLATE_DESC:
    'Enter the app template name <b>{resource}</b> to confirm that you understand the risks of this operation.',
  DELETE_APP_TEMPLATE_VERSIONS_DESC:
    'Enter the app template name <b>{resource}</b> to confirm that you understand the risks of this operation. Before deleting the app template, you must delete all versions of the template.',

  UNPROCESSED_APP_RELEASE: 'Unreleased App',
  PROCESSED_APP_RELEASE: 'Released App',
  ALL_APP_RELEASE: 'Release Record',

  'APP_CATE_MESSAGE QUEUEING': '消息佇列',
  'APP_CATE_IMAGE REGISTRY': '鏡像倉庫',
  'APP_CATE_PROMETHEUS EXPORTER': '數據匯出器',
  'APP_CATE_WEB SERVER': 'Web 伺服器',
  APP_CATE_NETWORKING: '網路',
  'APP_CATE_DATABASE & CACHE': '資料庫和緩存',
  APP_CATE_STORAGE: '存儲',

  // App Review
  REVIEW: 'Review',
  OPERATOR: 'Operator',
  PENDING_REVIEW: 'Pending',
  COMPLETE_REVIEW: 'Complete',
  REJECT: 'Reject',
  RELEASE: 'Release',
  INTRODUCTION: 'Introduction',
  UPDATE_LOG: 'Update Log',
  SERVICE_PROVIDER_WEBSITE: 'Service provider website',
  SERVICE_PROVIDER: 'Service provider',
  APP_DESCRIPTION: 'App Description',
  DOCUMENTATION: 'Documentation',
  BACK: 'Back',
  NOTIFICATION_EMAIL: 'Email',
  NO_DOCUMENT_FOUND: 'No Documentation Found',

  // App Store
  DISCOVER: 'Discover',
  CATEGORIES: 'Categories',
  CATEGORY_COLON: 'Category:',
  HOMEPAGE_COLON: 'Homepage:',
  RELEASE_DATE_COLON: 'Release Date:',
  APP_ID_COLON: 'App ID:',
  APP_VERSIONS_TITLE:
    'Versions (only the latest 10 versions will be displayed)',
  VERSIONS: 'Versions',
  UPDATE_TIME_COLON: 'Update time: ',
  DEVELOPER: 'Developer',

  // App Store > Details
  REJECTION_REASON: 'Rejection Reason',

  // App Categories
  ICON: 'Icon',
  CREATE_CATEGORY: 'Create Category',
  APP_NOTE: 'Note',

  // App Templates > Details
  SERVICE_PROVIDER_WEBSITE_TCAP: 'Service Provider Website',

  // App Templates
  FILE: 'File',
  INCORRECT_FILE: 'Incorrect files? ',
  TRY_AGAIN: 'Try Again',
  FILE_MAX_ICON_DESC:
    'The icon size should not exceed 20 KB. Please try again.',
  START_EDITING: 'Start editing...',
  SCREENSHOTS_COLON: 'Screenshots: ',
  DELETE_ALL: 'Delete All',
  APP_LEARN_MORE:
    '<a href="{docUrl}/application-store/app-developer-guide/helm-developer-guide/" target="_blank">Learn More</a>',
  ACTIVATE_SUCCESSFUL: 'Activated successfully.',
  CANCEL_SUCCESSFUL: 'Canceled successfully.',
  RECOVER_SUCCESSFUL: 'Recovered successfully.',
  RELEASE_SUCCESSFUL: 'Released successfully.',
  SUBMIT_SUCCESSFUL: 'Submitted successfully.',
  SUSPEND_SUCCESSFUL: 'Suspended successfully.',
  DEPLOYED_SUCCESSFUL: 'Deployed successfully.',
  VIEW_IN_STORE: 'View in Store',
  RELEASE_TO_STORE: 'Release to Store',
  AUDIT_EMPTY_DESC: 'No app review record is found.',
  APP_STATUS_SUBMITTED: 'Submitted',
  APP_STATUS_PASSED: 'Released',
  APP_STATUS_SUSPENDED: 'Suspended',
  APP_STATUS_REJECTED: 'Rejected',
  APP_STATUS_ACTIVE: 'Activated',
  APP_STATUS_PUBLISHED: 'Released',
  APP_STATUS_RECALLED: 'Suspended',
  APP_STATUS_RECALL: 'Recall',
  APP_STATUS_DRAFT: 'To be submitted',
  APP_STATUS_PENDING_REVIEW: 'To be released',
  APP_STATUS_IN_REVIEW: 'Reviewing',
  APP_STATUS_DEVELOPING: 'Developing',
  APPS: 'Apps',
  UNRELEASED: 'Unreleased',
  RELEASED: 'Released',
  RELEASE_RECORD: 'Release Record',
  RELEASE_RECORD_EMPTY_DESC: 'No release record is found.',
  INSTALLED_SUCCESSFULLY: 'Installed successfully.',
  'Configuration Files': '配置文件',
  'Deploy Successfully': '部署成功',
  CONFIG_FILES: '配置文件',

  APP_TEMPLATE_DESCRIPTION_TITLE: '應用一鍵部署',
  APP_TEMPLATE_DESCRIPTION_ARTICLE:
    '通過視覺化的方式在 KubeSphere 中展示並提供部署及管理功能，用戶可以基於應用模板快速地一鍵部署應用',

  'App README': '應用介紹',

  NO_DOCUMENT_DESC: 'No documentation is found.',
  VERSION_INTRO_EMPTY_DESC: '該版本沒有說明文件',
  NO_CHART_FILE_FOUND: 'No chart file is found.',
  NO_APP_DESC_FOUND: '該應用沒有說明文件',
  NO_APP_CHART_FILE_FOUND: '該應用沒有配置文件',

  TOTAL_APP_REPOS: '共計 {num} 個應用倉庫',

  'Edit by YAML': '編輯 YAML',
  'App Store Settings': '應用商店管理',
  APP_STORE: '應用商店',
  HOME_APP_STORE_DESC:
    'KubeSphere 官方應用商店，提供部署及管理功能，用戶可以基於應用模板快速地一鍵部署應用',
  'Find an app': '尋找應用',
  TOTAL_CATE_COUNT: 'Total Apps: {total}',
  Categories: '分類',
  Developer: '開發者',
  DEVELOPER_VALUE: '開發者：{value}',
  MAINTAINER_VALUE: '維護者：{value}',
  MAINTAINERS_VALUE: '維護者：{value} 等等',
  SOURCE_CODE_ADDRESS: '源代码地址',
  LATEST_VALUE: '最新：{value}',
  Latest: '最新',
  Screenshots: '截圖',
  VERSION_LIST_DES: '只顯示 10 個最新的版本',
  VERSION_NUMBER: '版本號碼',
  CHANGE_LOG: '更新紀錄',
  Contact: '聯絡方式',
  RELEASE_DATE: '上架時間',
  RELEASE_TIME_SCAP: 'Release time',
  APP_ID: '應用編號',
  'App Readme': '應用描述',
  'Config files': '配置文件',
}
