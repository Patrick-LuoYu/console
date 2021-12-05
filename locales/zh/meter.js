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
  WORKSPACE: '企业空间',
  WORKSPACE_PL: '企业空间',
  WORKSPACE_LOW: '企业空间',
  Workspaces: '企业空间',
  WORKSPACE_SETTINGS: '企业空间设置',
  'Workspace Settings': '企业空间设置',
  'Workspace Members': '企业空间成员',
  WORKSPACE_MEMBER: '企业空间成员',
  WORKSPACE_MEMBER_PL: '企业空间成员',
  WORKSPACE_MEMBER_TCAP: '企业空间成员',
  WORKSPACE_MEMBER_TCAP_PL: '企业空间成员',
  WORKSPACE_ROLE_PL: '企业空间角色',
  'Workspace Role': '企业空间角色',
  CREATE_WORKSPACE_ROLE: '创建企业空间角色',
  'Edit Workspace Role': '编辑企业空间角色',
  'Workspace Name': '企业空间名称',
  'Workspace Logo': '企业空间 Logo',
  'Workspaces Manager': '企业空间管理员',
  CREATE_WORKSPACE: '创建企业空间',
  DEPARTMENT_MANAGEMENT: '部门管理',
  SET_DEPARTMENTS: '设置部门',
  DEPARTMENT_PL: '部门管理',
  'Maintain Organization': '维护组织结构',

  devops: 'DevOps 项目',

  'Project Number': '项目数量',
  'DevOps Project Number': 'DevOps 项目数量',
  EDIT_QUOTAS: '编辑配额',

  EDIT_WORKSPACE_QUOTAS: '编辑企业空间配额',
  'Edit Workspace Quota': '企业空间配额',

  'View Workspace': '进入企业空间',
  DELETE_WORKSPACE: '删除企业空间',

  WORKSPACE_INFO: '企业空间信息',

  'Manage Organizations': '管理组织结构',

  'Involved Projects': '参与项目',
  'Created Projects': '创建的项目',
  'Workspace name exists': '企业空间名称已存在',
  'The current name is not applicable.': '当前名称不可用',

  'Cluster Authorization Info': '集群授权信息',
  WS_NETWORK_ISOLATION: '企业空间网络隔离',

  NO_AVAILABLE_CLUSTER: '未发现可用集群',
  NETWORK_POLICY_UNINSATLLED_DESC: '该集群未安装网络策略组件。',

  'All members': '全部成员',
  Assigned: '已分配',

  WORKSPACE_OVERVIEW_DESC:
    '企业空间为 KubeSphere 提供了安全隔离的、具有访问权限控制的工作平台。这里您可以看到当前企业空间内资源运行的概况。',

  WORKSPACE_DESC:
    '企业空间是一个组织您的项目和 DevOps 项目、管理资源访问权限以及在团队内部共享资源等的逻辑单元，可以作为团队工作的独立工作空间。',

  WORKSPACE_SEARCH_PLACEHOLDER: '请输入企业空间名称进行查找',

  WORKSPACE_CREATE_DESC: '设置企业空间的基本信息。',

  WORKSPACE_NAME_DESC:
    '请尽量保持名称简短，比如用企业名称的缩写或者大家经常的称呼，无需使用企业的完整名称或者营业执照上的注册名称。',

  WORKSPACE_ROLE_DESC: '企业空间角色定义了在当前企业空间下用户所拥有的权限。',
  WORKSPACE_ROLE_EMPTY_DESC: '请创建一个企业空间角色。',
  WORKSPACE_LOGO_PLACEHOLDER:
    '企业标志尺寸必须小于 200px X 200px，支持 png，jpg 格式。建议从上传透明背景的 PNG 格式图片以达到最佳展示效果。',

  'Remove from Workspace': '从企业空间移除',
  WORKSPACE_NAME_EMPTY_DESC: '请输入企业空间名称。',

  NO_WORKSPACE_TIP:
    '您的帐户目前不属于任何企业空间，请您创建一个企业空间或者联系管理员邀请您到其企业空间内进行工作',

  SEARCH_WORKSPACE_TIP: '请输入企业名称进行查找',

  WORKSPACE_MEMBER_DESC:
    '企业空间成员可以查看或管理企业空间资源。您可以管理企业空间中的成员并控制成员权限。',
  INVITE_WORKSPACE_MEMBER_SEARCH_PLACEHODLER: '输入用户名邀请企业空间成员',
  INVITE_WORKSPACE_MEMBER_DESC: '邀请用户到当前企业空间。',

  DELETE_WORKSPACE_TIP:
    '确定删除企业空间 <strong>{resource}</strong> ? 删除后将无法恢复, 企业空间下的资源也同时会被销毁。',

  DELETE_WORKSPACE_DESC:
    '企业空间删除后将无法恢复, 企业空间下的资源也同时会被销毁。',

  WORKSPACE_BASE_INFO_Q1: '如何为企业空间申请更多的集群？',
  WORKSPACE_BASE_INFO_A1: '请联系平台管理员或集群管理员来申请更多的集群。',
  WORKSPACE_BASE_INFO_Q2: '如何定义网络策略?',
  WORKSPACE_BASE_INFO_A2: '',

  WORKSPACE_CLUSTERS_DESC: '集群信息是企业空间对集群资源的使用情况的统计',

  HOW_TO_APPLY_MORE_CLUSTER_Q: '如何为企业空间申请更多的集群？',
  HOW_TO_APPLY_MORE_CLUSTER_A: '请联系平台管理员或集群管理员以申请更多集群。',

  NO_CLUSTER_AVAILABLE_DESC:
    '未发现可用的集群。请在企业空间创建完成后，联系平台管理员或集群管理员将一个集群授权给该企业空间。',
  WORKSPACE_NO_CLUSTER_TIP:
    '请联系平台管理员或者集群管理员将一个集群授权给企业空间。',

  DEPARTMENT_MANAGEMENT_DESC:
    '企业空间中的部门是用来管理权限的逻辑单元。您可以在部门中设置企业空间角色、多个项目角色以及多个 DevOps 项目角色，还可以将用户分配到部门中以批量管理用户权限。',
  DEPARTMENT_EMPTY_DESC: '没有可用部门',
  WORKSPACE_GROUP_USER_EMPTY_DESC: '未发现可分配的成员',
  WORKSPACE_QUOTAS_DESC:
    '企业空间配额用于管理企业空间中所有项目和 DevOps 项目的总资源用量。',

  DELETE_WORKSPACE_PROJECTS_DESC: '删除企业空间中的项目',
  DELETE_WORDSPACE_RELATED_RESOURCES_DESC: '删除该企业空间关联项目',

  // App Repositories
  ACCESS_KEY_ID: '访问密钥 ID',
  SECRET_ACCESS_KEY: '秘密访问密钥',

  // Basic Information
  WORKSPACE_BASIC_INFO_DESC:
    '基本信息提供企业空间的信息概览，您可以查看企业空间的基本信息。',
  SURE_TO_DELETE_WORKSPACE: '您确定删除企业空间吗？',
  ON: '开启',
  OFF: '关闭',
  ONLINE: '上线',
  OFFLINE: '下线',
  WS_MEMBER_SCAP: '企业空间成员',
  WS_MEMBER_SCAP_PL: '企业空间成员',

  // Quota Management
  QUOTA_MANAGEMENT: '配额管理',
  RESOURCE_LIMIT: '资源限制',
  USED_PERCENT: '已使用：{percent}%',

  // Worksapce Members
  CHANGE_MEMBER_ROLE: '修改成员角色',
  INVITE_MEMBER: '邀请成员',
  INVITE: '邀请',
  WORKSPACE_MEMBERS: '企业空间成员',

  // Department Management
  'Workspace Groups': '部门管理',
  NOT_ASSIGNED_TCAP: '未分配',
  ASSIGNED: '已分配',
  WORKSPACE_ROLE: '企业空间角色',
  WORKSPACE_MEMBER_EMPTY_DESC: '请邀请一个用户到当前企业空间。',
  PROJECT_VALUE: '项目：{value}',
  PROJECT_ROLE_VALUE: '项目角色：{value}',
  DEVOPS_VALUE: 'DevOps 项目：{value}',
  DEVOPS_PROJECT_ROLES_VALUE: 'DevOps 项目角色：{value}',

  // Workspace Members > Details
  REMOVE_MEMBER_PL: '移除成员',
  PROJECT_NOT_SELECT_DESC: '请选择一个项目。',
  SELECT_PROJECT_DESC: '选择将要创建资源的项目。',
  REPLICA_LOW_SI: '副本',
  REPLICA_LOW_PL: '副本',
  Workload: '工作负载',
  WORKLOAD: '工作负载',
  WORKLOAD_PL: '工作负载',
  WORKLOAD_LOW: '工作负载',
  Workloads: '工作负载',
  IMAGE_TIME_SIZE_LAYER: '更新于 {time}',
  IMAGE_TIME_SIZE_LAYER_PL: '更新于 {time}，{size}，{layer} 层',
  IMAGE_TIME_SIZE_LAYER_SI: '更新于 {time}，{size}，{layer} 层',
  CPU_REQUEST: '资源预留',
  CPU_LIMIT: '资源限制',
  CPU_REQUEST_SCAP: 'CPU 预留',
  CPU_LIMIT_SCAP: 'CPU 限制',
  MEMORY_REQUEST: '内存预留',
  MEMORY_LIMIT: '内存限制',
  MEMORY_REQUEST_SCAP: '内存预留',
  MEMORY_LIMIT_SCAP: '内存限制',
  ADD_PROBE: '添加探针',
  LABEL_TYPE: '{label} <span style="{style}">（{type}）</span>',
  SELINUX_CONTEXT: 'SELinux 上下文',
  CAPABILITIES_BETA: '权能（测试中）',
  POD_SETTINGS: '容器组设置',
  TARGET: '目标',
  MOUNT_PATH_EMPTY: '请输入挂载路径。',
  CONFIGMAP: '配置字典',
  CONFIGMAP_PL: '配置字典',
  CONFIGMAPS: '配置字典',
  CONFIGMAP_LOW: '配置字典',
  PARTITION_ORDINAL: '容器组副本分组序号',
  PARTITION_ORDINAL_DESC:
    '设置一个分组序号以将容器组副本分成两组。更新有状态副本集时，只有序号大于或等于分组序号的容器组副本会被更新。',
  DEPLOYMENT_EMPTY_DESC: '请创建一个部署。',
  STATEFULSET_EMPTY_DESC: '请创建一个有状态副本集。',
  DAEMONSET_EMPTY_DESC: '请创建一个守护进程集。',
  JOB_EMPTY_DESC: '请创建一个任务。',
  CRONJOB_EMPTY_DESC: '请创建一个定时任务。',
  GPU_TYPE: 'GPU类型',
  GPU_TYPE_SCAP: 'GPU 类型',
  GPU_LIMIT_SCAP: 'GPU 限制',
  GPU_LIMIT: 'GPU限制',
  GPU_SETTING_TIP: '设置 GPU 限制为空即为取消该限制。',
  'Service Configuration': '服务配置',

  'Available number of nodes scheduled': '可用节点数',
  'Desired number of nodes scheduled': '期望节点数',
  'Current number of nodes scheduled': '当前节点数',
  VIEW_YAML: '查看 YAML',
  EDIT_YAML: '编辑 YAML',
  YAML_FILE: 'YAML 文件',
  'Add Labels': '添加标签',
  EDIT_LABELS: '编辑标签',
  POD_REPLICAS: '容器组副本数量',
  DEFAULT_RULES: '默认规则',
  DEFAULT_RULES_DESC: '按照默认的规则将容器组副本调度到节点。',
  CONTAINERS: '容器',
  CONTAINER_IMAGE: '容器镜像',
  ADD_CONTAINER: '添加容器',
  'Pod Status': '容器组运行状态',
  'Container Setting': '容器设置',
  'Pods List': '容器组列表',
  POD_SCALE_DESC: '可以弹性扩展容器组实例数量',
  CONTAINER_LOGS: '容器日志',
  'Resource Info': '资源信息',
  'Node Name': '节点名称',
  NODE_NAME: '节点名称',
  POD_IP_ADDRESS: '容器组 IP 地址',
  POD_IP_ADDRESS_SCAP: '容器组 IP 地址',
  IMAGE: '镜像',
  IMAGE_VALUE: '镜像：{value}',
  IMAGE_ID: '镜像 ID',
  'Port(s)': '端口',
  Port: '端口',
  SERVICE_TOPOLOGY: '服务拓扑',
  EDIT_CONTAINER: '编辑容器',
  NODE_PORTS: '节点端口',
  NODE_PORT_SCAP: '节点端口',
  NODE_PORTS_SCAP: '节点端口',
  ADD_PORT: '添加端口',
  'target port': '目标端口',
  Environment: '环境变量',
  'Mount point': '挂载点',
  MOUNT_PATH: '挂载路径',
  'Mount Volume': '挂载存储卷',
  'Set Mount Path': '设置挂载路径',
  'Mount Temporary Volume': '挂载临时存储卷',
  'Select by Node': '指定节点',
  Mount: '挂载',
  CAPACITY: '容量',
  capacity: '容量',
  VOLUME_CAPACITY_TCAP: '存储卷容量',
  'Storage Size': '存储大小',
  PROVISIONER: '供应者',
  'Volume Source': '存储卷来源',
  VOLUME_CAPACITY: '存储卷容量',
  TOTAL_CAPACITY: '总容量',
  'Access Mode': '访问模式',
  Provisioner: '供应者',
  mounted: '已挂载',
  created: '已创建',
  EmptyDir: '临时存储卷',
  TEMPORARY_VOLUME: '临时存储卷',
  HOSTPATH_VOLUME: 'HostPath 存储卷',
  'New Volume': '新建存储卷',
  EXISTING_VOLUME: '现有存储卷',
  VOLUME_NAME: '存储卷名称',
  CLUSTER_DIFF: '集群差异设置',
  REPLICA_SCHEDULING_MODE: '副本调度模式',
  POD_SCHEDULING_RULES: '容器组调度规则',
  ADD_RULE: '添加规则',
  POD_SCHEDULING_RULES_DESC: '设置容器组副本调度到节点的规则。',
  'Instance Status': '实例状态',

  'No Request': '不预留',
  NO_REQUEST: '不预留',
  NO_LIMIT: '不限制',
  NO_REQUEST_TCAP: '不预留',
  NO_LIMIT_TCAP: '不限制',
  'Not Limited': '未限制',
  Cost: '占用',
  AVAILABLE_QUOTAS: '可用配额',
  PROJECT_REMAINING_QUOTAS: '项目剩余配额',
  WORKSPACE_REMAINING_QUOTAS: '企业空间剩余配额',
  QUOTA_OVERCOST_TIP: '当前资源占用已超过剩余配额',
  QOS_CLASS: 'QoS 类别',

  'Resource Request': '资源预留',
  'Resource Limit': '资源限制',

  'Resource requests remaining quota': '资源预留剩余配额',
  'Resource limits remaining quota': '资源限制剩余配额',

  NO_RESOURCE_LIMIT: '无资源限制',

  'Job Settings': '任务设置',
  STRATEGY_SETTINGS: '策略设置',
  'CronJob Settings': '定时任务设置',
  'Job Template': '任务模板',

  VOLUME_SETTINGS: '存储卷设置',
  STORAGE_SETTINGS: '存储设置',

  'Add Volume': '添加存储卷',
  MOUNT_CONFIGMAP_OR_SECRET: '挂载配置字典或保密字典',
  USE_CONFIGMAP_OR_SECRET: '引用配置字典或保密字典',

  'Collecting file log': '收集落盘日志',

  ADD_METADATA: '添加元数据',
  'Set Node Scheduling Policy': '设置节点调度策略',
  'You can allow Pod replicas to run on specified nodes.':
    '可以让容器组副本在指定的节点运行',
  SELECT_NODES: '选择节点',
  SELECT_NODES_DESC:
    '将容器组副本分配给特定的节点。您可以使用标签选择节点或手动指定节点。',
  WORKLOAD_SPECIFY_NODE_DESC: '将容器副本分配给特定节点。',
  ADD_METADATA_DESC: '为资源添加元数据。',
  ROUTE_ADD_METADATA_DESC: '为路由添加元数据。',
  SERVICE_ADD_METADATA_DESC: '为服务添加元数据。',
  VOLUME_ADD_METADATA_DESC: '为存储卷添加元数据。',
  WORKLOAD_ADD_METADATA_DESC: '为工作负载添加元数据。',
  POD_ADD_METADATA_DESC: '为容器组副本添加元数据。',

  'Additional metadata settings for resources.': '对资源进行额外的元数据设置',

  LOCATION: '位置',

  SELECT_CONFIGMAP_DESC: '将配置字典挂载到容器。',
  SELECT_SECRET_DESC: '将保密字典挂载到容器。',

  SELECT_VOLUME: '选择存储卷',
  SELECT_TYPE: '选择{type}',
  SELECT_VOLUME_DESC: '选择现有的存储卷以将其挂载到容器。',

  REQUEST_EXCCED: '资源预留不能超过资源限制',
  REQUEST_EXCEED_AVAILABLE_QUOTA: '资源设置不能超过可用资源限制。',
  REQUEST_EXCEED_LIMIT: '资源预留不能超过资源限制。',

  WORKLOAD_DESC:
    '工作负载（Workload）用于处理业务请求，可包含一个或多个容器组。日志、监控等系统功能也是由工作负载实现的。',

  WORKLOAD_EMPTY_DESC: '请创建一个工作负载。',
  JOB_DESC:
    '任务（Job）用于运行短暂的一次性任务。任务会创建一个或多个容器组，并保证指定数量的容器组成功结束。',
  CRONJOB_DESC:
    '定时任务（CronJob）管理基于时间的任务（Job），可用于运行周期性任务或重复性任务。',

  CRONJOB_NAME_DESC:
    '最长 52 个字符，只能包含小写字母、数字及分隔符("-")，且必须以小写字母或数字开头及结尾',
  CRONJOB_NAME_TOO_LONG: '最长 52 个字符',

  IMAGE_PLACEHOLDER: '镜像名称或路径，例如 nginx:latest',
  IMAGE_EMPTY: '请设置镜像。',
  IMAGE_REGISTRY_PLACEHOLDER: '请选择镜像仓库密钥',
  IMAGE_DESC:
    '如需使用私有镜像仓库，您需要先创建镜像仓库保密字典。<a href={link} target="_blank">了解更多</a>',
  'Replicas Number': '副本数量',
  GRAYSCALE_REPLICAS_DESC: '新版本容器组副本数量',
  REPLICA_STATUS: '副本运行状态',
  REPLICAS_DESC: '{module}将会被创建，由它维护集群中容器组的所需数量',
  'Strategy Type': '策略类型',
  'Update Strategy': '更新策略',
  UPDATE_STRATEGY: '更新策略',
  ONDELETE: '删除容器组时更新',
  SIMULTANEOUS_UPDATE: '同时更新',
  RollingUpdate: '滚动更新',
  ROLLING_UPDATE_RECOMMENDED: '滚动更新（推荐）',
  RESTART_PL: '重启次数',
  RESTART: '重启次数',
  RESOURCE_REQUESTS: '资源预留',
  RESOURCE_LIMITS: '资源限制',
  IMAGE_PULL_POLICY: '镜像拉取策略',
  Privileged: '特权模式',
  'Desired Replicas': '期望副本',
  REPLICAS_CURRENT: '当前副本数',
  MIN_READY_SECONDS: '容器组就绪最短运行时长（s）',

  ADJUST_REPLICAS: '调整副本数量',
  ADJUST_TRAFFIC_DISTRIBUTION: '调整流量分配',
  REPLICAS_SCALE_NOTIFY_CONTENT:
    '您确定将容器组副本数量调整为 <strong>{num}</strong> 吗？',
  REPLICAS_SCALE_NOTIFY_CONFIRM: '确定（{seconds}s）',
  REPLICAS_SCALE_NOTIFY_CANCEL: '取消',

  ROLLING_UPDATE_SETTINGS: '滚动更新设置',
  MAX_UNAVAILABLE_PODS: '最大不可用容器组数量',
  MAX_EXTRA_PODS: '最大多余容器组数量',
  UPDATE_STRATEGY_DESC:
    '配置升级过程中替换容器组的策略 <a href="{link}" target="_blank">了解更多</a>',
  MAX_DAEMON_UNAVAILABLE_POD_DESC:
    '升级过程中「允许存在的不可用的容器组」所占总容器组数的最大百分比或数量',
  MAX_DEPLOY_UNAVAILABLE_POD_DESC: '升级过程中不可用副本的最大数量或百分比',
  MAX_SURGE_POD_DESC:
    '升级过程中「允许超出副本数量的容器组」的最大数量或百分比',
  MAX_UNAVAILABLE_PODS_DESC:
    '更新过程中允许的不可用容器组副本的最大数量或百分比。',
  MAX_EXTRA_PODS_DESC: '更新过程中允许的多余容器组副本的最大数量或百分比。',
  ROLLING_UPDATE_POD_TIP:
    '更新时，会根据当前容器组的副本数对最小可用及最大数量进行限制；最小容器组数不可以超过当前副本数，且最大容器组数量不能超过当前副本数的2倍。',
  ONDELETE_DESC: '需要手动删除容器组副本才能对其进行更新。',
  ROLLINGUPDATE_DESC:
    '用新容器组副本逐步替换旧容器组副本。升级过程中业务流量会负载均衡到新旧容器组副本上，业务不会中断。',
  SIMULTANEOUS_UPDATE_DESC:
    '删除全部旧容器组副本再创建新容器组副本。升级过程中业务会中断。',

  STATEFULSET_PARTITION_DESC:
    '当更新有状态副本集时，将更新具有大于或等于 partition 的序数的所有容器组',
  PARTITION_ORDINAL_EMPTY: '请设置容器组副本分组序号。',
  MIN_READY_SECONDS_DESC: '容器组副本被视为就绪所需要的最短稳定运行时长。',
  MIN_READY_SECONDS_EMPTY:
    '请设置容器组副本被视为就绪所需要的最短稳定运行时长。',
  'UI Mode': '界面模式',
  'Coding Mode': '代码模式',

  LABEL_EXIST_DESC: '标签已存在，请输入其他标签。',
  EMPTY_LABEL_DESC: '请添加标签。',
  DUPLICATE_LABELS: '无法添加重复标签。',
  'Labels cannot be empty': '标签不能为空',
  ADD_LABEL: '添加标签',
  'Add Container': '添加容器',
  'Add new container': '添加新的容器',
  'Adding new contianer': '正在添加新的容器',
  ADD_NODE_SELECTOR: '添加节点选择器',
  CONTAINER_EMPTY_DESC: '请至少添加一个容器。',
  CONTAINER_NAME: '容器名称',
  CONTAINER_TYPE: '容器类型',
  'Advanced Options': '高级选项',
  'Applied to the workload': '应用于工作负载',
  'CPU(m)': 'CPU(m)',
  Commands: '命令',
  'Add command': '添加命令',
  ARGUMENTS: '参数',
  Argument: '参数',
  'Add argument': '添加参数',
  Protocols: '协议',
  MUST_MATCH: '必须匹配',
  MATCH_IF_POSSIBLE: '尽可能匹配',
  SCHEDULE_WITH_TARGET: '与目标调度到一起',
  SCHEDULE_AWAY_FROM_TARGET: '远离目标调度',
  RULE_NOT_COMPLETE: '请设置完整规则。',
  SESSION_AFFINITY: '会话亲和性',
  SELECTOR: '选择器',
  'environment variables': '环境变量',
  ADD_ENVIRONMENT_VARIABLE: '添加环境变量',
  'Read Write Mode': '读写模式',
  'Please input mount point': '请输入挂载点',
  'Please select a storage class': '请选择存储卷类型',
  'Please select image': '请选择镜像',

  'Invalid name': '名称格式不合法。{message}',
  'Invalid pod': '容器组数量格式不合法',
  SET_IMAGE_DESC: '为容器设置镜像。',
  INVALID_NAME_DESC:
    '名称无效。名称只能包含小写字母、数字和连字符（-），必须以小写字母或数字开头和结尾，最长 63 个字符。',
  'Service Labels': '服务标签',

  'Add Existing Volume': '添加已有存储卷',
  'Add Temporary Volume': '添加临时存储卷',
  'Add HostPath': '添加 HostPath',
  'Add Volume Template': '添加存储卷模板',

  WORKLOAD_MOUNT_VOLUME_DESC:
    '为容器挂载现有存储卷、临时存储卷或 HostPath 存储卷。',

  MOUNT_CONFIGMAP_OR_SECRET_DESC: '为容器挂载配置字典或保密字典。',

  'Please specify an image': '请指定镜像',

  'Please select protocol': '请选择协议',
  'Please input port': '请输入端口',
  PROBE_COMMAND_EMPTY: '请输入至少一条命令。',
  VOLUME_NAME_EMPTY: '请为存储卷设置名称。',

  PORT_INPUT_DESC: '端口名称已存在，请输入其他名称。',

  PORT_NAME_DESC:
    '端口名称只能包含小写字母、数字和连字符（-），必须以小写字母或数字开头和结尾，最长 63 个字符。',

  WORKLOAD_PORT_NAME_DESC:
    '端口名称只能包含小写字母、数字及分隔符（-），且必须以小写字母或数字开头及结尾，最长 15 个字符。',

  TARGET_CPU_USAGE_DESC:
    '当实际 CPU 用量大于/小于目标值时，系统自动减少/增加容器组副本数量。',
  TARGET_MEMORY_USAGE_DESC:
    '当实际内存用量大于/小于目标值时，系统自动减少/增加容器组副本数量。',
  MINIMUM_REPLICAS_DESC: '设置允许的最小容器组副本数量，默认值为 1。',
  MAXIMUM_REPLICAS_DESC: '设置允许的最大容器组副本数量，默认值为 1。',
  REPLICAS_PLACEHOLDER: '默认值: 1',

  DEPLOYMENTS_BASEINFO_DESC:
    '您可以给部署起一个名字，以便在使用的时候容易区分。',
  DEPLOYMENT_POD_TEMPLATE_DESC:
    '工作负载可以根据容器组模板以及您设置的副本数量，自动生成指定数量的容器组',
  DEPLOYMENTS_VOLUME_DESC:
    '可以将同一个临时存储卷或持久化存储卷挂载至部署的容器组的各个副本内。',
  DEPLOYMENT_LABEL_SETTINGS_DESC:
    '标签是一个或多个关联到资源如容器组上的键值对，我们通常通过标签来识别、组织或查找资源对象',
  DEPLOYMENT_NODE_SELECT_DESC:
    '通过使用选择器将容器组调度到期望运行的节点上，这些选择器是一组或多组键值对匹配节点标签。',
  DEPLOYMENT_JOB_SETTINGS_DESC:
    '您可以在此配置任务 (Job) 的 Job Spec 格式，Job Controller 负责根据 Job Spec 创建 Pod，并持续监控 Pod 的状态，直至其成功结束。如果失败，则根据 RestartPolicy（支持 OnFailure 和 Never）决定是否创建新的 Pod 再次重试任务。',
  DEPLOYMENT_CRONJOB_SETTINGS_DESC:
    '您可以在此配置定时任务 (CronJob) 的 Job Spec 格式，Job Controller 负责根据 Job Spec 创建 Pod，并持续监控 Pod 的状态，直至其成功结束。如果失败，则根据 RestartPolicy（支持 OnFailure 和 Never）决定是否创建新的 Pod 再次重试任务。',

  STATEFULSETS_BASEINFO_DESC:
    '您可以给有状态副本起一个名字，以便在使用的时候容易区分。',
  STATEFULSETS_VOLUME_TEMPLATE_DESC:
    '为有状态副本集的每个容器组创建专属的持久化存储卷，并挂载至相应的容器组',
  STATEFULSETS_ADD_VOLUME_TEMPLATE_DESC: '请添加一个存储卷模板',
  STATEFULSETS_SERVICE_CONFIG_DESC:
    '集群不为服务生成 IP，集群内部通过服务的后端 Endpoint IP 直接访问服务。此类型适合后端异构的服务，比如需要区分主从的服务。',

  DAEMONSETS_BASEINFO_DESC:
    '守护进程集保证在每个主机上都运行一个容器副本，常用来部署一些集群的日志、监控或者其他系统管理应用。',
  DAEMONSETS_VOLUME_DESC:
    '可将 HostPath，临时存储卷，持久化存储卷挂载至守护进程集的容器组内。',

  JOBS_BASEINFO_DESC: '',
  JOBS_POD_TEMPLATE_DESC: '指定任务中运行的容器组模板',
  JOBS_VOLUME_DESC: '可以将临时存储卷，持久化存储卷挂载至任务的容器组内。',
  CRONJOBS_BASEINFO_DESC: '创建定时任务所需的基本信息，需指定名称与定时计划',
  CRONJOBS_VOLUME_DESC:
    '可以将临时存储卷，持久化存储卷挂载至定时任务的容器组内。',
  CRONJOB_CRON_DESC:
    '为定时任务设置定时计划。KubeSphere 默认使用 UTC 时间, 您需要根据时区调整定时计划。<a href="//en.wikipedia.org/wiki/Cron" target="_blank">了解更多</a>',

  MOUNT_VOLUME_DESC:
    '持久化存储卷请选择支持多节点读写模式 (ROX 或者 RWX) 的存储卷，否则可能因容器组不在同一节点导致容器组更新失败。如果您选择了单节点读写 (RWO) 模式的存储卷您也可以通过节点选择将容器组安排在同一节点上来避免因存储卷访问模式造成的更新错误。',

  Job: '任务',
  JOB: '任务',
  CronJob: '定时任务',
  CRONJOB: '定时任务',
  CRONJOB_PL: '定时任务',
  NUMBER_OF_CRONJOBS: '定时任务数量',
  CRONJOB_LOW: '定时任务',
  Revision: '版本',
  EVERY_DAY: '0 0 * * * （每天）',
  EVERY_HOUR: '0 * * * * （每小时）',
  EVERY_MONTH: '0 0 1 * * （每月）',
  EVERY_WEEK: '0 0 * * 0 （每周）',
  Schedule: '定时计划',
  REVISION_RECORDS: '修改记录',
  'Revision Rollback': '版本回退',
  'Rollback Revisions': '回退版本',
  'Current Revision': '当前版本',
  'Execution Records': '执行记录',
  REVISION_RECORD: '修改记录',
  ROLL_BACK: '回退',
  EDIT_AUTOSCALING: '编辑自动伸缩',
  TARGET_REVISION_RECORD: '目标修改记录',
  CURRENT_REVISION_RECORD: '当前修改记录',
  RUNNING_RECORDS: '运行记录',
  'Cluster Resource Status': '集群资源状态',
  RESOURCE_STATUS: '资源状态',
  RESOURCE_NAME: '资源名称',
  'Config Template': '配置模板',
  'Edit Config Template': '编辑配置模板',
  EDIT_SETTINGS: '编辑设置',
  EDIT_APP_SETTINGS: '编辑应用设置',
  ENVIRONMENT_VARIABLE_PL: '环境变量',
  ENVIRONMENT_VARIABLE: '环境变量',
  'File List': '文件列表',
  RERUN: '重新运行',
  ENTER_SCHEDULE_TIP: '请选择定时计划。',

  TARGET_REVISION_EMPTY_DESC: '请选择目标修改记录。',

  HORIZONTAL_POD_AUTOSCALING: '容器组水平自动扩缩',
  AUTOSCALING: '自动伸缩',
  'Container Config': '容器配置',
  EDGENODE_CONFIG_COMMAND: '边缘节点配置命令',
  PROBE_PL: '探针',
  'Add Probe': '添加探针',
  'Initial Delay': '初始延迟',
  INITIAL_DELAY_S: '初始延迟（s）',
  INITIAL_DELAY_TIMEOUT_VALUE: '{delay}s 初始延迟, {timeout}s 超时时间',
  TIMEOUT_PERIOD_S: '超时时间（s）',
  CHECK_INTERVAL_S: '检查间隔（s）',
  SUCCESS_THRESHOLD: '成功阈值',
  FAILURE_THRESHOLD: '失败阈值',
  HTTP_REQUEST: 'HTTP 请求',
  HTTP_PATH_EMPTY: '请设置 HTTP 检查的路径。',
  TCP_PORT: 'TCP 端口',
  WORKER_CONTAINER: '工作容器',
  'Request Type': '请求类型',

  MAXIMUM_DELAY: '最大启动延后时间（s）',
  SUCCESSFUL_JOBS_RETAINED: '成功任务保留数量',
  FAILED_JOBS_RETAINED: '失败任务保留数量',
  CONCURRENCY_POLICY: '并发策略',
  RUN_JOBS_CONCURRENTLY: '同时运行任务',
  SKIP_NEW_JOB: '跳过新任务',
  SKIP_OLD_JOB: '跳过旧任务',

  'Select resource': '选择资源',
  RESTART_POLICY: '重启策略',
  RESOURCE: '资源',
  'Restart Policy': '重启策略',

  LIVENESS_CHECK: '存活检查',
  READINESS_CHECK: '就绪检查',
  STARTUP_CHECK: '启动检查',

  RECREATE: '重新创建',
  RECREATE_SUCCESS_DESC: '重新创建成功。',

  RECREATE_CONFIRM_DESC:
    '您确定重新创建{type} {resource} 吗？容器组副本将会根据更新策略更新，同时相关业务将会中断。',

  MORE: '更多操作',
  MANAGE: '管理',

  REVISION_ROLLBACK_SELECT: '请选择要回退的版本',
  REVISION_TITLE: '{name}版本',
  'is running': '正在运行',
  PROBE_TIME: '初始延时: {delay}s 超时时间:{timeout}s',
  READINESS_PROBE: '就绪探针',
  LIVENESS_PROBE: '存活探针',
  STARTUP_PROBE: '启动探针',

  INITIAL_DELAY_DESC: '容器启动后探针启动前的延迟时间。',
  TIMEOUT_PERIOD_DESC:
    '探针超时时间。探针超时后，检查将被视为失败。取值必须为整数，最小值为 0。',
  CHECK_INTERVAL_DESC: '执行检查的时间间隔。取值必须为整数，最小值为 1。',
  SUCCESS_THRESHOLD_DESC:
    '检查失败后再次被视为成功所需的最小连续成功次数。最小值为 1。对于存活探针和启动探针，此参数值必须为 1。',
  FAILURE_THRESHOLD_DESC:
    '检查成功后再次被视为失败所需的最小连续失败次数。最小值为 1。',

  CONFIGURE_AUTOSCALING_DESC:
    '设置系统根据目标 CPU 和内存用量自动调整容器组副本数量。',
  PROBE_MSG:
    'Readiness Probe 检查容器是否准备好处理请求。失败意味着容器不应从代理接收任何流量，即使它正在运行。Liveness Probe 检查配置它的容器是否仍在运行。如果活态探测器失败，则会杀死容器，容器将遵循其重启策略',
  WORKLOAD_REPLICA_MSG:
    '在用户定义范围内，如果 Pod 增多，则 ReplicationController 会终止额外的 Pod，如果减少，RC 会创建新的 Pod，始终保持在定义范围。例如，RC 会在 Pod 维护（例如内核升级）后在节点上重新创建新 Pod。',
  DEPLOYMENTS_REPLICA_DESC:
    '部署 (Deployment) 用来描述期望应用达到的目标状态，主要用来描述无状态应用，副本的数量和状态由其背后的控制器来维护，确保状态与定义的期望状态一致。您可以增加副本数量来满足更高负载；回滚部署的版本来消除程序的错误修改；创建自动伸缩器来弹性应对不同场景下的负载。',
  STATEFULSETS_REPLICA_DESC:
    '有状态副本集 (StatefulSet) 用来描述有状态应用，比如副本之间有主从关系，数据需要做持久化。与部署 (Deployment) 相同的是，有状态副本集创建的副本也是完全相同的，不同的是每个副本有个固定且唯一的标识，即使副本被重新调度了，标识也不会发生变化。您可以用有状态副本集来实现应用的有序部署，有序的删除，有序的滚动更新。',
  DAEMONSETS_REPLICA_DESC:
    '守护进程集 (DaemonSet) 可以确保集群中的每个节点运行一个副本，当有节点加入集群或者离开集群的时候，会自动地调整副本的数量来保证副本的数量与集群的节点数量一致。您可以使用守护进程集来运行存储服务，如 GlusterFS，Ceph 等；运行日志搜集服务，如 Fluentd，Logstash 等；运行监控服务等。',

  FAILED_JOBS_RETAINED_DESC: '允许保留的失败任务的个数。默认值为 1。',
  SUCCESSFUL_JOBS_RETAINED_DESC: '允许保留的成功任务的个数。默认值为 3。',
  CONCURRENCY_POLICY_DESC: '定时任务创建的多个任务发生重叠时，系统采取的策略。',
  'Can be found by node IP or node name': '可以通过节点 IP 或者节点名称查找',
  MAXIMUM_DELAY_DESC:
    '由于某种原因未能按计划启动任务时，任务启动的最大延后时间。',
  'Container CPU Resource Request, 1 Core = 1000m':
    '容器的 CPU 资源预留值, 1核 = 1000m',
  'Container Memory Resource Request': '容器的 内存 资源预留值',
  'The minimum of the replicas that can be set by HPA':
    '弹性伸缩可以设置的副本数量的下限',
  MINIMUM_REPLICAS: '最小副本数',
  MAXIMUM_REPLICAS: '最大副本数',
  'Maximum number of replicas': '副本数量的上限',
  TARGET_CPU_USAGE: '目标 CPU 用量',
  TARGET_MEMORY_USAGE: '目标内存用量',
  'Current Utilization': '当前使用率',
  TARGET_CPU_USAGE_UNIT: '目标 CPU 用量（%）',
  TARGET_MEMORY_USAGE_UNIT: '目标内存用量（MiB）',
  'Memory Target Utilization': '内存目标使用率',

  'min replicas number should not be greater than max replicas number':
    '最大副本数应不小于最小副本数',

  HPA_SET_TIP: '已设置容器组水平自动扩缩策略。',

  'Mount path is already in use': '挂载路径已使用',
  'Please specify the read and write mode and mount path':
    '请指定读写方式及挂载路径',
  'Please add at least one volume': '请至少添加一个存储卷',
  'Please add at least one volume or volume template':
    '请至少添加一个存储卷或存储卷模板',
  'Please select a volume': '请选择存储卷',
  'Please select a configmap': '请选择配置文件',
  'Please select a secret': '请选择密钥',
  COLLECT_LOGS_ON_VOLUMES_Q: '如何收集存储卷上的日志？',
  MOUNT_PATH_IN_USE: '挂载路径已被使用，请输入其他挂载路径。',
  READ_WRITE_MOUNT_EMPTY: '请指定读写方式及挂载路径。',
  MOUNT_VOLUME: '挂载存储卷',
  MOUNT_VOLUME_OR_TEMPLATE: '挂载存储卷或存储卷模板',
  VOLUME_NOT_SELECT: '请选择存储卷。',
  CONFIGMAP_NOT_SELECT: '请选择配置字典。',
  SECRET_NOT_SELECT: '请选择保密字典。',
  'What is Disk Log Collection?': '什么是落盘日志收集？',

  'for example': '例如',
  CONTAINER_LOG_PATH: '容器日志路径',
  'log path relative to container mount path': '日志路径相对于容器挂载路径',

  SPECIFY_SUBPATH: '指定子路径',
  SUBPATH: '子路径',
  SPECIFY_SUBPATH_TIP: '指定需要挂载到容器的存储卷子路径。',

  'Host Path': '主机路径',

  HOST_PATH_DESC:
    'HostPath 允许挂载主机上的文件系统到容器组里面去。如果容器组需要使用主机上的文件，可以使用 HostPath。',
  SELECT_SPECIFIC_KEYS: '选择特定键',
  SELECT_SPECIFIC_KEYS_DESC: '选择需要挂载到容器的特定键。',
  EMPTY_DIR_DESC:
    '临时存储卷随 Pod 被分配在主机上。当 Pod（不管任何原因）从主机上被删除时，临时存储卷也同时会删除，存储卷的数据也将永久删除。<br />注：删除容器不影响临时存储卷。',
  SELECT_VOLUME_TYPE_DESC: '您可以根据需要选择适合您的存储卷类型进行添加',

  MAXIMUM_RETRIES: '最大重试次数',
  PARALLEL_PODS: '并行容器组数量',
  COMPLETE_PODS: '容器组完成数量',
  MAXIMUM_DURATION: '最大运行时间（s）',

  MAXIMUM_RETRIES_DESC: '将任务标记为失败前的最大重试次数。默认值为 6。',
  PARALLEL_PODS_DESC: '并行运行的容器组数量。',
  COMPLETE_PODS_DESC: '将任务标记为完成所需成功运行的容器组数量。',
  MAXIMUM_DURATION_DESC: '任务的最大运行时间。任务达到最大运行时间时将被结束。',

  RESTART_POLICY_NEVER_DESC: '重新创建容器组',
  RESTART_POLICY_ONFAILURE_DESC: '重启容器',

  RESTART_POLICY_TIP:
    'RestartPolicy 只能指定 Never 或 OnFailure，当任务未完成的情况下：<br/>* 如果 RestartPolicy 指定 Never，则任务会在容器组出现故障时创建新的容器组，且故障容器组不会消失。<br/>* 如果 RestartPolicy 指定 OnFailure，则任务会在容器组出现故障时其内部重启容器，而不是创建容器组。',

  MONITORING_ALERT_DESC:
    '默认最多显示五个容器组副本的信息。您可以点击<b>查看所有副本</b>以查看所有容器组副本的信息。',

  CONTAINER_CPU_DESC:
    '作为容器调度时资源分配的判断依赖。只有当节点上可分配CPU总量 ≥ 容器CPU最小使用值时，才允许将容器调度到该节点。单位换算规则: 1核 = 1000m',
  CONTAINER_MEMORY_DESC:
    '作为容器调度时资源分配的判断依赖。只有当节点上可分配内存总量 ≥ 容器内存最小使用值时，才允许将容器调度到该节点。',
  'request CPU should not be greater than limit CPU':
    '最小使用 CPU 值应不大于最大使用 CPU 值',
  'request memory should not be greater than limit memory':
    '最小使用内存值应不大于最大使用内存值',

  INVALID_IMAGE: '镜像无效。',
  IMAGE_PULL_POLICY_ALWAYS: '每次都拉取镜像',
  IMAGE_PULL_POLICY_IFNOTPRESENT: '优先使用本地镜像',
  IMAGE_PULL_POLICY_NEVER: '仅使用本地镜像',
  IMAGE_PULL_POLICY_ALWAYS_DESC:
    '在容器组创建及更新时，每次都尝试拉取新的镜像。',
  IMAGE_PULL_POLICY_IFNOTPRESENT_DESC:
    '如果本地存在所需的镜像，则优先使用本地镜像。',
  IMAGE_PULL_POLICY_NEVER_DESC:
    '仅使用本地镜像。如果本地不存在所需的镜像，则会导致容器异常。',

  LIVENESS_CHECK_DESC: '检查容器是否存活。',
  READINESS_CHECK_DESC: '检查容器是否可以处理请求。',
  STARTUP_CHECK_DESC: '检查容器是否启动成功。',
  STARTUP_CHECK_TIP: '需要 Kubernetes v1.18 或以上版本。',

  VOLUME_OR_TEMPLATE_EMPTY:
    '您已开启收集存储卷上的日志，请至少挂载一个存储卷或存储卷模板并指定日志所在的目录。',
  VOLUME_EMPTY:
    '您已开启收集存储卷上的日志，请至少挂载一个存储卷并指定日志所在的目录。',
  COLLECT_LOGS_ON_VOLUMES_DESC:
    '允许系统收集保存在存储卷上的容器日志。如需使用此功能，请为容器挂载读写模式的存储卷并设置容器将日志导出到存储卷。',

  PROJECT_COLLECT_SAVED_DISABLED_DESC:
    '如需开启此功能，您需要在项目设置中开启收集存储卷上的日志。',

  ADD_VOLUME_TEMPLATE_DESC:
    '添加存储卷模板以挂载与容器组具有相同生命周期的存储卷。',

  CONTAINER_LOG_PATH_TIP:
    '容器日志的路径，相对于存储卷的挂载路径，支持通配符，可使用半角逗号（,）分隔多个路径。例如，当存储卷挂载路径为 /data 时，log/*.log 表示日志文件为 /data/log 目录下所有 .log 格式的文件。',

  NO_DEFAULT_PORT: '暂无默认端口配置',
  ports: '端口',
  layers: '层级',
  REGISTRY: '仓库',
  'Private Registry': '私有仓库',
  'Image Name': '镜像名称',
  NO_IMAGE_FOUND: '没有找到镜像',
  CUSTOM_RULES: '自定义规则',
  CUSTOM_RULES_DESC: '按照自定义的规则将容器组副本调度到节点。',
  DECENTRALIZED_SCHEDULING: '分散调度',
  'Pod Soft Decentralized Deployment': '容器组软分散部署',
  'Pod Hard Decentralized Deployment': '容器组硬分散部署',
  CENTRALIZED_SCHEDULING: '集中调度',
  'Pod Soft Aggregation Deployment': '容器组软聚合部署',
  'Pod Hard Aggregation Deployment': '容器组硬聚合部署',
  'Pod replicas will be deployed on different nodes as much as possible.':
    '容器组副本将会尽量分散在不同的节点中',
  'Pod replicas will be deployed on the same node as much as possible.':
    '容器组副本将会尽量部署在同一节点上',
  'Pod replicas will be deployed according to user customization.':
    '容器组副本将根据用户自定义规则部署',
  DECENTRALIZED_SCHEDULING_DESC: '尽可能将容器组副本调度到不同的节点上。',
  CENTRALIZED_SCHEDULING_DESC: '尽可能将容器组副本调度到同一节点上。',
  ADD_CONTAINER_DESC: '自定义容器的设置以创建容器。',

  SCHEDULING_INFORMATION: '调度信息',
  SCHEDULING_RESULT: '调度结果',
  POD_STATUS_ANALYSIS: '容器状态分析',
  CURRENT_STATUS: '当前状态',
  SCHEDULED_TO_NODE: '调度至 {value}',
  SCHEDULING_NOT_SUCCESSFUL: '调度未成功',
  POD_SCHEDULING_METHOD: '容器组调度方式',
  'Pod CPU Request': '容器组CPU请求',
  'Pod Memory Request': '容器组内存预留',

  SYNC_HOST_TIMEZONE: '同步主机时区',

  POD_CONDITION_INITIALIZED: '初始化完成',
  POD_CONDITION_INITIALIZED_DESC: '启动所有初始化容器。',
  POD_CONDITION_READY: '容器组就绪',
  POD_CONDITION_READY_DESC: '开始运行并允访问容器组。',
  POD_CONDITION_CONTAINERSREADY: '所有容器就绪',
  POD_CONDITION_CONTAINERSREADY_DESC: '启动容器组中的所有容器。',
  POD_CONDITION_PODSCHEDULED: '容器组调度完成',
  POD_CONDITION_PODSCHEDULED_DESC: '将容器组调度到集群中的一个节点。',

  POD_REASON_FAILEDCREATE: '创建失败',
  POD_REASON_SUCCESSFULCREATE: '创建成功',
  POD_REASON_FAILEDDELETE: '删除失败',
  POD_REASON_SUCCESSFULDELETE: '删除成功',

  POD_ASSIGNED_DESC:
    '系统根据容器组的资源预留值将容器组调度到具有足够可用资源的节点上。',

  CrashLoopBackOff: '容器退出，kubelet 正在将它重启',
  InvalidImageName: '无法解析镜像名称',
  ImageInspectError: '无法校验镜像',
  ErrImageNeverPull: '当前策略禁止拉取镜像',
  ImagePullBackOff: '正在重试拉取镜像',
  RegistryUnavailable: '无法连接镜像仓库',
  ErrImagePull: '镜像拉取失败',
  CreateContainerConfigError: '不能创建 kubelet 使用的容器配置',
  CreateContainerError: '创建容器失败',
  'm.internalLifecycle.PreStartContainer': '执行 hook 报错',
  RunContainerError: '启动容器失败',
  PostStartHookError: '执行 hook 报错',
  ContainersNotInitialized: '容器未初始化',
  ContainersNotReady: '容器没有准备就绪',
  ContainerNotReady: '容器没有准备就绪',
  ContainerCreating: '容器创建中',
  PodInitializing: '容器组初始化中',
  DockerDaemonNotReady: 'Docker 还没有完全启动',
  NetworkPluginNotReady: '网络插件还没有完全启动',
  POD_DESC:
    '容器组（Pod）是 Kubernetes 应用程序的基本执行单元，是您创建或部署的 Kubernetes 对象模型中最小和最简单的单元。',
  POD_EMPTY_DESC: '请创建一个容器组。',
  FILL_IMAGE_DEFAULT_PORTS_DESC: '是否暴露该镜像的默认端口？',

  ISTIO_PROTOCOL_TIP:
    '选择服务实际使用的协议以充分利用应用治理功能。例如，为 HTTP 服务选择 HTTP 协议。',

  STATUS_INFORMATION: '状态信息',
  WORKLOAD_CONDITION_AVAILABLE: '可用',
  WORKLOAD_CONDITION_PROGRESSING: '进行中',
  WORKLOAD_REASON_REPLICASETUPDATED: '副本集已更新',
  WORKLOAD_REASON_REPLICASETCREATEERROR: '副本集创建错误',
  WORKLOAD_REASON_NEWREPLICASETCREATED: '已创建副本集',
  WORKLOAD_REASON_FOUNDNEWREPLICASET: '发现新副本集',
  WORKLOAD_REASON_NEWREPLICASETAVAILABLE: '新副本集可用',
  WORKLOAD_REASON_PROGRESSDEADLINEEXCEEDED: '进程超时',
  WORKLOAD_REASON_DEPLOYMENTPAUSED: '部署中止',
  WORKLOAD_REASON_DEPLOYMENTRESUMED: '部署已恢复',
  WORKLOAD_REASON_MINIMUMREPLICASAVAILABLE: '达到最小可用副本数量',
  WORKLOAD_REASON_MINIMUMREPLICASUNAVAILABLE: '未达到最小可用副本数量',
  WORKLOAD_REASON_FAILEDCREATE: '创建失败(FailedCreate)',

  ReplicaSetUpdated: '副本已更新',
  ReplicaSetCreateError: '新建副本错误',
  NewReplicaSetCreated: '已创建新副本',
  FoundNewReplicaSet: '发现新副本',
  NewReplicaSetAvailable: '可用新副本',
  ProgressDeadlineExceeded: '处理超时',
  DeploymentPaused: '部署中止',
  DeploymentResumed: '部署已恢复',
  MinimumReplicasAvailable: '最小副本可用',
  MinimumReplicasUnavailable: '最小副本不可用',
  FailedCreate: '创建失败',
  SuccessfulCreate: '创建成功',
  FailedDelete: '删除失败',
  SuccessfulDelete: '删除成功',

  SYNC_HOST_TIMEZONE_DESC: '同步容器与主机的时区。',
  HOSTPATH_TIP:
    '使用 HostPath 存储卷将主机文件系统中的文件或目录挂载到容器中。',

  USE_DEFAULT_PORTS: '使用默认端口',

  CONTAINER_NOT_SELECTED: '请将存储卷挂载到至少一个容器组。',
  'Sure to delete the workload(s)?': '确认删除工作负载',
  NO_RELATED_RESOURCE_FOUND: '没有关联的资源',
  'No related resources found with the current workload(s)':
    '当前工作负载下没有关联的资源',
  DELETE_WORKLOAD_DESC_SI:
    '您即将删除工作负载 {resource}。<br/>请确认是否同时删除以下与工作负载关联的资源。',
  DELETE_WORKLOAD_DESC_PL:
    '您即将删除工作负载 {resource}。<br/>请确认是否同时删除以下与工作负载关联的资源。',

  'Container Security Context': '容器 Security Context',
  'Pod Security Context': '容器组 Security Context',
  'User and User Group': '用户和用户组',
  'User Group': '用户组',
  CONTAINER_SECURITY_CTX_DESC:
    'Security Context的目的是限制不可信容器的行为，保护系统和其他容器不受其影响。',
  ACCESS_CONTROL_PRIVILEGED: '以特权模式运行(Privileged)',
  ACCESS_CONTROL_PRIVILEGED_DESC:
    '此时容器中的进程本质上等价于宿主节点上的 root 用户。',
  ACCESS_CONTROL_ALLOWPRIVILEGEESCALATION:
    '允许扩大特权(AllowPrivilegeEscalation)',
  ACCESS_CONTROL_ALLOWPRIVILEGEESCALATION_DESC:
    '进程是否可以获取比父进程更多的特权。当以特权模式运行时，则为允许状态。',
  ACCESS_CONTROL_READONLYROOTFILESYSTEM:
    '文件系统root只读(ReadOnlyRootFilesystem)',
  ACCESS_CONTROL_READONLYROOTFILESYSTEM_DESC:
    '该容器的文件系统根路径是否为只读。',
  CONTAINER_SECURITY_CONTEXT: '容器安全上下文',
  POD_SECURITY_CONTEXT: '容器组安全上下文',
  USER_AND_USER_GROUP: '用户和用户组',
  USER_GROUP: '用户组',
  CONTAINER_SECURITY_CONTEXT_DESC: '自定义容器的权限设置。',
  POD_SECURITY_CONTEXT_DESC: '自定义容器组的权限设置。',
  POD_SECURITY_CONTEXT_TIP:
    '如果容器组安全上下文和容器安全上下文中都设置了用户、用户组和 SELinux 上下文，容器安全上下文中的设置将覆盖容器组安全上下文中的设置。',
  PRIVILEGED_MODE: '特权模式',
  PRIVILEGED_MODE_DESC: '以主机上的 root 用户运行容器进程。',
  ALLOW_PRIVILEGE_ESCALATION: '允许特权提升',
  ALLOW_PRIVILEGE_ESCALATION_DESC:
    '允许容器进程获取比父进程更多的特权。当特权模式打开时，此选项目默认打开。',
  ROOT_DIRECTORY_READONLY: '根目录只读',
  ROOT_DIRECTORY_READONLY_DESC: '将容器文件系统的根目录设置为只读。',
  RUN_AS_NON_ROOT: '仅允许非 root 用户运行',
  RUN_AS_NON_ROOT_DESC:
    '启动容器之前检查容器是否将以 root 用户运行。如果容器将以 root 用户运行则不启动容器。',
  RUN_AS_USER_DESC: '执行容器进程入口点的 UID。默认为镜像元数据中指定的 GID。',
  RUN_AS_USER_GROUP_DESC:
    '执行容器进程入口点的 GID。默认为容器运行时的默认 GID。',

  COMPARE_WITH: '与上一个记录 {version} 对比',
  REVISION_RECORDS_DESC:
    '系统在工作负载创建或修改后将生成修改记录，可用于回退工作负载设置。最多可保留 10 条修改记录。',

  CLUSTER_DIFF_CONTAINER_SETTINGS_DESC: '在不同的集群中使用不同的容器设置。',
  CLUSTER_DIFF_PORT_SETTINGS_DESC: '为不同集群中的容器设置不同的端口。',
  CLUSTER_DIFF_ENVIRONMENT_VARIABLES_DESC:
    '为不同集群中的容器设置不同的环境变量。',

  CONTAINER_RESOURCE_LIMIT_TIP:
    '设置容器的资源限制与资源预留，以将容器调度到合适的节点上。',

  REPLICAS_AVAILABLE: '实际副本',
  REPLICAS_DESIRED: '期望副本数',

  DEPLOY_PLACEMENT_TIP_TITLE: '什么是部署位置？',
  DEPLOY_PLACEMENT_TIP_VALUE:
    '可以将容器组部署在不同集群中，并对集群中部署的副本数量进行定义。不同集群中的容器组将由联邦集群控制器(Federation Controller Manager)进行统一的调度及状态同步。',
  CERT_ERROR: '证书错误。',
  IGNORE_CERT_WARN_DESC: '忽略证书验证可能会导致帐户密码被泄露。',
  INVALID_PROJECT: '项目无效。',

  DESC_CREATE_CONFIGMAP_SECRET: '如果没有合适的配置文件或密钥引用, 您可以',

  // Pods Page
  NODE_IP: '{node}（{ip}）',

  // Jobs
  JOB_PL: '任务',
  JOBS: '任务',
  NUMBER_OF_JOBS: '任务数量',
  JOB_LOW: '任务',
  CRONJOBS: '定时任务',
  SCHEDULE: '定时计划',

  // CronJobs
  ADD_VOLUME: '添加存储卷',
  RESTART_POLICY_DESC: '选择容器组中的容器异常退出时，系统采取的策略。',
  MOUNT_VOLUMES: '挂载存储卷',

  // Workload
  NETWORK_SEGMENT_SCAP: '网段',
  JOB_COMPLETED: '已完成',
  JOB_FAILED: '失败',
  JOB_RUNNING: '运行中',
  CRONJOB_PAUSED: '已暂停',
  CRONJOB_RUNNING: '运行中',
  CRONJOB_FAILED: '失败',
  'Submit for Review': '提交审核',
  CANCEL_SUBMISSION: '取消提交',
  'Release to Store': '发布到商店',
  'View in Store': '在商店查看',
  SUSPEND_VERSION: '下架版本',
  ACTIVATE_VERSION: '上架版本',
  'Delete Version': '删除版本',
  SUSPEND_APP: '下架应用',
  ACTIVATE_APP: '上架应用',

  VERSION_DELETE_TIP: '您确定要删除版本 <strong>{name}</strong> 吗？',
  VERSION_SUBMIT_TIP: '您确定要提交版本 <strong>{name}</strong> 进行发布？',
  VERSION_CANCEL_TIP: '您确定要撤消版本 <strong>{name}</strong> 的提交吗？',
  VERSION_SUSPEND_TIP:
    '版本 <strong>{name}</strong> 下架后，关联的应用将不显示该版本，您确定要下架吗？',
  VERSION_RECOVER_TIP:
    '版本 <strong>{name}</strong> 恢复上架后，关联的应用将显示出该版本，您确定要恢复上架吗？',
  VERSION_RELEASE_TIP:
    '版本 <strong>{name}</strong> 发布到商店后，用户可以查看并部署该应用版本，您确定要发布吗？',
  APP_SUSPEND_TIP:
    '应用 <strong>{name}</strong> 下架后，用户无法从商店中部署此应用，您确定要下架该应用吗？',
  APP_RECOVER_TIP:
    '应用 <strong>{name}</strong> 上架后，相关的下架版本都将变成上架，您确定要上架该应用吗？',

  'Version Management': '版本管理',
  'App Information': '应用信息',
  'Audit Records': '应用审核',
  'App Instances': '应用实例',
  'Deployed Instances': '部署实例',
  Versions: '版本',

  PACKAGE_FILE_DESC:
    'Package.json文件，用于描述应用或版本的基本信息，包括名称版本号等',
  CONFIG_FILE_DESC: '应用的默认值配置文件',
  LICENSE_FILE_DESC: '文本格式的许可协议。',
  LOCALE_EN__FILE_DESC: '应用配置的国际化英文翻译',
  LOCALE_ZH_FILE_DESC: '应用配置的国际化中文翻译',
  CHART_FILE_DESC: 'YAML 文件，用于描述 chart 的基本信息，例如名称和版本。',
  README_FILE_DESC: '应用介绍和使用说明。',
  REQUIREMENTS_FILE_DESC: 'Chart 依赖关系描述文件。',
  VALUES_FILE_DESC: 'Chart 的默认值配置文件。',
  CHARTS_FILE_DESC: '存放 chart 依赖项的目录。',
  TEMPLATES_FILE_DESC: '存放部署模板文件的目录。',
  NOTES_FILE_DESC: '使用指南。',

  'Version Update Info': '版本更新说明',
  NO_VERSION_INFO_DESC: '未发现版本信息。',

  developer: '开发者',
  isv: '应用服务商',
  business: '商务审核者',
  technical: '技术审核者',
  global_admin: '超级管理员',
  admin: '管理员',

  DOWNLOAD_SUCCESSFUL: '下载成功。',

  PASSED: '已通过',
  Rejected: '已拒绝',
  Draft: '待提交',
  Suspended: '已下架',
  Submitted: '等待审核',
  Submit: '提交',
  Review: '审核',
  Pass: '通过',
  Reject: '拒绝',
  Release: '发布',
  Developing: '开发中',
  Published: '已上架',
  Recalled: '已下架',
  Recall: '下架',
  Activated: '已激活',
  'In-review': '审核中',
  'in-review': '审核中',
  'Pending-review': '审核中',
  creating: '创建中',
  deleting: '删除中',

  'Test Steps': '测试步骤',
  VERSION_SUBMIT_TEST_STEPS:
    '1. 所有依赖的 chart 已经分别提交。<br/>' +
    '2. 可以成功通过静态检查（helm lint）。<br/>' +
    '3. 可以用默认值成功启动应用（helm install）。所有容器组处于运行中状态，所有服务（Service）都至少有一个端点。<br/>' +
    '4. 使用的镜像没有安全漏洞。<br/>' +
    '5. 支持升级。<br/>' +
    '6. 支持自定义应用配置。<br/>' +
    '7. 不要使用 Kubernetes 的 alpha 功能。<br/>' +
    '8. 需要提供详细的说明文档，包括应用介绍、准备工作和自定义参数配置。<br/>',

  VERSION_SUBMIT_NOTE: '提交之前，请确认您的应用满足以下要求：',
  VERSION_SUBMIT_DOC: '更全面的测试手册请参看',
  'Develop and test guide': '《开发者测试指南》',
  UPDATE_LOG_DESC: '填写关于应用更新的详细信息。',

  'Wrong version number format': '版本号的格式错误',

  // App Templates > Details
  APP_INSTANCES: '应用实例',
  UPLOAD_NEW_VERSION: '上传新版本',
  UPLOAD_NEW_VERSION_DESC: '上传应用模板的新版本。',
  APP_VERSION_SCAP: '应用版本',
  UPDATE_TIME_SCAP: '更新时间',
  TEST_INSTALLATION: '测试安装',
  SUBMIT_FOR_RELEASE: '提交发布',
  VERSION_INFO: '版本信息',
  INSTALL: '安装',
  users: '用户',
  User: '用户',
  USER: '用户',
  USER_LOW: '用户',
  USER_EMPTY_DESC: '请创建一个用户。',
  Accounts: '帐户',
  'User Management': '用户管理',
  'Authorized Projects': '授权项目',
  'Create User': '创建用户',
  CREATE_USER: '添加用户',
  EDIT_USER: '编辑用户',
  user_active: '活跃',
  Avatar: '头像',
  NOT_LOGIN_YET: '尚未登录',
  NOT_LOGGED_IN: '尚未登录',
  'Change Password': '修改密码',
  PASSWORD_SETTINGS: '密码设置',
  EMAIL: '邮箱',
  USER_AVATAR_TIP: '头像尺寸必须小于 120px X 120px，支持 png，jpg 格式。',
  EMAIL_DESC: '邮箱地址可用于登录 KubeSphere Web 控制台。',
  USERNAME_DESC:
    '用户名只能包含小写字母、数字、连字符（-）和句点（.），必须以小写字母或数字开头及结尾，最长 32 个字符。',
  USER_SETTING_EMAIL_DESC: '邮箱地址可用于登录 KubeSphere Web 控制台。',
  PASSWORD_DESC:
    '密码必须包含数字、大写字母和小写字母，长度为 6 至 64 个字符。',
  PASSWORD_INVALID_DESC:
    '密码无效。密码必须包含数字、大写字母和小写字母，长度为 6 至 64 个字符。',
  PLATFORM_ROLE_DESC: '设置用户在 KubeSphere 平台的角色。',
  'New Password': '新的密码',
  USERNAME_EMPTY_DESC: '请输入一个用户名。',
  EMAIL_EMPTY_DESC: '请输入一个邮箱地址。',
  'Please repeat the new password': '请重复新的密码',
  ENTER_CURRENT_PASSWORD_TIP: '请输入当前密码。',
  PASSWORD_NOT_SAME_DESC: '两次输入的密码必须一致。',
  'Please select role': '请选择角色',
  USERNAME_INVALID: '用户名无效。{message}',
  USERNAME_EXISTS: '用户名已存在，请输入其他用户名。',
  EMAIL_EXISTS: '邮箱地址已存在，请输入其他邮箱地址。',
  'Unable to delete itself': '无法删除自己',
  'Login History': '登录历史',
  Time: '时间',
  TIME: '时间',
  CONFIRM_PASSWORD: '确认密码',

  USER_ACTIVE: '活跃',
  USER_AUTHLIMITEXCEEDED: '限制登录',
  USER_PENDING: '等待中',
  USER_DISABLED: '已禁用',
  USER_DESC: '管理用户及其角色。',
  USER_CREATE_DESC:
    '系统管理员用此功能模块管理帐户，如创建、更新、读取、删除帐户等，同时还能关联每个帐户的角色；用户用帐户名称或邮件地址登录 KubeSphere 平台。',
  CLUSTER_ROLE_DESC: '集群角色定义了在集群范围内授权用户的访问权限。',
  ROLE_BASEINFO_DESC: '',
  ROLE_AUTHORIZATION_DESC: '',
  MEMBER_ROLE_CREATE_DESC:
    '用户的权限管理依赖项目角色定义，角色标识了用户的身份，定义了用户和可访问/操作的资源之间的关系。当 KubeSphere 预置角色不满足使用要求的时候，可以根据实际情况，为用户创建自定义角色，自定义角色最大的优势即对平台资源的细粒度管理，指定该角色拥有某些指定资源的何种权限。',

  'A built-in cluster administrator': '默认创建的管理员帐户。',

  CURRENT_PASSWORD: '当前密码',

  ENTER_CURRENT_PASSWORD_DESC: '您必须输入当前密码才能修改密码。',

  'At least 1 uppercase and lowercase letter': '至少 1 个大写和小写字母',
  'At least 1 number': '至少 1 个数字',
  'Password length is at least 6 characters': '密码长度至少为 6',
  'Password Strength': '密码强度',
  'Avoid using the password that has already been used on other websites or the one that can be easily guessed.':
    '避免使用您在其它网站上的密码，或者是其他人很容易猜到的密码',

  // Users > Details
  SOURCE_IP_ADDRESS: '源 IP 地址',
  LOGIN_HISTORY: '登录历史',
  NO_LOGIN_HISTORY: '未发现登录历史。',
  CHANGE_PASSWORD: '修改密码',
  SUCCESSFUL: '成功',
  FAILED: '失败',
  NEW_PASSWORD: '新的密码',
  CONFIRM_PASSWORD_TIP: '请再次输入新的密码。',
  LANGUAGE: '语言',
  USER_SETTINGS: '用户设置',
  LOG_OUT: '登出',
  ABOUT: '关于',
  USERNAME_OR_EMAIL: '用户名或邮箱',
  WELCOME: '欢迎登录',
  'Launch kubectl': '启动 kubectl',
  COPIED_SUCCESSFUL: '复制成功',
  COPY: '复制',
  Disconnect: '断开连接',
  connected: '已连接',
  disconnected: '未连接',
  'Kubeconfig File': 'Kubeconfig 文件',
  'Put this into': '把它加入到',
  'KubeSphere Terminal': 'KubeSphere 终端',
  'Download File': '下载文件',

  KUBECONFIG_TIP: `
    <h2><a id="KubeConfig__0"></a>配置方法</h2>
    <p>通过使用 kubeconfig 文件配置当前集群的访问信息。<a href="https://kubernetes.io/zh/docs/tasks/access-application-cluster/configure-access-multiple-clusters/" target="_blank">了解更多</a></p>
  `,

  VIEW_KUBE_CONFIG: '查看或下载当前集群的 kubeconfig 文件。',

  KUBECTL_TIP: `
    <h2><a id="KubeCtl__0"></a>命令参考</h2>
    <p>您可以参考以下 kubectl 命令。<a href="https://kubernetes.io/zh/docs/reference/kubectl/overview/" target="_blank">了解更多</a></p>
    <h3><a id="kubectl__3"></a>自定义输出</h3>
    <ul>
    <li>查看容器组的更多信息</li>
    </ul>
    <p><code>kubectl get pod &lt;容器组名称&gt; -o wide</code></p>
    <ul>
    <li>查看 YAML 格式的容器组详情</li>
    </ul>
    <p><code>kubectl get pod &lt;容器组名称&gt; -o yaml</code></p>
    <h3><a id="kubectl__13"></a>执行操作</h3>
    <h4><a id="1__15"></a>创建资源</h4>
    <ul>
    <li>使用 YAML 配置文件创建服务</li>
    </ul>
    <p><code>kubectl create -f my-service.yaml</code></p>
    <ul>
    <li>使用目录下的所有 YAML、YML 和 JSON 文件创建资源</li>
    </ul>
    <p><code>kubectl create -f &lt;目录&gt;</code></p>
    <h4><a id="2__25"></a>查看资源</h4>
    <ul>
    <li>查看所有容器组</li>
    </ul>
    <p><code>kubectl get pods</code></p>
    <ul>
    <li>查看所有服务</li>
    </ul>
    <p><code>kubectl get services</code></p>
    <h4><a id="3__35"></a>查看资源详情</h4>
    <ul>
    <li>查看节点详情</li>
    </ul>
    <p><code>kubectl describe nodes &lt;节点名称&gt;</code></p>
    <ul>
    <li>查看容器组详情</li>
    </ul>
    <p><code>kubectl describe pods &lt;容器组名称&gt;</code></p>
  `,
  ACCESS_MODE_RWO: '单个节点读写',
  ACCESS_MODE_ROX: '多节点只读',
  ACCESS_MODE_RWX: '多节点读写',
  // Volume Pages
  ACCESS_MODE_TCAP: '访问模式',

  VOLUME_STATUS_BOUND: '准备就绪',
  VOLUME_STATUS_LOST: '丢失',
  VOLUME_STATUS_PENDING: '等待中',
  VOLUME_STATUS_TERMINATING: '删除中',
  VOLUME_STATUS_UPDATING: '更新中',
  CREATE: '创建',
  UPDATE: '更新',
  VOLUME_CONDITION_FILESYSTEMRESIZEPENDING: '硬盘扩容中(FilesystemSizePending)',

  volumes: '存储卷',
  VOLUMES: '存储卷',
  PersistentVolumeClaim: '存储卷',
  'Volume Usage': '存储卷用量',
  VOLUME: '存储卷',
  BACKEND_IDENTIFIER: '后端标识符',
  VOLUME_PL: '存储卷',
  NUMBER_OF_VOLUMES: '存储卷数量',
  VOLUME_LOW: '存储卷',
  VOLUME_INSTANCE: '存储卷实例',
  VOLUME_INSTANCE_PL: '存储卷实例',
  VOLUME_INSTANCE_LOW: '存储卷实例',
  VOLUME_INSTANCE_EMPTY_DESC: '请将一个存储卷绑定到一个工作负载。',
  'Create Volume': '创建存储卷',
  'Delete Volume': '删除存储卷',
  'storage classes': '存储类型',
  storageclasses: '存储类型',
  'Create Storage Class': '创建存储类型',
  'Storage Class': '存储类型',
  STORAGE_CLASS: '存储类型',
  STORAGE_CLASS_PL: '存储类型',
  STORAGE_CLASS_LOW: '存储类型',
  STORAGE_CLASS_EMPTY_DESC: '请创建一个存储类型。',
  STORAGE_CLASS_VALUE: '存储类型：{value}',
  'Storage Classs': '存储类型',
  STORAGE_CLASS_SETTINGS: '存储类型设置',
  MOUNT_INFORMATION: '挂载信息',
  // Volumes List Page
  MOUNT_STATUS: '挂载',
  MOUNTED: '已挂载',
  NOT_MOUNTED: '未挂载',
  Scalable: '可扩容性',
  RECLAIM_POLICY: '回收机制',
  DELETE_STORAGE_TIP: '如果存储卷正在被挂载时，待工作负载被删除时一同删除。',
  SRORAGE_SETTING_DESC:
    'ReadWriteOnce：单个节点读写。<br/>ReadOnlyMany：多节点只读。<br/>ReadWriteMany：多节点读写。<br/>挂载时只能使用一种模式。',
  'Default Storage Class': '默认存储类型',
  'Default Volume': '默认存储卷',
  'Parameters (key-value pairs)': '参数 (键值对)',
  'Mount Options': '挂载选项',
  VOLUME_EXPANSION: '存储卷扩容',
  'Mount Status': '挂载状态',
  MOUNTED_PODS: '已挂载容器组',
  AVAILABLE: '可用',
  IN_USER: '使用中',

  VOLUME_NAME_EXIST: '存储卷名称已存在。',

  'Used Capacity': '已分配存储',
  AVAILABLE_CAPACITY: '剩余容量',

  PersistentVolumes: '持久化存储卷',

  SET_AS_DEFAULT_STORAGE_CLASS: '设为默认存储类型',
  'Storage Class Name': '存储类型名称',
  DEFAULT: '默认',
  StorageClasses: '存储类型',
  STORAGE_SYSTEM: '存储系统',

  ACCESS_MODE: '访问模式',
  ACCESS_MODE_SCAP: '访问模式',
  'Custom Provisioner': '自定义供应者',
  Parameters: '参数',
  'Apply immediately': '立即生效',

  VOLUME_SIZE_TIP: '存储卷容量必须大于 0。',

  STORAGECLASSES_BASEINFO_DESC:
    '存储类型记录管理员所提供的某类存储的配置信息，创建特定类型的存储卷之前必须已配置相应的存储类型。',
  VOLUMES_BASEINFO_DESC:
    '存储卷可将数据持久化，生命周期独立于应用负载，创建存储卷前请确保已创建存储类型。',
  VOLUME_SETTINGS_DESC:
    '按需填写存储卷的容量大小，存储卷大小和访问模式必须与存储类型和存储服务端能力相适应，访问模式通常选择为 RWO。',

  VOLUME_DESC:
    '存储卷供用户创建的工作负载使用，是将工作负载数据持久化的一种资源对象。',
  VOLUME_EMPTY_DESC: '请创建一个存储卷。',
  STORAGE_CLASS_DESC:
    '存储类型（StorageClass）支持动态卷供应，使管理员能够按需创建新的存储卷。',
  STORAGE_CLASS_CREATE_DESC:
    '存储类型（Storage Class）是由集群管理员配置的多种存储类型，不同的存储类型为集群用户提供不同类型的存储卷。',
  'STORAGE-CLASSES_BASEINFO_DESC':
    '存储类型记录管理员所提供的某类存储的配置信息，创建特定类型的存储卷之前必须已配置相应的存储类型。',
  STORAGE_CLASS_SETTING_DESC:
    '存储类型记录管理员所提供的某类存储的配置信息，创建特定类型的存储卷之前必须已配置相应的存储类型。',

  STORAGE_CLASS_SET_DEFAULT_DESC:
    '设置为默认存储类型后，如果没有特殊指定，系统将默认创建该类型的存储卷。一个 KubeSphere 集群中仅允许设置一个默认存储类型。',

  PROVISIONER_DESC: '提供后端存储',

  VOLUME_STORAGE_CLASS_DESC: '选择一个存储类型来创建特定种类的存储卷。',

  ACCESS_MODES_DESC: '选择存储类型支持的访问模式。',

  WHAT_IS_STORAGE_CLASS_Q: '什么是存储类型?',
  WHAT_IS_STORAGE_CLASS_A:
    '存储类型（Storage Class）是由集群管理员配置的多种存储类型，不同的存储类型为集群用户提供不同类型的存储卷。',

  WHAT_IS_LOCAL_VOLUME_Q: '什么是本地存储卷?',
  WHAT_IS_LOCAL_VOLUME_A: '本地存储卷是创建在集群本地文件系统中的存储卷。',
  CHOOSE_STORAGE_SYSTEM_TIP: '选择存储系统',
  PROVISIONER_DEPENDENCE_DESC: '您需要先在存储系统中部署相关插件才能提供服务。',

  EXPAND_VOLUME: '扩容存储卷',
  EXPAND: '扩容',
  VOLUME_EXPAND_TIPS:
    '当前存储卷已挂载至工作负载，因此扩容会导致工作负载重启，并产生新的版本。可能业务会短暂的中断。',
  Expand: '扩容',

  QINGCLOUD_CSI_DESC:
    '使用 QingCloud CSI 作为底层存储插件。<a href="https://github.com/yunify/qingcloud-csi/blob/master/README.md">了解更多</a>',

  QINGCLOUD_CSI_TYPE_DESC:
    '在青云云平台中，0 代表性能型硬盘；2 代表容量型硬盘；3 代表超高性能型硬盘；5 代表企业级分布式 SAN（NeonSAN）型硬盘；100 代表基础型硬盘；200 代表 SSD 企业型硬盘。',
  CREATE_VOLUME_MAX_SIZE: '存储卷的容量上限。',
  CREATE_VOLUME_STEP_SIZE: '存储卷的增量值。',
  CREATE_VOLUME_MIN_SIZE: '存储卷的容量下限。',
  VOLUME_FS_TYPE: '支持 ext3、ext4 和 XFS。默认类型为 ext4。',
  QINGCLOUD_VOLUME_TAGS_DESC:
    '为存储卷添加标签。使用半角逗号（,）分隔多个标签。',

  MAXSIZE: '容量限制',
  STEPSIZE: '增量值',
  MINSIZE: '容量下限',
  FSTYPE: '文件系统类型',
  TAGS: '标签',

  GLUSTERFS_RESTURL_DESC:
    '供应存储卷的 Heketi REST URL，例如，<Heketi 服务集群 IP 地址>:<Heketi 服务端口号>。',
  GLUSTERFS_ID_DESC: 'Gluster 集群 ID。',
  GLUSTERFS_RESTAUTHENABLED_DESC: ' Gluster 开启对 REST 服务器的认证。',
  GLUSTERFS_RESTUSER_DESC: 'Gluster REST 服务或 Heketi 服务的用户名。',
  GLUSTERFS_SECRET_NAMESPACE_DESC: 'Heketi 用户密钥的所属项目。',
  GLUSTERFS_SECRET_NAME_DESC: 'Heketi 用户密钥的名称。',
  GLUSTERFS_GID_MIN_DESC: '存储卷的 GID 最小值。',
  GLUSTERFS_GID_MAX_DESC: '存储卷的 GID 最大值。',
  GLUSTERFS_VOLUME_TYPE_DESC:
    '存储卷的类型。该值可为 none，replicate:<副本数>，或 disperse:<数据>:<冗余数>。如果未设置该值，则默认存储卷类型为 replicate:3。',

  CEPHRBD_MONITORS_DESC: 'Ceph 集群 Monitors 的 IP 地址。',
  CEPHRBD_ADMIN_ID_DESC: 'Ceph 集群能够创建卷的用户 ID。',
  CEPHRBD_ADMIN_SECRET_NAME_DESC: 'adminid 的密钥名称。',
  CEPHRBD_ADMIN_SECRET_NAMESPACE_DESC: 'adminSecrect 所在的项目。',
  CEPHRBD_POOL_DESC: 'Ceph RBD 的 Pool 名称。',
  CEPHRBD_USERID_DESC: 'Ceph 集群能够挂载卷的用户 ID。',
  CEPHRBD_USER_SECRET_NAME_DESC: 'userid 的密钥名称。',
  CEPHRBD_USER_SECRET_NAMESPACE_DESC: 'userSecret 所在的项目。',
  CEPHRBD_FS_TYPE_DESC: '存储卷的文件系统类型。',
  CEPHRBD_IMAGE_FORMAT_DESC:
    'Ceph 卷的选项。该值可为“1”或“2”，选择“2”后需要填写 imageFeatures。',
  CEPHRBD_IMAGE_FEATURES_DESC:
    'Ceph 集群的额外功能。仅当设置 imageFormat 为“2”时，才需要填写该值。',

  DEPENDENT_STORAGE_CLASS_DELETE_TIPS:
    '请确认是否有资源依赖该存储类型。若有，请先将依赖的资源关闭，以免影响资源的功能。',

  CREATE_VOLUME_WITH_SNAPSHOT: '基于快照创建存储卷',

  CREATE_SNAPSHOT: '创建快照',
  CLONE_VOLUME: '存储卷克隆',
  CLONE: '克隆',
  ALLOW_VOLUME_SNAPSHOT: '允许存储卷快照',
  ALLOW_VOLUME_CLONE: '允许存储卷克隆',
  ALLOW_VOLUME_EXPANSION: '允许存储卷扩容',
  PV: '存储卷后端',
  VOLUME_BACKEND_TCAP: '存储卷实例',
  PV_STATUS_AVAILABLE: '可用',
  PV_STATUS_BOUND: '已绑定',
  PV_STATUS_RELEASED: '删除中',
  PV_STATUS_FAILED: '失败',
  'Bound Volume': '已绑定存储卷',
  RECYCLING_STRATEGY: '回收策略',
  VOLUME_SNAPSHOT_STATUS_CREATING: '创建中',
  VOLUME_SNAPSHOT_STATUS_READY: '创建成功',
  VOLUME_SNAPSHOT_STATUS_FAILED: '创建失败',
  VOLUME_SNAPSHOT_STATUS_DELETING: '删除中',

  SNAPSHOT_PL: '快照',

  VolumeSnapshots: '存储卷快照',
  VOLUME_SNAPSHOT_DESC:
    '存储卷快照是存储卷在特定时间点的副本，可使用快照中的数据预配新存储卷，或者将存储卷恢复至快照捕捉到的先前状态。',
  VOLUME_SNAPSHOT_EMPTY_DESC: '请前往存储卷详情页面创建一个存储卷快照。',
  WHAT_IS_VOLUME_SNAPSHOTS: '什么是存储卷快照',

  CREATE_VOLUME_BY_STORAGE_CLASS: '通过存储类型创建',
  CREATE_VOLUME_BY_SNAPSHOT: '通过存储卷快照创建',
  SELECT_SNAPSHOT_TO_CREATE_VOLUME: '选择已有的存储卷快照来创建存储卷。',
  SELECT_STORAGE_CLASS_CREATE_VOLUME: '选择已有的存储类型来创建存储卷。',

  CLUSTER_VOLUME_DIFF_DESC: '在不同的集群中使用不同的存储设置。',

  VOLUME_MONITORING_TIP:
    '目前仅支持采集已挂载存储卷的用量数据，并且 OpenEBS、Local PV、NFS 等路径型存储卷的用量数据通常与实际值有一定出入。<a href="https://github.com/kubesphere/kubesphere/issues/2921" target="_blank">了解更多</a>',

  VOLUME_FUNCTION_MANAGEMENT_TIP:
    '存储卷管理只控制是否在 KubeSphere Web 控制台启用以下功能。开启前，请联系系统管理员确认存储系统是否支持这些功能。',
  // Storage Class > GlusterFS
  RESTURL: 'REST URL',
  CLUSTER_ID: '集群 ID',
  REST_AUTH_ENABLED: '开启 REST 认证',
  REST_USER: 'REST 用户',
  VOLUME_TYPE: '存储卷类型',
  SECRET_NAME: '密钥名称',
  REST_AUTH_TRUE: '是',
  CEPH_MONITOR_IP: 'IP 地址:端口号',
  SECRET_NAMESPACE: '密钥所属项目',
  GID_MIN: 'GID 最小值',
  GID_MAX: 'GID 最大值',
  CUSTOM: '自定义',
  PARAMETERS: '参数',
  VOLUME_SNAPSHOT_CLASS: '快照类型',
  SNAPSHOT_EMPTY_TIP: '请选择一个快照类型。',
  VOLUME_BINDING_MODE: '存储卷绑定模式',
  IMMEDIATE_BINDING: '立即绑定',
  BINDING_WAIT: '延迟绑定',
  DEFAULT_STORAGE_CLASS: '默认存储类型',

  // Storage Class > Detail
  STORAGE_CLASS_SCAP: '存储类型',
  CREATE_VOLUME: '创建存储卷',
  VOLUME_MANAGEMENT: '存储卷管理',
  SET_DEFAULT_STORAGE_CLASS_TITLE: '设为默认存储类型',
  VOLUME_COUNT: '存储卷数量',
  NODE_CPU_UTILISATION: 'CPU 用量',
  NODE_LOAD1: 'CPU 平均负载',
  NODE_MEMORY_UTILISATION: '内存用量',
  NODE_DISK_SIZE_UTILISATION: '磁盘用量',
  NODE_POD_UTILISATION: '容器组用量',
  NODE_DISK_INODE_UTILISATION: 'Inode 用量',

  SORT_BY_NODE_CPU_UTILISATION: '按 CPU 用量排行',
  SORT_BY_NODE_MEMORY_UTILISATION: '按内存用量排行',
  SORT_BY_NODE_DISK_SIZE_UTILISATION: '按磁盘用量排行',
  SORT_BY_NODE_POD_UTILISATION: '按容器组用量排行',
  SORT_BY_NODE_DISK_INODE_UTILISATION: '按 Inode 用量排行',

  SORT_BY_NODE_LOAD1: '按 CPU 平均负载排行',
  SORT_BY_NAMESPACE_MEMORY_USAGE_WO_CACHE: '按内存用量排行',
  SORT_BY_NAMESPACE_CPU_USAGE: '按 CPU 用量排行',
  SORT_BY_NAMESPACE_POD_COUNT: '按容器组数量排行',
  SORT_BY_NAMESPACE_NET_BYTES_RECEIVED: '按入站流量排行',
  SORT_BY_NAMESPACE_NET_BYTES_TRANSMITTED: '按出站流量排行',
  SORT_BY_WORKSPACE_MEMORY_USAGE: '按内存用量排行',
  SORT_BY_WORKSPACE_MEMORY_USAGE_WO_CACHE: '按内存用量排行',
  SORT_BY_WORKSPACE_POD_COUNT: '按容器组数量排行',
  SORT_BY_WORKSPACE_CPU_USAGE: '按 CPU 用量排行',
  SORT_BY_WORKSPACE_NET_BYTES_TRANSMITTED: '按出站流量排行',
  SORT_BY_WORKSPACE_NET_BYTES_RECEIVED: '按入站流量排行',
  SORT_BY_WORKLOAD_CPU_USAGE: '按 CPU 用量排行',
  SORT_BY_WORKLOAD_MEMORY_USAGE_WO_CACHE: '按内存用量排行',
  SORT_BY_WORKLOAD_NET_BYTES_TRANSMITTED: '按出站流量排行',
  SORT_BY_WORKLOAD_NET_BYTES_RECEIVED: '按入站流量排行',
  PLATFORM_SETTINGS: '平台设置',
  'Platform Settings': '平台设置',

  'Third-party Login': '第三方登录',

  'Protocol Type': '协议类型',

  Configure: '配置',
  'not configured': '暂未配置',

  'Current third-party login configurations': '当前第三方登录配置',

  'Server Address': '服务端地址',

  'Please input client id': '请输入 Client ID',
  'Please input server address': '请输入服务端地址',

  THIRD_PARTY_LOGIN_DESC:
    '当使用第三方服务的方式进行接入对接时，需用户输入相关属性信息，之后会自动创建一个与该用户关联的本地用户，便于环境的安全接入登录。',

  THIRD_PARTY_LOGIN_Q: '支持哪些第三方登录？',
  THIRD_PARTY_LOGIN_A: '支持 LDAP, AD, OAuth 以及 Github OAuth',

  OAUTH_DESC:
    'OAuth 协议为用户资源的授权提供了一个安全的、开放而又简易的标准。',
  GITHUB_OAUTH_DESC: 'GitHub OAuth 根据组织成员的身份授予访问权限',
  ServiceAccounts: '服务帐户',
  ServiceAccount: '服务帐户',
  SERVICE_ACCOUNT: '服务帐户',
  SERVICE_ACCOUNT_PL: '服务帐户',
  SERVICE_ACCOUNT_LOW: '服务帐户',
  'Edit Service Account': '编辑服务帐户',
  CHANGE_ROLE: '修改角色',
  SECRET_DETAILS: '保密字典详情',
  SERVICE_ACCOUNT_DESC:
    '服务帐户（Service Account）为容器组中运行的进程提供了一个标识，用于访问 API Server。',
  SERVICE_ACCOUNT_EMPTY_DESC: '请创建一个服务帐户。',
  INVALID_YAML_FILE_FORMAT: 'YAML 文件格式错误。',

  SELECT_PROJECT_ROLE_DESC: '选择一个项目角色以指定权限。',

  SERVICEACCOUNT_KUBECONFIG_DESC:
    '下载 kubeconfig.yaml 文件供其他应用使用，从而为其他应用访问提供可访问当前项目的帐户。如果使用 kubeconfig.yaml 文件的应用部署在当前集群外，您需要将 clusters:cluster:server 参数的值修改为对外暴露的 Kubernetes API 服务器地址。<a href="https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/" target="_black">了解更多</a>',

  // Service Account Detail Page
  SECRET_VALUE: '保密字典：{value}',
  SERVICE_MONITORING_EXPORTER: '服务监控导出器',
  'Target Service': '目标服务',
  EXPORTER_SERVICE_PORTS: '导出服务端口',
  SCRAPE_INTERVAL_MIN: '采集间隔（分钟）',
  'View Monitor': '查看监控',
  MONITORING_EXPORTER: '监控导出器',
  MONITORING_EXPORTER_VALUE: '监控导出器：{value}',

  SELECT_AUTHENTICATION_METHOD: '选择认证方式',
  PORT_CONNECTION_AUTHENTICATION: '端口连接认证。',

  CREATE_A_NEW_SECRET: '创建新保密字典',
  REFRESH_SECRETS: '刷新保密字典。',

  NO_AUTH_TIP: '接口可直接连接，无需认证。',

  SCRAP_INTERVAL_DESC: '监控数据采集间隔，默认为 1 分钟。',
  SCRAP_TIMEOUT_DESC: '超时，默认值 10 秒。',

  // Service Monitoring Exporter Form
  CERTIFICATE_AUTHORITY: '发证机构',
  ENCRYPTION_KEY: '密钥',
  SERVER_NAME: '服务器名称',
  NO_AUTHENTICATION_TCAP: '无需认证',
  TLS_SETTINGS_TCAP: 'TLS 设置',
  BEARER_TOKEN_TCAP: 'Bearer 令牌',
  BASIC_AUTHENTICATION_TCAP: '基础认证',
  services: '服务',
  routes: '应用路由',
  Ports: '端口',
  selector: '选择器',
  EXTERNAL_IP_ADDRESS: '外部 IP 地址',
  EXTERNAL_IP_ADDRESS_SCAP: '外部 IP 地址',
  'LoadBalancer IP': '负载均衡 IP',
  CREATE_SERVICE: '创建服务',
  'Delete Service': '删除服务',
  'Target Port': '目标端口',
  CONTAINER_PORT: '容器端口',
  CONTAINER_PORT_SCAP: '容器端口',
  SERVICE_PORT_SCAP: '服务端口',
  CONTAINER_PORT_VALUE: '容器端口：{value}',
  SERVICE_PORT: '服务端口',
  SERVICE_PORT_VALUE: '服务端口：{value}',
  'Node Port': '节点端口',
  'Node Port(s)': '节点端口',
  EDIT_SERVICE: '编辑服务',
  EDIT_EXTERNAL_ACCESS: '编辑外部访问',
  EDIT_MONITORING_EXPORTER: '编辑监控导出器',
  'Please select Service': '请选择 Service',
  'Path is Required': '请填写 Path',
  VIRTUAL_IP: 'VirtualIP',
  VIRTUAL_IP_ADDRESS: '虚拟 IP 地址',

  SERVICE_TYPE_TCAP: '服务类型',
  SERVICE_TYPE_DESC: '选择一个服务类型。',
  SELECT_SERVICE_TYPE_DESC:
    '创建一个无状态或有状态服务，或将一个服务映射到外部服务。',
  APP_SELECT_SERVICE_TYPE_DESC: '创建一个无状态或有状态服务。',
  ACCESS_INFORMATION: '访问信息',
  STATELESS_SERVICE: '无状态服务',
  STATEFUL_SERVICE: '有状态服务',
  EXTERNAL_SERVICE: '外部服务',
  'Simple Service': '简单服务',
  'Associated Application': '关联应用',
  'Service Mesh': '服务治理',

  'Internal access': '内部访问',
  ACCESS_TYPE: '访问类型',
  INTERNAL_ACCESS_MODE: '内部访问模式',

  'Service Name': '服务名称',
  'Please input service name': '请输入服务名称',
  EXTERNAL_SERVICE_ADDRESS_EMPTY_DESC: '请输入外部服务的域名。',
  SPECIFY_WORKLOAD: '指定工作负载',
  SPECIFY_WORKLOAD_TO_CREATE_SERVICE: '指定工作负载创建服务',
  EDIT_YAML_TO_CREATE_SERVICE: '编辑配置文件创建服务',
  CREATE_EXTERNAL_SERVICE: '创建外部服务',
  'Add Selector': '添加选择器',

  INVALID_PORT_DESC: '请输入有效端口号。',
  'Please input ExternalName': '请输入 ExternalName',
  'Specify Workload': '指定工作负载',

  SPECIFY_NODE: '指定节点',

  INVALID_PORT: '端口无效。',
  'Not Associate': '不关联',

  AUTO_REFRESH: '自动更新',

  CUSTOM_SERVICE: '自定义服务',
  CUSTOMIZE_SERVICE: '自定义服务',
  'Create service by specifying workloads': '指定工作负载创建服务',
  'Create service by Yaml': '通过 Yaml 创建服务',

  'Sure to delete the service(s)?': '确认删除服务',
  NO_SERVICE_RELATED_RESOURCE_DESC: '当前服务没有关联的资源。',
  NO_WORKLOAD_RELATED_RESOURCE_DESC: '当前工作负载没有关联的资源。',

  'Automatically assign Service IP': '自动分配服务 IP',
  'Do not assign Service IP': '不分配服务 IP',
  'Map Services outside the cluster': '映射集群外部的服务',
  ENTER_PORT_NUMBER: '请输入端口号。',
  PORT_EMPTY: '请设置至少一个端口。',
  'Please select a workload': '请选择一个工作负载',
  ENTER_SELECTOR_TIP: '请设置工作负载选择器。',
  TOTAL_WORKLOADS_VALUE: '工作负载总数：{count}',

  STICKY_SESSION: '会话保持',
  MAXIMUM_STICKINESS_DURATION: '最长会话保持时间（s）',
  STICKY_SESSION_DESC:
    '设置系统在指定的时间内将同一个会话中来自同一个客户端的请求全部转发给同一个容器组。',

  SERVICE_NAME_DESC:
    '名称只能包含小写字母、数字和连字符（-），必须以小写字母开头并以小写字母或数字结尾，最长 63 个字符。',

  SERVICE_DESC:
    '服务（Service）提供一种抽象的方法，将运行在容器组（Pod）上的应用程序公开为网络服务。',
  SERVICE_EMPTY_DESC: '请创建一个服务。',

  SERVICES_BASEINFO_DESC:
    '创建服务需要提供服务的名称和描述，服务名称不能和同一项目下已有的服务名称相同。',
  SERVICES_SETTINGS_DESC: '服务设置定义了如何来访问已有的工作负载。',

  CREATE_EXTERNAL_SERVICE_DESC: '创建一个服务并将其映射到一个外部服务。',

  ACCESS_NONE_TIP: '不提供外网访问，只能在集群内访问服务。',
  ACCESS_NODEPORT_TIP: '通过集群节点的端口访问服务。',
  ACCESS_LOADBALANCER_TIP: '通过负载均衡器访问服务。',

  'The current selector': '当前设置的选择器',
  NO_WORKLOAD_MATCH_SELECTOR: '没有工作负载匹配当前选择器。',
  WORKLOADS_MATCH_SELECTOR_SI:
    '当前选择器（{selector}）与 {count} 个工作负载匹配。',
  WORKLOADS_MATCH_SELECTOR_PL:
    '当前选择器（{selector}）与 {count} 个工作负载匹配。',
  'Commonly included tags in the current workloads':
    '当前的工作负载中共同包含的标签',
  SERVICE_SELECTOR_AFFECT_2: '共影响到 {count} 个工作负载',
  ' has no corresponding workload.': '没有对应的工作负载',
  'Please input selectors that have corresponding workloads':
    '请输入有对应工作负载的选择器',
  Creating: '正在创建',
  'Creation failed, please delete and try again': '创建失败，请删除后重试',

  ADD_ROUTING_RULE: '添加路由规则',

  VIRTUAL_IP_TITLE: '虚拟 IP 地址',
  VIRTUAL_IP_DESC:
    '为服务分配虚拟 IP 地址，可通过虚拟 IP 地址在集群内部访问服务。',
  INTERNAL_DOMAIN_NAME: '内部域名',
  INTERNAL_DOMAIN_NAME_DESC:
    '不为服务分配 IP 地址，可通过集群的 DNS 机制在集群内部访问服务。',
  HEADLESS_EXTERNAL_NAME_TITLE:
    '映射集群外部的地址来访 Headless (externalname)',
  HEADLESS_EXTERNAL_NAME_DESC: '将集群或者项目外部服务映射到集群或项目内。',

  SERVICE_EXTERNAL_ACCESS_DESC: '设置从集群外访问服务的方式。',

  SERVICE_NODE_PORT_DESC:
    '如果您的客户机与集群在同一网段，您可以使用<节点 IP 地址>:<节点端口>访问服务。',

  SERVICE_TYPE: '服务类型',
  SELECT_SERVICE_TYPE: '选择服务类型',

  SELECT_WORKLOAD_DESC: '使用工作负载的标签作为选择器。',

  SPECIFY_NODE_DESC: '将节点的标签作为预填充内容',

  SERVICE_TYPES_Q: 'KubeSphere 支持哪些服务类型？',
  SERVICE_TYPES_A:
    'KubeSphere 支持无状态服务和有状态服务。无状态服务中的多个容器组副本共享一个存储卷，有状态服务中的每个容器组副本都拥有独立的存储卷。',

  SCENARIOS_FOR_SERVICES_Q: '无状态服务和有状态服务分别适用于哪些场景？',
  SCENARIOS_FOR_SERVICES_A:
    '无状态服务适用于不需要数据持久化的场景，例如 Nginx 和 Tomcat。有状态服务适用于需要数据持久化的场景，例如 MySQL 数据库、Kafka 和 ZooKeeper。',
  STATEFUL_SERVICE_DESC: '创建一个服务和一个有状态副本集。',
  STATELESS_SERVICE_DESC: '创建一个服务和一个部署。',
  SERVICE_FROM_CODE: '通过代码创建服务',
  SERVICE_FROM_ARTIFACT: '通过制品创建服务',
  SERVICE_FROM_CODE_DESC: '将现有的代码构建成镜像并部署。',
  SERVICE_FROM_ARTIFACT_DESC: '将现有的制品构建成镜像并部署。',
  JAVA: 'Java',
  NODEJS: 'Node.js',
  PYTHON: 'Python',
  BINARY: '二进制',
  LANGUAGE_TYPE_VALUE: '语言类型：{value}',
  ARTIFACT_TYPE_VALUE: '制品类型：{value}',
  SPECIFY_WORKLOAD_DESC: '使用一个或多个现有的工作负载创建来创建服务。',
  DELETE_SERVICE_DESC_PL:
    '您即将删除服务 {resource}。<br/>请确认是否同时删除以下与服务关联的资源。',
  DELETE_SERVICE_DESC_SI:
    '您即将删除服务 {resource}。<br/>请确认是否同时删除以下与服务关联的资源。',

  CUSTOMIZE_SERVICE_DESC: '通过指定工作负载或编辑 YAML 配置文件来创建服务。',

  SERVICE_TYPE_STATEFULSERVICE: '有状态服务',
  SERVICE_TYPE_STATELESSSERVICE: '无状态服务',
  SERVICE_TYPE_EXTERNALSERVICE: '外部服务',
  SERVICE_TYPE_STATEFULSERVICE_SCAP: '有状态服务',
  SERVICE_TYPE_STATELESSSERVICE_SCAP: '无状态服务',
  SERVICE_TYPE_EXTERNALSERVICE_SCAP: '外部服务',

  SERVICE_PORTS_DESC: '设置容器端口和服务端口。',

  INTERNAL_DOMAIN_NAME_SCAP: '内部域名',

  MAXIMUM_STICKINESS_DURATION_DESC:
    '设置最大会话保持时间。取值范围为 0 到 86400，默认值 10800。',

  // Services
  WORKLOAD_SELECTOR: '工作负载选择器',
  UNKNOWN_SERVICE_TYPE: '未知服务类型',
  HEADLESS: 'Headless',
  EXTERNALNAME: 'ExternalName',
  EXTERNAL_SERVICE_ADDRESS: '外部服务地址',
  EXTERNAL_SERVICE_ADDRESS_DESC: '输入外部服务的域名。',
  UNKNOWN: '未知',
  EXTERNALNAME_EXAMPLE: '例如：',
  PORT_PL: '端口',
  ENDPOINT: '端点',
  secrets: '保密字典',
  Secrets: '保密字典',
  Secret: '保密字典',
  SECRET: '保密字典',
  CODE_REPOSITORY_KEY: '代码仓库密钥',
  SECRET_PL: '保密字典',
  SECRET_LOW: '保密字典',
  SECRET_FIELD_COUNT: '字段数量',
  EDIT_SECRET: '编辑保密字典',
  DATA_SETTINGS: '数据设置',
  KUBECONFIG_SETTINGS: 'kubeconfig 设置',
  PRIVATE_KEY_TCAP: '私钥',
  IMAGE_REGISTRY_INFORMATION: '镜像仓库信息',
  TLS_INFORMATION: 'TLS 信息',
  IMAGE_REGISTRY_SECRET_TCAP: '镜像仓库保密字典',
  CREDENTIAL_NAME_EMPTY_DESC: '请输入凭证名称。',
  ENTER_PRIVATE_KEY_DESC: '请输入私钥。',
  ENTER_DATA_DESC: '请添加数据。',
  Unverified: '镜像仓库保密字典验证失败。',
  SECRET_TYPE_DESC: '选择一个保密字典类型。',

  SECRET_DESC:
    '保密字典（Secret）是一种包含少量敏感信息的资源对象，例如密码、令牌、保密字典等，以键值对形式保存并且可以在容器组中使用。',
  SECRET_EMPTY_DESC: '请创建一个保密字典。',

  SECRET_NO_CHINESE_CODE_DESC:
    '保密字典的键必须由字母数字字符、连字符（-）、下划线（_）或句点（.）组成。',

  REGISTRY_ADDRESS_TCAP: '仓库地址',
  REGISTRY_SECRET_VER_ERR: '镜像仓库验证失败。',
  REGISTRY_SECRET_VER_SUC: '镜像仓库验证通过。',
  USERNAME_PASSWORD: '用户名和密码',
  ACCOUNT_PASSWORD_SECRET_TCAP: '帐户密码保密字典',

  DATA: '数据',
  ADD_DATA_TCAP: '添加数据',
  EDIT_DATA_TCAP: '编辑数据',
  ADD_DATA_DESC: '添加键值对数据。',

  DATA_KEY: '键',
  DATA_VALUE: '值',
  REGISTRY_ADDRESS_TIP: '设置镜像仓库地址，例如 docker.io。',

  IMAGE_REGISTRY_REQUIRED_DESC: '请设置仓库地址、用户名和密码信息。',

  IMAGE_REGISTRY_VALIDATE_TIP: '创建镜像仓库保密字典前，请先验证用户名和密码。',

  'Please input the registry address': '请输入镜像仓库地址。',

  // Secret Type Drop-down List
  SECRET_VALUE_LABEL: '{value}（{label}）',
  CREATE_SECRET: '创建保密字典。',
  SPECIFY_REPLICAS: '指定副本数量',
  WEIGHTS: '权重',
  SPECIFY_WEIGHTS: '指定权重',
  SPECIFY_WEIGHTS_DESC:
    '设置容器组副本总数和每个集群的权重。容器组副本将根据权重调度到每个集群。',
  SPECIFY_REPLICAS_DESC: '手动设置每个集群的容器组副本数。',
  WEIGHT: '权重',
  TOTAL_REPLICAS: '副本总数',
  TOTAL_REPLICAS_EMPTY_DESC: '请输入所有集群容器组副本的总数。',
  ENTER_POSITIVE_INTEGER_DESC: '请输入一个正整数。',
  STORAGE_MANAGEMENT_SCAP: '存储卷管理',
  VOLUME_CLONE: '存储卷克隆',
  ALLOW_VOLUME_CLONE_DESC: '允许用户克隆存储卷。',
  ALLOW_VOLUME_SNAPSHOT_DESC: '允许用户创建存储卷快照。',
  'Volume Expansion': '存储卷扩容',
  ALLOW_VOLUME_EXPANSION_DESC:
    '允许用户对存储卷扩容。存储卷容量只能增加，不能减少。',
    CODE_REPOSITORY_URL: '代码仓库 URL',
    'New Tag': '新标签',
    IMAGE_NAME_BUILDING: '镜像：{name}/构建中',
    IMAGE_NAME_FAILED: '镜像：{name}/失败',
    IMAGE_NAME_SUCCESSFUL: '镜像：{name}/成功',
    'Release Time': '发布时间',
    SORT_BY: '以{ name }排序',
    creationTimestamp: '结束时间',
    'Environment Params': '环境变量参数',
    'is Failed': '构建失败',
    'Add Environment Variables': '添加环境参数',
    CONTAINER_SETTINGS: '容器设置',
    NEW_TAG_DESC: '输入重新构建镜像的标签',
    S2I_RELATIVE_PATH_DESC:
      '源代码仓库地址（目前支持 git）并且可以指定代码分支及在源代码终端的相对路径',
    CODE_RELATIVE_PATH_DESC: '设置代码在代码仓库中的相对路径。默认值为 /。',
    'building logs': '构建日志',
    'Building Log': '构建日志',
    'Building Image': '构建镜像',
    sourceUrl: '源地址',
    SourceUrl: '源地址',
    builderImage: '镜像模板',
    IMAGE_ARTIFACTS: '镜像制品',
    'Code Resource': '代码源',
    Builder: '构建',
    BuilderImage: '编译模板',
    IMAGE_NAME: '镜像名称',
    IMAGE_NAME_SCAP: '镜像名称',
    IMAGE_NAME_EMPTY_DESC: '请输入镜像名称。',
    IMAGE_TAG_EMPTY_DESC: '请输入镜像标签。',
    TARGET_IMAGE_REPOSITORY_EMPTY_DESC: '请设置目标镜像仓库。',
    IMAGE_TAG: '镜像标签',
    BuilderPullPolicy: '镜像拉取策略',
    builderPullPolicy: '镜像拉取策略',
    JOB_RECORDS: '任务记录',
    'Source to image jobs': 'S2I 任务',
    S2IJobs: 'S2I 任务',
    'Repo url': '仓库地址',
    'builder name': '编译名称',
    Building: '正在构建',
    'Image Building': '正在构建镜像',
    'Rebuild Image': '重新构建镜像',
    'New Image Tag': '新镜像 Tag',
    'Repo URL': '仓库地址',
    IMAGE_FROM_S2I: '通过代码构建镜像',
    IMAGE_FROM_B2I: '通过制品构建镜像',
    S2I_DESC: '选择代码的开发语言。',
    B2I_DESC: '选择制品的文件类型。',
    CONTAINERD_RUNTIME_NOT_SUPPORT:
      'S2I 和 B2I 暂时不支持 containerd 容器运行时。',
    PORT_SETTINGS_DESC: '设置用于访问容器的端口。',
    CONTAINER_SETTINGS_DESC: '设置容器的镜像、名称、类型和计算资源。',
    HEALTH_CHECKER_DESC: '添加探针以定时检查容器健康状态。',
    STARTUP_COMMAND: '启动命令',
    STARTUP_COMMAND_DESC:
      '自定义容器启动时运行的命令。默认情况下，容器启动时将运行镜像默认命令。',
    'Run Command': '运行命令',
    CONTAINER_COMMAND_DESC: '容器的启动命令。',
    CONTAINER_ARGUMENT_DESC:
      '容器启动命令的参数。如有多个参数请使用半角逗号（,）分隔。',
    PROBE_COMMAND_DESC: '使用半角逗号（,）分隔多条命令。',
    CONTAINER_ENVIRONMENT_DESC: '为容器添加添加环境变量。',
    IMAGE_PULL_POLICY_DESC: '在默认情况下，优先使用本地镜像',
    S2I_ENVIRONMENT_DESC:
      '添加环境变量以控制镜像运行时的行为。<a href={link} target="_blank">了解更多</a>',
    S2I_UPDATE_WORKLOAD: '构建成功后更新工作负载',
    S2I_UPDATA_WORKLOAD_DESC:
      '重新构建镜像成功后，将更新相关工作负载的镜像，工作负载版本也会一同更新。',
    'No Log Records': '无日志记录',
    CODE_REPOSITORY_KEY_DESC:
      '如果使用私有代码仓库，请选择包含代码仓库密钥的保密字典。',
    CODE_REPOSITORY_URL_DESC: '输入代码仓库的地址。目前仅支持 Git 仓库。',
    CODE_RELATIVE_PATH: '代码相对路径',
    S2I_BUILDERNAME_DESC:
      '选择编辑环境，您也可以查看对应的 <a href={link} target="_blank">编译模板</a>',
    S2I_TARGET_IMAGE_REPOSITORY_DESC:
      '选择一个镜像仓库用于存放即将创建的镜像。如果没有可用的镜像仓库，您需要先创建镜像仓库保密字典。<a href={link} target="_blank">了解更多</a>',
    S2I_IMAGE_NAME_DESC:
      '名称只能包含小写字母、数字、连字符（-）、句点（.）、斜钱（/）和冒号（:），并以小写字母或数字开头和结尾。',
    TARGET_IMAGE_REPOSITORY: '目标镜像仓库',
    'Rebuilt successfully; the image status will be refreshed soon.':
      '重建成功，镜像状态稍后将会更新',
    'Image building failed': '构建镜像失败',
    'Image building succeeded': '构建镜像成功',
    RevisionId: '修订版本号',
    'Image Builder': '镜像构建器',
    IMAGE_BUILDER: '镜像构建器',
    BUILDER_IMAGE: '构建器镜像',
    BUILDER_IMAGE_SCAP: '构建器镜像',
    PULL_POLICY: '拉取策略',
    SOURCE_URL: '源 URL',
    REMOTE_TRIGGER: '远程触发器',
    IMAGE_BUILDER_LOW: '镜像构建器',
    LAST_BUILD_ENVIRONMENT: '最后构建环境',
    'Build Times': '构建次数',
    ImageName: '镜像名称',
    StartTime: '开始时间',
    s2i: '代码构建镜像',
    b2i: '制品构建镜像',
    LOADING_DOTS: '加载中...',
    LOG_MODULE_NOT_INSTALLED: '日志模块未安装。',
    BUILD_ENVIRONMENT: '构建环境',
    FILE_UPLOADED_TIP: '上传文件成功。',
    'Upload Percent': '上传进度',
    FILE_SIZE_VALUE: '文件大小：{value}',
    DOWNLOAD_ARTIFACT: '下载制品',
    'File Uploaded Successfully': '上传文件成功',
    'Download Artifact': '下载制品',
    IMAGE_BUILDER_PL: '镜像构建器',
    'Artifact Type': '制品类型',
    IMAGE_BUILDER_DESC:
      '镜像构建器（Image Builder）是将代码或者制品制作成容器镜像的工具。您可以通过简单的设置将制品或代码直接制作成容器镜像。',
    PULL_COMMAND: '拉取命令',
    PULL_COMMAND_SCAP: '拉取命令',
    IMAGE_SIZE_SCAP: '镜像大小',
    'Published Time': '发布时间',
    UPLOAD_ARTIFACT_TIP: '请上传一个制品。',
    UPLOAD_FAILED: '上传失败。',
    binary: '二进制文件',
    BUILD_IMAGE_FOR_SERVICE: '为 {service} 服务构建镜像。',
    CLICK_UPLOAD_ARTIFACT: '点击上传制品文件',
    UPLOAD_ARTIFACT: '上传制品',
    BUILD_MODE: '构建模式',
    IMAGE_BUILDER_EMPTY_DESC: '请创建一个镜像构建器。',
    S2I_NO_SECRET: '当前代码仓库不需要密钥。',
    'Authentication required': '需要认证信息，请选择秘钥。',
    'Repo reading failed': '读取仓库失败',
    WRONG_FILE_EXTENSION_NAME: '选择的文件类型不匹配，请选择 {type} 类型。',
    SECRET_CODE: '触发令牌',
    SECRET_CODE_RULE_DESC: '只能包含大小写字母、数字。',
    ARTIFACT_FILE_EMPTY_DESC: '请上传一个制品文件。',
    'Upload file failed': '文件上传失败',
    'Build image for service x': '为 {service} 服务构建镜像',
    UPLOAD_ARTIFACT_FILE: '上传制品文件',
    ARTIFACT_FILE: '制品文件',
    B2I_DEFAULT_DESC: '上传一个制品文件。',
    JAR_DESC: '上传一个 JAR 格式的制品文件。',
    WAR_DESC: '上传一个 WAR 格式的制品文件。',
    BINARY_DESC: '',
    CODE_REPOSITORY_KEY_NOT_REQUIRED: '当前代码仓库不需要密钥。',
    'Repository Not Found': '未发现代码仓库。',
    'Currently only supports git repo': '当前仅支持 Git 仓库。',
    'exec: "git": executable file not found in $PATH':
      '未发现 URL 对应的代码仓库。',
    TRIGGER_TOKEN: '触发令牌',
    TRIGGER_TOKEN_DESC:
      '设置客户端通过 Webhook 触发 KubeSphere 镜像构建时所使用的认证令牌。令牌只能包含大写字母、小写字母和数字。',
    INVALID_TRIGGER_TOKEN_DESC:
      '令牌无效。令牌只能包含大写字母、小写字母和数字。',
    'Remote Trigger Link': '远程触发链接',
  
    // Image Builder List Page
  
    // Creation Page
    UPLOAD_PERCENT: '已上传：{percent}%',
    UPLOAD_FULLY: '已上传：100%',
    FILE_SIZE: '文件大小：{size}',
    S2I_SECRET: '密钥',
    roles: '角色',
    Roles: '角色',
    Role: '角色',
    'Role Management': '角色管理',
    'Account Role': '帐户角色',
    PLATFORM_ROLE: '平台角色',
    PLATFORM_ROLE_EMPTY_DESC: '请创建一个平台角色。',
    PLATFORM_ROLE_PL: '平台角色',
    'Platform Roles': '平台角色',
    'Account Roles': '帐户角色',
    CREATE_ROLE: '创建角色',
    'Edit Role': '编辑角色',
    'Project Details': '项目详情',
    'Cluster Role': '集群角色',
    PERMISSION_PL: '权限',
    AUTHORIZED_USER_PL: '授权用户',
    'Authorization Settings': '权限设置',
    Cluster: '集群',
    Member: '成员',
  
    EDIT_PERMISSIONS: '编辑权限',
    WORKSPACE_ROLE_NAME_TIP: '角色的名称将作为角色的唯一标识符。',
  
    'Create Project Role': '创建项目角色',
    'Edit Project Role': '编辑项目角色',
    CREATE_PLATFORM_ROLE: '创建平台角色',
    'Edit Account Role': '编辑帐户角色',
    'Create Cluster Role': '创建集群角色',
    'Edit Cluster Role': '编辑集群角色',
  
    'Please specify role authorization': '请选择角色权限',
  
    'Role Name': '角色名称',
    'Role Type': '角色类型',
    ROLE_NAME_EMPTY_DESC: '请输入角色名称',
    'Invalid role name': '角色名称格式不合法',
    'Role name exists': '角色名已存在',
    MODULES: '功能模块',
    'Authorized Actions': '可执行操作',
    NO_PERMISSION: '未发现权限',
    'Invited Successfully': '邀请成功',
    NO_AVAILABLE_ROLE: '当前项目无可用角色',
    JOIN_PROJECT_PLACEHOLDER: '输入用户名或者邮箱邀请用户加入到项目中',
    ROLE_DELETE_TIP: '当前角色已有用户绑定，请解绑后重试',
    ROLE_NO_AVAILABLE_TIP: '当前项目无可用角色',
    ROLE_PROJECTS_JOIN_TIP: '输入用户名或者邮箱邀请用户加入到项目中',
    ROLE_TYPE_DESC:
      '角色类型根据权限范围分为集群、项目两类，当前角色的授权为该项目范围。',
    DELETE_ROLE: '删除角色',
    DELETE_ROLE_TIP: '您确定删除角色 <strong>{resource}</strong> 吗？',
    DELETE_ROLE_USER_TIP_PL:
      '当前角色已授权给 <strong>{count}</strong> 名用户，请先删除用户或更改用户的角色。',
    DELETE_ROLE_USER_TIP:
      '当前角色已授权给 <strong>{count}</strong> 名用户，请先删除用户或更改用户的角色。',
    DELETE_ROLE_DEPARTMENT_TIP_PL:
      '当前角色已授权给 <strong>{count}</strong> 个部门，请先删除部门或更改部门的角色。',
    DELETE_ROLE_DEPARTMENT_TIP:
      '当前角色已授权给 <strong>{count}</strong> 个部门，请先删除部门或更改部门的角色。',
    DEPENDS_ON: '依赖于：',
    'Clusters Management': '集群管理',
    CLUSTERS_MANAGEMENT: '集群管理',
    CLUSTERS_MANAGEMENT_DESC: '创建集群、删除集群和管理集群中的所有资源。',
    CLUSTERS_VIEW: '集群查看',
    CLUSTERS_VIEW_DESC: '查看 KubeSphere 平台的所有集群及集群中的所有资源。',
    USERS_MANAGEMENT: '用户管理',
    USERS_MANAGEMENT_DESC: '创建、编辑和删除用户。',
    USERS_VIEW: '用户查看',
    USERS_VIEW_DESC: '查看 KubeSphere 平台的所有用户。',
    ROLES_MANAGEMENT: '角色管理',
    ROLES_MANAGEMENT_DESC: '创建、编辑和删除角色。',
    ROLES_VIEW: '角色查看',
    ROLES_VIEW_DESC: '查看 KubeSphere 平台的所有角色。',
    WORKSPACES_MANAGEMENT: '企业空间管理',
    WORKSPACES_MANAGEMENT_DESC: '创建、编辑和删除企业空间。',
    WORKSPACES_VIEW: '企业空间查看',
    WORKSPACES_VIEW_DESC: '查看用户被授权的企业空间。',
    APP_TEMPLATES_VIEW: '应用商店查看',
    APP_TEMPLATES_VIEW_DESC: '查看 KubeSphere 平台的应用商店。',
    APP_TEMPLATES_MANAGEMENT: '应用商店管理',
    APP_TEMPLATES_MANAGEMENT_DESC: '管理 KubeSphere 平台的应用商店。',
    PLATFORM_SETTINGS_MANAGEMENT: '平台设置管理',
    PLATFORM_SETTINGS_MANAGEMENT_DESC: '查看和编辑 KubeSphere平台的设置。',
  
    WORKSPACE_GROUPS_MANAGEMENT: '部门管理',
    WORKSPACE_GROUPS_MANAGEMENT_DESC: '管理企业空间部门的结构、成员和权限。',
    WORKSPACE_GROUPS_VIEW: '部门查看',
    WORKSPACE_GROUPS_VIEW_DESC: '查看企业空间部门的结构和成员。',
    WORKSPACE_ROLES_VIEW: '企业空间角色查看',
    WORKSPACE_ROLES_MANAGEMENT: '企业空间角色管理',
    WORKSPACE_ROLES_VIEW_DESC: '查看企业空间角色。',
    WORKSPACE_ROLES_MANAGEMENT_DESC:
      '创建、编辑和删除系统预置角色外的企业空间角色。',
    WORKSPACE_MEMBERS_VIEW: '企业空间成员查看',
    WORKSPACE_MEMBERS_MANAGEMENT: '企业空间成员管理',
    WORKSPACE_MEMBERS_VIEW_DESC: '查看企业空间成员。',
    WORKSPACE_MEMBERS_MANAGEMENT_DESC: '邀请、编辑和移除企业空间成员。',
    WORKSPACE_APP_REPOS_VIEW: '应用仓库查看',
    WORKSPACE_APP_REPOS_MANAGEMENT: '应用仓库管理',
    WORKSPACE_APP_REPOS_VIEW_DESC: '查看企业空间中的应用仓库。',
    WORKSPACE_APP_REPOS_MANAGEMENT_DESC: '创建、编辑和删除企业空间中的应用仓库。',
    WORKSPACE_APP_TEMPLATES_VIEW: '应用模板查看',
    WORKSPACE_APP_TEMPLATES_MANAGEMENT: '应用模板管理',
    WORKSPACE_APP_TEMPLATES_VIEW_DESC: '查看企业空间中的应用模板。',
    WORKSPACE_APP_TEMPLATES_MANAGEMENT_DESC:
      '上传、编辑和删除应用模板以及在平台应用商店上架和下架应用。',
  
    WORKSPACE_SETTINGS_VIEW: '企业空间设置查看',
    WORKSPACE_SETTINGS_MANAGEMENT: '企业空间设置管理',
    WORKSPACE_SETTINGS_DESC: '管理企业空间的基本信息、网络策略等设置。',
    WORKSPACE_SETTINGS_VIEW_DESC: '查看企业空间的基本信息、网络策略等设置。',
    WORKSPACE_SETTINGS_MANAGEMENT_DESC:
      '管理企业空间的基本信息、网络策略等设置。',
  
    PROJECTS_MANAGEMENT: '项目管理',
    PROJECTS_VIEW: '项目查看',
    'Federated Projects Management': '联邦项目管理',
    PROJECTS_CREATE: '项目创建',
    DEVOPS_MANAGEMENT: 'DevOps 项目管理',
    DEVOPS_VIEW: 'DevOps 项目查看',
    DEVOPS_CREATE: 'DevOps 项目创建',
  
    PROJECTS_MANAGEMENT_DESC: '创建、编辑和删除企业空间中的项目。',
    PROJECTS_CREATE_DESC: '创建项目。项目的管理员为项目的创建者。',
    PROJECTS_VIEW_DESC: '查看企业空间中的所有项目。',
    FEDERATED_PROJECTS_MANAGEMENT_DESC:
      '管理企业空间里的所有多集群项目，可以 创建/编辑/删除 多集群项目',
    DEVOPS_MANAGEMENT_DESC: '创建、编辑和删除企业空间中的 DevOps 项目。',
    DEVOPS_CREATE_DESC: '创建 DevOps 项目。DevOps 项目的管理员为项目的创建者。',
    DEVOPS_VIEW_DESC: '查看企业空间中的所有 DevOps 项目。',
  
    APPLICATION_WORKLOADS_VIEW: '应用负载查看',
    APPLICATION_WORKLOADS_MANAGEMENT: '应用负载管理',
    APPLICATION_WORKLOADS_VIEW_DESC:
      '查看项目中的应用、服务、工作负载、任务、灰度发布任务和镜像构建器等资源。',
    APPLICATION_WORKLOADS_MANAGEMENT_DESC:
      '创建、编辑和删除项目中的应用、服务、工作负载、任务、灰度发布任务和镜像构建器等资源。',
    VOLUMES_VIEW: '存储卷查看',
    VOLUMES_MANAGEMENT: '存储卷管理',
    VOLUMES_VIEW_DESC: '查看项目中的存储卷。',
    VOLUMES_MANAGEMENT_DESC: '创建、编辑和删除项目中的存储卷。',
    SECRETS_VIEW: '保密字典查看',
    SECRETS_MANAGEMENT: '保密字典管理',
    SECRETS_VIEW_DESC: '查看项目中的保密字典。',
    SECRETS_MANAGEMENT_DESC: '创建、编辑和删除项目中的保密字典。',
    CONFIGMAPS_VIEW: '配置字典查看',
    CONFIGMAPS_MANAGEMENT: '配置字典管理',
    CONFIGMAPS_VIEW_DESC: '查看项目中的配置字典。',
    CONFIGMAPS_MANAGEMENT_DESC: '创建、编辑和删除项目中的配置字典。',
    SERVICEACCOUNT_MANAGEMENT: '服务帐户管理',
    SERVICEACCOUNT_VIEW: '服务帐户查看',
    SERVICEACCOUNT_MANAGEMENT_DESC: '创建、编辑和删除项目中的服务帐户。',
    SERVICEACCOUNT_VIEW_DESC: '查看项目中的服务帐户。',
    ALERTING_POLICIES_VIEW: '告警策略查看',
    ALERTING_POLICIES_MANAGEMENT: '告警策略管理',
    ALERTING_POLICIES_VIEW_DESC: '查看项目中的告警策略。',
    ALERTING_POLICIES_MANAGEMENT_DESC: '创建、编辑和删除项目中的告警策略。',
    ALERTING_MESSAGES_VIEW: '告警消息查看',
    ALERTING_MESSAGES_MANAGEMENT: '告警消息管理',
    ALERTING_MESSAGES_VIEW_DESC: '查看项目中的告警消息。',
    ALERTING_MESSAGES_MANAGEMENT_DESC: '评论和删除项目中的告警消息。',
    CUSTOM_MONITORING_VIEW: '自定义监控查看',
    CUSTOM_MONITORING_MANAGEMENT: '自定义监控管理',
    CUSTOM_MONITORING_VIEW_DESC: '查看项目中的自定义监控面板。',
    CUSTOM_MONITORING_MANAGEMENT_DESC: '创建、编辑和删除项目中的自定义监控面板。',
  
    PROJECT_ROLES_VIEW: '角色查看',
    PROJECT_ROLES_MANAGEMENT: '角色管理',
    PROJECT_ROLES_VIEW_DESC: '查看项目角色。',
    PROJECT_ROLES_MANAGEMENT_DESC: '创建、编辑和删除系统预置角色以外的项目角色。',
    PROJECT_MEMBERS_VIEW: '成员查看',
    PROJECT_MEMBERS_MANAGEMENT: '成员管理',
    PROJECT_MEMBERS_VIEW_DESC: '查看项目成员。',
    PROJECT_MEMBERS_MANAGEMENT_DESC: '邀请、编辑和移除项目成员。',
    PROJECT_SETTINGS_DESC:
      '管理项目设置，包括项目基本信息、外部访问设置、网络策略、资源配额、日志收集设置等。',
  
    CLUSTER_RESOURCES_MANAGEMENT: '集群资源管理',
    PROJECT_RESOURCES_MANAGEMENT: '项目资源管理',
    'Nodes View': '节点查看',
    NODES_VIEW_DESC: '查看节点信息',
    NODES_MANAGEMENT_DESC: '管理节点，停用/开启、污点管理等',
    'Components Management': '服务组件管理',
    COMPONENTS_MANAGEMENT_DESC: '管理集群的服务组件',
    'CRD Management': '自定义资源(CRD)管理',
    CRD_MANAGEMENT_DESC: '管理集群的自定义资源，可 查看/修改/删除 集群 CRD 资源',
    'Network Policies Management': '网络策略管理',
    'Network Policies View': '网络策略查看',
    NETWORK_POLICIES_MANAGEMENT_DESC: '创建/编辑/删除 集群网络策略',
    NETWORK_POLICIES_VIEW_DESC: ' 查看集群网络策略',
    'StorageClasses View': '存储类型查看',
    'StorageClasses Management': '存储类型管理',
    STORAGECLASSES_VIEW_DESC: '查看集群所有存储类型',
    STORAGECLASSES_MANAGEMENT_DESC:
      '创建、编辑和删除存储类型，设置默认存储类型。',
    VOLUME_SNAPSHOTS_VIEW: '存储卷快照查看',
    VOLUME_SNAPSHOTS_MANAGEMENT: '存储卷快照管理',
    VOLUME_SNAPSHOTS_VIEW_DESC: '查看项目中的存储卷快照。',
    VOLUME_SNAPSHOTS_MANAGEMENT_DESC: '创建、编辑和删除项目中的存储卷快照。',
    'Cluster Monitoring View': '集群监控查看',
    CLUSTER_MONITORING_VIEW_DESC: '查看集群物力资源，应用资源的监控数据',
    'Cluster Roles View': '角色查看',
    'Cluster Roles Management': '角色管理',
    CLUSTER_ROLES_VIEW_DESC: '查看集群角色',
    CLUSTER_ROLES_MANAGEMENT_DESC:
      '可以 创建/编辑/删除 集群角色，系统预置角色无法删除',
    'Cluster Members View': '成员查看',
    'Cluster Members Management': '成员管理',
    CLUSTER_MEMBERS_VIEW_DESC: '查看集群成员',
    CLUSTER_MEMBERS_MANAGEMENT_DESC: '邀请/编辑/移除集群成员',
  
    PIPELINES_MANAGEMENT: '流水线管理',
    PIPELINES_VIEW: '流水线查看',
    PIPELINES_MANAGEMENT_DESC: '创建、编辑和删除 DevOps 项目流水线。',
    PIPELINES_VIEW_DESC: '查看 DevOps 项目流水线和下载制品。',
    CREDENTIALS_VIEW: '凭证查看',
    CREDENTIALS_MANAGEMENT_DESC: '创建、编辑和删除 DevOps 凭证。',
    CREDENTIALS_VIEW_DESC: '查看和使用 DevOps 凭证。',
  
    'DevOps Roles View': '角色查看',
    'DevOps Roles Management': '角色管理',
    DEVOPS_ROLES_VIEW_DESC: '查看 DevOps 项目角色。',
    DEVOPS_ROLES_MANAGEMENT_DESC:
      '可以 创建/编辑/删除  DevOps 项目角色，系统预置角色无法删除',
    'DevOps Members View': '成员查看',
    'DevOps Members Management': '成员管理',
    DEVOPS_MEMBERS_VIEW_DESC: '查看 DevOps 项目成员。',
    DEVOPS_MEMBERS_MANAGEMENT_DESC: '邀请/编辑/移除 DevOps 项目成员',
    DEVOPS_SETTINGS: 'DevOps 项目设置',
    DEVOPS_SETTINGS_DESC: '管理 DevOps 项目的设置。',
  
    'Default user role which allows a user to manage resources within the projects created by the user himself or invited by others. It does not allow the user to manage unauthorized resources in the cluster.':
      '默认用户角色，仅允许对自己创建或受邀加入的项目中的资源进行管理，无权操作集群范围内其他资源。',
  
    NO_AUTHORIZED_USER_DESC: '此角色尚未授权给任何用户。',
  
    'Unable to delete preset role': '无法删除预置角色',
  
    ROLE_PLATFORM_ADMIN: '管理 KubeSphere 平台上的所有资源。',
    ROLE_PLATFORM_REGULAR: '被邀请加入企业空间之前无法访问任何资源。',
    ROLE_USERS_MANAGER: '管理 KubeSphere 平台上的所有用户。',
    ROLE_WORKSPACES_MANAGER: '管理 KubeSphere 平台上的所有企业空间。',
  
    ROLE_CLUSTER_ADMIN: '管理集群中的所有资源。',
    ROLE_CLUSTER_VIEWER: '查看集群中的所有资源。',
  
    ROLE_WORKSPACE_ADMIN: '管理企业空间中的所有资源。',
    ROLE_WORKSPACE_REGULAR: '查看企业空间设置。',
    ROLE_WORKSPACE_VIEWER: '查看企业空间中的所有资源。',
    ROLE_WORKSPACE_SELF_PROVISIONER:
      '查看企业设置、管理应用模板、创建项目和 DevOps 项目。',
  
    ROLE_PROJECT_ADMIN: '管理项目中的所有资源。',
    ROLE_PROJECT_OPERATOR: '管理项目中除用户和角色之外的资源。',
    ROLE_PROJECT_VIEWER: '查看项目中的所有资源。',
  
    ROLE_DEVOPS_ADMIN: '管理 DevOps 项目中的所有资源。',
    ROLE_DEVOPS_OPERATOR:
      '管理 DevOps 凭证和流水线以及查看 DevOps 项目中成员和角色。',
    ROLE_DEVOPS_VIEWER: '查看 DevOps 项目中的所有资源。',
  
    ACCOUNT_ROLE_DESC: '帐户角色可以定义平台内的帐户拥有的权限',
    ACCOUNT_ROLE_CREATE_DESC: '帐户角色可以定义平台内的帐户拥有的权限',
  
    NEXT_STEP: '下一步',
    NEXT_STEP_DESC: '您需要进一步编辑角色的权限。',
  
    DESELECT_RESOURCE_FIRST: '请先取消选择{resource}。',
    'System Point': '节点',
    'Project Usage Rank': '项目资源用量排行',
    'Workspace Usage Rank': '企业空间资源用量排行',
    EXPORT: '导出',
    TOP_5_FOR_RSC_USAGE: '资源用量 Top 5',
    'Workspace Usage Top5': '企业空间资源用量 Top5',
    QUOTA_LIMIT_TIP:
      '这里配置是指 Kubernetes 资源管理中的 Limits, 主要用于限制每个容器使用资源的最大值',
    'Application Resources Usage Ranking': '应用资源用量排行',
    CPU_AVERAGE_LOAD: 'CPU 平均负载',
    CLUSTER: '集群',
    CLUSTER_PL: '集群',
    CLUSTER_VALUE: '集群：{value}',
    Deployment: '部署',
    StatefulSet: '有状态副本集',
    DaemonSet: '守护进程集',
    LoadBalancer: '负载均衡',
    Volume: '存储卷',
    Terminating: '删除中',
    Deleting: '删除中',
    CREATE_PROJECT: '创建项目',
    CREATE_MULTI_CLUSTER_PROJECT: '创建多集群项目',
    EDIT_PROJECT: '编辑项目',
    Details: '详情',
    Members: '成员',
    PROJECT_ROLE_PL: '项目角色',
    'Project Role': '项目角色',
    // Create ServiceAccount Page
    PROJECT_ROLE_SI: '项目角色',
    projects: '项目',
    Projects: '项目',
    'Project Overview': '项目预览',
    'Members Management': '成员管理',
    PROJECT_ADMINISTRATOR: '项目管理员',
    MANAGE_PROJECT: '管理项目',
    RESOURCE_QUOTA_PL: '资源配额',
    PROJECT_NAME: '项目名称',
    PROJECT_MEMBER_PL: '项目成员',
    PROJECT_RESOURCE_QUOTAS: '项目资源配额',
    'Project Members': '项目成员',
    'project members': '项目成员',
    'Member Name': '成员名称',
    'Modify Member Role': '修改成员角色',
    'Modify Members Role': '修改成员角色',
    'Remove Members': '移除成员',
    REMOVE_MEMBER: '移除成员',
    REMOVE_MULTIPLE_MEMBERS: '指移除成员',
    REMOVE_MULTIPLE_MEMBERS_TIP:
      '请输入用户名 <strong>{resource}</strong> 以确认您了解此操作的风险。',
    'Invite Member': '邀请成员',
    GATEWAY: '网关',
    ENABLE_GATEWAY: '开启网关',
  
    GATEWAY_NOT_ENABLED: '网关未开启',
  
    PROJECT_INFO: '项目信息',
    PROJECT_QUOTA: '项目配额',
    EDIT_PROJECT_QUOTAS: '编辑项目配额',
    'Quota Management': '配额管理',
    WORKSPACE_QUOTA_PL: '企业空间配额',
    PROJECT_QUOTA_PL: '项目配额',
  
    PROJECT_QUOTAS_NOT_SET: '项目配额未设置',
    DEFAULT_CONTAINER_QUOTAS_NOT_SET: '默认容器配额未设置',
  
    'Project Placement': '项目位置',
  
    'Multi-cluster Project': '多集群项目',
    MULTI_CLUSTER_PROJECT: '多集群项目',
    MULTI_CLUSTER_PROJECT_LOW: '多集群项目',
    MULTI_CLUSTER_PROJECT_SCAP: '多集群项目',
    MULTI_CLUSTER_PROJECT_PL: '多集群项目',
    'Multi-cluster Projects': '多集群项目',
  
    Opened: '已开启',
    Closed: '已关闭',
  
    CREATE_PROJECT_DESC: '创建项目以对资源进行分组并控制不同用户的权限。',
    PROJECT_NAME_DESC:
      '名称只能包含小写字母、数字和连字符（-），必须以小写字母开头并以小写字母或数字结尾，最长 63 个字符。',
    PROJECT_NAME_INVALID_DESC:
      '名称无效。名称只能包含小写字母、数字和连字符（-），必须以小写字母开头并以小写字母或数字结尾，最长 63 个字符。',
    'Please input project name': '请输入项目名',
    'Invalid project name': '项目名格式不合法',
    'Project name exists': '项目名已存在',
  
    DELETE_MEMBER_TIP:
      '确定移除成员 <strong>{name}</strong> ? 移除后该成员将无法访问本项目。',
  
    'DevOps Projects': 'DevOps 项目',
    'Select Project Type': '选择项目类型',
  
    'Edit Project Quota': '编辑项目配额',
    ADD_QUOTA: '添加配额',
  
    deployments: '部署',
    statefulsets: '有状态副本集',
    daemonsets: '守护进程集',
    jobs: '任务',
    cronjobs: '定时任务',
    pods: '容器组',
  
    REQUESTS_CPU: 'CPU 预留',
    LIMITS_CPU: 'CPU 限制',
    REQUESTS_MEMORY: '内存预留',
    LIMITS_MEMORY: '内存限制',
  
    DEFAULT_CONTAINER_QUOTA_PL: '默认容器配额',
    EDIT_DEFAULT_CONTAINER_QUOTA: '编辑默认容器配额',
    EDIT_DEFAULT_CONTAINER_QUOTAS: '编辑默认容器配额',
    'Edit Resource Default Request': '编辑资源默认请求',
    EDIT_PROJECT_QUOTA: '编辑项目配额',
  
    RESOURCE_TYPE: '资源类型',
    RESOURCE_TYPE_SCAP: '资源类型',
  
    'Help Information': '帮助信息',
  
    'Enter Project': '进入项目',
    'Enter DevOps Project': '进入项目',
    Project_Admin: '项目管理员',
    'No Platform Manage Authorization': '无平台管理权限',
  
    'Default limit resource': '默认最大使用资源',
    'Default request resource': '默认最小使用资源',
  
    ASSIGN_WORKSPACE: '分配企业空间',
    'Target Workspace': '目标企业空间',
    SELECT_WORKSPACE_DESC: '选择一个企业空间。',
    'Not Assigned': '未分配',
    PROJECT_ADMINISTRATOR_DESC: '选择企业空间中的用户作为项目管理员。',
  
    DISK_LOG_COLLECTION: '落盘日志收集',
    COLLECT_LOGS_ON_VOLUMES: '收集存储卷上的日志',
    LOG_COLLECTION_ENABLED_DESC:
      '开启或停用此功能后，您需要重启容器组副本才能使修改生效。',
  
    DISABLE_LOG_COLLECTION: '停用日志收集',
  
    SELECT_CLUSTER_DESC: '选择要创建项目的集群。',
    CLUSTER_EMPTY_DESC: '请选择一个集群。',
  
    'Project Member': '项目成员',
  
    'Number of volumes': '存储卷（数量）',
  
    FEDPROJECT_CANNOT_ADD_CLUSTER: '没有可添加的集群。',
  
    DISABLE_LOG_COLLECTION_TIP:
      '您确定停用日志收集吗？您需要重启容器组副本才能使修改生效。',
  
    Usage: '使用情况',
    USAGE: '用量',
    PROJECTS_DESC:
      'KubeSphere 中的项目对应的是 Kubernetes 的 namespace，是对一组资源和对象的抽象集合，常用来将系统内部的对象划分为不同的项目组或用户组。',
    PROJECT_BASEINFO_DESC: '项目基础信息设置',
    PROJECT_ADVANCE_DESC: '设置项目资源默认请求',
  
    PROJECT_TYPES_PROJECT_TITLE: '创建资源型项目',
    PROJECT_TYPES_PROJECT_DESC:
      'KubeSphere 中的项目对应的是 Kubernetes 的 namespace，是对一组资源和对象的抽象集合，可以根据不同的业务部门或者产品项目进行资源分组。',
    PROJECT_TYPES_DEVOPS_TITLE: '创建一个 DevOps 项目',
    PROJECT_TYPES_DEVOPS_DESC: '持续、自动地构建/测试软件项目。',
  
    PROJECT_ASSIGN_DESC: '项目被分配到企业空间后不允许变更项目所属的企业空间。',
  
    'Invite Members to the Project': '邀请成员到该项目',
    INVITE_DEVOPS_MEMBER: '邀请成员到该 DevOps 项目',
    INVITE_MEMBER_DESC: '邀请当前企业空间的成员到当前项目。',
    PROJECT_MEMBER_EMPTY_DESC: '请邀请当前企业空间的成员到当前项目。',
    INVITE_MEMBER_DESC_DEVOPS: '邀请当前企业空间的成员到当前 DevOps 项目。',
    INVITE_MEMBER_SEARCH_PLACEHOLDER: '输入用户名邀请项目成员',
    ASSIGN_ROLE: '分配角色',
    PROJECT_ADMIN_DESC: '可以指定项目内一个成员为管理员',
  
    ENABLE_GATEWAY_DESC:
      '在创建应用路由之前，需要先开启外网访问入口，即网关。这一步是创建对应的应用路由控制器，负责将请求转发到对应的后端服务。',
  
    DELETE_INTERNET_ACCESS_TITLE: '删除外网访问设置',
    DELETE_INTERNET_ACCESS_DESC:
      '您确定删除外网访问设置吗？删除设置后，您可以重新设置外网访问。',
  
    NO_RELATE_PROJECTS_TITLE: '未发现与您相关联的项目',
    NO_RELATE_PROJECTS_DESC:
      '您可以创建或者联系项目管理员将您邀请到项目中开始您的工作',
  
    DELETE_PROJECT_TIP:
      '确定删除项目 <strong>{resource}</strong> ? 删除后将无法恢复, 项目下的资源也同时会被销毁。',
  
    'default request CPU should not be greater than default limit CPU':
      '最低保证可以使用的 CPU 数不应大于限制使用的 CPU 数',
    'default request memory should not be greater than default limit memory':
      '最低保证可以使用的内存不应大于限制使用的内存',
  
    'Empty value means no limit, CPU 1 Core = 1000m':
      '值为空表示不限制, CPU 1核 = 1000m',
  
    PROJECT_NAME_EXISTS_IN_HOST:
      '项目名称在主集群中已经存在，请输入其他项目名称。',
  
    MULTI_CLUSTER_PROJECT_DELETE_TIP:
      '删除多集群项目同时也会删除依赖于主集群上的同名项目,</br>请输入{type}名称 <strong>{resource}</strong> 确保您已了解操作所带来的风险。',
  
    DEFAULT_RESOURCE_UNIT_DESC: 'CPU无单位时为核数, 1核 = 1000m',
    DEFAULT_RESOURCE_ALERT:
      '创建工作负载时，如未设置工作负载的资源使用限制，将默认使用此设置。如无特殊需求，请保持此设定默认。',
  
    QUOTA_EDIT_TIP: '值为空时将不限制配额',
  
    PROJECT_BASIC_INFO_DESC:
      '基本信息提供项目的信息概览，您可以查看项目的信息以及默认容器配额。',
    PROJECT_ADVANCED_SETTINGS_DESC:
      '高级设置用于配置项目的外网访问、应用治理以及日志收集功能。',
    PROJECT_MEMBERS_DESC: '对项目内的成员进行管理及角色分配',
    PROJECT_ROLE_DESC: '项目角色定义了在当前项目下用户所拥有的权限。',
    SERVICE_ACCOUNT_PROJECT_ROLE_DESC: '选择服务帐户在当前项目中的角色。',
    PROJECT_ROLE_EMPTY_DESC: '请创建一个项目角色。',
    COLLECTING_FILE_LOG_DESC:
      '对容器内的落盘日志进行收集，并转发到标准输出，然后由日志收集系统统一采集。',
  
    HOW_TO_USE_QUOTA_Q: '如何使用资源配额?',
    HOW_TO_USE_QUOTA_A:
      '资源配额是用来限制资源用量的一种机制，您可以通过<b>编辑项目</b>来编辑项目资源配额和默认容器配额。',
    PROJECT_QUOTAS_DESC:
      '项目配额用于指定项目中可用的 CPU 和内存资源数量和容器组、部署、服务等应用资源的最大数量。',
    DEFAULT_CONTAINER_QUOTAS_DESC:
      '默认容器配额用于指定项目中创建的容器的默认 CPU 预留、CPU 限制、内存预留和内存限制。',
  
    WHAT_ARE_DEFAULT_CONTAINER_QUOTAS_Q: '什么是默认容器配额?',
    WHAT_ARE_DEFAULT_CONTAINER_QUOTAS_A:
      '默认容器配额用于指定项目中创建的容器的默认 CPU 预留、CPU 限制、内存预留和内存限制。',
  
    WHAT_IS_INTERNET_GATEWAY: '什么是外网访问网关?',
    COLLECT_LOGS_ON_VOLUMES_A:
      '如需收集存储卷上的日志，请为容器挂载读写模式的存储卷并设置容器将日志导出到存储卷。',
  
    HOW_TO_INVITE_MEMBER_Q: '如何邀请成员到项目？',
    HOW_TO_INVITE_MEMBER_A:
      '项目管理员或者拥有成员邀请权限的用户可以邀请当前企业空间内的成员加入项目。',
  
    HOW_TO_INVITE_USERS: '如何邀请用户到当前项目中？',
    HOW_TO_SET_PROJECT_GATEWAY: '如何设置项目网关？',
    RESOURCE_QUANTITY_LIMIT: '资源数量限制',
  
    PROJECT_TYPES_Q: '项目中的服务如何通过外网访问？',
    PROJECT_TYPES_A:
      '项目网关负责创建对应的应用路由控制器，用来负责将请求转发到对应的后端服务；开启项目网关后可以将服务通过 Ingress 暴露给外网访问。',
  
    PROJECT_CLUSTER_SETTINGS_DESC:
      '为项目选择至少一个集群。如果选择多个集群，主集群上将创建同名项目。',
    NETWORK_ISOLATED_DESC: '设置网络隔离策略',
  
    PROJECT_NAME_EXISTS_IN_CLUSTER:
      '项目名称在在 {cluster} 集群中已存在，请输入其他项目名称。',
  
    MULTI_CLUSER_PROJECT_TIP:
      '当前项目跨多个集群部署。您可以点击一个集群以查看项目在该集群中的设置。',
  
    MULTI_CLUSTER_RESOURCE_TIP:
      '当前资源跨多个集群部署。您可以点击一个集群以查看资源在该集群中的设置。',
  
    FEDPROJECT_RESOURCE_TIP:
      '无法在集群管理内创建多集群项目的资源, 请到多集群项目页面内进行操作。',
    FEDPROJECT_CANNOT_DEPLOY_APP_TIP: '无法在多集群项目中部署应用。',
  
    FED_HOST_NAMESPACE_TIP: '该项目与多集群项目关联, 请勿修改此项目中的资源。',
  
    CREATE_MULTI_CLUSTER_PROJECT_DESC:
      '您可以创建多集群项目，让项目运行在多个集群中，为应用提供快速迭代开发的容器环境并实现高可用。',
  
    // Jobs
    running: '运行中',
  
    // Custom Monotoring
    CUSTOM_MONITORING_DASHBOARD_LOW: '自定义监控面板',
  
    // Basic Information
    PROJECT_NAME_SCAP: '项目名称',
    PROJECT_ROLE_SCAP: '项目角色',
    PROJECT_ROLE_SCAP_PL: '项目角色',
    PROJECT_MEMBER_SCAP: '项目成员',
    PROJECT_MEMBER_SCAP_PL: '项目成员',
    CPU_REQUEST_LOW: 'CPU 预留',
    CPU_LIMIT_LOW: 'CPU 限制',
    MEMORY_REQUEST_SCAP: '内存预留',
    MEMORY_LIMIT_SCAP: '内存限制',
    CPU_REQUEST_CORE: '{value} 核',
    CPU_LIMIT_CORE: '{value} 核',
    MEMORY_REQUEST_MIB: '{value} Mi',
    MEMORY_LIMIT_MIB: '{value} Mi',
    WS_RESOURCE_REQUESTS: '资源预留',
    WS_RESOURCE_LIMITS: '资源限制',
    SELECT_RESOURCE_TIP: '请选择资源或输入资源名称',
    NUMBER_OF_ROUTES: '应用路由数量',
    NUMBER_OF_SECRETS: '保密字典数量',
    NUMBER_OF_CONFIGMAPS: '配置字典数量',
  
    // Project Members
    PROJECT_MEMBER: '项目成员',
    PROJECT_MEMBER_DESC:
      '项目成员可以查看或管理项目资源。项目管理员可以邀请企业空间成员至该项目并对项目成员进行管理。',
  
    // Advanced Settings
    REMOVE: '移除',
    DISABLED: '未开启',
    ENABLE: '开启',
    DISABLE: '关闭',
    ENABLE_GATEWAY_TIP: '要使用网关，请在集群或项目中配置网关',
  
    // Network Isolation
    INGRESS: '入站',
    INTERNAL_TRAFFIC_DIRECTION_DESC:
      '出站表示从当前项目到其他项目的方向。入站表示从其他项目到当前项目的方向。',
    NETWORK_SEGMENT_EXAMPLE: '例如：10.0.0.0',
    PORT_EXAMPLE: '例如：80',
    'Discover branches from repository': '发现仓库上的分支',
    'Discover pull requests from origin': '发现原始存储库与目标存储库相同的 PR',
    'Discover pull requests from forks': '发现 Fork 存储库与目标存储库相同的 PR',
    'User types that can trigger builds': '可以触发构建的用户类型',
    NO_CONCURRENT_BUILD_DESC: '设置流水线一次仅执行一个构建任务。',
    BUILD_PARAMETERS: '构建参数',
    BUILD_TRIGGER: '构建触发器',
    BUILD_PERIODICALLY: '定时构建',
    TRIGGER_REMOTE_BUILD: '触发远程构建（例如，使用脚本）',
    'Authentication Token': '身份验证令牌',
    'Use the following URL to remotely triggerworkbench the build':
      '使用以下 URL 远程触发构建',
    BEHAVIORAL_STRATEGY: '行为策略',
    SCRIPT_PATH_DESC: '设置 Jenkinsfile 在代码仓库中的的路径。',
    SCAN_TRIGGER: '扫描触发器',
    SCAN_PERIODICALLY: '定时扫描',
    SCAN_INTERVAL: '扫描时间间隔',
    WEBHOOK_PUSH_URL: 'Webhook 推送 URL',
    BUILD_SETTINGS: '构建设置',
    BRANCH_SETTINGS: ' 分支设置',
    PIPELINE_NAME_DESC: '流水线的名称，同一个项目内流水线不能重名。',
    PIPELINE_PARAM_DEFAULT_DESC:
      '设置参数的的默认值。您可以在手动运行流水线前修改参数值。',
    PARAMETER_DESCRIPTION_DESC: '设置参数的描述。',
    CHOICE_PARAM_OPTION_DESC: '每行输入一个选项，第一行的将作为默认选项。',
    'No need': '不需要',
    CODE_REPOSITORY_ADDRESS_DESC: '请使用包含 Jenkinsfile 的代码仓库。',
    CODE_REPOSITORY_ADDRESS_EMPTY_TIP: '请输入代码仓库的地址。',
    SELECT_CREDENTIAL_DESC: '选择一个凭证用于访问代码仓库。',
    'For accessing GitHub': '用于获取 GitHub',
    BRANCH_COUNT: '分支数量',
    PIPELINE: '流水线',
    PIPELINE_PL: '流水线',
    PIPELINE_LOW: '流水线',
    'Pipeline List': '流水线列表',
    EDIT_PIPELINE: '编辑流水线',
    EDIT_JENKINSFILE: '编辑 Jenkinsfile',
    RUN: '运行',
    COMMIT_PL: '提交',
    BRANCH_SI: '分支',
    BRANCH_PL: '分支',
    CODE_REPOSITORY_BRANCH: '代码仓库分支',
    LAST_MESSAGE: '最后消息',
    LAST_MESSAGE_SCAP: '最后消息',
    Duration: '持续时间',
    DURATION: '持续时间',
    DURATION_VALUE: '持续时间：{value}',
    TASK_STATUS: '任务状态',
    HEALTH: '健康状态',
    CREDENTIAL_PL: '凭证',
    CREDENTIAL: '凭证',
    CREDENTIAL_LOW: 'credential',
    CREDENTIAL_SI: '凭证',
    CREDENTIALS_MANAGEMENT: '凭证管理',
    'Add Parallel Stage': '添加并行阶段',
    'Add Step': '添加步骤',
    'Pipeline Configuration': '编辑流水线',
    VIEW_LOGS: '查看日志',
    CODE_REPOSITORY: '代码仓库',
    DELETE_OUTDATED_BUILD_RECORDS: '删除过期构建记录',
    DELETE_OUTDATED_BRANCHES: '删除旧分支',
    BUILD_RECORD_RETENTION_PERIOD_DAYS: '构建记录保留期限（天）',
    MAXIMUM_BUILD_RECORDS: '构建记录最大数量',
    BRANCH_RETENTION_PERIOD_DAYS: '分支保留天数（天）',
    MAXIMUM_BRANCHES: '分支最大数量',
    BUILD_RECORD_RETENTION_PERIOD_DAYS_DESC:
      '超过保留期限的构建记录将被删除。默认值为 7。',
    NO_CONCURRENT_BUILDS: '不允许并发构建',
    PIPELINE_NAME_TIP: '请输入流水线名称。',
    CREATE_PIPELINE: '创建流水线',
    MAXIMUM_BUILD_RECORDS_DESC:
      '当构建记录数量超过允许的最大数量，最早的构建记录将被删除。默认值为 10。',
    SCAN_REPOSITORY: '扫描仓库',
    'Press enter for the next': '回车以进行下一步',
    'Wrong Token': 'Token 错误',
    SELECT_CODE_REPOSITORY: '选择代码仓库',
    CODE_REPOSITORY_ADDRESS: '代码仓库地址',
    REPOSITORY_NAME: '代码仓库',
    REPOSITORY_NAME_EMPTY_TIP: '请输入代码仓库的名称。',
    'get token': '获取 Token',
    PIPELINE_DESC: `流水线是一组可扩展的工具，可以通过组合它们来实现持续集成和持续交付。
      您可以在此页面创建并管理流水线。`,
    CREATE_CREDENTIAL: '创建凭证',
    CREDENTIAL_NAME: '凭证名称',
    username_password: '帐户凭证',
    CREDENTIAL_TYPE_USERNAME_PASSWORD: '用户名和密码',
    CREDENTIAL_TYPE_SSH: 'SSH 密钥',
    CREDENTIAL_TYPE_SECRET_TEXT: '访问令牌',
    CREDENTIAL_TYPE_KUBECONFIG: 'kubeconfig',
    login_Plateform: '登录平台',
    SCRIPT_PATH: '脚本路径',
    WEBHOOK_PUSH: 'Webhook 推送',
    DISCOVER_TAG_BRANCHES: '发现标签',
    DISCOVER_BRANCHES: '发现分支',
    DISCOVER_PR_FROM_ORIGIN: '从原仓库发现 PR',
    DISCOVER_PR_FROM_FORKS: '从 Fork 仓库发现 PR',
    PULL_STRATEGY: '拉取策略',
    TRUSTED_USERS: '受信用户',
    ADD_ACTION: '添加操作',
    ALL_BRANCHES: '包括所有分支',
    ENABLE_TAG_BRANCH_DISCOVERY: '开启标签发现',
    DISABLE_TAG_BRANCH_DISCOVERY: '关闭标签发现',
    EXCLUDE_PR_BRANCHES: '排除已提交 PR 的分支',
    ONLY_PR_BRANCHES: '只包括已提交 PR 的分支',
    OPTIONS_PR_PARAMS_1: '拉取 PR 合并后的代码',
    OPTIONS_PR_PARAMS_2: '拉取 PR 提交时的代码',
    OPTIONS_PR_PARAMS_3: '分别创建两个流水线',
    USERS_WITH_PERMISSION: '具有管理员或编辑权限的用户',
    Normal: '通用',
    'Run Pipeline': '运行流水线',
    ARTIFACT_PL: '制品',
    artifacts: '制品',
    Queue: '队列中',
    Recipient: '收件人',
    Sender: '发件人',
    CC: '抄送',
    Subject: '主题',
    bcc: '密送',
    remote: '仓库地址',
    'Print message': '打印消息',
    CREDENTIALS_DESC: `凭证是包含了一些敏感数据的对象，如用户名密码，SSH 密钥和 Token 等,
      用于在流水线运行时, 为拉取代码、push/pull 镜像、SSH 执行脚本等过程提供认证`,
    'Credential Id': '凭证 ID',
    NO_ARTIFACT_FOUND_TIP: '未发现制品。',
    SELECT_THIS_REPOSITORY: '选择此仓库',
    SCAN_REPO_SUCCESSFUL: '仓库扫描触发成功。',
    PIPELINE_RUN_LOGS: '流水线运行日志',
    DOWNLOAD_LOGS: '下载日志',
    'Time Used': '用时',
    NOT_RUNNING: '未运行',
    NOT_BUILT: '未构建',
    'Not Build': '未执行',
    Failure: '失败',
    COMMIT: '提交',
    COMMIT_ID: '提交 ID',
    'Please input images name': '请输入镜像名称',
    'defaultValue -1 means not to discard': '默认值 -1: 不会丢弃记录',
    NO_STATUS: '没有状态',
    SKIPPED: '已跳过',
    SUB_HEALTHY: '亚健康',
    STOP_PIPELINE_SUCCESSFUL: '流水线停止成功。',
    REPOSITORY_SCAN_LOGS: '仓库扫描日志',
    VIEW_SCAN_LOGS: '查看扫描日志',
    'Started By': '实施者',
    RESCAN: '重新扫描',
    RUN_ID: '运行 ID',
    LOGS_OBTAINED_SUCCESSFULLY: '日志获取成功。',
    'Configuration error': '配置信息错误',
    'branch success': '分支成功',
    BUILD_PARAMETERS_TIP: '向流水线传入构建参数。',
    AUTHENTICATION_TOKEN_TIP: `如果需要通过访问预定义 URL 开触发构建，请开启此选项。
      此功能的的一个典型用法是通过源代码管理系统的钩子脚本来进行触发。
      您需要提供一个字符串形式的授权令牌，以便只有拥有授权令牌的人才能触发远程构建。`,
    DELETE_OUTDATED_BUILD_RECORDS_TIP:
      '设置系统自动删除过期的控制台输出、归档制品、元数据等构建记录以节省磁盘空间。',
    DELETE_OUTDATED_BRANCHES_TIP: '设置系统自动删除过期分支以节省磁盘空间。',
    BUILD_PERIODICALLY_TIP: '设置流水线定期执行构建任务。',
    BRANCH_RETENTION_PERIOD_DAYS_DESC: '超过保留期限的分支将被删除。默认值为 7。',
    MAXIMUM_BRANCHES_DESC:
      '当构建记录数量超过允许的最大数量，最早的构建记录将被删除。默认值为 5。',
    CRON_TIP:
      '该字段遵循 cron 的语法 (略有不同)。具体来说，每行包含由制表符或空格分隔的 5 个字段。\n' +
      '分钟: 一个小时中的第几分钟 (0-59)\n' +
      '小时: 一天中的第几小时 (0-23)\n' +
      ' 月份的第几天:  一个月份中的第几天 (1-31)\n' +
      ' 月份: 第几个月份 (1-12)\n' +
      '星期的第几天 一个星期的第几天 (0-7)，0 和 7 都是星期天。',
    'Edit Config': '编辑配置',
    PIPELINES_BASEINFO_DESC: '请输入流水线的基本信息',
    PIPELINE_ADVANCE_SETTINGS_DESC: '	为流水线配置复杂行为策略（可选）',
    CREDENTIALS_CREATE_DESC: '创建用于 DevOps 项目中的凭证',
    WAITING_FOR_INPUT: '等待输入',
    BREAK: '终止',
    PROCEED: '继续',
    'credential Id': '凭证 ID',
    Branches: '分支',
    'Clean when aborted': '清理失败不影响运行',
    'Not fail build': '失败不影响运行',
    submitter: '审核者',
    submitterParameter: '提交参数',
    PRIVATE_KEY: '私钥',
    PASSPHRASE: '密码短语',
    'This name has been used.': '此名称已被使用',
    'Automatically generated by GitHub': '由 GitHub 自动生成',
    SET_PARAMETERS: '设置参数',
    "Missing one or more required properties: 'name'": 'name 不能为空',
    'Please add at least one step.': '至少添加一个步骤',
    'Please input the credential name.': '请输入凭证名称。',
    SCM: '代码仓库',
    NO_COMMIT_FOUND: '未发现提交记录',
    'Clean Workspace': '清理企业空间',
    'Save Artifact': '保存制品',
    'Change Current Directory': '更改当前目录',
    CHECKOUT_DESC: '拉取代码，常用于拉取非 Git 代码，例如 SVN 等等',
    'Send messages by email': '可以通过邮件发送消息',
    'Send messages in the build': '可以在构建中发送消息',
    'Shell commands can be executed in the container':
      '可以在容器中执行 shell 命令',
    'You can execute shell commands or windows batch commands in the build.':
      '可以在构建中执行 shell 命令或者 windows 的 batch 命令',
    'Pull code by SVN': '通过 SVN 拉取代码',
    'Pull code by Git': '通过 Git 拉取代码',
    'Add nesting steps': '添加嵌套步骤',
    'instance failed to match at least one schema': '至少需要一个嵌套步骤',
    'Load credentials into environment variables': '加载凭证到环境变量',
    'Password Variable': '密码变量',
    'Username Variable': '用户名变量',
    PRIVATE_IMAGE_DESC:
      '要从私有镜像仓库部署，需要先创建镜像仓库，然后拉取镜像。',
    AGENT_TYPE_DESC: `Agent 部分指定整个流水线或特定阶段将在 Jenkins 环境中执行的位置，
      具体取决于该 agent 部分的放置位置。该部分必须在流水线块内的顶层定义，但 stage 级使用是可选的。`,
    AUTHENTICATION_TOKEN_DESC: `使用以下 URL 远程触发构建：
      JENKINS_URL / job / JOB_NAME / build？token =TOKEN_NAME
      或者/ buildWithParameters？token = TOKEN_NAME 可选择附加＆cause =原因提供将包含在记录的构建原因中的文本。`,
    SELECT_CODE_REPO_DESC: '选择流水线使用的代码仓库。',
    NO_PIPELINE_CONFIG_FILE_TIP: '未发现流水线配置文件。',
    ACTIVITY_EMPTY_TIP: '流水线尚未运行。',
    PIPELINE_NO_CONFIG: '当前流水线中并未发现相关配置文件',
    INVALID_JENKINSFILE_TIP:
      '当前 Jenkinsfile 不是标准的声明式 Jenkinsfile，图形化显示不可用。',
    PIPELINE_SCHEDULE_DESC:
      '输入 CRON 表达式以设置定时计划。<a href="//jenkins.io/doc/book/pipeline/syntax/#cron-syntax" target="_blank">了解更多</a>',
    'passphrase Variable': '密码变量',
    'show yaml editor': '用 YAML 编辑器编辑',
    'Enable Variable Substitution in Config': '在配置中开启变量替换',
    'Kubernetes Secrets': 'Kubernetes 密钥',
    'Kubernetes Namespace for Secret': 'Kubernetes 密钥命名空间',
    'Docker Container Registry Credentials': 'Docker 容器仓库凭证',
    'Docker Registry URL': 'Docker 仓库 URL',
    'Registry Credentials': '仓库凭证',
    'Show Advanced Settings': '展示高级设置',
    'Config File Path': '配置文件路径',
    'Add another credential': '增加一个凭证',
    'Deploy resources to the Kubernetes cluster': '将资源部署到 kubernetes 集群',
    REMOTE_REPOSITORY_URL: '远程仓库地址',
    BRANCH_INCLUDED: '包括分支',
    BRANCH_EXCLUDED: '排除分支',
    KUBECONFIG_CONTENT_DESC: '默认内容为当前用户的 kubeconfig 配置。',
    'The label on which to run the Pipeline or individual stage':
      '流水线或单个阶段的标签',
    SINGLE_SVN: '单分支 SVN',
    SVN: 'SVN',
    WEBHOOK_PUSH_DESC: '推送消息到此 URL 以触发仓库扫描。',
    'single Svn': '单分支 SVN',
    WEBHOOK_DESC: '通过设置 Webhook 服务器以配置 Webhook 通知。',
    TIME_TRIGGER_DESC: '定时扫描代码仓库。',
    'Are you sure to close this pipeline Editor ?': '确定关闭流水线编辑？',
    CLOSE_JENKINSFILE_EDITOR_TIP: '确定关闭 Jenkinsfile 编辑器？',
    KUBERNETES_DEPLOY_DESC: `在 kubernetes 集群中进行部署，在持续集成/持续部署的环境当中，
      只有那些需要定期更新的资源才应该放到部署步骤当中，所以此步骤大多数时间都在处理部署这类资源.`,
    KUBERNETES_DEPLOY_DESC_MORE: `<br />
      <label>该步骤主要有以下特点:</label>
      <li>无需 kubectl 的情况下实现部署</li>
      <li>Jenkinsfile 中的变量替换，可以进行动态部署。</li>
      <li>支持从私有镜像仓库拉取 Docker 镜像</li>
      <label>目前该步骤支持以下资源:</label>
      <br />
      <li>配置</li>
      <li>密钥</li>
      <li>部署</li>
      <li>守护进程集</li>
      <li>应用路由</li>
      <li>名称空间</li>
      <li>任务</li>
      <li>服务</li>
      <li>Replica Set</li>
      <li>
        Replication
        Controller (不支持滚动更新，如果要使用滚动更新请使用部署)
      </li>`,
    'username or group name, multiple values ​​used, separated':
      '用户名或组名，多个值使用英文逗号分隔',
    'key File Variable': '私钥变量',
    'Text Variable': '文本变量',
    'Kubeconfig Variable': 'kubeconfig 变量',
    PIPELINE_PREPARE_DESC: '环境准备中...',
    PARAMS_DESC:
      '下列参数是根据流水线设置或 Jenkinsfile 中的 parameters 部分生成的字段，请根据运行需求输入。',
    'Chinese is not allowed in the pipeline configuration':
      '配置中不允许含有中文',
    'Edit Credential': '编辑凭证',
    EDIT_CREDENTIAL_DESC: '下列表单不会显示原有凭证信息，重新输入会将其覆盖。',
    PASSWORD_TOKEN: '密码/令牌',
    "Sorry, you don't have the permission to do this.":
      '抱歉，您没有权限进行此操作',
    'Drag and drop tasks to sort': '可以拖拽任务进行排序',
    Unnamed: '未命名',
    TASK_FAILED_NOT_OPERATIONAL: '此阶段已失败且无法操作。',
    CANCELLED_IN_REVIEW: '已在审核中取消',
    'Executes the code inside the block with a determined time out limit.':
      '使用确定的超时限制执行块内的代码.',
    'Timeout after no activity in logs for this block':
      '此区块代码无日志输出后开始计算超时',
    'Absolute duration': '代码块所用的绝对时间',
    pipeline_conditions: '条件',
    'The conditions required to implement the current phase (optional).':
      '执行当前阶段所需要满足的条件 （可选）',
    'Add conditions': '添加条件',
    'Add nesting conditions': '添加嵌套条件',
    'Current branch name must match the input value': '当前分支名需符合输入值',
    'The environment variable entered before running the pipeline is match the current value.':
      '运行流水线前输入的环境变量与当前值一致',
    'Enter an expression': '输入一个表达式',
    'Negative prefix': '否定前缀',
    'Internal nesting conditions must be matched': '内部嵌套的条件需全部满足',
    'Internal nested conditions only need to satisfy one':
      '内部嵌套的条件只需符合一个',
    'Environment name': '环境变量名',
    expression: '表达式',
    PARAMS_STRING: '字符串 ',
    PARAMS_TEXT: '多行字符串',
    PARAMS_BOOLEAN: '布尔值',
    PARAMS_CHOICE: '选项',
    PARAMS_PASSWORD: '密码',
    PARAMS_TEXT_TCAP: '多行字符串',
    critical: '严重',
    blocker: '阻断',
    BLOCKER: '阻塞',
    CRITICAL: '严重',
    MAJOR: '重要',
    MINOR: '轻微',
    NOTICE: '提示',
    major: '重要',
    minor: '次要',
    info: '提示',
    ISSUE_PL: '问题',
    'Code Quality Check': '代码质量检查',
    CODE_LINE_COUNT: '行数',
    VULNERABILITY_PL: '代码漏洞',
    CODE_SMELL_PL: '代码异味',
    COVERAGE: '覆盖率',
    "Didn't pass": '未通过',
    TEST_RESULTS: '检查结果',
    CODE_CHECK: '代码检查',
    LINE_VALUE: '行：{value}',
    DISPLAY_ALL: '展示全部',
    CODE_SMELL: '代码异味',
    BUG: '代码错误',
    BUG_PL: '代码错误',
    VULNERABILITY: '代码漏洞',
    SECURITY_HOTSPOT: '安全',
    Line: '行',
    DISPLAY_ONLY_LAST_TEN: '仅显示最近 10 条问题。',
    abortPipeline: '检查结果是否影响后续任务',
    waitForQualityGate: '代码质量检查(SonarQube)',
    mail: '邮件',
    echo: '打印消息',
    dir: '切换目录',
    withCredentials: '添加凭证',
    container: '指定容器',
    archiveArtifacts: '保存制品',
    input: '审核',
    timeout: '超时',
    Timeout: '超时',
    TIMEOUT_VALUE: '超时：{value}',
    withSonarQubeEnv: 'Sonarqube 配置',
    sh: 'shell 脚本',
    CLONE_SETTINGS: '克隆设置',
    CLONE_DEPTH: '克隆深度',
    REGEX: '正则表达式',
    FILTER_BY_REGEX: '正则过滤',
    FILTER_BY_REGEX_DESC: '使用正则表达式过滤分支、PR 和标签',
    ENABLE_SHALLOW_CLONE: '开启浅克隆',
    CLONE_TIMEOUT_PERIOD: '克隆超时时间（min）',
    'config name': '配置名称',
    waitForQualityGate_desc:
      '代码质量检查标准来源于SonarQube的 Quality Gate (质量阈)，如果需要自定义检查标准请前往 SonarQube 设置',
    'Inspection results do not affect subsequent tasks': '检查结果不影响后续任务',
    'Start the follow-up task after the inspection': '检查通过后开始后续任务',
    'Load the sonarqube configuration provided by Jenkins into the Pipeline.':
      '将 Jenkins 中的 sonarqube 配置加载到流水线中',
    PIPELINE_CREATE_DESC: '初始化完成后将开始流水线的任务执行',
    INITIALIZING_PIPELINE: '流水线初始化中',
    INITIALIZING_PIPELINE_DESC: '请等待流水线初始化完成。',
    'Specify a container to add nested tasks to execute inside the container':
      '指定容器，可添加嵌套任务在容器内执行',
    INPUT_DESC:
      '流水线运行至此任务将会暂停，创建者和被@的人可以选择继续或终止流水线',
    INPUT_MESSAGE_DESC: '流水线运行状态中将会展示此消息',
    '@somebody to help review': '可以@某人来帮助审核',
    REVIEW_DESC: '流水线运行至此任务将会暂停，审核后可选择继续或终止',
    withSonarQubeEnv_DESC: '快速的定位代码中潜在的或者明显的错误',
    waitForQualityGate_DESC: '在执行代码分析后执行',
    script_DESC: '执行groovy脚本',
    QUEUED: '队列中',
    ABORTED: '已取消',
    UNSTABLE: '未稳定',
    PIPELINE_QUEUED_TITLE: '即将完成初始化',
    PIPELINE_QUEUED_DESC:
      '您需要等待 agent 启动并执行流水线（注：如 agent 长时间没有启动请检查 agent 配置和集群资源情况）',
    pipeline_owner: 'DevOps 项目的所有者，可以进行 DevOps 项目的所有操作',
    pipeline_maintainer:
      'DevOps 项目的主要维护者，可以进行项目内的凭证配置、流水线配置等操作',
    pipeline_developer: 'DevOps 项目的开发者，可以进行流水线的触发以及查看',
    pipeline_reporter: 'DevOps 项目的观察者，可以查看流水线的运行情况',
    'sonar is the default config name.': '默认配置名称是 sonar',
    credentialsId: '凭证 ID',
    enableConfigSubstitution: '开启变量替换',
    configs: '配置',
    secretNamespace: '密钥命名空间',
    secretName: '秘钥名称',
    dockerCredentials: 'Docker 容器仓库凭证',
    passwordVariable: '密码变量',
    usernameVariable: '用户名变量',
    keyFileVariable: '私钥变量',
    passphraseVariable: '密码变量',
    NO_BRANCH_FOUND_TIP: '未发现分支。',
    LoadPrevData_Desc: '检测到此流水线上次未编辑成功，是否加载上次数据继续编辑？',
    Continue: '继续编辑',
    Discard: '忽略',
    'Jenkinsfile syntax error, message': 'Jenkinsfile 语法错误，消息',
    PATTERN_PIPELINE_NAME_VALID_NAME_TIP:
      '名称不合法 （仅支持大小写字母、数字、_、-）',
    INCORRECT_GITHUB_TOKEN_DESC: `GitHub 令牌错误
    <a
      class="float-right"
      href="https://github.com/settings/tokens/new?scopes=repo,read:user,user:email,write:repo_hook"
      target="_blank"
    >
      获取 GitHub 令牌
    </a>`,
    GET_GITHUB_TOKEN_DESC: `用于获取 GitHub 代码仓库
    <a
      class="float-right"
      href="https://github.com/settings/tokens/new?scopes=repo,read:user,user:email,write:repo_hook"
      target="_blank"
    >
      获取 Token
    </a>`,
    BITBUCKET_SERVER_CREDENTIAL_EMPTY: '请设置 Bitbucket 服务器和凭证。',
    GITHUB_CREDENTIAL_EMPTY: '请设置 GitHub 凭证。',
    BITBUCKET_ADDRESS_EMPTY_TIP: '请输入 Bitbucket 服务器的地址。',
    BITBUCKET_ADDRESS_INVALID_TIP: 'Bitbucket 服务器地址格式错误。',
    'pipeline syntax error': '流水线语法错误',
    PIPELINES_FOOTER_SEE_MORE: '前往分支详情页查看更多 →',
    PIPELINE_CRON_DESC: '流水线下次将在 {nextTime} 运行。',
    'not support edit nested stage': '暂不支持编辑嵌套阶段',
    JENKINS_LINS_ERROR: '第 {line} 行有语法错误',
    'Delete all resources of the deployment file': '删除部署文件所对应的所有资源',
    PIPELINE_EVENT_TRIGGER: '通过流水线事件触发',
    WHEN_CREATE_PIPELINE: '创建流水线时触发',
    WHEN_DELETE_PIPELINE: '删除流水线时触发',
    WHEN_DELETE_PIPELINE_DESC:
      '当有流水线被删除时，将自动触发指定流水线中的任务。',
    WHEN_CREATE_PIPELINE_DESC:
      '当创建新的流水线时，将自动触发指定流水线中的任务。',
    SELECT_PIPELINE_SCAP: '选择流水线',
    timer: '定时器',
    STARTED_BY_NAME: '启动者：{name}',
    CREDENTIAL_NAME_EXIST_DESC: '凭证名称已存在，请输入其他名称。',
    'Invalid credential ID': '凭证 ID 格式不合法',
    CI: '持续集成 (CI)',
    CI_DESC:
      '持续集成（CI）是在源代码变更后自动检测、拉取、构建和（在大多数情况下）进行单元测试的过程。',
    CICD: '持续集成&交付 (CI/CD)',
    CICD_DESC:
      '持续部署（CD）是指能够自动提供持续交付管道中发布版本给最终用户使用的想法。根据用户的安装方式，在云环境中自动部署、app 升级（如手机上的应用程序）、更新网站或只更新可用版本列表。',
    CUSTOM_PIPELIEN: '自定义流水线',
    CUSTOM_PIPELIEN_DESC: '您可以选择您需要的任务自定义流水线的工作内容',
    COPY_PIPELINE: '复制流水线',
    PIPELINE_RUN_START_SI: '开始运行流水线...',
    PIPELINE_RUN_START_PL: '开始运行流水线...',
    BATCH_RUN_SUCCESS_SI: '流水线运行成功。',
    BATCH_RUN_SUCCESS_PL: '流水线运行成功。',
    'Batch Run Fail': '批量运行失败',
    'Run Start': '运行开始',
    GITLAB_SERVER_ADDRESS: 'Gitlab 服务器地址',
    GITLAB_SERVER_EMPTY_TIP: '请输入 GitLab 服务器的地址。',
    PROJECT_GROUP_OWNER: '项目组/所有者',
    PROJECT_GROUP_OWNER_EMPTY_TIP: '请输入 GitLab 项目组或项目所有者的名称。',
    BITBUCKET_SERVER_ADDRESS: 'Bitbucket 服务器地址',
    BITBUCKET_SERVER_EMPTY_TIP: '请设置 Bitbucket 服务器的地址。',
    CREATE_PIPELINE_DESC: '使用流水线进行构建，测试和部署',
    'Choose a Pipeline Template': '选择流水线模板',
    BATCH_RUN_UNSUPPORTED_DESC: '多分支流水线不支持批量运行。',
    SYNC_STATUS: '同步状态',
  
    // Pipeline List Page
    PULL_REQUEST_PL: '拉取请求',
    PULL_REQUEST_COUNT: '拉取请求数量',
    HEALTHY: '健康',
  
    // Pipeline Creation Page
    DEVOPS_PROJECT_DESC:
      'DevOps 项目用于对资源进行分组管理以及控制不同用户的资源管理权限。',
    PIPELINE_CREATE_DEVOPS_PROJECT_DESC: '选择流水线所属的 DevOps 项目。',
    CODE_REPOSITORY_OPTIONAL: '代码仓库（可选）',
    OPTIONS: '备用选项',
    NOTIFICATION_MANAGEMENT: '通知管理',
    NO_AUTH: '无需认证',
    'Notification Management': '通知管理',
    NOTIFICATION_CONFIGURATION: '通知配置',
    'Notification Configuration': '通知配置',
    SERVER_SETTINGS: '服务器设置',
    RECIPIENT_SETTINGS: '接收设置',
    'Receive Notification': '接收通知',
    NOTIFICATION_CONFIGURATION_DESC:
      'KubeSphere 支持多种通知渠道的通知配置，您可以进行服务器和接收配置，并开启或关闭通知。',
  
    'Notification On': '通知开启',
    'Notification Off': '通知关闭',
  
    NOTIFICATION_CONDITIONS: '通知条件',
    NOTIFICATION_CONDITION_SETTING_TIP:
      '操作符<b>包含值</b>和<b>不包含值</b>需要添加一个或多个标签值。使用回车分隔多个值。</br>操作符<b>存在</b>和<b>不存在</b>判断某个标签是否存在，无需设置标签值。',
    NOTIFICATION_CONDITION_SETTINGS_DESC: '您只会接收到符合条件的通知。',
    INCLUDES_VALUES: '包含值',
    DOES_NOT_INCLUDE_VALUES: '不包含值',
    EXISTS: '存在',
    DOES_NOT_EXIST: '不存在',
    'Please select a tag': '请选择标签',
    'Please select a regex filter': '请选择过滤规则',
    'Invalid notification condition': '请填写正确的通知条件',
    TAG_INPUT_PLACEHOLDER: '请输入值后回车确认',
    PATTERN_TAG_INVALID_TIP:
      '标签无效。标签只能包含字母、数字、连字符（-）、下划线（_）和句点（.），必须以数字或字母开头和结尾。',
    INVALID_NOTIFICATION_CONDITION: '请填写正确的通知条件。',
  
    SEND_TEST_MESSAGE: '发送测试信息',
    SEND_TEST_MESSAGE_DESC: '配置完成后，您可以发送测试信息进行验证。',
    SEND_TEST_MESSAGE_SUCCESS_DESC:
      '验证成功。已向您发送了一条测试消息，请注意查收。',
  
    Mail: '邮件',
    SMTP_SERVER_ADDRESS: 'SMTP 服务器地址',
    USE_SSL_SECURE_CONNECTION: '使用 SSL 安全连接',
  
    MAIL_SETTING_DESC: '可以通过邮件接收平台的通知，需要配置邮件发送服务器。',
    SENDER_MAIL: '发件人邮箱',
    MAIL_DESC: '通过设置服务器和接收人以配置邮件通知。',
    SENDER_EMAIL: '发件人邮箱',
    MAIL_SETTINGS_CHANGE_NEED_SAVE_TIP:
      '您当前的邮件设置已发生变化，请保存配置，或者取消修改',
  
    'Please enter an email address': '请输入要添加的邮箱',
    'This email address has existed': '此邮箱已存在',
    INVALID_ADDRESS_DESC: '请输入有效地址。',
    INVALID_EMAIL: '邮箱地址格式错误。',
    'Please add the recipient email address': '请添加接收邮箱',
    MAX_EAMIL_COUNT: '您可以最多添加 {count} 个邮箱。',
  
    DingTalk: '钉钉',
    CONVERSATION_SETTINGS: '会话设置',
    CONVERSATION_ID: '会话 ID',
    CHATBOT_SETTINGS: '群机器人设置',
    keywords: '关键字',
    KEYWORDS_LIST: '关键词列表',
    CONVERSATION_ID_TIP:
      '会话 ID 需要系统管理员进行配置才能获取，如需设置请联系系统管理员。',
  
    DINGTALK_SETTING_TIP: '请设置会话或者群机器人。',
    DINGTALK_CHATBOT_SECURITY_TIP: '请输入密钥或关键词',
  
    DINGTALK_SETTING_DESC: '可以通过钉钉接收平台的通知，需要配置钉钉发送服务器。',
    ENTER_CONVERSATION_ID_DESC: '请输入会话 ID。',
    ENTER_KEYWORD_DESC: '请输入关键字。',
    CONVERSATION_ID_EXISTS: '会话 ID 已存在，请添加其他会话 ID。',
    KEYWORD_EXISTS: '关键词已存在，请添加其他关键词。',
    MAX_CID_COUNT: '您可以最多添加 {count} 个会话 ID。',
    MAX_KEYWORD_COUNT: '您可以最多添加 {count} 个关键词。',
    EMPTY_KEYWORDS_DESC: '没有添加关键词。',
  
    DINGTALK_DESC: '通过设置会话和接收人以配置钉钉通知。',
    DINGTALK_KEYWORDS_DESC: 'ChatBot 的自定义关键字, 如需多个请以 "," 分隔',
    DINGTALK_SETTINGS_CHANGE_NEED_SAVE_TIP:
      '您当前的钉钉设置已发生变化，请保存设置，或者取消修改',
  
    WeCom: '企业微信',
    WECOM_CORP_ID: '企业 ID',
    WECOM_AGENT_ID: '应用 AgentId',
    WECOM_SECRET: '应用 Secret',
    USER_ID: '用户 ID',
    DEPARTMENT_ID: '部门 ID',
    TAG_ID: '标签 ID',
    TOUSER_LIST: '已添加的用户 ID',
    TOPARTY_LIST: '已添加的部门 ID',
    TOTAG_LIST: '已添加的标签 ID',
    WECOM_TOUSER_PLACEHOLDER: '用户 ID',
    WECOM_TOPARTY_PLACEHOLDER: '部门 ID',
    WECOM_TOTAG_PLACEHOLDER: '标签 ID',
    RECIPIENT_SETTINGS_TIP: '您需要配置至少一项以接收通知。',
    EMPTY_TOUSER_DESC: '没有已添加的用户 ID。',
    EMPTY_TOPARTY_DESC: '没有已添加部门 ID。',
    EMPTY_TOTAG_DESC: '没有已添加标签 ID。',
  
    ENTER_WECOM_CORP_ID_DESC: '请输入企业 ID。',
    ENTER_WECOM_AGENT_ID_DESC: '请输入应用 AgentId。',
    ENTER_WECOM_SECRET_DESC: '请输入应用 Secret。',
    ENTER_TOUSER_TIP: '请输入用户 ID。',
    ENTER_TOPARTY_TIP: '请输入部门 ID。',
    ENTER_TOTAG_TIP: '请输入标签 ID。',
    TOUSER_EXISTS: '用户 ID 已存在，请输入其他用户 ID。',
    TOPARTY_EXISTS: '部门 ID 已存在，请输入其他部门 ID。',
    TOTAG_EXISTS: '标签 ID 已存在，请输入其他标签 ID。',
    MAX_TOUSER_COUNT: '您可以最多添加 {count} 个用户。',
    MAX_TOPARTY_COUNT: '您可以最多添加 {count} 个部门。',
    MAX_TOTAG_COUNT: '您可以最多添加 {count} 个标签。',
  
    WECOM_DESC: '通过设置服务器和接收人以配置企业微信通知。',
    WECOM_SETTINGS_CHANGE_NEED_SAVE_TIP:
      '您当前的企业微信设置已发生变化，请保存设置，或者取消修改',
  
    Channel: '接收频道',
    CHANNEL_SETTINGS: '频道设置',
    ADDED_CHANNELS: '已添加的频道',
    EMPTY_CHANNEL_DESC: '没有添加频道。',
  
    SLACK_TOKEN_DESC: '请输入 Slack 令牌。',
    ADD_CHANNEL_DESC: '请添加频道。',
    CHANNEL_EXISTS: '频道已存在，请添加其他频道。',
    CHANNEL_SETTINGS_DESC: '请添加频道。',
    MAX_CHANNEL_COUNT: '您可以最多添加 {count} 个频道。',
  
    SLACK_SETTING_DESC:
      '可以通过 slack 接收平台的通知，需要配置 slack 发送服务器。',
    SLACK_DESC: '通过设置服务器和 Slack 频道以配置 Slack 通知。',
    SLACK_SETTINGS_CHANGE_NEED_SAVE_TIP:
      '您当前的 slack 设置已发生变化，请保存设置，或者取消修改',
  
    'Webhook Settings': 'Webhook 设置',
    'Webhook Url': 'Webhook 地址',
    'Server Name': '服务名称',
    'Root CA': '根证书',
    'Client Certificate Cert': '客户端证书 Cert',
    'Client Certificate Key': '客户端证书 Key',
    VERIFICATION_TYPE: '认证类型',
    SKIP_TLS_VERFICATION: '跳过 TLS 认证（不安全）',
    VERIFICATION_TYPE_DESC: '请选择认证类型。',
  
    WEBHOOK_SETTING_DESC:
      '可以通过 webhook 接收平台的通知，需要配置 webhook 发送服务器。',
    WEBHOOK_SETTINGS_CHANGE_NEED_SAVE_TIP:
      '您当前的 webhook 设置已发生变化，请保存设置，或者取消修改',
  
    PLEASE_ENTER_VALUE_CUSTOM: '请输入{value}。',
    // Notification Configuration
    CONTAINER: '容器',
    VALUES: '值',
    LABEL: '标签',
    CONDITION_OPERATOR: '操作符',
    SMTP_USER: 'SMTP 用户名',
    SMTP_PASSWORD: 'SMTP 密码',
    ENTER_PASSWORD_TIP: '请输入密码。',
    ENTER_RECIPIENT_EMAIL_DESC: '请添加至少一个接收邮箱。',
    INVALID_EMAIL_ADDRESS_DESC: '邮箱格式不正确，请输入正确的邮箱地址。',
    SMTP_USER_EMPTY_DESC: '请输入 SMPT 用户名。',
    DINGTALK_SECRET: '密钥',
    MAIL_TITLE: '邮件',
    DINGTALK_TITLE: '钉钉',
    WECOM_TITLE: '企业微信',
    SLACK_TITLE: 'Slack',
    WEBHOOK_TITLE: 'Webhook',
    SLACK_TOKEN: 'Slack 令牌',
    SLACK_CHANNEL: 'Slack 频道',
    TOKEN: '令牌',
    BASIC_AUTH: '基础认证',
    BEARER_TOKEN: 'Bearer 令牌',
    NODE_SI: '节点',
    NODE_PL: '节点',
    MASTER_NODE_SI: '主节点',
    MASTER_NODE_PL: '主节点',
    WORKER_NODE_SI: '工作节点',
    WORKER_NODE_PL: '工作节点',
  
    'Cluster Node': '集群节点',
    CLUSTER_NODE_PL: '集群节点',
    CLUSTER_NODE: '集群节点',
    'Cluster Nodes': '集群节点',
  
    'Node Role': '节点角色',
    'Edge Node': '边缘节点',
    EDGE_NODE_PL: '边缘节点',
    'Master Node': 'Master 节点',
    'Worker Node': '工作节点',
    ADD_NODE: '添加节点',
    'System Version': '系统版本',
    ONLINE_NODES: '在线节点',
    ALL_NODES: '全部节点',
    IP_ADDRESS: 'IP 地址',
    LINUX: 'Linux',
    'Node IP': '节点 IP',
    Unschedulable: '无法调度',
    SCHEDULABLE: '可调度',
    ARCHITECTURE: '系统架构',
    'OS Image': '操作系统',
    OS_TYPE: '操作系统类型',
    OS_VERSION: '操作系统版本',
    KERNEL_VERSION: '内核版本',
    CONTAINER_RUNTIME: '容器运行时',
    KUBELET_VERSION: 'kubelet 版本',
    KUBE_PROXY_VERSION: 'kube-proxy 版本',
    lastHeartbeatTime: '最近更新时间',
    LATEST_UPDATE_VALUE: '状态更新时间：{value}',
    NODE_ONLINE_STATUS: '节点在线状态',
    PODS: '容器组',
    'Pod Usage': '容器组使用情况',
    'Pod Quantity Trend': '容器组数量变化',
    'Local Storage Capacity': '本地存储容量',
    used: '已用',
    'Resource Usage Status': '资源使用状态',
    TAINTS: '污点',
    taints: '污点',
    Taint: '污点',
    taint: '污点',
    Conditions: '状态',
    ANNOTATION_PL: '注解',
    WORKLOAD_ANNOTATIONS: '工作负载注解',
  
    'Resource Usage': '资源使用情况',
  
    'CPU Requests': 'CPU 预留',
    'CPU Limits': 'CPU 限制',
    'Memory Requests': '内存预留',
    'Memory Limits': '内存限制',
  
    NODE_STATUS_UNSCHEDULABLE: '无法调度',
    NODE_STATUS_RUNNING: '运行中',
    NODE_STATUS_WARNING: '告警',
    NODE_STATUS_PENDING: '创建中',
    NODE_STATUS_FAILED: '创建失败',
  
    NOSCHEDULE: '阻止调度',
    PREFER_NOSCHEDULE: '尽可能阻止调度',
    NOEXECUTE: '阻止调度并驱逐现有容器组',
  
    EDIT_TAINT: '编辑污点',
    EDIT_TAINTS: '编辑污点',
    COMMON_TAINTS: '公共污点',
    'Node List': '主机列表',
    'Node Taints': '主机污点',
    TAINTS_DESC:
      '为节点添加污点以避免或尽可能避免容器组调度到节点。为节点设置污点后，您可以为容器组设置容忍度以允许容器组调度到有特定污点的节点。',
    TAINTS_TIPS:
      '如果主机中存在一个或多个影响策略为 NoSchedule 的污点，该容器组不会被调度到该主机<br>如果主机中不存在影响策略为 NoSchedule 的污点，但是存在一个或多个影响策略为 PreferNoSchedule 的污点，该容器组会尽量不调度到该主机<br>如果主机中存在一个或多个影响策略为 NoExecute 的污点，该容器组不会被调度到该主机，并且会驱逐已经调度到该主机的容器组实例',
    NO_TAINTS_TIPS: '未发现污点。',
    TAINT_SELECT_TIPS: '加入公共污点',
    TAINT_DELETE_TIPS: '删除污点',
    ADD_TAINT: '添加污点',
    'Delete All Taints': '全部删除',
    'CPU Used': 'CPU 使用',
    'Memory Used': '内存使用',
    'Pod Used': '容器组使用',
    'Scheduling Policy': '调度策略',
    'Add Type': '添加类型',
    'Add Node Type': '添加节点类型',
    'Type Name': '类型名称',
    'Allocated CPU': '已分配 CPU',
    'Allocated Memory': '已分配内存',
    ALLOCATED_RESOURCES: '已分配资源',
  
    METADATA: '元数据',
  
    CLUSTER_NODE_DESC:
      '集群节点是 KubeSphere 集群中的基础服务器，您可以在此页面对集群节点进行管理。',
    CLUSTER_NODE_EMPTY_DESC: '请为集群添加一个节点。',
    EDGE_NODE_DESC:
      '边缘节点是部署在 KubeSphere 集群外部的服务器，您可以将边缘节点添加到 KubeSphere 集群以对其进行管理。',
    EDGE_NODE_EMPTY_DESC: '请为集群添加一个边缘节点。',
  
    NODE_NETWORKUNAVAILABLE: '网络可用性',
    NODE_NETWORKUNAVAILABLE_DESC: '检查节点上的网络配置是否正确。',
    NODE_OUTOFDISK: '磁盘可用空间(OutOfDisk)',
    NODE_OUTOFDISK_DESC: '检查节点上是否有空间添加新的容器组。',
    NODE_MEMORYPRESSURE: '内存压力(MemoryPressure)',
    NODE_MEMORYPRESSURE_DESC: '如果节点上的内存使用压力过大,则调度失败。',
    NODE_DISKPRESSURE: '磁盘压力(DiskPressure)',
    NODE_DISKPRESSURE_DESC: '磁盘大小存在压力 - 即磁盘容量低。',
    NODE_PIDPRESSURE: '进程压力(PIDPressure)',
    NODE_PIDPRESSURE_DESC: '如果节点进程压力过大，则会调度失败。',
    NODE_READY: '节点就绪状态',
    NODE_READY_DESC: '节点是否可以接收新的容器组。',
  
    NODE_TYPES_Q: '集群节点有哪些类型？',
    NODE_TYPES_A: '集群节点分为主节点和工作节点。',
    WHAT_IS_NODE_TAINTS_Q: '什么是节点污点？',
    WHAT_IS_NODE_TAINTS_A:
      '节点污点（Taint）可以阻止某些容器组部署到该节点，与容忍度（Toleration）一起使用，可确保容器组不会被调度到不合适的节点上。',
  
    NODE_TYPE_DESC:
      '节点类型为提供了主机节点分组功能，用户可以通过创建合适关系的节点类型并将主机节点加入相应的分组，从而将容器组按照分组关系部署到合适的物理节点上，来提高资源的可用性，业务的连续性。',
  
    NODE_TYPE_DESCRIPTION_DEC:
      '描述信息在选择节点类型时将帮助用户更好的选择节点类型并使用集群',
    ADD_EDGE_COMMAND: '在边缘节点中运行以上命令以对其进行配置。',
    IN_USE_Node_IP: 'IP 地址 {ip} 已被使用，请输入其他 IP 地址。',
    IN_USE_Node_NAME: '节点名称 {name} 已存在，请输入其他名称。',
    'Add Edge Node': '添加边缘节点',
    NODE_NAME_EMPTY_DESC: '请设置节点的名称。',
    EDGENODE_NAME_EMPTY_DESC: '请设置边缘节点的名称。',
    EDGENODE_CONFIG_COMMAND_TIP:
      '运行命令前请确保已在边缘节点安装容器运行时，例如 Docker 或 containerd。<a href="https://kubeedge.io/en/docs/" target="_blank">了解更多</a>',
    ADD_DEFAULT_TAINT: '添加默认污点 {params}',
    'Network Policy': '网络策略',
    NETWORK_POLICY: '网络策略',
    NETWORK_POLICY_PL: '网络策略',
    NETWORK_POLICY_LOW: '网络策略',
    NETWORK_POLICY_EMPTY_DESC: '请创建一个网络策略。',
    NETWORK_ISOLATION: '网络隔离',
    CREATE_NETWORK_POLICY_TCAP: '创建网络策略',
    // Network Policies Page
    CREATE_BTN: '创建',
    ADD_ALLOWLIST_ENTRY: '添加白名单条目',
    EGRESS: '出站',
    Ingress: '入口',
    EGRESS_TRAFFIC: '出站流量',
    INGRESS_TRAFFIC: '入站流量',
    DESTINATION: '目的地',
  
    TRAFFIC_DIRECTION: '流量方向',
    NETWORK_POLICY_DESC:
      '通过配置网络策略，允许在同个集群内实现网络的隔离，即可以在某些实例（容器组）之间架起防火墙。',
    NETWORK_ISOLATION_DESC:
      '通过配置网络隔离控制同一集群内容器组之间的流量以及来自外部的流量，从而实现隔离应用并增强应用的安全性。',
    CREATE_NETWORK_POLICY_DESC:
      '通过配置网络策略控制同一集群内 Pod 之间的流量以及来自外部的流量，从而实现隔离应用并增强应用的安全性。',
    NETWORK_POLICY_Q: '如何更好地使用网络策略?',
    NETWORK_ISOLATION_Q: '如何更好地使用网络隔离?',
    NETWORK_POLICY_A:
      '我们根据实际使用场景整理了几种较为常见的应用场景，您可以查阅文档了解更多。',
    NETWORK_POLICY_Q1: 'CNI 插件实现网络策略需满足哪些必要条件？',
    NETWORK_ISOLATION_Q1: 'CNI 插件实现网络隔离需满足哪些必要条件？',
    NETWORK_POLICY_A1:
      'Kubernetes 所使用 CNI 必须支持 Kubernetes 原生<a href="https://kubernetes.io/zh/docs/concepts/services-networking/network-policies/" target="_blank">网络策略</a>，例如 Calico、Cilium、Kube-router、Romana 和 Weave Net。',
    NETWORK_POLICY_EMP_TITLE: '未开启网络隔离',
    NETWORK_POLICY_EMP_DESC:
      '开启项目网络隔离后，将禁止其他项目访问当前项目，但您可以按需放行项目、服务以及外部 IP 地址。',
    PROJECT_NETWORK_ISOLATION: '项目网络隔离',
    EXTERNAL_EGRESS_DESC: '当前项目中的容器组可以访问以下网段和端口。',
    EXTERNAL_INGRESS_DESC: '当前项目中的容器组可以被以下网段和端口访问。',
    INTERNAL_EGRESS_DESC: '当前项目中的容器组可以访问以下服务和项目的容器组。',
    INTERNAL_INGRESS_DESC: '当前项目中的容器组可以被以下服务和项目的容器组访问。',
    INTERNAL_ALLOWLIST: '内部白名单',
    INTERNAL_ALLOWLIST_DESC:
      '允许当前项目中的容器组与当前集群其他项目中的服务进行通信。',
    INTERNAL_ALLOWLIST_TIP: '将集群内部的项目和服务添加到白名单。',
    EXTERNAL_ALLOWLIST: '外部白名单',
    EXTERNAL_ALLOWLIST_DESC:
      '允许当前项目中的容器组与集群外部的特定网段和端口进行通信。',
    EXTERNAL_ALLOWLIST_TIP: '将集群外部的网段和端口添加到白名单。',
    EXTERNAL_TRAFFIC_DIRECTION_DESC:
      '出站表示从当前项目到集群外的方向。入站表示从集群外到当前项目的方向。',
    NETWORK_SEGMENT_DESC: '设置网段（支持 CIDR）。',
  
    CIDR_DESC: '将根据流量的方向',
    SELECT_RULE_DIRECTION_TIP: '请选择流量方向。',
    ENTER_VALID_SEGMENT_DESC: '请输入一个有效的网段。',
    ENTER_VALID_PORT_NUMBER_DESC: '请输入有效端口号。',
    EMPTY_RESOURCE_DESC: '请选择至少一个项目或服务。',
    ALLOWLIST_ENTRY: '白名单条目',
    ALLOWLIST_ENTRY_LOW: '白名单条目',
    MONITORING: '监控',
    'Monitoring Center': '监控中心',
    'Physical Resources': '物理资源',
    PHYSICAL_RESOURCES_MONITORING: '物理资源监控',
    SERVICE_COMPONENT_MONITORING: '服务组件监控',
    'Application Resources': '应用资源',
    APPLICATION_RESOURCE_PL: '应用资源',
    PHYSICAL_RESOURCE_PL: '物理资源',
  
    NODE_COUNT: '节点数量',
    CLUSTER_STATUS: '集群状态',
    'Cluster Monitors': '集群监控',
    'Cluster Resource Monitoring': '集群资源监控',
    ETCD_MONITORING: 'etcd 监控',
    'ETCD Service Status': 'etcd 服务状态',
    'ETCD Nodes': 'etcd 节点',
    SERVICE_STATUS: '服务状态',
    EXTERNAL_ETCD: '外部 etcd',
    API_SERVER_MONITORING: 'API Server 监控',
    SCHEDULER_MONITORING: '调度器监控',
    'Historical Monitoring': '历史监控',
    RESOURCE_USAGE_RANKING: '资源用量排行',
    'Usage Ranking': '用量排行',
    'Resources Usage': '资源用量',
    RESOURCE_USAGE: '资源用量',
    USAGE_RANKING: '用量排行',
    OUTBOUND_TRAFFIC: '出站流量',
    INBOUND_TRAFFIC: '入站流量',
    QUOTA: '配额',
    QUOTA_PL: '配额',
    QUOTA_VALUE: '配额：{value}',
    'Resources Usage Trend': '资源用量趋势',
    'Physical Resources Usage': '物理资源用量',
    APPLICATION_RESOURCES_USAGE: '应用资源用量',
    PHYSICAL_RESOURCES: '物理资源',
    APPLICATION_RESOURCE_USAGE: '应用资源用量',
    PROJECT_CHANGE_TREND: '项目变化趋势',
    PROJECT_COUNT: '项目数量',
    CLUSTER_RESOURCE_USAGE: '集群资源用量',
    CLUSTER_NODE_STATUS: '集群节点状态',
    COMPONENT_STATUS: '组件状态',
    PHYSICAL_RESOURCE_STATUS: '物理资源状态',
    'Disk Usage': '磁盘使用量',
    'Disk Capacity': '磁盘容量',
    INODE_USAGE: 'Inode 用量',
    RUNNING_PODS: '运行中的容器组数量',
    'Abnormal Pods': '异常容器组',
  
    CONTROLLER_MANAGER: '管理控制中心',
    KUBERNETES_SCHEDULER: 'Kubernetes 调度器',
    SCHEDULER: '调度器',
    Node: '节点',
  
    SELECT_TIME_RANGE: '选择时间范围',
    CUSTOM_TIME_RANGE: '自定义时间范围',
    SHOW_SELECTED_ONLY: '仅显示已选',
    VIEW_ALL_REPLICAS: '查看所有副本',
    'View All': '查看全部',
    VIEW_MORE: '查看更多',
  
    Interval: '间隔',
    Last: '最近',
    LAST_TIME_S: '最近 {num} 秒',
    LAST_TIME_M: '最近 {num} 分钟',
    LAST_TIME_H: '最近 {num} 小时',
    LAST_TIME_D: '最近 {num} 天',
    TIME_M: '{num} 分钟',
    TIME_H: '{num} 小时',
    TIME_D: '{num} 天',
    UTILIZATION: '使用率',
    RESOURCE_USAGE_TITLE: '资源用量',
    MONITORING_CLUSTER_DESC:
      '集群状态展示集群资源的概览和详情，您可以查看集群资源的监控数据和用量排行情况。',
    MONITORING_PHYSICAL_DESC: '监控集群物理资源的运行状态',
    MONITORING_APPLICATION_DESC:
      '应用资源提供应用资源用量的监控数据以及用量排行情况。',
    TIMERANGE_SELECTOR_MSG: '结束时间需晚于开始时间。',
    MONITORING_SELECT_LIMIT_MSG: '最多可以选择 10 个资源。',
  
    second: '秒',
    ms: '毫秒',
    times: '次',
    'times/s': '次/秒',
    RAFT_PROPOSAL: 'Raft 提议',
    PROPOSAL_COMMIT_RATE: '提议提交速率',
    PROPOSAL_APPLY_RATE: '提议应用速率',
    PROPOSAL_FAILURE_RATE: '提议失败速率',
    PROPOSAL_PENDING_TOTAL: '排队提议数',
    DB_SIZE: '库大小',
    CLIENT_TRAFFIC: '客户端流量',
    RECEIVED: '接收',
    SENT: '发送',
    GRPC_STREAM_MESSAGES: 'gRPC 流式消息',
    WAL_FSYNC: 'WAL 日志同步时间',
    DB_FSYNC: '库同步时间',
    REQUEST_LATENCY: '请求延迟',
    REQUEST_LATENCY_MS: '请求延迟（ms）',
    'Total Average': '总均值',
    'APIs Average': 'APIs 均值',
    REQUEST_PER_SECOND: '每秒请求数',
    REQUEST: '请求',
    REQUEST_COUNT: '请求数量',
    API_REQUESTS_PER_SECOND: '每秒 API 请求数',
    API_REQUEST_LATENCY: 'API 请求延迟',
    SCHEDULE_ATTEMPTS: '调度次数',
    SCHEDULING_RATE: '调度速率',
    SCHEDULING_LATENCY: '调度延迟',
  
    AVERAGE: '平均值',
    TOTAL_AVERAGE: '总均值',
    SUCCESS: '成功',
    NOT_SUCCESSFUL: '未成功',
    ERROR: '错误',
    FAILURE: '失败',
    ETCD_NODE_TITLE: 'ETCD节点',
    ETCD_LEADER_TITLE: '是否有 Leader',
    ETCD_CHANGES_TITLE: '1 小时内 Leader 变更次数',
    ETCD_STATUS: '服务 <span>状态</span>',
    ETCD_PROPOSAL: 'Raft <span>提议</span>',
    ETCD_DB_SIZE: '库 <span>大小</span>',
    ETCD_CLIENT_TRAFFIC: '客户端 <span>流量</span>',
    REQUEST_LATENCY_TCAP: '请求 <span>延迟</span>',
    REQUEST_RATE: '请求 <span>速率</span>',
    SCHEDULE_ATTEMPTS_TCAP: '调度 <span>次数</span>',
    SCHEDULING_RATE_TCAP: '调度 <span>速率</span>',
    PROPOSAL_COMMITTED: '提议提交速率',
    PROPOSAL_APPLIED: '提议应用速率',
    PROPOSAL_FAILED: '提议失败速率',
    PROPOSAL_PENDING: '排队提议数',
  
    EDIT_TEMPLATE: '编辑模板',
    SAVE_TEMPLATE: '保存模板',
  
    'No Refreshing': '不刷新',
  
    GRAPH_COLORS: '图表配色',
    SINGLE_GRAPH_TYPE: '最常见的图表类型',
    SINGLE_GRAPH_TYPE_NAME: '基础图',
    STACKED_GRAPH_TYPE: '堆叠图',
    STACKED_GRAPH_TYPE_DESC: '适用于各大类总量及分量之间的对比显示',
    CHART_TYPES: '图表类型',
    GRAPH_TYPES: '图例类型',
    ADD_MONITOR_ITEM: '添加监控项',
    ADD_MONITOR_ROW: '添加监控组',
    MONITOR_TYPE_NO_SUPPORT: '当前不支持该类型',
    TABLE_SETTINGS: '表格设置',
    PER_PAGE_LINES: '每页行数',
    CUSTOM_DISPLAY_STYLE: '设置显示格式',
    CUSTOM_DISPLAY_MODAL_DESC: '根据需要定制Table中的显示格式',
    DATA_TYPE: '数据类型',
    DECIMALS: '精确位',
    THRESHOLD_FILL: '阈值填充',
    THRESHOLD_FILL_DESC: '可以设置阈值，数值超出后可以自动更改样式提示',
    HIGHT_RULES: '高亮规则',
    TIME_FORMAT: '时间格式',
    MONITOR_METRIC: '监控指标',
    DEBUGB_DATA: '调试数据',
    LINE_CHART: '折线图',
    BAR_CHART: '柱状图',
    SINGLE_STATE_CHART: '即时文本',
    APPLICABLE_SCENE: '适用场景',
    BASE_LINE_CHART: '基础折线图',
    STACK_LINE_CHART: '堆叠面积图',
    BASE_BAR_CHART: '基础柱状图',
    STACK_BAR_CHART: '堆叠柱状图',
  
    LINE_CHART_DESC: '折线图主要用来展示数据相随着时间推移的趋势或变化。',
    BASE_LINE_CHART_DESC:
      '折线图主要用来展示数据相随着时间推移的趋势或变化。折线图非常适合用于展示一个连续的二维数据，如某网站访问人数或商品销量价格的波动。',
    STACK_LINE_CHART_DESC:
      '堆积面积图是一种特殊的面积图，可以用来比较在一个区间内的多个变量。如果有多个数据系列，并想分析每个类别的部分到整体的关系，并展现部分量对于总量的贡献时，使用堆积面积图是非常合适的选择。',
    BAR_CHART_DESC:
      '柱状图是最常见的图表类型，通过使用水平或垂直方向柱子的高度来显示不同类别的数值。',
    BASE_BAR_CHART_DESC:
      '基础柱状图的一个轴显示正在比较的类别，而另一个轴代表对应的刻度值。',
    STACK_BAR_CHART_DESC:
      '堆叠柱状图是柱状图的扩展，不同的是，柱状图的数据值为并行排列，堆叠柱图则是一个个叠加起来的。它可以展示每一个分类的总量，以及该分类包含的每个小分类的大小及占比，因此非常适合处理部分与整体的关系。',
    SELECT_CHART_TYPE: '选择图表类型',
    SELECT_CHART_TYPE_MODAL_DESC: '选择您要添加的自定义图表类型',
    EMPTY_CHART_PLACEHOLDER: '图表将显示在此区域',
    DISPLAY_POSITION: '图表布局位置',
    DISPLAY_FORMAT: '显示格式',
    FIELD_NAME: '字段名称',
    COLUMN_NAME: '列名称',
    METRIC_NAME: '图例名称',
    GRAPH_NAME: '图表名称',
    TABLE: '表格',
    VALUE_FOMATER: '数据取值',
    Y_AXIS: 'Y轴',
    'Custom Monitoring': '自定义监控',
    CustomMonitorDashboards: '自定义监控面板',
    CustomMonitorDashboard: '自定义监控面板',
    CUSTOM_MONITORING: '自定义监控',
    CUSTOM_MONITORING_DASHBOARD_DESC:
      '自定义监控提供应用监控模板，您可以根据需求自定义监控面板。',
    CUSTOMMONITORDASHBOARD_CREATE_DESC:
      '您可以根据自己的需求自定义应用监控面板。',
  
    'Default Color': '默认配色',
    'Cool Color': '冷色调',
    'Warm Color': '暖色调',
  
    // Cluster Status
    DISK_USAGE: '磁盘用量',
    DISK_USAGE_SCAP: '磁盘用量',
    POD_COUNT: '容器组数量',
    POD_COUNT_VALUE: '容器组数量：{value}',
    API_SERVER: 'API Server',
    AVERAGE_CPU_LOAD: 'CPU 平均负载',
    POD_USAGE: '容器组用量',
    DISK_THROUGHPUT: '磁盘吞吐',
    NETWORK_BANDWIDTH: '网络带宽',
    POD_STATUS: '容器组状态',
    NO_MONITORING_DATA: '未发现监控数据',
    NOT_ENABLED: '未开启',
    COMPLETED: '已完成',
    WARNING: '异常',
    REST_CREATE: 'CREATE',
    REST_DELETE: 'DELETE',
    REST_DELETECOLLECTION: 'DELETECOLLECTION',
    REST_GET: 'GET',
    REST_POST: 'POST',
    REST_PATCH: 'PATCH',
    REST_PUT: 'PUT',
    REST_UPDATE: 'UPDATE',
    REST_LIST: 'LIST',
    NODE_IP_ADDRESS_VALUE: '节点 IP 地址：{value}',
    NODE_IP_ADDRESS: '节点 IP 地址',
  
    // Application Resources
    WORKSPACES: '企业空间',
    ACCOUNTS: '帐户',
    PROJECT_PL: '项目',
    PROJECT_LOW: '项目',
    DEVOPS_PROJECT_TCAP: 'DevOps 项目',
    DEVOPS_PROJECT_PL: 'DevOps 项目',
    DEVOPS_PROJECT_TCAP_PL: 'DevOps 项目',
    DEVOPS_PROJECT_LOW: 'DevOps 项目',
    DEVOPS_PROJECT_LOW_PL: 'DevOps 项目',
    PROJECTS: '项目',
    DEVOPS_PROJECTS: 'DevOps 项目',
    SERVICES: '服务',
    ROUTES: '应用路由',
    LAST_TIME: '最近 {value}',
    TIME_RANGE_LAST: '时间范围：最近 {value}',
    TIME_RANGE_RANGE: '时间范围：{startTime} – {endTime}',
    COUNT: '数量',
  
    // Custom Monitoring
    CUSTOM_MONITOR_DASHBOARD: '自定义监控面板',
    CUSTOM_MONITOR_DASHBOARD_CREATE_DESC: '您可以根据需求自定义应用监控面板。',
    'Custom Monitoring Dashboards': '自定义监控',
    UPLOAD_FROM_LOCAL_STORAGE: '从本地上传',
    UPLOAD_FROM_URL: '通过 URL 上传',
    'Consumption Bill': '消费账单',
    Memory: '内存',
    EXPORT_BILL: '导出 CSV 文件格式的消费记录。',
    CONSUMPTION_HISTORY: '消费历史',
    BILLING_CYCLE: '对账周期',
    CONSUMER_TRENDS: '消费者趋势',
    CURRENT_RESOURCE_CONSUMPTION: '当前消费',
    Trend: '趋势图',
    AVERAGE_USAGE: '平均用量',
    TOTAL_CONSUMPTION: '总消费情况',
    'Total Consumption By Creation': '自创建以来共消费',
    Consumption: '消费',
    'Net Received': '网络流入',
    'Net Transmitted': '网络流出',
    VIEW: '查看',
    RESOURCE_CONSUMPTION_DESC: '选择一个类别以查看资源消费情况。',
    CLUSTER_CONSUMPTION: '集群资源消费情况',
  
    CLUSTER_CONSUMPTION_DESC: '查看集群资源的消费情况。',
    CLUSTER_RESOURCE_CONSUMPTION_DESC:
      '<strong>集群</strong>的 CPU、内存、存储卷等资源的消费情况',
    CLUSTER_NODE_CONSUMPTION_DESC:
      '集群<strong>节点</strong>的 CPU、内存、存储卷等资源的消费情况',
    CLUSTER_POD_CONSUMPTION_DESC:
      '节点中<strong>容器组</strong>的 CPU、内存等资源的消费情况',
    WORKSPACE_CONSUMPTION: '企业空间资源消费情况',
    WORKSPACE_CONSUMPTION_DESC: '查看企业空间的资源消费情况。',
    WORKSPACE_RESOURCE_CONSUMPTION_DESC:
      '<strong>企业空间</strong>的 CPU、内存、存储卷等资源的消费情况',
    WORKSPACE_PROJECT_CONSUMPTION_DESC:
      '企业空间中<strong>项目</strong>的 CPU、内存、存储卷等资源的消费情况',
    PROJECT_CONSUMPTION_DESC:
      '项目中的<strong>应用</strong>、<strong>服务</strong>、<strong>容器组</strong>的 CPU、内存、存储卷等资源的消费情况',
    APP_CONSUMPTION_DESC: '应用商店模板资源消费统计',
    APP_RESOURCE_CONSUMPTION_DESC:
      '应用商店模板资源消费统计支持对模板在 KubeSphere 平台中被部署的次数查询，支持以下查询',
    APP_WORKSPACE_CONSUMPTION_DESC:
      '应用模板在 <strong>企业空间</strong> 中的部署次数',
    APP_WORKSPACE_PROJECT_CONSUMPTION_DESC:
      '应用模板在企业空间下的某个 <strong>项目</strong> 中的部署次数',
    MAXIMUM_USAGE: '最大用量',
    MINIMUM_USAGE: '最小用量',
    'Meter CPU Usage': 'CPU 用量',
    'Meter Memory Usage': '内存 用量',
    'Meter Volume Usage': '存储卷 用量',
    'Meter Net Received Usage': '网络流入 用量',
    'Meter Net Transmitted Usage': '网络流出 用量',
    TOTAL_CONSUMPTION_Q: '什么是总消费情况？',
    TOTAL_CONSUMPTION_A:
      '总消费情况表示在当前对账周期中每个计费采样点的资源用量之和。',
    TIMERANGE_MORE_30DAY_MSG:
      '结束时间与开始时间的间隔大于 30 天时，采样间隔最小为 1 天。',
    TOTAL_COST: '总金额({unit})',
    '￥': '￥',
    $: '$',
    Price: '价格',
    PRICE_CONFIG_DESC: '尚未配置价格信息。',
    METER_RESOURCE_DESC: '1 小时内的资源消费情况',
    METERING_NOT_ENABLED_DESC:
      '当前模块尚未开启。<a href="{docUrl}/toolbox/metering-and-billing/enable-billing/">了解更多</a>',
  
    INVALID_METERING: '未开启消费统计',
    NO_METER_DATA: '未发现资源消费数据。',
  
    // Resource Consumption Statistics
    METER_CPU_USAGE: 'CPU 用量',
    METER_MEMORY_USAGE: '内存用量',
    METER_VOLUME_USAGE: '存储卷用量',
    METER_NET_RECEIVED_USAGE: '入站流量用量',
    METER_NET_TRANSMITTED_USAGE: '出站流量用量',
    NET_RECEIVED: '入站流量',
    NET_TRANSMITTED: '出站流量',
    COMPOSING_APP: '自制应用',
    CLUSTER_NODE_SCAP: '集群节点',
    POD_SCAP: '容器组',
    APP_TEMPLATE_SCAP: '基于模板的应用',
    COMPOSING_APP_SCAP: '自制应用',
    DEPLOYMENT_SCAP: '部署',
    STATEFULSET_SCAP: '有状态副本集',
    DAEMONSET_SCAP: '守护进程集',
    WORKSPACE_SCAP: '企业空间',
    CLUSTER_SCAP: '集群',
    PROJECT_SCAP: '项目',
    SERVICE_SCAP: '服务',
    HOST_CLUSTER_SCAP: '主集群',
    MEMBER_CLUSTER_SCAP: '成员集群',
    'Log In': '登录',
    'Please Log In': '欢迎登录',
    'Username or Email': '用户名或者邮箱',
    Captcha: '验证码',
    'User does not exist': '用户名不存在',
    INCORRECT_USERNAME_OR_PASSWORD: '用户名或密码错误。',
    'Unable to access the backend services': '无法访问后端服务',
    'Unable to access the api server': '无法访问 API 服务器',
  
    'Internal Server Error': '服务器内部错误',
    'Please input the correct captcha': '验证码错误',
  
    Reload: '刷新',
    'Reload Captcha': '刷新验证码',
  
    INTERNAL_SERVER_ERROR_TIP: '对不起，服务器开小差了',
    'Too many failed login attempts, please wait!':
      '登录失败次数过多，请稍后重试',
    LOG_IN_WITH_TITLE: '通过 {title} 登录',
  
    INPUT_USERNAME_OR_EMAIL_TIP: '请输入用户名或邮箱。',
    'Please input username or email': '请输入用户名或邮箱',
    PASSWORD_EMPTY_DESC: '请输入一个密码。',
    'Please input captch': '请输入验证码',
    'Please confirm your account info': '请确认您的帐户信息',
    'Please input username': '请输入用户名',
  
    'Please reset your password': '请重置您的密码',
  
    'Modify Later': '稍后修改',
  
    'Your password must meet the following requirements':
      '您的密码必须符合如下要求',
  
    CHANGE_PASSWORD_TIP: '由于您是第一次登录，出于安全考虑请重置您的密码',
  
    // Login
    LOG_IN: '登录',
    TIME_S: '{num}s',
    'Log Management': '日志管理',
    QUERYING_RULES: '查询规则',
    TOTAL_LOGS:
      '总共收录了 <span class={className}>{containers}</span> 个容器<br/> <span class={className}> {logs} </span> 条日志信息',
    LOG_DATE: 'YYYY 年 MM 月 DD 日 HH 时',
    EVENT_DATE: 'YYYY 年 MM 月 DD 日 0 时',
    TOPIC: '主题',
    Keyword: '关键字',
    CONTAINER_LOG_SOURCE: '容器日志来源',
    REFRESH_RATE_COLON: '刷新频率：',
    'Region Data': '元数据',
    'Refresh Rate': '刷新频率',
    'Back to previous': '返回上一级',
    'Log Start Time': '收录起始时间',
    'Current Statistics Start Time': '本次统计起始时间',
    CONTAINER_LOG_TRENDS_12H: '12 小时内容器日志变化趋势',
    'Search Logs by': '通过{field}查询日志',
    CONTAINER_LOG_KEYWORD_TIP: '输入关键词查找容器日志。',
    CONTAINER_LOG_PROJECT_TIP: '输入项目名称查找容器日志。',
    CONTAINER_LOG_WORKLOAD_TIP: '输入工作负载名称查找容器日志。',
    CONTAINER_LOG_CONTAINER_TIP: '输入容器名称查找容器日志。',
    CONTAINER_LOG_POD_TIP: '输入容器组名称查找容器日志。',
    RESOURCE_EVENT_TRENDS_12H: '12 小时内资源事件变化趋势',
    'Search Events by': '通过{field}查询事件',
    RESOURCE_EVENT_WORKSPACE_TIP: '输入企业空间名称查找资源事件。',
    RESOURCE_EVENT_PROJECT_TIP: '输入项目名称查找资源事件。',
    RESOURCE_EVENT_RESOURCE_TYPE_TIP: '输入资源类型查找资源事件。',
    RESOURCE_EVENT_RESOURCE_NAME_TIP: '输入资源名称查找资源事件。',
    RESOURCE_EVENT_REASON_TIP: '输入原因查找资源事件。',
    RESOURCE_EVENT_MESSAGE_TIP: '输入消息查找资源事件。',
    RESOURCE_EVENT_CATEGORY_TIP: '输入分类名称查找资源事件。',
    'Pod Event Query Tip': '输入容器组名称查找资源事件。',
    'Event statistics': '事件统计',
    TIME_TOPOLOGY: '时间拓扑图 ',
    'Display Content': '显示内容',
    SEARCH_RESULTS: '搜索结果',
    'Please enter a filter to search for logs.': '请输入条件过滤日志',
    'Log Query': '日志查询',
    CONTAINER_LOG_COUNT: '容器日志数量',
    AUDIT_LOG_COUNT: '审计日志数量',
    EXACT_QUERY: '精确查询',
    FUZZY_QUERY: '模糊查询',
    'Log Collections': '日志收集',
  
    'Search Auditing Logs by': '通过{field}查询审计',
    AUDIT_LOG_WORKSPACE_TIP: '输入企业空间名称查找审计日志。',
    AUDIT_LOG_PROJECT_TIP: '输入项目名称查找审计日志。',
    AUDIT_LOG_RESOURCE_NAME_TIP: '输入资源名称查找审计日志。',
    AUDIT_LOG_RESOURCE_TYPE_TIP: '输入资源类型查找审计日志。',
    AUDIT_LOG_VERB_TIP: '输入操作行为查找审计日志。',
    AUDIT_LOG_STATUS_CODE_TIP: '输入状态码查找审计日志。',
    AUDIT_LOG_OPERATOR_TIP: '输入操作者查找审计日志。',
    AUDIT_LOG_SOURCE_IP_ADDRESS_TIP: '输入源 IP 地址查找审计日志。',
    'Auditing log trends in the last 12 hours':
      '最近 12 小时操作审计总数变化趋势',
  
    TOTAL_AUDITING_TODAY:
      '今日总共收录了 <span class={className}> {auditing} </span> 条审计日志',
    NO_AUDIT_LOG_TODAY: '今日没有收录的审计日志',
  
    LOG_COLLECTION_DESC:
      '系统将收集每个容器的标准输出和标准错误输出日志，并将其发送到一个或多个目标服务。',
    ADD_LOG_RECEIVER: '添加日志接收器',
    EMPTY_LOG_COLLECTIONS:
      '未发现日志接收器。您可以添加日志接收器将日志发送到外部日志接收器中。',
    LOG_COLLECTION_TIPS: '每种类型的日志收集器只能添加一个。',
  
    Address: '地址',
    SERVICE_ADDRESS: '服务地址',
    ADD_SERVICE_ADDRESS: '添加',
    ENTER_SERVICE_ADDRESS: '请输入服务地址。',
  
    URL_SYNTAX_ERROR: 'URL 语法错误',
    ADDRESS_EMPTY_DESC: '请输入地址。',
    LOG_COLLECTION_ES_URL_TIPS:
      '默认使用系统部署的 Elasticsearch 服务，您也可以输入在集群内部或外部单独部署的 Elasticsearch 服务的地址。',
    LOG_COLLECTION_ES_INDEX_TIPS:
      '使用索引前缀进行快速搜索。系统以<索引前缀>-<年-月-日>格式自动生成索引前缀。',
    LOG_COLLECTION_FLUENTD_URL_TIPS: '输入接收日志的 Fluentd 服务的地址。',
  
    'Refresh Interval': '刷新频率',
    REFRESH_INTERVAL_VALUE: '刷新间隔：{value}s',
    'Recently Updated': '最近刷新',
    'Recently Configured Updated': '最近配置更新',
    Collecting: '收集中',
    CHANGE_STATUS: '更改状态',
    'Release Collection': '释放收集',
    'Delete Log Receiver': '删除日志接收器',
    'Log Receiver': '日志接收器',
    Activate: '激活',
    'Real-Time Data': '实时数据',
    INDEX_PREFIX: '索引前缀',
  
    RESOURCE_NAME_AND_TYPE: '资源类型与名称',
  
    TOOLBOX_SHIFT_TIPS: ' 👻 按下“shift+左键”可在浏览器新窗口中打开 kubectl。',
    HIDE_HELP_INFORMATION: '隐藏帮助信息',
    ES_DESC: 'Elasticsearch 是分布式、RESTful 风格的搜索和分析引擎。',
    KAFKA_DESC: 'Kafka 是流行的开源流处理平台。',
    FLUENTD_DESC: 'Fluentd 是提供统一日志处理层的开源数据收集器。',
    LOG_COLLECTION_ENABLE_TIPS: '新的状态需要 1 分钟左右生效。',
    'Passwords must be at least 6 characters long': '密码至少 6 个字节',
    CONTAINER_LOGS_NOT_SUPPORTED: '容器在当前不支持实时日志，请稍后重试。',
    TOTAL_LOGS_TODAY:
      '今日总共收录了 <span class={className}>{containers}</span> 个容器<br/> <span class={className}> {logs} </span> 条日志信息',
    LOG_EXPORT: '日志导出',
    START_REAL_TIME_LOG: '开启实时日志',
    STOP_REAL_TIME_LOG: '停止实时日志',
    EXPORT_LOGS: '导出日志',
    CUSTOM_MONITORING_DASHBOARD: '自定义监控面板',
    CUSTOM_MONITORING_DASHBOARD_PL: '自定义监控面板',
    CUSTOMMONITORDASHBOARD_PL: '自定义监控面板',
    CUSTOMMONITORDASHBOARD_LOW: '自定义监控面板',
    CUSTOM_MONITORING_DASHBOARD_EMPTY_DESC: '请创建一个自定义监控面板。',
    CREATE_CUSTOM_MONITORING_DASHBOARD: '创建自定义监控面板',
    MONITORING_TEMPLATE: '监控模板',
    CUSTOM_MONITORING_TEMPLATE_DESC:
      '选择默认模板、上传模板或自定义模板来生成自定义监控面板。',
    SERVICE_BUILT_INTERFACE: '服务已内置监控数据抓取接口',
    TOTAL_EVENTS_TODAY:
      '今日总共收录了 <span class={className}> {events} </span> 条资源事件',
    NO_RESOURCE_EVENTS_TODAY: '今日没有收录的资源事件',
    UPLOAD_GRAFANA_DASHBOARD: '上传 Grafana 监控面板',
    IMPORT_GRAFANA_JSON_FILE: '导入 Grafana JSON 文件',
    SUPPORT_JSON_FILE: '仅支持 JSON 格式的文件。',
    UPLOAD_GRAFANA_URL: '通过 URL 上传 Grafana 监控面板。',
    FILE_UPLOAD_ERROR: '只能上传一个文件。',
    UPLOAD_FILE_TIP: '请上传文件。',
    ENTER_GRAFANA_URL: '请输入 Grafana 监控面板 URL。',
    UPLOAD_FROM_LOCAL_TITLE: '选择或拖动文件',
    EVENT_NOT_ENABLED_DESC:
      '当前组件尚未开启。<a href="{docUrl}/pluggable-components/events/" target="_blank">了解更多</a>',
    AUDITING_NOT_ENABLED_DESC:
      '当前组件尚未开启。<a href="{docUrl}/pluggable-components/auditing-logs/" target="_blank">了解更多</a>',
    LOGGING_NOT_ENABLED_DESC:
      '当前组件尚未开启。<a href="{docUrl}/pluggable-components/logging/" target="_blank">了解更多</a>',
    'No cluster with event query enabled': '未发现开启事件查询的集群',
    'No cluster with auditing module enabled': '未发现开启审计模块的集群',
    'No cluster with logging module enabled': '未发现开启日志模块的集群',
    LOGGING_DISABLED: '日志组件未开启',
  
    LOGGING_LOG_COLLECTOR: '日志接收器',
    EVENTS_LOG_COLLECTOR: '事件日志接收器',
    AUDITING_LOG_COLLECTOR: '审计日志接收器',
  
    // Log Collection
    LOG_COLLECTION: '日志收集',
    LOG_RECEIVER_PL: '日志接收器',
    LOG_ADDRESS: '地址：',
    LOG_COLLECTING: '收集中',
    LOG_DISABLED: '关闭',
    INVALID_SERVICE_ADDRESS: '请输入正确的服务地址。',
    EXAMPLE: '例如：',
    PORT_NUMBER_EMPTY: '请输入端口号。',
    PARAMETER_REQUIRED: '此参数为必填项。',
    EVENT_PL: '事件',
    CREATION_TIME: '创建时间',
  
    // Log Collection > Details
    ADDRESS: '地址',
    CHANGE_STATUS_SCAP: '更改状态',
    EVENTS: '事件',
    SELECT_STATUS_TIP: '选择一个状态',
  
    // Container Log Search
    LOG_EXPORT_SCAP: '日志导出',
    SEARCH_BY_KEYWORD: '按关键词搜索',
    SEARCH_BY_PROJECT: '按项目搜索',
    SEARCH_BY_WORKLOAD: '按工作负载搜索',
    SEARCH_BY_POD: '按容器组搜索',
    SEARCH_BY_CONTAINER: '按容器搜索',
    START_TIME_COLON: '开始时间：',
    KEYWORD: '关键词',
    LOG: '日志',
    DISPLAY: '显示',
    HIDE: '隐藏',
    STOP_REAL_TIME_CONTAINER_LOG: '暂停实时容器日志',
    START_REAL_TIME_CONTAINER_LOG: '查看实时容器日志',
    REASON_COLON: '原因：',
    MESSAGE_COLON: '消息：',
  
    // Resource Event Search
    STOP_REAL_TIME_RESOURCE_EVENT: '暂停实时资源事件',
    START_REAL_TIME_RESOURCE_EVENT: '查看实时资源事件',
    RESOURCE_EVENT_COUNT: '资源事件数量',
    SEARCH_BY_MESSAGE: '按消息搜索',
    SEARCH_BY_WORKSPACE: '按企业空间搜索',
    SEARCH_BY_RESOURCE_TYPE: '按资源类型搜索',
    SEARCH_BY_RESOURCE_NAME: '按资源名称搜索',
    SEARCH_BY_REASON: '按原因搜索',
    SEARCH_BY_CATEGORY: '按分类搜索',
  
    // Audit Log Search
    VERB: '操作行为',
    STATUS_CODE: '状态码',
    SUBRESOURCE: '子资源',
    SEARCH_BY_VERB: '按操作行为搜索',
    SEARCH_BY_STATUS_CODE: '按状态码搜索',
    SEARCH_BY_OPERATOR: '按操作者搜索',
    SEARCH_BY_SOURCE_IP_ADDRESS: '按源 IP 地址搜索',
    KUBE_ASCENDING_ORDER: '升序',
    KUBE_DESCENDING_ORDER: '降序',
    KUBE_OPERATE: '排序',
    KUBE_FILTER: '过滤',
    KUBE_PLEASE_SELECT: '请选择',
    KUBE_NO_AVAILABLE_DATA: '未发现数据',
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
    KUBE_WEEK_ABBREVIATION: '周',
    KUBE_RANGE_SEPARATOR: ' 至 ',
    KUBE_SCROLL_TO_INCREMENT: '点击切换 12/24 小时时制',
    KUBE_CLICK_TO_TOGGLE: '滚动切换',
    KUBE_YEAR: '年',
    'Pod IP Pool': '容器组 IP 池',
    'Pod IP Pools': '容器组 IP 池',
  
    CREATE_POD_IP_POOL: '创建容器组 IP 池',
  
    NETWORK_SEGMENT: '网段',
    USED_IP_ADDRESSES: '已用 IP 地址',
    'Used IP': '已用 IP',
  
    MASK: '掩码',
    NETWORK: '网络',
    NETWORK_RESOURCE_PL: '网络资源',
  
    STARTING_IP_ADDRESS: '起始 IP 地址',
    ENDING_IP_ADDRESS: '结束 IP 地址',
    AVAILABLE_ADDRESSES: '可用地址数量',
  
    POD_IP_POOL: '容器组 IP 池',
    POD_IP_POOL_PL: '容器组 IP 池',
    POD_IP_POOL_LOW: '容器组 IP 池',
    POD_IP_POOL_EMPTY_DESC: '请创建一个容器组 IP 池。',
  
    NUMBER_OF_CREATION_TCAP: '创建数量',
    IP_POOL_CREATE_DESC: '即将创建的容器组 IP 池',
    'Set to be globally available': '设为全局可用',
  
    IP_ADDRESS_EMPTY_DESC: '请输入 IP 地址。',
    MASK_TIP: '请输入掩码。',
    ENTER_NETWORK_SEGMENT_TIP: '请输入网段。',
  
    IP_POOL_NUM_TIP: '请输入需要创建的容器组 IP 池数量。',
  
    POD_IP_POOL_DESC:
      '容器组 IP 池用于规划集群内容器组的网络地址空间，您可以按需创建容器组 IP 池。',
    IP_POOL_CREATE_COUNT_DESC: '最多可同时创建 10 个容器组 IP 池。',
    IPPOOL_USAGE_Q: '如何利用 IP 池规划容器组网络？',
    IPPOOL_USAGE_A:
      'IP 池用于规划 Pod 网络地址空间，每个 IP 池之间地址空间不能重叠。创建工作负载时，可选择特定的 IP 池，这样创建出的容器组将从该 IP 池中分配 IP。',
  
    IPPOOL_ASSIGN_WORKSPACE_DESC: '为 IP 池分配一个企业空间。',
    IPPOOL_ASSIGN_WORKSPACE_ALLOCATED_WARNING:
      'IP 池已被使用，无法分配给另一个具体的企业空间。',
    IPPOOL_ASSIGN_WORKSPACE_CHANGE_WARNING:
      'IP 池已被使用且已指定具体的企业空间，无法更改企业空间。',
  
    IPPOOL_WORKSPACE_EMPTY_TIP: '未发现企业空间使用此 IP 池',
    // IP Pod Pools List Page
    TOTAL_VALUE: '总计：{value}',
    ALL: '全部',
    NOT_ASSIGNED: '未分配',
    Route: '应用路由',
    ROUTE: '应用路由',
    ROUTE_PL: '应用路由',
    ROUTE_LOW: '应用路由',
    EDIT_ROUTING_RULES: '编辑路由规则',
    'Create Route': '创建应用路由',
    PATH_EMPTY_DESC: '请添加至少一个路径。',
    RULES: '规则',
    EDIT_RULES: '编辑规则',
    EDIT_ANNOTATION: '编辑注解',
    Rules: '规则',
    EDIT_RULES_TCAP: '编辑规则',
    EDIT_ANNOTATIONS: '编辑注解',
    ROUTING_RULES: '路由规则',
    GATEWAY_ADDRESS_TCAP: '网关地址',
    GATEWAY_ADDRESS_SCAP: '网关地址',
    DOMAIN_NAME_EMPTY_DESC: '请输入一个域名。',
    VISIT: '访问',
    PATH_SERVICE_TIP: '服务',
    ADD_PATH_TCAP: '添加路径',
    'Please select a service': '请选择一个服务',
    'Add Path': '添加 Path',
    ADD_ANNOTATION: '添加注解',
  
    SET_ROUTING_RULES: '设置路由规则',
  
    AUTO_GENERATE_TCAP: '自动生成',
    SPECIFY_DOMAIN_TCAP: '指定域名',
  
    UNABLE_TO_ACCESS: '无法访问服务',
  
    INVALID_DOMAIN_DESC: '域名格式错误。',
  
    GATEWAY_IP_ADDRESS: '网关 IP 地址',
    GATEWAY_ACCESS_MODE: '网关访问模式',
  
    MODE_TCAP: '模式',
    PATH_PL: '路径',
    PATH_SI: '路径',
    PATH_VALUE: '路径：{value}',
    DOMAIN_NAME_TCAP: '域名',
    DOMAIN_NAME_VALUE: '域名：{value}',
  
    INVALID_PATH_DESC: '路径不正确。',
    PATH_EXIST: 'PATH 重复，请重新输入。',
  
    ROUTE_DESC:
      '应用路由提供一种聚合服务的方式，您可以通过一个外部可访问的 IP 地址将集群的内部服务暴露给外部。',
    ROUTE_EMPTY_DESC: '请创建一个应用路由。',
    ROUTE_ANNOTATION_DESC:
      '可以通过给应用路由添加注解来设置应用路由的行为。详细的可供配置的注解列表，参见 <a href="https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/" target="_blank">Annotations</a>。',
  
    INGRESS_CONTROLLER_NODEPORT_DESC:
      '开启网关后，系统会自动分配 http 及 https 相应的端口号；应用路由可以通过反向代理的方式对服务进行访问。',
    INGRESS_CONTROLLER_LOADBALANCER_DESC:
      '如需使用 QingCloud LoadBalancer 作为服务网关，需要部署 QingCloud Cloud Controller Manager 插件。',
  
    GATEWAY_TRACING_TIP:
      '如果开启<b>链路追踪</b>后路由无法访问，请在路由中添加注解 <b>nginx.ingress.kubernetes.io/service-upstream: true</b>。',
  
    ADD_ROUTING_RULE_DESC: '添加一个路由规则将域名路径映射至服务。',
    ROUTING_RULE_EMPTY_DESC: '请添加至少一个路由规则。',
    UNABLE_TO_ACCESS_TIP:
      '* 如果域名由系统自动生成，请确保您的客户机可以访问 nip.io。<br/>* 如果域名由用户手动指定，请确保您的 DNS 服务器或客户机的本地 hosts 文件中已配置了域名解析策略。',
  
    NO_GATEWAY_DESC:
      '如需使用自动生成模式，请联系项目管理员在此项目的高级设置中设置网关访问模式。',
    UNABLE_CREATE_ROUTE_TIP: '当前项目中未发现可用的网关地址，无法创建应用路由。',
  
    RULE_SETTING_MODE_AUTO:
      '系统将自动按照 &lt服务名称&gt.&lt项目名称&gt.&lt网关地址&gt.nip.io 格式生成域名，该域名将由 nip.io 自动解析为网关 IP 地址。此模式仅支持 HTTP 协议。',
    RULE_SETTING_MODE_SPECIFY:
      '指定自定义域名并通过本地 hosts 文件或 DNS 服务器将域名解析为网关 IP 地址。',
  
    GATEWAY_SERVICE_MESH_STATUS_ON: '已开启',
    GATEWAY_SERVICE_MESH_STATUS_OFF: '未开启',
  
    PREREQUESTS_FOR_USE_ROUTE_Q: '使用应用路由的前提条件？',
    PREREQUESTS_FOR_USE_ROUTE_A:
      '使用应用路由需要由项目管理员对当前项目设置网关。',
  
    ACCESS_TYPES_OF_ROUTE_Q: '应用路由支持哪些的访问模式？',
    ACCESS_TYPES_OF_ROUTE_A:
      'KubeSphere 应用路由支持 NodePort 访问模式以及 LoadBalancer 访问模式。',
  
    // Route Detail Page
    ROUTE_PATH_VALUE: '路径：<strong>{value}</strong>',
    ROUTE_SERVICE_VALUE: '服务：<strong>{value}</strong>',
    ROUTE_PORT_VALUE: '端口：<strong>{value}</strong>',
    ACCESS_SERVICE: '访问服务',
    ADD_MEMBER_TIP_SI: '您确定添加成员到部门 <strong>{group}<strong> 吗？',
    ADD_MEMBER_TIP_PL: '您确定添加成员到部门 <strong>{group}<strong> 吗？',
    principal: '负责人',
    CREATE_DEPARTMENT: '创建部门',
    NO_DEPARTMENT_TIP: '没有可用部门，请在右侧创建部门。',
    PROJECT_ROLE: '项目角色',
    ADD_PROJECT: '添加项目',
    'project roles': '项目角色',
    DEVOPS_PROJECT_ROLE: 'DevOps 项目角色',
    DEVOPS_PROJECT_ROLE_SCAP: 'DevOps 项目角色',
    ADD_DEVOPS_PROJECT: '添加 DevOps 项目',
    SELECT_ROLE_TIP: '请选择角色。',
    DEPARTMENT: '部门',
    GROUP_WORKSPACE_ROLE_DESC: '企业空间角色将授予部门中的所有用户。',
  
    DELETE_PARENT_GROUP_TIP:
      '确定删除子部门 <strong>{group_name}</strong>？删除该部门的同时，其子部门也会被删除，且所有成员的授权也将被取消。',
    DELETE_GROUP_TIP:
      '确定删除子部门 <strong>{group_name}</strong>？删除该部门的同时，所有成员的授权也将被取消。',
      JOB_STATUS: '任务状态',
      RELEASE_JOBS: '任务状态',
      RELEASE_MODE_PL: '发布模式',
      RELEASE_MODE: '发布模式',
      GRAY_RELEASE_STRATEGY_SI: '灰度策略',
      TOTAL_GRAY_RELEASE_JOB: '共计 {num} 个灰度任务',
      TOTAL_GRAY_RELEASE_JOBS: '共计 {num} 个灰度任务',
      NO_GRAYSCALE_RELEASE_JOB_FOUND: '未发现灰度发布任务',
      NO_GRAYSCALE_RELEASE_TASK_FOUND_DESC: '请创建一个灰度发布任务。',
    
      BLUE_GREEN_DEPLOYMENT: '蓝绿部署',
      CREATE_BLUE_GREEN_DEPLOYMENT_JOB: '创建蓝绿部署任务',
      CREATE_CANARY_RELEASE_JOB: '创建金丝雀发布任务',
      CREATE_TRAFFIC_MIRRORING_JOB: '创建流量镜像任务',
      CANARY_RELEASE: '金丝雀发布',
      BLUE_GREEN_DEPLOYMENT_LOW: '蓝绿部署',
      CANARY_RELEASE_LOW: '金丝雀发布',
      TRAFFIC_MIRRORING_LOW: '流量镜像',
      'A/B Testing': 'A/B 测试',
      TRAFFIC_MIRRORING: '流量镜像',
    
      traffic: '流量',
    
      GRAY_RELEASE_JOB_NAME: '灰度任务名称',
      GRAYSCALE_RELEASE_COMPONENT_PL: '灰度组件',
      NEW_VERSION_SETTINGS: '新版本设置',
      NEW_VERSION_NUMBER: '新版本号',
      GRAYSCALE_RELEASE_COMPONENT: '灰度组件',
      GRAYSCALE_RELEASE_VERSION_TCAP: '灰度版本',
      GRAYSCALE_RELEASE_VERSION_NUMBER: '灰度版本号',
      VERSION_COMPARISON: '版本对比',
      STRATEGY_CONFIGURATIONS_TCAP: '策略配置',
    
      CREATE_JOB: '发布任务',
    
      RULE_DESCRIPTION: '规则描述',
      TRAFFIC_DISTRIBUTION: '流量分配',
    
      'Version Off': '版本下线',
      'Take Over': '接管所有流量',
    
      'Edit Grayscale Release Job': '编辑灰度任务',
    
      SELECT_GRAY_COMPONENT_TIP: '请选择一个服务。',
    
      EXACT_MATCH: '完全匹配',
      REGEX_MATCH: '正则匹配',
      PREFIX_MATCH: '前缀匹配',
    
      TRAFFIC_CONTROL: '流量控制',
      REQUEST_PARAMETERS_DESC: '将符合以下规则的流量引入灰度版本。',
    
      COOKIE_EXACT_MATCH: 'Cookie（完全匹配）',
      COOKIE_REGEX_MATCH: 'Cookie（正则匹配）',
      HEADER_EXACT_MATCH: 'Header（完全匹配）',
      HEADER_REGEX_MATCH: 'Header（正则匹配）',
      URL_PREFIX_MATCH: 'URL（前缀匹配）',
      URL_EXACT_MATCH: 'URL（正则匹配）',
      'Operating System': '操作系统',
      HEADER: 'Header',
      'Mirrored traffic is only receiving traffic, no service':
        '镜像流量只负责接收流量，不提供服务',
      'The current version is not online, you can let this version take over all traffic and bring it online.':
        '当前版本未上线，您可以让该版本接管所有流量，使该版本上线',
      MIRRORED_TRAFFIC: '镜像流量',
    
      'version number is invalid': '版本号不可用。',
    
      'Not online': '未上线',
    
      DELETE_JOB: '删除任务',
    
      JOB_OFFLINE_SUCCESSFULLY: '任务下线成功。',
    
      REAL_TIME_TRAFFIC_DIST_TCAP: '实时流量分布',
      TRAFFIC_MIRRORING_TRAFFIC_DISTRI_DESC: '将流量的副本发送给新版本进行测试。',
      BLUE_GREEN_TRAFFIC_DISTRI_DESC: '新版本或旧版本接收全部流量。',
      ALLOCATE_TRAFFIC_DESC:
        '拖动滑块设置发送给新版本的流量比例和发送给旧版本的流量比例。',
    
      SERVICE_VERSION_RECEIVE_ALL_TRAFFIC: '版本 <b>{version}</b> 已接管所有流量。',
    
      TRAFFIC_MONITORING: '流量监控',
      TRAFFIC: '流量',
      SUCCESSFUL_REQUEST_RATE: '请求成功率',
    
      TRAFFIC_IN_LAST_FIVE_MINUTES: '最近五分钟的流量。',
    
      UNFINISHED_GRAY_JOB: '灰度发布进行中',
      UNSUPPORTED_WORKLOAD_TYPE: '不支持该工作负载类型',
      NO_WORKLOAD_FOUND_TIP: '未找到工作负载',
    
      CREATE_GRAYSCALE_RELEASE_JOB: '创建灰度发布任务',
    
      REQUEST_PARAMETERS: '请求参数',
    
      CLIENT_OS: '客户端操作系统',
      OS: '操作系统',
    
      NEW_VERSION_NUMBER_EMPTY_DESC: '请输入新版本号。',
    
      RESTORE: '恢复',
    
      BLUE_GREEN_STRATEGY_DESC: '选择一个版本接管所有业务流量。',
      SELECT_VERSION: '选择版本',
      TAKE_OFFLINE: '下线',
      TAKE_OVER: '接管',
      TAKE_ONLINE: '上线',
      SPECIFY_TRAFFIC_DISTRIBUTION: '指定流量分配',
      SPECIFY_REQUEST_PARAMETERS: '指定请求参数',
    
      'Deploy sample application': '部署示例应用',
      DEPLOY_SAMPLE_APP: '部署示例应用',
      POLICY_REQUEST_CONTENT_TIP:
        '指定请求参数功能仅支持 HTTP、HTTP2 和 gRPC 请求。',
    
      NO_SERVICE_MESH_TIP: '该应用未开启应用治理，无法使用灰度发布功能。',
    
      BLUE_GREEN_DEPLOYMENT_DESC:
        '将业务流量发送给新版本进行测试。如果新版本运行不正常，可立即将业务流量切换给旧版本。',
      CANARY_RELEASE_DESC:
        '将业务流量同时分配给新版本和旧版本，在测试新版本的同时保证业务连续性。',
      AB_TESTING_DESC:
        '当产品已经相对稳定，同时又有新的业务需求或者产品形态，在保证业务的稳定运行前提下，获取产品更新或者优化是否达到合理的预期。',
      TRAFFIC_MIRRORING_DESC:
        '将业务流量的副本发送给新版本进行测试，而不实际暴露新版本。',
      GRAY_RELEASE_VERSION_DESC: '将新版本引入已有的应用服务网格中',
      NEW_VERSION_NUMBER_INVALID_DESC:
        '新版本号无效。新版本号只能包含小写字母和数字, 最长 16 个字符。',
      NEW_VERSION_NUMBER_DESC: '新版本号只能包含小写字母和数字, 最长 16 个字符。',
      POLICY_CONFIG_DESC:
        '基于流量比例发布：根据流量比例配置规则，将从原版本中切分指定比例的流量到灰度版本。',
    
      MIRROR_POLICY_DESC:
        '流量镜像将生产环境的流量复制到灰度版本中，在新版本上线到真实环境之前使用实时用户流量对它进行测试。<br/>因此，流量镜像可以降低直接在生产环境进行变更所带来的风险。',
    
      DELETE_GRAYSCALE_RELEASE_JOB_DESC:
        '删除灰度发布任务前，请选择一个版本接管所有流量。',
      NEW_VERSION_TAKEOVER_DESC:
        '新版本 <b>{newVersion}</b> 正在接收所有流量。如果您删除当前灰度发布任务，旧版本 <b>{oldVersion}</b> 也将被删除。',
      OLD_VERSION_TAKEOVER_DESC:
        '旧版本 <b>{oldVersion}</b> 已接管所有流量。如果您删除当前灰度发布任务，新版本 <b>{newVersion}</b> 也将被删除。',
      GRAYSCALE_RELEASE_DESC:
        '灰度发布是在生产环境进行应用迭代的一种重要方式。您可以选择不同的发布方法，在应用升级至新版本的过程中实现平滑过渡。',
      SPECIFY_REQUEST_PARAMETERS_DESC: '满足以下条件的请求将被发送给新版本。',
    
      ADJUST_TRAFFIC_DISTRIBUTION_DESC:
        '您确定将 {ratioNew}% 的流量发送给新版本 <b>{newVersion}</b> 以及 {ratioOld}% 的流量发送给旧版本 <b>{oldVersion}</b> 吗？',
      CANARY_BY_TRAFFIC_DESC:
        '{ratio}% 前往服务 <b>{component}</b> 的流量将被发送给新版本 <b>{newVersion}</b>。',
    
      DEPLOY_APP_CONFIRM: '确认部署示例应用?',
    
      DEPLOY_APP_TIP: '您即将部署示例应用 {name}',
    
      DEPLOY_SAMPLE_NO_INTERNET_ACCESS_TIP:
        '当前项目中未发现已开启应用治理的网关，因此您无法部署示例应用。请联系您的项目管理员在【高级设置】中设置外网访问方式',
    
      PREREQUEST_FOR_USE_GRAYRELEASE_Q: '使用灰度发布功能有哪些前提条件？',
      PREREQUEST_FOR_USE_GRAYRELEASE_A:
        '使用灰度发布功能前，您需要创建自制应用并且为自制应用开启应用治理功能。',
    
      // Grayscale release detail page
      GRAY_COMPONENT_DESC: '测试中的新版本和旧版本的相关信息。',
      TRAFFIC_LOW: '流量',
      VERSION_TRAFFIC_PERCENT: '{version} 流量 {percent}%',
    
      // Grayscale release components tab
      GRAY_APP_NAME: '应用：{name}',
      GRAY_WORKLOAD_TYPE: '负载类型：',
    
      // Grayscale release version tab
      NEW_VERSION_NUMBER_EXIST_DESC: '工作负载 {name} 已经存在，请输入其他版本号。',
      INIT_CONTAINER: '初始化容器',
      INIT_CONTAINER_VALUE: '初始化容器：{value}',
      CONTAINER_VALUE: '容器：{value}',
      GRAYSCALE_IMAGE: '镜像：{image}',
    
      // Grayscale strategy configurations tab
      GRAYSCALE_VERSION: '版本：{version}',
      GRAYSCALE_REPLICA_SI: '副本数量：{count}',
      GRAYSCALE_REPLICA_PL: '副本数量：{count}',
    
      // Canary Strategy Tab
      COOKIE: 'Cookie',
    
      // Grayscale Release Job List
      GRAYSCALE_JOB_STRATEGY: '灰度策略',
      GRAYSCALE_JOB_COMPONENT: '灰度组件',
      GATEWAY_SETTINGS: '网关设置',
      DISABLE_GATEWAY: '关闭网关',
      DISABLE_GATEWAY_TIP: '您确定关闭网关吗？',
      DISABLE_SUCCESSFUL: '关闭成功。',
      CLUSTER_GATEWAY_DESC:
        '对集群中的外网访问网关以及服务治理等配置进行设置和管理。',
      PROJECT_GATEWAY_DESC:
        '对项目中的外网访问网关以及服务治理等配置进行设置和管理。',
      CLUSTER_GATEWAY: '集群网关',
      PROJECT_GATEWAY: '项目网关',
      CLUSTER_GATEWAY_LOW: '集群网关',
      PROJECT_GATEWAY_PL: '项目网关',
      PROJECT_GATEWAY_LOW: '项目网关',
      CLUSTER_ENABLE_GATEWAY_DESC: '请开启集群网关。',
      PROJECT_ENABLE_GATEWAY_DESC: '请开启项目网关。',
      CLUSTER_GATEWAY_NOT_ENABLED: '集群网关未开启',
      PROJECT_GATEWAY_NOT_ENABLED: '项目网关未开启',
      'Gateway Not Set': '网关未设置',
      'Set Gateway': '设置网关',
      EDIT_GATEWAY: '编辑网关',
      'Update Gateway': '更新网关',
      CONFIGURATION_OPTIONS: '配置选项',
      GATEWAY_LOW: '网关',
      'Gateway Config': '网关配置',
      GATEWAY_LOGS: '网关日志',
      'Add Gateway Config': '添加网关配置',
      LOAD_BALANCER_PROVIDER: '负载均衡器提供商',
      LOAD_BALANCER_PROVIDER_SCAP: '负载均衡器提供商',
      LOAD_BALANCER_SCAP: '负载均衡器',
      LOAD_BALANCERS_SCAP: '负载均衡器',
      USE_DEFAULT_ANNOTATIONS: '使用默认注解',
      GATEWAY_IP: '访问地址',
      UPDATE_GATEWAY_DESC: '当前网关可更新。',
      DISK_LOG_COLLECTION_DESC:
        '日志收集功能允许系统收集保存在存储卷上的容器日志，并将日志发送到标准输出。',
      UPDATED_GATEWAY_DESC: '请在业务低峰期操作，升级过程可能会造成业务短暂中断。',
      UPDATED_GATEWAY_TITLE: '升级网关确认?',
      CLUSTER_GATEWAY_GUIDE_DESC:
        '如果同时存在集群网关和项目网关，项目网关关闭后无法再次开启。建议仅使用集群网关或仅使用项目网关。',
      'Request Count': '请求量',
      CONNECTION_COUNT: '连接数量',
      FAILED_REQUEST_COUNT: '失败请求数量',
      AVERAGE_LATENCY: '平均延迟',
      P_FIFTY_LATENCY: 'P50 延迟',
      P_NINETY_FIVE_LATENCY: 'P95 延迟',
      P_NINETY_NINE_LATENCY: 'P99 延迟',
      FOUR_XX_REQUEST_COUNT: '4XX 请求数量',
      FIVE_XX_REQUEST_COUNT: '5XX 请求数量',
      TOTAL_REQUESTS: '总请求数量',
      SUCCESSFUL_REQUESTS: '成功请求',
      GATEWAYS_REPLICA_DESC:
        '部署（Deployment）用来描述期望应用达到的目标状态，主要用来描述无状态应用，副本的数量和状态由其背后的控制器来维护，确保状态与定义的期望状态一致。您可以增加副本数量来满足更高负载；回滚部署的版本来消除程序的错误修改；创建自动伸缩器来弹性应对不同场景下的负载。',
      PROJECT_GATEWAY_EMPTY_DESC:
        '集群管理页面不支持项目网关的设置，如需设置需要转到对应项目下进行设置。',
        DEVOPS_NAME: 'DevOps 项目名称',
        DEVOPS_PROJECT: 'DevOps 项目',
        DEVOPS_PROJECT_SCAP: 'DevOps 项目',
        DEVOPS_PROJECT_MEMBER_EMPTY_DESC:
          '请邀请当前企业空间的成员到当前 DevOps 项目。',
        'DevOps Role': '成员角色',
        'DevOps Roles': '成员角色',
        'DevOps Member': '项目成员',
        'DevOps Members': '项目成员',
        DEVOPS_PROJECT_CREDENTIAL_PL: 'DevOps 项目凭证',
        DEVOPS_CREDENTIAL: ' DevOps 凭证',
        DEVOPS_CREDENTIAL_PL: 'DevOps 凭证',
        CREDENTIAL_EMPTY_DESC: '请创建一个凭证。',
        PIPELINE_CREDENTIAL_EMPTY_TIP: '请选择一个凭证。',
        DEVOPS_CREDENTIAL_LOW: 'DevOps 凭证',
        'DevOps Basic Info': '基本信息',
        DEVOPS_PROJECT_MANAGEMENT: '项目管理',
        DEVOPS_PROJECT_SETTINGS: 'DevOps 项目设置',
        MANAGE_DEVOPS_PROJECT: '管理 DevOps 项目',
        DEVOPS_PROJECT_MEMBER_PL: 'DevOps 项目成员',
        DEVOPS_PROJECT_MEMBER_SCAP: 'DevOps 项目成员',
        DEVOPS_PROJECT_MEMBER_PL_SCAP: 'DevOps 项目成员',
        DEVOPS_PROJECT_ROLE_PL: 'DevOps 项目角色',
        DEVOPS_PROJECT_ROLE_PL_SCAP: 'DevOps 项目角色',
      
        MANAGER: '管理员',
        Administrator: '管理员',
        'DevOps Project Manager': 'DevOps 项目管理员',
        CREATE_DEVOPS_PROJECT: '创建 DevOps 项目',
        DELETE_MULTIPLE_DEVOPS_PROJECTS: '批量删除 DevOps 项目',
        DELETE_DEVOPS_PROJECT: '删除 DevOps 项目',
        DELETE_DEVOPS_PROJECT_TIP:
          '请输入 DevOps 项目名称 <strong>{resource}</strong> 以确认您了解此操作的风险。',
        DELETE_DEVOPS_PROJECT_TIP_PL:
          '请输入 DevOps 项目名称 <strong>{resource}</strong> 以确认您了解此操作的风险。',
      
        DEVOPS_BASEINFO_DESC: '请输入 DevOps 项目的基本信息',
      
        DEVOPS_DESCRIPTION:
          'DevOps 项目是一个独立的命名空间，其中定义了一组流水线。用户可以按照自己的方式对流水线进行分组（例如：项目类型、组织类型）。',
        DEVOPS_PROJECT_CREATE_DESC:
          'DevOps 是一个独立的命名空间，其中定义了一组的流水线；用户可以按照自己的方式对流水线进行分组 (例如：项目类型、组织类型)。',
        DEVOPS_PROJECT_EMPTY_DESC: '请创建一个 DevOps 项目。',
        PIPELINE_EMPTY_DESC: '请创建一个流水线。',
        DEVOPS_ADMIN_DESC: '选择一个项目成员作为项目管理员。',
      
        NO_RELATE_DEVOPS_TITLE: '未发现与您相关联的 DevOps 项目',
        NO_RELATE_DEVOPS_DESC:
          '您可以创建或者联系项目管理员将您邀请到 DevOps 项目中开始您的工作',
      
        DEVOPS_PROJECT_CREDENTIALS_DESC:
          '凭证是包含了一些敏感数据的对象，如用户名密码、SSH 密钥和令牌等，用于在流水线运行时, 为拉取代码、推送或拉取镜像、SSH 执行脚本等过程提供认证。',
        DEVOPS_CREDENTIALS_DESC:
          '凭证是包含了一些敏感数据的对象，如用户名密码，SSH 密钥和 Token 等, 用于在 Pipeline 运行时, 为拉取代码、push/pull 镜像、SSH 执行脚本等过程提供认证',
      
        DEVOPS_PROJECT_ROLES_DESC:
          '成员角色定义了在当前 DevOps 项目下用户所拥有的权限。',
      
        DEVOPS_PROJECT_MEM_DESC: '对项目内的成员进行管理及角色分配。',
        DEVOPS_PROJECT_ROLE_EMPTY_DESC: '请创建一个 DevOps 项目角色。',
        DELETE_DEVOPS_TIP:
          '请输入 DevOps 项目名称 <strong>{resource}</strong> 以确认您了解此操作的风险。',
      
        DEVOPS_TIP_GITOPS_Q: '如何落地 DevOps？',
        DEVOPS_TIP_GITOPS_A:
          '创建关联代码仓库的流水线，并积极使用部署 Kubernetes 部署步骤，就可以实现 DevOps 了。',
      
        DEVOPS_TIP_TYPE_Q: '流水线 (Pipeline) 支持哪些代码仓库类？',
        DEVOPS_TIP_TYPE_A:
          '流水线支持 Git、GitHub、Gitlab、SVN、以及 Bitbucket 代码仓库.',
      
        NO_DEVOPS_INSTALL: '未安装 DevOps',
      
        // Credentials Creation Page
        CONTENT: '内容',
        INVALID_ID_TIP:
          'ID 只能包含小写字母、数字和连字符（-），必须以小写字母或数字开头和结尾，最长 63 个字符。',
      
        // CRDs > Details
        PROJECT_DEVOPS_PROJECT: '项目/DevOps 项目',
      
        KUBERNETES_DEPLOY_DEPRECATED_TIP:
          '该步骤会在后续版本中弃用，建议考虑其他替代方案。',
          DISK: '磁盘',
          Dashboard: '首页',
          dashboard: '首页',
          LAST_LOGIN: '最近登录',
          'involved project': '参与项目',
          'create project': '创建项目',
          'Project Top3': '项目 Top3',
          'KubeSphere Running Status': 'KubeSphere 运行状态',
          quota: '配额',
          Utilization: '利用率',
          'Memory Usage': '内存使用量',
          'Memory Utilization': '内存利用率',
          'CPU Usage': 'CPU 使用量',
          'CPU Utilization': 'CPU 利用率',
          'CPU Load Average': 'CPU 平均负载',
          'Replica Availability': '副本可用率',
          'Disk Utilization': '磁盘利用率',
          'Node Status': '主机状态',
          'View All Nodes': '查看全部主机',
          'Disk Throughput': '磁盘吞吐',
          'Network Bandwidth': '网络带宽',
          'Outbound Traffic': '出站流量',
          'Inbound Traffic': '入站流量',
          'Monitoring Data': '监控数据',
          'Log Data': '日志数据',
        
          'Super administrator': '超级管理员',
          'Regular user': '普通用户',
          'Platform Usage Status': '平台使用情况',
          'Cluster Status': '集群状况',
          TOP_5_FOR_RESOURCE_USAGE: '资源用量 Top 5',
        
          DEPLOYMENTS: '部署',
          NUMBER_OF_DEPLOYMENTS: '部署数量',
          STATEFULSETS: '有状态副本集',
          NUMBER_OF_STATEFULSETS: '有状态副本集数量',
          DAEMONSETS: '守护进程集',
          NUMBER_OF_DAEMONSETS: '守护进程集数量',
          Jobs: '任务',
          CronJobs: '定时任务',
          Services: '服务',
          Routes: '应用路由',
          Volumes: '存储卷',
          'Storage Classes': '存储类型',
          APP_REPO: '应用仓库',
          Users: '用户',
          'App Repositories': '应用仓库',
          USER_PL: '用户',
        
          DASHBOARD_TITLE: '您好 {username}',
          DASHBOARD_BANNER_TITLE: '平台运行概览',
          DASHBOARD_BANNER_DESC: '集合了当前平台运行中资源和用量的统计信息',
          DASHBOARD_DESC: 'Dashboard 提供了当前集群下各种资源的使用情况。',
          NODE_UNIT: '台',
          USAGE_VALUE: '使用量',
          USAGE_RATE: '使用率',
          NO_PROJECT: '未发现可用项目',
          NO_POD_MONITOR_DATA: '未发现容器组监控数据',
          RESOURCE_WARNING_TIPS: '异常{tipName}：{warnNum}',
        
          USER_DASHBOARD_EMPTY_TITLE: '您不属于任何企业空间',
          USER_DASHBOARD_EMPTY_DESC: '请联系企业空间管理员邀请您加入企业空间中。',
          'Custom Resource Definition': '定制资源定义',
          'Custom Resource Definitions': '定制资源定义',
          CRD: 'CRD',
          CRD_PL: 'CRD',
          CRD_LOW: 'CRD',
          CUSTOM_RESOURCE: '自定义资源',
          CUSTOM_RESOURCE_LOW: '自定义资源',
          CUSTOM_RESOURCE_PL: '自定义资源',
          CRD_EMPTY_DESC: '请创建一个 CRD。',
          CUSTOM_RESOURCE_DEFINITION_LOW: '定制资源定义',
        
          CRD_DESC:
            '定制资源定义（CRD）是一种 Kubernetes 实现自定义资源类型的扩展方式，您可以像操作内置资源对象一样操作 CRD 对象。',
          CUSTOM_RESOURCE_DEFINITION_CREATE_DESC:
            '定制资源定义（CRD）是一种 Kubernetes 实现自定义资源类型的扩展方式，您可以像操作内置资源对象一样操作 CRD 对象。',
        
          // CRD List Page
          KIND_TCAP: '类别',
          SCOPE_TCAP: '作用域',
          CRDS: '定制资源定义',
          configmaps: '配置字典',
          ConfigMaps: '配置字典',
          ConfigMap: '配置字典',
          FIELDS: '字段',
          CONFIGMAP_DESC:
            '配置字典（ConfigMap）常用于存储工作负载所需的配置信息，许多应用程序会从配置文件、命令行参数或环境变量中读取配置信息。',
          CONFIGMAP_EMPTY_DESC: '请创建一个配置字典。',
          EDIT_CONFIGMAP: '编辑配置字典',
          CONFIG_FIELD_DESC: '此配置项映射条目的唯一 key 值。',
          ENTER_CONFIG_VALUE_DESC:
            '配置项用于存储通用的配置变量，使用户可以将分布式系统中用于不同模块的环境变量统一到一个对象中进行管理。',
          'Config Value': '配置项',
          'Modify Config': '修改配置',
          'The unique key value of this configuration map entry':
            '此配置项映射条目的唯一 key 值',
          'Enter the value of the configuration map entry or use the contents of the file':
            '输入配置项映射条目的值或使用文件的内容',
        
          CREATE_CONFIG: '创建配置字典',
          RUNNING_STATUS: '运行状态',
          'All Components': '全部服务组件',
          components: '服务组件',
          Components: '服务组件',
          'Installed Components': '已安装组件',
          'Not Installed Components': '未安装组件',
          INSTANCE_COUNT: '实例数量',
        
          SERVICE_DETAILS: '服务详情',
        
          SERVICE_COMPONENTS_DESC:
            '系统组件是 KubeSphere 系统中提供各种功能的软件组件，您可以在此页面查看系统组件的运行状态。',
        
          KS_ACCOUNT_DESC: '提供用户、权限管理相关的 API',
          KS_APIGATEWAY_DESC: '负责处理服务请求和处理 API 调用过程中的所有任务',
          KS_APISERVER_DESC:
            '提供用于集群管理的 API 接口。此组件同时也用于集群内部模块通信和集群安全控制。',
          KS_CONSOLE_DESC: '提供 KubeSphere 的控制台服务。',
          OPENLDAP_DESC: '集中存储和管理用户的帐户信息。',
          REDIS_DESC: '开源内存数据结构化存储组件，用作数据库、缓存和消息中介。',
        
          COREDNS_DESC: '为 Kubernetes 集群提供服务发现的功能',
          KUBE_CONTROLLER_MANAGER_DESC:
            '由一系列的控制器组成，处理集群中常规任务的后台线程',
          KUBE_SCHEDULER_DESC: 'Kubernetes 的调度器，用于将容器组调度到合适的节点。',
          METRICS_SERVER_DESC:
            'Kubernetes 的监控组件，用于从每个节点的 kubelet 采集指标信息。',
          TILLER_DEPLOY_DESC: 'Helm 的服务端，负责管理发布 release',
        
          OPENPITRIX_API_GATEWAY_DESC:
            '负责处理平台的服务请求和处理 API 调用过程中的所有任务',
          OPENPITRIX_APP_MANAGER_DESC: '提供 OpenPitrix 的应用生命周期管理',
          OPENPITRIX_CATEGORY_MANAGER_DESC: '提供 OpenPitrix 中的应用分类管理',
          OPENPITRIX_CLUSTER_MANAGER_DESC: '提供 OpenPitrix 中的应用实例生命周期管理',
          OPENPITRIX_DB_DESC: 'OpenPitrix 数据库',
          OPENPITRIX_ETCD_DESC: '高可用键值存储系统，用于共享配置、服务发现和全局锁',
          OPENPITRIX_IAM_SERVICE_DESC:
            '控制哪些用户可使用您的资源（身份验证）以及可使用的资源和采用的方式（授权）',
          OPENPITRIX_JOB_MANAGER_DESC: '具体执行 OpenPitrix 应用实例生命周期 Action',
          OPENPITRIX_MINIO_DESC: '对象存储服务，用于存储非结构化数据',
          OPENPITRIX_REPO_INDEXER_DESC: '提供 OpenPitrix 的应用仓库索引服务',
          OPENPITRIX_REPO_MANAGER_DESC: '提供 OpenPitrix 的应用仓库管理',
          OPENPITRIX_RUNTIME_MANAGER_DESC: '提供平台中的云运行时环境管理',
          OPENPITRIX_TASK_MANAGER_DESC:
            '具体执行 OpenPitrix 应用实例生命周期 Action 子任务',
        
          ISTIO_CITADEL_DESC:
            '通过内置身份和凭证管理赋能强大的服务间和最终用户身份验证',
          ISTIO_GALLEY_DESC:
            '代表其他的 Istio 控制平面组件，用来验证用户编写的 Istio API 配置',
          ISTIO_INGRESSGATEWAY_DESC: '提供外网访问的网关。',
          ISTIO_PILOT_DESC: '为 Envoy sidecar 提供服务发现功能',
          ISTIO_POLICY_DESC:
            '用于向 Envoy 提供准入策略控制，黑白名单控制，速率限制等相关策略',
          ISTIO_SIDECAR_INJECTOR_DESC: '为配置注入的 Pod 自动注入 sidecar',
          ISTIO_TELEMETRY_DESC: '为 Envoy 提供了数据上报和日志搜集服务',
          JAEGER_COLLECTOR_DESC:
            '收集 Sidecar 的数据。Istio 中的 Sidecar 为 jaeger-agent。',
          JAEGER_COLLECTOR_HEADLESS_DESC:
            '收集 Sidecar 的数据。Istio 中的 Sidecar 为 jaeger-agent。',
          JAEGER_OPERATOR_DESC:
            '负责创建 Jaeger 服务，并在配置更新时自动应用到 Jaeger 服务',
          JAEGER_QUERY_DESC:
            '接收查询请求，然后从后端存储系统中检索 Trace 并通过 Web UI 展示。',
        
          KUBE_STATE_METRICS_DESC:
            '监听 Kubernetes API 服务器以获取集群中的节点、工作负载、容器组等 API 对象的状态，并生成相关监控数据供 Prometheus 抓取。',
          NODE_EXPORTER_DESC: '收集集群各个节点的监控数据，供 Prometheus 抓取。',
          PROMETHEUS_K8S_DESC: '提供节点、工作负载、 API 对象的相关监控数据。',
          PROMETHEUS_K8S_SYSTEM_DESC:
            '提供 etcd, coredns, kube-apiserver, kube-scheduler, kube-controller-manager 等 Kubernetes 组件的监控数据',
          PROMETHEUS_OPERATED_DESC:
            '所有 Prometheus 实例对应的服务，供 Prometheus Operator 内部使用。',
          PROMETHEUS_OPERATOR_DESC: '管理 Prometheus 实例。',
        
          ELASTICSEARCH_LOGGING_DATA_DESC:
            '提供 Elasticsearch 数据存储、备份、搜索等服务。',
          ELASTICSEARCH_LOGGING_DISCOVERY_DESC: '提供 Elasticsearch 集群管理服务。',
          LOGSIDECAR_INJECTOR_DESC:
            '为指定容器组自动注入用于落盘日志收集的 Sidecar 容器。',
        
          CONTROLLER_MANAGER_METRICS_SERVICE_DESC: '提供 S2I 控制器的监控数据',
          KS_JENKINS_DESC: 'Jenkins Master 服务，提供 DevOps 基础功能。',
          KS_JENKINS_AGENT_DESC: 'Jenkins Agent 连接 Jenkins Master 所使用的服务。',
          KS_SONARQUBE_POSTGRESQL_DESC: '代码质量分析组件 Sonarqube 的后端数据库',
          KS_SONARQUBE_SONARQUBE_DESC: 'Sonarqube 的主服务',
          S2IOPERATOR_DESC: 'S2I 控制器，S2I 的全生命周期管理',
          UC_JENKINS_UPDATE_CENTER_DESC: 'Jenkins 更新中心，提供 Jenkins 插件的安装包',
          WEBHOOK_SERVER_SERVICE_DESC: '为 S2I 提供默认值和验证 Webhook。',
        
          ETCD_DESC: '一个可靠的分布式数据存储，能持久化存储集群配置',
          MYSQL_DESC:
            '一个开源的数据库管理系统，让用户能够管理关系型数据库。关系数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内',
          TOWER_DESC: '用于集群间通过代理方式创建网络连接。',
          KUBE_SCHEDULER_SVC_DESC: 'Kubernetes 调度器，用于将容器组调度到合适的节点。',
          KUBE_CONTROLLER_MANAGER_SVC_DESC:
            '守护进程，用于内嵌随 Kubernetes 一起发布的核心控制回路。',
        
          S2IOPERATOR_METRICS_SERVICE_DESC: 'S2I 监控服务组件，提供基础监控数据。',
          MINIO_DESC: '开源高性能对象存储服务器，适合存储大规模非结构化数据。',
          ALERTMANAGER_OPERATED_DESC:
            'Alertmanager 服务，用于集成 Prometheus 和 Alertmanager。',
          ALERTMANAGER_MAIN_DESC: 'Alertmanager Web UI 服务。',
          NOTIFICATION_MANAGER_SVC_DESC:
            '提供发送邮件、微信消息、Slack 消息等通知的接口。',
          NOTIFICATION_MANAGER_CONTROLLER_METRICS_DESC:
            '提供 Notification Manager Controller 内部监控数据。',
          HYPERPITRIX_DESC:
            '针对基于 Helm 的应用程序提供应用商店服务，管理应用生命周期',
          JAEGER_OPERATOR_METRICS_DESC: '提供 Operator 的监控指标。',
          LOGSIDECAR_INJECTOR_ADMISSION_DESC:
            '为指定容器组自动注入用于落盘日志收集的 Sidecar 容器。',
          KS_EVENTS_ADMISSION_DESC: '为事件规则管理提供验证 Webhook。',
          KS_EVENTS_RULER_DESC: '事件规则引擎服务，提供事件过滤和告警功能。',
          KS_CONTROLLER_MANAGER_DESC:
            '实现业务逻辑。例如，创建企业空间时创建对应的权限，创建服务策略时生成对应的 Istio 配置。',
          KUBE_AUDITING_WEBHOOK_SVC_DESC:
            '负责审计日志的收集、比对、持久化和告警上报。',
            ADD_CLUSTER: '添加集群',
            'Add New Cluster': '添加新集群',
            'Import Kubernetes Cluster': '导入 Kubernetes 集群',
            Import: '导入',
          
            Validating: '校验中',
            'Validation failed': '校验失败',
          
            CLUSTER_NAME: '集群名称',
            'Cluster Management': '集群管理',
            'Nodes Management': '节点管理',
            'Node Types': '节点类型',
            'Network Management': '网络管理',
            'Custom Resources': '自定义资源 CRD',
            STORAGE: '存储',
            CLUSTER_SETTINGS: '集群设置',
            'Network Policies': '网络策略',
            'Network Topology': '网络拓扑',
            CLUSTER_VISIBILITY_SCAP: '集群可见性',
            'Cluster Members': '集群成员',
            'Cluster Roles': '集群角色',
            'Kubernetes Settings': 'Kubernetes 设置',
            'Connection Method': '连接方式',
          
            'Host Cluster': '主集群',
            HOST_CLUSTER: '主集群',
            HOST_CLUSTER_TCAP: '主集群',
            HOST_CLUSTER_PL_TCAP: '主集群',
            'Host Clusters': '主集群',
            'Member Cluster': '成员集群',
            'Member Clusters': '成员集群',
          
            KUBERNETES_VERSION: 'Kubernetes 版本',
            KUBESPHERE_VERSION: 'KubeSphere 版本',
          
            'Cluster List': '集群列表',
            CLUSTER_INFORMATION: '集群信息',
            KUBERNETES_STATUS: 'Kubernetes 状态',
            Tools: '工具',
          
            EDIT_VISIBILITY: '编辑可见性',
          
            'Go back': '返回上一步',
          
            'Choose a provider': '选择服务商',
          
            USER_PROJECTS: '用户项目',
            SYSTEM_PROJECTS: '系统项目',
          
            WAIT_FOR_CLUSTER: '等待集群加入...',
          
            'Click to Copy': '点击复制',
          
            'Cluster initialization failed': '集群初始化失败',
          
            'Not Ready': '未就绪',
          
            'Copy successfully': '复制成功',
          
            UNBIND: '解绑',
          
            UNBIND_CLUSTER: '解绑集群',
            'Are you sure you want to unbind the cluster?': '您确定解绑集群吗？',
          
            'Cluster Member': '集群成员',
          
            AUTHORIZED: '已授权',
            Unauthorized: '待授权',
          
            'Please input cluster name': '请输入集群名称',
          
            'Authorize the cluster to workspace': '集群授权企业空间',
            SET_PUBLIC_CLUSTER: '设置为公开集群',
          
            'The current cluster is public': '当前集群处于公开状态',
          
            AVAILABLE_CLUSTERS: '可用集群',
            SELECT_CLUSTERS: '选择集群',
            EDIT_CLUSTER_INFO_DESC: '编辑集群基本信息。',
          
            SCHEDULING_OPERATIONS: '调度次数',
            SCHEDULING_OPERATION: '调度次数',
            SCHEDULING_FAILURES: '调度失败次数',
            SCHEDULING_FAILURE: '调度失败次数',
          
            'Please select or input a tag': '请选择或输入标识',
            'Please select or input a provider': '请选择或输入服务商',
            'Please input the kubesphere api server address of the cluster':
              '请输入待加入集群的 Kubesphere API Server 地址',
          
            ALL_PROJECTS: '全部项目',
          
            'Enter the project': '进入项目',
          
            'How to Add': '添加方式',
          
            'New Cluster': '新建集群',
          
            'Import Cluster': '导入集群',
          
            'Cluster Basic Info': '集群基本信息',
          
            'Node Settings': '节点设置',
          
            'Please add at least one cluster node': '请至少添加一个集群节点',
            NODE_ROLE_EMPTY_DESC: '设置节点在集群中的角色。',
          
            'Add node to the cluster': '添加节点到集群中',
          
            INTERNAL_IP_ADDRESS: '内部 IP 地址',
            PORT: '端口',
            PORT_VALUE: '端口：{value}',
            EXTERNAL_IP: '外网 IP 地址',
            USERNAME_AND_PASSWORD: '用户名和密码',
            SSH_KEY_TCAP: 'SSH 密钥',
            SSH_KEY_SCAP: 'SSH 密钥',
          
            SSH_AUTH_MODE: 'SSH 认证方式',
            'Kubernetes Cluster Settings': 'Kubernetes 集群配置',
            'Network Plugin': '网络插件',
            'Max Pods': '节点最大容器组数量',
            'Pods CIDR': '容器组 CIDR',
            'Service CIDR': '服务 CIDR',
            'Default Storage Plugin': '默认存储插件',
            'Private Registry Configuration': '私有仓库配置',
            'etcd Backup': 'etcd 备份',
          
            'etcd Backup Dir': 'etcd 备份地址',
            'etcd Backup Period': 'etcd 备份地址',
            'Keep Backup Number': '保留的备份数',
          
            'KubeSphere Settings': 'KubeSphere 设置',
          
            INVALID_IP_DESC: 'IP 地址格式错误。',
          
            CLUSTER_CREATION_PROGRESS: '集群创建进度',
          
            CURRENT_STEP: '当前步骤：{step}',
          
            'Log Info': '日志信息',
            'Cluster Visibility': '集群可见性',
          
            CLUSTER_BASIC_INFO: '基本信息',
            NO_CLUSTER_TIP: '请添加至少 1 个集群',
            NO_CLUSTER_TIP_DESC:
              '集群是一组运行着 Kubernetes 的节点 (物理或者虚拟机)，Kubesphere 的功能也依托于集群中的节点来运行',
            ADD_NEW_CLUSTER_DESC: '添加新的 Kubernetes 集群',
            CHOOSE_PROVIDER_DESC:
              'KubeSphere 提供了在主流服务商中快速部署 Kubernetes 集群的方案',
          
            VISIBILITY_PARTIAL: '对部分企业空间可见',
            VISIBILITY_PUBLIC: '对所有企业空间可见',
          
            MULTI_CLUSTER: '多集群',
          
            CLUSTER_SETTINGS_DESC: '定义集群配置信息',
            TAG: '标签',
            CLUSTER_TAG_DESC: '选择标签来标识集群的用途。',
            CLUSTER_PROVIDER_DESC: '选择提供集群基础设施的服务商。',
            CLUSTER_CONNECT_METHOD_DESC: '可以直接连接集群或者使用代理',
          
            CONNTECT_DIRECT: '直接连接 Kubernetes 集群',
            CONNTECT_PROXY: '集群连接代理',
          
            WAIT_FOR_CLUSTER_DESC: '集群当前不可用。请执行以下步骤添加集群。',
          
            CLUSTER_AGENT_TIP_1:
              '1. 通过 SSH 登录集群，并执行 <span class="code">vi agent.yaml</span> 命令创建配置文件。',
            CLUSTER_AGENT_TIP_2:
              '2. 将以下信息复制到 <span class="code">agent.yaml</span> 文件中。',
            CLUSTER_AGENT_TIP_3:
              '3. 执行 <span class="code">kubectl create -f agent.yaml</span> 命令添加集群。',
            CLUSTER_AGENT_TIP_3_DESC: '此操作可能需要一定时间，请等待集群状态更新。',
          
            CLUSTER_CONDITIONS: '集群状态',
            CLUSTER_BASE_INFO_DESC:
              '基本信息是当前集群的信息概览，您可以查看和编辑集群的基本信息。',
            CLUSTER_INFO_TCAP: '集群信息',
          
            UNBIND_CLUSTER_DESC:
              '解绑集群后，KubeSphere 将无法管理该集群，但该集群上的 Kubernetes 资源不会被删除。',
            SURE_TO_UNBIND_CLUSTER: '我已了解操作所带来的风险',
          
            'Invite members to the cluster': '邀请成员到该集群',
            INVITE_CLUSTER_MEMBER_DESC: '您可以邀请新的成员来此集群',
          
            AUTHORIZE_CLUSTER_TO_WORKSPACE_DESC:
              '集群授权可以将集群通过授权的形式指定给企业空间使用该集群',
          
            PUBLIC_CLUSTER_DESC:
              '公开状态的集群意味着平台内的用户都可以使用该集群，并在集群中创建和调度资源',
          
            CLUSTER_AUTHORIZATION_DESC:
              '集群授权可以将集群通过授权的形式指定给企业空间使用该集群',
          
            CLUSTER_VISIBILITY_Q1: '如何将集群授权给指定的企业空间使用？',
            CLUSTER_VISIBILITY_A1: '您可以点击编辑可见性将集群授权给指定的企业空间使用。',
            CLUSTER_VISIBILITY_Q2: '什么是公开集群?',
            CLUSTER_VISIBILITY_A2:
              '公开状态的集群意味着平台内的用户都可以使用该集群，并在集群中创建和调度资源。',
          
            SELECT_CLUSTERS_DESC: '选择企业空间需要使用的集群。',
          
            CLUSTER_API_SERVER_TITLE: '待加入集群的 Kubesphere API Server',
            CLUSTER_API_SERVER_DESC: '需要添加待加入集群的 KubeSphere API Server 地址',
          
            INPUT_KUBECONFIG: '请填写目标集群的 KubeConfig',
          
            CLUSTER_DIRECT_IMPORT_TIP:
              'KubeSphere 多集群控制平面通过提供的 kubeconfig 来直接连接导入集群，此种方式要求当前集群能够通过 kubeconfig 中的 server 地址直接访问待导入集群。 </br></br>通常适用于:</br>1. 当前集群和待导入集群在同一内网网络中</br>2. 当前集群和待导入集群已通过 VPN 或隧道等其它技术连通所在网络</br>3. kubeconfig 的 server 地址可以通过公网访问',
            CLUSTER_AGENT_IMPORT_TIP:
              'KubeSphere 控制平面通过代理方式连接待导入集群，控制平面启动一个公开的代理服务，待导入集群创建相应的客户端组件连接代理服务，与控制平面之间建立一个反向代理。此种方式不需要待导入集群和控制平面在同一网络，也不要求待导入集群暴露集群的 apiserver 地址，但会有一定的网络性能损耗。</br></br>通常适用于:</br>1. 当前集群和待导入集群不在同一网络中<br/>2. 当前集群和待导入集群无法通过 VPN 或隧道等其它技术连通所在网络<br/>3. 对集群间网络性能损耗能容忍',
          
            HOW_TO_GET_KUBECONFIG: '如何获取 KubeConfig?',
          
            CLUSTER_AGENT_TITLE: '请根据集群中提供的代理连接设置加入集群',
            CLUSTER_AGENT_DESC: '需要在集群中设置下相应的代理 Agent',
          
            SELECT_HOST_CLUSTER_WARNING:
              '当前系统为多集群系统，请尽量避免在主集群上创建资源。主集群负载过高会导致多集群系统稳定性下降。',
            HOST_CLUSTER_VISIBILITY_WARNING:
              '请谨慎将主集群授权给企业空间，主集群负载过高会导致多集群系统稳定性下降。',
            CLUSTER_VISIBILITY_REMOVE_WARNING:
              '移除集群对企业空间的授权后，该企业空间在当前集群下的所有资源将被删除。',
          
            REMOVE_WORKSPACE_CONFIRM_TITLE: '移除授权',
            REMOVE_WORKSPACE_CONFIRM_DESC:
              '请输入企业空间名称 <strong>{resource}</strong> 确保您已了解操作所带来的风险。',
          
            SELECT_ADD_CLUSTER_METHOD: '选择添加集群的方式',
            SELECT_ADD_CLUSTER_METHOD_DESC: '支持添加新集群和导入已存在集群',
          
            NEW_CLUSTER_DESC: '添加新的 Kubernetes 集群',
            IMPORT_CLUSTER_DESC: '导入已有的 Kubernetes 集群',
            CLUSTER_NODE_SETTINGS_DESC: '添加集群需要的节点',
            NODE_INTERNAL_IP_DESC: '设置节点在 KubeSphere 集群内部的 IP 地址。',
            EDGENODE_INTERNAL_IP_DESC: '设置边缘节点在 KubeSphere 集群内部的 IP 地址。',
            NODE_INTERNAL_IP_EMPTY_DESC: '请设置节点在 KubeSphere 集群内部的 IP 地址。',
            EDGENODE_INTERNAL_IP_EMPTY_DESC:
              '请设置边缘节点在 KubeSphere 集群内部的 IP 地址。',
            NODE_ROLE_DESC: '设置节点在集群中的角色。',
            NODE_EXTERNAL_IP_DESC: '输入用于 SSH 登录的节点 IP 地址和端口号。',
            NODE_EXTERNAL_IP_EMPTY_DESC: '请输入用于 SSH 登录的节点 IP 地址。',
            SSH_AUTH_MODE_DESC: '选择 SSH 认证模式。',
            NODE_USERNAME_DESC: '输入用于 SSH 登录节点的用户名。',
            NODE_PASSWORD_DESC: '输入用于 SSH 登录节点的密码。',
          
            K8S_CLUSTER_SETTINGS_DESC: '对即将新建的 Kubernetes 集群进行初始化配置',
          
            CLUSTER_MAX_PODS_DESC: '可以在此 Kubelet 上运行的 pod 的数量. 默认为 110.',
          
            K8S_NETWORK_PLUGIN_CALICO:
              'Calico 是一个纯3层的网络方案，无缝集成 IaaS 云架构，能够提供的 VM、容器、裸机之间的IP通信',
            K8S_NETWORK_PLUGIN_FLANNEL:
              'Flannel 可以让集群中的不同节点主机创建的 Docker 容器都具有全集群唯一的虚拟IP地址',
            K8S_NETWORK_PLUGIN_CILIUM: '基于 eBPF 的网络，具有安全性和可观察性',
          
            KUBE_PODS_CIDR_DESC:
              '在节点上运行的 Pod 从节点的 Pod CIDR 范围分配 IP 地址。',
            KUBE_SERVICE_CIDR_DESC: '分配给服务的 IP 池',
          
            CLUSTER_COMPONENTS_DESC: '对集群的服务组件进行定制',
          
            CLUSTER_ADVANCED_SETTINGS_DESC: '可以根据需要配置您所需要的服务',
            CLUSTER_PRIVATE_REGISTRY_DESC:
              '给集群配置私有镜像仓库，当开始构建集群时会通过此镜像仓库拉取所需的全部镜像。',
          
            CLUSTER_CONTROLPLANE_ENDPOINT: '授权集群访问地址',
            CLUSTER_CONTROLPLANE_ENDPOINT_DESC:
              '通过授权的集群访问地址与集群直接通信，为集群生成 kubeconfig 来访问集群。',
            CLUSTER_ETCD_BACKUP_DESC: '对 etcd 进行定期备份设置',
            CLUSTER_ETCD_BACKUP_DIR_DESC: '在 etcd 主机上存储 etcd 备份文件的位置。',
            CLUSTER_ETCD_BACKUP_PERIOD_DESC: '运行 etcd 备份任务的时间，单位为分钟。',
            CLUSTER_ETCD_BACKUP_NUMBER_DESC: '要保留多少个备份副本。',
            CLUSTER_KUBESPHERE_SETTINGS_DESC: '针对 KubeSphere 的一些定制化设置',
          
            CREATING_CLUSTER: '集群创建中...',
            CREATING_CLUSTER_DESC: '集群正在创建中，当前状态不可用。',
            COPY_SUCCESSFUL: '复制成功。',
            CLUSTER_INIT_FAILED: '集群初始化失败。',
            INIT_NODES: '初始化节点',
            PULL_IMAGES: '拉取镜像',
            INIT_ETCD_CLUSTER: '初始化 etcd 集群',
            INIT_CONTROL_PLANE: '初始化控制平面',
            JOIN_NODES: '添加节点',
            INSTALL_ADDONS: '安装插件',
            FETCHING_LOGS: `获取日志中...`,
          
            MASTER_NODE_COUNT_TIP: 'Master 节点数量需要为 1 或 3',
            WORKER_NODE_COUNT_TIP: 'Worker 节点数量至少为 1',
          
            CLUSTER_CREATION_PROGRESS_TIP:
              '取决于集群规模和基础设施环境，集群创建可能需要 30 到 60 分钟。',
          
            CLUSTER_UPGRADE_REQUIRED:
              '当前 KubeSphere 版本不支持此功能，请将 KubeSphere 升级到 {version} 或以上版本。',
            MEMBER_CLUSTER_UPGRADE_TIP:
              '低于 {version} 版本的成员集群不支持此功能, 请将成员集群升级到 {version} 或以上版本。',
          
            // Unbind Cluster
            UNBIND_CLUSTER_Q: '解绑集群',
          
            // Cluster Visibility
            NODE: '节点',
            ADMINISTRATOR: '管理员',
            CLUSTER_VISIBILITY: '集群可见性',
            CLUSTER_VISIBILITY_DESC:
              '集群可见性控制集群对企业空间的授权。将集群授权给企业空间后，即可在企业空间中查看并管理集群资源。',
            EDIT_VISIBILITY_DESC: '编辑集群在企业空间中的可见性。',
            UNAUTHORIZED: '未授权',
            AUDITING: '审计',
            REMOVE_WORKSPACE_CONFIRM_SI:
              '请输入企业空间名称 <strong>{resource}</strong> 确保您已了解操作所带来的风险。',
            REMOVE_WORKSPACE_CONFIRM_PL:
              '请输入企业空间名称 <strong>{resource}</strong> 确保您已了解操作所带来的风险。',
              BASIC_INFORMATION: '基本信息',
              LOG_DATA_LOW: '日志信息',
              NAME: '名称',
              RECORD: 'Record',
              NAME_VALUE: '名称：{value}',
              ROLE: '角色',
              ROLE_PL: '角色',
              CPU_USAGE: 'CPU 用量',
              CPU_USAGE_TIME: 'CPU 用量（{time}）',
              MEMORY_USAGE: '内存用量',
              MAXIMUM_PODS: '容器组最大数量',
              MAXIMUM_PODS_SCAP: '容器组最大数量',
              MEMORY_USAGE_TIME: '内存用量（{time}）',
              POD_PL: '容器组',
              NUMBER_OF_PODS: '容器组数量',
              POD_LOW: '容器组',
              LEARN_MORE: '了解更多',
              DELETE: '删除',
              STOP: '停止',
              DELETE_PROJECT: '删除项目',
              LOGS: '日志',
              NO_DATA: '暂无数据',
              NO_DATA_SCAP: '未发现数据',
              REFRESH: '刷新',
              DOWNLOAD: '下载',
              NO_RESOURCE: '未发现{resource}。',
              LOG_DATA: '日志数据',
              CANCEL: '取消',
              USERNAME: '用户名',
              PASSWORD: '密码',
              REPLICA_COUNT: '副本数量',
              REPLICA_COUNT_LOW: '副本数量',
              REPLICA: '副本',
              REPLICA_PL: '副本',
              CREATE_NAME: '创建{name}',
              KEY: '键',
              KEY_EQ_VALUE: '键=值',
              POLICY: '策略',
              VALUE: '值',
              DROP: '移除',
              BASE: '目标',
              STRATEGY: '策略',
              STRATEGY_PL: '策略',
            
              // Cluster Node List
              MASTER: '主节点',
              WORKER: '工作节点',
              CONTROL_PLANE: '控制平面',
              AGENT: '代理',
              EDGE: '边缘节点',
              EDGE_NODE: '边缘节点',
              ALLOCATED_CPU: '已分配 CPU',
              ALLOCATED_MEMORY: '已分配内存',
              CPU_LIMIT_SI: '资源限制：{core} 核（{percent}）',
              CPU_LIMIT_PL: '资源限制：{core} 核（{percent}）',
              CPU_REQUEST_SI: '{core} 核（{percent}）',
              CPU_REQUEST_PL: '{core} 核（{percent}）',
              CORE: '核',
              CORE_PL: '核',
              CPU_CORE_PERCENT_SI: '{core} 核（{percent}）',
              CPU_CORE_PERCENT_PL: '{core} 核（{percent}）',
              MEMORY_GIB_PERCENT: '{gib} GiB（{percent}）',
              MEMORY_LIMIT_VALUE: '资源限制：{gib} GiB（{percent}）',
              MEMORY_REQUEST_VALUE: '{gib} GiB（{percent}）',
              TITLE_UNIT: '{title}（{unit}）',
              RESOURCE_REQUEST: '资源预留',
              CORDON: '停止调度',
              UNCORDON: '开启调度',
              VIEW_LOG: '查看日志',
            
              name: '名称',
              Ready: '就绪',
              READY_VALUE: '就绪：{readyCount}/{total}',
              STATUS_VALUE: '状态：{value}',
              REASON_VALUE: '原因：{value}',
              MESSAGE_VALUE: '消息：{value}',
              UPDATED_AT_VALUE: '更新时间：{value}',
              UPDATED_AGO: '更新于 {value}',
              STATUS: '状态',
              TYPE: '类型',
              TYPE_VALUE: '类型：{value}',
              TYPE_CONFIGMAP: '存储卷类型：配置字典',
              TYPE_SECRET: '存储卷类型：保密字典',
              TYPE_EMPTYDIR: '存储卷类型：EmptyDir',
              TYPE_HOSTPATH: '存储卷类型：HostPath',
              PROJECT: '项目',
              WORKBENCH_PROJECT: '项目',
              WORKBENCH_WORKSPACE: '企业空间',
              WORKBENCH_DEVOPS: 'DevOps 项目',
              WORKBENCH_MULTI_CLUSTER_PROJECT: '多集群项目',
              WORKBENCH_CLUSTER: '集群',
              PROJECT_EMPTY_DESC: '请创建一个项目。',
              Service: '服务',
              SERVICE: '服务',
              SERVICE_VALUE: '服务：{value}',
              SERVICE_PL: '服务',
              NUMBER_OF_SERVICES: '服务数量',
              SERVICE_LOW: '服务',
              Overview: '概览',
              OVERVIEW: '概览',
              'Node Selector': '节点选择器',
              START_TIME: '开始时间',
              START_TIME_SCAP: '开始时间',
              END_TIME: '结束时间',
              SAMPLING_INTERVAL: '采样间隔',
              CREATION_TIME_TCAP: '创建时间',
              CREATED_BY: '创建者',
              UPDATE_TIME_TCAP: '更新时间',
              RUNNING_TIME: '运行时间',
              CUSTOM_COLUMNS: '定制内容',
              DESELECT: '取消选择',
              Monitors: '监控',
              Events: '事件',
              LABEL_PL: '标签',
              APPLICATION_WORKLOAD_PL: '应用负载',
              APPLICATION_WORKLOADS: '应用负载',
              Application: '应用',
              APPLICATION: '应用',
              Container: '容器',
              CONTAINER_PL: '容器',
              TERMINAL: '终端',
              COMMAND: '命令',
              COMMANDS: '命令',
              MAINTAINER_COLON: '维护者：',
              CREATOR: '创建者',
              POD: '容器组',
              Pods: '容器组',
              MEMORY: '内存',
              memory: '内存',
              Custom: '自定义',
              Others: '其它',
              Error: '错误',
            
              Platform: '平台管理',
              PLATFORM_INFORMATION: '平台信息',
              PLATFORM_VERSION: '平台版本',
              PLATFORM_ADDRESS: '平台地址',
              PLATFORM_TITLE: '平台标题',
              PLATFORM_DESCRIPTION: '平台描述',
              CLUSTER_COUNT: '集群数量',
              PLATFORM_RESOURCES: '平台资源',
              LAST_UPDATE_TIME: '最后更新时间',
              Workbench: '工作台',
              'Access Control': '访问控制',
              ACCESS_CONTROL: '访问控制',
              'App Templates': '应用模板',
              'Service Components': '服务组件',
              SYSTEM_COMPONENT_PL: '系统组件',
              Infrastructure: '基础设施',
              'Basic Information': '基本信息',
              MONITORING_AND_ALERTING: '监控告警',
              'Monitoring & Alerting': '监控告警',
              'MONITORING_&_ALERTING': '监控告警',
              CONFIGURATION_CENTER: '配置管理',
              STORAGE_MANAGEMENT: '存储管理',
              CONFIGURATION: '配置',
              PROJECT_SETTINGS: '项目设置',
              GRAYSCALE_RELEASE: '灰度发布',
            
              'User Manual': '使用手册',
              'API Documents': 'API 文档',
            
              History: '历史记录',
            
              RECENT_ACCESS: '最近访问',
            
              CLUSTERS_MANAGE_DESC:
                '对多集群以及每个集群的基础资源、服务组件和应用资源等的统一管理。',
              ACCESS_CONTROL_DESC: '对平台中的企业空间、用户、以及角色进行统一管理。',
              APP_STORE_MANAGEMENT_DESC:
                '对云原生应用的发布、上架以及下架等应用全生命周期的统一管理。',
              PLATFORM_SETTINGS_DESC: '定制化平台设置，如基本信息和通知配置等。',
            
              WAITING: '等待中',
              LOADING: '加载中...',
              Active: '活跃',
              Running: '运行中',
              Succeeded: '运行中',
              Updating: '更新中',
              Warning: '异常',
              Draining: '疏散中',
              Pending: '等待中',
              Upgrading: '升级中',
              Stopped: '已停止',
              Disabled: '未开启',
              'Not Enabled': '未开启',
              Enabled: '已开启',
              ENABLED: '已开启',
              Ceased: '已销毁',
              Used: '已使用',
              USED: '已使用',
              Remain: '剩余',
              All: '全部',
              Unresolved: '待解决',
              Deleted: '已删除',
              Completed: '已完成',
              Unfinished: '未完成',
              Healthy: '健康',
              active: '活跃',
              RUNNING: '运行中',
              IMAGE_BUILDING_FAILED: '镜像创建失败',
              IMAGE_BUILDING_SUCCESSFUL: '镜像创建成功',
              BUILDING_IMAGE: '创建镜像中',
              waiting: '等待中',
              pending: '等待中',
              updating: '更新中',
              'is updating': '正在更新',
              warning: '异常',
              stopped: '已停止',
              disabled: '未开启',
              deleted: '已删除',
              unfinished: '未完成',
              terminated: '已终止',
              healthy: '健康',
              unknown: '未知',
              failed: '失败',
              Failed: '失败',
              Suspend: '暂停',
            
              EDIT: '编辑',
              EDIT_TITLE: '编辑{title}',
              Restart: '重启',
              PAUSE: '暂停',
              START: '启动',
              Cordon: '停止调度',
              Uncordon: '启动调度',
              Destroy: '销毁',
              Enable: '开启',
              Disable: '停用',
              RESET: '重置',
              Drain: '疏散',
              Visit: '访问',
              SELECT: '选择',
              'Select All': '选择全部',
              SELECT_ALL: '选择全部',
              VERSION: '版本',
              LATEST_VERSION: '最新版本',
              LATEST_VERSION_SCAP: '最新版本',
              Source: '来源',
              HEALTH_STATUS: '健康状态',
              HEALTH_STATUS_SCAP: '健康状态',
            
              EDIT_INFORMATION: '编辑信息',
              OK: '确定',
              Cancel: '取消',
              Apply: '应用',
              CLOSE: '关闭',
              PREVIOUS: '上一步',
              NEXT: '下一步',
              Update: '更新',
              Undo: '撤销',
              Create: '创建',
            
              PATH: '路径',
              HOST_PATH: '主机路径',
              Scheme: '方案',
              type: '类型',
              status: '状态',
              reason: '原因',
              REASON: '原因',
              message: '消息',
              MESSAGE: '消息',
              Count: '数量',
              Total: '总计',
              TOTAL: '总计',
              total: '总计',
              LEVEL: '等级',
              level: '等级',
            
              Unit: '单位',
              NUM_UNIT: '个',
            
              NOT_ENABLE: '{resource}暂未开启',
              NOT_AVAILABLE: '未发现可用的{resource}',
              RESOURCE_NOT_FOUND: '未发现资源。',
              NO_AVAILABLE_RESOURCE_VALUE: '未发现可用{resource}',
              NO_RESOURCE_FOUND: '未发现资源',
              NO_REPO_FOUND_DESC: '未发现代码仓库。',
              NO_SERVICE_FOUND: '未发现服务',
              NO_AVAILABLE_RESOURCE: '未发现可用资源',
              'No Data': '未发现数据',
              NO_RELEVANT_DATA: '未发现相关数据',
            
              or: '或',
              refresh: '刷新',
              'refresh data': '刷新数据',
              Refresh: '刷新',
              IGNORE_AND_RETRY: '忽略并重试',
              More: '更多',
              Collapse: '收起',
              View: '查看',
              Current: '当前',
              'Display all': '显示全部',
              'Display selected': '显示已选',
              Display: '显示',
              Hidden: '隐藏',
              FOLD: '折叠',
              UNFOLD: '展开',
            
              'Basic Info': '基本信息',
              'Pod Template': '容器组模板',
              'Volume Settings': '存储卷设置',
              VOLUME_TEMPLATES: '存储卷模板',
              VOLUME_TEMPLATE_SETTINGS: '存储卷模板设置',
              'Storage Device': '存储设备',
              STORAGE_DEVICES: '存储设备',
              'Port Settings': '端口设置',
              'Service Settings': '服务设置',
              'Health Checker': '健康检查器',
              PORT_SETTINGS: '端口设置',
              SERVICE_SETTINGS: '服务设置',
              HEALTH_CHECKER: '健康检查器',
              HEALTH_CHECK: '健康检查',
              EXTERNAL_ACCESS: '外部访问',
              'Advanced Settings': '高级设置',
              ADVANCED_SETTINGS: '高级设置',
              Settings: '设置',
              Configuration: '配置',
              MULTI_CLUSTER_DEPLOYMENT: '多集群项目',
              MULTI_CLUSTER_PROJECT_TIP: '此项目跨多个集群。',
              CERTIFICATE: '证书',
              CERTIFICATE_VALUE: '证书：{value}',
            
              'Official Document': '官网文档',
            
              OPTIONAL: '可选',
              PROTOCOL: '协议',
              PROTOCOL_VALUE: '协议：{value}',
              Certificate: '证书',
              key: '键',
              value: '值',
              Value: '值',
              'eg.': '例如：',
              SN_NO: '序号',
              KEY_IN_RESOURCE: '资源中的键',
            
              Add: '添加',
              ADD: '添加',
              ADD_STRATEGY: '添加策略',
              'Add ': '添加',
              'Edit ': '编辑',
              Set: '设置',
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
              'Updated just now': '刚刚更新',
              'half month ago': '半个月前',
              'half month': '半个月',
              CREATED_AGO: '创建于 {diff}',
              CREATED_TIME: '创建于 {diff}',
              UPDATE_TIME: '更新于 {diff}',
              MONTH_AGO: '{count} 月前',
              MONTH_TIME: '{count} 月',
              WEEK_AGO: '{count} 周前',
              WEEK_TIME: '{count} 周',
              DAY_AGO: '{count} 天前',
              DAY_TIME: '{count} 天',
              HOUR_AGO: '{count} 小时前',
              HOUR_TIME: '{count} 小时',
              MINUTE_AGO: '{count} 分钟前',
              MINUTE_TIME: '{count} 分钟',
              SECOND_AGO: '{count} 秒前',
              SECOND_TIME: '{count} 秒',
            
              NAME_DESC:
                '名称只能包含小写字母、数字和连字符（-），必须以小写字母或数字开头和结尾，最长 63 个字符。',
              NAME_TOO_LONG: '最长 63 个字符',
            
              LONG_NAME_DESC:
                '名称只能包含小写字母、数字和连字符（-），必须以小写字母或数字开头和结尾，最长 253 个字符。',
              LONG_NAME_TOO_LONG: '最长 253 个字符',
              ALIAS_DESC: '别名可包含任意字符，最长 63 个字符。',
              LABEL_FORMAT_DESC:
                '标签的键和值只能包含字母、数字、连字符（-）、下划线（_）和句点（.），必须以数字或字母开头和结尾。键和值分别最长 63 个字符（如键包含域名则最长 253 个字符）。',
              DESCRIPTION_DESC: '描述可包含任意字符，最长 256 个字符。',
              PROJECT_DESC: '项目用于对资源进行分组管理和控制不同用户的资源管理权限。',
              MULTI_CLUSTER_PROJECT_EMPTY_DESC: '请创建一个多集群项目。',
              DESCRIPTION: '描述',
            
              NAME_EMPTY_DESC: '请设置一个名称。',
              PARAMETER_NAME_EMPTY_DESC: '请设置参数的名称。',
              ENTER_INTEGER_OR_PERCENTAGE: '请输入整数或百分比。',
              MAX_UNAVAILABLE_EMPTY:
                '请设置更新过程中允许的不可用容器组副本的最大数量或百分比。',
              MAX_EXTRA_EMPTY: '请设置更新过程中允许的多余容器组副本的最大数量或百分比。',
              'Please input value': '请输入值',
              'Please select workspace': '请选择企业空间',
              'Please select project': '请选择项目',
              VERSION_EMPTY_DESC: '请选择版本。',
              'Filter by keyword': '请输入关键字过滤',
              'Search by keyword': '请输入关键字进行查找',
              SEARCH_BY_NAME: '按名称搜索',
              NAME_VALIDATION_FAILED:
                '名称不能以 kube- 开头，该字符串为 Kubernetes 系统保留保留字符串。',
              NAME_EXIST_DESC: '名称已存在，请输入其他名称。',
              KEY_EXIST_DESC: '键已存在。',
              EMPTY_KEY_DESC: '请输入键值。',
              DUPLICATE_KEYS: '该键已经存在，请输入其他键。',
              EMPTY_KEY: '请输入一个键。',
            
              'Log Out': '登出',
              About: '关于',
              'User Settings': '用户设置',
              Language: '语言',
            
              READ: '读',
              ReadOnly: '只读',
              WRITE: '写',
              ReadAndWrite: '读写',
              'Not Mount': '不挂载',
              OUT: '出',
              IN: '入',
              Read: '读',
              READ_ONLY: '只读',
              READ_ONLY_LOW: '只读',
              READ_AND_WRITE_LOW: '读写',
              Write: '写',
              READ_AND_WRITE: '读写',
              NOT_MOUNT: '不挂载',
              Out: '出',
              In: '入',
              Upstream: '上行',
              Downstream: '下行',
              Outbound: '流出',
              Inbound: '流入',
            
              exists: '已存在',
            
              Quota: '配额',
              'No Limit': '不限制',
              'Remaining Quota': '剩余配额',
            
              TOTAL_ITEMS: '总数：{num}',
            
              SEARCH: '搜索',
            
              DELETE_TITLE_SI: '删除{type}',
              DELETE_TITLE_PL: '批量删除{type}',
              STOP_TITLE_SI: '停止{type}',
              STOP_TITLE_PL: '批量停止{type}',
              DELETE_SERVICE: '删除服务',
              DELETE_MULTIPLE_SERVICES: '批量删除服务',
              DELETE_WORKLOAD: '删除工作负载',
              DELETE_MULTIPLE_WORKLOADS: '批量删除工作负载',
              DELETE_DESC: '您确定删除该资源吗？资源删除后将无法恢复。',
              STOP_DESC: '您确定停止该资源吗？',
              DELETE_RESOURCE_TYPE_DESC:
                '请输入{type}名称 <strong>{resource}</strong> 以确认您了解此操作的风险。',
              DELETE_RESOURCE_TYPE_DESC_SI:
                '请输入{type}名称 <strong>{resource}</strong> 以确认您了解此操作的风险。',
              DELETE_RESOURCE_TYPE_DESC_PL:
                '请输入{type}名称 <strong>{resource}</strong> 以确认您了解此操作的风险。',
              DELETE_RESOURCE_TYPE_DESC_GW:
                '请输入{type}名称 <strong>{resource}</strong> 以确认您了解此操作的风险。',
              DELETE_APP_RESOURCE_TIP:
                '资源被应用 <strong>{app}</strong> 管理, 删除后可能影响此应用的正常使用。请输入{type}名称 <strong>{resource}</strong> 确保您已了解操作所带来的风险。',
              STOP_APP_RESOURCE_TIP:
                '资源被应用 <strong>{app}</strong> 管理, 停止后可能影响此应用的正常使用。请输入{type}名称 <strong>{resource}</strong> 确保您已了解操作所带来的风险。',
            
              REMOVE_USER_TIP: '确定移除用户 <strong>{username}</strong> ? ',
            
              REMOVE_MEMBER_TIP:
                '请输入用户名 <strong>{resource}</strong> 以确认您了解此操作的风险。',
            
              REMOVE_GROUP_TIP: '确定移除组织 <strong>{resource}</strong> ?',
            
              'Error Tips': '错误提示',
              TIPS: '帮助信息',
            
              ADDED_SUCCESS_DESC: '添加成功。',
              CREATE_SUCCESSFUL: '创建成功。',
              UPDATE_SUCCESSFUL: '更新成功。',
              DELETE_SUCCESSFUL: '删除成功。',
              STOP_SUCCESS_DESC: '停止成功。',
              'Canceled Successfully': '取消成功',
            
              EVENT_NORMAL: '正常',
              EVENT_WARNING: '异常',
            
              EDIT_MODE: '编辑模式',
              LOAD_MORE: '加载更多',
              'All Repositories': '全部仓库',
            
              'Version Info': '版本信息',
              HOMEPAGE: '首页',
              'Params Configuration': '参数配置',
              ADD_PARAMETER: '添加参数',
              'Add Param': '添加参数',
              NO_PARAMETERS: '未发现参数。',
              'Back To List': '返回列表',
              SERVICE_LIST: '服务列表',
              TIME_RANGE: '时间范围',
              TIME_RANGE_SCAP: '时间范围',
              'Updated at': '更新于',
              'Sure to delete': '确认删除',
              'Sure to remove': '确认移除',
              ACTIVITY: '活动',
              RUN_RECORDS: '运行记录',
              VIEW_RECORDS: '查看记录',
              Task: '任务',
              STEPS_COMPLETE_TOTAL: '步骤：{complete}/{total}',
              Success: '成功',
              description: '描述',
              Agent: '代理',
              Confirm: '确认',
              STAGE: '阶段',
              DEFAULT_VALUE: '默认值',
              Username: '用户名',
              'Unknown User': '未知用户',
              secret_text: '秘密文本',
              domain: '域名',
              Domain: '域名',
              Account: '帐户',
              Strategy: '策略',
              secret: '密钥',
              CONTRIBUTORS: '贡献者',
              EVERYONE: '所有人',
              NOBODY: '无',
              'Add Task': '添加任务',
              Optional: '可选',
              Record: '记录',
              SERIAL_NUMBER: '序列号',
              Records: '记录',
              Detail: '详情',
              platform: '平台',
              RESELECT: '重新选择',
              body: '内容',
              AUTHOR: '作者',
              SIZE: '大小',
              password: '密码',
              NONE: '无',
              To: '至',
              to: '至',
              Download: '下载',
              PAUSED: '已暂停',
              PARAM_REQUIRED: '此参数不能为空。',
              Images: '镜像',
              filename: '文件名',
              DETAILS: '详情',
              NODES: '节点',
              FILE_OVERSIZED_TIP: '文件过大，超过 2M 不能上传！',
              'Load more': '加载更多',
            
              'Resource List': '资源列表',
            
              PLATFORM_LEVEL_ACCESS_CONTROL: '平台级访问控制',
            
              NOT_FOUND_DESC:
                '🙇 对不起未发现相关资源，系统将在 {time}s 后返回 <a href="{link}">工作台</a>',
              DETAIL_NOT_FOUND_DESC:
                '🙇 对不起未发现相关资源，返回 <a href="{link}">{title}</a>',
              TOOLBOX: '工具箱',
              TOOLBOX_DESC: '提供集群分析和控制工具。',
              'Analysis Tools': '分析工具',
              'Control Tools': '控制工具',
              THIRD_PARTY_TOOLS: '第三方工具',
            
              LOGGING: '日志',
              RESOURCE_EVENTS: '资源事件',
              AUDIT_LOGS: '审计日志',
              logging: '日志',
              Auditing: '审计',
              auditing: '审计',
              LOG_SEARCH: '日志查询',
              CONTAINER_LOG_SEARCH_DESC: '针对集群资源的多维度容器日志查询工具。',
              KUBECTL_DESC: '命令行工具，用于控制当前集群。',
              TOOLBOX_KUBECTL_DESC: '操作多集群的客户端命令行工具',
            
              KUBECONFIG_DESC: '配置文件，用于配置当前集群的访问信息。',
            
              event: '事件',
              events: '事件',
              EVENT_CREATE_DESC: '您可以改变搜索条件重新查询',
              EVENT_SEARCH: '事件查询',
              RESOURCE_EVENT_SEARCH_DESC: '针对集群资源的多维度资源事件查询工具。',
              EVENT_DESC: '事件查询（Event）是KubeSphere提供的平台内资源的历史事件查询',
              'Search By Condition': '根据条件进行查找',
              'search condition': '搜索条件',
              'Search tips': '搜索提示',
              Preferences: '偏好设置',
              'Data Sources': '数据来源: 内置服务',
              'Number of events': '事件数量',
              'workspaces found': '共找到 {count} 个企业空间',
              'rules text': '如何定义操作审计收集规则？ 🤔',
              'rules desc':
                'KubeSphere可以根据您设置的规则进行操作审计的收集，点击查看如何定义规则。',
              CATEGORY: '分类',
              Resource: '资源',
              EARLIEST_START_TIME: '最早发生时间',
              LATEST_START_TIME: '最近发生时间',
              'Related resources': '关联资源',
              OPERATION_DETAILS: '操作详情',
              'Event metadata': '事件元数据',
            
              'Auditing Operating': '操作审计',
              AUDIT_LOG_DESC: '针对集群资源的多维度审计日志查询工具。',
              verb: '操作行为',
              'Operation Account': '操作帐户',
              'Source IP': '来源 IP',
              Subresource: '子资源',
              'Status Code': '状态码',
            
              NanoSeconds: '纳秒',
              MicroSeconds: '微秒',
              MilliSeconds: '毫秒',
              Seconds: '秒',
              Minutes: '分钟',
              Hours: '小时',
              Days: '天',
            
              unit: '单位',
              time: '时间',
              email: '邮件',
              REQUIRED: '必填',
              Successful: '成功',
              Unknown: '未知',
              NOT_RUNNING_YET: '未运行',
              successful: '成功',
              Tag: '标签',
              PATTERN_NAME_INVALID_TIP:
                '名称无效。名称只能包含小写字母、数字、或连字符（-）。',
              NO_MATCHING_RESULT_FOUND: '未发现匹配的结果',
              'You can try to': '您可以尝试',
              'clear search conditions': '清空搜索条件。',
              CONTENT_NOT_SAVED_TIPS: '内容已经修改但并未保存',
              SAVE_EDIT_HINTS: '请确认修改的内容是正确的，您可以保存设置或者取消设置。',
            
              IN_PROGRESS: '设置中',
              CURRENT: '当前',
              CURRENT_VALUE: '当前：{value}',
              TARGET_CURRENT: '{target}（当前：{current}）',
              NOT_SET: '未设置',
              FINISHED: '已设置',
            
              'Learn more': '了解更多',
            
              KS_DESCRIPTION:
                'KubeSphere 是一款开源项目，在目前主流容器调度平台 Kubernetes 之上构建的企业级分布式多租户容器管理平台，提供简单易用的操作界面以及向导式操作方式，在降低用户使用容器调度平台学习成本的同时，极大降低开发、测试、运维的日常工作的复杂度。',
            
              REPS_ADDRESS: '项目地址',
              ISSUE_FEEDBACK: '问题反馈',
              PART_IN_DISCUSSION: '参与讨论',
              CODE_CONTRIBUTE: '贡献代码',
              GITHUB_STAR: '点亮Star',
            
              CONDITION_STATUS_ANALYSE: '状态分析（Conditions）',
            
              NAV_PROJECTS: '项目',
              NAV_ACCOUNTS: '帐户管理',
            
              'Session timeout or this account is logged in elsewhere, please login again':
                '会话超时或此帐户在其它地方登录，请重新登录',
            
              NOTE: '备注',
            
              VolumeSnapshot: '存储卷快照',
              VOLUME_SNAPSHOT: '存储卷快照',
              VOLUME_SNAPSHOT_PL: '存储卷快照',
              VOLUME_SNAPSHOT_LOW: '存储卷快照',
              'Volume Snapshot': '存储卷快照',
            
              CREATE_STATUS_SUCCESSFUL: '创建成功',
              CREATE_STATUS_UPDATING: '创建中',
              CREATE_STATUS_FAILED: '创建失败',
              CREATE_STATUS_DELETING: '删除中',
            
              DATA_SOURCE: '数据源',
            
              EMPTY_WRAPPER: '未发现{resource}',
            
              'User Guides': '用户指南',
              'Quick Support': '快速获取帮助',
              'Developer Community': '开发者社区',
              NO_HISTORY_TITLE: '未发现最近访问的资源',
              NO_HISTORY_DESC: '您可以对平台资源进行访问。',
              USER_GUIDES_DESC: '最详尽的 KubeSphere 用户指南文档',
              DEVELOPER_DESC: '通过在开发者社区提出问题获得帮助',
              API_DOCS_DESC: '最详尽的 KubeSphere API 文档',
              GITHUB_ISSUES_DESC: '通过在 GitHub 提出 Issue 获得帮助',
            
              ENV_PRODUCTION: '生产环境',
              ENV_DEVELOPMENT: '开发环境',
              ENV_TESTING: '测试环境',
              ENV_DEMO: '演示环境',
            
              HOW_TO_MODIFY_PLATFORM_INFO: '如何定制化平台信息?',
              PLATFORM_INFO_DESC: '平台的信息概览，您可以查看和定制化平台信息。',
              PLATFORM_SETTINGS_SELECTOR_DESC: '定制化平台的系统配置',
            
              EVENT_AGE: '发生时间',
              EVENT_AGE_DATA: '{lastTime}<br/>（近 {duration}发生 {count} 次)',
              EVENT_AGE_DATA_TWICE: '{lastTime}<br/>（近 {duration}发生 2 次）',
              SOURCE: '来源',
            
              CREATE_BY_YAML_DESC: '在 YAML 文件中自定义设置。',
              RESOURCE_CONSUMPTION_STATISTICS: '资源消费统计',
              METERING_AND_BILLING_DESC: '查看集群和企业空间的资源消费情况。',
            
              // Workbench
              CLUSTER_COUNT_SI: '集群数量',
              CLUSTER_COUNT_PL: '集群数量',
              LAST_LOGIN_TIME: '最后登录时间：',
              APP_TEMPLATE_SCAP_PL: '应用模板',
              ACCOUNT_PL: '账户',
            
              // Container Details Page
              CONTAINER_DETAILS_PAGE_SCAP: '容器详情页。',
              CPU_VALUE: 'CPU：{value}',
              MEMORY_VALUE: '内存：{value}',
            
              // Container Log Search
              CONTAINER_LOG_SEARCH: '容器日志查询',
              RESOURCE_EVENT_SEARCH: '资源事件查询',
              AUDIT_LOG_SEARCH: '审计日志查询',
            
              // Toolbox
              CONTROL_TOOL: '控制工具',
              ANALYSIS_TOOLS: '分析工具',
              application: '应用',
              APP_PL: '应用',
              DEPLOYED_APPS: '已部署应用',
              CREATE_APP: '创建应用',
              'Deploy App': '部署应用',
              CREATE_COMPOSED_APP: '创建自制应用',
              'App Template': '应用模板',
              APP_TEMPLATE: '应用模板',
              APP_TEMPLATE_PL: '应用模板',
              TEMPLATE_BASED_APP_PL: '基于模板的应用',
              NO_TEMPLATE_BASED_APP_FOUND: '未发现基于模板的应用',
              TEMPLATE_BASED_APP_EMPTY_DESC: '请从 KubeSphere 应用商店或应用模板创建应用。',
              APP_TEMPLATE_LOW: '应用模板',
              APP_TEMPLATE_EMPTY_DESC: '请创建一个应用模板。',
              DEPLOY: '部署',
              APP_TYPES_Q: 'KubeSphere 支持哪些应用类型？',
              TOTAL_APPS: '共计 {num} 个应用',
              TOTAL_COLLECTIONS: '共计 {num} 个接收器',
              Upgrade: '升级',
              Rollback: '回滚',
            
              'Create Application by Service': '通过服务构建应用',
            
              APP_VERSION: '应用版本',
              APPLICATION_GOVERNANCE: '应用治理',
              APPLICATION_GOVERNANCE_SCAP: '应用治理',
              APP_COMPONENT_PL: '应用组件',
              'Application Component': '应用组件',
              'Application Route': '应用路由',
              TRAFFIC_MANAGEMENT: '流量管理',
              NETWORK_TRAFFIC: '网络流量',
            
              'No Components': '未发现组件',
              'Cluster Select': '集群选择',
            
              'Application governance is not enabled': '应用治理未开启',
            
              'Build an app by services': '通过服务构建应用',
              'Build an app by app template': '应用模板部署',
              'Choose existing services or create new service components to build an app':
                '选择已有服务或者新建服务组件来构建应用',
              'Deploy applications with one-click application templates provided by Kubesphere':
                '通过 Kubesphere 提供的应用模板一键部署应用',
              'Sample apps can help you get started with app creation and app governance':
                '示例应用可以帮助您快速入手应用创建, 以及应用治理功能',
            
              ADD_SERVICE: '添加服务',
              ADD_ROUTE: '添加应用路由',
              'Add Component': '添加组件',
              EDIT_GRAYSCALE_RELEASE_JOB: '编辑灰度发布任务',
              'Add New Component': '添加新组件',
            
              'Application Icon': '应用图标',
            
              'Component Version': '组件版本',
            
              'Please input an application name': '请输入应用名称',
              APP: '应用',
              APP_LOW: '应用',
              'Service components should not be empty': '服务组件不能为空',
              'Please finish the sub form first': '请完成子表单的编辑',
            
              SERVICE_PORTS: '服务端口',
              'Traffic Entry': '流量入口',
              'Service Ports': '服务端口',
              TRAFFIC_ENTRY: '流量入口',
            
              APP_INTRODUCTION: '应用介绍',
            
              COMPOSED_APP_PL: '自制应用',
              NO_COMPOSED_APP_FOUND: '未发现自制应用',
              'Composing App': '自制应用',
            
              'Workload Type': '负载类型',
            
              'Current Version': '当前版本',
            
              'Cluster Selection': '集群选择',
            
              'Traffic Monitoring': '流量监测',
            
              'Traffic (requests per second)': '流量(每秒请求)',
              'HTTP - Inbound Traffic': 'HTTP - 入站流量',
              'HTTP - Outbound Traffic': 'HTTP - 出站流量',
              TCP_INBOUND_TRAFFIC: 'TCP 入站流量',
              TCP_OUTBOUND_TRAFFIC: 'TCP 出站流量',
            
              'Connection timeout': '连接超时时间',
              'TCP connection timeout.': 'TCP连接超时时间。',
              'Maximum requests': '最大请求数',
              'Maximum pending requests': '最大等待请求数(等待列队的长度)',
              'Max request retries': '最大请求重试次数',
              'The maximum number of retries to the target host within the specified time.':
                '在指定时间内对目标主机最大重试次数。',
              'Max number of requests per connection': '每条连接最大请求数',
              'If the maximum number of requests in the backend connection is set to 1, the keep alive feature is disabled.':
                '对后端连接中最大的请求数量若设为1则会禁止 keep alive 特性。',
              'Max number of connections': '最大连接数',
              'The maximum number of HTTP1 or TCP connections to the target host.':
                '到目标主机HTTP1或TCP连接的最大数量。',
              'Load balance algorithm': '负载均衡算法',
              'Session retention': '会话保持',
            
              METHOD: '方式',
              CREATION_METHOD: '创建方式',
              'According to the HTTP header': '根据 HTTP header',
            
              On: '开启',
              Off: '关闭',
            
              Traffic: '流量',
              Send: '发送',
              Receive: '接收',
            
              'Success rate': '成功率',
            
              'Circuit Breaker': '熔断器',
            
              APPLICATIONS_DESC:
                '应用为用户提供完整的业务功能，由一个或多个特定功能的组件组成。',
              CREATE_APP_DESC: '从 KubeSphere 应用商店或应用模板创建应用。',
              APPLICATION_GOVERNANCE_DESC:
                '开启应用治理后可以对应用使用流量监控、灰度发布和链路追踪功能。',
            
              VERSION_DESC: '版本只能包含小写字母和数字，最长 16 个字符。',
            
              APP_ICON_TIP: '点击上传应用图标，尺寸最大为 120px * 120px',
            
              CLUSTER_NAME_DESC:
                '名称只能包含小写字母、数字和连字符（-），必须以小写字母开头并以小写字母或数字结尾，最长 53 个字符。',
            
              SERVICE_PORT_NAME_DESC:
                '端口的名字必须遵循如下格式 <protocol>[-<suffix>]，可以是 http、http2、 grpc、 mongo、 或者 redis 作为 <protocol> ，这样才能使用 Istio 的路由功能。例如 name: http2-foo 和 name: http 都是有效的端口名称，而 name: http2foo 不是。',
            
              LB_ALG_DESC:
                '支持标准的负载均衡算法</br>ROUND_ROBIN：轮询，默认负载均衡算法。</br>LEAST_CONN：随机选取两个健康的主机，再从所选取的两个主机中选择一个链接数较少的主机。</br>RANDOM：从所有健康的主机中，随机选取一个。',
              LB_ROUND_ROBIN: '轮询(ROUND_ROBIN)',
              LB_LEAST_CONN: '最小连接数(LEAST_CONN)',
              LB_RANDOM: '随机(RANDOM)',
            
              LAST_NUM_RECORDS: '最近 {num} 条记录',
              'Last {hour} hour': '最近 {hour} 小时',
              'Last {hour} hours': '最近 {hour} 小时',
              'Last {day} days': '最近 {day} 天',
            
              APP_WORKLOAD_TYPE_DESC: '支持无状态服务(部署)及有状态服务(有状态副本集)',
            
              TYPE_SERVICE_DEPLOYMENT: '类型：无状态服务（部署）',
              TYPE_SERVICE_STATEFULSET: '类型：有状态服务（有状态副本集）',
              TRACING_UNAVAILABLE: '暂时无法使用链路追踪',
              TRAFFIC_MONITORING_UNAVAILABLE_DESC: '应用长时间未收到请求，请稍后重试。',
              'Application components combine workloads and services as components in applications':
                '应用组件组合了工作负载和服务作为应用中的组件',
              'If you need to access applications by application route, add routing rules':
                '如果您需要将应用通过应用路由的方式进行访问，请添加路由规则',
            
              'No result found': '未查询到结果',
              TRACING_NO_DATA_DESC: '请修改搜索条件后重试。',
              TRACING: '链路追踪',
              NUM_SPAN_SI: '{num} span',
              NUM_SPAN_PL: '{num} spans',
              NUM_ERROR_SI: '{num} 错误',
              NUM_ERROR_PL: '{num} 错误',
              'Deploy sample app Bookinfo': '部署示例应用 Bookinfo',
              SAVE_FORM_TIP: '请先保存当前设置。',
              'Add Component Successfully': '添加组件成功',
              'Add Route Successfully': '添加应用路由成功',
            
              'Connection pool management': '连接池管理',
              CONNECTION_POOL_TIP:
                '为应用程序创建固定数量的连接对象，保存在池中进行复用。每次访问时会从池中获取已存在的连接对象，使用完毕后，连接对象将返回池中。',
              'Continuous error response (5xx) number': '连续错误响应(5xx)个数',
              'The number of consecutive 5xx errors in one inspection cycle':
                '在一个检查周期内连续出现5xx错误的个数',
              'Inspection period (unit: s)': '检查周期(单位: s)',
              'The response code will be filtered in the inspection cycle.':
                '将会对检查周期内的响应码进行筛选',
              'Pod isolation ratio (unit: %)': '容器组隔离比例(单位: %)',
              'Base ejection time (s)': '短隔离时间(s)',
              'Hash based on a specific HTTP header.': '根据 HTTP header 中的内容获取哈希',
              'Hash based on HTTP cookie.': '根据 HTTP cookie 中的内容获取哈希',
              'Hash based on the source IP address.': '根据源 IP 获取哈希',
              'Based on HTTP header': '根据 HTTP header',
              'Based on HTTP cookie': '根据 HTTP cookie',
            
              'Called Services': '调用服务',
              'Called Depth': '调用深度',
              'Services & Operations': '服务与操作',
              Tags: '标签',
              Process: '进程',
              Log: '日志',
            
              POD_ISOLATION_RATIO_DESC:
                '允许容器组被隔离的最大比例。采用向上取整，若10个实例，设为13%则最多会隔离2个实例',
              BASE_EJECTION_TIME_DESC:
                '容器组第一次被隔离的时间，之后每次隔离时间为次数与最短隔离时间的乘积',
              CIRCUIT_DESC:
                '熔断机制是应对雪崩效应的一种微服务链路保护机制。当算出链路的某个微服务不可用或者响应时间太长时，会进行服务的降级，进而熔断该节点微服务的调用，快速返回错误的响应信息。当检测到该节点微服务调用响应正常后，恢复调用链路。',
            
              'Please input component version': '请输入组件版本',
              INVALID_VERSION_TIP: '请输入正确的版本号。',
              WORKLOAD_NAME_EXIST: '工作负载 {name} 已存在',
            
              APP_TYPES_A:
                'KubeSphere 支持基于模板的应用和自制应用。基于模板的应用创建自 KubeSphere 应用商店或应用模板，自制应用由用户自定义。',
            
              APPLICATION_SERVICE_DESC: '根据需求为应用添加有状态服务或无状态服务。',
              APP_BASIC_INFORMATION_DESC: '设置应用的基本信息。',
            
              HOW_TO_USE_APP_GOVERN_Q: '如何使用应用治理功能?',
              HOW_TO_USE_APP_GOVERN_A: '您可以在创建自制应用时开启应用治理功能。',
            
              'App Types': '应用的类型',
              TIP_APP_TYPE:
                'KubeSphere 支持来自于应用商店和应用仓库的应用部署(基于 Helm)，同样也支持自制应用 (Application CRD)。',
              'How to use Application Governance': '如何使用应用治理',
              TIP_APP_GOVERNANCE:
                '使用应用治理需要创建自制应用并对每项服务开启服务治理功能',
              'App store deployment': '应用商店部署',
              FROM_APP_STORE: '从应用商店',
              FROM_APP_TEMPLATE: '从应用模板',
              'From third party Helm': '来自第三方 Helm',
              FROM_APP_STORE_DESC: '从 KubeSphere 应用商店创建应用。',
              FROM_APP_TEMPLATE_DESC: '从企业空间或远程应用仓库中的应用模板创建应用。',
              COMPOSED_APP_EMPTY_DESC: '请创建一个自制应用。',
              APP_TEMPLATES_MODAL_DESC:
                '从下拉列表中选择当前企业空间或远程应用仓库以查看可用的应用模板。',
              APP_REPOS_DESC:
                '应用仓库来自于第三方的 Helm Chart Repo，通过可视化的方式在 KubeSphere 中展示并提供部署及管理功能，用户可以基于应用仓库中的模板快速地一键部署应用。',
            
              CURRENT_WORKSPACE: '当前企业空间',
              SELECT_APP_REPOSITORY: '选择应用仓库',
              APP_CREATE_SERVICE_DESC: '为自制应用创建一个服务。',
              CREATE_SERVICE_DESC: '选择创建服务的方式。',
              'Add an Internet access rule for the application': '为应用添加外网访问规则',
              ROUTE_SETTINGS: '路由设置',
              ROUTE_SETTINGS_DESC: '为应用设置路由规则。',
            
              APPLICATION_GOVERNANCE_ENABLED: '应用治理已开启',
              APPLICATION_GOVERNANCE_DISABLED: '应用治理已关闭',
            
              TRAFFIC_MANAGEMENT_NO_MICROSERVICE_TIP:
                '流量治理依赖于微服务模块, 当前集群未开启微服务模块',
              TRACING_NO_MICROSERVICE_TIP: '请在当前集群中开启应用治理组件。',
              APP_TEMPLATE_DESC:
              'KubeSphere 提供全生命周期的应用管理，可以上传或者创建新的应用模板，并且快速部署它们，也可以通过应用商店进行发布应用。',
            APP_TEMPLATE_CREATE_DESC:
              'KubeSphere 提供全生命周期的应用管理，可以上传或者创建新的应用模板，并且快速部署它们，也可以通过应用商店进行发布应用。',
            DEVELOP_APP_TITLE: '如何开发应用模板？',
            DEVELOP_APP_DESC:
              '您可以上传 Helm chart 或者使用 KubeSphere 提供的资源编排工具进行应用模板的开发。',
            HOW_PUBLISH_APP_TITLE: '如何发布应用到应用商店？',
            HOW_PUBLISH_APP_DESC:
              '您可以将 Helm chart 上传为企业空间的应用模板，审核通过后，应用将会发布在应用商店中。',
            HOW_APP_DEPLOY_TITLE: '如何部署和测试应用',
            UPLOAD_TEMPLATE: '上传模板',
            APPS_CREATE_DESC:
              'KubeSphere 提供全生命周期的应用管理，可以上传或者创建新的应用模板，并且快速部署它们，也可以通过应用商店进行发布应用。',
            
            APPS_MANAGEMENT: '应用管理',
            'Apps Management': '应用管理',
            APP_STORE_MANAGEMENT: '应用商店管理',
            PROVIDER: '提供商',
            
            Apps: '应用',
            APP_INFORMATION: '应用信息',
            'Base Info': '基本信息',
            APP_DETAILS: '应用详情',
            'App Config': '应用配置',
            'App Details': '应用详情',
            APP_SETTINGS: '应用设置',
            CURRENT_APP_SETTINGS_READONLY: '当前应用设置（只读）',
            TARGET_APP_SETTINGS: '目标应用设置',
            'New App Config': '新的应用配置',
            Introduction: '使用说明',
            'Terms of service': '服务条款',
            CONFIG_FILE: '配置文件',
            CHART_FILES: 'Chart 文件',
            'Update Log': '更新日志',
            NO_UPDATE_LOG_DESC: '未发现更新日志。',
            Note: '提示',
            APP_NAME_DESC: '应用的名称，最长 20 个字符。',
            'Select file': '选择文件',
            'Application Name': '应用名称',
            'Application Version': '应用版本',
            APP_DESCRIPTION_DESC: '应用的描述，最长 120 个字符。',
            APP_DETAIL_DESC: '在用户搜索应用时会非常有帮助',
            'Upload Icon': '上传图标',
            APP_ICON_NOTE: '上传 96x96 像素以内的 JPG 或 PNG 图像。',
            APP_ICON_FORMAT: '格式：PNG 或 JPG',
            APP_ICON_SIZE: '大小：96x96 像素',
            'Start editing': '开始编辑',
            File: '文件',
            
            APP_STORE_DESC:
              '管理应用商店中的应用。您可以查看应用的信息并上架或下架应用。',
            APP_CATEGORY: '应用分类',
            'Release / Suspended Time': '上架(下架)时间',
            
            APP_REVIEW: '应用审核',
            APP_REVIEWS: '应用审核',
            APP_RELEASE_DESC:
              '管理待发布到应用商店中的应用。您可以查看应用详情并批准或拒绝应用发布。',
            APP_REVIEW_EMPTY_DESC: '请在企业空间中创建应用模板并提交发布。',
            APP_REVIEWS_CREATE_DESC: '对应用上架提供审核功能',
            UNREVIEWED: '待审核',
            REVIEWED: '已审核',
            'Review Object': '审核对象',
            APP_RELEASE: '应用发布',
            Operator: '操作者',
            REJECTION_REASON: '拒绝原因',
            'Review Status': '审核状态',
            Submitter: '提交者',
            Handle: '处理',
            REVIEW_CONTENT: '审核内容',
            APP_DETAILS_DESC: '查看待发布的应用的详情。',
            SUBMIT_REVIEW_DESC: '提交应用进行发布。',
            REVIEWS_CREATE_DESC: '未发现相关的应用审核数据',
            
            'App Version': '应用版本',
            CURRENT_APP_VERSION: '当前应用版本',
            TARGET_APP_VERSION: '目标应用版本',
            'Service Provider': '服务提供商',
            'App Introduction': '应用介绍',
            'Reject Reason': '拒绝原因',
            REJECT_REASON_DESC: '填写拒绝应用审核的原因。',
            REJECT_REASON_TIP: '请填写至少一条拒绝原因。',
            APP_CATEGORIES_DESC:
              '对应用商店中已上架的应用进行分类管理。您可以创建、编辑、删除和调整应用分类。',
            AUDIT_RECORD_CREATE_DESC: '未发现相关的审核记录数据',
            
            APP_CATEGORY_PL: '应用分类',
            APP_CATEGORY_EMPTY_DESC: '没有属于当前分类的应用。',
            ALL_CATEGORIES_VALUE: '全部分类（{value}）',
            'Adjust App Category': '调整应用分类',
            CHANGE_CATEGORY_DESC: '应用分类将决定该应用在应用商店中的分类。',
            CHANGE_CATEGORY: '调整分类',
            DELETE_CATEGORY_WARNING:
              '该分类绑定了<strong>{total}</strong>个应用，请先将这些应用调整到其它分类后才能删除',
            DELETE_CATEGORY_DESC: '您确定要删除分类 <b>{name}</b> 吗?',
            CHANGED_SUCCESSFULLY: '调整成功。',
            
            APP_TEMPLATES_DESC:
              'KubeSphere 提供全生命周期的应用管理，可以上传或者创建新的应用模板，并且快速部署它们，也可以通过应用商店进行发布应用。',
            UPLOAD_HELM_TITLE: '上传 Helm Chart',
            UPLOAD_HELM_CHART_DESC: '上传已有的 Helm chart。',
            EDIT_APP_DESC: '编辑应用模板的基本信息。',
            'App Version Types': '交付类型',
            'Create Time': '创建时间',
            'Created At': '创建时间',
            'Add Version': '添加版本',
            'New Version': '添加版本',
            'App Deploy': '应用部署',
            'Test Deployment': '测试部署',
            MODIFY_SUCCESSFUL: '修改成功。',
            ADD_VERSION_SUCCESSFUL: '版本添加成功。',
            'Submit Successfully': '提交成功。',
            'Cancel Successfully': '撤消成功',
            'Release Successfully': '发布成功',
            REJECT_SUCCESSFUL: '拒绝成功。',
            'Suspend Successfully': '下架成功',
            'Recover Successfully': '上架成功',
            'Activate Successfully': '上架成功',
            'In Project': '所属项目',
            
            CREATE_APP_TEMPLATE: '创建应用模板',
            CREATE_APP_TEMPLATE_DESC:
              '轻量级、可移植、自包含的软件打包技术，使应用可以在几乎任何地方以相同的方式运行。',
            RESOURCE_TOOL_TITLE: '通过资源编排工具创建',
            RESOURCE_TOOL_DESCRIPTION:
              'KubeSphere 提供了可视化的资源编排工具，您可以通过资源预编辑来创建应用模板，部署测试',
            HELM_CHART_FORMAT_DESC: '支持 tar.gz 和 tgz 格式。',
            UPLOAD: '上传',
            'Start Create': '开始创建',
            APP_CREATE_GUIDE:
              '请参阅开发指南 <a href="{docUrl}/application-store/app-developer-guide/helm-specification/" target="_blank" rel="noreferrer noopener">Helm 规范</a>。',
            HELM_DEVELOP_GUIDE: 'Helm 规范及应用开发',
            
            UPLOAD_SUPPORT_FORMAT: '文件格式支持 tar.gz 和 tgz',
            UPLOADING: '正在上传',
            UPLOAD_SUCCESSFUL: '上传成功。',
            UPLOAD_AGAIN_TIP: '出现错误，请重试。',
            FILE_FORMAT_PACKAGE: '文件格式支持 tar.gz 和 tgz',
            FILE_FORMAT_ICON: '图标格式支持 png 和 jpg',
            FILE_FORMAT_SCREENSHOTS: '截图格式支持 png 和 jpg',
            FILE_MAX_PACKAGE: '配置包大小不能超过 2M',
            FILE_MAX_ICON: '图标大小不能超过 20KB',
            FILE_MAX_SIZE_ICON: '图标的最大尺寸为 96x96 像素。',
            FILE_MAX_SCREENSHOTS: '截图大小不能超过 2 MB。',
            UPLOAD_PACKAGE_OK_NOTE: '该版本已存在，请上传其他版本。',
            'Delete picture': '删除图片',
            'Re-upload': '重新上传',
            'Package problems': '文件有问题',
            'Upload again': '重新上传',
            'App Name': '应用名称',
            'Select File': '选择文件',
            APP_SCREENSHOTS: '应用截图',
            'Upload Screenshots': '上传截图',
            
            'Edit App Information': '编辑应用信息',
            Uncategorized: '未分类',
            'Category Name': '分类名称',
            CATEGORY_NAME_DESC: '名称可包含任意字符，最长 20 个字符。',
            ENTER_CATEGORY_NAME_TIP: '请输入分类名称。',
            ENTER_VERSION_NUMBER_TIP: '请输入版本号。',
            ICON_DESC: '请选择一个图标来标识分类',
            'Please select icon': '请选择图标',
            WRONG_ADDRESS_TIP: '地址格式错误，请输入正确的地址。',
            
            Screenshot: '截图',
            'Version No': '版本号',
            'Deploy now': '立即部署',
            'Deploy after login': '登录后部署',
            'Evaluation stars': '综合评价',
            'Business introduction': '业务介绍',
            'Company website': '公司官网',
            'Time of entry': '入驻时间',
            Discoveries: '发现',
            NEW_APPS: '新应用',
            screenshots: '张截图',
            'Delete all': '删除全部',
            'A general introduction to the application': '对应用的概括性介绍',
            'Detail Introduction': '详细介绍',
            'Very helpful when users search for apps': '在用户搜索应用时会非常有帮助',
            Icon: '图标',
            'Format png/svg background transparency is the best':
              '格式: png/svg 背景透明最佳',
            CHOOSE_APP_CATEGORY_DESC: '为应用选择一个分类。',
            'Service Provider Website': '服务商网站',
            SERVICE_PROVIDER_WEBSITE_DESC: '服务商的官方网站地址。',
            MODIFY_VERSION_TIPS: '每次修改的内容都将跟随下一次版本上架而真正生效。',
            UNDER_REVIEW_TIPS: '当前应用有版本正在审核中，以下信息暂时不可更改',
            
            'Instance Name': '实例名称',
            INDEX_SUCCESS_TIP: '同步成功。',
            
            NO_DEPLOY_RUNTIME_NOTE: '项目中没有可用的部署运行环境',
            
            UPLOAD_ICON: '上传图标',
            
            APP_CATE_All: '全部',
            
            APP_CATE_UNCATEGORIZED: '未分类',
            
            MISS_FILE_NOTE: '未找到文件 {file}。',
            
            'Please select a project to deploy': '请选择项目部署',
            WORKSPACE_EMPTY_DESC: '请选择企业空间',
            'Please select a cluster': '请选择集群',
            'Please select a project': '请选择项目',
            'Please select a project role': '请选择项目角色',
            'Please select a DevOps project': '请选择 DevOps 项目',
            'Please select a DevOps project role': '请选择项目角色',
            
            HELM_APP_SCHEMA_FORM_TIP:
              '您可以通过图形化表单或 YAML 文件对应用进行设置。图形化表单和 YAML 文件中的设置相互独立。',
            DELETE_APP_TEMPLATE_DESC:
              '请输入应用模板名称 <b>{resource}</b> 以确认您了解此操作的风险。',
            DELETE_APP_TEMPLATE_VERSIONS_DESC:
              '请输入应用模板名称 <b>{resource}</b> 以确认您了解此操作的风险。删除应用模板前，您必须先删除该应用模板的所有版本。',
            
            UNPROCESSED_APP_RELEASE: '待发布应用',
            PROCESSED_APP_RELEASE: '已发布应用',
            ALL_APP_RELEASE: '发布记录',
            
            'APP_CATE_MESSAGE QUEUEING': '消息队列',
            'APP_CATE_IMAGE REGISTRY': '镜像仓库',
            'APP_CATE_PROMETHEUS EXPORTER': '数据导出器',
            'APP_CATE_WEB SERVER': 'Web 服务器',
            APP_CATE_NETWORKING: '网络',
            'APP_CATE_DATABASE & CACHE': '数据库和缓存',
            APP_CATE_STORAGE: '存储',
            
            // App Review
            REVIEW: '审核',
            OPERATOR: '操作者',
            PENDING_REVIEW: '待处理',
            COMPLETE_REVIEW: '已处理',
            REJECT: '拒绝',
            RELEASE: '发布',
            INTRODUCTION: '介绍',
            UPDATE_LOG: '更新日志',
            SERVICE_PROVIDER_WEBSITE: '服务商网站',
            SERVICE_PROVIDER: '服务提供商',
            APP_DESCRIPTION: '应用描述',
            DOCUMENTATION: '说明文档',
            BACK: '返回',
            NOTIFICATION_EMAIL: '邮件',
            NO_DOCUMENT_FOUND: '未发现说明文档',
            
            // App Store
            DISCOVER: '发现',
            CATEGORIES: '分类',
            CATEGORY_COLON: '分类：',
            HOMEPAGE_COLON: '首页：',
            RELEASE_DATE_COLON: '发布时间：',
            APP_ID_COLON: '应用 ID：',
            APP_VERSIONS_TITLE: '版本（只显示 10 个最新的版本）',
            VERSIONS: '版本',
            UPDATE_TIME_COLON: '更新时间：',
            DEVELOPER: '开发者',
            
            // App Categories
            ICON: '图标',
            CREATE_CATEGORY: '创建分类',
            APP_NOTE: '提示',
            
            // App Templates > Details
            SERVICE_PROVIDER_WEBSITE_TCAP: '服务商网站',
            
            // App Templates
            FILE: '文件',
            INCORRECT_FILE: '文件有误？',
            TRY_AGAIN: '重试',
            FILE_MAX_ICON_DESC: '图标尺寸不能超过 20 KB，请重试。',
            START_EDITING: '开始编辑…',
            SCREENSHOTS_COLON: '截图数量：',
            DELETE_ALL: '全部删除',
            APP_LEARN_MORE:
              '<a href="{docUrl}/application-store/app-developer-guide/helm-developer-guide/" target="_blank">了解更多</a>',
            ACTIVATE_SUCCESSFUL: '上架成功。',
            CANCEL_SUCCESSFUL: '取消成功。',
            RECOVER_SUCCESSFUL: '恢复上架成功。',
            RELEASE_SUCCESSFUL: '发布成功。',
            SUBMIT_SUCCESSFUL: '提交成功。',
            SUSPEND_SUCCESSFUL: '下架成功。',
            DEPLOYED_SUCCESSFUL: '部署成功。',
            VIEW_IN_STORE: '在商店中查看',
            RELEASE_TO_STORE: '发布到商店',
            AUDIT_EMPTY_DESC: '未发现应用审核记录。',
            APP_STATUS_SUBMITTED: '已提交',
            APP_STATUS_PASSED: '已发布',
            APP_STATUS_SUSPENDED: '已下架',
            APP_STATUS_REJECTED: '已拒绝',
            APP_STATUS_ACTIVE: '已上架',
            APP_STATUS_PUBLISHED: '已发布',
            APP_STATUS_RECALLED: '已下架',
            APP_STATUS_RECALL: '下架',
            APP_STATUS_DRAFT: '待提交',
            APP_STATUS_PENDING_REVIEW: '待发布',
            APP_STATUS_IN_REVIEW: '审核中',
            APP_STATUS_DEVELOPING: '开发中',
            APPS: '应用',
            UNRELEASED: '待发布',
            RELEASED: '已发布',
            RELEASE_RECORD: '发布记录',
            RELEASE_RECORD_EMPTY_DESC: '未发现发布记录。',
            INSTALLED_SUCCESSFULLY: '安装成功。',
            'Configuration Files': '配置文件',
            'Deploy Successfully': '部署成功',
            CONFIG_FILES: '配置文件',
            
            APP_TEMPLATE_DESCRIPTION_TITLE: '应用一键部署',
            APP_TEMPLATE_DESCRIPTION_ARTICLE:
              '通过可视化的方式在 KubeSphere 中展示并提供部署及管理功能，用户可以基于应用模板快速地一键部署应用',
            
            'App README': '应用介绍',
            
            NO_DOCUMENT_DESC: '未发现说明文档。',
            VERSION_INTRO_EMPTY_DESC: '未发现该版本的介绍。',
            NO_CHART_FILE_FOUND: '未发现配置文件。',
            NO_APP_DESC_FOUND: '未发现应用描述信息。',
            NO_APP_CHART_FILE_FOUND: '未发现该应用的 chart 文件。',
            
            TOTAL_APP_REPOS: '共计 {num} 个应用仓库',
            
            'Edit by YAML': '编辑 YAML',
            'App Store Settings': '应用商店管理',
            APP_STORE: '应用商店',
            HOME_APP_STORE_DESC:
              'KubeSphere 官方应用商店提供部署及管理功能，用户可以基于应用模板快速地一键部署应用。',
            'Find an app': '查找应用',
            TOTAL_CATE_COUNT: '应用总数：{total}',
            Categories: '分类',
            Developer: '开发者',
            DEVELOPER_VALUE: '开发者：{value}',
            MAINTAINER_VALUE: '维护者：{value}',
            MAINTAINERS_VALUE: '维护者：{value} 等等',
            SOURCE_CODE_ADDRESS: '源代码地址',
            LATEST_VALUE: '最新：{value}',
            Latest: '最新',
            Screenshots: '截图',
            VERSION_LIST_DES: '只显示 10 个最新的版本',
            VERSION_NUMBER: '版本号',
            CHANGE_LOG: '更新日志',
            Contact: '联系方式',
            RELEASE_DATE: '发布日期',
            RELEASE_TIME_SCAP: '发布时间',
            APP_ID: '应用 ID',
            'App Readme': '应用描述',
            'Config files': '配置文件',
            'Install and Deploy': '安装部署',
            KEYWORDS: '关键词',
            
            AGREE: '同意',
            APP_DEPLOY_AGREEMENT: '部署须知',
            APP_DEPLOY_AGREEMENT_DESC_1: '您必须遵守该应用的开源协议。',
            APP_DEPLOY_AGREEMENT_DESC_2:
              '您部署该应用导致的任何后果将由您自行承担。如果需要支持服务，请联系相关开发者。',
            DO_NOT_REMIND_AGAIN: '不再提示',
            APP_DEPLOYMENT_AGREEMENT: '应用部署须知',
            APP_DEPLOY_AGREEMENT_CHECK: '我已阅读<b>应用部署须知</b>并同意部署该应用。',
            CHECK_APP_DEPLOY_AGREEMENT_TIP: '请阅读并同意<b>应用部署须知</b>。',
            VALIDATE: '验证',
            APP_REPO_DESC:
              '应用仓库是用于存放应用模板的仓库，您可以添加应用仓库以部署和管理其中的应用。',
            APP_REPO_URL_DESC: 'URL 需要通过验证才能添加或编辑应用仓库。',
            'App Repository': '应用仓库',
            APP_REPOSITORY: '应用仓库',
            APP_REPOSITORY_PL: '应用仓库',
            APP_REPOSITORY_LOW: '应用仓库',
            APP_REPOSITORY_EMPTY_DESC: '请添加一个应用仓库。',
            'Add App Repository': '添加应用仓库',
            EDIT_APP_REPO: '编辑应用仓库',
            APP_REPOSITORY_CREATE_DESC:
              '可用添加来自第三方的应用仓库源，可以支持基于 Helm 的 Kubernetes 应用。 ',
            
            Synchronize: '同步',
            syncing: '同步中',
            
            'Unrecognized URL': '无法识别的地址',
            'Invalid format of credential': '证书格式错误',
            'Missing access key ID': '缺少 Access key ID',
            'Missing secret access key': '缺少 Secret access key',
            'S3 access denied': 'S3 地址无法访问',
            'Invalid format of URL': '地址格式错误',
            'Invalid HTTP Scheme': '错误的 HTTP 类型协议',
            'HTTP access denied': 'HTTP 地址无法访问',
            'Invalid HTTPS Scheme': '错误的 HTTPS 类型协议',
            'Invalid type': '无效的类型',
            'Invalid Providers': '错误的 Providers 参数',
            'Invalid Repo URL': '不是有效的 Repo 地址',
            'Invalid S3 Scheme': '错误的 S3 类型协议',
            INVALID_URL_DESC: 'URL 无效。',
            VALID_URL_DESC: 'URL 验证通过。',
            
            WEBHOOK_URL_DESC: '请输入 webhook URL。',
            'Please input access key ID and secret access key':
              '请输入 Access key ID 和 Secret access key',
            
            SYNC_INTERVAL: '同步周期',
            SYNC_INTERVAL_DESC:
              '设置一个同步周期，取值范围为 3 分钟到 24 小时。默认值 0 表示不同步。',
            SYNC_PERIOD_EMPTY_DESC: '请设置同步周期。',
            SYNC_INTERVAL_INVALID: '数值无效，请输入 0 或正整数。',
            
            'App Repos': '应用仓库',
            ADD_APP_REPO: '添加应用仓库',
            INDEX_REPO: '同步仓库',
            
            HOW_TO_USE_APP_REPO_Q: '如何使用应用仓库？',
            HOW_TO_USE_APP_REPO_A:
              '您需要转到在该企业空间下的项目。在部署新应用时，选择<b>来自应用模板</b>并在下拉列表中选择您的应用仓库，即可部署应用仓库中的应用。',
            
            // App Repositories > Details
            SYNC_INTERVAL_TIP: '取值范围为 3 分钟到 24 小时，请输入有效数值。',
            SECONDS: '秒',
            MINUTES: '分钟',
            HOURS: '小时',
            Alerting: '告警',
            Notification: '通知',
            NOTIFICATION_MESSAGE: '通知消息',
            NOTIFICATION_SUMMARY: '概括',
            EDIT_TCAP: '编辑',
            EDIT_ALERTING_POLICY: '编辑告警策略',
            DELETE_TCAP: '删除',
            CREATE_ALERTING_POLICY: '创建告警策略',
            'Alerting Detail': '告警详情',
            ALERTING_MESSAGE: '告警消息',
            'Alerting Messages': '告警消息',
            ALERT_MONITORING: '告警监控',
            'alerting policy': '告警策略',
            ALERTING_POLICY: '告警策略',
            ALERTING_POLICY_PL: '告警策略',
            ALERTING_POLICY_LOW: '告警策略',
            'Alerting Policies': '告警策略',
            ALERTING_HISTORY: '告警历史',
            'alerting rule': '告警规则',
            ALERTING_RULE: '告警规则',
            RULE_SETTINGS: '规则设置',
            ALERTING_STATUS: '告警状态',
            ALERTING_SEVERITY: '告警级别',
            ALERTING_TYPE: '告警类型',
            ALERTING_NAME: '告警名称',
            SEVERITY: '告警级别',
            'Alerting Duration': '告警持续时间',
            'Notification Settings': '通知设置',
            'monitoring target': '监控目标',
            MONITORING_TARGETS: '监控目标',
            'Monitoring Rules': '监控规则',
            ALERTING_RESOURCE: '告警资源',
            
            Rule: '规则',
            RULE: '规则',
            'Add Rule': '添加规则',
            'Edit Rule': '编辑规则',
            'Rule Name': '规则名称',
            VIEW_DETAILS: '查看详情',
            ACTIVATION_TIME: '触发时间',
            SET_RULE_DESC: '请设置告警规则。',
            'Please input the threshold': '请输入阈值',
            CRITICAL_ALERT: '危险告警',
            ERROR_ALERT: '重要告警',
            WARNING_ALERT: '一般告警',
            
            Condition: '条件',
            THRESHOLD: '阈值',
            
            RULE_TEMPLATE: '规则模板',
            CUSTOM_RULE: '自定义规则',
            RULE_EXPRESSION: '告警规则表达式',
            INVALID_TIME_DESC:
              '数值无效。请从下拉列表中选择一个数值，或者输入 0 或正整数。',
            ALIAS: '别名',
            THRESHOLD_DURATION_MIN: '阈值时间（分钟）',
            
            ENTER_RULE_EXPRESSION: '请输入告警规则表达式。',
            ALERT_FUNCTIONS: '函数',
            ALERT_METRICS: '指标',
            ALERT_LABELS: '标签',
            ALERT_RATE_RANGES: 'Rate Ranges',
            
            NOTIFICATION_DETAILS: '详情',
            
            CUSTOM_POLICIES: '自定义策略',
            BUILT_IN_POLICIES: '内置策略',
            
            ALERT_TYPE: '{type}告警',
            ALERT_POLICY_DESC:
              '告警策略是用于监控集群资源的一系列条件，您可以创建告警策略对资源进行监控。',
            ALERT_MESSAGE_DESC: '告警消息显示满足告警规则后触发的告警详细信息。',
            ALERTING_MESSAGE_EMPTY_DESC: '没有在当前项目中找到告警消息。',
            ALERTING_POLICY_EMPTY_DESC: '请创建一个告警规则。',
            ALERTING_POLICY_CREATE_DESC: '您可以创建告警策略以即时发现资源的异常情况。',
            
            CPU_LOAD_1: '过去 1 分钟的 CPU 平均负载',
            CPU_LOAD_5: '过去 5 分钟的 CPU 平均负载',
            CPU_LOAD_15: '过去 15 分钟的 CPU 平均负载',
            
            ABNORMAL_PODS: '容器组异常率',
            POD_USAGE_SCAP: '容器组利用率',
            CPU_USAGE_SCAP: 'CPU 用量',
            MEMORY_AVAILABLE: '可用内存',
            MEMORY_USAGE_SCAP: '内存用量',
            DISK_SPACE_AVAILABLE: '本地磁盘可用空间',
            DISK_SPACE_USAGE: '本地磁盘空间利用率',
            DISK_READ_IOPS: '本地磁盘读取 IOPS',
            DISK_WRITE_IOPS: '本地磁盘写入 IOPS',
            DISK_READ_THROUGHPUT: '本地磁盘读取吞吐量',
            DISK_WRITE_THROUGHPUT: '本地磁盘写入吞吐量',
            DATA_SEND_RATE: '网络发送数据速率',
            DATA_RECEIVE_RATE: '网络接收数据速率',
            'cpu usage': 'CPU用量',
            'memory utilisation (including cache)': '内存使用率(包含缓存)',
            MEMORY_USAGE_CACHE: '内存用量（包含缓存）',
            'memory usage': '内存用量',
            UNAVAILABLE_REPLICAS: '副本不可用率',
            'Unavailable deployment replicas ratio': '部署副本不可用率',
            'Unavailable daemonset replicas ratio': '守护进程集副本不可用率',
            'Unavailable statefulset replicas ratio': '有状态副本集副本不可用率',
            
            SELECT_NODE_TIP: '请选择至少一个集群节点。',
            SELECT_WORKLOAD_TIP: '请选择至少一个工作负载。',
            
            REQUESTS_FOR_TRIGGER_AN_ALARM_Q: '如何触发告警消息？',
            REQUESTS_FOR_TRIGGER_AN_ALARM_A:
              '您需要对资源设置告警策略，当资源的某项指标达到告警策略的阈值后即会触发告警消息。',
            REQUESTS_FOR_PUSH_AN_ALARM_Q: '如何在告警策略触发后接收告警消息？',
            REQUESTS_FOR_PUSH_AN_ALARM_A:
              '平台管理员需要选择告警通知的方式并配置与该方式对应的服务器。',
            HOW_TO_SUPRESS_AN_ALARM_Q: '如何对告警消息进行抑制？',
            HOW_TO_SUPRESS_AN_ALARM_A:
              '您可以对每条告警策略进行多级别的设置，每个级别对应不同的告警周期。',
            
            ALERT_DURATION:
              '告警规则中设置的情形持续时间达到该阈值后，告警策略将变为触发中状态。',
            ALERT_RULE_INACTIVE: '未触发',
            ALERT_RULE_PENDING: '待触发',
            ALERT_RULE_FIRING: '触发中',
            ALERT_RULE_HEALTH_OK: '健康',
            ALERT_RULE_HEALTH_ERR: '错误',
            ALERT_RULE_HEALTH_UNKNOWN: '未知',
            
            ALERT_RULE_EXPRESSION_DESC:
              '您可以通过 PromQL 语句来自定义告警规则。<a href="https://prometheus.io/docs/prometheus/latest/querying/basics/" target="_blank" rel="noreferrer noopener">了解更多</a>',
            
            // Alerting Messages
            ALERTING_MESSAGE_PL: '告警消息',
            NO_DATA_DESC: '未发现数据',
            MONITORING_TARGET: '监控目标',
            
            // Alerting Policies
            ALERTING_POLICIES: '告警策略',
            MESSAGE_SETTINGS: '消息设置',
            DEPLOYMENT: '部署',
            DEPLOYMENT_PL: '部署',
            STATEFULSET: '有状态副本集',
            STATEFULSET_PL: '有状态副本集',
            DAEMONSET: '守护进程集',
            DAEMONSET_PL: '守护进程集',
            DEPLOYMENTS_VALUE: '部署：{value}',
            STATEFULSETS_VALUE: '有状态副本集数量：{value}',
            DAEMONSETS_VALUE: '守护进程集数量：{value}',
            
            // Alerting Policies > Details
            NOTIFICATION_SUMMARY_COLON: '概括：',
            DETAILS_COLON: '详情：',
            MONITORING_TARGETS_SCAP: '监控目标',
            ALERTING_RULE_SCAP: '告警规则',
            THRESHOLD_DURATION: '告警持续时间',
}
