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
  SELECT_PROJECT_DESC: '选择将要创建资源的项目。',
  PROJECT_EMPTY_DESC: '请选择一个项目。',
  REPLICA_LOW_SI: '副本',
  REPLICA_LOW_PL: '副本',
  IMAGE_TIME_SIZE_LAYER: '更新于 {time}',
  IMAGE_TIME_SIZE_LAYER_PL: '更新于 {time}，{size}，{layer} 层',
  IMAGE_TIME_SIZE_LAYER_SI: '更新于 {time}，{size}，{layer} 层',
  CPU_REQUEST: 'CPU 预留',
  CPU_LIMIT: 'CPU 限制',
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
  ADD_RULE: '添加规则',
  RULE_NOT_COMPLETE: '请设置完整规则。',
  SCHEDULE_WITH_TARGET: '与目标调度到一起',
  SCHEDULE_AWAY_FROM_TARGET: '远离目标调度',
  MATCH_IF_POSSIBLE: '尽可能匹配',
  MUST_MATCH: '必须匹配',
  MOUNT_PATH_EMPTY: '请输入挂载路径。',
  GPU_TYPE: 'GPU 类型',
  GPU_LIMIT: 'GPU 限制',
  CONFIGMAP: '配置字典',
  CONFIGMAP_PL: '配置字典',
  CONFIGMAPS: '配置字典',
  CONFIGMAP_LOW: '配置字典',
  PARTITION_ORDINAL: '容器组副本分组序号',
  SERVICE_TOPOLOGY: '服务拓扑',
  CLUSTER_DIFF: '集群差异设置',
  PARTITION_ORDINAL_DESC: '设置一个分组序号以将容器组副本分成两组。更新有状态副本集时，只有序号大于或等于分组序号的容器组副本会被更新。',
  QOS_CLASS: 'QoS 类别',
  'Access Mode': '访问模式',
  'Add argument': '添加参数',
  EDGENODE_CONFIG_COMMAND: '边缘节点配置命令',
  'Add command': '添加命令',
  'Add Container': '添加容器',
  ADD_ENVIRONMENT_VARIABLE: '添加环境变量',
  'Add Existing Volume': '添加已有存储卷',
  'Add HostPath': '添加 HostPath',
  ADD_LABEL: '添加标签',
  'Add Labels': '添加标签',
  ADD_METADATA: '添加元数据',
  'Add new container': '添加新的容器',
  ADD_NODE_SELECTOR: '添加节点选择器',
  ADD_PORT: '添加端口',
  'Add Probe': '添加探针',
  'Add Temporary Volume': '添加临时存储卷',
  'Add Volume': '添加存储卷',
  'Add Volume Template': '添加存储卷模板',
  'Adding new contianer': '正在添加新的容器',
  'Additional metadata settings for resources such as Labels and Annotations.': 'Additional metadata settings for resources such as Labels and Annotations.',
  'Additional metadata settings for resources.': '对资源进行额外的元数据设置',
  ADD_METADATA_DESC: '为资源添加元数据。',
  ROUTE_ADD_METADATA_DESC: '为路由添加元数据。',
  SERVICE_ADD_METADATA_DESC: '为服务添加元数据。',
  VOLUME_ADD_METADATA_DESC: '为存储卷添加元数据。',
  WORKLOAD_ADD_METADATA_DESC: '为工作负载添加元数据。',
  POD_ADD_METADATA_DESC: '为容器组副本添加元数据。',
  'Advanced Options': '高级选项',
  'Applied to the workload': '应用于工作负载',
  Argument: '参数',
  ARGUMENTS: '参数',
  'Available number of nodes scheduled': '可用节点数',
  'Can be found by node IP or node name': '可以通过节点 IP 或者节点名称查找',
  CAPACITY: '容量',
  capacity: '容量',
  SELECT_VOLUME: '选择存储卷',
  SELECT_TYPE: '選擇{type}',
  SPECIFY_SUBPATH: '指定子路径',
  'Cluster Resource Status': '集群资源状态',
  'Coding Mode': '代码模式',
  'Collecting file log': '收集落盘日志',
  Commands: '命令',
  CONCURRENCY_POLICY: '并发策略',
  RUN_JOBS_CONCURRENTLY: '同时运行任务',
  SKIP_NEW_JOB: '跳过新任务',
  SKIP_OLD_JOB: '跳过旧任务',
  'Config Template': '配置模板',
  'Container Config': '容器配置',
  'Container CPU Resource Request, 1 Core = 1000m': '容器的 CPU 资源预留值, 1核 = 1000m',
  CONTAINERS: '容器',
  CONTAINER_IMAGE: '容器镜像',
  ADD_CONTAINER: '添加容器',
  LIVENESS_CHECK: '存活检查',
  CONTAINER_LOG_PATH: '容器日志路径',
  CONTAINER_LOGS: '容器日志',
  'Container Memory Resource Request': '容器的 内存 资源预留值',
  CONTAINER_NAME: '容器名称',
  READINESS_CHECK: '就绪检查',
  CONTAINER_SECURITY_CONTEXT: '容器安全上下文',
  'Container Setting': '容器设置',
  STARTUP_CHECK: '启动检查',
  CONTAINER_TYPE: '容器类型',
  ContainerCreating: '容器创建中',
  ContainerNotReady: '容器没有准备就绪',
  ContainersNotInitialized: '容器未初始化',
  ContainersNotReady: '容器没有准备就绪',
  TARGET_CPU_USAGE_UNIT: '目标 CPU 用量（%）',
  'CPU(m)': 'CPU(m)',
  CrashLoopBackOff: '容器退出，kubelet 正在将它重启',
  CreateContainerConfigError: '不能创建 kubelet 使用的容器配置',
  CreateContainerError: '创建容器失败',
  created: '已创建',
  CronJob: '定时任务',
  CRONJOB: '定时任务',
  CRONJOB_PL: '定时任务',
  NUMBER_OF_CRONJOBS: '定时任务数量',
  CRONJOB_LOW: '定时任务',
  'CronJob Settings': '定时任务设置',
  'Current number of nodes scheduled': '当前节点数',
  REPLICAS_CURRENT: '当前副本数',
  'Current Revision': '当前版本',
  'Current Stage(phase)': 'Current Stage(phase)',
  CURRENT_REVISION_RECORD: '当前修改记录',
  CURRENT_STATUS: '当前状态',
  'Current Utilization': '当前使用率',
  LOCATION: '位置',
  REPLICA_SCHEDULING_MODE: '副本调度模式',
  POD_SCHEDULING_RULES: '容器组调度规则',
  POD_SCHEDULING_RULES_DESC: '设置容器组副本调度到节点的规则。',
  DeploymentPaused: '部署中止',
  DeploymentResumed: '部署已恢复',
  'Desired number of nodes scheduled': '期望节点数',
  'Desired Replicas': '期望副本',
  DockerDaemonNotReady: 'Docker 还没有完全启动',
  EDIT_SETTINGS: '编辑设置',
  EDIT_APP_SETTINGS: '编辑应用设置',
  EDIT_CONTAINER: '编辑容器',
  EDIT_LABELS: '编辑标签',
  EDIT_YAML: '编辑 YAML',
  YAML_FILE: 'YAML 文件',
  EmptyDir: '临时存储卷',
  Environment: '环境变量',
  ENVIRONMENT_VARIABLE_PL: '环境变量',
  ENVIRONMENT_VARIABLE: '环境变量',
  'environment variables': '环境变量',
  ErrImageNeverPull: '当前策略禁止拉取镜像',
  ErrImagePull: '镜像拉取失败',
  EVERY_DAY: '0 0 * * * （每天）',
  EVERY_HOUR: '0 * * * * （每小时）',
  EVERY_MONTH: '0 0 1 * * （每月）',
  EVERY_WEEK: '0 0 * * 0 （每周）',
  'Exec Command Check': 'Exec Command Check',
  'Every Day': 'Every Day',
  'Every Hour': 'Every Hour',
  'Every Month': 'Every Month',
  'Every Week': 'Every Week',
  RUNNING_RECORDS: '运行记录',
  EXISTING_VOLUME: '现有存储卷',
  FailedCreate: '创建失败',
  FailedDelete: '删除失败',
  FAILURE_THRESHOLD: '失败阈值',
  FAILED_JOBS_RETAINED: '失败任务保留数量',
  'File List': '文件列表',
  'for example': '例如',
  FoundNewReplicaSet: '发现新副本',
  HORIZONTAL_POD_AUTOSCALING: '容器组水平自动扩缩',
  AUTOSCALING: '自动伸缩',
  HPA_SET_TIP: '已设置容器组水平自动扩缩策略。',
  'Host Path': '主机路径',
  'Host Port': '节点端口',
  POD_SCHEDULING_METHOD: '容器组调度方式',
  HTTP_REQUEST: 'HTTP 请求',
  HTTP_PATH_EMPTY: '请设置 HTTP 检查的路径。',
  IMAGE: '镜像',
  IMAGE_VALUE: '镜像：{value}',
  IMAGE_ID: '镜像 ID',
  'Image Name': '镜像名称',
  IMAGE_PULL_POLICY: '镜像拉取策略',
  ImageInspectError: '无法校验镜像',
  ImagePullBackOff: '正在重试拉取镜像',
  'Initial Delay': '初始延迟',
  INITIAL_DELAY_S: '初始延迟（s）',
  INITIAL_DELAY_TIMEOUT_VALUE: '{delay}s 初始延迟, {timeout}s 超时时间',
  'Instance Status': '实例状态',
  'Invalid image': 'Invalid image',
  'Invalid name': '名称格式不合法。{message}',
  'Invalid pod': '容器组数量格式不合法',
  INVALID_IMAGE: '镜像无效。',
  INVALID_NAME_DESC: '名称无效。{message}',
  InvalidImageName: '无法解析镜像名称',
  'is running': '正在运行',
  Job: '任务',
  JOB: '任务',
  'Job Settings': '任务设置',
  STRATEGY_SETTINGS: '策略设置',
  'Job Template': '任务模板',
  EMPTY_LABEL_DESC: '请添加标签。',
  LABEL_EXIST_DESC: '标签已存在，请输入其他标签。',
  ADD_CONTAINER_DESC: '自定义容器的设置以创建容器。',
  'Labels cannot be empty': '标签不能为空',
  DUPLICATE_LABELS: '无法添加重复标签。',
  layers: '层级',
  LIVENESS_PROBE: '存活探针',
  'log path relative to container mount path': '日志路径相对于容器挂载路径',
  'm.internalLifecycle.PreStartContainer': '执行 hook 报错',
  MAXIMUM_REPLICAS: '最大副本数',
  MAX_SURGE_POD_VALIDATOR: 'MAX_SURGE_POD_VALIDATOR',
  'Maximum number of replicas': '副本数量的上限',
  TARGET_MEMORY_USAGE_UNIT: '目标内存用量（MiB）',
  'Memory Target Utilization': '内存目标使用率',
  MINIMUM_REPLICAS: '最小副本数',
  'min replicas number should not be greater than max replicas number': '最大副本数应不小于最小副本数',
  MinimumReplicasAvailable: '最小副本可用',
  MinimumReplicasUnavailable: '最小副本不可用',
  MIN_READY_SECONDS: '容器组就绪最短运行时长（s）',
  Mount: '挂载',
  MOUNT_CONFIGMAP_OR_SECRET: '挂载配置字典或保密字典',
  MOUNT_PATH: '挂载路径',
  MOUNT_PATH_IN_USE: '挂载路径已被使用，请输入其他挂载路径。',
  'Mount point': '挂载点',
  'Mount Temporary Volume': '挂载临时存储卷',
  MOUNT_CONFIGMAP_OR_SECRET_DESC: '将配置文件或密钥挂载至指定目录',
  'Mount Volume': '挂载存储卷',
  VOLUME_SETTINGS: '存储卷设置',
  mounted: '已挂载',
  NetworkPluginNotReady: '网络插件还没有完全启动',
  'New Volume': '新建存储卷',
  NewReplicaSetAvailable: '可用新副本',
  NewReplicaSetCreated: '已创建新副本',
  NO_DEFAULT_PORT: '暂无默认端口配置',
  NO_LIMIT: '不限制',
  'No related resources found with the current workload(s)': '当前工作负载下没有关联的资源',
  NO_RELATED_RESOURCE_FOUND: '没有相关的资源',
  NO_REQUEST: '不预留',
  NO_REQUEST_TCAP: '不预留',
  NO_LIMIT_TCAP: '不限制',
  NO_RESOURCE_LIMIT: '无资源限制',
  'No Request': '不预留',
  'No resource limits': 'No resource limits',
  NODE_NAME: '节点名称',
  SCHEDULING_RESULT: '调度结果',
  NO_IMAGE_FOUND: '没有找到镜像',
  ONDELETE: '删除容器组时更新',
  CHECK_INTERVAL_S: '检查间隔（s）',
  CONTAINER_EMPTY_DESC: '请至少添加一个容器。',
  'Please add at least one volume': '请至少添加一个存储卷',
  'Please add at least one volume or volume template': '请至少添加一个存储卷或存储卷模板',
  ENTER_SCHEDULE_TIP: '请选择定时计划。',
  'Please input command': 'Please input command',
  MOUNT_VOLUME: '挂载存储卷',
  MOUNT_VOLUME_OR_TEMPLATE: '挂载存储卷或存储卷模板',
  'Please input a schedule.': 'Please input a schedule.',
  PROBE_COMMAND_EMPTY: '请输入至少一条命令。',
  'Please input mount point': '请输入挂载点',
  'Please input port': '请输入端口',
  VOLUME_NAME_EMPTY: '请为存储卷设置名称。',
  CONFIGMAP_NOT_SELECT: '请选择配置字典。',
  SECRET_NOT_SELECT: '请选择保密字典。',
  'Please select a storage class': '请选择存储卷类型',
  VOLUME_NOT_SELECT: '请选择存储卷。',
  CONTAINER_NOT_SELECTED: '请将存储卷挂载到至少一个容器组。',
  SET_IMAGE_DESC: '为容器设置镜像。',
  'Please select protocol': '请选择协议',
  TARGET_REVISION_EMPTY_DESC: '请选择目标修改记录。',
  'Please specify an image': '请指定镜像',
  READ_WRITE_MOUNT_EMPTY: '请指定读写方式及挂载路径。',
  CENTRALIZED_SCHEDULING: '集中调度',
  'Pod CPU Request': '容器组CPU请求',
  'Pod Decentralized Deployment': 'Pod Decentralized Deployment',
  'Pod Default Deployment': 'Pod Default Deployment',
  POD_IP_ADDRESS: '容器组 IP 地址',
  POD_IP_ADDRESS_SCAP: '容器组 IP 地址',
  'Pod Memory Request': '容器组内存预留',
  POD_REPLICAS: '容器组副本数量',
  DEFAULT_RULES: '默认规则',
  DEFAULT_RULES_DESC: '按照默认的规则将容器组副本调度到节点。',
  'Pod replicas will be deployed on different nodes as much as possible.': '容器组副本将会尽量分散在不同的节点中',
  'Pod replicas will be deployed on the same node as much as possible.': '容器组副本将会尽量部署在同一节点上',
  'Pod replicas will be deployed according to user customization.': '容器组副本将根据用户自定义规则部署',
  'Pod Security Context': '容器组 Security Context',
  DECENTRALIZED_SCHEDULING: '分散调度',
  CUSTOM_RULES: '自定义规则',
  CUSTOM_RULES_DESC: '按照自定义的规则将容器组副本调度到节点。',
  'Pod IP': 'Pod IP',
  DECENTRALIZED_SCHEDULING_DESC: '尽可能将容器组副本调度到不同的节点上。',
  CENTRALIZED_SCHEDULING_DESC: '尽可能将容器组副本调度到同一节点上',
  POD_SECURITY_CONTEXT: '容器组安全上下文',
  'Pod Status': '容器组运行状态',
  POD_STATUS_ANALYSIS: '容器状态分析',
  POD_REASON_FAILEDCREATE: '创建失败',
  POD_REASON_FAILEDDELETE: '删除失败',
  POD_REASON_SUCCESSFULCREATE: '创建成功',
  POD_REASON_SUCCESSFULDELETE: '删除成功',
  PodInitializing: '容器组初始化中',
  'Pods List': '容器组列表',
  Port: '端口',
  'Port(s)': '端口',
  ports: '端口',
  PostStartHookError: '执行 hook 报错',
  'Private Registry': '私有仓库',
  Privileged: '特权模式',
  PROBE_PL: '探针',
  ProgressDeadlineExceeded: '处理超时',
  Protocols: '协议',
  PROVISIONER: '供应者',
  'Read Write Mode': '读写模式',
  READINESS_PROBE: '就绪探针',
  SIMULTANEOUS_UPDATE: '同时更新',
  RECREATE: '重新创建',
  RECREATE_SUCCESS_DESC: '重新创建成功。',
  REGISTRY: '仓库',
  RegistryUnavailable: '无法连接镜像仓库',
  REPLICA_STATUS: '副本运行状态',
  'Replicas Number': '副本数量',
  ReplicaSetCreateError: '新建副本错误',
  ReplicaSetUpdated: '副本已更新',
  'request CPU should not be greater than limit CPU': '最小使用 CPU 值应不大于最大使用 CPU 值',
  'request memory should not be greater than limit memory': '最小使用内存值应不大于最大使用内存值',
  'Request Type': '请求类型',
  RERUN: '重新执行',
  'Resource Info': '资源信息',
  'Resource Limit': '资源限制',
  RESOURCE_LIMITS: '资源限制',
  'Resource limits remaining quota': '资源限制剩余配额',
  RESOURCE_NAME: '资源名称',
  'Resource Request': '资源预留',
  RESOURCE_REQUESTS: '资源预留',
  'Resource requests remaining quota': '资源预留剩余配额',
  RESOURCE_STATUS: '资源状态',
  RESTART_PL: '重启次数',
  RESTART_POLICY: '重启策略',
  Revision: '版本',
  REVISION_RECORDS: '修改记录',
  'Revision Rollback': '版本回退',
  'Rollback Revisions': '回退版本',
  REVISION_RECORD: '修改记录',
  ROLL_BACK: '回退',
  EDIT_AUTOSCALING: '编辑自动伸缩',
  TARGET_REVISION_RECORD: '目标修改记录',
  RollingUpdate: '滚动更新',
  ROLLING_UPDATE_RECOMMENDED: '滚动更新（推荐）',
  RunContainerError: '启动容器失败',
  Schedule: '定时计划',
  SCHEDULED_TO_NODE: '调度至 {value}',
  SCHEDULING_NOT_SUCCESSFUL: '调度未成功',
  SCHEDULING_INFORMATION: '调度信息',
  'Select by Node': '指定节点',
  RESOURCE: '资源',
  SELECT_SPECIFIC_KEYS: '选择特定键',
  'Service Configuration': '服务配置',
  'Service Labels': '服务标签',
  SESSION_AFFINITY: '会话亲和性',
  SELECTOR: '选择器',
  'Set Mount Path': '设置挂载路径',
  SELECT_NODES: '选择节点',
  'Specify Replicas Number': '指定副本数量',
  SYNC_HOST_TIMEZONE: '同步主机时区',
  MAXIMUM_DELAY: '最大启动延后时间（s）',
  STARTUP_PROBE: '启动探针',
  'Storage Size': '存储大小',
  'Strategy Type': '策略类型',
  SUBPATH: '子路径',
  SUCCESS_THRESHOLD: '成功阈值',
  SuccessfulCreate: '创建成功',
  SuccessfulDelete: '删除成功',
  SUCCESSFUL_JOBS_RETAINED: '成功任务保留数量',
  WORKLOAD_MOUNT_VOLUME_DESC: '为容器挂载现有存储卷、临时存储卷或 HostPath 存储卷。',
  'Sure to delete the workload(s)?': '确认删除工作负载',
  'target port': '目标端口',
  TARGET_MEMORY_USAGE: '目标内存用量',
  TARGET_CPU_USAGE: '目标 CPU 用量',
  'TCP Port Check': 'TCP Port Check',
  'Temporary Volume': 'Temporary Volume',
  CONCURRENCY_POLICY_DESC: '定时任务创建的多个任务发生重叠时，系统采取的策略。',
  FAILED_JOBS_RETAINED_DESC: '允许保留的失败任务的个数。默认值为 1。',
  SUCCESSFUL_JOBS_RETAINED_DESC: '允许保留的成功任务的个数。默认值为 3。',
  'Timeout(s)': 'Timeout(s)',
  TCP_PORT: 'TCP 端口',
  TEMPORARY_VOLUME: '临时存储卷',
  HOSTPATH_VOLUME: 'HostPath 存储卷',
  'The concurrency policy setting.': 'The concurrency policy setting.',
  'The minimum of the replicas that can be set by HPA': '弹性伸缩可以设置的副本数量的下限',
  'The number of failed jobs allowed to be retained.': 'The number of failed jobs allowed to be retained.',
  'The number of successful jobs allowed to be retained.': 'The number of successful jobs allowed to be retained.',
  TIMEOUT_PERIOD_S: '超时时间（s）',
  'UI Mode': '界面模式',
  'Update Strategy': '更新策略',
  UPDATE_STRATEGY: '更新策略',
  USE_CONFIGMAP_OR_SECRET: '引用配置文件或密钥',
  USE_DEFAULT_PORT: '使用默认端口',
  USER_AND_USER_GROUP: '用户和用户组',
  USER_GROUP: '用户组',
  VIEW_YAML: '查看 YAML',
  VOLUME_CAPACITY_TCAP: '存储卷容量',
  'Volume Name': 'Volume Name',
  'Volume Source': '存储卷来源',
  DISK_LOG_COLLECTION_Q: 'What is disk log collection?',
  'What is Disk Log Collection?': '什么是落盘日志收集？',
  COLLECT_LOGS_ON_VOLUMES_Q: '如何收集存储卷上的日志？',
  'Worker Container': 'Worker Container',
  VOLUME_CAPACITY: '存储卷容量',
  VOLUME_NAME: '存储卷名称',
  WORKER_CONTAINER: '工作容器',
  Workload: '工作负载',
  WORKLOAD: '工作负载',
  WORKLOAD_PL: '工作负载',
  WORKLOAD_LOW: '工作负载',
  'Not Limited': '未限制',
  Cost: '占用',
  PROJECT_REMAINING_QUOTAS: '项目剩余配额',
  WORKSPACE_REMAINING_QUOTAS: '企业空间剩余配额',
  QUOTA_OVERCOST_TIP: '当前资源占用已超过剩余配额',
  WORKLOAD_REASON_DEPLOYMENTPAUSED: '部署中止',
  WORKLOAD_REASON_DEPLOYMENTRESUMED: '部署已恢复',
  WORKLOAD_REASON_FAILEDCREATE: '创建失败(FailedCreate)',
  WORKLOAD_REASON_FOUNDNEWREPLICASET: '发现新副本集',
  WORKLOAD_REASON_MINIMUMREPLICASAVAILABLE: '达到最小可用副本数量',
  WORKLOAD_REASON_MINIMUMREPLICASUNAVAILABLE: '未达到最小可用副本数量',
  WORKLOAD_REASON_NEWREPLICASETAVAILABLE: '新副本集可用',
  WORKLOAD_REASON_NEWREPLICASETCREATED: '已创建副本集',
  WORKLOAD_REASON_PROGRESSDEADLINEEXCEEDED: '进程超时',
  WORKLOAD_REASON_REPLICASETCREATEERROR: '副本集创建错误',
  WORKLOAD_REASON_REPLICASETUPDATED: '副本集已更新',
  Workloads: '工作负载',
  SELECT_NODES_DESC: '将容器组副本分配给特定的节点。您可以使用标签选择节点或手动指定节点。',
  WORKLOAD_SPECIFY_NODE_DESC: '将容器副本分配给特定节点。',
  WORKLOAD_DESC: '工作负载（Workload）用于处理业务请求，可包含一个或多个容器组。日志、监控等系统功能也是由工作负载实现的。',
  DEPLOYMENT_DESC: 'Deployment provides fine-grained management of common applications in KubeSphere. Deployment configuration describes the desired state of specific components of an application as Pod templates.',
  DEPLOYMENT_EMPTY_DESC: '请创建一个部署。',
  STATEFULSET_DESC: 'StatefulSet is used to manage stateful applications, manages the deployment and scaling of a set of Pods, and provides guarantees about the ordering and uniqueness of these Pods.',
  STATEFULSET_EMPTY_DESC: '请创建一个有状态副本集。',
  DAEMONSET_DESC: 'A DaemonSet ensures that all (or some) Nodes run a copy of a Pod. Typically, a DaemonSet is used to running a logs collection, monitoring daemon or other system management applications.',
  DAEMONSET_EMPTY_DESC: '请创建一个守护进程集。',
  JOB_DESC: '任务（Job）用于运行短暂的一次性任务。任务会创建一个或多个容器组，并保证指定数量的容器组成功结束。',
  JOB_EMPTY_DESC: '请创建一个任务。',
  CRONJOB_DESC: '定时任务（CronJob）管理基于时间的任务（Job），可用于运行周期性任务或重复性任务。',
  CRONJOB_EMPTY_DESC: '请创建一个定时任务。',
  CRONJOB_NAME_DESC: '最长 52 个字符，只能包含小写字母、数字及分隔符("-")，且必须以小写字母或数字开头及结尾',
  CRONJOB_NAME_TOO_LONG: '最长 52 个字符',
  ADJUST_REPLICAS: '调整副本数量',
  REPLICAS_SCALE_NOTIFY_CONTENT: '您确定将容器组副本数量调整为 <strong>{num}</strong> 吗？',
  REPLICAS_SCALE_NOTIFY_CONFIRM: '确定（{seconds}s）',
  REPLICAS_SCALE_NOTIFY_CANCEL: '取消',
  ROLLING_UPDATE_SETTINGS: '滚动更新设置',
  MAX_UNAVAILABLE_PODS: '最大不可用容器组数量',
  MAX_EXTRA_PODS: '最大多余容器组数量',
  UPDATE_STRATEGY_DESC: '配置升级过程中替换容器组的策略 <a href="{link}" target="_blank">了解更多</a>',
  MAX_UNAVAILABLE_PODS_DESC: '更新过程中允许的不可用容器组副本的最大数量或百分比。',
  MAX_DEPLOY_UNAVAILABLE_POD_DESC: '升级过程中不可用副本的最大数量或百分比',
  MAX_EXTRA_PODS_DESC: '更新过程中允许的多余容器组副本的最大数量或百分比。',
  ROLLING_UPDATE_POD_TIP: '更新时，会根据当前容器组的副本数对最小可用及最大数量进行限制；最小容器组数不可以超过当前副本数，且最大容器组数量不能超过当前副本数的2倍。',
  ONDELETE_DESC: '需要手动删除容器组副本才能对其进行更新。',
  ROLLINGUPDATE_DESC: '用新容器组副本逐步替换旧容器组副本。升级过程中业务流量会负载均衡到新旧容器组副本上，业务不会中断。',
  SIMULTANEOUS_UPDATE_DESC: '删除全部旧容器组副本再创建新容器组副本。升级过程中业务会中断。',
  STATEFULSET_PARTITION_DESC: '当更新有状态副本集时，将更新具有大于或等于 partition 的序数的所有容器组',
  PARTITION_ORDINAL_EMPTY: '请设置容器组副本分组序号。',
  MIN_READY_SECONDS_DESC: '容器组副本被视为就绪所需要的最短稳定运行时长。',
  MIN_READY_SECONDS_EMPTY: '请设置容器组副本被视为就绪所需要的最短稳定运行时长。',
  IMAGE_PLACEHOLDER: '镜像名称或路径，例如 nginx:latest',
  IMAGE_EMPTY: '请设置镜像。',
  IMAGE_REGISTRY_PLACEHOLDER: '请选择镜像仓库密钥',
  IMAGE_DESC: '如需使用私有镜像仓库，您需要先创建镜像仓库密钥。<a href={link} target="_blank">了解更多</a>',
  REPLICAS_DESC: '{module}将会被创建，由它维护集群中容器组的所需数量',
  VOLUME_SUB_TEXT: 'Volumes used by the containers of the workload',
  EMPTYDIR_DESC: 'Temporary storage created for the workload',
  HOSTPATH_DESC: 'A HostPath volume mounts a file or directory from the host node’s filesystem into your Pod.',
  PORT_INPUT_DESC: '端口名称已存在，请输入其他名称。',
  PORT_NAME_DESC: '端口名称只能包含小写字母、数字和连字符（-），必须以小写字母或数字开头和结尾，最长 63 个字符。',
  WORKLOAD_PORT_NAME_DESC: '端口名称只能包含小写字母、数字及分隔符（-），且必须以小写字母或数字开头及结尾，最长 15 个字符。',
  DEPLOYMENTS_BASEINFO_DESC: '您可以给部署起一个名字，以便在使用的时候容易区分。',
  DEPLOYMENT_POD_TEMPLATE_DESC: '工作负载可以根据容器组模板以及您设置的副本数量，自动生成指定数量的容器组',
  DEPLOYMENTS_VOLUME_DESC: '可以将同一个临时存储卷或持久化存储卷挂载至部署的容器组的各个副本内。',
  DEPLOYMENT_LABEL_SETTINGS_DESC: '标签是一个或多个关联到资源如容器组上的键值对，我们通常通过标签来识别、组织或查找资源对象',
  DEPLOYMENT_NODE_SELECT_DESC: '通过使用选择器将容器组调度到期望运行的节点上，这些选择器是一组或多组键值对匹配节点标签。',
  DEPLOYMENT_JOB_SETTINGS_DESC: '您可以在此配置任务 (Job) 的 Job Spec 格式，Job Controller 负责根据 Job Spec 创建 Pod，并持续监控 Pod 的状态，直至其成功结束。如果失败，则根据 RestartPolicy（支持 OnFailure 和 Never）决定是否创建新的 Pod 再次重试任务。',
  DEPLOYMENT_CRONJOB_SETTINGS_DESC: '您可以在此配置定时任务 (CronJob) 的 Job Spec 格式，Job Controller 负责根据 Job Spec 创建 Pod，并持续监控 Pod 的状态，直至其成功结束。如果失败，则根据 RestartPolicy（支持 OnFailure 和 Never）决定是否创建新的 Pod 再次重试任务。',
  STATEFULSETS_VOLUME_TEMPLATE_DESC: '为有状态副本集的每个容器组创建专属的持久化存储卷，并挂载至相应的容器组',
  STATEFULSETS_ADD_VOLUME_TEMPLATE_DESC: '请添加一个存储卷模板',
  STATEFULSETS_BASEINFO_DESC: '您可以给有状态副本起一个名字，以便在使用的时候容易区分。',
  STATEFULSETS_SERVICE_CONFIG_DESC: '集群不为服务生成 IP，集群内部通过服务的后端 Endpoint IP 直接访问服务。此类型适合后端异构的服务，比如需要区分主从的服务。',
  DAEMONSETS_BASEINFO_DESC: '守护进程集保证在每个主机上都运行一个容器副本，常用来部署一些集群的日志、监控或者其他系统管理应用。',
  DAEMONSETS_VOLUME_DESC: '可将 HostPath，临时存储卷，持久化存储卷挂载至守护进程集的容器组内。',
  JOBS_BASEINFO_DESC: '',
  JOBS_POD_TEMPLATE_DESC: '指定任务中运行的容器组模板',
  JOBS_VOLUME_DESC: '可以将临时存储卷，持久化存储卷挂载至任务的容器组内。',
  MAXIMUM_RETRIES: '最大重试次数',
  MAXIMUM_RETRIES_DESC: '将任务标记为失败前的最大重试次数。默认值为 6。',
  PARALLEL_PODS_DESC: '并行运行的容器组数量。',
  COMPLETE_PODS_DESC: '将任务标记为完成所需成功运行的容器组数量。',
  MAXIMUM_DURATION_DESC: '任务的最大运行时间。任务达到最大运行时间时将被结束。',
  PARALLEL_PODS: '并行容器组数量',
  COMPLETE_PODS: '容器组完成数量',
  MAXIMUM_DURATION: '最大运行时间（s）',
  RESTART_POLICY_TIP: 'RestartPolicy 只能指定 Never 或 OnFailure，当任务未完成的情况下：<br/>* 如果 RestartPolicy 指定 Never，则任务会在容器组出现故障时创建新的容器组，且故障容器组不会消失。<br/>* 如果 RestartPolicy 指定 OnFailure，则任务会在容器组出现故障时其内部重启容器，而不是创建容器组。',
  RESTART_POLICY_NEVER_DESC: '重新创建容器组',
  RESTART_POLICY_ONFAILURE_DESC: '重启容器',
  CRONJOBS_BASEINFO_DESC: '创建定时任务所需的基本信息，需指定名称与定时计划',
  CRONJOBS_VOLUME_DESC: '可以将临时存储卷，持久化存储卷挂载至定时任务的容器组内。',
  CRONJOB_CRON_DESC: '为定时任务设置定时计划。KubeSphere 默认使用 UTC 时间, 您需要根据时区调整定时计划。<a href="//en.wikipedia.org/wiki/Cron" target="_blank">了解更多</a>',
  MAXIMUM_DELAY_DESC: '由于某种原因未能按计划启动任务时，任务启动的最大延后时间。',
  VOLUME_EMPTY_TIP: 'No created volumes, please',
  HOST_PATH_DESC: 'HostPath 允许挂载主机上的文件系统到容器组里面去。如果容器组需要使用主机上的文件，可以使用 HostPath。',
  SELECT_SPECIFIC_KEYS_DESC: '选择需要挂载到容器的特定键。',
  EMPTY_DIR_DESC: '临时存储卷随 Pod 被分配在主机上。当 Pod（不管任何原因）从主机上被删除时，临时存储卷也同时会删除，存储卷的数据也将永久删除。<br />注：删除容器不影响临时存储卷。',
  SELECT_VOLUME_TYPE_DESC: '您可以根据需要选择适合您的存储卷类型进行添加',
  MOUNT_VOLUME_DESC: '持久化存储卷请选择支持多节点读写模式 (ROX 或者 RWX) 的存储卷，否则可能因容器组不在同一节点导致容器组更新失败。如果您选择了单节点读写 (RWO) 模式的存储卷您也可以通过节点选择将容器组安排在同一节点上来避免因存储卷访问模式造成的更新错误。',
  TARGET_CPU_USAGE_DESC: '当实际 CPU 用量大于/小于目标值时，系统自动减少/增加容器组副本数量。',
  TARGET_MEMORY_USAGE_DESC: '当实际内存用量大于/小于目标值时，系统自动减少/增加容器组副本数量。',
  MINIMUM_REPLICAS_DESC: '设置允许的最小容器组副本数量，默认值为 1。',
  MAXIMUM_REPLICAS_DESC: '设置允许的最大容器组副本数量，默认值为 1。',
  REPLICAS_PLACEHOLDER: '默认值: 1',
  ADD_VOLUME_TEMPLATE_DESC: '添加存储卷模板，存储卷的生命周期将随容器组的生命周期存在',
  MORE: '更多操作',
  REVISION_ROLLBACK_SELECT: '请选择要回退的版本',
  REVISION_TITLE: '{name}版本',
  PROBE_TIME: '初始延时: {delay}s 超时时间:{timeout}s',
  INITIAL_DELAY_DESC: '容器启动后探针启动前的延迟时间。',
  TIMEOUT_PERIOD_DESC: '探针超时时间。探针超时后，检查将被视为失败。取值必须为整数，最小值为 0。',
  CHECK_INTERVAL_DESC: '执行检查的时间间隔。取值必须为整数，最小值为 1。',
  SUCCESS_THRESHOLD_DESC: '检查失败后再次被视为成功所需的最小连续成功次数。最小值为 1。对于存活探针和启动探针，此参数值必须为 1。',
  FAILURE_THRESHOLD_DESC: '检查成功后再次被视为失败所需的最小连续失败次数。最小值为 1。',
  CONFIGURE_AUTOSCALING_DESC: '设置系统根据目标 CPU 和内存用量自动调整容器组副本数量。',
  PROBE_MSG: 'Readiness Probe 检查容器是否准备好处理请求。失败意味着容器不应从代理接收任何流量，即使它正在运行。Liveness Probe 检查配置它的容器是否仍在运行。如果活态探测器失败，则会杀死容器，容器将遵循其重启策略',
  WORKLOAD_REPLICA_MSG: '在用户定义范围内，如果 Pod 增多，则 ReplicationController 会终止额外的 Pod，如果减少，RC 会创建新的 Pod，始终保持在定义范围。例如，RC 会在 Pod 维护（例如内核升级）后在节点上重新创建新 Pod。',
  DEPLOYMENTS_REPLICA_DESC: '部署 (Deployment) 用来描述期望应用达到的目标状态，主要用来描述无状态应用，副本的数量和状态由其背后的控制器来维护，确保状态与定义的期望状态一致。您可以增加副本数量来满足更高负载；回滚部署的版本来消除程序的错误修改；创建自动伸缩器来弹性应对不同场景下的负载。',
  STATEFULSETS_REPLICA_DESC: '有状态副本集 (StatefulSet) 用来描述有状态应用，比如副本之间有主从关系，数据需要做持久化。与部署 (Deployment) 相同的是，有状态副本集创建的副本也是完全相同的，不同的是每个副本有个固定且唯一的标识，即使副本被重新调度了，标识也不会发生变化。您可以用有状态副本集来实现应用的有序部署，有序的删除，有序的滚动更新。',
  DAEMONSETS_REPLICA_DESC: '守护进程集 (DaemonSet) 可以确保集群中的每个节点运行一个副本，当有节点加入集群或者离开集群的时候，会自动地调整副本的数量来保证副本的数量与集群的节点数量一致。您可以使用守护进程集来运行存储服务，如 GlusterFS，Ceph 等；运行日志搜集服务，如 Fluentd，Logstash 等；运行监控服务等。',
  SELECT_CONFIGMAP_DESC: '将配置字典挂载到容器。',
  SELECT_SECRET_DESC: '将保密字典挂载到容器。',
  MONITORING_ALERT_DESC: '默认最多显示五个容器组副本的信息。您可以点击查看所有副本以查看所有容器组副本的信息。',
  CONTAINER_CPU_DESC: '作为容器调度时资源分配的判断依赖。只有当节点上可分配CPU总量 ≥ 容器CPU最小使用值时，才允许将容器调度到该节点。单位换算规则: 1核 = 1000m',
  CONTAINER_MEMORY_DESC: '作为容器调度时资源分配的判断依赖。只有当节点上可分配内存总量 ≥ 容器内存最小使用值时，才允许将容器调度到该节点。',
  IMAGE_PULL_POLICY_ALWAYS: '每次都拉取镜像',
  IMAGE_PULL_POLICY_IFNOTPRESENT: '优先使用本地镜像',
  IMAGE_PULL_POLICY_NEVER: '仅使用本地镜像',
  IMAGE_PULL_POLICY_ALWAYS_DESC: '在容器组创建及更新时，每次都尝试拉取新的镜像。',
  IMAGE_PULL_POLICY_IFNOTPRESENT_DESC: '如果本地存在所需的镜像，则优先使用本地镜像。',
  IMAGE_PULL_POLICY_NEVER_DESC: '仅使用本地镜像。如果本地不存在所需的镜像，则会导致容器异常。',
  LIVENESS_CHECK_DESC: '检查容器是否存活。',
  READINESS_CHECK_DESC: '检查容器是否可以处理请求。',
  STARTUP_CHECK_DESC: '检查容器是否启动成功。',
  STARTUP_CHECK_TIP: '需要 Kubernetes v1.18 或以上版本。',
  POD_CONDITION_INITIALIZED: '初始化完成',
  POD_CONDITION_INITIALIZED_DESC: '启动所有初始化容器。',
  POD_CONDITION_READY: '容器组就绪',
  POD_CONDITION_READY_DESC: '开始运行并允访问容器组。',
  POD_CONDITION_CONTAINERSREADY: '所有容器就绪',
  POD_CONDITION_CONTAINERSREADY_DESC: '启动容器组中的所有容器。',
  POD_CONDITION_PODSCHEDULED: '容器组调度完成',
  POD_CONDITION_PODSCHEDULED_DESC: '将容器组调度到集群中的一个节点。',
  POD_ASSIGNED_DESC: '系统根据容器组的资源预留值将容器组调度到具有足够可用资源的节点上。',
  POD_DESC: '容器组（Pod）是 Kubernetes 应用程序的基本执行单元，是您创建或部署的 Kubernetes 对象模型中最小和最简单的单元。',
  POD_EMPTY_DESC: '请创建一个容器组。',
  FILL_IMAGE_DEFAULT_PORTS_DESC: '是否暴露该镜像的默认端口？',
  REQUEST_EXCCED: '资源预留不能超过资源限制',
  REQUEST_EXCEED_WORKSPACE: '资源设置不能超过企业空间资源限制。',
  REQUEST_EXCEED_LIMIT: '资源预留不能超过资源限制。',
  STATUS_INFORMATION: '状态信息',
  WORKLOAD_CONDITION_AVAILABLE: '可用',
  WORKLOAD_CONDITION_PROGRESSING: '进行中',
  VOLUME_OR_TEMPLATE_EMPTY: '您已启用收集存储卷上的日志，请至少挂载一个存储卷或存储卷模板并指定日志所在的目录。',
  VOLUME_EMPTY: '您已启用收集存储卷上的日志，请至少挂载一个存储卷并指定日志所在的目录。',
  PROJECT_COLLECT_SAVED_DISABLED_DESC: '如需启用此功能，您需要在项目设置中启用收集存储卷上的日志。',
  COLLECT_LOGS_ON_VOLUMES_DESC: '允许系统收集保存在存储卷上的容器日志。如需使用此功能，请为容器挂载读写模式的存储卷并设置容器将日志导出到存储卷。',
  ISTIO_PROTOCOL_TIP: '选择服务实际使用的协议以充分利用应用治理功能。例如，为 HTTP 服务选择 HTTP 协议。',
  CONTAINER_LOG_PATH_TIP: '容器日志的路径，相对于存储卷的挂载路径，支持通配符，可使用半角逗号（,）分隔多个路径。例如，当存储卷挂载路径为 /data 时，log/*.log 表示日志文件为 /data/log 目录下所有 .log 格式的文件。',
  SPECIFY_SUBPATH_TIP: '指定需要挂载到容器的存储卷子路径。',
  DELETE_WORKLOAD_DESC_SI: '您即将删除工作负载 {resource}.<br/>请确认是否同时删除以下工作负载相关资源。',
  DELETE_WORKLOAD_DESC_PL: '您即将删除工作负载 {resource}.<br/>请确认是否同时删除以下工作负载相关资源。',
  SELECT_VOLUME_DESC: '选择现有的存储卷以将其挂载到容器。',
  RECREATE_CONFIRM_DESC: '您确定重新创建{type} {resource} 吗？容器组副本将会根据更新策略更新，同时相关业务将会中断。',
  CONTAINER_SECURITY_CONTEXT_DESC: '自定义容器的权限设置。',
  POD_SECURITY_CONTEXT_DESC: '自定义容器组的权限设置。',
  POD_SECURITY_CONTEXT_TIP: '如果容器组安全上下文和容器安全上下文中都设置了用户、用户组和 SELinux 上下文，容器安全上下文中的设置将覆盖容器组安全上下文中的设置。',
  PRIVILEGED_MODE: '特权模式',
  PRIVILEGED_MODE_DESC: '以主机上的 root 用户运行容器进程。',
  ALLOW_PRIVILEGE_ESCALATION: '允许特权提升',
  ALLOW_PRIVILEGE_ESCALATION_DESC: '允许容器进程获取比父进程更多的特权。当特权模式打开时，此选项目默认打开。',
  ROOT_DIRECTORY_READONLY: '根目录只读',
  ROOT_DIRECTORY_READONLY_DESC: '将容器文件系统的根目录设置为只读。',
  RUN_AS_NON_ROOT: '仅允许非 root 用户运行',
  RUN_AS_NON_ROOT_DESC: '启动容器之前检查容器是否将以 root 用户运行。如果容器将以 root 用户运行则不启动容器。',
  RUN_AS_USER_DESC: '执行容器进程入口点的 UID。默认为镜像元数据中指定的 GID。',
  RUN_AS_USER_GROUP_DESC: '执行容器进程入口点的 GID。默认为容器运行时的默认 GID',
  WORKLOAD_EMPTY_DESC: '请创建一个工作负载。',
  CONTAINER_RESOURCE_LIMIT_TIP: '设置容器的资源限制与资源预留，以将容器调度到合适的节点上。',
  COMPARE_WITH: '与上一个记录 {version} 对比',
  REVISION_RECORDS_DESC: '系统在工作负载创建或修改后将生成修改记录，可用于回退工作负载设置。最多可保留 10 条修改记录。',
  CLUSTER_DIFF_CONTAINER_SETTINGS_DESC: '在不同的集群中使用不同的容器设置。',
  CLUSTER_DIFF_PORT_SETTINGS_DESC: '为不同集群中的容器设置不同的端口。',
  CLUSTER_DIFF_ENVIRONMENT_VARIABLES_DESC: '为不同集群中的容器设置不同的环境变量。',
  POD_SCALE_DESC: '可以弹性扩展容器组实例数量',
  REPLICAS_AVAILABLE: '实际副本',
  REPLICAS_DESIRED: '期望副本数',
  SYNC_HOST_TIMEZONE_DESC: '同步容器与主机的时区。',
  HOSTPATH_TIP: '使用 HostPath 存储卷将主机文件系统中的文件或目录挂载到容器中。',
  DEPLOY_PLACEMENT_TIP_TITLE: '什么是部署位置？',
  DEPLOY_PLACEMENT_TIP_VALUE: '可以将容器组部署在不同集群中，并对集群中部署的副本数量进行定义。不同集群中的容器组将由联邦集群控制器(Federation Controller Manager)进行统一的调度及状态同步。',
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
  MOUNT_VOLUMES: '挂载存储卷'
};