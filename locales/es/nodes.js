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
  'Cluster Authorization Info': 'Información de autorización de clúster',
  CREATE_WORKSPACE: 'Crear espacio de trabajo',
  CREATE_WORKSPACE_ROLE: 'Crear rol de espacio de trabajo',
  'Created Projects': 'Proyectos creados',
  DELETE_WORKSPACE: 'Eliminar espacio de trabajo',
  'DevOps Project Number': 'Número de proyecto DevOps',
  EDIT_QUOTAS: 'Editar quota',
  'Edit Workspace Role': 'Editar rol del espacio de trabajo',
  'Involved Projects': 'Proyectos involucrados',
  'Manage Organizations': 'Administrar organizaciones',
  NO_AVAILABLE_CLUSTER: 'Clúster no disponible',
  WORKSPACE_NAME_EMPTY_DESC: 'Introduce el nombre del espacio de trabajo',
  'Project Number': 'Número de proyecto',
  'Remove from Workspace': 'Eliminar del espacio de trabajo',
  'The current name is not applicable.': 'El nombre actual no es aplicable.',
  'View Workspace': 'Ver espacio de trabajo',
  WORKSPACE: 'Espacio de trabajo',
  WORKSPACE_PL: 'Workspaces',
  WORKSPACE_LOW: 'workspace',
  WORKSPACE_INFO: 'Información del espacio de trabajo',
  'Workspace Logo': 'Logotipo del espacio de trabajo',
  'Workspace Members': 'Miembros del espacio de trabajo',
  WORKSPACE_MEMBER: 'Workspace Member',
  WORKSPACE_MEMBER_PL: 'Workspace Members',
  WORKSPACE_MEMBER_TCAP: 'Workspace member',
  WORKSPACE_MEMBER_TCAP_PL: 'Workspace members',
  'Workspace Name': 'Nombre del espacio de trabajo',
  'Workspace name exists': 'El nombre del espacio de trabajo ya existe',
  WS_NETWORK_ISOLATION: 'Aislamiento de red de espacio de trabajo',
  'Workspace Role': 'Rol del espacio de trabajo',
  WORKSPACE_ROLE_PL: 'Roles del espacio de trabajo',
  WORKSPACE_SETTINGS: 'Configuración del espacio de trabajo',
  'Workspace Settings': 'Configuración del espacio de trabajo',
  DEPARTMENT_MANAGEMENT: 'Department Management',
  SET_DEPARTMENTS: 'Set Departments',
  DEPARTMENT_PL: 'Grupos de espacios de trabajo',
  'Maintain Organization': 'Mantener la estructura organizativa',

  'All members': 'Todos los miembros',
  Assigned: 'Asignado',

  devops: 'DevOps Projects',
  EDIT_WORKSPACE_QUOTAS: 'Edit Workspace Quotas',
  'Edit Workspace Quota': 'Edit Workspace Quota',
  Workspaces: 'Espacios de trabajo',
  'Workspaces Manager': 'Gestor de espacios de trabajo',
  WORKSPACE_OVERVIEW_DESC:
    'Workspace proporciona a KubeSphere una plataforma segura, aislada y accesible. Aquí puedes ver el estado de ejecución de los recursos en el espacio de trabajo actual.',
  WORKSPACE_DESC:
    'Los espacios de trabajo son una unidad lógica para organizar tus proyectos de carga de trabajo / namespaces de Kubernetes, proyectos DevOps, administrar el acceso a recursos y compartir información dentro de tu equipo. Es un lugar de trabajo aislado para tu equipo.',
  WORKSPACE_SEARCH_PLACEHOLDER:
    'Introduce el nombre de tu espacio de trabajo para encontrarlo',
  WORKSPACE_CREATE_DESC:
    'Los esapcios de trabajo son una unidad lógica para organizar tus proyectos y proyectos DevOps. El acceso a los recursos y los recursos compartidos del equipo se pueden administrar aquí. Puede servir como un espacio de trabajo independiente para tu equipo.',
  WORKSPACE_NAME_DESC:
    'Usa un nombre de espacio de trabajo corto, como por ejemplo la abreviatura del nombre de tu empresa.',
  WORKSPACE_LOGO_PLACEHOLDER:
    'El tamaño del logotipo del espacio de trabajo debe ser inferior a 200 px X 200 px y admite formato PNG, JPG. Se recomienda cargar una imagen en formato PNG con un fondo transparente para una mejor visualización.',
  NO_WORKSPACE_TIP:
    'Tu cuenta no pertenece a ningún espacio de trabajo actualmente. Crea uno o ponte en contacto con el administrador para que te invite a un espacio de trabajo.',
  WORKSPACE_MEMBER_DESC:
    'Workspace members can view or manage workspace resources. You can manage members and control their permissions in the workspace.',
  INVITE_WORKSPACE_MEMBER_DESC: 'You can invite members to the workspace.',
  WORKSPACE_ROLE_DESC:
    'El rol del espacio de trabajo determina los permisos del rol en el espacio de trabajo actual.',
  SEARCH_WORKSPACE_TIP: 'Introduce el nombre del espacio de trabajo a buscar',
  WORKSPACE_ROLE_EMPTY_DESC: 'Please create a workspace role.',
  NO_CLUSTER_AVAILABLE_DESC:
    'No hay clústeres públicos disponibles, solicita autorización para clúster al administrador de la plataforma o al administrador del clúster después de crear el espacio de trabajo',
  WORKSPACE_NO_CLUSTER_TIP:
    'You need to contact the platform or cluster administrator to authorize a cluster to the workspace.',
  WORKSPACE_BASE_INFO_Q1:
    '¿Cómo solicitar más clústeres para el espacio de trabajo?',
  WORKSPACE_BASE_INFO_A1:
    'Contact the platform or cluster administrator to apply for more clusters.',
  WORKSPACE_BASE_INFO_Q2: '¿Cómo definir una política de red?',
  WORKSPACE_BASE_INFO_A2: '',
  WORKSPACE_CLUSTERS_DESC:
    'La información del clúster muestra cómo se utilizan los recursos del clúster en el espacio de trabajo.',
  HOW_TO_APPLY_MORE_CLUSTER_Q:
    '¿Cómo solicitar más clústeres para el espacio de trabajo?',
  HOW_TO_APPLY_MORE_CLUSTER_A:
    'Contact the platform or cluster administrator to apply for more clusters.',
  DELETE_WORKSPACE_DESC:
    'El espacio de trabajo no se puede restaurar después de ser eliminado y los recursos en el espacio de trabajo también se eliminarán.',
  DELETE_WORKSPACE_TIP:
    '¿Estás seguro de eliminar el espacio de trabajo <strong>{resource}</strong> ? No podrás recuperarlo, y los recursos en el espacio de trabajo también se eliminarán.',

  DEPARTMENT_MANAGEMENT_DESC:
    'A department in a workspace is a logical unit used for permission control. You can set a workspace role, multiple project roles, and multiple DevOps project roles in a department, and assign users to the department to control user permissions in batches.',
  DEPARTMENT_EMPTY_DESC: 'No Department Available',
  WORKSPACE_GROUP_USER_EMPTY_DESC: 'Actualmente no hay miembros asignables',
  WORKSPACE_QUOTAS_DESC:
    'Workspace quotas are used to control the total resource usage of all projects and DevOps projects in a workspace.',

  DELETE_WORKSPACE_PROJECTS_DESC:
    'Eliminar el proyecto asociado con el espacio empresarial',

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
  PROJECT_VALUE: 'Project: {value}',
  PROJECT_ROLE_VALUE: 'Project role: {value}',
  DEVOPS_VALUE: 'DevOps project: {value}',
  DEVOPS_PROJECT_ROLES_VALUE: 'DevOps project role: {value}',

  // Workspace Members > Details
  REMOVE_MEMBER_PL: 'Remove Members',
  SELECT_PROJECT_DESC:
    'Select a project in which the resource is to be created.',
  PROJECT_NOT_SELECT_DESC: 'Please select a project.',
  REPLICA_LOW_SI: 'replica',
  REPLICA_LOW_PL: 'replicas',
  IMAGE_TIME_SIZE_LAYER: 'Updated {time}',
  IMAGE_TIME_SIZE_LAYER_PL: 'Updated {time}, {size}, {layer} layers',
  IMAGE_TIME_SIZE_LAYER_SI: 'Updated {time}, {size}, {layer} layer',
  CPU_REQUEST: 'CPU Request',
  CPU_LIMIT: 'CPU Limit',
  PU_REQUEST_SCAP: 'CPU request',
  CPU_LIMIT_SCAP: 'CPU limit',
  MEMORY_REQUEST: 'Memory Request',
  MEMORY_LIMIT: 'Memory Limit',
  MEMORY_REQUEST_SCAP: 'Memory request',
  MEMORY_LIMIT_SCAP: 'Memory limit',
  ADD_PROBE: 'Add Checker',
  LABEL_TYPE: '{label} <span style="{style}">({type})</span>',
  SELINUX_CONTEXT: 'SELinux Context',
  CAPABILITIES_BETA: 'Capabilities (beta)',
  SYNC_HOST_TIMEZONE: 'Synchronize Host Timezone',
  POD_SETTINGS: 'Pod Settings',
  MAX_UNAVAILABLE_PODS: 'Maximum Unavailable Pods',
  MAX_UNAVAILABLE_PODS_DESC:
    'Maximum number or percentage of unavailable Pods during the update.',
  ADD_RULE: 'Add Rule',
  RULE_NOT_COMPLETE: 'Please set a complete rule.',
  SCHEDULE_WITH_TARGET: 'Deploy with target',
  SCHEDULE_AWAY_FROM_TARGET: 'Schedule away from target',
  MATCH_IF_POSSIBLE: 'Match if possible',
  MUST_MATCH: 'Must match',
  MOUNT_PATH_EMPTY: 'Please enter a mount path.',
  CONFIGMAP: 'ConfigMap',
  CONFIGMAP_PL: 'ConfigMaps',
  CONFIGMAPS: 'ConfigMaps',
  CONFIGMAP_LOW: 'ConfigMap',
  PARTITION_ORDINAL: 'Ordinal for Dividing Pod Replicas',
  PARTITION_ORDINAL_DESC:
    'Set an ordinal to divide the Pod replicas into two groups. When the StatefulSet is updated, only Pod replicas with an ordinal greater than or equal to the value of this parameter are updated.',
  SERVICE_TOPOLOGY: 'Service Topology',
  'Access Mode': 'Modo de acceso',
  'Add argument': 'Agregar argumento',
  EDGENODE_CONFIG_COMMAND: 'Agregar comando',
  'Add command': 'Agregar comando',
  'Add Container': 'Agregar contenedor',
  ADD_ENVIRONMENT_VARIABLE: 'Agregar variable de entorno',
  'Add Existing Volume': 'Agregar volumen existente',
  'Add HostPath': 'Añadir HostPath',
  ADD_LABEL: 'Agregar etiqueta',
  'Add Labels': 'Agregar etiquetas',
  ADD_METADATA: 'Agregar metadatos',
  'Add new container': 'Agregar nuevo contenedor',
  ADD_NODE_SELECTOR: 'Agregar selector de nodo',
  ADD_PORT: 'Agregar puerto',
  QOS_CLASS: 'QoS Class',
  'Add Probe': 'Añadir sonda',
  'Add Temporary Volume': 'Agregar volumen temporal',
  'Add Volume': 'Agregar volumen',
  'Add Volume Template': 'Agregar plantilla de volumen',
  'Adding new contianer': 'Agregar nuevo contianer',

  'Additional metadata settings for resources such as Labels and Annotations.':
    'Configuración de metadatos adicionales para recursos como Etiquetas y Anotaciones.',
  'Additional metadata settings for resources.':
    'Configuración de metadatos adicionales para recursos.',
  ADD_METADATA_DESC: 'Add metadata to resources.',
  ROUTE_ADD_METADATA_DESC: 'Add metadata to the Route.',
  SERVICE_ADD_METADATA_DESC: 'Add metadata to the Service.',
  VOLUME_ADD_METADATA_DESC: 'Add metadata to the volume.',
  WORKLOAD_ADD_METADATA_DESC: 'Add metadata to the workload.',
  POD_ADD_METADATA_DESC: 'Add metadata to the Pod replicas.',
  'Advanced Options': 'Opciones avanzadas',
  'Applied to the workload': 'Aplicado a la carga de trabajo.',
  Argument: 'Argumento',
  ARGUMENTS: 'Argumentos',
  'Available number of nodes scheduled':
    'Número disponible de nodos programados',
  'Can be found by node IP or node name':
    'Se puede encontrar por IP de nodo o nombre de nodo',
  CAPACITY: 'Capacidad',
  capacity: 'capacidad',
  SELECT_VOLUME: 'Elige un volumen existente',
  SELECT_TYPE: 'Select {type}',
  SPECIFY_SUBPATH: 'Haga clic para agregar subPath',
  'Cluster Resource Status': 'Estado de recursos del clúster',
  'Coding Mode': 'Modo de codificación',
  'Collecting file log': 'Recopilar registro de logs',
  Commands: 'Comandos',
  CONCURRENCY_POLICY: 'Concurrency Policy',
  RUN_JOBS_CONCURRENTLY: 'Run Jobs concurrently',
  SKIP_NEW_JOB: 'Skip new Job',
  SKIP_OLD_JOB: 'Skip old Job',
  'Config Template': 'Plantilla de configuración',
  'Container Config': 'Configuración de contenedor',
  'Container CPU Resource Request, 1 Core = 1000m':
    'Solicitud de recursos de CPU de contenedor, 1 núcleo = 1000 m',
  CONTAINERS: 'Imagen de contenedor',
  CONTAINER_IMAGE: 'Imagen de contenedor',
  ADD_CONTAINER: 'Add Container',
  LIVENESS_CHECK: 'Verificación del estado del contenedor',
  CONTAINER_LOG_PATH: 'ruta relativa del registro de contenedor',
  CONTAINER_LOGS: 'Registros de contenedores',
  'Container Memory Resource Request':
    'Solicitud de recurso de memoria de contenedor',
  CONTAINER_NAME: 'Nombre del contenedor',
  READINESS_CHECK: 'Verificación Readiness del contenedor',
  CONTAINER_SECURITY_CONTEXT: 'Contexto de seguridad del contenedor',
  'Container Setting': 'Configuración de contenedor',
  STARTUP_CHECK: 'Comprobación de inicio de contenedor',
  CONTAINER_TYPE: 'Tipo de contenedor',
  ContainerCreating: 'Creación de contenedores',
  ContainerNotReady: 'Contenedor No Listo',
  ContainersNotInitialized: 'Contenedores No inicializados',
  ContainersNotReady: 'Contenedores No preparados',
  TARGET_CPU_USAGE_UNIT: 'Utilización de CPU',
  'CPU(m)': 'CPU (m)',
  CrashLoopBackOff: 'CrashLoopBackOff',
  CreateContainerConfigError: 'CreateContainerConfigError',
  CreateContainerError: 'CreateContainerError',
  created: 'creado',
  CronJob: 'CronJob',
  'CronJob Settings': 'Configuración de CronJob',
  'Current number of nodes scheduled': 'Número actual de nodos programados',
  REPLICAS_CURRENT: 'Réplicas actuales',
  'Current Revision': 'Revisión actual',
  'Current Stage(phase)': 'Estado actual (fase)',
  CURRENT_REVISION_RECORD: 'Revisión actual',
  CURRENT_STATUS: 'Estado actual (fase)',
  'Current Utilization': 'Utilización actual',
  LOCATION: 'Ubicación de despliegue',
  REPLICA_SCHEDULING_MODE: 'Modo de despliegue',
  POD_SCHEDULING_RULES: 'Pod Assignment Strategy',
  POD_SCHEDULING_RULES_DESC: 'You can specify rules for pod scheduling',
  DeploymentPaused: 'Despliegue Pausado',
  DeploymentResumed: 'Despliegue Reanudado',
  'Desired number of nodes scheduled': 'Número deseado de nodos programado',
  'Desired Replicas': 'Réplicas deseadas',
  CLUSTER_DIFF: 'Cluster Differences',
  DockerDaemonNotReady: 'DockerDaemonNotReady',
  EDIT_SETTINGS: 'Editar plantilla de configuración',
  EDIT_APP_SETTINGS: 'Edit App Settings',
  EDIT_CONTAINER: 'Editar contenedor',
  EDIT_LABELS: 'Editar etiquetas',
  EDIT_YAML: 'Editar YAML',
  YAML_FILE: 'YAML File',
  EmptyDir: 'EmptyDir',
  Environment: 'Entorno',
  ENVIRONMENT_VARIABLE_PL: 'Variables de entorno',
  ENVIRONMENT_VARIABLE: 'Variables de entorno',
  'environment variables': 'Variables de entorno',
  ErrImageNeverPull: 'ErrImageNeverPull',
  ErrImagePull: 'ErrImagePull',
  EVERY_DAY: '0 0 * * * (every day)',
  EVERY_HOUR: '0 * * * * (every hour)',
  EVERY_MONTH: '0 0 1 * * (every month)',
  EVERY_WEEK: '0 0 * * 0 (every week)',
  'Exec Command Check': 'Verificación de ejecutables',
  'Every Day': 'Cada día',
  'Every Hour': 'Cada hora',
  'Every Month': 'Cada mes',
  'Every Week': 'Cada semana',
  RUNNING_RECORDS: 'Registros de ejecución',
  EXISTING_VOLUME: 'Volumen existente',
  FailedCreate: 'FailedCreate',
  FailedDelete: 'Falló Eliminar',
  SUCCESS_THRESHOLD: 'Umbral de fallo',
  FAILED_JOBS_RETAINED: 'Failed Jobs Record',
  'Failure Threshold': 'Umbral de fallo',
  'File List': 'Lista de archivos',
  'for example': 'por ejemplo',
  FoundNewReplicaSet: 'FoundNewReplicaSet',
  HORIZONTAL_POD_AUTOSCALING: 'Autoescalado horizontal de pods',
  AUTOSCALING: 'Autoescalado horizontal de pods',
  HPA_SET_TIP: 'El Autoscaling Horizontal de Pods ha sido configurado',
  'Host Path': 'Ruta de host',
  NODE_PORTS: 'Puerto host',
  NODE_PORT_SCAP: 'Node port',
  NODE_PORTS_SCAP: 'Node ports',
  POD_SCHEDULING_METHOD: '¿Cómo se asignan los pods a los nodos?',
  HTTP_REQUEST: 'Comprobación de solicitudes HTTP',
  HTTP_PATH_EMPTY: 'Please set a path for the HTTP check.',
  IMAGE: 'Imagen',
  IMAGE_VALUE: 'Imagen: {value}',
  IMAGE_ID: 'ID de imagen',
  'Image Name': 'Nombre de la imágen',
  IMAGE_PULL_POLICY: 'Política de extracción de imagen',
  ImageInspectError: 'ImageInspectError',
  ImagePullBackOff: 'ImagePullBackOff',
  'Initial Delay': 'Retraso inicial',
  INITIAL_DELAY_S: 'Retraso (s) inicial',
  INITIAL_DELAY_TIMEOUT_VALUE:
    '{delay}s initial delay, {timeout}s timeout period',
  STARTUP_CHECK_TIP: 'Kubernetes v1.18 or later is required.',
  'Instance Status': 'Estado de instancia',
  'Invalid image': 'Imagen inválida',

  'Invalid name': 'Nombre inválido. {message}',
  'Invalid pod': 'Pod inválido',
  INVALID_IMAGE: 'Imagen inválida.',
  INVALID_NAME_DESC:
    'Invalid name. The name can contain only lowercase letters, numbers, and hyphens (-), and must start and end with a lowercase letter or number. The maximum length is 63 characters.',
  InvalidImageName: 'InvalidImageName',
  'is running': 'En ejecución',
  Job: 'Trabajo',
  JOB: 'Trabajo',
  'Job Settings': 'Configuraciones de tareas',
  STRATEGY_SETTINGS: 'Strategy Settings',
  'Job Template': 'Plantilla de tareas',
  ADD_CONTAINER_DESC:
    'KubeSphere admite la extracción de imágenes de los Registros de imágenes y la creación de nuevas imágenes a través del código fuente (Fuente a imagen).',
  EMPTY_LABEL_DESC: 'Please add a label.',
  LABEL_EXIST_DESC: 'The label already exists. Please enter another label.',
  'Labels cannot be empty': 'Las etiquetas no pueden estar vacías',
  DUPLICATE_LABELS: 'Existen etiquetas',
  layers: 'capas',
  LIVENESS_PROBE: 'Sonda de estado',
  'log path relative to container mount path':
    'ruta de registro relativa a la ruta de montaje del contenedor',
  'm.internalLifecycle.PreStartContainer':
    'm.internalLifecycle.PreStartContainer',
  MAXIMUM_REPLICAS: 'Número máximo de réplicas',
  MAX_SURGE_POD_VALIDATOR: 'MAX_SURGE_POD_VALIDATOR',
  'Maximum number of replicas': 'Número máximo de réplicas',
  TARGET_MEMORY_USAGE_UNIT: 'Uso de destino de memoria',
  'Memory Target Utilization': 'Utilización de destino de memoria',
  MINIMUM_REPLICAS: 'Número mínimo de réplicas',
  'min replicas number should not be greater than max replicas number':
    'el número mínimo de réplicas no debe ser mayor que el número máximo de réplicas',
  MinimumReplicasAvailable: 'Réplicas mínimas disponibles',
  MinimumReplicasUnavailable: 'Réplicas mínimas No disponible',
  Mount: 'Montar',
  MOUNT_CONFIGMAP_OR_SECRET: 'Monte ConfigMap o Secret',
  MOUNT_PATH: 'Punto de montaje',
  MOUNT_PATH_IN_USE: 'El punto de montaje ya está en uso',
  'Mount point': 'punto de montaje',
  'Mount Temporary Volume': 'Montar volumen temporalmente',
  MOUNT_CONFIGMAP_OR_SECRET_DESC:
    'Monte el configmap o secret en el directorio especificado.',
  'Mount Volume': 'Montar Volúmen',
  VOLUME_SETTINGS: 'Montar Volúmenes',
  STORAGE_SETTINGS: 'Storage Settings',
  mounted: 'montado',
  NetworkPluginNotReady: 'NetworkPluginNotReady',
  'New Volume': 'Nuevo volumen',
  NewReplicaSetAvailable: 'NewReplicaSetAvailable',
  NewReplicaSetCreated: 'NewReplicaSetCreated',
  NO_DEFAULT_PORT: 'Sin configuración de puertos predeterminada',
  NO_LIMIT: 'Ilimitado',
  'No related resources found with the current workload(s)':
    'No se encontraron recursos relacionados con las cargas de trabajo actuales',
  NO_RELATED_RESOURCE_FOUND: 'No hay recursos relacionados.',
  NO_REQUEST: 'Ninguna solicitud',
  NO_RESOURCE_LIMIT: 'No resource limit',
  NO_REQUEST_TCAP: 'No Request',
  NO_LIMIT_TCAP: 'No Limit',
  GPU_TYPE: 'GPU Type',
  GPU_TYPE_SCAP: 'GPU type',
  GPU_LIMIT_SCAP: 'GPU limit',
  GPU_LIMIT: 'GPU Limit',
  'Node Name': 'Nombre del nodo',
  'Node Scheduling Info': 'Información de programación de nodos',
  NODE_NAME: 'Nombre del nodo',
  SCHEDULING_RESULT: 'Información de programación de nodos',
  NO_IMAGE_FOUND: 'No encontré esta imagen',
  ONDELETE: 'OnDelete',
  CHECK_INTERVAL_S: 'Periodo de Segundos',
  CONTAINER_EMPTY_DESC: 'Por favor agregue al menos un contenedor.',
  MOUNT_VOLUME: 'Mount Volume',
  MOUNT_VOLUME_OR_TEMPLATE:
    'Agregue al menos un volumen o plantilla de volumen',
  ENTER_SCHEDULE_TIP: 'Please select a schedule.',
  'Please input command': 'Por favor introduce el comando',
  'Please input a schedule.': 'Por favor introduce un horario.',
  PROBE_COMMAND_EMPTY: 'Por favor introduce el comando',
  'Please input mount point': 'Por favor introduce el punto de montaje',
  'Please input port': 'Por favor introduce el puerto',
  VOLUME_NAME_EMPTY: 'Por favor introduce el nombre del volumen',
  CONFIGMAP_NOT_SELECT: 'Por favor selecciona un mapa de configuración',
  SECRET_NOT_SELECT: 'Por favor selecciona un secreto',
  'Please select a storage class':
    'Por favor selecciona una clase de almacenamiento',
  VOLUME_NOT_SELECT: 'Por favor selecciona un volumen',
  CONTAINER_NOT_SELECTED: 'Selecciona al menos un contenedor para montar',
  SET_IMAGE_DESC: 'Por favor selecciona imagen',
  'Please select protocol': 'Por favor selecciona protocolo',
  TARGET_REVISION_EMPTY_DESC: 'Por favor selecciona revisión de reversión',
  'Please specify an image': 'Por favor especifique una imagen',
  READ_WRITE_MOUNT_EMPTY:
    'Especifique el modo de lectura y escritura y la ruta de montaje',
  CENTRALIZED_SCHEDULING: 'Implementación de agregación de pod',
  'Pod CPU Request': 'Solicitud de CPU para el pod',
  'Pod Decentralized Deployment': 'Despliegue descentralizado de pod',
  'Pod Default Deployment': 'Despliegue predeterminado del pod',
  POD_IP_ADDRESS: 'IP del POD',
  POD_IP_ADDRESS_SCAP: 'Pod IP address',
  DECENTRALIZED_SCHEDULING: 'Despliegue descentralizado de pod',
  'Pod Memory Request': 'Solicitud de memoria de pod',
  POD_REPLICAS: 'Réplicas de pod',
  DEFAULT_RULES: 'Default Rules',
  DEFAULT_RULES_DESC:
    'Schedules the Pod replicas to nodes according to default rules.',
  CUSTOM_RULES: 'Custom Rules',
  CUSTOM_RULES_DESC:
    'Las réplicas de pod se implementarán de acuerdo con la política predeterminada.',
  'Pod replicas will be deployed according to user customization.':
    'Las réplicas de pod se implementarán de acuerdo con la personalización del usuario.',
  DECENTRALIZED_SCHEDULING_DESC:
    'Las réplicas de pod se implementarán en diferentes nodos tanto como sea posible.',
  CENTRALIZED_SCHEDULING_DESC:
    'Las réplicas de pod se implementarán en el mismo nodo tanto como sea posible.',
  POD_SECURITY_CONTEXT: 'Contexto de seguridad de pod',
  'Pod Status': 'Estado del pod',
  POD_STATUS_ANALYSIS: 'Análisis de estado de pod',
  POD_REASON_FAILEDCREATE: 'POD_REASON_FAILEDCREATE',
  POD_REASON_FAILEDDELETE: 'POD_REASON_FAILEDDELETE',
  POD_REASON_SUCCESSFULCREATE: 'POD_REASON_SUCCESSFULCREATE',
  POD_REASON_SUCCESSFULDELETE: 'POD_REASON_SUCCESSFULDELETE',
  PodInitializing: 'Pod inicialización',
  'Pods List': 'Lista de pods',
  Port: 'Puerto',
  'Port(s)': 'Puerto (s)',
  ports: 'puertos',
  PostStartHookError: 'Error de Hook posterior al inicio',
  'Private Registry': 'Registro privado',
  Privileged: 'Privilegiado',
  PROBE_PL: 'Investigacion',
  ProgressDeadlineExceeded: 'ProgressDeadlineExceeded',
  Protocols: 'Protocolos',
  PROVISIONER: 'Provisioner',
  'Read Write Mode': 'Modo Read Write',
  READINESS_PROBE: 'Sonda de preparación',
  SIMULTANEOUS_UPDATE: 'Recrear',
  RECREATE: 'Redesplegar',
  RECREATE_SUCCESS_DESC: 'Desplegado correctamente',
  REGISTRY: 'registro',
  RegistryUnavailable: 'Registro no disponible',
  REPLICA_STATUS: 'Estado de la réplica',
  'Replicas Number': 'Número de réplicas',
  ReplicaSetCreateError: 'ReplicaSetCreateError',
  ReplicaSetUpdated: 'ReplicaSetUpdated',
  'request CPU should not be greater than limit CPU':
    'La solicitud de CPU no debe ser mayor que el límite de CPU',
  'request memory should not be greater than limit memory':
    'La solicitud de memoria no debe ser mayor que la memoria límite',
  'Request Type': 'tipo de petición',
  RERUN: 'Repetición',
  'Resource Info': 'Información de recursos',
  'Resource Limit': 'Límite de recursos',
  RESOURCE_LIMITS: 'Límites de recursos',
  'Resource limits remaining quota': 'Límite de recursos, cuota restante',
  RESOURCE_NAME: 'Nombre del recurso',
  'Resource Request': 'Solicitud de recursos',
  RESOURCE_REQUESTS: 'Solicitudes de recursos',
  'Resource requests remaining quota': 'Solicitudes de recursos dejaron cuota',
  RESOURCE_STATUS: 'Estado del recurso',
  RESTART_PL: 'Reiniciar contadores',
  RESTART: 'Restart',
  RESTART_POLICY: 'Política de reinicio',
  Revision: 'Revisión',
  REVISION_RECORDS: 'Registros de revisión',
  'Revision Rollback': 'Revisión de Rollback',
  'Rollback Revisions': 'Revisiones de Rollback',
  REVISION_RECORD: 'Revision record',
  ROLL_BACK: 'Revisión de Rollback',
  EDIT_AUTOSCALING: 'Edit Autoscaling',
  TARGET_REVISION_RECORD: 'Revisiones de Rollback',
  RollingUpdate: 'RollingUpdate',
  ROLLING_UPDATE_RECOMMENDED: 'RollingUpdate (recomendado)',
  RunContainerError: 'RunContainerError',
  Schedule: 'Calendario',
  SCHEDULED_TO_NODE: 'Scheduled to {value}',
  SCHEDULING_NOT_SUCCESSFUL: 'Scheduling Not Successful',
  SCHEDULING_INFORMATION: 'Información de programación',
  'Select by Node': 'Seleccionar por nodo',
  RESOURCE: 'Seleccionar recurso',
  SELECT_SPECIFIC_KEYS: 'Seleccionar claves y caminos específicos',
  'Service Configuration': 'Configuración del servicio',
  'Service Labels': 'Etiquetas de servicio',
  SESSION_AFFINITY: 'Affinity de sesión',
  SELECTOR: 'Selector',
  'Set Mount Path': 'Establecer punto de montaje',
  SELECT_NODES: 'Establecer política de programación de nodos',
  GRAYSCALE_REPLICAS_DESC: 'Especificar el número de réplicas',
  MAXIMUM_DELAY: 'Maximum Start Delay (s)',
  'Storage Size': 'Tamaño de almacenamiento',
  'Strategy Type': 'Tipo de estrategia',
  SUBPATH: 'sub ruta',
  FAILURE_THRESHOLD: 'Umbral de éxito',
  SuccessfulCreate: 'ExitosoCrear',
  SuccessfulDelete: 'Exitoso Eliminar',
  WORKLOAD_MOUNT_VOLUME_DESC: 'Admite EmptyDir y PersistentVolumeClaim.',
  SUCCESSFUL_JOBS_RETAINED: 'Success Records',
  'Support EmptyDir and PersistentVolumeClaim.':
    'Admite EmptyDir y PersistentVolumeClaim.',
  'Sure to delete the workload(s)?':
    '¿Seguro para eliminar la (s) carga (s) de trabajo?',
  'target port': 'puerto de destino',
  TARGET_MEMORY_USAGE: 'Uso objetivo',
  TARGET_CPU_USAGE: 'Utilización objetivo',
  'TCP Port Check': 'Comprobación de puerto TCP',
  'Temporary Volume': 'Volumen Temporal',
  CONCURRENCY_POLICY_DESC:
    'Select a concurrency policy of a Job created by the CronJob.',
  FAILED_JOBS_RETAINED_DESC:
    'Specify the number of failed Jobs to be retained.',
  SUCCESSFUL_JOBS_RETAINED_DESC:
    'Specify the number of successful Jobs to be retained.',
  'Timeout(s)': 'Tiempo de espera (s)',
  TCP_PORT: 'Comprobación de puerto TCP',
  TEMPORARY_VOLUME: 'Volumen Temporal',
  HOSTPATH_VOLUME: 'HostPath Volume',
  'The concurrency policy setting.':
    'La configuración de la política de concurrencia.',
  'The minimum of the replicas that can be set by HPA':
    'El mínimo de las réplicas que puede configurar HPA',
  'The number of failed jobs allowed to be retained.':
    'El número de trabajos fallidos que se pueden retener.',
  'The number of successful jobs allowed to be retained.':
    'El número de trabajos correctos permitidos para ser guardados.',
  TIMEOUT_PERIOD_S: 'Tiempo de espera (s)',
  'UI Mode': 'Modo UI',
  'Update Strategy': 'Actualizar estrategia',
  UPDATE_STRATEGY: 'Actualizar estrategia',
  USE_CONFIGMAP_OR_SECRET: 'Use ConfigMap o Secret',
  USE_DEFAULT_PORTS: 'Usar puertos predeterminados',
  USER_AND_USER_GROUP: 'Usuario y grupo de usuarios',
  USER_GROUP: 'Grupo de usuario',
  VIEW_YAML: 'Ver YAML',
  VOLUME_CAPACITY_TCAP: 'Capacidad de volumen',
  'Volume Name': 'Nombre del volumen',
  'Volume Source': 'Fuente de volumen',
  COLLECT_LOGS_ON_VOLUMES_Q: 'How do I collect logs on volumes?',
  'Worker Container': 'Contenedor de trabajo',
  VOLUME_CAPACITY: 'Capacidad de volumen',
  TOTAL_CAPACITY: 'Total capacity',
  VOLUME_NAME: 'Nombre del volumen',
  'What is Disk Log Collection?':
    '¿Qué es la recopilación de registro de disco?',
  WORKER_CONTAINER: 'Contenedor de trabajo',
  Workload: 'Carga de trabajo',
  WORKLOAD: 'Carga de trabajo',
  WORKLOAD_PL: 'Carga de trabajo',
  WORKLOAD_LOW: 'workload',

  'Not Limited': 'Not Limited',
  Cost: 'Cost',
  PROJECT_REMAINING_QUOTAS: 'Project Remaining Quotas',
  WORKSPACE_REMAINING_QUOTAS: 'Workspace Remaining Quotas',
  QUOTA_OVERCOST_TIP:
    'The current resource usage has exceeded the remaining quota',

  WORKLOAD_REASON_DEPLOYMENTPAUSED: 'WORKLOAD_REASON_DEPLOYMENTPAUSED',
  WORKLOAD_REASON_DEPLOYMENTRESUMED: 'WORKLOAD_REASON_DEPLOYMENTRESUMED',
  WORKLOAD_REASON_FAILEDCREATE: 'WORKLOAD_REASON_FAILEDCREATE',
  WORKLOAD_REASON_FOUNDNEWREPLICASET: 'WORKLOAD_REASON_FOUNDNEWREPLICASET',
  WORKLOAD_REASON_MINIMUMREPLICASAVAILABLE:
    'WORKLOAD_REASON_MINIMUMREPLICAS DISPONIBLE',
  WORKLOAD_REASON_MINIMUMREPLICASUNAVAILABLE:
    'WORKLOAD_REASON_MINIMUMREPLICASUNAVAILABLE',
  WORKLOAD_REASON_NEWREPLICASETAVAILABLE:
    'WORKLOAD_REASON_NEWREPLICASETAVAILABLE',
  WORKLOAD_REASON_NEWREPLICASETCREATED: 'WORKLOAD_REASON_NEWREPLICASETCREATED',
  WORKLOAD_REASON_PROGRESSDEADLINEEXCEEDED:
    'WORKLOAD_REASON_PROGRESSDEADLINEEXCEEDED',
  WORKLOAD_REASON_REPLICASETCREATEERROR:
    'WORKLOAD_REASON_REPLICASETCREATEERROR',
  WORKLOAD_REASON_REPLICASETUPDATED: 'WORKLOAD_REASON_REPLICASETUPDATED',
  Workloads: 'Cargas de trabajo',
  SELECT_NODES_DESC:
    'Puede permitir que las réplicas de Pod se ejecuten en nodos específicos.',
  WORKLOAD_SPECIFY_NODE_DESC: 'Assign Pod replicas to a specific node.',
  WORKLOAD_DESC:
    'La carga de trabajo suele ser el operador real para acceder al servicio, y también es el operador real en ejecución para aplicaciones del sistema, como la recopilación y supervisión de registros de nodos. Workload es un modelo abstracto para un grupo de Pods.',
  DEPLOYMENT_DESC:
    'La implementación proporciona una gestión detallada de aplicaciones comunes en KubeSphere. La configuración de implementación describe el estado deseado de componentes específicos de una aplicación como plantillas Pod.',
  DEPLOYMENT_EMPTY_DESC: 'Please create a deployment.',
  STATEFULSET_DESC:
    'StatefulSet se usa para administrar aplicaciones con estado, administrar la implementación y la ampliación de un conjunto de Pods, y proporciona garantías sobre el orden y la unicidad de estos Pods.',
  STATEFULSET_EMPTY_DESC: 'Please create a StatefulSet.',
  DAEMONSET_DESC:
    'Un DaemonSet asegura que todos (o algunos) nodos ejecuten una copia de un Pod. Por lo general, un DaemonSet se usa para ejecutar una colección de registros, monitorear daemon u otras aplicaciones de administración del sistema.',
  DAEMONSET_EMPTY_DESC:
    'Un DaemonSet asegura que todos (o algunos) nodos ejecuten una copia de un Pod. Por lo general, un DaemonSet se usa para ejecutar una colección de registros, monitorear daemon u otras aplicaciones de administración del sistema.',
  JOB_DESC:
    'Jobs are used to perform short-lived, one-off tasks. A Job creates one or more Pods and ensures that a specific number of Pods successfully terminate.',
  JOB_EMPTY_DESC:
    'Jobs are used to perform short-lived, one-off tasks. A Job creates one or more Pods and ensures that a specific number of Pods successfully terminate.',
  CRONJOB_DESC:
    'CronJobs manages Jobs on a time-based schedule and can be used to perform periodic or recurring tasks.',
  CRONJOB_EMPTY_DESC:
    'CronJobs manages Jobs on a time-based schedule and can be used to perform periodic or recurring tasks.',
  CRONJOB_NAME_DESC:
    'Solo puede contener letras minúsculas, números y guiones ("-"), y debe comenzar con una letra minúscula y terminar con un número o letra minúscula. La longitud máxima de caracteres se establece en 52.',
  CRONJOB_NAME_TOO_LONG: 'La longitud máxima de caracteres se establece en 52.',
  ADJUST_REPLICAS: '¿Tiene efecto de inmediato?',
  ADJUST_TRAFFIC_DISTRIBUTION: 'Adjust Traffic Distribution',
  REPLICAS_SCALE_NOTIFY_CONTENT:
    'Va a cambiar las réplicas de su carga de trabajo a {num}. Puede continuar cambiando el número de réplicas o puede hacer que el cambio surta efecto de inmediato.',
  REPLICAS_SCALE_NOTIFY_CONFIRM: 'Aplicar cambios ({segundos} s)',
  REPLICAS_SCALE_NOTIFY_CANCEL: 'Descartar los cambios',
  ROLLING_UPDATE_SETTINGS: 'El número de pods cuando se actualiza',
  MIN_AVAILABLE_POD_LABEL: 'El número mínimo disponible de pods',
  MAX_EXTRA_PODS: 'El número máximo disponible de pods',
  UPDATE_STRATEGY_DESC:
    'Se utiliza para configurar la estrategia para reemplazar los pods durante el proceso de actualización. <a href="{link}" target="_blank">Aprende más.</a>',
  MAX_UNAVAILABLE_DESC:
    'El porcentaje máximo de pods no disponibles permitidos durante el proceso de actualización',
  MIN_AVAILABLE_POD_DESC:
    'Se recomienda que el número mínimo de Pods disponibles para cada RollingUpdate sea un número entero positivo con un mínimo de 1',
  MAX_EXTRA_PODS_DESC:
    'El número máximo de pods permitido durante una actualización continua',
  MIN_AVAILABLE_POD_VALIDATOR_MIN:
    'El número mínimo de pods disponibles no puede ser inferior a 1',
  MIN_AVAILABLE_POD_VALIDATOR_MAX:
    'El número mínimo de pods disponibles no puede ser mayor que el número actual de réplicas',
  MAX_SURGE_POD_VALIDATOR_MIN:
    'El número máximo de pods no puede ser menor que el número de réplicas',
  MAX_SURGE_POD_VALIDATOR_MAX:
    'El número máximo de pods no puede ser mayor que el doble del número actual de réplicas',
  ROLLING_UPDATE_POD_TIP:
    'Limita las cantidades mínimas y máximas disponibles en función de las réplicas actuales cuando está en actualización continua. El número mínimo de réplicas no puede exceder el número actual de réplicas, y el número máximo de Pods no puede exceder 2 veces las réplicas actuales.',
  ONDELETE_DESC:
    'El controlador no actualizará automáticamente el Pod. Se actualizará y reemplazará las instancias del Pod cuando el Pod se elimine manualmente.',
  ROLLINGUPDATE_DESC:
    'Una actualización continua significa que la instancia de la versión anterior se reemplazará gradualmente por otras nuevas. Durante el proceso de actualización, el tráfico se equilibrará con la carga y se distribuirá a las instancias antiguas y nuevas simultáneamente, por lo que el servicio no se interrumpirá.',
  SIMULTANEOUS_UPDATE_DESC:
    'Todos los Pods existentes serán eliminados antes de que se creen otros nuevos. Tenga en cuenta que el servicio se interrumpirá durante el proceso de actualización.',
  STATEFULSET_PARTITION_DESC:
    'Partición indica el ordinal en el que se debe particionar StatefulSet. El valor predeterminado es 0.',
  PARTITION_ORDINAL_EMPTY: 'Please set a ordinal for dividing Pod replicas.',
  MIN_READY_SECONDS: 'Minimum Running Time for Pod Readiness (s)',
  MIN_READY_SECONDS_DESC:
    'Especifica el número mínimo de segundos para los pods de un inicio de daemonset',
  MIN_READY_SECONDS_EMPTY:
    'Please set the minimum stable running time required for a Pod replica to be considered ready.',
  IMAGE_PLACEHOLDER:
    'Selecciona el registro de la lista desplegable o introduce una dirección de registro público',
  IMAGE_EMPTY: 'Please set an image.',
  IMAGE_REGISTRY_PLACEHOLDER: 'Selecciona el secreto del registro',
  IMAGE_DESC:
    'Para implementar desde un repositorio de imágenes privado, primero debe <a href={link} target="_blank">crear un secreto de registro de imágenes</a> y luego extraer la imagen.',
  REPLICAS_DESC: 'Se creará el número deseado de pods para el {módulo}.',
  VOLUME_SUB_TEXT:
    'Volúmenes utilizados por los contenedores de la carga de trabajo.',
  EMPTYDIR_DESC: 'Almacenamiento temporal creado para la carga de trabajo.',
  HOSTPATH_DESC:
    'Un volumen HostPath monta un archivo o directorio del sistema de archivos del nodo host en su Pod.',
  PORT_INPUT_DESC: 'The port name already exists. Please enter another name.',
  PORT_NAME_DESC:
    'The port name can contain only lowercase letters, numbers, and hyphens (-) and must begin and end with a lowercase letter or number. The maximum length is 63 characters.',
  WORKLOAD_PORT_NAME_DESC:
    'The port name can contain only lowercase letters, numbers and hyphens (-), and must begin and end with a lowercase letter or number. The maximum length is 15 characters.',
  DEPLOYMENTS_BASEINFO_DESC:
    'Puede asignar un nombre a la implementación que sea fácil de distinguir cuando la use.',
  DEPLOYMENT_POD_TEMPLATE_DESC:
    'La carga de trabajo puede crear automáticamente un número específico de pods en función de la plantilla de Pod y el número de réplicas que establezca.',
  DEPLOYMENTS_VOLUME_DESC:
    'Puede montar el mismo volumen de almacenamiento temporal o volumen de almacenamiento persistente en cada copia de los pods implementados.',
  DEPLOYMENT_LABEL_SETTINGS_DESC:
    'Las etiquetas son uno o más pares clave-valor asociados con un recurso, como un Pod. Por lo general, identificamos, organizamos o encontramos objetos de recursos a través de etiquetas.',
  DEPLOYMENT_NODE_SELECT_DESC:
    'Al usar un selector para enviar un Pod a un nodo que se espera que se ejecute, estos selectores son uno o más conjuntos de pares clave-valor que coinciden con las etiquetas del nodo.',
  DEPLOYMENT_JOB_SETTINGS_DESC:
    'Puede configurar la plantilla de Job Spec, donde Job Controller es responsable de crear pods basados en Job Spec y seguir monitoreando el estado del Pod hasta que se complete con éxito. Si falla, RestartPolicy (que admite OnFailure y Never) determina si se debe crear un nuevo Pod y volver a ejecutar el trabajo.',
  DEPLOYMENT_CRONJOB_SETTINGS_DESC:
    'La configuración de CronJob es la parte de la plantilla para CronJob, tiene exactamente el mismo esquema que un trabajo, donde el controlador de trabajo es responsable de crear pods basados en la especificación de CronJob y seguir monitoreando el estado del Pod hasta que se complete con éxito. Si falla, RestartPolicy (que admite OnFailure y Never) determina si se debe crear un nuevo Pod y volver a ejecutar CronJob.',
  STATEFULSETS_VOLUME_TEMPLATE_DESC:
    'Cree un volumen persistente dedicado para cada Pod del conjunto con estado y móntelo en el Pod apropiado',
  STATEFULSETS_ADD_VOLUME_TEMPLATE_DESC:
    'Por favor agregue una plantilla de volumen',
  STATEFULSETS_BASEINFO_DESC:
    'StatefulSet se usa para administrar aplicaciones con estado.',
  STATEFULSETS_SERVICE_CONFIG_DESC:
    'El clúster no genera IP de clúster para el servicio. En otras palabras, un StatefulSet funciona con un headless servicio con selector. Por lo tanto, se accede al servicio internamente a través de las IP de punto final del servicio directamente. StatefulSet se utiliza para aplicaciones con estado, como los servicios maestro-esclavo.',
  DAEMONSETS_BASEINFO_DESC:
    'El daemonset garantiza que se está ejecutando una copia del contenedor en cada host, a menudo utilizada para implementar registros, monitoreo u otras aplicaciones de administración del sistema para algunos clústeres.',
  DAEMONSETS_VOLUME_DESC:
    'Puede montar un HostPath, volúmenes temporales o volúmenes persistentes en un Pod del conjunto de daemons.',
  JOBS_BASEINFO_DESC: '',
  JOBS_POD_TEMPLATE_DESC:
    'Especifique la plantilla de Pod para ejecutar en el trabajo',
  JOBS_VOLUME_DESC:
    'Puede montar volúmenes temporales o volúmenes persistentes en un Pod del trabajo.',
  MAXIMUM_RETRIES: 'Límite de retroceso',
  MAXIMUM_RETRIES_DESC:
    'Maximum number of retries before the Job is marked as failed. The default value is 6.',
  PARALLEL_PODS: 'Paralelismo',
  PARALLEL_PODS_DESC: 'Number of Pods that run concurrently.',
  COMPLETE_PODS: 'Terminaciones',
  COMPLETE_PODS_DESC:
    'Number of Pods that complete successfully required for the Job to be marked as complete.',
  MAXIMUM_DURATION: 'Active Deadline (s)',
  MAXIMUM_DURATION_DESC:
    'Maximum duration of the Job. The Job is terminated when it reaches the specified deadline.',
  RESTART_POLICY_TIP:
    'RestartPolicy solo puede especificar Never o OnFailure, cuando el trabajo no se completa: <br/> * Si RestartPolicy especifica Nunca, el trabajo crea un nuevo Pod cuando el Pod falla y el Pod fallido no desaparece. <br/> * Si RestartPolicy especifica OnFailure, el trabajo reiniciará internamente el contenedor cuando el Pod falle, en lugar de crear un nuevo Pod.',
  RESTART_POLICY_NEVER_DESC: 'Never (create a new Pod when a Pod fails)',
  RESTART_POLICY_ONFAILURE_DESC:
    'On failure (restart the container when a Pod fails)',
  CRONJOBS_BASEINFO_DESC:
    'Información básica sobre el CronJob. Debe especificar el nombre y el horario.',
  CRONJOBS_VOLUME_DESC:
    'Puede montar volúmenes temporales o volúmenes persistentes en un Pod del cronjob.',
  CRONJOB_CRON_DESC:
    'Set a schedule for the CronJob. KubeSphere uses UTC by default and you need to adjust the schedule according to your time zone. <a href="//en.wikipedia.org/wiki/Cron" target="_blank">Learn More</a>',
  MAXIMUM_DELAY_DESC:
    'Deadline for starting the Job if the scheduled run is missed for any reason.',
  VOLUME_EMPTY_TIP: 'No hay volúmenes creados',
  HOST_PATH_DESC:
    'HostPath le permite montar el sistema de archivos en el host al Pod. Si el Pod necesita usar archivos en el host, puede usar HostPath.',
  SELECT_SPECIFIC_KEYS_DESC:
    'Selecciona la clave que desea usar y la ruta del archivo donde se expondrá cada clave. La ruta del archivo es equivalente a la ruta de montaje. El contenido de cada archivo es el valor de la clave.',
  EMPTY_DIR_DESC:
    'Los volúmenes temporales se asignan al host junto con el Pod. Cuando se elimina un Pod del host, el volumen temporal también se elimina y los datos del volumen se eliminan permanentemente. <br /> Nota: Eliminar un contenedor no afecta el volumen temporal.',
  SELECT_VOLUME_TYPE_DESC:
    'Puede elegir un tipo de volumen adecuado para agregar',
  MOUNT_VOLUME_DESC:
    'Para volúmenes de almacenamiento persistentes, selecciona un volumen que admita el modo de lectura y escritura de múltiples nodos (ROX o RWX). De lo contrario, la actualización de los pods puede fallar porque los pods no están en el mismo nodo. Si elige un volumen de modo de lectura-escritura (RWO) de nodo único, también puede programar los pods en el mismo nodo por selección de nodo para evitar errores de actualización.',
  TARGET_CPU_USAGE_DESC:
    'Las réplicas aumentarán cuando el uso de la CPU exceda este valor objetivo, por el contrario, disminuirá.',
  TARGET_MEMORY_USAGE_DESC:
    'Las réplicas aumentarán cuando el uso de la memoria exceda este valor objetivo, por el contrario, disminuirá.',
  MINIMUM_REPLICAS_DESC: 'Valor mínimo de la cantidad de réplicas',
  MAXIMUM_REPLICAS_DESC: 'Valor máximo del número de réplicas.',
  REPLICAS_PLACEHOLDER: 'Predeterminado: 1',
  ADD_VOLUME_TEMPLATE_DESC:
    'El ciclo de vida del volumen será el mismo que el del pod.',
  MORE: 'Más',
  MANAGE: 'Manage',
  REVISION_ROLLBACK_SELECT: 'Por favor selecciona la versión a revertir',
  REVISION_TITLE: '{nombre} revisión',
  PROBE_TIME: '{delay} s delay, {timeout} s timeout',
  INITIAL_DELAY_DESC:
    'Número de segundos después de que el contenedor se haya iniciado antes de que se inicien las sondas de vida.',
  TIMEOUT_PERIOD_DESC:
    'Número de segundos después de los cuales la sonda agota el tiempo de espera. El valor predeterminado es 1 segundo y el valor mínimo es 1.',
  CHECK_INTERVAL_DESC:
    'Frecuencia de la sonda (en segundos), que por defecto es de 10 segundos. El valor mínimo es 1.',
  SUCCESS_THRESHOLD_DESC:
    'Mínimos éxitos consecutivos para que la sonda se considere exitosa después de haber fallado. El valor predeterminado es 1 y debe ser 1 para la vida y el inicio. El valor mínimo es 1.',
  FAILURE_THRESHOLD_DESC:
    'Fallos mínimos consecutivos para que la sonda se considere fallida después de haber tenido éxito. El valor predeterminado es 3 y el valor mínimo es 1.',
  CONFIGURE_AUTOSCALING_DESC:
    'Escala automática de las réplicas automáticamente de acuerdo con el uso de CPU y memoria. Si se especifican tanto la CPU como la memoria, las réplicas se agregan o eliminan después de que se cumpla alguna de las condiciones.',
  PROBE_MSG:
    'Readiness Probe comprueba si el contenedor está listo para manejar solicitudes. Fallo significa que el contenedor no debe recibir ningún tráfico del agente, incluso si se estuviera ejecutando. Liveness Probe comprueba si el contenedor que lo configura se está ejecutando. Si la sonda falla, el contenedor se eliminará y la política de reinicio se implementará para el contenedor.',
  WORKLOAD_REPLICA_MSG:
    'En el ámbito definido por el usuario, si aumenta el número de Pods, ReplicationController terminará los Pods adicionales. En cambio, el RC creará un nuevo Pod que permanece en el alcance definido. Por ejemplo, el RC recreará el Pod en el nodo después del mantenimiento del Pod (como las actualizaciones del kernel).',
  DEPLOYMENTS_REPLICA_DESC:
    'La implementación se usa para describir el estado deseado que se espera que alcance la aplicación. Se utiliza principalmente para describir aplicaciones sin estado. El controlador de implementación mantiene el número y el estado de las réplicas, lo que garantiza que el estado sea coherente con el estado esperado definido. Puede aumentar las réplicas para cumplir con cargas más altas. Revertir la versión de implementación puede eliminar errores del programa. Y puede crear un autoescalador para manejar de manera flexible la carga en diferentes escenarios.',
  STATEFULSETS_REPLICA_DESC:
    'StatefulSet se usa para describir aplicaciones con estado, como las relaciones maestro-esclavo entre réplicas y el almacenamiento de datos persistente. Al igual que una implementación, un StatefulSet crea réplicas idénticas. La diferencia es que cada réplica tiene un identificador persistente y único que mantiene en cualquier reprogramación. Puede usar StatefulSets para lograr la implementación ordenada, la eliminación y las actualizaciones sucesivas.',
  DAEMONSETS_REPLICA_DESC:
    'DaemonSet garantiza que cada nodo del clúster ejecute una réplica. Cuando un nodo se une al clúster o se va, el número de réplicas se ajusta automáticamente para garantizar que el número de réplicas sea el mismo que el número de nodos en el clúster. Puede usar DaemonSets para ejecutar servicios de almacenamiento (GlusterFS, Ceph, etc.), servicios de recopilación de registros (Fluentd, Logstash, etc.) y servicios de monitoreo.',
  SELECT_CONFIGMAP_DESC:
    'Agregue un nuevo volumen desde el valor de ConfigMap.',
  SELECT_SECRET_DESC: 'Agregue un nuevo volumen desde el valor Secreto.',
  MONITORING_ALERT_DESC:
    'El gráfico de monitoreo actual muestra cinco réplicas como máximo. Puede hacer clic en "Ver todas las réplicas" para ver más gráficos de monitoreo si el número de réplicas supera las cinco.',
  CONTAINER_CPU_DESC:
    'Se utiliza como criterio de asignación de recursos al programar contenedores. Se permite programar el contenedor en el nodo solo si la cantidad total de CPU que se puede asignar en el nodo es igual o mayor que el valor de solicitud de la CPU del contenedor.',
  CONTAINER_MEMORY_DESC:
    'Se utiliza como criterio de asignación de recursos al programar contenedores. Se permite programar el contenedor en el nodo solo si la cantidad total de memoria que se puede asignar en el nodo es igual o mayor que el valor de solicitud de la memoria del contenedor.',
  IMAGE_PULL_POLICY_ALWAYS: 'Volver a descargar la imagen (siempre)',
  IMAGE_PULL_POLICY_IFNOTPRESENT: 'Use la imagen local primero (IfNotPresent)',
  IMAGE_PULL_POLICY_NEVER: 'Usar solo imagen local (nunca)',
  IMAGE_PULL_POLICY_ALWAYS_DESC:
    'Tire de la imagen cada vez que se inicia el pod.',
  IMAGE_PULL_POLICY_IFNOTPRESENT_DESC:
    'Tire de la imagen solo si no existe localmente.',
  IMAGE_PULL_POLICY_NEVER_DESC:
    'Solo se usará la imagen local, lo que hará que el contenedor sea anormal si la imagen requerida no existe localmente.',
  LIVENESS_CHECK_DESC:
    'Este método de verificación se utiliza para detectar si el contenedor está vivo.',
  READINESS_CHECK_DESC:
    'Este método de verificación se utiliza para detectar si el contenedor está listo para atender solicitudes.',
  STARTUP_CHECK_DESC:
    'Este método de verificación se utiliza para detectar si el contenedor se inicia correctamente.',
  POD_CONDITION_INITIALIZED: 'Inicializado',
  POD_CONDITION_INITIALIZED_DESC:
    'Todos los contenedores init se han iniciado con éxito.',
  POD_CONDITION_READY: 'Listo',
  POD_CONDITION_READY_DESC:
    'El pod ya se está ejecutando y se puede acceder a través del servicio.',
  POD_CONDITION_CONTAINERSREADY: 'Contenedores Listo',
  POD_CONDITION_CONTAINERSREADY_DESC:
    'Los contenedores en la cápsula están listos.',
  POD_CONDITION_PODSCHEDULED: 'Pod programado',
  POD_CONDITION_PODSCHEDULED_DESC:
    'El pod se ha asignado correctamente a un nodo.',
  POD_ASSIGNED_DESC:
    'El valor de solicitud (es decir, Solicitud) establecido por el pod en el grupo de pod se utiliza como base para determinar la asignación de recursos. Solo cuando la cantidad que se puede asignar en el nodo ≥ el valor requerido del pod, se puede asignar el pod a este nodo.',
  POD_DESC:
    'Un Pod es la unidad de ejecución básica de una aplicación Kubernetes, que representa la unidad más pequeña y más simple en el modelo de objetos Kubernetes que crea o implementa.',
  POD_EMPTY_DESC:
    'Un Pod es la unidad de ejecución básica de una aplicación Kubernetes, que representa la unidad más pequeña y más simple en el modelo de objetos Kubernetes que crea o implementa.',
  FILL_IMAGE_DEFAULT_PORTS_DESC:
    'Ya sea para exponer el puerto predeterminado de la imagen?',
  REQUEST_EXCEED_LIMIT:
    'Las solicitudes de recursos no deben ser mayores que los límites de recursos',
  REQUEST_EXCEED_AVAILABLE_QUOTA:
    'Resource setting should not be greater than workspace resource limits.',
  STATUS_INFORMATION: 'Condiciones',
  WORKLOAD_CONDITION_AVAILABLE: 'Disponible',
  WORKLOAD_CONDITION_PROGRESSING: 'Progresando',
  VOLUME_OR_TEMPLATE_EMPTY:
    'Ha habilitado la opción de recopilar los registros en el disco. Agregue al menos un volumen y especifique el directorio en el que se encuentra el registro.',
  VOLUME_EMPTY:
    'You have enabled Disk Log Collection. Please mount at least one volume and specify the directory of the logs.',
  PROJECT_COLLECT_SAVED_DISABLED_DESC:
    'Please contact the project administrator to enable disk log collection in <b>Project Settings</b> > <b>Advanced Settings</b>.',
  COLLECT_LOGS_ON_VOLUMES_DESC:
    'After you add a volume (ReadAndWrite mode), you can collect logs inside the volume. When you enable disk log collection, the Filebeat image will be used as a sidecar pattern and injected into the Pod to collect logs.',
  ISTIO_PROTOCOL_TIP:
    'To fully use the Application Governance feature, select a protocol based on the actual usage of the Service. The port name will be generated in the <Protocol>-<Name> format.',
  CONTAINER_LOG_PATH_TIP:
    'La ruta relativa del registro del contenedor es la ruta desde la ruta de montaje del módulo, que se puede proporcionar en modo global. Cuando hay varios grupos, sepárelos por comas. Por ejemplo, cuando la ruta de montaje del pod es / data, la ruta relativa del registro de pod se configura como log / *. Log, lo que significa que todos los archivos de sufijos .log en el directorio / data / log coinciden. Si necesita hacer coincidir todos los archivos de sufijos .log en el directorio / data / log y sus subdirectorios, puede configurar la ruta relativa del registro de pod a log / ** / *. Log.',
  SPECIFY_SUBPATH_TIP:
    'Solo es apropiado para montar volúmenes, pero no para hostpath',
  DELETE_WORKLOAD_DESC_SI:
    'You are about to delete the workload {resource}.<br/>Do you want to also delete the resource related to the workload?',
  DELETE_WORKLOAD_DESC_PL:
    'You are about to delete the workloads {resource}.<br/>Do you want to also delete the resources related to the workloads?',
  SELECT_VOLUME_DESC:
    'Selecciona un volumen que se haya creado y móntelo en el contenedor.',
  RECREATE_CONFIRM_DESC:
    'Está a punto de volver a implementar la carga de trabajo {resource} ({type}), el pod se volverá a implementar de acuerdo con la estrategia de actualización y su negocio puede verse interrumpido temporalmente.',
  CONTAINER_SECURITY_CONTEXT_DESC:
    'Un contexto de seguridad define la configuración de privilegios y control de acceso para un Pod o Contenedor.',
  POD_SECURITY_CONTEXT_DESC: 'Customize the Pod privilege settings.',
  POD_SECURITY_CONTEXT_TIP:
    'Contexto de seguridad de pod puede proporcionar configuraciones predeterminadas de usuarios y grupos de usuarios y configuraciones de parámetros seLinuxOptions para contenedores en el pod. Si estos parámetros se han definido en el contenedor, la configuración en el contenedor tiene prioridad.',
  PRIVILEGED_MODE: 'Privilegiado',
  PRIVILEGED_MODE_DESC:
    'El proceso en el contenedor es esencialmente equivalente al usuario raíz en el nodo host.',
  ALLOW_PRIVILEGE_ESCALATION: 'AllowPrivilegeEscalation',
  ALLOW_PRIVILEGE_ESCALATION_DESC:
    'Si el proceso puede adquirir más privilegios que el proceso padre. Cuando se ejecuta en modo privilegiado, está habilitado.',
  ROOT_DIRECTORY_READONLY: 'ReadOnlyRootFilesystem',
  ROOT_DIRECTORY_READONLY_DESC:
    'Si la ruta raíz del sistema de archivos del contenedor es de solo lectura.',
  RUN_AS_NON_ROOT: 'Ejecutar como no root',
  RUN_AS_NON_ROOT_DESC:
    'kubernetes realizará una comprobación antes de ejecutar el contenedor para asegurarse de que el proceso del contenedor no se esté ejecutando como usuario raíz (UID 0); de lo contrario, el contenedor no se iniciará.',
  RUN_AS_USER_DESC:
    'El UID para ejecutar el punto de entrada del proceso contenedor. El valor predeterminado es el usuario especificado en los metadatos de la imagen si no se especifica.',
  RUN_AS_USER_GROUP_DESC:
    'El GID para ejecutar el punto de entrada del proceso contenedor. Utiliza el tiempo de ejecución predeterminado si no está configurado.',
  WORKLOAD_EMPTY_DESC:
    'La carga de trabajo suele ser el operador real para acceder a los servicios y también es el operador real para las aplicaciones del sistema, como la recopilación y supervisión de registros de nodos. Workload es también un modelo abstracto para un grupo de Pods.',
  CONTAINER_RESOURCE_LIMIT_TIP:
    'Set the resource limits and requests of the container so that the container is scheduled to appropriate nodes.',
  COMPARE_WITH: 'Comparación con la versión anterior {versión}',
  REVISION_RECORDS_DESC:
    'Después de cambiar la plantilla de recursos de la carga de trabajo, se generará un nuevo registro y los pods se reprogramarán para la actualización de la versión. Las últimas 10 versiones se guardarán de forma predeterminada. Puede implementar una redistribución basada en el registro de cambios.',
  CLUSTER_DIFF_CONTAINER_SETTINGS_DESC:
    'Establecer diferentes contenedores en diferentes grupos según las necesidades',
  CLUSTER_DIFF_PORT_SETTINGS_DESC:
    'Se pueden configurar diferentes puertos de servicio en diferentes grupos',
  CLUSTER_DIFF_ENVIRONMENT_VARIABLES_DESC:
    'Se pueden configurar diferentes entornos de contenedores en diferentes grupos',
  POD_SCALE_DESC: 'El número de instancias de Pod que se pueden escalar',
  REPLICAS_AVAILABLE: 'Disponibles',
  REPLICAS_DESIRED: 'Esperadas',
  SYNC_HOST_TIMEZONE_DESC:
    'El timezone del contenedor será consistente con el del host después de la sincronización.',
  HOSTPATH_TIP:
    'Un volumen de tipo HostPath montará un fichero o directorio del sistema de ficheros del nodo host en tu Pod. La mayoría de Pods no lo necesitarán, pero puede resultar muy útil para algunas aplicaciones.',

  DEPLOY_PLACEMENT_TIP_TITLE: 'What is Deployment Location?',
  DEPLOY_PLACEMENT_TIP_VALUE:
    'You can deploy Pods on different clusters and define the number of replicas deployed. The Federation Controller Manager schedules Pods on different clusters in a unified way and synchronizes status.',
  CERT_ERROR:
    'A certificate error was found, do you want to ignore the certificate verification',
  IGNORE_CERT_WARN_DESC:
    'Ignoring the verification certificate may cause the account password to be disclosed. ',
  INVALID_PROJECT: 'Proyecto no válido',
  DESC_CREATE_CONFIGMAP_SECRET:
    'If there is no suitable configuration file or key reference, you can',
  // Pods Page
  NODE_IP: '{node} ({ip})',

  // Jobs
  JOB_PL: 'Jobs',
  JOBS: 'Jobs',
  NUMBER_OF_JOBS: 'Number of Jobs',
  JOB_LOW: 'Job',
  CRONJOB: 'CronJob',
  CRONJOB_PL: 'CronJobs',
  NUMBER_OF_CRONJOBS: 'Number of CronJobs',
  CRONJOB_LOW: 'CronJob',
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
  ACTIVATE_APP: 'Activar aplicación',
  ACTIVATE_VERSION: 'Activar versión',
  Activated: 'Activado',
  admin: 'administración',
  'App Information': 'Información de la aplicación',
  'App Instances': 'Instancias de aplicaciones',
  'Audit Records': 'Registros de auditoria',
  business: 'negocio',
  CANCEL_SUBMISSION: 'Cancelar revisión',
  creating: 'creando',
  'Delete Version': 'Eliminar versión',
  deleting: 'borrando',
  'Deployed Instances': 'Instancias desplegadas',
  'Develop and test guide': 'Guía de desarrollar y test',
  developer: 'desarrollador',
  Developing: 'Desarrollando',
  DOWNLOAD_SUCCESSFUL: 'Descargado con éxito',
  Draft: 'Borrador',
  global_admin: 'global_admin',
  'in-review': 'en revisión',
  'In-review': 'En revisión',
  isv: 'isv',
  NO_VERSION_INFO_DESC: 'No version information is found.',
  Pass: 'Pasar',
  PASSED: 'Pasado',
  'Pending-review': 'Revisión pendiente',
  Published: 'Publicado',
  Recall: 'Retirar',
  Recalled: 'Retirado',
  Reject: 'Rechazar',
  Rejected: 'Rechazado',
  Release: 'Lanzamiento',
  'Release to Store': 'Lanzar a la tienda',
  Review: 'Revisión',
  Starting: 'Empezando',
  Stopping: 'Parando',
  Submit: 'Enviar',
  'Submit for Review': 'Enviar revisión',
  Submitted: 'Enviada',
  SUSPEND_APP: 'Suspender aplicación',
  SUSPEND_VERSION: 'Suspender versión',
  Suspended: 'Suspendido',
  technical: 'técnico',
  'Test Steps': 'Pasos de prueba',
  'Version Management': 'Gestión de versiones',
  'Version Update Info': 'Información de actualización de versión',
  Versions: 'Versiones',
  'View in Store': 'Ver en la tienda',
  Working: 'Trabajando',
  'Wrong version number format': 'Formato de número de versión incorrecto',

  VERSION_DELETE_TIP:
    '¿Está seguro de eliminar la versión <strong>{name}</strong> ?',
  VERSION_SUBMIT_TIP:
    '¿Está seguro de enviar la versión <strong>{name}</strong> para auditoría?',
  VERSION_CANCEL_TIP:
    '¿Está seguro de cancelar la revisión de la versión <strong>{name}</strong> ?',
  VERSION_RELEASE_TIP:
    'Los usuarios pueden ver e implementar la versión <strong>{name}</strong> en la tienda cuando se lance. ¿Estás seguro de lanzarlo ahora?',
  VERSION_SUSPEND_TIP:
    'La versión <strong>{name}</strong> no se mostrará en la tienda cuando se suspenda. ¿Estás seguro de suspenderlo ahora?',
  VERSION_RECOVER_TIP:
    'La versión <strong>{name}</strong> se mostrará nuevamente en la tienda. ¿Estás seguro de activarlo ahora?',
  APP_SUSPEND_TIP:
    'La aplicación <strong>{name}</strong> no se puede comprar en la tienda cuando está suspendida. ¿Estás seguro de suspenderlo ahora?',
  APP_RECOVER_TIP:
    'La aplicación <strong>{name}</strong> y las versiones suspendidas se mostrarán nuevamente en la tienda. ¿Estás seguro de activarlo ahora?',

  PACKAGE_FILE_DESC:
    'El archivo Package.json, que describe la información básica de una aplicación o versión, como el nombre y el número de versión.',
  CONFIG_FILE_DESC: 'Perfil predeterminado de la aplicación',
  LICENSE_FILE_DESC: 'Protocolo en formato de texto',
  LOCALE_ES__FILE_DESC:
    'Traducción al español para la configuración de la aplicación',
  LOCALE_EN__FILE_DESC:
    'Traducción al inglés para la configuración de la aplicación',
  LOCALE_ZH_FILE_DESC:
    'Traducción al chino para la configuración de la aplicación',
  CHART_FILE_DESC:
    'Archivo yaml, que se utiliza para describir la información básica de Chart, ' +
    'como el nombre y la versión.',
  README_FILE_DESC: 'Introducción a la aplicación e instrucciones',
  REQUIREMENTS_FILE_DESC:
    'Archivos de descripción para almacenar otros charts que actualmente dependen del chart',
  VALUES_FILE_DESC: 'Archivo de configuración predeterminado del chart',
  CHARTS_FILE_DESC:
    'Coloque otros chartys de los que depende actualmente el chart en este directorio',
  TEMPLATES_FILE_DESC:
    'Despliega el directorio de plantilla de archivo, completa el valor correspondiente en values.yaml y genera el archivo de configuración final de kubernetes',
  NOTES_FILE_DESC: 'Guía de uso',
  VERSION_SUBMIT_TEST_STEPS: `
    1. Todos los charts dependientes han sido enviados <br/> 
    2. Verificación estática exitosa (helm lint) <br/> 
    3. Inicio exitoso de aplicaciones (helm install) con valores predeterminados: ' +
    'todos los pods están en estado de ejecución y todos los servicios de servicio tienen ' +
    'al menos un endpoint <br /> 
    4. No hay vulnerabilidad de seguridad en los mirros utilizados <br/> 
    5. Admite actualización <br/> 
    6. Admite la configuración de aplicaciones personalizadas <br/> 
    7. No usar la función alfa de Kubernetes <br/> 
    8. Se requieren archivos README detallados, incluida la introducción de aplicaciones, ' +
    'condiciones previas y cómo personalizar los parámetros de configuración <br/>`,

  VERSION_SUBMIT_NOTE:
    'Antes de enviar para su revisión, asegúrate de que su aplicación haya pasado ' +
    'las pruebas básicas mostradas abajo',
  VERSION_SUBMIT_DOC: 'Consulte un manual de prueba más completo',
  UPDATE_LOG_DESC: 'Se usa para describir los detalles de esta actualización.',

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
  'A built-in cluster administrator': 'Un administrador de clúster integrado',
  Accounts: 'Cuentas',
  CREATE_USER: 'Agregar usuario',
  'At least 1 number': 'Al menos 1 número',
  'At least 1 uppercase and lowercase letter':
    'Al menos 1 letra mayúscula y minúscula',
  'Authorized Projects': 'Proyectos autorizados',
  Avatar: 'Avatar',
  'Avoid using the password that has already been used on other websites or the one that can be easily guessed.':
    'Evite utilizar la contraseña que ya ha utilizado en otros sitios web o que se pueda adivinar fácilmente.',
  'Change Password': 'Cambia la contraseña',
  'Create User': 'Crear usuario',
  CURRENT_PASSWORD: 'contraseña actual',
  EDIT_USER: 'editar usuario',
  EMAIL: 'Email',
  EMAIL_EXISTS: 'EL email ya existe',
  USERNAME_INVALID: 'Nombre de usuario no válido. {message}',
  'Login History': 'Historial de inicio de sesión',
  'New Password': 'Nueva contraseña',
  NOT_LOGGED_IN: 'Not logged in',
  'Password length is at least 6 characters':
    'La longitud de la contraseña es de al menos 6 caracteres.',
  PASSWORD_SETTINGS: 'Configuración de contraseña',
  'Password Strength': 'Seguridad de la contraseña',
  ENTER_CURRENT_PASSWORD_TIP: 'Por favor introduce la contraseña actual',
  EMAIL_EMPTY_DESC: 'Por favor introduce el correo electrónico',
  USERNAME_EMPTY_DESC: 'Por favor introduce el nombre de usuario',
  'Please repeat the new password': 'Por favor repita la nueva contraseña',
  'Please select role': 'Por favor selecciona un rol',
  'Repeat the new password': 'Repite la nueva contraseña',
  PASSWORD_NOT_SAME_DESC: 'La contraseña ingresada dos veces debe ser la misma',
  Time: 'Hora',
  TIME: 'Hora',
  'Unable to delete itself': 'No se puedes eliminar',
  User: 'Usuario',
  USER: 'Usuario',
  USER_LOW: 'user',
  USER_EMPTY_DESC: 'Please create a user.',
  'User Management': 'Gestión de usuarios',
  USERNAME_EXISTS: 'El ombre de usuario ya existe',
  users: 'usuarios',
  ENTER_CURRENT_PASSWORD_DESC:
    'Debe ingresar correctamente la contraseña actual para cambiar a una nueva contraseña.',
  user_active: 'Activo',
  USER_ACTIVE: 'Activo',
  USER_AUTHLIMITEXCEEDED: 'Login Restricted',
  USER_PENDING: 'Pendiente',
  USER_DISABLED: 'Deshabilitado',
  USERNAME_DESC:
    'Solo puede contener letras minúsculas, números ,puntos y guiones ("-"), y debe comenzar con una letra minúscula y terminar con un número o letra minúscula. La longitud máxima de carácteres se establece en 32.',
  EMAIL_DESC: 'El correo electrónico se utiliza para iniciar sesión.',
  USER_SETTING_EMAIL_DESC:
    'El correo electrónico se utiliza para iniciar sesión.',
  PASSWORD_DESC:
    'La contraseña debe contener números y letras y debe tener entre 6 y 64 caracteres.',
  PASSWORD_INVALID_DESC:
    'La contraseña debe contener números y letras y debe tener entre 6 y 64 caracteres.',
  PLATFORM_ROLE_DESC:
    'Los tipos de roles se clasifican en clúster y proyecto. La función de tipo de clúster se utiliza para administrar el clúster.',
  USER_DESC:
    'Este módulo permite al administrador del sistema administrar cuentas, como crear / actualizar / leer / eliminar una cuenta. El administrador también puedes administrar el rol de cada cuenta. Los usuarios pueden iniciar sesión en la plataforma a través de su nombre de cuenta o dirección de correo electrónico.',
  USER_CREATE_DESC:
    'Este módulo permite al administrador del sistema administrar cuentas, como crear / actualizar / leer / eliminar una cuenta. El administrador también puedes administrar el rol de cada cuenta. Los usuarios pueden iniciar sesión en la plataforma a través de su nombre de cuenta o dirección de correo electrónico.',
  ROLE_BASEINFO_DESC: '',
  ROLE_AUTHORIZATION_DESC: '',
  USER_AVATAR_TIP:
    'El tamaño del avatar debe ser inferior a 120 px X 120 px y debe admitir el formato png, jpg.',
  MEMBER_ROLE_CREATE_DESC:
    'Lo que un usuario está autorizado a hacer depende de la función que define la identidad del usuario, así como de la relación entre el usuario y los recursos que el usuario tiene acceso para ver y manejar. Los usuarios pueden crear roles personalizados cuando el rol preestablecido de KubeSphere no satisface sus necesidades. La mayor ventaja de los roles personalizados es que se pueden configurar para admitir la gestión detallada de los recursos de la plataforma, ya que se pueden autorizar diferentes roles para acceder a diferentes recursos',
  CLUSTER_ROLE_DESC:
    'Este módulo le permite administrar el acceso de los usuarios dentro de un clúster.',
  NOT_LOGIN_YET: 'Not Logged in yet',

  // Users > Details
  SOURCE_IP_ADDRESS: 'Source IP Address',
  LOGIN_HISTORY: 'Login History',
  NO_LOGIN_HISTORY: 'No login history is found.',
  CHANGE_PASSWORD: 'Change Password',
  SUCCESSFUL: 'Successful',
  FAILED: 'Failed',
  NEW_PASSWORD: 'New Password',
  CONFIRM_PASSWORD: 'Confirm Password',
  CONFIRM_PASSWORD_TIP: 'Please enter the new password again.',
  LANGUAGE: 'Language',
  USER_SETTINGS: 'User Settings',
  LOG_OUT: 'Log Out',
  ABOUT: 'About',
  USERNAME_OR_EMAIL: 'Username or Email',
  WELCOME: 'Welcome',
  connected: 'conectado',
  COPY: 'Copiar',
  COPIED_SUCCESSFUL: 'Copia con éxito',
  Disconnect: 'Desconectar',
  disconnected: 'desconectado',
  'Download File': 'Descargar archivo',
  'Kubeconfig File': 'Archivo kubeconfig',
  'KubeSphere Terminal': 'Terminal KubeSphere',
  'Launch kubectl': 'Lanzar kubectl',
  'Put this into': 'Poner esto en',

  KUBECONFIG_TIP: `
    <h2><a id="KubeConfig_Configuration_Method_0"></a>Método de configuración KubeConfig</h2>
    <p>Por favor, consultar la <a href="https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/" target="_blank">documentación oficial</a> para más comandos.</p>
  `,

  VIEW_KUBE_CONFIG:
    'Related operations of kubeConfig configuration include viewing and downloading',

  KUBECTL_TIP: `
    <h2><a id="KubeCtl_Common_Instructions_0"></a>Instrucciones comunes de KubeCtl</h2>
    <p>Por favor, consultar la <a href="https://kubernetes.io/docs/reference/kubectl/overview/" target="_blank">documentación oficial</a> para más comandos.</p>
    <h3><a id="kubectl_output_format_4"></a>Formato de salida de kubectl</h3>
    <ul>
    <li>Mostrar más información sobre el pod.</li>
    </ul>
    <p><code>kubectl get pod <pod-name></pod-name> -o wide</code></p>
    <ul>
    <li>Mostrar detalles del pod en formato yaml</li>
    </ul>
    <p><code>kubectl get pod <pod-name> -o yaml</code></p>
    <h3><a id="kubectl_Operation_14"></a>kubectl Operation</h3>
    <h4><a id="1_Create_a_resource_object_16"></a>1. Crea un objeto de recurso</h4>
    <ul>
    <li>Crea servicio y rc una vez según la configuración del archivo yaml</li>
    </ul>
    <p><code>kubectl create -f my-service.yaml</code></p>
    <ul>
    <li>Crea todos los archivos .yaml, .yml, .json en el directorio</li>
    </ul>
    <p><code>kubectl create -f <directory></code></p>
    <h4><a id="2_View_resource_objects_26"></a>2. Ver los objetos de recurso</h4>
    <ul>
    <li>Ver lista de todos los pods</li>
    </ul>
    <p><code>kubectl get pods</code></p>
    <ul>
    <li>Ver lista de rc y servicios</li>
    </ul>
    <p><code>kubectl get services</code></p>
    <h4><a id="3_View_resource_details_36"></a>3. Ver detalles del recurso</h4>
    <ul>
    <li>Mostrar detalles del nodo</li>
    </ul>
    <p><code>kubectl describe nodes <node-name></code></p>
    <ul>
    <li>Mostrar detalles del pod</li>
    </ul>
    <p><code>kubectl describe pods/<pod-name></code></p>
  `,
  VOLUME_EXPANSION: 'Volume Expansion',
  AVAILABLE_CAPACITY: 'Capacidad disponible',
  CREATE_SNAPSHOT: 'Crear snapshot',
  'Create Storage Class': 'Crear clase de almacenamiento',
  'Create Volume': 'Crear volumen',
  CREATE_VOLUME_WITH_SNAPSHOT: 'CREATE_VOLUME_WITH_SNAPSHOT',
  'Custom Provisioner': 'Provisioner personalizado',
  DEFAULT: 'Predeterminado',
  'Default Storage Class': 'Clase de almacenamiento predeterminada',
  'Default Volume': 'Volumen predeterminado',
  'Delete Volume': 'Eliminar volumen',
  'Disable Volume Snapshot': 'Deshabilitar snapshot de volumen',
  'Apply immediately': 'Efecto inmediato',
  'Enable Volume Snapshot': 'Habilitar snapshot de volumen',
  Expand: 'Expandir',
  EXPAND_VOLUME: 'Ampliar volumen',
  EXPAND: 'Expand',
  AVAILABLE: 'En desuso',
  IN_USER: 'En uso',
  MOUNT_INFORMATION: 'Información de montaje',
  'Mount Options': 'Opciones de montaje',
  'Mount Status': 'Estado de montaje',
  // Volumes List Page
  MOUNT_STATUS: 'Montar',
  MOUNTED: 'Montado',
  MOUNTED_PODS: 'Pods montados',
  NOT_MOUNTED: 'No montado',
  Parameters: 'Parámetros',
  'Parameters (key-value pairs)': 'Parámetros (pares clave-valor)',
  PersistentVolumeClaim: 'Volume',
  PersistentVolumes: 'PersistentVolumes',
  RECLAIM_POLICY: 'Reclaim Policy',
  CREATE: 'Create',
  UPDATE: 'Update',
  Scalable: 'Escalable',
  SET_AS_DEFAULT_STORAGE_CLASS: 'Set as Default Storage Class',
  'Snapshot Message': 'Mensaje de snapshot',
  'Snapshots Message': 'Mensaje de snapshots',
  'Set as default storage class':
    'Establecer como clase de almacenamiento predeterminada',
  SNAPSHOT_PL: 'Snapshots',
  'Storage Class': 'Clase de almacenamiento',
  STORAGE_CLASS: 'Clase de almacenamiento',
  STORAGE_CLASS_PL: 'Storage Classes',
  STORAGE_CLASS_LOW: 'storage class',
  STORAGE_CLASS_EMPTY_DESC: 'Please create a storage class.',
  STORAGE_CLASS_VALUE: 'Storage class: {value}',
  'Storage Class Name': 'Nombre de clase de almacenamiento',
  STORAGE_CLASS_SETTINGS: 'Configuraciones de clase de almacenamiento',
  'storage classes': 'clases de almacenamiento',
  STORAGE_SYSTEM: 'Sistema de almacenamiento',
  STORAGE_CLASS_CREATE_DESC: 'STORAGE_CLASS_CREATE_DESC',
  StorageClasses: 'StorageClasses',
  storageclasses: 'storageclasses',
  ALLOW_VOLUME_SNAPSHOT:
    'Permitir el almacenamiento de instantáneas de volumen',
  ALLOW_VOLUME_CLONE: 'Permitir la clonación del volumen de almacenamiento',
  ALLOW_VOLUME_EXPANSION: 'Permitir la expansión del volumen de almacenamiento',
  PV: 'Backend de volumen',
  VOLUME_BACKEND_TCAP: 'Backend de volumen',
  PV_STATUS_AVAILABLE: 'Disponible',
  PV_STATUS_BOUND: 'Ligado',
  PV_STATUS_RELEASED: 'Liberado',
  PV_STATUS_FAILED: 'indisponible',
  'Bound Volume': 'Límite de volumen de almacenamiento',
  RECYCLING_STRATEGY: 'Mecanismo de reciclaje',
  ACCESS_MODE: 'Modo de acceso admitido',
  ACCESS_MODE_SCAP: 'Modo de acceso admitido',
  'Used Capacity': 'Capacidad utilizada',
  CLONE_VOLUME: 'Clon del volumen',
  CLONE: 'Clone',
  VOLUME: 'Volumen',
  BACKEND_IDENTIFIER: 'Backend Identifier',
  VOLUMES: 'Volume',
  VOLUME_PL: 'Recuento de volumen',
  NUMBER_OF_VOLUMES: 'Number of volumes',
  VOLUME_LOW: 'volume',
  VOLUME_INSTANCE: 'Volume Instance',
  VOLUME_INSTANCE_PL: 'Volume Instances',
  VOLUME_INSTANCE_LOW: 'volume instance',
  VOLUME_INSTANCE_EMPTY_DESC: 'Please bind a volume to a workload.',
  'The volume name exists': 'nombre de volumen existe',
  VOLUME_SIZE_TIP: 'The volume capacity must be greater than 0.',
  VOLUME_NAME_EXIST: 'nombre de volumen existe',
  'The volume size must be greater than zero':
    'The volume size must be greater than zero',
  VOLUME_TEMPLATE_SETTINGS: 'Volume Template Settings',
  'Volume Usage': 'Uso de volumen',
  VOLUME_DESC:
    'A volume is used for workloads created by users. It represents a resource object for the data persistence of workloads.',
  VOLUME_SNAPSHOT_STATUS_CREATING: 'Creando',
  VOLUME_SNAPSHOT_STATUS_FAILED: 'Creado sin éxito',
  VOLUME_SNAPSHOT_STATUS_READY: 'Creado con éxito',
  VOLUME_SNAPSHOT_STATUS_DELETING: 'Eliminando',
  volumes: 'volúmenes',
  VolumeSnapshots: 'Volume Snapshots',
  'Storage Classs': 'Clases de almacenamiento',
  // Volume Pages
  ACCESS_MODE_TCAP: 'Modo de acceso',
  ACCESS_MODE_RWO: 'Nodo único de lectura y escritura',
  ACCESS_MODE_ROX: 'Multi-nodo de solo lectura',
  ACCESS_MODE_RWX: 'Múlti-nodos de lectura y escritura',
  VOLUME_STATUS_BOUND: 'Enlazado',
  VOLUME_STATUS_LOST: 'Perdido',
  VOLUME_STATUS_PENDING: 'Pendiente',
  VOLUME_STATUS_TERMINATING: 'Terminando',
  VOLUME_STATUS_UPDATING: 'Actualizando',
  VOLUME_CONDITION_FILESYSTEMRESIZEPENDING: 'Expandiendo disco',
  VOLUMES_BASEINFO_DESC:
    'El volumen puede conservar datos y su ciclo de vida es independiente de la ' +
    'carga de trabajo. Asegúrese de que la clase de almacenamiento se cree antes de crear un volumen.',
  VOLUME_EMPTY_DESC:
    'Un volumen es un PVC (PersistentVolumeClaim) creado mediante el aprovisionamiento ' +
    'de volumen dinámico.',
  VOLUME_SETTINGS_DESC:
    'Complete la capacidad del volumen según sea necesario, y el tamaño del volumen ' +
    'y el modo de acceso deben ser compatibles con la clase de almacenamiento y las capacidades del servidor de almacenamiento. El modo de acceso generalmente se selecciona como RWO.',
  VOLUME_STORAGE_CLASS_DESC:
    'Selecciona clase de almacenamiento para crear un tipo específico de volumen.',
  PROVISIONER_DESC: 'Proporciona el backend de almacenamiento',
  ACCESS_MODES_DESC:
    'Selecciona el modo de acceso compatible con la clase de almacenamiento.',
  DELETE_STORAGE_TIP:
    'Si se está montando el volumen de almacenamiento, elimínelo cuando se elimine la ' +
    'carga de trabajo.',
  SRORAGE_SETTING_DESC:
    'ReadWriteOnce: lectura y escritura de un solo nodo. <br/> ReadOnlyMany: ' +
    'Multi-nodo de solo lectura. <br/> ReadWriteMany: lectura y escritura de ' +
    'múlti-nodos. <br/> Solo se puede usar un modo al montar.',
  STORAGE_CLASS_DESC:
    'Storage classes support dynamic volume provisioning, allowing administrators to create new storage volumes on demand.' +
    'las "clases" de almacenamiento que ofrecen.',
  'STORAGE-CLASSES_BASEINFO_DESC':
    'El tipo de almacenamiento registra la información de configuración de un cierto tipo de almacenamiento proporcionado por el administrador. Antes de crear un tipo específico de volumen de almacenamiento, se debe configurar el tipo de almacenamiento correspondiente.',
  STORAGE_CLASS_SETTING_DESC:
    'El tipo de almacenamiento registra la información de configuración de un cierto tipo de almacenamiento proporcionado por el administrador. Antes de crear un tipo específico de volumen de almacenamiento, se debe configurar el tipo de almacenamiento correspondiente.',
  STORAGE_CLASS_SET_DEFAULT_DESC:
    'Una vez establecida la clase de almacenamiento predeterminada, el sistema creará volúmenes de esta clase de forma predeterminada si no se agrega ningún requisito especial. Solo se permite una clase de almacenamiento predeterminada en un clúster de KubeSphere.',
  STORAGECLASSES_BASEINFO_DESC:
    'Una StorageClass proporciona una forma para que los administradores configuren las "clases" de almacenamiento que ofrecen. Las diferentes clases pueden asignarse a niveles de calidad de servicio o a políticas de respaldo o a políticas arbitrarias determinadas por los administradores del clúster. Debes crear una StorageClass antes de que los usuarios puedan crear un volumen (es decir, PVC) basado en StorageClass.',
  STORAGECLASS_PARAMETER_TIP:
    'Consulte la <a href="{link}" target="_blank">documentación de Kubernetes</a> para más detalles.',
  VOLUME_BASEINFO_TIP:
    'El volumen se aprovisiona a través del aprovisionamiento de volumen dinámico que permite crear volúmenes de almacenamiento bajo demanda. El volumen se usa para datos persistentes y tiene un ciclo de vida explícito independiente de cualquier pod individual que lo use. Al menos, los administradores deben configurar una StorageClass antes de crear un volumen.',
  WHAT_IS_STORAGE_CLASS_Q: '¿Qué es una clase de almacenamiento?',
  WHAT_IS_STORAGE_CLASS_A:
    'El administrador del clúster configura la clase de almacenamiento para configurar los parámetros del servidor de almacenamiento y proporcionar almacenamiento para los usuarios del clúster por clase.',
  WHAT_IS_LOCAL_VOLUME_Q: '¿Qué es un volumen local?',
  WHAT_IS_LOCAL_VOLUME_A:
    'Un volumen local es un dispositivo de almacenamiento local montado, como un disco, partición o directorio.',
  CHOOSE_STORAGE_SYSTEM_TIP: 'Elija el sistema de almacenamiento que necesita',
  PROVISIONER_DEPENDENCE_DESC:
    'You need to deploy a plugin in your storage system before it provides services.',
  VOLUME_EXPAND_TIPS:
    'El PVC actual se ha montado para la carga de trabajo, por lo que la expansión conllevará un reinicio de la carga de trabajo y a una nueva versión. El servicio puedes sufrir una breve interrupción.',
  QINGCLOUD_CSI_DESC:
    'Use QingCloud CSI as the underlying storage plugin. <a href="https://github.com/yunify/qingcloud-csi/blob/master/README.md#feature-matrix">Learn More</a>',
  QINGCLOUD_CSI_TYPE_DESC:
    'En la plataforma de nube pública QingCloud, 0 representa un volumen de alto rendimiento. 2 representa volumen de alta capacidad. 3 representa un volumen súper alto rendimiento. 5 representa Enterprise Server SAN. 100 representa  volumen estándar.',
  CREATE_VOLUME_MAX_SIZE: 'Maximum size of the volume.',
  CREATE_VOLUME_STEP_SIZE: 'Step size of the volume.',
  CREATE_VOLUME_MIN_SIZE: 'Minimum size of the volume.',
  VOLUME_FS_TYPE: 'Supports ext3, ext4, and XFS. The default type is ext4.',
  MAXSIZE: 'Maximum Size',
  MINSIZE: 'Minimum Size',
  STEPSIZE: 'Step Size',
  FSTYPE: 'File System Type',
  TAGS: 'Tag',
  GLUSTERFS_RESTURL_DESC:
    'Heketi REST URL that provisions volumes, for example, <Heketi Service cluster IP Address>:<Heketi Service port number>.',
  GLUSTERFS_ID_DESC: 'Gluster cluster ID.',
  GLUSTERFS_RESTAUTHENABLED_DESC:
    'Habilite la autenticación en el servidor REST.',
  GLUSTERFS_RESTUSER_DESC:
    'Username of Gluster REST service or Heketi service.',
  GLUSTERFS_SECRET_NAMESPACE_DESC: 'Namespace of the Heketi user secret.',
  GLUSTERFS_SECRET_NAME_DESC: 'Name of the Heketi user secret.',
  GLUSTERFS_GID_MIN_DESC: 'Minimum GID of the volume.',
  GLUSTERFS_GID_MAX_DESC: 'Maximum GID of the volume.',
  GLUSTERFS_VOLUME_TYPE_DESC:
    'Type of volume. The value can be none, replicate:<Replicate count>, or disperse:<Data>:<Redundancy count>. If the volume type is not set, the default volume type is replicate:3.',
  QINGCLOUD_VOLUME_TAGS_DESC:
    'Add tags to the storage volume. Use commas to separate multiple tags.',
  CEPHRBD_MONITORS_DESC: 'IP address of Ceph monitors.',
  CEPHRBD_ADMIN_ID_DESC:
    'ID de cliente de Ceph que es capaz de crear imágenes en el pool.',
  CEPHRBD_ADMIN_SECRET_NAME_DESC: 'Secret name of adminid.',
  CEPHRBD_ADMIN_SECRET_NAMESPACE_DESC: 'El namespace para adminSecretName',
  CEPHRBD_POOL_DESC: 'Name of the Ceph RBD pool.',
  CEPHRBD_USERID_DESC:
    'ID de cliente Ceph que se utiliza para asignar la imagen RBD. El valor predeterminado es el mismo que adminId.',
  CEPHRBD_USER_SECRET_NAME_DESC:
    'El nombre de Ceph Secret para userId para mapear la imagen RBD',
  CEPHRBD_USER_SECRET_NAMESPACE_DESC: 'El namespace para userSecretName',
  CEPHRBD_FS_TYPE_DESC: 'File system type of the storage volume.',
  CEPHRBD_IMAGE_FORMAT_DESC:
    'Option of the Ceph volume. The value can be "1" or "2". imageFeatures needs to be filled when you set imageFormat to "2".',
  CEPHRBD_IMAGE_FEATURES_DESC:
    'Additional function of the Ceph cluster. The value should only be set when you set imageFormat to "2".',
  DEPENDENT_STORAGE_CLASS_DELETE_TIPS:
    'Make sure if there are resources dependent on the storage class. If there are, you need to disable the resources before it the resource functions are affected.',
  CREATE_VOLUME_BY_STORAGE_CLASS: 'Crear volumen por clase de almacenamiento',
  CREATE_VOLUME_BY_SNAPSHOT: 'Crear volumen por snapshot',
  SELECT_SNAPSHOT_TO_CREATE_VOLUME: 'Selecciona snapshot para crear volumen.',
  SELECT_STORAGE_CLASS_CREATE_VOLUME:
    'Seleccione una clase de almacenamiento para crear un volumen.',
  VOLUME_SNAPSHOT_DESC:
    'Un snapshot de volumen se refiere a una snapshot de un volumen en un punto de tiempo particular. Se puede utilizar para crear nuevos volúmenes (preestablecer los datos del snapshot) o restaurar un volumen existente a su estado anterior (que se muestra en los snapshots).',
  VOLUME_SNAPSHOT_EMPTY_DESC:
    'Un snapshot de volumen se refiere a una snapshot de un volumen en un punto de tiempo particular. Se puede utilizar para crear nuevos volúmenes (preestablecer los datos del snapshot) o restaurar un volumen existente a su estado anterior (que se muestra en los snapshots).',
  WHAT_IS_VOLUME_SNAPSHOTS: '¿Qué son los snapshots de volumenes?',

  CLUSTER_VOLUME_DIFF_DESC:
    'You can specify different storage classes for different clusters.',

  VOLUME_MONITORING_TIP:
    'KubeSphere collects volume usage data, excluding data from unmounted volumes. For path-based volumes such as OpenEBS/Local PV and NFS, the data collected may be different from the actual amount. For detailed information, see <a href="https://github.com/kubesphere/kubesphere/issues/2921" target="_blank">volume monitoring data analysis</a>.',

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
  VOLUME_SNAPSHOT_CLASS: 'Tipo de instantánea',
  SNAPSHOT_EMPTY_TIP: 'Seleccione un tipo de instantánea.',
  VOLUME_BINDING_MODE: 'Volume Binding Mode',
  IMMEDIATE_BINDING: 'Immediate binding',
  BINDING_WAIT: 'Delayed binding',
  DEFAULT_STORAGE_CLASS: 'Default Storage Class',
  VOLUME_FUNCTION_MANAGEMENT_TIP:
    'Volume Management only controls whether the following features are enabled in the KubeSphere web console. Before the features are enabled, contact your system administrator to confirm that they are supported by the storage system.',

  // Storage Class > Detail
  STORAGE_CLASS_SCAP: 'Storage class',
  CREATE_VOLUME: 'Create Volume',
  VOLUME_MANAGEMENT: 'Volume Management',
  SET_DEFAULT_STORAGE_CLASS_TITLE: 'Set as Default Storage Class',
  VOLUME_COUNT: 'Volumes',
  NODE_CPU_UTILISATION: 'Utilización de CPU',
  NODE_LOAD1: 'Promedio de carga',
  NODE_MEMORY_UTILISATION: 'Utilización de memoria',
  NODE_DISK_SIZE_UTILISATION: 'Almacenamiento local',
  NODE_POD_UTILISATION: 'En uso',
  NODE_DISK_INODE_UTILISATION: 'Utilización de inodos',

  SORT_BY_NODE_CPU_UTILISATION: 'Ordenar por CPU',
  SORT_BY_NODE_MEMORY_UTILISATION: 'Ordenar por memoria',
  SORT_BY_NODE_DISK_SIZE_UTILISATION: 'Ordenar por almacenamiento local',
  SORT_BY_NODE_POD_UTILISATION: 'Ordenar mediante el uso de pod',
  SORT_BY_NODE_DISK_INODE_UTILISATION: 'Ordenar por inodo Utilización',
  SORT_BY_NODE_LOAD1: 'Ordenar por promedio de carga',
  SORT_BY_NAMESPACE_MEMORY_USAGE_WO_CACHE: 'Ordenar por uso de memoria',
  SORT_BY_NAMESPACE_CPU_USAGE: 'Ordenar por uso de CPU',
  SORT_BY_NAMESPACE_POD_COUNT: 'Ordenar por uso de Pods',
  SORT_BY_NAMESPACE_NET_BYTES_RECEIVED: 'Ordenar por tráfico entrante',
  SORT_BY_NAMESPACE_NET_BYTES_TRANSMITTED: 'Ordenar por tráfico saliente',
  SORT_BY_WORKSPACE_MEMORY_USAGE: 'Ordenar por uso de memoria (con cache)',
  SORT_BY_WORKSPACE_MEMORY_USAGE_WO_CACHE:
    'Ordenar por uso de memoria (sin cache)',
  SORT_BY_WORKSPACE_POD_COUNT: 'Ordenar por número de Pods',
  SORT_BY_WORKSPACE_CPU_USAGE: 'Ordenar por uso de CPU',
  SORT_BY_WORKSPACE_NET_BYTES_TRANSMITTED: 'Ordenar por tráfico saliente',
  SORT_BY_WORKSPACE_NET_BYTES_RECEIVED: 'Ordenar por tráfico entrante',
  SORT_BY_WORKLOAD_CPU_USAGE: 'Ordenar por uso de CPU',
  SORT_BY_WORKLOAD_MEMORY_USAGE_WO_CACHE: 'Ordenar por uso de memoria',
  SORT_BY_WORKLOAD_NET_BYTES_TRANSMITTED: 'Ordenar por tráfico saliente',
  SORT_BY_WORKLOAD_NET_BYTES_RECEIVED: 'Ordenar por tráfico entrante',
  PLATFORM_SETTINGS: 'Configuración de la plataforma',
  'Platform Settings': 'Configuración de la plataforma',
  Configure: 'Configurar',
  'Current third-party login configurations':
    'Configuración actual de inicio de sesión de terceros',
  'not configured': 'no configurado',
  'Please input client id': 'Por favor introduce la ID del cliente',
  'Please input server address':
    'Por favor introduce la dirección del servidor',
  'Protocol Type': 'Tipo de protocolo',
  'Server Address': 'Dirección del servidor',
  'Third-party Login': 'Inicio de sesión de terceros',
  THIRD_PARTY_LOGIN_DESC:
    'Cuando se utiliza un servicio de terceros para iniciar sesión, los usuarios deben ingresar la información requerida. Después de eso, se creará un usuario local que está asociado con el usuario para el acceso seguro en el entorno.',
  THIRD_PARTY_LOGIN_Q:
    '¿Qué servicios de terceros son compatibles para iniciar sesión?',
  THIRD_PARTY_LOGIN_A: 'LDAP, AD, OAuth y Github OAuth son compatibles.',
  OAUTH_DESC:
    'OAuth es un estándar abierto que proporciona una forma fácil y segura para que los usuarios otorguen acceso a sus recursos.',
  GITHUB_OAUTH_DESC:
    'GitHub OAuth utiliza la membresía de la organización para otorgar acceso.',
  ServiceAccounts: 'Cuentas de servicio',
  ServiceAccount: 'Cuentas de servicio',
  SERVICE_ACCOUNT: 'Cuentas de servicio',
  SERVICE_ACCOUNT_PL: 'Cuentas de servicio',
  SERVICE_ACCOUNT_LOW: 'service account',
  'Edit Service Account': 'Editar cuenta de servicio',
  CHANGE_ROLE: 'Cambiar rol',
  SECRET_DETAILS: 'Detalle secreto',
  SERVICE_ACCOUNT_DESC:
    'La cuenta de servicio proporciona una identidad para los procesos que se ejecutan en un pod que se puede usar para acceder al servidor de API',
  SERVICE_ACCOUNT_EMPTY_DESC: 'Please create a service account.',
  INVALID_YAML_FILE_FORMAT: 'Formato de archivo YAML no válido.',

  SELECT_PROJECT_ROLE_DESC:
    'Seleccione un rol de proyecto para especificar permisos.',

  SERVICEACCOUNT_KUBECONFIG_DESC:
    'método de configuración kubeconfig, consulte <a href="https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/" target="_black"> la documentación oficial </ a >. Después de la descarga archivo, modifique la dirección del servicio a la dirección externa de la API de Kubernetes',

  // Service Account Detail Page
  SECRET_VALUE: 'Secreto: {value}',
  SERVICE_MONITORING_EXPORTER: 'Service Monitoring Exporter',
  'Target Service': 'Target Service',
  EXPORTER_SERVICE_PORTS: 'Exporter Service Ports',
  SCRAPE_INTERVAL_MIN: 'Scrape Interval (Min)',
  'View Monitor': 'View Monitor',
  MONITORING_EXPORTER: 'Monitoring Exporter',
  MONITORING_EXPORTER_VALUE: 'Monitoring exporter: {value}',

  SELECT_AUTHENTICATION_METHOD: 'Select Authentication Method',
  PORT_CONNECTION_AUTHENTICATION: 'Port connection authentication.',

  CREATE_A_NEW_SECRET: 'Create a new Secret',
  REFRESH_SECRETS: 'refresh Secrets.',

  NO_AUTH_TIP:
    'The interface can be directly connected without authentication.',

  SCRAP_INTERVAL_DESC:
    'Monitoring data collection interval, the default is 1 minute.',
  SCRAP_TIMEOUT_DESC: 'Collection timeout, the default value is 10 seconds',

  // Service Monitoring Exporter Form
  CERTIFICATE_AUTHORITY: 'Certificate Authority',
  ENCRYPTION_KEY: 'Encryption Key',
  SERVER_NAME: 'Server Name',
  NO_AUTHENTICATION_TCAP: 'No Authentication',
  TLS_SETTINGS_TCAP: 'TLS Settings',
  BEARER_TOKEN_TCAP: 'Bearer Token',
  BASIC_AUTHENTICATION_TCAP: 'Basic Authentication',
  ' has no corresponding workload.':
    'no tiene carga de trabajo correspondiente.',
  ACCESS_TYPE: 'Tipo de acceso',
  INTERNAL_ACCESS_MODE: 'Internal Access Mode',
  'Add Route Rule': 'Agregar regla de ruta',
  'Add Selector': 'Agregar selector',
  'Associated Application': 'Solicitud asociada',
  AUTO_REFRESH: 'Auto',
  'Automatically assign Service IP':
    'Asigna automáticamente una IP de servicio',
  'Commonly included tags in the current workloads':
    'Etiquetas comúnmente incluidas en las cargas de trabajo actuales',
  CONTAINER_PORT: 'Puerto de contenedores',
  CONTAINER_PORT_SCAP: 'Container port',
  SERVICE_PORT_SCAP: 'Service port',
  CONTAINER_PORT_VALUE: 'Puerto de contenedores: {value}',
  CREATE_SERVICE: 'Crear servicio',
  'Create Service': 'Crear servicio',
  'Create service by specifying workloads':
    'Crear servicio especificando carga de trabajo',
  'Create service by Yaml': 'Crear servicio por Yaml',
  Creating: 'Creando',
  'Creation failed, please delete and try again':
    'Creación fallida, por favor, elimínela e intente de nuevo',
  CUSTOM_SERVICE: 'Custom Service',
  CUSTOMIZE_SERVICE: 'Customize Service',
  'Delete Service': 'Eliminar servicio',
  'Do not assign Service IP': 'No asignar IP de servicio',
  EDIT_EXTERNAL_ACCESS: 'Editar acceso a Internet',
  EDIT_MONITORING_EXPORTER: 'Edit Monitoring Exporter',
  EDIT_SERVICE: 'Servicio de edición',
  STICKY_SESSION: 'Sticky Session',
  'External Address': 'Dirección Externa',
  EXTERNAL_SERVICE: 'Servicio externo',
  EXTERNAL_IP_ADDRESS: 'External IP Address',
  EXTERNAL_IP_ADDRESS_SCAP: 'External IP address',
  'External Service': 'Servicio externo',
  'Internal access': 'Acceso interno',
  INVALID_PORT_DESC: 'Please enter a valid port number.',
  INVALID_PORT: 'Puerto inválido',
  LANGUAGE_TYPE_VALUE: 'Tipo de idioma: {value}',
  ARTIFACT_TYPE_VALUE: 'Artifact Type: {value}',
  'LoadBalancer IP': 'IP del balanceador',
  'Map Services outside the cluster': 'Servicios de mapas fuera del clúster',
  MAXIMUM_STICKINESS_DURATION: 'Tiempo máximo de sesión (s)',
  NO_SERVICE_RELATED_RESOURCE_DESC:
    'No se encontraron recursos relacionados con los servicios actuales',
  NO_WORKLOAD_RELATED_RESOURCE_DESC:
    'No resource related to the workload is found.',
  'Node Port': 'Puerto de nodo',
  'Node Port(s)': 'Puerto(s) de nodo',
  'Not Associate': 'No asociado',
  'Path is Required': 'La ruta es obligatoria',
  EXTERNAL_SERVICE_ADDRESS_EMPTY_DESC: 'Please enter an ExternalName.',
  ENTER_PORT_NUMBER: 'Please enter a port number.',
  'Please input ExternalName': 'Por favor introduce el ExternalName',
  PORT_EMPTY: 'Por favor introduce puertos',
  'Please input selectors that have corresponding workloads':
    'Introduce los selectores que tienen las cargas de trabajo correspondientes',
  'Please input service name': 'Por favor introduce el nombre del servicio',
  ENTER_SELECTOR_TIP: 'Please set a workload selector.',
  'Please select a workload': 'Por favor selecciona una carga de trabajo',
  'Please select Service': 'Por favor selecciona Servicio',
  Ports: 'Puertos',
  routes: 'rutas',
  selector: 'selector',
  ACCESS_INFORMATION: 'Acceso al servicio',
  'Service Mesh': 'Malla de servicio',
  'Service Name': 'Nombre del Servicio',
  SERVICE_PORT: 'Puerto de servicio',
  SERVICE_PORT_VALUE: 'Puerto de servicio: {value}',
  SERVICE_TYPE_TCAP: 'Tipo de servicio',
  SERVICE_TYPE_DESC: 'Select a service type.',
  SELECT_SERVICE_TYPE_DESC:
    'Create a stateless or stateful service, or map a service to an external Service.',
  APP_SELECT_SERVICE_TYPE_DESC: 'Create a stateless or stateful Service.',
  JAVA: 'Java',
  NODEJS: 'Node.js',
  PYTHON: 'Python',
  BINARY: 'Binary',
  SPECIFY_WORKLOAD: 'Specify Workload',
  SPECIFY_WORKLOAD_TO_CREATE_SERVICE: 'Specify Workload to Create Service',
  EDIT_YAML_TO_CREATE_SERVICE: 'Edit YAML to Create Service',
  CREATE_EXTERNAL_SERVICE: 'Create External Service',
  'Specify Node': 'Especificar nó',
  'Service Type': 'Tipo de servicio',
  'Specify Workload': 'Especificar carga de trabajo',
  SPECIFY_NODE: 'Especificar nó',
  STATEFUL_SERVICE: 'Stateful Service',
  STATELESS_SERVICE: 'Stateless Service',
  'Sure to delete the service(s)?':
    '¿Seguro que quiere eliminar los servicios?',
  'Target Port': 'Puerto destino',
  'The current selector': 'El selector actual',
  NO_WORKLOAD_MATCH_SELECTOR: 'The current selector matches no workload.',
  WORKLOADS_MATCH_SELECTOR_SI:
    'The current selector ({selector}) matches {count} workload.',
  WORKLOADS_MATCH_SELECTOR_PL:
    'The current selector ({selector}) matches {count} workloads.',
  STICKY_SESSION_DESC:
    'Set the system to forward all requests from the same client to the same backend within a specified duration.',
  VIRTUAL_IP: 'IP virtual',
  VIRTUAL_IP_ADDRESS: 'Virtual IP address',
  CREATE_EXTERNAL_SERVICE_DESC:
    'Asigne el servicio al contenido del campo externalName devolviendo un registro CNAME con su valor.',
  TOTAL_WORKLOADS_VALUE: 'Total Workloads: { count }',
  SERVICE_SELECTOR_AFFECT_1: '',
  SERVICE_SELECTOR_AFFECT_2: 'afectar las workload de {count}',
  SERVICE_NAME_DESC:
    'The name can contain only lowercase letters, numbers, and hyphens (-), must start with a lowercase letter, and must end with a lowercase letter or number. The maximum length is 63 characters.',
  SERVICE_DESC:
    'Services provide an abstract way to expose applications running on a Pod as network services.',
  SERVICE_EMPTY_DESC: 'Please create a Service.',
  SERVICES_BASEINFO_DESC:
    'El nombre y la descripción del servicio deben proporcionarse para crear el servicio. El nombre del servicio no puedes ser el mismo que el nombre del servicio existente en el mismo proyecto.',
  SERVICES_SETTINGS_DESC:
    'La configuración del servicio define cómo acceder a una carga de trabajo existente.',
  SERVICE_EXTERNAL_ACCESS_DESC: 'Exponga el servicio fuera del clúster.',
  VIRTUAL_IP_TITLE: 'Virtual IP Address',
  VIRTUAL_IP_DESC:
    'The cluster generates a unique IP address for the Service and the Service can be accessed within the cluster using this IP address.',
  INTERNAL_DOMAIN_NAME: 'Internal Domain Name',
  INTERNAL_DOMAIN_NAME_DESC:
    'The cluster does not generate an IP address for the Service and the Service can be directly accessed using the Endpoint IP address of the Service.',
  HEADLESS_EXTERNAL_NAME_TITLE:
    'Sin cabecera (nombre externo): direcciones de mapas fuera del clúster para visitar',
  HEADLESS_EXTERNAL_NAME_DESC:
    'Asigne servicios externos a un clúster o proyecto.',
  ACCESS_NONE_TIP:
    'Internet access is not supported. The Service can be accessed only within the cluster.',
  ACCESS_NODEPORT_TIP: 'Use a port of the cluster nodes to access the Service.',
  ACCESS_LOADBALANCER_TIP: 'Use a load balancer to access the Service.',
  SERVICE_NODE_PORT_DESC:
    'If your current network is on the same network as the cluster node, you can access it through <Cluster IP address>:<NodePort> or through <Node IP address>:<NodePort>.',
  SERVICE_TYPE: 'Service Type',
  SELECT_SERVICE_TYPE: 'Select Service Type',
  SERVICE_TYPES_Q: 'Tipos de servicio',
  SERVICE_TYPES_A:
    'El servicio se divide en un servicio sin estado (Servicio virtual + Depolyment) y un servicio con estado (Servicio sin cabeza + Statefulset). En un servicio sin estado, las réplicas pueden compartir un volumen, y un servicio con estado debe tener su propio volumen independiente.',
  SCENARIOS_FOR_SERVICES_Q:
    '¿Cuáles son los escenarios de aplicación para servicios sin estado y servicios con estado?',
  SCENARIOS_FOR_SERVICES_A:
    'Los servicios sin estado son útiles para escenarios en los que los datos persistentes no se almacenan localmente y varias instancias responden a solicitudes uniformes (Nginx, Tomcat, etc.). Los servicios con estado son útiles cuando se trata de almacenamiento de datos, subprocesos múltiples o colas (base de datos MySQL, Kafka, Zookeeper, etc.).',
  DELETE_SERVICE_DESC:
    'Está a punto de eliminar los servicios {resource}. ¿Confirma si desea eliminar el recurso asociado?',
  DELETE_SERVICE_DESC_PL:
    'You are about to delete the Services {resource}.<br/>Do you want to also delete the following resources related to the Services?',
  DELETE_SERVICE_DESC_SI:
    'You are about to delete the Service {resource}.<br/>Do you want to also delete the following resource related to the Service?',
  SERVICE_FROM_CODE:
    'Cree un nuevo servicio desde el repositorio de código fuente',
  SERVICE_FROM_ARTIFACT: 'Construye un nuevo servicio a través del artefacto',
  SERVICE_FROM_CODE_DESC:
    'Puedes construir su código existente en una imagen e implementarlo a través de Source to Image.',
  SERVICE_FROM_ARTIFACT_DESC:
    'Puedes construir un artefacto existente en una nueva imagen y completar despliegue.',
  CUSTOMIZE_SERVICE_DESC:
    'Puedes crear un servicio ya sea especificando una carga de trabajo o editando la configuración (Yaml).',
  SERVICE_TYPE_STATEFULSERVICE: 'Servicio de estado',
  SERVICE_TYPE_STATELESSSERVICE: 'Servicio sin estado',
  SERVICE_TYPE_EXTERNALSERVICE: 'Servicio externo',
  SERVICE_TYPE_STATEFULSERVICE_SCAP: 'Stateful service',
  SERVICE_TYPE_STATELESSSERVICE_SCAP: 'Stateless service',
  SERVICE_TYPE_EXTERNALSERVICE_SCAP: 'External service',
  STATEFUL_SERVICE_DESC:
    'Los servicios con estado o stateful se usan para administrar aplicaciones con estado, asegurando un despliegue y escala ordenada y elegante. También proporcionan almacenamiento persistente estable e identificadores de red.',
  STATELESS_SERVICE_DESC:
    'El servicio más utilizado en servicios de contenedores. Define la plantilla del Pod para controlar el estado del Pod, incluidas las actualizaciones continuas y los retrocesos.',
  SPECIFY_WORKLOAD_DESC: 'Crea un servicio con Pods existentes.',
  SERVICE_PORTS_DESC: 'Set the container ports and Service ports.',
  SELECT_WORKLOAD_DESC:
    'Pre-populate the fields with labels of container replicas created by the workloads.',

  SPECIFY_NODE_DESC: 'Especifique um nó que precisa ser associado ao serviço.',

  INTERNAL_DOMAIN_NAME_SCAP: 'Método de acceso dentro del clúster (DNS)',

  // Services
  WORKLOAD_SELECTOR: 'Workload Selector',
  UNKNOWN_SERVICE_TYPE: 'Unknown Service Type',
  MAXIMUM_STICKINESS_DURATION_DESC:
    'Set a maximum stickiness duration. The value range is 0 to 86400 and the default value is 10800.',
  HEADLESS: 'Headless',
  EXTERNALNAME: 'ExternalName',
  EXTERNAL_SERVICE_ADDRESS: 'External Service Address',
  EXTERNAL_SERVICE_ADDRESS_DESC:
    'Enter the domain name of an external Service.',
  UNKNOWN: 'Unknown',
  EXTERNALNAME_EXAMPLE: 'Example: ',
  PORT_PL: 'Ports',
  ENDPOINT: 'Endpoint',
  USERNAME_PASSWORD: 'Secreto de contraseña de cuenta',
  ACCOUNT_PASSWORD_SECRET_TCAP: 'Secreto de contraseña de cuenta',
  ADD_DATA_TCAP: 'Agregar datos',
  ADD_DATA_DESC: 'Agregar datos de par clave / valor',
  SECRET_FIELD_COUNT: 'Los campos',
  DATA: 'Datos',
  EDIT_DATA_TCAP: 'Editar datos',
  EDIT_SECRET: 'Editar secreto',
  REGISTRY_ADDRESS_TIP:
    'Establezca una dirección de registro, por ejemplo, docker.io.',
  IMAGE_REGISTRY_INFORMATION: 'Secreto del repositorio de imágenes',
  TLS_INFORMATION: 'TLS information',
  IMAGE_REGISTRY_SECRET_TCAP: 'Secreto del repositorio de imágenes',
  IMAGE_REGISTRY_REQUIRED_DESC:
    'Establezca la dirección de registro, el nombre de usuario y la contraseña.',
  CREDENTIAL_NAME_EMPTY_DESC: 'Por favor introduce la credencial',
  ENTER_DATA_DESC: 'Por favor introduce los datos',
  ENTER_PRIVATE_KEY_DESC: 'Por favor introduce la clave privada',
  'Please input the registry address':
    'Por favor introduce la dirección de registro',
  PRIVATE_KEY_TCAP: 'Clave privada',
  REGISTRY_ADDRESS_TCAP: 'Dirección de registro',
  REGISTRY_SECRET_VER_ERR: 'La verificación del registro falló',
  REGISTRY_SECRET_VER_SUC: 'Verificación de registro exitosa',
  Secret: 'Secreto',
  SECRET: 'Secreto',
  CODE_REPOSITORY_KEY: 'Key',
  SECRET_PL: 'Secrets',
  SECRET_LOW: 'Secret',
  DATA_SETTINGS: 'Data Settings',
  KUBECONFIG_SETTINGS: 'kubeconfig Settings',
  secrets: 'secretos',
  Secrets: 'Secretos',
  Unverified: 'Sin verificar',
  SECRET_DESC:
    'Un secreto es un objeto que contiene una pequeña cantidad de datos confidenciales, como una contraseña, un token o una clave.',
  SECRET_EMPTY_DESC:
    'Un secreto es un objeto que contiene una pequeña cantidad de datos confidenciales, como una contraseña, un token o una clave.',
  SECRET_TYPE_DESC: 'Puedes elegir o personalizar un tipo secreto.',
  SECRET_NO_CHINESE_CODE_DESC:
    'La clave del Secreto debe constar de caracteres alfanuméricos, guiones (-), guiones bajos (_) o puntos (.).',
  DATA_KEY: 'Clave',
  DATA_VALUE: 'Valor',
  IMAGE_REGISTRY_VALIDATE_TIP:
    'Valide el nombre de usuario y la contraseña antes de crear el registro de imágenes Secreto.',
  // Secret Type Drop-down List
  SECRET_VALUE_LABEL: '{value} ({label})',
  CREATE_SECRET: 'create a secret',
  'Set Replicas': 'Número fijo de copias',
  SPECIFY_REPLICAS: 'Specify Replicas',
  WEIGHTS: 'Weights',
  SPECIFY_WEIGHTS: 'Specify Weights',
  SPECIFY_WEIGHTS_DESC:
    'El número total de copias establecido se asignará a los grupos seleccionados de acuerdo con los pesos establecidos, y las copias de los grupos no disponibles se migrarán automáticamente a los grupos disponibles.',
  SPECIFY_REPLICAS_DESC:
    'Especifique claramente la cantidad de réplicas que se implementarán para cada clúster.',
  'Total Replicas Number': 'Número total de copias',
  WEIGHT: 'Peso',
  TOTAL_REPLICAS: 'Número total de copias',
  ENTER_POSITIVE_INTEGER_DESC: 'La entrada de copia es ilegal',
  TOTAL_REPLICAS_EMPTY_DESC: 'Ingrese el número total de copias',
  STORAGE_MANAGEMENT_SCAP: 'Gestión de la función de volumen de almacenamiento',
  VOLUME_CLONE: 'Clon de volumen de almacenamiento',
  ALLOW_VOLUME_CLONE_DESC: 'Allows users to clone volumes.',
  ALLOW_VOLUME_SNAPSHOT_DESC: 'Allows users to create volume snapshots.',
  'Volume Expansion': 'Expansión del volumen de almacenamiento',
  ALLOW_VOLUME_EXPANSION_DESC:
    'Allows users to extend volumes. Volumes can only be extended and cannot be shrunk.',
  'Add Environment Variables': 'Añade parámetros de entorno',
  'Artifact Type': 'Tipo de artefacto',
  'Authentication required': 'Autenticación requerida',
  b2i: 'b2i',
  binary: 'binario',
  BUILD_ENVIRONMENT: 'Entorno de build',
  'Build Times': 'Tiempos de build',
  Builder: 'Builder',
  'builder name': 'nombre del builder',
  builderImage: 'builderImage',
  BuilderImage: 'BuilderImage',
  BuilderPullPolicy: 'BuilderPullPolicy',
  builderPullPolicy: 'builderPullPolicy',
  Building: 'Construyendo',
  'Building Image': 'Construyendo la imagen',
  'Building Log': 'Registro de construcción',
  'building logs': 'registros de construcción',
  BUILD_MODE: 'Elige un idioma',
  CLICK_UPLOAD_ARTIFACT:
    'Haz clic para seleccionar el archivo de artefacto a subir',
  CODE_URL: 'URL de código',
  UPLOAD_ARTIFACT_FILE:
    'Haz clic para seleccionar el archivo de artefacto a subir',
  'Code Resource': 'Recurso de código',
  CODE_REPOSITORY_URL: 'URL de código',
  CONTAINER_SETTINGS: 'Configuración del contenedor',
  creationTimestamp: 'creationTimestamp',
  'Currently only supports git repo': 'Actualmente solo admite repositorio git',
  DOWNLOAD_ARTIFACT: 'Descargar Artefacto',
  'Environment Params': 'Parámetros de entorno',
  'exec: "git": executable file not found in $PATH':
    'exec: "git": archivo ejecutable no encontrado en $PATH',
  FILE_SIZE_VALUE: 'File size: {value}',
  FILE_UPLOADED_TIP: 'Documento subido correctamente',
  IMAGE_ARTIFACTS: 'Image Artifacts',
  'Image Builder': 'Image Builder',
  IMAGE_BUILDER: 'Image Builder',
  BUILDER_IMAGE: 'Builder Image',
  BUILDER_IMAGE_SCAP: 'Builder image',
  PULL_POLICY: 'Pull Policy',
  SOURCE_URL: 'Source URL',
  REMOTE_TRIGGER: 'Remote Trigger',
  IMAGE_BUILDER_LOW: 'image builder',
  IMAGE_BUILDER_PL: 'Image Builders',
  'Image Building': 'Construcción de la imagen',
  'Image building failed': 'La construcción de la imagen falló',
  'Image building succeeded': 'La construcción de la imagen tuvo éxito',
  IMAGE_SIZE_SCAP: 'Tamaño de la imagen',
  IMAGE_NAME: 'Image Name',
  IMAGE_NAME_SCAP: 'Image name',
  IMAGE_NAME_EMPTY_DESC: 'Please enter an image name.',
  IMAGE_TAG_EMPTY_DESC: 'Please enter an image tag.',
  TARGET_IMAGE_REPOSITORY_EMPTY_DESC: 'Please set a target image registry.',
  IMAGE_TAG: 'Image Tag',
  ImageName: 'Image Name',
  'is Failed': 'falló',
  JOB_RECORDS: 'Registros de trabajos',
  LAST_BUILD_ENVIRONMENT: 'Último entorno de compilación',
  LOG_MODULE_NOT_INSTALLED: 'The logging module is not installed.',
  LOADING_DOTS: 'El registro se está cargando ...',
  'New Image Tag': 'Nuevo tag de imagen',
  'New Tag': 'Nuevo tag',
  'No Log Records': 'Sin registros',
  PORT_SETTINGS_DESC: 'Establece la política de acceso para el contenedor.',
  CONTAINER_SETTINGS_DESC:
    'Establece el nombre del contenedor y los recursos de computación.',
  'Published Time': 'Hora publicada',
  PULL_COMMAND: 'Comando de pull',
  PULL_COMMAND_SCAP: 'Pull command',
  'Rebuild Image': 'Reconstruir imagen',
  'Rebuilt successfully; the image status will be refreshed soon.':
    'Reconstruida con éxito; el estado de la imagen se actualizará pronto.',
  'Release Time': 'Tiempo de despliegue',
  'Repo reading failed': 'Lectura del repositorio fallida',
  'Repo url': 'url del repositorio',
  'Repo URL': 'URL de repositorio',
  'Repository Not Found': 'Repositorio no encontrado',
  RevisionId: 'RevisionId',
  'Run Command': 'Ejecutar comando',
  s2i: 's2i',
  S2IJobs: 'S2IJobs',
  'Source to image jobs': 'Trabajos de origen a imagen',
  sourceUrl: 'sourceUrl',
  SourceUrl: 'SourceUrl',
  S2I_RELATIVE_PATH_TIP:
    'Especifica un directorio relativo dentro de la aplicación. (Valor por defecto /)',
  StartTime: 'Hora de inicio',
  TARGET_IMAGE_REPOSITORY: 'Repositorio de imágenes de destino',
  S2I_NO_SECRET: 'El repositorio de código actual no requiere clave.',
  UPLOAD_ARTIFACT_TIP: 'Please upload an artifact.',
  HEALTH_CHECKER_DESC:
    'La salud del contenedor se verificará periódicamente de acuerdo con las necesidades del usuario.',
  UPLOAD_ARTIFACT: 'Subir artefactos',
  UPLOAD_FAILED: 'Upload failed.',
  CODE_RELATIVE_PATH_DESC:
    'Especifica un directorio relativo dentro de la aplicación. (Valor por defecto /)',
  STARTUP_COMMAND: 'Comando de inicio',
  'Target Image Repository': 'Repositorio de imágenes de destino',
  CODE_REPOSITORY_KEY_NOT_REQUIRED:
    'El repositorio de código actual no requiere clave.',
  ARTIFACT_FILE_EMPTY_DESC: 'El archivo no se ha subido.',
  ARTIFACT_FILE: 'Subir artefactos',
  'Upload file failed': 'Error al cargar el archivo',
  'Upload Percent': 'Porcentaje de subida',
  SORT_BY: 'ordenado por { name }',
  IMAGE_NAME_BUILDING: 'Image: {name}/Building',
  IMAGE_NAME_FAILED: 'Image: {name}/Failed',
  IMAGE_NAME_SUCCESSFUL: 'Image: {name}/Successful',
  NEW_TAG_DESC: 'introduce el tag para la nueva imagen',
  S2I_RELATIVE_PATH_DESC:
    'Dirección del repositorio de código fuente (actualmente admite git) y puedes asignar ramas de código y rutas relativas en terminales de código fuente',
  STARTUP_COMMAND_DESC:
    'Por defecto, el contenedor ejecuta el comando de imagen predeterminado. Puedes cambiar el comando del contenedor desde aquí.',
  CONTAINER_COMMAND_DESC:
    'El comando de inicio del contenedor. Por defecto, se utilizará el comando de inicio para empaquetar. Utiliza comas para separar múltiples comandos.',
  CONTAINER_ARGUMENT_DESC:
    'Los parámetros del comando de inicio del contenedor. Utiliza comas para separar varios.',
  CONTAINER_ENVIRONMENT_DESC: 'Añade la variable de entorno del contenedor.',
  IMAGE_PULL_POLICY_DESC:
    'Por defecto, la imagen se descarga solo si aún no está presente localmente.',
  S2I_ENVIRONMENT_DESC:
    'Los desarrolladores de aplicaciones pueden usar las siguientes variables de entorno para configurar el comportamiento en tiempo de ejecución de esta imagen; para configuraciones detalladas, consulta <a href={link} target="_blank">plantillas de compilación</a> .',
  S2I_UPDATE_WORKLOAD:
    'Actualiza la carga de trabajo después de construir con éxito',
  S2I_UPDATA_WORKLOAD_DESC:
    'Una vez que la imagen se haya reconstruido correctamente, la imagen de la carga de trabajo relevante se actualizará y la versión de la carga de trabajo se actualizará.',
  IMAGE_FROM_S2I_DESC:
    'Descarga el código del repositorio existente y crea la imagen a través de Source to Image. El proceso de construir la imagen cada vez se realizará como un trabajo.',
  IMAGE_FROM_EXSIT:
    'Selecciona un contenedor de despliegue de imagen existente',
  IMAGE_FROM_EXSIT_DESC:
    'Descarga una imagen de un repositorio de imágenes público o privado.',
  CODE_REPOSITORY_KEY_DESC:
    'Si es un repositorio de código privado, escoge la clave del repositorio de código.',
  CODE_REPOSITORY_URL_DESC:
    'La dirección del repositorio del código fuente (actualmente es compatible con git). Puedes especificar ramas de código y rutas relativas en el terminal del código fuente.',
  CODE_RELATIVE_PATH: 'Ruta relativa del código (opcional):',
  S2I_IMAGE_NAME_DESC:
    'Nombre de la imagen y tag, que por defecto es el nombre del proyecto del repositorio de código.',
  S2I_TARGET_IMAGE_REPOSITORY_DESC:
    'Select a Secret with push permissions to the image repository. De lo contrario, puedes <a href={link} target="_blank">crear una nueva credencial de repositorio de imágenes</a> .',
  S2I_BUILDERNAME_DESC:
    'Selecciona el entorno de edición, también puedes ver la <a href={link} target="_blank">plantilla de compilación correspondiente</a>',
  IMAGE_BUILDER_DESC:
    'Image Builder is a tool that builds container images from source code or artifacts. You can build container images from source code or artifacts through simple configurations.',
  BUILD_IMAGE_FOR_SERVICE: 'Crear imagen para el servicio {service}',
  S2I_DESC: 'Por favor elige tu lenguaje de código fuente',
  IMAGE_FROM_S2I: 'Crea una nueva imagen a partir del código',
  IMAGE_FROM_B2I: 'Crea una nueva imagen a partir del artefacto',
  B2I_DESC: 'Select the file type of your artifact.',
  B2I_DEFAULT_DESC:
    'Elige tu artefacto para construir una imagen de contenedor',
  JAR_DESC:
    'Un archivo JAR es un formato de empaquetado de archivos que se usa comúnmente para agregar una gran cantidad de archivos de clase Java, metadatos relacionados y archivos de recursos (texto, imágenes, etc.) en un archivo.',
  WAR_DESC:
    'El archivo WAR es un archivo utilizado para distribuir una colección de archivos JAR, JavaServer Pages, Java Servlets, clases Java, archivos XML, bibliotecas de tags, páginas web estáticas (HTML y archivos relacionados) y otros recursos que juntos constituyen una aplicación web.',
  BINARY_DESC: '',
  IMAGE_BUILDER_EMPTY_DESC: 'Crea un generador de image builder.',
  WRONG_FILE_EXTENSION_NAME:
    'El tipo de archivo seleccionado no coincide, selecciona el tipo {type}',
  PROBE_COMMAND_DESC: 'Utiliza comas para separar múltiples comandos.',
  SECRET_CODE: 'Secret Code',
  SECRET_CODE_RULE_DESC:
    'It can only contain upper and lower case letters and numbers.',
  TRIGGER_TOKEN: 'Secret Code',
  TRIGGER_TOKEN_DESC:
    'Set a token used to authenticate a client against KubeSphere when the client attempts to trigger image building on KubeSphere. The token can contain only uppercase letters, lowercase letters, and numbers.',
  INVALID_TRIGGER_TOKEN_DESC:
    'It can only contain upper and lower case letters, numbers.',
  'Remote Trigger Link': 'Remote Trigger Link',

  // Image Builder List Page

  // Creation Page
  UPLOAD_PERCENT: 'Uploaded: {percent}%',
  UPLOAD_FULLY: 'Uploaded: 100%',
  FILE_SIZE: 'File size: {size}',
  S2I_SECRET: 'Secret',
  ROLES_VIEW: 'Roles Viewing',
  ROLES_MANAGEMENT: 'Role Management',
  USERS_MANAGEMENT: 'Users Management',
  USERS_VIEW: 'Users Viewing',
  WORKSPACES_MANAGEMENT: 'Workspace Management',
  WORKSPACES_VIEW: 'Workspace Viewing',
  APP_TEMPLATES_MANAGEMENT: 'App Template Management',
  APP_TEMPLATES_VIEW: 'App Template Viewing',
  PLATFORM_SETTINGS_MANAGEMENT: 'Platform Settings Management',
  WORKSPACE_ROLE_NAME_TIP:
    'The role name is used as the unique identifier of the role.',
  PROJECTS_MANAGEMENT: 'Project Management',
  DEVOPS_MANAGEMENT: 'DevOps Project Management',
  WORKSPACE_GROUPS_MANAGEMENT: 'Workspace Department Management',
  WORKSPACE_GROUPS_VIEW: 'Workspace Department Viewing',
  EDIT_PERMISSIONS: 'Edit Permissions',
  'Account Role': 'Rol de cuenta',
  CLUSTERS_VIEW: 'Cluster Viewing',
  CREATE_ROLE: 'Create Role',
  PLATFORM_ROLE: 'Platform Role',
  PLATFORM_ROLE_EMPTY_DESC: 'Please create a platform role.',
  PLATFORM_ROLE_PL: 'Platform Roles',
  'Platform Roles': 'Platform Roles',
  'Account Roles': 'Roles de cuenta',
  ALERTING_MESSAGES_MANAGEMENT: 'Gestión de mensajes de alerta',
  ALERTING_MESSAGES_VIEW: 'Vista de mensajes de alerta',
  ALERTING_POLICIES_MANAGEMENT: 'Gestión de Políticas de alerta',
  ALERTING_POLICIES_VIEW: 'Vista de políticas de alerta',
  'App Templates Management': 'Gestión de plantillas de aplicaciones',
  'App Templates View': 'Vista de plantillas de aplicaciones',
  APPLICATION_WORKLOADS_MANAGEMENT: 'Gestión de workload de aplicaciones',
  APPLICATION_WORKLOADS_VIEW: 'Vista de workload de aplicaciones',
  PERMISSION_PL: 'Lista de autorizaciones',
  'Authorization Settings': 'Configuración de autorización',
  'Authorized Actions': 'Acciones autorizadas',
  AUTHORIZED_USER_PL: 'Usuarios autorizados',
  CUSTOM_MONITORING_VIEW: 'Custom Monitoring View',
  CUSTOM_MONITORING_MANAGEMENT: 'Custom Monitoring Management',
  Cluster: 'Clúster',
  'Cluster Members Management': 'Gestión de miembros del clúster',
  'Cluster Members View': 'Vista de miembros del clúster',
  'Cluster Monitoring View': 'Vista de monitorización de clúster',
  'Cluster Resources Management': 'Gestión de recursos del clúster',
  'Cluster Role': 'Rol de clúster',
  'Cluster Roles Management': 'Gestión de roles de clúster',
  'Cluster Roles View': 'Vista de roles de clúster',
  'Clusters View': 'Vista de grupos',
  'Components Management': 'Gestión de componentes',
  CONFIGMAPS_MANAGEMENT: 'ConfigMaps Management',
  CONFIGMAPS_VIEW: 'ConfigMaps View',
  SERVICEACCOUNT_MANAGEMENT: 'Gestión de cuentas de servicio',
  SERVICEACCOUNT_VIEW: 'Vista de cuenta de servicio',
  'CRD Management': 'Gestión de CRD',
  'Create Account Role': 'Crear rol de cuenta',
  'Create Cluster Role': 'Crear rol de clúster',
  'Create Project Role': 'Crear rol de proyecto',
  'Create Role': 'Crear rol',
  CREDENTIALS_VIEW: 'Vista de credenciales',
  'Default user role which allows a user to manage resources within the projects created by the user himself or invited by others. It does not allow the user to manage unauthorized resources in the cluster.':
    'Rol de usuario predeterminado que permite a un usuario administrar recursos dentro de los proyectos creados por el propio usuario o invitados por otros. No permite al usuario administrar recursos no autorizados en el clúster.',
  'Depend on': 'Depender de',
  DEVOPS_CREATE: 'Creación de DevOps',
  'DevOps Management': 'Gestión de DevOps',
  'DevOps Members Management': 'Gestión de miembros de DevOps',
  'DevOps Members View': 'Vista de miembros de DevOps',
  'DevOps Roles Management': 'Gestión de roles de DevOps',
  'DevOps Roles View': 'Vista de roles de DevOps',
  'DevOps Settings': 'Configuración de DevOps',
  DEVOPS_VIEW: 'Vista de DevOps',
  'Edit Account Role': 'Editar rol de cuenta',
  'Edit Authorization': 'Editar autorización',
  'Edit Cluster Role': 'Editar rol de clúster',
  'Edit Project Role': 'Editar rol de proyecto',
  'Edit Role': 'Editar rol',
  'Federated Projects Management': 'Gestión de proyectos federados',
  'Invalid role name': 'Nombre de rol inválido',
  'Invited Successfully': 'Invitado con éxito',
  Member: 'Miembro',
  MODULES: 'Módulos',
  'Network Policies Management': 'Gestión de políticas de red',
  'Network Policies View': 'Vista de políticas de red',
  NO_PERMISSION: 'Sin autorización',
  'Nodes View': 'Vista de nodos',
  PIPELINES_MANAGEMENT: 'Gestión de pipelines',
  PIPELINES_VIEW: 'Vista de pipelines',
  'Platform Settings Management': 'Gestión de configuración de plataforma',
  ROLE_NAME_EMPTY: 'Por favor, introduce el nombre del rol',
  'Please specify role authorization':
    'Por favor, especifique la autorización del rol',
  'Project Details': 'Detalles de proyecto',
  PROJECT_MEMBERS_MANAGEMENT: 'Gestión de miembros de proyecto',
  PROJECT_MEMBERS_VIEW: 'Vista de miembros del proyecto',
  'Project Resources Management': 'Gestión de recursos de proyecto',
  PROJECT_ROLES_MANAGEMENT: 'Gestión de Roles de Proyecto',
  PROJECT_ROLES_VIEW: 'Vista de roles de proyecto',
  PROJECTS_CREATE: 'Creación de proyectos',
  'Projects Management': 'Gestión de proyectos',
  PROJECTS_VIEW: 'Vista de proyectos',
  Role: 'Rol',
  'Role Management': 'Gestión de roles',
  'Role name exists': 'El nombre del rol ya existe',
  'Role Type': 'Tipo de rol',
  Roles: 'Roles',
  roles: 'roles',
  'Roles Management': 'Gestión de roles',
  'Roles View': 'Vista de roles',
  SECRETS_MANAGEMENT: 'Gestión de secretos',
  SECRETS_VIEW: 'Vista de secretos',
  'StorageClasses Management': 'Gestión de clases de almacenamiento',
  'StorageClasses View': 'Vista de clases de almacenamiento',
  'Unable to delete preset role': 'No se puedes eliminar el rol preestablecido',
  'Users Management': 'Gestión de usuarios',
  'Users View': 'Vista de usuarios',
  VOLUME_SNAPSHOTS_MANAGEMENT: 'Gestión de snapshots de volumen',
  VOLUME_SNAPSHOTS_VIEW: 'Vista de snapshots de volumen',
  VOLUMES_MANAGEMENT: 'Gestión de volúmenes',
  VOLUMES_VIEW: 'Vista de volúmenes',
  WORKSPACE_APP_REPOS_MANAGEMENT:
    'Gestión de repositorios de aplicaciones del espacio de trabajo',
  WORKSPACE_APP_REPOS_VIEW:
    'Vista de repositorios de aplicaciones del espacio de trabajo',
  WORKSPACE_APP_TEMPLATES_MANAGEMENT:
    'Gestión de plantillas de aplicaciones del espacio de trabajo',
  WORKSPACE_APP_TEMPLATES_VIEW:
    'Vista de plantillas de aplicación del espacio de trabajo',
  WORKSPACE_MEMBERS_MANAGEMENT: 'Gestión de miembros del espacio de trabajo',
  WORKSPACE_MEMBERS_VIEW: 'Vista de miembros del espacio de trabajo',
  WORKSPACE_ROLES_MANAGEMENT: 'Gestión de roles del espacio de trabajo',
  WORKSPACE_ROLES_VIEW: 'Vista de roles del espacio de trabajo',
  'Workspaces Management': 'Gestión de espacios de trabajo',
  'Workspaces View': 'Vista de espacios de trabajo',
  NO_AVAILABLE_ROLE: 'No hay roles disponibles para el proyecto actual.',
  JOIN_PROJECT_PLACEHOLDER:
    'Invita a los miembros por nombre de usuario o correo electrónico para que se unan al proyecto.',
  ROLE_PROJECTS_JOIN_TIP:
    'Introduce el nombre de usuario o la dirección de correo electrónico para invitar a los usuarios al proyecto.',
  ROLE_DELETE_TIP:
    'El rol actual ya está vinculado al usuario, intenta nuevamente después de desvincularlo.',
  ROLE_NO_AVAILABLE_TIP: 'No hay roles disponibles para el proyecto actual.',
  ROLE_TYPE_DESC:
    'Los tipos de roles se clasifican entre clúster y proyecto, el rol actual está autorizado con alcance a nivel de proyecto.',
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
  RULE_WORKSPACES: 'Espacios de trabajo',
  RULE_KUBECTL: 'KubeCtl',
  RULE_MONITORING: 'Gestión de monitorización',
  RULE_PROJECTS: 'Gestión de proyectos',
  RULE_USERS: 'Gestión de usuarios',
  RULE_ACCOUNTS: 'Administración de cuentas',
  RULE_ROLES: 'Gestión de roles',
  RULE_REGISTRYS: 'Registry de imágenes',
  RULE_PERSISTENTVOLUMECLAIMS: 'Gestión de volúmenes',
  RULE_STORAGECLASSES: 'Gestión de clases de almacenamiento',
  RULE_IMAGES: 'Gestión del repositorio de imágenes',
  RULE_NODES: 'Gestión de nodos',
  RULE_APP_CATALOG: 'Gestión de repositorios',
  RULE_REPOS: 'Gestión de repositorios',
  RULE_APPS: 'Plantilla de la aplicación',
  RULE_DEPLOYMENTS: 'Implementaciones',
  RULE_STATEFULSETS: 'StatefulSets',
  RULE_DAEMONSETS: 'DaemonSets',
  RULE_SERVICES: 'Gestión De Servicios',
  RULE_ROUTES: 'Gestión de Rutas',
  RULE_VIEW: 'Ver',
  RULE_CREATE: 'Crear',
  RULE_EDIT: 'Editar',
  RULE_DELETE: 'Eliminar',
  RULE_ROLE_BINDING: 'Roles vinculantes',
  RULE_PODSCALE: 'Gestión de escalado de Pods',
  RULE_SCALE: 'Escalar/Desescalar',
  RULE_MEMBERS: 'Gestión de miembros',
  RULE_MEMBER_ROLES: 'Rol de miembro',
  RULE_COMPONENTS: 'Componentes',
  RULE_VOLUMES: 'Volúmenes',
  RULE_PODS: 'Gestión de Pods',
  RULE_TERMINAL: 'Terminal Remoto',
  RULE_APPLICATIONS: 'Aplicaciones',
  RULE_JOBS: 'Jobs',
  RULE_CRONJOBS: 'CronJobs',
  RULE_SECRETS: 'Secrets',
  RULE_CONFIGMAPS: 'ConfigMaps',
  RULE_DRAIN: 'Drain',
  RULE_CORDON: 'Cord / Uncord',
  RULE_TAINT: 'Gestión de taints',
  RULE_DEVOPS: 'Gestión de proyectos DevOps',
  RULE_REGISTRIES: 'Registry de imágenes',
  RULE_ORGANIZATIONS: 'Organización',
  RULE_INTERNET: 'Administración de acceso a internet',
  RULE_LOGGING: 'Gestión de registros',
  RULE_ALERTING: 'Gestión de alertas',
  RULE_MANAGE: 'Gestionar',
  RULE_ADVANCED: 'Ajustes avanzados',
  RULE_S2IBUILDERS: 'Image Builder',
  ROLE_CREATE_TIP_TITLE: 'Próximo paso',
  ROLE_CREATE_TIP_MESSAGE:
    'Tienes que editar la autorización, después de lo cual el rol se podrá crear correctamente.',
  NODES_VIEW_DESC: 'Ver información del nodo',
  NODES_MANAGEMENT_DESC:
    'Gestionar / habilitar / deshabilitar nodos, gestionar taints',
  CRD_MANAGEMENT_DESC:
    'Gestionar / ver / modificar / eliminar los CRD de clúster',
  COMPONENTS_MANAGEMENT_DESC: 'Gestionar componentes del clúster',
  CLUSTERS_VIEW_DESC:
    'Ver todos los clústeres y recursos de clúster dentro de una plataforma',
  'Clusters Management': 'Cluster Management',
  CLUSTERS_MANAGEMENT: 'Cluster Management',
  CLUSTERS_MANAGEMENT_DESC:
    'Crear / eliminar grupos, gestionar recursos en todos los clústeres',
  WORKSPACES_VIEW_DESC:
    'Ver los espacios de trabajo actuales a los que los usuarios tienen acceso',
  ROLES_VIEW_DESC: 'Ver los roles actuales en la plataforma',
  USERS_VIEW_DESC: 'Ver usuarios en la plataforma actual',
  WORKSPACES_MANAGEMENT_DESC:
    'Permite la gestión del espacio de trabajo, que incluye agregar / eliminar / editar espacios de trabajo; ver todos los espacios de trabajo en la plataforma',
  USERS_MANAGEMENT_DESC:
    'Permite la gestión de cuentas, incluida la adición / eliminación / actualización de información de la cuenta',
  ROLES_MANAGEMENT_DESC:
    'Permite la gestión de roles de cuenta, que incluye agregar / eliminar / actualizar roles de cuenta',
  APP_TEMPLATES_VIEW_DESC: 'Ver plataforma App Store',
  APP_TEMPLATES_MANAGEMENT_DESC:
    'Gestiona la tienda de aplicaciones a nivel de plataforma, y es responsable de la gestión unificada del ciclo de vida de las aplicaciones nativas de cloud, incluido su lanzamiento (release), eliminación y revisión',
  PLATFORM_SETTINGS_MANAGEMENT_DESC:
    'Gestiona la configuración de la plataforma.',
  ACCOUNT_ROLE_DESC:
    'Los roles de cuenta definen la autorización que tiene una cuenta en la plataforma.',
  ACCOUNT_ROLE_CREATE_DESC:
    'Los roles de cuenta definen la autorización que tiene una cuenta en la plataforma.',
  PIPELINES_MANAGEMENT_DESC:
    'Administra las pipelines de proyectos DevOps, incluyendo la creación, edición y eliminación',
  PIPELINES_VIEW_DESC:
    'Ver las pipelines de proyectos DevOps y descargar artefactos',
  CREDENTIALS_MANAGEMENT_DESC:
    'Administra las credenciales del proyecto, incluyendo la creación, edición y eliminación.',
  CREDENTIALS_VIEW_DESC: 'Ver y usar credenciales',
  DEVOPS_ROLES_VIEW_DESC: 'Ver los roles de proyecto DevOps',
  DEVOPS_ROLES_MANAGEMENT_DESC:
    'Crear, editar y eliminar roles de proyecto DevOps (los roles preestablecidos del sistema no se pueden eliminar)',
  DEVOPS_MEMBERS_VIEW_DESC: 'Ver miembros del proyecto DevOps',
  DEVOPS_MEMBERS_MANAGEMENT_DESC:
    'Invitar / editar / eliminar miembros del proyecto DevOps',
  DEVOPS_SETTINGS_DESC:
    'Administra la configuración del proyecto DevOps y edita su información',
  CLUSTER_MEMBERS_MANAGEMENT_DESC:
    'Invitar / editar / eliminar miembros del clúster',
  CLUSTER_MEMBERS_VIEW_DESC: 'Ver miembros del clúster',
  CLUSTER_ROLES_MANAGEMENT_DESC:
    'Crear, editar y eliminar roles de clúster (los roles preestablecidos del sistema no se pueden eliminar)',
  CLUSTER_ROLES_VIEW_DESC: 'Ver roles de clúster',
  NETWORK_POLICIES_MANAGEMENT_DESC:
    'Crear / editar / eliminar políticas de red de clúster',
  NETWORK_POLICIES_VIEW_DESC: 'Ver las políticas de red del clúster',
  STORAGECLASSES_VIEW_DESC:
    'Ver todas las clases de almacenamiento en el clúster',
  STORAGECLASSES_MANAGEMENT_DESC:
    'Crear / editar / eliminar clases de almacenamiento y establecer la clase de almacenamiento predeterminada',
  VOLUME_SNAPSHOTS_VIEW_DESC:
    'Ver todas las instantáneas de volumen en el clúster',
  VOLUME_SNAPSHOTS_MANAGEMENT_DESC:
    'Crear / editar / eliminar instantáneas de volumen',
  CLUSTER_MONITORING_VIEW_DESC:
    'Ver los recursos físicos del clúster y los datos de monitorización de los recursos de la aplicación.',
  APPLICATION_WORKLOADS_VIEW_DESC:
    'Grant permission to view applications, services, workloads, jobs, grayscale releases and image builder tasks in the project',
  APPLICATION_WORKLOADS_MANAGEMENT_DESC:
    'Grant permission to create, edit, and delete applications, services, workloads, jobs, grayscale releases and image builder tasks in the project',
  VOLUMES_VIEW_DESC: 'Ver volúmenes de proyectos',
  VOLUMES_MANAGEMENT_DESC: 'Crear / editar / eliminar volúmenes de proyecto',
  SECRETS_VIEW_DESC: 'Ver secretos del proyecto',
  SECRETS_MANAGEMENT_DESC: 'Crear / editar / eliminar secretos del proyecto',
  CONFIGMAPS_VIEW_DESC: 'Grant permission to view project configmaps',
  CONFIGMAPS_MANAGEMENT_DESC:
    'Grant permission to create/edit/delete project configmaps',
  SERVICEACCOUNT_MANAGEMENT_DESC:
    'Crear, editar y eliminar cuentas de servicio del proyecto',
  SERVICEACCOUNT_VIEW_DESC: 'Ver cuentas de servicio del proyecto',

  CUSTOM_MONITORING_VIEW_DESC:
    'Grant permission to view custom monitoring data',
  CUSTOM_MONITORING_MANAGEMENT_DESC:
    'Grant permission to create and manage custom monitoring data',

  ALERTING_POLICIES_VIEW_DESC: 'Ver políticas de alertas',
  ALERTING_POLICIES_MANAGEMENT_DESC:
    'Crear / editar / eliminar políticas de alertas',
  ALERTING_MESSAGES_VIEW_DESC: 'Ver mensajes de alerta',
  ALERTING_MESSAGES_MANAGEMENT_DESC: 'Comentar / eliminar mensajes de alerta',
  PROJECT_ROLES_VIEW_DESC: 'Ver roles del proyecto',
  PROJECT_ROLES_MANAGEMENT_DESC:
    'Crear, editar y eliminar roles de proyecto (los roles preestablecidos del sistema no se pueden eliminar)',
  PROJECT_MEMBERS_VIEW_DESC: 'Ver miembros del proyecto',
  PROJECT_MEMBERS_MANAGEMENT_DESC:
    'Invitar / editar / eliminar miembros del proyecto',
  PROJECT_SETTINGS_DESC:
    'Administra la configuración del proyecto y edita su información incluyendo el acceso a Internet, las políticas de red, la cuota de recursos y la recopilación y configuración del registro de disco',
  PROJECTS_MANAGEMENT_DESC:
    'Administra todos los proyectos en el espacio de trabajo, incluyendo la creación / edición / eliminación de proyectos',
  PROJECTS_CREATE_DESC:
    'Autorización para crear proyectos. El creador será el administrador del proyecto',
  PROJECTS_VIEW_DESC: 'Ver todos los proyectos en el espacio de trabajo',
  DEVOPS_MANAGEMENT_DESC:
    'Administra todos los proyectos DevOps en el espacio de trabajo, incluyendo la creación / edición / eliminación de proyectos DevOps',
  DEVOPS_CREATE_DESC:
    'Autorización para crear proyectos DevOps. El creador será el administrador del proyecto DevOps',
  DEVOPS_VIEW_DESC:
    'Ver todos los proyectos de DevOps en el espacio de trabajo',
  WORKSPACE_GROUPS_VIEW_DESC:
    'Conceder permiso para ver la estructura y los miembros de la organización empresarial',
  WORKSPACE_GROUPS_MANAGEMENT_DESC:
    'administrar la estructura organizacional de la empresa, invitar / remover miembros de la organización y autorizar la organización',
  WORKSPACE_ROLES_VIEW_DESC: 'Ver roles del espacio de trabajo',
  WORKSPACE_ROLES_MANAGEMENT_DESC:
    'Crear, editar y eliminar roles del espacio de trabajo (los roles preestablecidos del sistema no se pueden eliminar)',
  WORKSPACE_MEMBERS_VIEW_DESC: 'Ver miembros del espacio de trabajo',
  WORKSPACE_MEMBERS_MANAGEMENT_DESC:
    'Invitar / editar / eliminar miembros del espacio de trabajo',
  WORKSPACE_APP_REPOS_VIEW_DESC: 'Ver listas de repositorios de aplicaciones',
  WORKSPACE_APP_REPOS_MANAGEMENT_DESC:
    'Crear / editar / eliminar repositorios de aplicaciones',
  WORKSPACE_APP_TEMPLATES_VIEW_DESC:
    'Ver plantillas de aplicaciones de espacio de trabajo',
  WORKSPACE_APP_TEMPLATES_MANAGEMENT_DESC:
    'Cargar / editar / eliminar plantillas de aplicaciones de espacio de trabajo; liberar / eliminar aplicaciones para la tienda de aplicaciones en la plataforma',
  ROLE_PLATFORM_ADMIN:
    'Administrador de la plataforma que puede administrar todos los recursos en la plataforma.',
  ROLE_PLATFORM_REGULAR:
    'Usuario normal en la plataforma que no tiene acceso a ningún recurso antes de unirse al espacio de trabajo o clúster.',
  ROLE_USERS_MANAGER:
    'Administrador de usuarios en la plataforma que administra a todos los usuarios.',
  ROLE_WORKSPACES_MANAGER:
    'Administrador del espacio de trabajo en la plataforma que administra todos los espacios de trabajo en la plataforma.',
  ROLE_CLUSTER_ADMIN:
    'Permite el acceso de administrador de clúster para realizar cualquier acción en cualquier recurso. Le da control total sobre todos los recursos en el clúster y en todos los espacios de nombres.',
  ROLE_CLUSTER_VIEWER:
    'Permite que cluster-viewer vea todos los recursos en el cluster.',
  ROLE_WORKSPACE_ADMIN:
    'Permite el acceso de administrador para realizar cualquier acción en cualquier recurso. Le da control total sobre todos los recursos en el espacio de trabajo.',
  ROLE_WORKSPACE_REGULAR:
    'Usuario normal en el espacio de trabajo que no puede crear espacios de nombres o proyectos DevOps.',
  ROLE_WORKSPACE_VIEWER:
    'Permite el acceso de lectura para ver todos los recursos en el espacio de trabajo.',
  ROLE_WORKSPACE_SELF_PROVISIONER:
    'Usuario normal en el espacio de trabajo que puede crear espacios de nombres y proyectos DevOps.',
  ROLE_PROJECT_ADMIN:
    'Permite el acceso de administrador para realizar cualquier acción en cualquier recurso. Le da control total sobre todos los recursos en el namespace.',
  ROLE_PROJECT_REGULAR:
    'El que mantiene el namespace, que puede administrar recursos en el mismo excepto usuarios y roles.',
  ROLE_PROJECT_VIEWER:
    'Permite el acceso de lectura para ver todos los recursos en el namespace.',
  ROLE_PROJECT_OPERATOR:
    'El que mantiene el proyecto, que puede administrar recursos en el mismo excepto usuarios y roles.',
  ROLE_DEVOPS_ADMIN:
    'Permite el acceso de administrador para realizar cualquier acción en cualquier recurso. Da control total sobre todos los recursos en el proyecto DevOps.',
  ROLE_DEVOPS_REGULAR:
    'El que mantiene el namespace, que puede administrar recursos en el proyecto DevOps excepto usuarios y roles.',
  ROLE_DEVOPS_VIEWER:
    'Permite el acceso de lectura para ver todos los recursos en el proyecto DevOps.',
  ROLE_DEVOPS_OPERATOR:
    'Usuario normal en un proyecto DevOps, que puede crear credenciales para las pipelines en el proyecto DevOps.',
  NO_AUTHORIZED_USER_DESC: 'This role has not been assigned to any user.',
  WORKSPACE_SETTINGS_VIEW: 'vista de configuración del espacio de trabajo',
  WORKSPACE_SETTINGS_MANAGEMENT:
    'gestión de la configuración del espacio de trabajo',
  WORKSPACE_SETTINGS_DESC:
    'Concede permiso para gestionar el workspace: cambiar los parámetros, editar la información, network policies, etc.',
  WORKSPACE_SETTINGS_VIEW_DESC: 'Vea la configuración del espacio de trabajo.',
  WORKSPACE_SETTINGS_MANAGEMENT_DESC:
    'Concede permiso para gestionar el workspace: cambiar los parámetros, editar la información, network policies, etc.',

  FEDERATED_PROJECTS_MANAGEMENT_DESC:
    'Gestiona todos los proyectos multi-cluster en el workspace, incluyendo crear/editar/borrar proyectos multi-cluster',

  DESELECT_RESOURCE_FIRST: 'Please deselect {resource} first.',
  TOP_5_FOR_RSC_USAGE: 'Top 5 for Resource Usage',

  // Cluster Status
  EXPORT: 'Export',
  CLUSTER: 'Cluster',
  CLUSTER_PL: 'Clusters',
  CLUSTER_VALUE: 'Cluster: {value}',
  ADD_QUOTA: 'Agregar elemento de cuota',
  DISABLE_LOG_COLLECTION: 'Disable Log Collection',
  ASSIGN_WORKSPACE: 'Asignar espacio de trabajo',
  SELECT_WORKSPACE_DESC: 'Elige un espacio de trabajo',
  Closed: 'Cerrado',
  EDIT_DEFAULT_CONTAINER_QUOTA: 'Edit Default Container Quota',
  EDIT_DEFAULT_CONTAINER_QUOTAS: 'Edit Default Container Quotas',
  DEFAULT_CONTAINER_QUOTA_PL: 'Default Container Quotas',
  CREATE_MULTI_CLUSTER_PROJECT: 'Crear proyecto de clúster múltiple',
  CREATE_PROJECT: 'Crear proyecto',
  cronjobs: 'cronjobs',
  DaemonSet: 'DaemonSet',
  daemonsets: 'daemonsets',
  'Default limit resource': 'Recurso límite predeterminado',
  'default request CPU should not be greater than default limit CPU':
    'la solicitud predeterminada de la CPU no debe ser mayor que la CPU predeterminada del límite',
  'default request memory should not be greater than default limit memory':
    'la memoria de solicitud predeterminada no debe ser mayor que la memoria límite predeterminada',
  'Default request resource': 'Recurso de solicitud predeterminado',
  Deleting: 'Borrando',
  Deployment: 'Despliegue',
  deployments: 'implementaciones',
  Details: 'Detalles',
  'DevOps Projects': 'Proyectos DevOps',
  DISK_LOG_COLLECTION: 'Colección de registro de disco',
  COLLECT_LOGS_ON_VOLUMES: 'Colección de registro de disco',
  LOG_COLLECTION_ENABLED_DESC:
    'After this function is enabled or disabled, you need to restart the Pod replicas to make the change take effect.',
  EDIT_PROJECT: 'Editar proyecto',
  EDIT_PROJECT_QUOTA: 'Edit Project Quota',
  'Empty value means no limit, CPU 1 Core = 1000m':
    'El valor vacío significa que no hay límite, 1 Core de CPU = 1000m',
  'Enter DevOps Project': 'Introduce el proyecto DevOps',
  'Enter Project': 'Entrar al proyecto',
  FED_HOST_NAMESPACE_TIP:
    'Por favor, no manipules los recursos de este proyecto puesto que pertence a un proyecto multicluster',
  GATEWAY: 'Información de puerta de enlace',
  GATEWAY_NOT_ENABLED: 'Puerta de enlace no establecida',
  'Help Information': 'Información de ayuda',
  HOW_TO_INVITE_USERS: '¿Cómo invitar a otros miembros al proyecto actual?',
  HOW_TO_SET_PROJECT_GATEWAY:
    '¿Cómo configurar la puerta de enlace del proyecto?',
  'Invalid project name': 'Nombre de proyecto inválido',
  'Invite Member': 'Miembro invitado',
  INVITE_DEVOPS_MEMBER: 'Invitar miembros al proyecto DevOps',
  'Invite Members to the Project': 'Invitar miembros al proyecto',
  jobs: 'trabajos',
  LIMITS_CPU: 'limit.cpu',
  LIMITS_MEMORY: 'limits.memoria',
  LoadBalancer: 'LoadBalancer',
  MANAGE_PROJECT: 'Gestionar proyecto',
  'Member Name': 'Nombre de miembro',
  Members: 'Miembros',
  'Members Management': 'Gestión de miembros',
  'Modify Member Role': 'Modificar rol de miembro',
  'Modify Members Role': 'Modificar rol de miembros',
  'Multi-cluster Project': 'Proyecto de clúster múltiple',
  MULTI_CLUSTER_PROJECT: 'Proyecto de clúster múltiple',
  MULTI_CLUSTER_PROJECT_LOW: 'Proyecto de clúster múltiple',
  MULTI_CLUSTER_PROJECT_SCAP: 'Multi-cluster project',
  'Multi-cluster Projects': 'Proyectos de clústeres múltiples',
  MULTI_CLUSTER_PROJECT_PL: 'Proyectos de clústeres múltiples',
  PROJECT_NAME_EXISTS_IN_HOST: 'The project name exists on the host cluster.',
  FEDPROJECT_CANNOT_ADD_CLUSTER: 'Unable to add a new cluster',

  MULTI_CLUSTER_PROJECT_DELETE_TIP:
    'Borrar un proyecto multi-cluster borra también el mismo proyecto en el host de cluster.</br>Por favor, introduce el nombre {type} <strong>{resource}</strong> para estar seguro de que entiendes el riesgo de esta operación.',
  'No Platform Manage Authorization':
    'Sin autorización de gestión de plataforma',
  'Not Assigned': 'No asignado',
  Opened: 'Abierto',
  'Please input project name': 'Por favor introduce el nombre del proyecto',
  pods: 'pods',
  PROJECT_INFO: 'Información del proyecto',
  PROJECT_ADMINISTRATOR: 'Gestor de proyecto',
  'Project Member': 'Miembro del proyecto',
  PROJECT_MEMBER_PL: 'Miembros del proyecto',
  'project members': 'miembros del proyecto',
  PROJECT_NAME: 'Nombre del proyecto',
  'Project name exists': 'El nombre del proyecto existe',
  'Project name exists on host cluster':
    'El nombre del proyecto existe en el clúster',
  'Project Overview': 'Descripción del proyecto',
  'Project Placement': 'Colocación del proyecto',
  PROJECT_QUOTA: 'Cuota de proyecto',
  EDIT_PROJECT_QUOTAS: 'Edit Project Quotas',
  'Project Role': 'Rol del proyecto',
  // Create Service Account Page
  PROJECT_ROLE_SI: 'Rol del proyecto',
  PROJECT_ROLE_PL: 'Roles del proyecto',
  Project_Admin: 'Project_Admin',
  Projects: 'Proyectos',
  projects: 'proyectos',
  'Quota Management': 'Gestión de cuotas',
  REMOVE_MEMBER: 'Eliminar miembro',
  REMOVE_MULTIPLE_MEMBERS: 'Remove Multiple Members',
  REMOVE_MULTIPLE_MEMBERS_TIP:
    'Enter the usernames <strong>{resource}</strong> to confirm that you understand the risks of this operation.',
  WORKSPACE_QUOTA_PL: 'Workspace Quotas',
  PROJECT_QUOTA_PL: 'Project Quotas',
  'Remove Member': 'Eliminar miembro',
  'Remove Members': 'Eliminar miembros',
  REQUESTS_CPU: 'CPU',
  REQUESTS_MEMORY: 'Memory Request',
  RESOURCE_QUOTA_PL: 'Cuota de recursos',
  PROJECT_RESOURCE_QUOTAS: 'Project Resource Quotas',
  RESOURCE_TYPE: 'Tipo de recurso',
  RESOURCE_TYPE_SCAP: 'Tipo de recurso',
  PROJECT_ADMINISTRATOR_DESC:
    'Selecciona un usuario del espacio de trabajo como administrador del proyecto.',
  'Select Project Type': 'Seleccionar tipo de proyecto',
  SELECT_CLUSTER_DESC: 'Selecciona el clúster para crear el proyecto.',
  CLUSTER_EMPTY_DESC: 'Selecciona un cluster, por favor.',
  ENABLE_GATEWAY: 'Establecer puerta de enlace',
  StatefulSet: 'StatefulSet',
  statefulsets: 'statefulsets',
  'Target Workspace': 'Espacio de trabajo de destino',
  Terminating: 'Terminando',
  Usage: 'Uso',
  Volume: 'Volumen',
  'Number of volumes': 'Numero de volúmenes',
  RESOURCE_QUANTITY_LIMIT: 'Resource quantity limit',
  PROJECTS_DESC:
    'Un proyecto es un namespace de Kubernetes en KubeSphere, que proporciona un mecanismo para organizar los recursos en un espacio de trabajo.',
  CREATE_PROJECT_DESC:
    'Un proyecto es un namespace de Kubernetes en KubeSphere, que proporciona un mecanismo para organizar los recursos en un espacio de trabajo.',
  PROJECT_ADVANCE_DESC:
    'Establecer la solicitud de recursos predeterminada del proyecto',
  PROJECT_NAME_DESC:
    'Solo puede contener letras minúsculas, números y guiones ("-"), y debe comenzar con una letra minúscula y terminar con un número o letra minúscula. La longitud máxima de caracteres se establece en 63.',
  PROJECT_NAME_INVALID_DESC:
    'Solo puede contener letras minúsculas, números y guiones ("-"), y debe comenzar con una letra minúscula y terminar con un número o letra minúscula. La longitud máxima de caracteres se establece en 63.',
  PROJECT_BASEINFO_DESC: 'Configuración de información básica del proyecto',
  PROJECT_TYPES_PROJECT_TITLE: 'Crear un proyecto de recursos',
  PROJECT_TYPES_PROJECT_DESC:
    'El proyecto en KubeSphere corresponde al namespace de Kubernetes, que es una colección abstracta de un conjunto de recursos y objetos que se pueden agrupar de acuerdo con diferentes unidades de negocio o proyectos de productos.',
  PROJECT_TYPES_DEVOPS_TITLE: 'Crear un proyecto DevOps',
  PROJECT_TYPES_DEVOPS_DESC:
    'Cree y pruebe proyectos de software de forma continua y automática.',
  PROJECT_ASSIGN_DESC:
    'Una vez que el proyecto se asigna a un espacio de trabajo ya no se puedes cambiar.',
  INVITE_MEMBER_DESC:
    'You can invite members who belong to the workspace to the project.',
  PROJECT_MEMBER_EMPTY_DESC:
    'Please invite a member of the current workspace to the project.',
  INVITE_MEMBER_DESC_DEVOPS:
    'You can invite members who belong to the workspace to the DevOps project.',
  INVITE_MEMBER_SEARCH_PLACEHOLDER:
    'Introduce una dirección de correo electrónico para invitar miembros',
  ASSIGN_ROLE: 'Assign Role',
  DELETE_MEMBER_TIP:
    '¿Estás seguro de eliminar el miembro <strong>{name}</strong> ? El miembro no podrá acceder a este proyecto una vez eliminado.',
  PROJECT_ADMIN_DESC:
    'Puedes especificar un miembro del proyecto como administrador.',
  ENABLE_GATEWAY_DESC:
    'Antes de crear una ruta, debe habilitar el portal de acceso a Internet (es decir, la puerta de enlace). Este paso crea un controlador de enrutamiento correspondiente para reenviar la solicitud al servicio de back-end correspondiente.',
  DELETE_INTERNET_ACCESS_TITLE: 'Remove Network Access Settings',
  DELETE_INTERNET_ACCESS_DESC:
    'Are you sure you want to remove network access settings? You can reset the network access after the settings are removed.',
  NO_RELATE_PROJECTS_TITLE: 'Ningún proyecto asociado contigo',
  NO_RELATE_PROJECTS_DESC:
    'Puedes crear o ponerse en contacto con el gerente del proyecto para invitarlo al proyecto a comenzar su trabajo.',
  DELETE_PROJECT_TIP:
    '¿Está seguro de eliminar el proyecto <strong>{resource}</strong> ? Después de la eliminación no podrás recuperarlo y los recursos del proyecto también serán destruidos.',
  DEFAULT_RESOURCE_UNIT_DESC:
    'El valor de CPU indica el número de núcleos de CPU cuando no tiene unidad. 1 núcleo = 1000m',
  DEFAULT_RESOURCE_ALERT:
    'Cuando creas una carga de trabajo, esta configuración se utilizará de manera predeterminada si el límite de recursos y la solicitud de la carga de trabajo no están establecidos. Si no hay requisitos especiales, mantenga esta configuración predeterminada sin cambios.',
  QUOTA_EDIT_TIP:
    'Si el valor está vacío, la cuota de recursos no estará limitada.',
  HOW_TO_USE_QUOTA_Q: 'How do I use resource quotas?',
  HOW_TO_USE_QUOTA_A:
    'Resource quotas are a mechanism used to limit the resource usage. You can edit project resource quotas and default container quotas by clicking <b>Edit Project</b>.',
  DEFAULT_CONTAINER_QUOTAS_DESC:
    'Default container quotas specify the default CPU request, CPU limit, memory request, and memory limit of containers created in the project.',
  PROJECT_QUOTAS_DESC:
    'Project quotas specify the number of available CPU and memory resources and the maximum number of application resources such as oods, deployments, and services allowed in the project.',
  WHAT_IS_COLLECT_FILE_LOG_A:
    'La ruta de registro en el volumen montado en el contenedor se da en un patrón global. La ruta de registro se puede configurar en el workload para recopilar registros. El administrador debe habilitar la recopilación de registros de disco de antemano.',
  WHAT_ARE_DEFAULT_CONTAINER_QUOTAS_Q: 'What are default container quotas?',
  WHAT_ARE_DEFAULT_CONTAINER_QUOTAS_A:
    'Default container quotas specify the default CPU request, CPU limit, memory request, and memory limit of containers created in the project.',
  WHAT_IS_INTERNET_GATEWAY: 'What is a network access gateway?',
  COLLECT_LOGS_ON_VOLUMES_A:
    'To collect logs on volumes, you need to mount a volume in read and write mode to a container and set the container to export logs to the volume.',
  HOW_TO_INVITE_MEMBER_Q: 'How do I invite members to the project?',
  HOW_TO_INVITE_MEMBER_A:
    'The project administrator or users who have permission to invite project members can invite workspace members to the project.',
  DISABLE_LOG_COLLECTION_TIP:
    'Are you sure you want to disable log collection? After it is disabled, services that have enabled log collection will continue to collect logs saved in the volumes before the Pod replicas are restarted. If you need to collect the logs again, please enable log collection and restart the Pod replicas.',
  COLLECTING_FILE_LOG_DESC:
    'Los registros de disco en el contenedor se recopilarán y exportarán a stdout, que luego recopilará el recopilador de registros del sistema.',
  PROJECT_BASIC_INFO_DESC:
    'Basic information provides an overview of the project. You can view the project information and resource quotas.',
  PROJECT_ROLE_DESC:
    'Los roles de proyecto definen la autorización que los usuarios tienen en el proyecto actual.',
  SERVICE_ACCOUNT_PROJECT_ROLE_DESC:
    'Select the role of the service account in the current project.',
  PROJECT_ROLE_EMPTY_DESC: 'Please create a project role.',
  PROJECT_MEMBERS_DESC:
    'Gestionar y asignar roles para los miembros del proyecto.',
  PROJECT_ADVANCED_SETTINGS_DESC:
    'Advanced settings are used to configure external access, application governance, and log collection in the project.',
  PROJECT_TYPES_Q:
    '¿Cómo puedes acceder a los servicios del proyecto a través de la red externa?',
  PROJECT_TYPES_A:
    'La puerta de enlace del proyecto es responsable de crear el controlador de enrutamiento de la aplicación correspondiente para reenviar la solicitud al servicio de back-end correspondiente. Después de abrir la puerta de enlace del proyecto, el servicio puedes exponerse a la red externa a través de Ingress.',
  PROJECT_NAME_EXISTS_IN_CLUSTER: 'El nombre existe en {cluster}',
  PROJECT_CLUSTER_SETTINGS_DESC:
    'Selecciona el clúster para crear el proyecto. Cuando se seleccionan varios grupos, se creará un proyecto de múltiples grupos.',
  NETWORK_ISOLATED_DESC: 'Establecer estrategia de aislamiento de red',
  FEDPROJECT_RESOURCE_TIP:
    'No se pueden crear recursos de proyectos de múltiples clústeres en la administración de clústeres, vaya a la página del proyecto de múltiples clústeres para operar.',
  FEDPROJECT_CANNOT_DEPLOY_APP_TIP:
    'No se pueden implementar aplicaciones en proyectos de múltiples clústeres.',
  MULTI_CLUSER_PROJECT_TIP:
    'El proyecto multi-clúster actual se ejecuta en distintos clústers. Puedes saltar entre clústers para comprobar los parámetros de este proyecto en cada uno de ellos.',
  MULTI_CLUSTER_RESOURCE_TIP:
    'El recurso multi-clúster actual se ejecuta en distintos clústers. Puedes saltar entre clústers para comprobar los parámetros de este recurso en cada uno de ellos.',

  CREATE_MULTI_CLUSTER_PROJECT_DESC:
    'Un proyecto multi-clúster se ejecuta sobre distintos clústers a la vez, lo que ayuda a que puedas construir un entorno de contenedores para una rápida iteración de aplicaciones y conseguir alta disponibilidad.',

  PROJECT_QUOTAS_NOT_SET: 'Project Quota Not Set',
  DEFAULT_CONTAINER_QUOTAS_NOT_SET: 'Resource Default Request Not Set',

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
  ENABLE_GATEWAY_TIP:
    'To use the gateway, please configure the gateway in the cluster or the project.',

  // Network Isolation
  INGRESS: 'Ingress',
  INTERNAL_TRAFFIC_DIRECTION_DESC:
    'Egress indicates the direction from the current project to other projects. Ingress indicates the direction from other projects to the current project.',
  NETWORK_SEGMENT_EXAMPLE: 'Example: 10.0.0.0',
  PORT_EXAMPLE: 'Example: 80',
  abortPipeline: 'abortPipeline',
  'Absolute duration': 'Duración total',
  ADD_ACTION: 'Agregar acción',
  'Add another credential': 'Agregar otra credencial',
  'Add conditions': 'Agregar condiciones',
  'Add nesting conditions': 'Agregar condiciones anidadas',
  'Add nesting steps': 'Agregar pasos anidados',
  'Add Parallel Stage': 'Agregar pasos paralelos',
  'Add Step': 'Agregar paso',
  ALL_BRANCHES: 'Todas las ramas',
  CHOICE_PARAM_OPTION_DESC:
    'Enter one option per each line. La primera línea se usará como la opción predeterminada.',
  CODE_REPOSITORY_ADDRESS_DESC: 'Use a repository that contains Jenkinsfiles.',
  CODE_REPOSITORY_ADDRESS_EMPTY_TIP:
    'Please enter the address of a code repository.',
  archiveArtifacts: 'archiveArtifacts',
  'Are you sure to close this pipeline Editor ?':
    '¿Estás seguro de cerrar este editor de pipeline?',
  CLOSE_JENKINSFILE_EDITOR_TIP:
    '¿Estás seguro de cerrar este editor de jenkinsfile?',
  artifacts: 'artefactos',
  ARTIFACT_PL: 'Artefactos',
  'Authentication Token': 'Token de autenticación',
  'Automatically generated by GitHub': 'Generado automáticamente por GitHub',
  bcc: 'bcc',
  BEHAVIORAL_STRATEGY: 'Estrategia de comportamiento',
  blocker: 'bloqueador',
  BLOCKER: 'Blocker',
  CRITICAL: 'Critical',
  MAJOR: 'Major',
  MINOR: 'Minor',
  NOTICE: 'Notice',
  CODE_REPOSITORY_BRANCH: 'Rama',
  Branches: 'Ramas',
  BRANCH_COUNT: 'Número de rama',
  BRANCH_EXCLUDED: 'Rama excluida',
  BRANCH_INCLUDED: 'Rama incluida',
  'branch success': 'Rama correcta',
  BRANCH_SETTINGS: 'Configuración de ramas',
  BREAK: 'Rotura',
  BUILD_SETTINGS: 'Configuración de compilación',
  BUILD_TRIGGER: 'Crear disparador',
  '@somebody to help review': '¿Puede @alguien ayudar a revisar esto?',
  'Send messages by email': 'Puedes enviar mensajes por correo electrónico.',
  'Send messages in the build': 'Puedes enviar mensajes en la compilación',
  CANCELLED_IN_REVIEW: 'Cancelado en la revisión',
  CC: 'CC',
  'Change Current Directory': 'Cambiar directorio actual',
  'Chinese is not allowed in the pipeline configuration':
    'El chino no está permitido en la configuración de la pipeline',
  'Clean when aborted': 'Limpiar cuando aborte',
  'Clean Workspace': 'Limpiar entono de trabajo',
  CLONE_DEPTH: 'profundidad de clonado',
  CODE_CHECK: 'Código de calidad',
  'Code Quality Check': 'Código de control de calidad',
  CODE_REPOSITORY: 'Repositorio de Código',
  VULNERABILITY_PL: 'Vulnerabilidad de código',
  CODE_SMELL_PL: 'Code Smells',
  PARAMETER_DESCRIPTION_DESC: 'Descripción del parámetro.',
  COMMIT_PL: 'Commits',
  COMMIT: 'Commit',
  COMMIT_ID: 'Commit ID',
  'Config File Path': 'Ruta del archivo de configuración',
  'config name': 'nombre de configuración',
  configs: 'configs',
  'Configuration error': 'Error de configuración',
  container: 'contenedor',
  Continue: 'Seguir',
  COVERAGE: 'Cobertura',
  CREATE_CREDENTIAL: 'Crear credenciale',
  CREATE_PIPELINE: 'Crear pipeline',
  CREDENTIAL_SI: 'Autentificación',
  'credential Id': 'ID de autentificación',
  'Credential Id': 'ID de autentificación',
  CREDENTIAL_NAME: 'ID de autentificación',
  CREDENTIAL_PL: 'Autentificación',
  CREDENTIAL: 'Credential',
  CREDENTIAL_LOW: 'credential',
  CREDENTIALS_MANAGEMENT: 'Gestión de credenciales',
  credentialsId: 'credenciales',
  critical: 'crítico',
  'Current branch name must match the input value':
    'El nombre de la rama actual debe coincidir con el valor de entrada',
  BUILD_RECORD_RETENTION_PERIOD_DAYS: 'Días para mantener las build',
  BRANCH_RETENTION_PERIOD_DAYS: 'Días para mantener ramas',
  'defaultValue -1 means not to discard':
    'defaultValue -1 significa no descartar',
  'Delete all resources of the deployment file':
    'Eliminar todos los recursos del archivo de despliegue',
  'Deploy resources to the Kubernetes cluster':
    'Implementar recursos en el clúster de Kubernetes',
  "Didn't pass": 'No pasó',
  dir: 'directorio',
  Discard: 'Descarte',
  DELETE_OUTDATED_BRANCHES: 'Descartar ramas anteriores',
  DELETE_OUTDATED_BUILD_RECORDS: 'Descartar builds antiguas',
  DISCOVER_TAG_BRANCHES: 'Descubrir Tag ramas',
  DISCOVER_BRANCHES: 'Descubrir ramas',
  'Discover branches from repository': 'Descubrir ramas desde el repositorio',
  DISCOVER_PR_FROM_FORKS: 'Descubrir PR desde Forks',
  DISCOVER_PR_FROM_ORIGIN: 'Descubrir PR desde Origin',
  'Discover pull requests from forks': 'Descubrir las PR desde forks',
  'Discover pull requests from origin': 'Descubrir las PR desde origin',
  DISPLAY_ALL: 'Mostrar todo',
  ENABLE_TAG_BRANCH_DISCOVERY: 'Habilitar descoberta de ramo de tag',
  DISABLE_TAG_BRANCH_DISCOVERY: 'Desativar a descoberta do ramo tag',
  'Docker Container Registry Credentials':
    'credenciales de Docker Container Registry',
  'Docker Registry URL': 'URL del Docker Registry',
  dockerCredentials: 'dockerCredentials',
  DOWNLOAD_LOGS: 'Descargar Logs',
  'Drag and drop tasks to sort': 'Arrastra y suelta tareas para ordenar',
  Duration: 'Duración',
  DURATION: 'Duration',
  DURATION_VALUE: 'Duration: {value}',
  echo: 'echo',
  'Edit Config': 'Editar la configuración',
  'Edit Credential': 'Editar credenciales',
  EDIT_JENKINSFILE: 'Editar Jenkinsfile',
  EDIT_PIPELINE: 'Editar pipeline',
  'Enable Variable Substitution in Config':
    'Habilitar la sustitución de variables en la configuración',
  enableConfigSubstitution: 'enableConfigSubstitution',
  'Enter an expression': 'Introdir una expresión',
  'Environment name': 'Nombre del entorno',
  EXCLUDE_PR_BRANCHES: 'Excluir las ramas que también se presentan como PRs',
  'Executes the code inside the block with a determined time out limit.':
    'Ejecuta el código dentro del bloque con un límite de tiempo determinado.',
  expression: 'expresión',
  Failure: 'Fallo',
  'For accessing GitHub': 'Para acceder a GitHub',
  USERS_WITH_PERMISSION:
    'De usuarios con permiso de administrador o de escritura',
  'get token': 'obtener token',
  CLONE_SETTINGS: 'Opciones de clonación de Git',
  SCAN_PERIODICALLY: 'Scan regularly if not otherwise triggered',
  NO_CONCURRENT_BUILD_DESC:
    'Si marca esta opción, no podrá ejecutar varias compilaciones simultáneamente.',
  info: 'informacion',
  input: 'entrada',
  'Inspection results do not affect subsequent tasks':
    'Los resultados de la inspección no afectan las tareas posteriores.',
  'instance failed to match at least one schema':
    'la instancia no ha modido compararse con al menos un esquema',
  'Internal nested conditions only need to satisfy one':
    'Las condiciones anidadas solo necesitan cumplir una condición',
  'Internal nesting conditions must be matched':
    'Las condiciones internas de anidación deben coincidir',
  ISSUE_PL: 'Problemas',
  PIPELINE_PARAM_DEFAULT_DESC:
    'The default value of the field. You can also change the default value before manually running a pipeline.',
  'Jenkinsfile syntax error, message':
    'Error de sintaxis de Jenkinsfile, mensaje',
  'key File Variable': 'variable de archivo clave',
  keyFileVariable: 'keyFileVariable',
  'Kubeconfig Variable': 'Variable de Kubeconfig',
  'Kubernetes Namespace for Secret': 'Namespace de Kubernetes para el Secret',
  'Kubernetes Secrets': 'Secrets de Kubernetes',
  LAST_MESSAGE: 'Ultimo mensaje',
  LAST_MESSAGE_SCAP: 'Last message',
  Line: 'Línea',
  LINE_VALUE: 'Número de línea: {value}',
  CODE_LINE_COUNT: 'Líneas de código',
  'Load credentials into environment variables':
    'Cargue credenciales en variables de entorno',
  'Load the sonarqube configuration provided by Jenkins into the Pipeline.':
    'Cargue la configuración de sonarqube proporcionada por Jenkins en la Pipeline.',
  mail: 'correo',
  major: 'mayor',
  MAXIMUM_BRANCHES: 'Número máximo de ramas viejas a mantener',
  MAXIMUM_BUILD_RECORDS: 'Número máximo de compilaciones para mantener',
  minor: 'menor',
  "Missing one or more required properties: 'name'":
    "Falta una o más propiedades requeridas: 'nombre'",
  'Negative prefix': 'Prefijo negativo',
  NO_ARTIFACT_FOUND_TIP: 'No hay registro de artefactos.',
  NO_BRANCH_FOUND_TIP: 'No se encontraron ramas',
  NO_COMMIT_FOUND: 'Sin registros de commits',
  NO_CONCURRENT_BUILDS: 'No hay builds concurrentes',
  'No need': 'No necesario',
  NO_STATUS: 'sin Estado',
  Normal: 'Normal',
  'Not Build': 'Sin Build',
  'Not fail build': 'Build no fallida',
  NOT_RUNNING: 'no ejecutar',
  NOT_BUILT: 'Not built',
  'not support edit nested stage': 'no admite editar en la fase anidada',
  BUILD_RECORD_RETENTION_PERIOD_DAYS_DESC:
    'Old builds are discarded after this number of days. The default value is 7.',
  MAXIMUM_BUILD_RECORDS_DESC:
    'Old builds are discarded when the build number exceeds the maximum number. The default value is 10.',
  ONLY_PR_BRANCHES: 'Solo las ramas que también se presentan como PR',
  BUILD_PARAMETERS: 'Build parametrizado',
  SET_PARAMETERS: 'Entrada de parámetros',
  PASSPHRASE: 'Pasphrase',
  'passphrase Variable': 'Variable de passphrase',
  passphraseVariable: 'passphraseVariable',
  'Password Variable': 'Variable de contraseña',
  passwordVariable: 'Variable de contraseña',
  PIPELINE: 'Pipeline',
  PIPELINE_PL: 'Pipelines',
  PIPELINE_LOW: 'pipeline',
  CLONE_TIMEOUT_PERIOD:
    'Tiempo de espera de clonación de pipeline agotado (en minutos)',
  NO_PIPELINE_CONFIG_FILE_TIP:
    'Archivo de configuración de Pipeline no encontrado',
  'Pipeline Configuration': 'Configuración de Pipeline',
  PIPELINE_EVENT_TRIGGER: 'Disparador de eventos de Pipelines',
  INITIALIZING_PIPELINE: 'Inicialización de Pipeline',
  INITIALIZING_PIPELINE_DESC:
    'Please wait until the pipeline initialization is complete.',
  'Pipeline List': 'Lista de Pipelines',
  PIPELINE_RUN_LOGS: 'Registros de ejecución de Pipelines',
  'pipeline syntax error': 'error de sintaxis en la Pipeline',
  'Please add at least one step.': 'Por favor agregue al menos un paso.',
  'Please input images name': 'Por favor introduce el nombre de las imágenes',
  PIPELINE_NAME_TIP: 'Por favor introduce el nombre de la pipeline',
  'Please input the credential name.':
    'Por favor introduce el nombre de la credencial.',
  SELECT_CODE_REPO_DESC:
    'Selecciona un repositorio de código como fuente de código para la pipeline.',
  'Press enter for the next': 'Presione enter para ir al siguiente paso',
  'Print message': 'Imprimir mensaje',
  PRIVATE_KEY: 'Llave privada',
  PROCEED: 'Continuar',
  'Pull code by Git': 'Pull código con Git',
  'Pull code by SVN': 'Pull código con SVN',
  PULL_STRATEGY: 'Estrategia de Pull',
  WEBHOOK_PUSH_URL: 'Webhook Push URL',
  Queue: 'Cola',
  QUEUED: 'Encolado',
  ABORTED: 'Aborted',
  UNSTABLE: 'Unstable',
  Recipient: 'Recipiente',
  REGEX: 'Filtro de expresiones regulares',
  'Registry Credentials': 'Credenciales de registro',
  remote: 'remoto',
  BRANCH_SI: 'Branch',
  BRANCH_PL: 'Branches',
  REMOTE_REPOSITORY_URL: 'URL de repositorio remoto',
  CODE_REPOSITORY_ADDRESS: 'URL del repositorio',
  REPOSITORY_NAME: 'Nombre del repositorio',
  REPOSITORY_NAME_EMPTY_TIP: 'Please enter the name of a repository name.',
  RESCAN: 'Reescanear',

  RUN: 'ejecutar',
  RUN_ID: 'Run ID',
  'Run Pipeline': 'Ejecutar pipeline',
  'Save Artifact': 'Guardar artefacto',
  SCAN_INTERVAL: 'Intervalo de escaneo',
  LOGS_OBTAINED_SUCCESSFULLY: 'Escanear registros correctos',
  SCAN_REPO_SUCCESSFUL: 'Escanear el repositorio correcto',
  SCAN_TRIGGER: 'Repository Scan Trigger',
  REPOSITORY_SCAN_LOGS: 'Escanear logs de repositorio',
  VIEW_SCAN_LOGS: 'View Scan Logs',
  SCAN_REPOSITORY: 'Escanear repositorio',
  BUILD_PERIODICALLY: 'Build programada',
  SCM: 'SCM',
  SCRIPT_PATH: 'Ruta del script',
  WEBHOOK_PUSH: 'Webhook Push',
  secretName: 'secretName',
  secretNamespace: 'secretNamespace',
  SELECT_PIPELINE_SCAP: 'selecciona una pipeline',
  SELECT_CODE_REPOSITORY: 'Seleccionar repositorio de código',
  SELECT_THIS_REPOSITORY: 'Selecciona este repositorio',
  Sender: 'Remitente',
  sh: 'sh',
  'Shell commands can be executed in the container':
    'Los comandos de shell se pueden ejecutar en el contenedor',
  'Show Advanced Settings': 'Mostrar configuración avanzada',
  VIEW_LOGS: 'Mostrar logs',
  DISPLAY_ONLY_LAST_TEN: 'Mostrar solo los últimos 10',
  'show yaml editor': 'muestre el editor de yaml',
  SINGLE_SVN: 'Svn único',
  SVN: 'SVN',
  SKIPPED: 'Omitido',
  'sonar is the default config name.':
    'sonar es el nombre de configuración predeterminado.',
  "Sorry, you don't have the permission to do this.":
    'Lo sentimos, no tienes permiso para hacer esto.',
  'Specify a container to add nested tasks to execute inside the container':
    'Especifique un contenedor para agregar tareas anidadas para ejecutar dentro del contenedor',
  SCRIPT_PATH_DESC:
    'Especifique la ubicación del archivo Jenkinsfile en el repositorio de código fuente',
  'Start the follow-up task after the inspection':
    'Inicie la tarea de seguimiento después de la inspección.',
  'Started By': 'Empezado por',
  STOP_PIPELINE_SUCCESSFUL:
    'Parado de ejecución satisfactorio, se actualizará el estado después',
  SUB_HEALTHY: 'Sub-healthy',
  Subject: 'Tema',
  submitter: 'remitente',
  submitterParameter: 'submitterParameter',
  TASK_FAILED_NOT_OPERATIONAL: 'Tarea fallida, no operativa',
  TASK_STATUS: 'Task Status',
  TEST_RESULTS: 'Resultado de la prueba',
  'Text Variable': 'Variable de texto',
  'The conditions required to implement the current phase (optional).':
    'Las condiciones requeridas para implementar la fase actual (opcional).',
  KUBECONFIG_CONTENT_DESC:
    'El contenido predeterminado es el kubeconfig del usuario actual.',
  'The environment variable entered before running the pipeline is match the current value.':
    'La variable de entorno ingresada antes de ejecutar la pipeline coincide con el valor actual.',
  'The label on which to run the Pipeline or individual stage':
    'La etiqueta en la que se ejecuta la pipeline o la fase individual',
  PIPELINE_NAME_DESC:
    'El nombre de la pipeline. Las pipelines en el mismo proyecto deben tener nombres diferentes.',
  'This name has been used.': 'Este nombre ha sido usado.',
  'Time Used': 'Tiempo utilizado',
  Timeout: 'Se acabó el tiempo',
  TIMEOUT_VALUE: 'Se acabó el tiempo: {value}',
  timeout: 'se acabó el tiempo',
  'Timeout after no activity in logs for this block':
    'Tiempo de espera agotado tras inactividad en los logs deregistro de este bloque',
  timer: 'temporizador',
  PASSWORD_TOKEN: 'Token/Contraseña',
  TRIGGER_REMOTE_BUILD:
    'Ejecutar una build remota (por ejemplo, usando un script)',
  TRUSTED_USERS: 'Usuario de confianza',
  Unnamed: 'Sin nombre',
  BITBUCKET_ADDRESS_EMPTY_TIP:
    'Please enter the address of a Bitbucket server.',
  BITBUCKET_ADDRESS_INVALID_TIP: 'Invalid Bitbucket server address.',
  'Use the following URL to remotely triggerworkbench the build':
    'Utilice la siguiente URL para activar remotamente el triggerworkbench en el build',
  'User types that can trigger builds':
    'Tipos de usuarios que pueden desencadenar compilaciones',
  'username or group name, multiple values ​​used, separated':
    'nombre de usuario o nombre de grupo, múltiples valores utilizados, separados',
  'Username Variable': 'Variable Username',
  usernameVariable: 'usernameVariable',
  WAITING_FOR_INPUT: 'Espere entrada interactiva',
  waitForQualityGate: 'waitForQualityGate',
  HEALTH: 'Health',
  Webhook: 'Webhook',
  WHEN_CREATE_PIPELINE: 'Cuando crear pipeline',
  WHEN_DELETE_PIPELINE: 'Cuando eliminar pipeline',
  ENABLE_SHALLOW_CLONE: 'Enable shallow clone',
  withCredentials: 'con credenciales',
  withSonarQubeEnv: 'withSonarQubeEnv',
  'Wrong Token': 'Token incorrecto',
  'You can execute shell commands or windows batch commands in the build.':
    'Puedes ejecutar comandos de shell o comandos por lotes de Windows en el build.',
  PIPELINE_DESC: `A pipeline is an extensible set of tools that can be combined
    to achieve continuous integration and continuous delivery.
    You can create and manage pipelines on this page.`,
  username_password: 'Credenciales de cuenta',
  CREDENTIAL_TYPE_USERNAME_PASSWORD: 'Username and password',
  CREDENTIAL_TYPE_SSH: 'SSH key',
  CREDENTIAL_TYPE_SECRET_TEXT: 'Access token',
  CREDENTIAL_TYPE_KUBECONFIG: 'kubeconfig',
  login_Plateform: 'Plataforma de inicio de sesión',
  CREDENTIALS_DESC:
    'La credencial es un objeto que contiene algunos datos confidenciales, como nombre de usuario y contraseña, clave SSH y token. Se utiliza para proporcionar autenticación para el proceso de extraer código empujar / extraer imágenes, ejecutar scripts SSH, etc. cuando se está ejecutando una pipeline.',
  BUILD_PARAMETERS_TIP:
    'El proceso de compilación parametrizado le permite pasar uno o más parámetros cuando construye. Por ejemplo: puedes tener una pipeline para publicar software y desea cargar las notas de la versión juntas. Esto se puedes hacer agregando parámetros de texto aquí. Cada parámetro tiene un Nombre y un Valor y el valor del Valor depende del tipo de parámetro. Se puedes acceder a estos valores en la canalización mediante params.Name o Name. Esto significa que cada parámetro definido aquí debe tener un nombre único. Al parametrizar un proyecto, la compilación se reemplaza por una compilación parametrizada que solicita al usuario que introduce un valor para cada parámetro definido. Si eligen no ingresar nada, la compilación continúa con el valor predeterminado para cada parámetro. Si la compilación del proyecto se inicia automáticamente, por ejemplo, mediante un disparador temporizado, se disparará con el valor predeterminado del parámetro.',
  AUTHENTICATION_TOKEN_TIP:
    'Habilite esta opción si necesita activar una compilación accediendo a una URL predefinida. Un uso típico de esta función es activar el script de enlace del sistema de administración del código fuente. Debe proporcionar un token de autorización en forma de cadena para que solo la persona con el token de autorización pueda activar la compilación remota.',
  DELETE_OUTDATED_BUILD_RECORDS_TIP:
    'Esto determinará cuándo se debe descartar el registro de compilación del proyecto. Los registros de compilación incluyen salida de consola, artefactos de archivo y otros metadatos relacionados con una compilación particular. Mantener menos compilaciones ahorra espacio en disco utilizado por Jenkins. Proporcionamos dos condiciones para determinar cuándo se debe descartar la compilación anterior: 1. Número de días para mantener la compilación: la compilación se descartará después de un cierto número de días. 2. Número de compilaciones que se conservarán: si ya hay un cierto número de compilaciones, descarte la compilación más antigua. Estas dos condiciones se aplican a la compilación al mismo tiempo y si se cumple alguna de ellas, la compilación se descartará.',
  DELETE_OUTDATED_BRANCHES_TIP:
    'Esto determinará cuándo se debe descartar la rama y todos los registros de compilación debajo de la rama. El registro de compilación incluye los artefactos de archivo de salida de la consola y otros metadatos relacionados con una compilación en particular. Mantener menos compilaciones ahorra espacio en disco utilizado por Jenkins. Proporcionamos dos opciones para determinar cuándo debe descartarse la rama anterior: 1. Número de días para conservar la rama: si la rama alcanza un cierto número de días, la rama se descarta. 2. Número de ramas reservadas: si ya existe un cierto número de ramas, se descarta la rama más antigua. Estas dos opciones pueden funcionar en la sucursal al mismo tiempo. Si se excede alguno de los límites, se eliminarán las ramas que excedan este límite.',
  BUILD_PERIODICALLY_TIP:
    'It provides cron-like functionality to run this pipeline regularly.',
  BRANCH_RETENTION_PERIOD_DAYS_DESC:
    'Old branches are discarded after this number of days. The default value is 7.',
  MAXIMUM_BRANCHES_DESC:
    'Old branches are discarded when the branch number exceeds the maximum number. The default value is 5.',
  CRON_TIP:
    'Este campo sigue la sintaxis cron (ligeramente diferente). Específicamente, cada línea contiene 5 campos separados por tabulaciones o espacios. minutos: los primeros minutos de una hora (0-59) horas: las primeras horas del día (0-23) los días del mes: los primeros días de un mes (1-31) Mes: el primero pocos días de los primeros días (0-12), los primeros días de la semana (0-12) 0 y 7 son domingos.',
  PIPELINES_BASEINFO_DESC: 'Introduce la información básica de la pipeline.',
  PIPELINE_ADVANCE_SETTINGS_DESC:
    'Configure una política de comportamiento compleja para la pipeline (Opcional).',
  CREDENTIALS_CREATE_DESC: 'Crear credenciales para proyectos DevOps',
  CHECKOUT_DESC:
    'Código de extracción; a menudo se usa para extraer código no git, como svn.',
  PRIVATE_IMAGE_DESC:
    'Para implementar desde un repositorio de imágenes privado, debe crear un repositorio reflejado y luego extraer la imagen.',
  AGENT_TYPE_DESC:
    'La sección del agente especifica dónde se ejecutará toda la canalización o una etapa particular en el entorno de Jenkins, dependiendo de dónde se coloque la parte del agente. Esta parte debe definirse en el nivel superior dentro del bloque de canalización, pero el uso del nivel de etapa es opcional.',
  AUTHENTICATION_TOKEN_DESC:
    'Utilice la siguiente URL para activar la compilación de forma remota: JENKINS_URL / job / JOB_NAME / build? Token = TOKEN_NAME o / buildWithParameters? Token = TOKEN_NAME Puedes elegir agregar & cause = reason para proporcionar el texto que se incluirá en el motivo de compilación del registro.',
  ACTIVITY_EMPTY_TIP: 'La pipeline actual aún no se está ejecutando',
  PIPELINE_NO_CONFIG:
    'El archivo de configuración relevante no se encontró en la pipeline actual',
  INVALID_JENKINSFILE_TIP:
    'El Jenkinsfile actual no es un Jenkinsfile declarativo estándar y no se puedes mostrar gráficamente',
  PIPELINE_SCHEDULE_DESC: `For syntax reference, refer to
    <a href="//jenkins.io/doc/book/pipeline/syntax/#cron-syntax" target="_blank">CRON</a>.`,
  WEBHOOK_PUSH_DESC:
    'Empuje un mensaje a esta URL para activar una reindexación del repositorio.',
  WEBHOOK_DESC: 'Configure webhook notifications by setting a webhook server.',
  TIME_TRIGGER_DESC:
    'Algunos tipos de elementos se volverán a indexar automáticamente cuando reciban un mensaje push externo. Sin embargo, en algunos casos, las notificaciones de mensajes pueden fallar. Esta opción verificará si el índice se ha ejecutado dentro del intervalo de tiempo especificado y, si no, activará el índice.',
  KUBERNETES_DEPLOY_DESC:
    'Implemente recursos en un clúster de Kubernetes. En un entorno de integración continua o despliegue contínuo, solo aquellos recursos que necesitan actualizarse regularmente deben colocarse en el paso de despliegue. Por lo tanto, este paso se utiliza principalmente para procesar el despliegue de dichos recursos.',
  KUBERNETES_DEPLOY_DESC_MORE: `<br />
    <label>Este paso tiene las siguientes características principales:</label>
    <li> Distribución sin kubectl </li>
    <li> Sustitución variable en Jenkinsfile, es posible la implementación dinámica. </li>
    <li> Soporte para dibujar imágenes acoplables desde repositorios de imágenes privadas </li>
    <label> Actualmente, este paso admite los siguientes recursos:</label>
    <br />
    <li> Configuración </li>
    <li> Llave </li>
    <li> Desplegar </li>
    <li> Dave Process Set </li>
    <li> Enrutamiento de aplicaciones </li>
    <li> Namespace </li>
    <li> Tarea </li>
    <li> Servicio </li>
    <li> Conjunto de réplica </li>
    <li> Controlador de replicación
    (las actualizaciones continuas no son compatibles, use la implementación si desea usar actualizaciones continuas)
    </li>`,
  OPTIONS_PR_PARAMS_1:
    'Versión del código fuente de PR fusionada con la rama de destino',
  OPTIONS_PR_PARAMS_2: 'Versión del código fuente del propio RP',
  OPTIONS_PR_PARAMS_3: 'Se crean dos pipelines cuando se descubre PR',
  SELECT_CREDENTIAL_DESC:
    'La obtención del código del repositorio puedes requerir credenciales. Selecciona una credencial existente o agregue una nueva.',
  PIPELINE_PREPARE_DESC:
    'El ambiente se está preparando. Habrá una pantalla gráfica más tarde.',
  PARAMS_DESC:
    'Los siguientes parámetros se generan en función de la configuración de la pipeline o la sección de parámetros del archivo Jenkins, que se ingresan de acuerdo con los requisitos operativos.',
  EDIT_CREDENTIAL_DESC:
    'El siguiente formulario no mostrará la información de credenciales original. Volver a ingresarlo lo sobrescribirá.',
  pipeline_conditions: 'Condiciones',
  PARAMS_STRING: 'Cuerda',
  PARAMS_TEXT: 'Texto',
  PARAMS_BOOLEAN: 'Booleano',
  PARAMS_CHOICE: 'Elección',
  PARAMS_PASSWORD: 'Contraseña',
  PARAMS_TEXT_TCAP: 'Multi-line String',
  CODE_SMELL: 'Olor de código',
  BUG: 'Insecto',
  BUG_PL: 'Bugs',
  VULNERABILITY: 'Vulnerabilidad',
  SECURITY_HOTSPOT: 'Punto de acceso de seguridad',
  FILTER_BY_REGEX: 'Filter by name (with regular expression)',
  FILTER_BY_REGEX_DESC:
    'Habilite las expresiones regulares, ignorando los nombres que no coinciden con la expresión regular proporcionada (incluidas las ramas y PR, etc.)',
  waitForQualityGate_desc:
    'Los estándares de control de calidad del código se derivan de la puerta de calidad de SonarQube. Si necesita personalizar los estándares, vaya a la configuración de SonarQube.',
  PIPELINE_CREATE_DESC:
    'La ejecución de la tarea de Pipeline comenzará después de que se complete la inicialización.',
  REVIEW_DESC:
    'Cuando la pipeline se ejecute aquí, esta tarea se suspenderá y podrás optar por continuar o finalizar después de la revisión.',
  INPUT_DESC:
    'Cuando la canalización se ejecuta aquí, la tarea se suspenderá, y el creador y @somebody pueden elegir continuar o finalizar la canalización.',
  INPUT_MESSAGE_DESC:
    'Este mensaje se mostrará en el estado de ejecución de la canalización.',
  withSonarQubeEnv_DESC:
    'Localice rápidamente errores potenciales u obvios en su código',
  waitForQualityGate_DESC:
    'Ejecutado después de realizar el análisis de código',
  script_DESC: 'Ejecutar script maravilloso',
  PIPELINE_QUEUED_TITLE: 'La pipeline se inicializará pronto',
  PIPELINE_QUEUED_DESC:
    'Debe esperar a que el agente se inicie y ejecute la canalización (tenga en cuenta que si el agente no se ha iniciado durante mucho tiempo, verifique la configuración del agente y los recursos del clúster).',
  pipeline_owner:
    'El propietario del proyecto DevOps, con la máxima autorización del proyecto, puedes realizar todas las operaciones.',
  pipeline_maintainer:
    'El responsable del proyecto DevOps puedes realizar credenciales y configuración de canalización en el proyecto DevOps',
  pipeline_developer:
    'El desarrollador del proyecto DevOps puedes activar y ver la pipeline',
  pipeline_reporter:
    'El observador del proyecto DevOps solo puedes ver los recursos del proyecto',
  LoadPrevData_Desc:
    'Se detectó que esta pipeline no se editó correctamente la última vez. ¿Se cargan los últimos datos para continuar editando?',
  PATTERN_PIPELINE_NAME_VALID_NAME_TIP:
    'Nombre no válido (admite letras mayúsculas y minúsculas, números, "_" y "-")',
  INCORRECT_GITHUB_TOKEN_DESC: `Token incorrecto
    <a
      class="float-right"
      href="https://github.com/settings/tokens/new?scopes=repo,read:user,user:email,write:repo_hook"
      target="_blank"
    >
      Get Token
    </a>`,
  GET_GITHUB_TOKEN_DESC: `Para acceder a GitHub
    <a
      class="float-right"
      href="https://github.com/settings/tokens/new?scopes=repo,read:user,user:email,write:repo_hook"
      target="_blank"
    >
      Get Token
    </a>`,
  BITBUCKET_SERVER_CREDENTIAL_EMPTY:
    'Introduce la información de su cuenta de Bitbucket.',
  GITHUB_CREDENTIAL_EMPTY: 'Introduce su token de acceso de GitHub.',
  PIPELINES_FOOTER_SEE_MORE:
    'Vaya a la página de detalles de la sucursal para ver más.',
  PIPELINE_CRON_DESC:
    'Habría corrido por última vez en {lastTime}; se ejecutará a las {nextTime}',
  JENKINS_LINS_ERROR: 'tiene un error de sintaxis en la línea {line}.',
  WHEN_DELETE_PIPELINE_DESC:
    'Cuando se elimina una pipeline, las tareas en la pipeline especificada se activan automáticamente.',
  WHEN_CREATE_PIPELINE_DESC:
    'Cuando se crea una nueva pipeline, las tareas en la pipeline especificada se activan automáticamente.',
  STARTED_BY_NAME: 'Comenzado por {name}',
  CREDENTIAL_NAME_EXIST_DESC: 'El ID de credencial ya existe',
  'Invalid credential ID': 'Invalid credential ID',
  CI: 'Continuous Integration (CI)',
  CI_DESC:
    'Continuous integration (CI) is the process of automatically detecting, pulling, building, and (in most cases) unit testing after source code changes.',
  CICD: 'Continuous Integration & Delivery (CI/CD)',
  CICD_DESC:
    "Continuous deployment (CD) refers to the idea of automatically providing the release version in the continuous delivery pipeline to end users. According to the user's installation method, automatic deployment in the cloud environment, app upgrades (such as apps on mobile phones), website updates, or only the list of available versions.",
  CUSTOM_PIPELIEN: 'Custom Pipeline',
  CUSTOM_PIPELIEN_DESC:
    'You can select the tasks you need to customize the work content of the pipeline.',
  COPY_PIPELINE: 'Copiar pipeline',
  PIPELINE_RUN_START_SI: 'Starts to run the pipeline...',
  PIPELINE_RUN_START_PL: 'Starts to run the pipelines...',
  BATCH_RUN_SUCCESS_SI: 'The pipeline was run successfully.',
  BATCH_RUN_SUCCESS_PL: 'The pipelines were run successfully.',
  'Batch Run Fail': 'Batch Run Failed',
  'Run Start': 'Start Running',
  GITLAB_SERVER_ADDRESS: 'GitLab Server',
  GITLAB_SERVER_EMPTY_TIP: 'Please enter the address of a GitLab server.',
  PROJECT_GROUP_OWNER: 'GitLab Project Owner',
  PROJECT_GROUP_OWNER_EMPTY_TIP:
    'Please enter the name of a GitLab project group or project owner.',
  BITBUCKET_SERVER_ADDRESS: 'Bitbucket Server Address',
  BITBUCKET_SERVER_EMPTY_TIP: 'Please enter the address of a Bitbucket server.',
  CREATE_PIPELINE_DESC: 'Build, test and deploy with Pipelines',
  'Choose a Pipeline Template': 'Choose a Pipeline Template',
  BATCH_RUN_UNSUPPORTED_DESC: 'Multi-branch pipelines cannot run in a batch.',
  SYNC_STATUS: 'Sync Status',

  // Pipeline List Page
  PULL_REQUEST_PL: 'Pull Requests',
  PULL_REQUEST_COUNT: 'Pull Requests',
  HEALTHY: 'Healthy',

  // Pipeline Creation Page
  DEVOPS_PROJECT_DESC:
    'DevOps projects are used to group resources and control the resource management permissions of different users.',
  PIPELINE_CREATE_DEVOPS_PROJECT_DESC:
    'Select the DevOps project to which the pipeline belongs.',
  CODE_REPOSITORY_OPTIONAL: 'Repositorio de Código (Opcional)',
  OPTIONS: 'Options',
  NOTIFICATION_MANAGEMENT: 'Gestión de notificaciones',
  'Notification Management': 'Gestión de notificaciones',
  NOTIFICATION_CONFIGURATION: 'Configuración de la notificación',
  'Notification Configuration': 'Configuración de la notificación',
  SERVER_SETTINGS: 'Configuración del servidor',
  RECIPIENT_SETTINGS: 'Configuración del receptor',
  'Receive Notification': 'Recibir notificación',

  NOTIFICATION_CONFIGURATION_DESC:
    'KubeSphere supports notification configuration for multiple notification channels. You can set servers and recipients, and enable or disable notifications.',

  'Notification On': 'Notificación activada',
  'Notification Off': 'Notificación desactivada',

  NOTIFICATION_CONDITIONS: 'Notification Conditions',
  NOTIFICATION_CONDITION_SETTING_TIP:
    'Operators <strong>Includes values</strong> and <b>Does not include values</b> require one or more label values. Use a carriage return to separate values.</br>Operators <b>Exists</b> and <b>Does Not Exist</b> determine whether a label exists, and do not require a label value.',
  NOTIFICATION_CONDITION_SETTINGS_DESC:
    'You will receive only notifications that meet the conditions.',
  INCLUDES_VALUES: 'Includes values',
  DOES_NOT_INCLUDE_VALUES: 'Does not include values',
  EXISTS: 'Exists',
  DOES_NOT_EXIST: 'Does not exist',
  'Please select a tag': 'Seleccione una etiqueta',
  'Please select a regex filter':
    'Seleccione un filtro de expresiones regulares',
  'Invalid notification condition': 'Condición de notificación no válida',
  TAG_INPUT_PLACEHOLDER: 'Ingrese el valor y presione Enter para confirmar',
  PATTERN_TAG_INVALID_TIP:
    'Invalid label. The label can contain only uppercase and lowercase letters, numbers, hyphens (-), underscores (_), and dots (.), and must begin and end with an uppercase or lowercase letter or number.',
  INVALID_NOTIFICATION_CONDITION:
    'Please enter a correct notification condition.',

  SEND_TEST_MESSAGE: 'Enviar mensaje de prueba',
  SEND_TEST_MESSAGE_DESC:
    'After the configurations are complete, you can send a test message for verification.',
  SEND_TEST_MESSAGE_SUCCESS_DESC:
    'Verified successfully. A test message has been sent to you , please check it out.',

  Mail: 'Correo',
  SMTP_SERVER_ADDRESS: 'Dirección del servidor SMTP',
  USE_SSL_SECURE_CONNECTION: 'Use SSL secure connection',

  MAIL_SETTING_DESC:
    'Puede recibir notificaciones de la plataforma por correo y debe configurar el servidor de envío de correo.',
  SENDER_MAIL: 'Correo del remitente',
  MAIL_DESC:
    'Configure email notifications by setting a server and recipients.',
  SENDER_EMAIL: 'Correo del remitente',
  MAIL_SETTINGS_CHANGE_NEED_SAVE_TIP:
    'Su configuración de correo actual ha cambiado, guarde la configuración o cancele la modificación',

  'Please enter an email address': 'Ingrese un correo electrónico para agregar',
  'This email address has existed': 'Este correo electrónico ha existido',
  INVALID_ADDRESS_DESC: 'Please enter a valid address.',
  INVALID_EMAIL: 'Email inválido',
  'Please add the recipient email address':
    'Por favor, agregue el correo electrónico del destinatario',
  MAX_EAMIL_COUNT: 'You can add a maximum of {count} emails.',

  DingTalk: 'DingTalk',
  CONVERSATION_SETTINGS: 'Configuración de conversación',
  CONVERSATION_ID: 'ID de conversación',
  CHATBOT_SETTINGS: 'Chatbot de DingTalk',
  keywords: 'palabras clave',
  KEYWORDS_LIST: 'Keyword List',
  CONVERSATION_ID_TIP:
    'El administrador del sistema debe configurar el ID de conversación para obtenerlo. Si necesita configurarlo, comuníquese con el administrador del sistema.',

  ENTER_CONVERSATION_ID_DESC: 'Please enter a conversation ID.',
  ENTER_KEYWORD_DESC: 'Please enter a keyword.',
  CONVERSATION_ID_EXISTS:
    'The conversation ID already exists. Please add another conversation ID.',
  KEYWORD_EXISTS: 'The keyword already exists. Please add another keyword.',
  MAX_CID_COUNT: 'You can add a maximum of {count} conversation IDs.',
  MAX_KEYWORD_COUNT: 'You can add a maximum of {count} keywords.',
  EMPTY_KEYWORDS_DESC: 'No keyword is added.',
  DINGTALK_SETTING_TIP: 'Configura una conversación o un robot grupal',
  DINGTALK_CHATBOT_SECURITY_TIP: 'Please enter a secret or keywords',

  DINGTALK_DESC:
    'Configure DingTalk notifications by setting a conversation or chatbot.',
  DINGTALK_KEYWORDS_DESC:
    'Palabras clave personalizadas de ChatBot, si necesita más de una, sepárelas con "," ',
  DINGTALK_SETTINGS_CHANGE_NEED_SAVE_TIP:
    'Su configuración actual de Dingding ha sido cambiada, guarde la configuración o cancele la modificación',

  WeCom: 'WeCom',
  WECOM_CORP_ID: 'Corporation ID',
  WECOM_AGENT_ID: 'App AgentId',
  WECOM_SECRET: 'App Secret',
  USER_ID: 'ID de usuario',
  DEPARTMENT_ID: 'ID de departamento',
  TAG_ID: 'ID de etiqueta',
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
  'Please enter a user': 'Por favor ingrese un usuario',
  'Please enter a department': 'Por favor ingrese un departamento',
  'Please enter a tag': 'Ingrese una etiqueta',
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
    'Su configuración corporativa actual de WeChat ha cambiado, guarde la configuración o cancele la modificación',

  Channel: 'Canal',
  CHANNEL_SETTINGS: 'Configuración de canal',
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
    'Su configuración actual de holgura ha cambiado, guarde la configuración o cancele la modificación',

  'Webhook Settings': 'Configuración de webhook',
  'Webhook Url': 'URL del webhook',
  'Server Name': 'Nombre del servidor',
  'Root CA': 'CA raíz',
  'Client Certificate Cert': 'Certificado de certificado de cliente',
  'Client Certificate Key': 'Clave de certificado de cliente',
  VERIFICATION_TYPE: 'Verificar tipo',
  SKIP_TLS_VERFICATION: 'Skip TLS verification (insecure)',
  VERIFICATION_TYPE_DESC: 'Please select a verification type.',

  WEBHOOK_SETTING_DESC:
    'Puede recibir notificaciones de la plataforma a través de webhook y debe configurar el servidor de envío de webhook.',
  WEBHOOK_SETTINGS_CHANGE_NEED_SAVE_TIP:
    'Su configuración actual de webhook ha cambiado, guarde la configuración o cancele la modificación',

  PLEASE_ENTER_VALUE_CUSTOM: 'Ingrese un {value}.',
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

  // Notification Configuration
  ENTER_TOUSER_TIP: 'Please enter a user ID.',
  ENTER_TOPARTY_TIP: 'Please enter a department ID.',
  ENTER_TOTAG_TIP: 'Please enter a tag ID.',
  SLACK_TOKEN: 'Slack Token',
  SLACK_CHANNEL: 'Slack channel',
  TOKEN: 'Token',
  BASIC_AUTH: 'Basic authentication',
  NO_AUTH: 'No authentication',
  BEARER_TOKEN: 'Bearer token',
  NODE_SI: 'Nodo',
  NODE_PL: 'Nodos',
  MASTER_NODE_SI: 'Nodo master',
  MASTER_NODE_PL: 'Nodo master',
  WORKER_NODE_SI: 'Nodo worker',
  WORKER_NODE_PL: 'Nodo worker',

  ADD_NODE: 'Añadir nodo',
  'Add Node Type': 'Añadir tipo de nodo',
  ADD_TAINT: 'Añadir Taint',
  'Add Type': 'Añadir tipo',
  ALL_NODES: 'Todos los nodos',
  'Allocated CPU': 'CPU reservada',
  'Allocated Memory': 'Memoria reservada',
  ANNOTATION_PL: 'Anotaciones',
  WORKLOAD_ANNOTATIONS: 'Workload Annotations',
  ARCHITECTURE: 'Arquitectura',
  'Cluster Node': 'Nodo de clúster',
  CLUSTER_NODE_PL: 'Nodo de clúster',
  CLUSTER_NODE: 'Cluster Node',
  'Cluster Nodes': 'Nodo de clúster',
  'Edge Node': 'Nó de Borda',
  EDGE_NODE_PL: 'Nó de Borda',
  COMMON_TAINTS: 'Taints Comunes',
  Conditions: 'Condiciones',
  CONTAINER_RUNTIME: 'ContainerRuntimeVersion',
  'CPU Limits': 'Límites de CPU',
  'CPU Requests': 'Solicitudes de CPU',
  'CPU Used': 'CPU utilizada',
  'Delete All Taints': 'Eliminar todas los Taints',
  IP_ADDRESS: 'Dirección IP',
  LINUX: 'Linux',
  ALLOCATED_RESOURCES: 'Allocated Resources',
  KERNEL_VERSION: 'Versión del Kernel',
  KUBE_PROXY_VERSION: 'Versión Kube-Proxy',
  KUBELET_VERSION: 'Versión Kubelet',
  lastHeartbeatTime: 'lastHeartbeatTime',
  LATEST_UPDATE_VALUE: 'Latest update: {value}',
  'Local Storage Capacity': 'Capacidad de almacenamiento local',
  'Master Node': 'Nodo master',
  'Memory Limits': 'Límites de memoria',
  'Memory Requests': 'Solicitudes de memoria',
  'Memory Used': 'Memoria usada',
  METADATA: 'Metadatos',
  'Node IP': 'IP de nodo',
  'Node List': 'Lista de nodos',
  NODE_ONLINE_STATUS: 'Estado del nodo online',
  'Node Taints': 'Taints de los nodos',
  ONLINE_NODES: 'Nodos en línea',
  OS_TYPE: 'Sistema operativo',
  'OS Image': 'Imagen del sistema operativo',
  OS_VERSION: 'OS Version',
  PODS: 'Pods',
  'Pod Quantity Trend': 'Tendencia de cantidad de pods',
  'Pod Usage': 'Uso de pods',
  'Pod Used': 'Pod utilizado',
  'Resource Usage': 'Uso de recursos',
  'Resource Usage Status': 'Estado de uso de recursos',
  'Scheduling Policy': 'Política de programación',
  'System Version': 'Versión del sistema',
  taint: 'taint',
  Taint: 'Taint',
  EDIT_TAINT: 'Gestión de Taints',
  EDIT_TAINTS: 'Gestión de Taints',
  taints: 'taints',
  TAINTS: 'Taints',
  'Type Name': 'Escribe un nombre',
  Unschedulable: 'No programable',
  SCHEDULABLE: 'Schedulable',
  used: 'usado',
  'Worker Node': 'Nodo Worker',
  NOSCHEDULE: 'NoProgramable',
  PREFER_NOSCHEDULE: 'PreferNoSchedule',
  NOEXECUTE: 'NoEjecutar',
  TAINTS_DESC:
    'Si se agrega un taint con "clave=valor" al nodo, significa que no se programará ningún pod en este nodo (política PodToleratesNodeTaints) o al menos se evita la programación tanto como sea posible (política TaintTolerationPriority), a menos que el pod tenga una coincidencia tolerancia con "clave=valor".',
  TAINTS_TIPS:
    'Si hay al menos un taint no ignorado con efecto NoProgramable, entonces el sistema no programará pods en ese nodo. <br /> Si no hay un taint no ignorado con efecto NoProgramable pero hay al menos un taint no ignorada con efecto PreferNoSchedule, entonces el sistema intentará no programar pods en el nodo. <br /> si hay al menos un taint no ignorada con efecto NoEjecutar, los pods serán expulsados del nodo (si ya se está ejecutando en el nodo) y no se programarán en el nodo (si aún no se está ejecutando en el nodo).',
  NO_TAINTS_TIPS: 'Aún no se han establecido taints.',
  TAINT_SELECT_TIPS: 'Unir taints comunes',
  TAINT_DELETE_TIPS: 'Eliminar taint',
  NODE_STATUS_UNSCHEDULABLE: 'No programable',
  NODE_STATUS_RUNNING: 'Corriendo',
  NODE_STATUS_WARNING: 'Advertencia',
  CLUSTER_NODE_DESC:
    'Este módulo gestiona los nodos del clúster y muestra el estado de ejecución de ellos. Puedes editar o eliminar nodos aquí.',
  CLUSTER_NODE_EMPTY_DESC:
    'Este módulo gestiona los nodos del clúster y muestra el estado de ejecución de ellos. Puedes editar o eliminar nodos aquí.',
  NODE_NETWORKUNAVAILABLE: 'Red no disponible',
  EDGE_NODE_DESC:
    'Este módulo gestiona los nodos del borda y muestra el estado de ejecución de ellos. Puedes editar o eliminar nodos aquí.',
  EDGE_NODE_EMPTY_DESC:
    'Este módulo gestiona los nodos del borda y muestra el estado de ejecución de ellos. Puedes editar o eliminar nodos aquí.',

  NODE_NETWORKUNAVAILABLE_DESC:
    'Compruebe si la configuración de red en el nodo está disponible',
  NODE_OUTOFDISK: 'OutOfDisk',
  NODE_OUTOFDISK_DESC:
    'Compruebe si hay espacio en el nodo para agregar un nuevo pod',
  NODE_MEMORYPRESSURE: 'Carga de memoria',
  NODE_MEMORYPRESSURE_DESC:
    'Si la carga de uso de memoria en el nodo es demasiado alta, la programación falla',
  NODE_DISKPRESSURE: 'Carga de disco',
  NODE_DISKPRESSURE_DESC:
    'Si existe carga sobre el tamaño del disco, es decir, si la capacidad del disco es baja',
  NODE_PIDPRESSURE: 'Carga PID',
  NODE_PIDPRESSURE_DESC:
    'Si existe carga sobre los procesos, es decir, si hay demasiados procesos en el nodo',
  NODE_READY: 'Listo',
  NODE_READY_DESC: 'Si el nodo está sano y listo para aceptar pods',
  NODE_NETWORKUNAVAILABLE_TIP:
    'Si la red para el nodo está configurada correctamente.',
  NODE_OUTOFDISK_TIP:
    'Si no hay suficiente espacio libre en el nodo para agregar nuevos pods.',
  NODE_MEMORYPRESSURE_TIP:
    'Si existe carga en la memoria del nodo, es decir, si la memoria del nodo es baja.',
  NODE_DISKPRESSURE_TIP:
    'Si existe carga sobre el tamaño del disco, es decir, si la capacidad del disco es baja.',
  NODE_PIDPRESSURE_TIP:
    'Si existe carga sobre los procesos, es decir, si hay demasiados procesos en el nodo.',
  NODE_READY_TIP: 'Si el nodo está sano y listo para aceptar pods.',
  NODE_TYPES_Q: '¿Cuáles son los tipos de nodos de clúster?',
  NODE_TYPES_A: 'Los nodos se dividen en nodos maestros y nodos de trabajo.',
  WHAT_IS_NODE_TAINTS_Q: '¿Qué son los taints de nodos?',
  WHAT_IS_NODE_TAINTS_A:
    'Los taints permiten que un nodo repele un conjunto de pods. Las contaminaciones y las tolerancias funcionan juntas para garantizar que los pods no se programen en nodos inapropiados.',
  NODE_TYPE_DESC:
    'Los tipos de nodos ayudan a los usuarios a dividir los nodos en diferentes grupos. Los usuarios pueden agregar el nodo de alojamiento a un grupo correspondiente creando nodos de diferentes tipos que estén conectados adecuadamente entre sí. De esta forma, los Pods pueden desplegarse en los nodos físicos apropiados según el grupo. La disponibilidad de recursos y la continuidad del negocio también se pueden mejorar.',
  NODE_TYPE_DESCRIPTION_DEC:
    'La descripción ayudará a los usuarios a seleccionar tipos de nodos y usar el clúster.',
  ADD_EDGE_COMMAND: 'Run the above command on your edge node to configure it.',
  IN_USE_Node_IP: 'Node IP {ip} in use',
  IN_USE_Node_NAME: 'Node name {name} in use',
  'Add Edge Node': 'Add Edge Node',
  NODE_NAME_EMPTY_DESC: 'Please set a name for the node.',
  EDGENODE_NAME_EMPTY_DESC: 'Please set a name for the node.',
  EDGENODE_CONFIG_COMMAND_TIP:
    'Before running the command, you must install a container runtime such as Docker or containerd on your edge node. See the KubeEdge <a href="https://kubeedge.io/en/docs/" target="_blank">documentation</a> for more details.',
  ADD_DEFAULT_TAINT: 'Adicionar mancha padrão {params}',
  ADD_ALLOWLIST_ENTRY: 'Agregar lista de permitidos',
  CREATE_NETWORK_POLICY_TCAP: 'Crear política de red',
  // Network Policies Page
  CREATE_BTN: 'Crear',
  TRAFFIC_DIRECTION: 'Traffic Direction',
  EGRESS: 'Salida',
  Ingress: 'Entrada',
  NETWORK_ISOLATION: 'Aislamiento de red',
  'Network Policy': 'Política de red',
  NETWORK_POLICY: 'Política de red',
  NETWORK_POLICY_PL: 'Network Policies',
  NETWORK_POLICY_LOW: 'network policy',
  NETWORK_POLICY_EMPTY_DESC: 'Please create a network policy.',
  EGRESS_TRAFFIC: 'Salida de tráfico',
  INGRESS_TRAFFIC: 'Entrada de Tráfico',
  DESTINATION: 'Destination',

  NETWORK_POLICY_DESC:
    'La configuración de la política de red permite el aislamiento de la red dentro del mismo clúster, lo que significa que se pueden configurar cortafuegos entre ciertas instancias (Pods).',
  NETWORK_ISOLATION_DESC:
    'Al configurar el aislamiento de la red para controlar el tráfico entre Pods dentro del mismo clúster y el tráfico del exterior, las aplicaciones se aíslan y se mejora la seguridad.',
  NETWORK_POLICY_Q: '¿Cómo usar mejor una política de red?',
  NETWORK_ISOLATION_Q: '¿Cómo usar mejor el aislamiento de red?',
  NETWORK_POLICY_A:
    'Hemos compilado varios escenarios de aplicación comunes basados en los escenarios reales, y puedes consultar la documentación para obtener más información.',
  NETWORK_POLICY_Q1:
    'Requisitos del complemento CNI para implementar una política de red',
  NETWORK_ISOLATION_Q1:
    'What are the requirements on the CNI plugin for implementing network isolation?',
  NETWORK_POLICY_A1:
    'Asegúrate de que el plugin de red (CNI) utilizado por el clúster sea compatible con <a href="https://kubernetes.io/docs/concepts/services-networking/network-policies/" target="_blank">NetworkPolicy</a>. Existen varios plugins de red (CNI) que soportan NetworkPolicy, incluyendo Calico, Cilium, Kube-router, Romana y Weave Net.',
  NETWORK_POLICY_EMP_TITLE: 'Network Isolation Not Enabled',
  NETWORK_POLICY_EMP_DESC:
    'After the project network access is enabled, other projects will be unable to access the project. But you can allow projects, services, and external IP addresses to access this project based on your needs.',
  PROJECT_NETWORK_ISOLATION: 'Aislamiento de red de proyecto',
  EXTERNAL_EGRESS_DESC:
    'Pods in the current project are allowed to access the following network segments and ports.',
  EXTERNAL_INGRESS_DESC:
    'Pods in the current project are allowed to be accessed by the following network segments and ports.',
  INTERNAL_EGRESS_DESC:
    'Allows access to resources that match any of the following network policies.',
  INTERNAL_INGRESS_DESC:
    'Allows access from resources that match any of the following network policies.',
  INTERNAL_ALLOWLIST: 'Internal Allowlist',
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
  CREATE_NETWORK_POLICY_DESC:
    'La política de red está configurada para permitir el aislamiento de la red dentro del mismo clúster, es decir, la capacidad de construir un cortafuegos entre ciertas instancias (pods).',
  CIDR_DESC: 'Basado en la dirección del tráfico',
  SELECT_RULE_DIRECTION_TIP: 'Please select a traffic direction.',
  ENTER_VALID_SEGMENT_DESC: 'Please enter a valid network segment.',
  ENTER_VALID_PORT_NUMBER_DESC: 'Please enter a valid port number.',
  EMPTY_RESOURCE_DESC: 'Please select at least one project or service.',
  ALLOWLIST_ENTRY: 'Allowlist Entry',
  ALLOWLIST_ENTRY_LOW: 'allowlist entry',
  'Abnormal Pods': 'Pods en estado erróneo',
  'APIs Average': 'APIs average',
  API_SERVER_MONITORING: 'Monitorización de API Server',
  REQUEST: 'Request',
  REQUEST_COUNT: 'Requests',
  'Application Resources': 'Recursos de aplicación',
  APPLICATION_RESOURCE_PL: 'Monitorización de recursos de aplicaciones',
  PHYSICAL_RESOURCE_PL: 'Physical Resources',
  APPLICATION_RESOURCES_USAGE: 'Uso de recursos de la aplicación',
  SCHEDULE_ATTEMPTS: 'Scheduling Attempts',
  SCHEDULING_RATE: 'Scheduling Rate',
  APPLICATION_RESOURCE_USAGE: 'Uso de recursos de la aplicación',
  ATTEMPT_FREQUENCY: 'Frecuencia de reintento',
  ATTEMPT_RATE: 'Tasa de reintento',
  CLIENT_TRAFFIC: 'Tráfico de clientes',
  'Cluster Monitors': 'Monitores de clúster',
  CLUSTER_NODE_STATUS: 'Estado del nodo del clúster',
  'Cluster Resource Monitoring': 'Monitorización de recursos del clúster',
  CLUSTER_RESOURCE_USAGE: 'Uso de recursos del clúster',
  RESOURCE_USAGE: 'Resource Usage',
  CLUSTER_STATUS: 'Monitorización de estado del clúster',
  COMPONENT_STATUS: 'Estado de los componentes',
  CONTROLLER_MANAGER: 'Manager de controlador',
  'Cool Color': 'Colores fríos',
  'Custom Monitoring': 'Monitorización personalizada',
  CUSTOM_TIME_RANGE: 'Customize Time Range',
  CustomMonitorDashboard: 'Dashboard personalizado',
  DB_FSYNC: 'DB Fsync',
  DB_SIZE: 'Tamaño DB',
  'Default Color': 'Colores predeterminados',
  'Disk Capacity': 'Capacidad de disco',
  'Disk Usage': 'Uso del disco',
  ETCD_MONITORING: 'Monitorización etcd',
  'etcd Nodes': 'Nodos etcd',
  SERVICE_STATUS: 'Service Status',
  'ETCD Service Status': 'Estado del servicio etcd',
  EXTERNAL_ETCD: 'etcd externo',
  GRPC_STREAM_MESSAGES: 'gRPC Stream Message',
  'Historical Monitoring': 'Datos de monitorización históricos',
  INODE_USAGE: 'Inode Usage',
  KUBERNETES_SCHEDULER: 'Scheduler K8s',
  MONITORING: 'Monitorización',
  'Monitoring Center': 'Centro de monitorización',
  ms: 'ms',
  'No Refreshing': 'Sin refrescar',
  Node: 'Nodo',
  NODE_COUNT: 'Cantidad de nodos',
  RESOURCE_USAGE_RANKING: 'Resource Usage Ranking',
  SHOW_SELECTED_ONLY: 'Mostrar solo seleccionados',
  'Physical Resources': 'Recursos físicos',
  PHYSICAL_RESOURCES_MONITORING: 'Monitorización de recursos físicos',
  PHYSICAL_RESOURCES: 'Uso de recursos físicos',
  'Projects Change Trend': 'Tendencia de cambio de proyectos',
  'Projects Count': 'Cantidad de proyectos',
  'Proposal Apply Rate': 'Propuesta de frecuencia para aplicar',
  'Proposal Commit Rate': 'Propuesta de frecuencia para hacer commit',
  'Proposal Failure Rate': 'Propuesta de frecuencia de errores',
  'Proposal Pending Total': 'Propuesta total pendiente',
  'Raft Proposals': 'Propuestas de raft',
  Received: 'Recibido',
  Request: 'Solicitud',
  'Request Latency': 'Latencia de solicitud',
  'Request Per Second': 'Solicitudes por segundo',
  API_REQUESTS_PER_SECOND: 'API solicitudes por segundo',
  API_REQUEST_LATENCY: 'API latencia de solicitud',
  'Resources Usage': 'Uso de recursos',
  'Resources Usage Trend': 'Tendencia de uso de recursos',
  RUNNING_PODS: 'Pods en ejecución',
  PHYSICAL_RESOURCE_STATUS: 'Physical Resource Status',
  SCHEDULER: 'Scheduler',
  SCHEDULER_MONITORING: 'Programación de monitorización',
  SCHEDULING_LATENCY: 'Programación de latencia',
  second: 'segundo',
  SELECT_TIME_RANGE: 'Seleccionar rango de tiempo',
  SENT: 'Enviado',
  SERVICE_COMPONENT_MONITORING: 'Servicio de Monitorización de Componentes',
  times: 'veces',
  'times/s': 'veces/s',
  'Total Average': 'Promedio total',
  USAGE_RANKING: 'Usage Ranking',
  OUTBOUND_TRAFFIC: 'Outbound Traffic',
  INBOUND_TRAFFIC: 'Inbound Traffic',
  QUOTA: 'Quota',
  QUOTA_PL: 'Quotas',
  QUOTA_VALUE: 'Quota: {value}',
  'Usage Ranking': 'Ranking de uso',
  'View All': 'Ver todo',
  VIEW_ALL_REPLICAS: 'Ver todas las réplicas',
  VIEW_MORE: 'Ver más',
  WAL_FSYNC: 'WAL Fsync',
  'Warm Color': 'Colores cálidos',
  Interval: 'Intervalo',
  Last: '',
  LAST_TIME_M: '{num, plural, =1 {last 1 minute} other{last # minutes}}',
  LAST_TIME_H: '{num, plural, =1 {last 1 hour} other{last # hours}}',
  LAST_TIME_D: '{num, plural, =1 {last 1 day} other{last # days}}',
  TIME_M: '{num, plural, =1 {1 minute} other{# minutes}}',
  TIME_H: '{num, plural, =1 {1 hour} other{# hours}}',
  TIME_D: '{num, plural, =1 {1 day} other{# days}}',
  UTILIZATION: 'Utilización',
  RESOURCE_USAGE_TITLE: 'Uso de recursos',
  MONITORING_CLUSTER_DESC:
    'Cluster status displays the overview and details of cluster resources. You can view the monitoring data and the usage ranking of cluster resources.',
  MONITORING_PHYSICAL_DESC:
    'Supervisar el estado de ejecución de los recursos físicos.',
  MONITORING_APPLICATION_DESC:
    'Application resources provide the monitoring data of application resource usage and usage ranking.',
  TIMERANGE_SELECTOR_MSG: 'The end time must be later than the start time.',
  MONITORING_SELECT_LIMIT_MSG: 'Puedes seleccionar hasta diez recursos',
  AVERAGE: 'Promedio',
  TOTAL_AVERAGE: 'Total',
  SUCCESS: 'Success',
  NOT_SUCCESSFUL: 'Not successful',
  ERROR: 'Error',
  FAILURE: 'Failure',
  ETCD_NODE_TITLE: 'Nodo etcd',
  ETCD_LEADER_TITLE: 'Leader exists',
  ETCD_CHANGES_TITLE: 'Leader changes in 1 h',
  ETCD_STATUS: '<span>Estado</span> del servicio',
  ETCD_PROPOSAL: '<span>Propuesta</span> de raft',
  ETCD_DB_SIZE: '<span>Tamaño</span> de DB',
  ETCD_CLIENT_TRAFFIC: '<span>Tráfico</span> de clientes',
  REQUEST_LATENCY_TCAP: '<span>Latencia</span> de las peticiones',
  REQUEST_RATE: '<span>Tasa</span> de peticiones',
  SCHEDULE_ATTEMPTS_TCAP: 'Scheduling <span>Attempts</span>',
  SCHEDULING_RATE_TCAP: 'Scheduling <span>Rate</span>',
  PROPOSAL_COMMITTED: 'Comprometido',
  PROPOSAL_APPLIED: 'Aplicado',
  PROPOSAL_FAILED: 'Ha fallado',
  PROPOSAL_PENDING: 'Pendiente',
  CustomMonitorDashboards: 'Paneles de monitorización personalizados',
  CUSTOM_MONITORING: 'Custom Monitoring',
  CUSTOM_MONITORING_DASHBOARD_DESC:
    'Custom monitoring provides application monitoring templates. You can customize monitoring dashboards based on your needs.',
  CUSTOMMONITORDASHBOARD_CREATE_DESC:
    'You can customize application monitoring dashboards based on your needs.',
  ADD_MONITOR_ITEM: 'Agregar elemento de monitorización',
  ADD_MONITOR_ROW: 'Agregar grupo de monitorización',
  SELECT_CHART_TYPE: 'Selecciona un tipo de gráfico',
  SELECT_CHART_TYPE_MODAL_DESC: 'Selecciona un tipo de gráfico personalizado',
  CHART_TYPES: 'Tipos de gráfico',
  LINE_CHART: 'Gráfico de línea',
  BAR_CHART: 'Gráfico de barras',
  SINGLE_STATE_CHART: 'Texto en tiempo real',
  DISPLAY_POSITION: 'Posición de visualización',
  APPLICABLE_SCENE: 'Escenario aplicable',
  BASE_LINE_CHART: 'Gráfico de línea base',
  BASE_BAR_CHART: 'Gráfico de barras base',
  STACK_LINE_CHART: 'Gráfico de área apilada',
  STACK_BAR_CHART: 'Gráfico de barras apiladas',
  LINE_CHART_DESC:
    'Un gráfico de líneas se utiliza principalmente para visualizar una tendencia o un cambio en los datos a lo largo del tiempo.',
  BASE_LINE_CHART_DESC:
    'Un gráfico de líneas se utiliza principalmente para visualizar una tendencia o un cambio en los datos a lo largo del tiempo. Es muy útil para mostrar una serie de datos continuos bidimensionales, como el tráfico del sitio web o los precios de los productos.',
  STACK_LINE_CHART_DESC:
    'Un gráfico de área apilada es un tipo especial de gráficos de área que se pueden usar para comparar múltiples variables en un intervalo. Es muy útil cuando hay varias series de datos disponibles, ya que puedes analizar la relación de cada grupo con todo el gráfico y mostrar su proporción respectiva.',
  BAR_CHART_DESC:
    'Un gráfico de barras es el tipo más común de gráficos. Presenta diferentes datos categóricos con barras horizontales o verticales con alturas o longitudes proporcionales a los valores que representan.',
  BASE_BAR_CHART_DESC:
    'Un eje del gráfico de barras base presenta las categorías que se comparan, mientras que el otro eje representa el valor de cada una.',
  STACK_BAR_CHART_DESC:
    'Un gráfico de barras apiladas es una extensión de los gráficos de barras. Un gráfico de barras estándar compara puntos de datos individuales entre sí, mientras que en un gráfico de barras apiladas, partes de los datos son adyacentes o apiladas. Se puedes usar para presentar la cantidad total de una categoría, así como sus sub-cantidades (proporción). Por lo tanto, es muy útil para examinar las relaciones entre partes.',
  DISPLAY_FORMAT: 'Formato de visualización',
  FIELD_NAME: 'Nombre del campo',
  COLUMN_NAME: 'Nombre de la columna',
  GRAPH_NAME: 'Nombre del gráfico',
  DECIMALS: 'Posiciones decimales',
  TABLE: 'Tabla',
  TABLE_SETTINGS: 'Configuraciones de tabla',
  VALUE_FOMATER: 'Formato de valor',
  PER_PAGE_LINES: 'Líneas por página',
  CUSTOM_DISPLAY_STYLE: 'Estilo de pantalla',
  DATA_TYPE: 'Tipo de datos',
  CUSTOM_DISPLAY_MODAL_DESC:
    'Personaliza el estilo de visualización de la tabla según tus necesidades',
  Y_AXIS: 'Eje Y',
  GRAPH_COLORS: 'Colores del gráfico',
  SINGLE_GRAPH_TYPE: 'El tipo de gráfico más común.',
  SINGLE_GRAPH_TYPE_NAME: 'Gráfico Básico',
  STACKED_GRAPH_TYPE: 'Gráfico apilado',
  STACKED_GRAPH_TYPE_DESC: 'Útil para mostrar relaciones de parte a todo',
  MONITOR_TYPE_NO_SUPPORT: 'El tipo no es compatible actualmente',
  MONITOR_METRIC: 'Monitoring Metric',
  METRIC_NAME: 'Nombre de la métrica',
  DEBUGB_DATA: 'Datos de depuración',
  TIME_FORMAT: 'Formato de tiempo',
  HIGHT_RULES: 'Reglas destacadas',
  EDIT_TEMPLATE: 'Editar plantilla',
  SAVE_TEMPLATE: 'Guardar plantilla',
  THRESHOLD_FILL: 'Configuraciones de umbral',
  THRESHOLD_FILL_DESC:
    'Puedes establecer un umbral y el estilo se puedes cambiar automáticamente una vez que se supera el umbral.',
  EMPTY_CHART_PLACEHOLDER: 'The chart will display here.',

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
  REQUEST_LATENCY: 'Request Latency',
  REQUEST_LATENCY_MS: 'Request Latency (ms)',
  REQUEST_PER_SECOND: 'Request per Second',
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
  PROJECT_COUNT: 'Projects',
  LAST_TIME: 'Last {value}',
  TIME_RANGE_LAST: 'Time range: last {value}',
  TIME_RANGE_RANGE: 'Time range: {startTime} - {endTime}',

  // Custom Monitoring
  CUSTOM_MONITOR_DASHBOARD: 'Custom Monitoring Dashboard',
  CUSTOM_MONITOR_DASHBOARD_CREATE_DESC:
    'You can customize application monitoring dashboards based on your needs.',
  UPLOAD_FROM_LOCAL_STORAGE: 'Upload from Local Storage',
  UPLOAD_FROM_URL: 'Upload from URL',
  'Consumption Bill': 'Consumption Bill',
  Memory: 'Memory',
  EXPORT_BILL: 'Export resource consumption records in csv format',
  CONSUMPTION_HISTORY: 'Consumption by Yesterday',
  BILLING_CYCLE: 'Reconciliation Cycle',
  CONSUMER_TRENDS: 'Consumer Trends',
  CURRENT_RESOURCE_CONSUMPTION: 'Current Resources Included',
  Trend: 'Trend',
  AVERAGE_USAGE: 'Average Usage',
  TOTAL_CONSUMPTION: 'Total Consumption',
  'Total Consumption By Creation': 'has been consumed since its creation',
  Consumption: 'Consumption',
  'Net Received': 'Net Received',
  'Net Transmitted': 'Net Transmitted',
  VIEW: 'View',
  RESOURCE_CONSUMPTION_DESC: 'Choose the category you want to view',
  CLUSTER_CONSUMPTION: 'Cluster resource consumption',

  CLUSTER_CONSUMPTION_DESC:
    'View metering and billing information of cluster resources.',
  CLUSTER_RESOURCE_CONSUMPTION_DESC:
    '<strong>Cluster</strong> CPU, memory, storage and other resource consumption',
  CLUSTER_NODE_CONSUMPTION_DESC:
    'Resource consumption of <strong>nodes</strong> in the cluster, such as CPU, memory, and storage',
  WORKSPACE_CONSUMPTION: 'Workspace (project) resource consumption',
  CLUSTER_POD_CONSUMPTION_DESC:
    'Resource consumption of <strong>Pods</strong> in a node, such as CPU and memory',
  WORKSPACE_CONSUMPTION_DESC:
    'Workspace (project) resource consumption statistics take the workspace as the dimension to calculate the CPU, memory, storage and other resource consumption of workspace and projects',
  WORKSPACE_RESOURCE_CONSUMPTION_DESC:
    '<strong>Workspace</strong> CPU, memory, storage and other resource consumption',
  WORKSPACE_PROJECT_CONSUMPTION_DESC:
    'The consumption of CPU, memory, storage and other resources of the <strong>project</strong> in the workspace',
  PROJECT_CONSUMPTION_DESC:
    'The consumption of CPU, memory, storage and other resources of <strong>applications, services, container groups</strong> and other resources in the project',
  APP_CONSUMPTION_DESC:
    'Application store template resource consumption statistics',
  APP_RESOURCE_CONSUMPTION_DESC:
    'Application store template resource consumption statistics support querying the number of times a template has been deployed on the KubeSphere platform, and support the following queries',
  APP_WORKSPACE_CONSUMPTION_DESC:
    'The number of deployments of the application template in the <strong>workspace</strong>',
  APP_WORKSPACE_PROJECT_CONSUMPTION_DESC:
    'The number of deployments of the application template in a <strong>project</strong> in the workspace',
  MAXIMUM_USAGE: 'Maximum Usage',
  MINIMUM_USAGE: 'Minimum Usage',
  'Meter CPU Usage': 'CPU Usage',
  'Meter Memory Usage': 'Memory Usage',
  'Meter Volume Usage': 'Storage Volume Usage',
  'Meter Net Received Usage': 'Network Incoming Usage',
  'Meter Net Transmitted Usage': 'Network Outbound Usage',
  TOTAL_CONSUMPTION_Q: 'What does total consumption mean?',
  TOTAL_CONSUMPTION_A:
    'Total consumption means the sum of resource usage of each charging sampling point in the current reconciliation cycle',
  TIMERANGE_MORE_30DAY_MSG:
    'When the interval between the end time and the start time is greater than 30 days, the minimum interval is 1 day',
  TOTAL_COST: 'Total amount ({unit})',
  '￥': '￥',
  Price: 'Price',
  PRICE_CONFIG_DESC: 'Price information has not been configured yet',
  METER_RESOURCE_DESC: 'Consumption statistics in the last hour',
  METERING_NOT_ENABLED_DESC: 'No hay clúster con módulo de medição habilitado',
  INVALID_METERING: 'MEDIÇÃO INVÁLIDA',

  NO_METER_DATA:
    'Newly created resource, you need to wait an hour before you can view the data',

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
  'Log In': 'Log In',
  'Please Log In': 'Please Log In',
  'Username or Email': 'Username or Email',
  Captcha: 'Captcha',
  'User does not exist': 'User does not exist',
  INCORRECT_USERNAME_OR_PASSWORD: 'Incorrect username or password.',
  'Unable to access the backend services':
    'Unable to access the backend services',
  'Unable to access the api server': 'Unable to access the api server',

  'Internal Server Error': 'Internal Server Error',
  'Please input the correct captcha': 'Please input the correct captcha',

  Reload: 'Reload',
  'Reload Captcha': 'Reload Captcha',

  INTERNAL_SERVER_ERROR_TIP:
    'An unepected error seems to have occurred. Please refresh your page.',
  'Too many failed login attempts, please wait!':
    'Too many failed login attempts, please wait!',
  LOG_IN_WITH_TITLE: 'Log in with {title}',

  INPUT_USERNAME_OR_EMAIL_TIP: 'Please input username or email',
  PASSWORD_EMPTY_DESC: 'Please enter a password.',
  'Please input captch': 'Please input captch',
  'Please confirm your account info': 'Please confirm your account info',
  'Please input username': 'Please enter your username',

  'Please reset your password': 'Please reset your password',

  'Modify Later': 'Modify Later',

  'Your password must meet the following requirements':
    'Your password must meet the following requirements',

  CHANGE_PASSWORD_TIP:
    'Since you are logging in for the first time, please reset your password.',

  // Login
  LOG_IN: 'Log In',
  Activate: 'Activar',
  ADD_LOG_RECEIVER: 'Add Log Receiver',
  'Add Service Address': 'Agregar dirección de servicio',
  Address: 'Dirección',
  AUDIT_LOG_COUNT: 'Estadísticas de auditoría',
  'Back to previous': 'Volver al anterior',
  CHANGE_STATUS: 'Cambiar Estado',
  Collecting: 'Recolectar',
  'Current Statistics Start Time': 'Hora actual de inicio de estadísticas',
  'Delete Log Receiver': 'Delete Log Receiver',
  'Display Content': 'Mostrar el contenido',
  'Event statistics': 'Estadísticas de eventos',
  EXACT_QUERY: 'Consulta exacta',
  FUZZY_QUERY: 'Consulta difusa',
  HIDE_HELP_INFORMATION: 'Ocultar información de ayuda',
  INDEX_PREFIX: 'Index Prefix',
  KEYWORD: 'Palabra clave',
  'Log Collections': 'Colecciones de logs',
  'Log Receiver': 'Log Receiver',
  'Log Management': 'Gestión de logs',
  'Log Query': 'Consulta de logs',
  'Log Start Time': 'Hora de inicio del log',
  CONTAINER_LOG_COUNT: 'Estadísticas de logs',
  AUDITING_NOT_ENABLED_DESC:
    'No hay clúster con módulo de auditoría habilitado',
  EVENT_NOT_ENABLED_DESC: 'No hay clúster con consulta de eventos habilitada',
  LOGGING_NOT_ENABLED_DESC: 'No hay clúster con módulo de registro habilitado',
  'No cluster with event query enabled':
    'No hay clúster con consulta de eventos habilitada',
  'No cluster with logging module enabled':
    'No hay clúster con módulo de registro habilitado',
  LOGGING_DISABLED: 'Logging Disabled',
  'Passwords must be at least 6 characters long':
    'Las contraseñas deben tener al menos 6 caracteres.',
  'Please enter a filter to search for logs.':
    'Introduce un filtro para buscar en los logs.',
  ADDRESS_EMPTY_DESC: 'Please enter an address.',
  ENTER_SERVICE_ADDRESS: 'Por favor introduce la dirección del servicio',
  'Real-Time Data': 'Datos en tiempo real',
  'Recently Configured Updated': 'Actualizado y configurado recientemente',
  'Recently Updated': 'Recientemente actualizado',
  'Refresh Interval': 'Intervalo de actualización',
  REFRESH_RATE_COLON: 'Frecuencia de actualización: ',
  CONTAINER_LOG_SOURCE: 'Container Log Source',
  REFRESH_INTERVAL_VALUE: 'Refresh interval: {value}s',
  'Refresh Rate': 'Frecuencia de actualización',
  'Region Data': 'Datos de región',
  'Release Collection': 'Colección de releases',
  RESOURCE_NAME_AND_TYPE: 'Nombre y tipo de recurso',
  SEARCH_RESULTS: 'Resultados de búsqueda',
  QUERYING_RULES: 'Regla de búsqueda',
  SERVICE_ADDRESS: 'Dirección de Servicio',
  TIME_TOPOLOGY: 'Topología de tiempo',
  TOPIC: 'tema',
  'Auditing log trends in the last 12 hours':
    'Tendencias en el número total de registros de auditoría en las últimas 12 horas',
  RESOURCE_EVENT_TRENDS_12H:
    'Tendencias en el número total de eventos en las últimas 12 horas.',
  CONTAINER_LOG_TRENDS_12H:
    'Tendencias en el número total de registros en las últimas 12 horas.',
  LOG_DATE: 'DD/MM/YYYY HH:mm',
  EVENT_DATE: 'DD/MM/YYYY 00:00',
  ES_DESC:
    'Elasticsearch es un motor de búsqueda y análisis distribuido y RESTful.',
  KAFKA_DESC:
    'Kafka es una popular plataforma de procesamiento de flujo de código abierto.',
  FLUENTD_DESC:
    'Fluentd es un recopilador de datos de código abierto para la capa de registro unificada.',
  TOOLBOX_SHIFT_TIPS:
    '👻 Puedes abrir la página en una nueva ventana con "MAYÚS + CLIC IZQUIERDO".',
  LOG_COLLECTION_DESC:
    'El sistema recopilará los registros stdout y stderr de cada contenedor y los enviará a uno o más servicios de destino.',
  LOG_COLLECTION_ENABLE_TIPS:
    'El nuevo estado tarda aproximadamente 1 minuto en surtir efecto.',
  LOG_COLLECTION_FLUENTD_URL_TIPS:
    'Enter the address of the Fluentd service that receives logs.',
  EMPTY_LOG_COLLECTIONS:
    'No log receiver is found. You can add log receivers and send logs to external log receivers.',
  LOG_COLLECTION_TIPS: 'You can add one log receiver for each type.',
  URL_SYNTAX_ERROR: 'Error de sintaxis de URL',
  LOG_COLLECTION_ES_URL_TIPS:
    'The built-in Elasticsearch service is used by default. You can also enter the IP address of Elasticsearch independently deployed inside or outside the cluster.',
  LOG_COLLECTION_ES_INDEX_TIPS:
    'Use the index prefix to speed up queries. The index prefix is automatically generated in <Index prefix>-<Year-month-date> format.',
  'Search Logs by': 'Buscar logs por {field}',
  CONTAINER_LOG_KEYWORD_TIP:
    'Introduce la palabra clave para encontrar el log. También puedes encontrar el log de errores por palabras clave como "Error", "Fail", "Fatal", "Exception" y "Warning".',
  CONTAINER_LOG_PROJECT_TIP:
    'Puedes ver la información de log relacionada de acuerdo con el nombre del proyecto.',
  CONTAINER_LOG_WORKLOAD_TIP:
    'Puedes ver la información de log relacionada de acuerdo con el nombre de la carga de trabajo.',
  CONTAINER_LOG_CONTAINER_TIP:
    'Puedes ver la información de log relacionada de acuerdo con el nombre del contenedor.',
  CONTAINER_LOG_POD_TIP:
    'Puedes ver la información de log relacionada de acuerdo con el nombre del pod.',
  'Search Events by': 'Buscar eventos por {field}',
  RESOURCE_EVENT_WORKSPACE_TIP:
    'Puedes ver información de eventos relacionados de acuerdo con el espacio de trabajo.',
  RESOURCE_EVENT_PROJECT_TIP:
    'Puedes ver información de eventos relacionados de acuerdo con el proyecto.',
  RESOURCE_EVENT_RESOURCE_TYPE_TIP:
    'Puedes ver información de eventos relacionados según el tipo de recurso.',
  RESOURCE_EVENT_RESOURCE_NAME_TIP:
    'Puedes ver información de eventos relacionados de acuerdo con el nombre del recurso.',
  RESOURCE_EVENT_MESSAGE_TIP:
    'Puedes ver información de eventos relacionados de acuerdo con el mensaje.',
  RESOURCE_EVENT_CATEGORY_TIP:
    'Puedes ver información relacionada del evento según la categoría.',
  RESOURCE_EVENT_REASON_TIP:
    'Puedes ver información relacionada con el evento según el motivo.',
  'Pod Event Query Tip':
    'Puedes ver información de eventos relacionados de acuerdo con el nombre del pod.',
  TOTAL_LOGS:
    'Un total de <span class={className}>{logs}</span> registros de <br/> Se recogieron <span class={className}>{contenedores}</span> contenedores.',
  TIME_S: '{num}s',
  CONTAINER_LOGS_NOT_SUPPORTED:
    'El contenedor no admite logs en tiempo real en el estado actual, intente nuevamente más tarde.',
  TOTAL_LOGS_TODAY:
    'Hoy se recolectó un total de <span class={className}>{logs}</span> logs de <span class={className}>{contenedores}</span> contenedores.',
  TOTAL_EVENTS_TODAY:
    'Hoy se recopilaron un total de <span class={className}>{events}</span> eventos.',
  NO_RESOURCE_EVENTS_TODAY: 'Eventos no encontrados hoy',
  START_REAL_TIME_LOG: 'activar el registro de logs en tiempo real',
  STOP_REAL_TIME_LOG: 'desactivar el registro de logs en tiempo real',
  EXPORT_LOGS: 'Exportar logs',
  CREATE_CUSTOM_MONITORING_DASHBOARD:
    'Crear un panel de monitoreo personalizado',
  MONITORING_TEMPLATE: 'Monitoring Template',
  CUSTOM_MONITORING_TEMPLATE_DESC:
    'Select a default template, upload a template, or customize a template to generate a custom monitoring dashboard.',
  CUSTOM_MONITORING_DASHBOARD: 'Panel de control personalizado',

  UPLOAD_GRAFANA_DASHBOARD: 'Upload Grafana Dashboard',
  IMPORT_GRAFANA_JSON_FILE: 'Import Grafana JSON Files',
  UPLOAD_GRAFANA_URL: 'Upload a Grafana dashboard from URL.',
  SUPPORT_JSON_FILE: 'Only files in JSON format are supported.',
  UPLOAD_FROM_LOCAL_TITLE: 'Select or Drag a File',
  FILE_UPLOAD_ERROR: 'Only one file can be uploaded.',
  UPLOAD_FILE_TIP: 'Please upload a file.',
  ENTER_GRAFANA_URL: 'Please enter a Grafana dashboard URL.',

  CUSTOMMONITORDASHBOARD: 'Panel de control personalizado',
  CUSTOMMONITORDASHBOARD_PL: 'Custom Monitoring Dashboards',
  CUSTOM_MONITORING_DASHBOARD_PL: 'Custom Monitoring Dashboards',
  CUSTOMMONITORDASHBOARD_LOW: 'custom monitoring dashboard',
  CUSTOM_MONITORING_DASHBOARD_EMPTY_DESC:
    'Please create a custom monitoring dashboard.',

  SERVICE_BUILT_INTERFACE:
    'la supervisión del servicio se genera con la captura de datos de interfaz',
  'Search Auditing Logs by': 'Auditoría de búsqueda por {field}',
  AUDIT_LOG_WORKSPACE_TIP:
    'Puedes ver información de eventos relacionados de acuerdo con el espacio de trabajo.',
  AUDIT_LOG_PROJECT_TIP:
    'Puedes ver información de eventos relacionados de acuerdo con el proyecto.',
  AUDIT_LOG_RESOURCE_NAME_TIP:
    'Puedes ver información de eventos relacionados de acuerdo con el nombre del recurso.',
  AUDIT_LOG_RESOURCE_TYPE_TIP:
    'Puedes ver información de eventos relacionados según el tipo de recurso.',
  AUDIT_LOG_VERB_TIP:
    'Puedes ver información de eventos relacionados de acuerdo con el verbo.',
  AUDIT_LOG_STATUS_CODE_TIP:
    'Puedes ver información de eventos relacionados de acuerdo con el código de estado.',
  AUDIT_LOG_OPERATOR_TIP:
    'Puedes ver información de eventos relacionados de acuerdo con la cuenta de operación.',
  AUDIT_LOG_SOURCE_IP_ADDRESS_TIP:
    'Puedes ver información de eventos relacionados de acuerdo con la IP de origen.',
  TOTAL_AUDITING_TODAY:
    'Hoy se han recopilado un total de <span class={className}>{auditing}</span> registros de auditoría.',
  NO_AUDIT_LOG_TODAY: 'Registros de auditoría no encontrados hoy',
  LOGGING_LOG_COLLECTOR: 'Log Receiver',
  EVENTS_LOG_COLLECTOR: 'Events Log Receiver',
  AUDITING_LOG_COLLECTOR: 'Auditing Log Receiver',

  // Log Collection
  LOG_COLLECTION: 'Log Collection',
  LOG_RECEIVER_PL: 'Log Receivers',
  LOG_ADDRESS: 'Address: ',
  LOG_COLLECTING: 'Collecting',
  LOG_DISABLED: 'Disabled',
  INVALID_SERVICE_ADDRESS: 'Please enter a correct service address.',
  ADD_SERVICE_ADDRESS: 'Add',
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
  KUBE_ASCENDING_ORDER: 'ASC...',
  KUBE_DESCENDING_ORDER: 'DESC...',
  KUBE_OPERATE: 'Operar',
  KUBE_FILTER: 'Filtro',
  KUBE_PLEASE_SELECT: 'Selecciona',
  KUBE_NO_AVAILABLE_DATA: 'No hay datos disponibles',
  KUBE_SUN: 'Dom',
  KUBE_MON: 'Lun',
  KUBE_TUE: 'Mar',
  KUBE_WED: 'Miér',
  KUBE_THU: 'Juev',
  KUBE_FRI: 'Vier',
  KUBE_SAT: 'Sáb',
  KUBE_SUNDAY: 'Domingo',
  KUBE_MONDAY: 'Lunes',
  KUBE_TUESDAY: 'Martes',
  KUBE_WEDNESDAY: 'Miércoles',
  KUBE_THURSDAY: 'Jueves',
  KUBE_FRIDAY: 'Viernes',
  KUBE_SATURDAY: 'Sábado',
  KUBE_JAN: 'Ene',
  KUBE_FEB: 'Feb',
  KUBE_MAR: 'Mar',
  KUBE_APR: 'Abr',
  KUBE_MAY: 'May',
  KUBE_JUN: 'Jun',
  KUBE_JUL: 'Jul',
  KUBE_AUG: 'Ago',
  KUBE_SEP: 'Sep',
  KUBE_OCT: 'Oct',
  KUBE_NOV: 'Nov',
  KUBE_DEC: 'Dic',
  KUBE_JAN_LH: 'Enero',
  KUBE_FEB_LH: 'Febrero',
  KUBE_MAR_LH: 'Marzo',
  KUBE_APR_LH: 'Abril',
  KUBE_MAY_LH: 'Mayo',
  KUBE_JUN_LH: 'Junio',
  KUBE_JUL_LH: 'Julio',
  KUBE_AUG_LH: 'Agosto',
  KUBE_SEP_LH: 'Septiembre',
  KUBE_OCT_LH: 'Octubre',
  KUBE_NOV_LH: 'Noviembre',
  KUBE_DEC_LH: 'Diciembre',
  KUBE_AM: 'AM',
  KUBE_PM: 'PM',
  KUBE_WEEK_ABBREVIATION: 'Sem',
  KUBE_RANGE_SEPARATOR: ' hasta ',
  KUBE_SCROLL_TO_INCREMENT: 'Haz scroll para incrementar',
  KUBE_CLICK_TO_TOGGLE: 'Haz click para intercambiar',
  KUBE_YEAR: 'Año',
  'Pod IP Pool': 'Pod IP Pool',
  'Pod IP Pools': 'Pod IP Pools',

  CREATE_POD_IP_POOL: 'Create Pod IP Pool',

  NETWORK_SEGMENT: 'Network Segment',
  USED_IP_ADDRESSES: 'Used IP Addresses',
  'Used IP': 'Used IP',

  MASK: 'Mask',
  NETWORK: 'Network',
  NETWORK_RESOURCE_PL: 'Network Resources',

  STARTING_IP_ADDRESS: 'Starting IP Address',
  ENDING_IP_ADDRESS: 'Ending IP Address',
  AVAILABLE_ADDRESSES: 'Available Number',

  POD_IP_POOL: 'Pod IP Pool',
  POD_IP_POOL_PL: 'Pod IP Pools',
  POD_IP_POOL_LOW: 'Pod IP pool',
  POD_IP_POOL_EMPTY_DESC: 'Please create a Pod IP pool.',

  NUMBER_OF_CREATION_TCAP: 'Number of Creation',
  IP_POOL_CREATE_DESC: 'Pod IP Pools to be created',
  'Set to be globally available': 'Set to be globally available',

  IP_ADDRESS_EMPTY_DESC: 'Please enter an IP address.',
  MASK_TIP: 'Please enter a mask.',
  ENTER_NETWORK_SEGMENT_TIP: 'Please enter a network segment.',

  IP_POOL_NUM_TIP: 'Please enter the number of Pod IP pools to be created.',

  POD_IP_POOL_DESC:
    'Pod IP pools is used to manage the Pod network address space in the cluster. You can create Pod IP pools based on your needs.',
  IP_POOL_CREATE_COUNT_DESC:
    'Up to 10 Pod IP pools can be created at the same time.',
  IPPOOL_USAGE_Q: 'How do I manage a Pod network using a Pod IP pool?',
  IPPOOL_USAGE_A:
    'A Pod IP pool is used to manage the Pod network address space, and the address spaces between different Pod IP pools cannot overlap. When creating a workload, you can select a specific Pod IP pool to assign IP addresses from this Pod IP pool to the created Pods.',

  IPPOOL_ASSIGN_WORKSPACE_DESC: 'Assign the Pod IP pool to a workspace.',
  IPPOOL_ASSIGN_WORKSPACE_ALLOCATED_WARNING:
    'The Pod IP pool is in use and cannot be assigned to another specific workspace.',
  IPPOOL_ASSIGN_WORKSPACE_CHANGE_WARNING:
    'The Pod IP pool is in use with a specific workspace assigned. The workspace cannot be changed.',

  IPPOOL_WORKSPACE_EMPTY_TIP: 'No workspace is using this Pod IP pool.',
  // IP Pod Pools List Page
  TOTAL_VALUE: 'Total: {value}',
  ALL: 'Todos',
  NOT_ASSIGNED: 'No asignado',
  ADD_ANNOTATION: 'Añadir annotation',
  ADD_PATH_TCAP: 'Agregar ruta',
  PATH_EMPTY_DESC: 'Please add at least one path.',
  AUTO_GENERATE_TCAP: 'Autogenerar',
  ADD_ROUTING_RULE: 'Agregar regla de ruta',
  EDIT_ROUTING_RULES: 'Edit Routing Rules',
  'Add Path': 'Agregar ruta',
  'Auto Generate': 'Autogenerar',
  VISIT: 'Haz clic para visitar',
  'Create Route': 'Crear ruta',
  EDIT_ANNOTATIONS: 'Edit Annotations',
  EDIT_RULES: 'Editar reglas',
  GATEWAY_ADDRESS_TCAP: 'Dirección del gateway',
  GATEWAY_ADDRESS_SCAP: 'Gateway address',
  GATEWAY_IP_ADDRESS: 'IP del gateway',
  GATEWAY_ACCESS_MODE: 'Tipo de gateway',
  DOMAIN_NAME_TCAP: 'Domain Name',
  DOMAIN_NAME_VALUE: 'Domain Name: {value}',
  INVALID_DOMAIN_DESC: 'Invalid domain name',
  INVALID_PATH_DESC: 'Establezca una ruta correcta',
  PATH_EXIST: 'PATH is duplicated, please re-enter。',
  MODE_TCAP: 'Modo',
  PATH_PL: 'Rutas',
  PATH_SI: 'Ruta',
  PATH_VALUE: 'Ruta: {value}',
  ADD_ROUTING_RULE_DESC:
    'Agregar una regla de ruta para asignar un nombre de dominio a un servicio.',
  ROUTING_RULE_EMPTY_DESC: 'Please add at least one routing rule.',
  DOMAIN_NAME_EMPTY_DESC: 'Ingrese un nombre de dominio',
  PATH_SERVICE_TIP: 'Selecciona un servicio',
  Route: 'Ruta',
  ROUTE: 'Ruta',
  ROUTE_PL: 'Routes',
  ROUTE_LOW: 'Route',
  ROUTING_RULES: 'Reglas de ruta',
  RULES: 'Reglas',
  SET_ROUTING_RULES: 'Establecer regla de ruta',
  SPECIFY_DOMAIN_TCAP: 'Especificar dominio',
  UNABLE_TO_ACCESS: 'Unable to access service',
  ROUTE_DESC:
    'Una ruta proporciona una forma de agregar servicios, y puede exponer los servicios internos del clúster al exterior a través de una dirección IP accesible desde el exterior.',
  ROUTE_EMPTY_DESC:
    'Una ruta proporciona una forma de agregar servicios, y puede exponer los servicios internos del clúster al exterior a través de una dirección IP accesible desde el exterior.',
  ROUTE_ANNOTATION_DESC:
    'Puedes definir el comportamiento de la ruta agregando annotations a la ruta. Consulta <a href="https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/" target="_blank">Annotations</a> para obtener una lista detallada de las annotations disponibles.',
  RULE_SETTING_MODE_AUTO:
    'Al configurar el acceso DNS y cambiar el nombre de dominio a &ltService name&gt + &ltProject name&gt + &ltGateway address&gt + nip.io, podrás acceder al servicio a través de &ltService name&gt.&ltProject name&gt.&ltGateway address&gt.nip.io:&ltNodePort&gt. <br/>Asegúrate de estar en un entorno de red capaz de acceder a la dirección de la puerta de enlace.',
  RULE_SETTING_MODE_SPECIFY:
    'Especifique un nombre de dominio personalizado y use el archivo de hosts local o un servidor DNS para resolver el nombre de dominio en la dirección IP de la puerta de enlace.',
  INGRESS_CONTROLLER_NODEPORT_DESC:
    'Si el gateway está habilitado, el sistema asignará automáticamente números de puerto de http y https. Las rutas de aplicación pueden acceder a los servicios a través del proxy inverso.',
  INGRESS_CONTROLLER_LOADBALANCER_DESC:
    'Para usar un LoadBalancer de QingCloud como gateway, primero implementa el complemento QingCloud Cloud Controller Manager.',
  NO_GATEWAY_DESC:
    'Para usar la generación automática, comuníquese con el administrador del proyecto para configurar el método de acceso a la puerta de enlace en la configuración avanzada del proyecto.',
  UNABLE_CREATE_ROUTE_TIP:
    'No se puede crear la ruta de la aplicación puesto que la dirección de gateway disponible no se encuentra en el proyecto actual.',
  GATEWAY_TRACING_TIP:
    'Necesitas habilitar Application Governance si deseas utilizar la función de Tracing. Una vez que Application Governance esté habilitado, verifica si se ha agregado una annotation como "nginx.ingress.kubernetes.io/service-upstream: true" para la ruta de la aplicación si la ruta es inaccesible. Si no existe el annotation, agrégalo.',
  UNABLE_TO_ACCESS_TIP:
    '● Asegúrate de que el nombre de dominio establecido pueda resolverse en la dirección IP del portal de acceso. <br/>Si se encuentra en un entorno de nube privada, modifica el archivo de host local y luego accede a través de &ltDomain name&gt:&ltNodePort&gt. <br/> ● Al configurar el acceso DNS, modifica el nombre de dominio a &ltHostname&gt.&ltGateway address&gt.nip.io, y luego acceda al servicio a través de &ltHostname&gt.&ltGateway address&gt.nip.io:&ltNodePort&gt. <br/> ● Si el acceso está bloqueado cuando se usa el nombre de dominio, confirma si tu nombre de dominio existe y se ha registrado.',
  PREREQUESTS_FOR_USE_ROUTE_Q:
    '¿Cuales son los requisitos para poder usar rutas?',
  PREREQUESTS_FOR_USE_ROUTE_A:
    'To use a route, the project administrator needs to set the gateway for the current project.',
  ACCESS_TYPES_OF_ROUTE_Q: '¿Qué tipos de acceso admite la ruta?',
  ACCESS_TYPES_OF_ROUTE_A:
    'Las rutas de KubeSphere admiten nombres de dominio personalizados (HostName) y así como wildcards DNS.',

  // Route Detail Page
  ROUTE_PATH_VALUE: 'Path: <strong>{value}</strong>',
  ROUTE_SERVICE_VALUE: 'Servicio: <strong>{value}</strong>',
  ROUTE_PORT_VALUE: 'Port: <strong>{value}</strong>',
  ACCESS_SERVICE: 'Access Service',
  ADD_MEMBER_TIP_SI:
    'Are you sure you want to assign the user to <strong>{group}</strong>?',
  ADD_MEMBER_TIP_PL:
    'Are you sure you want to assign the users to the department <strong>{group}</strong>?',
  principal: 'persona a cargo',
  CREATE_DEPARTMENT: 'Create Department',
  NO_DEPARTMENT_TIP:
    'No department available. Please create a department on the right.',
  WORKSPACE_ROLE: 'rol del espacio de trabajo',
  WORKSPACE_MEMBER_EMPTY_DESC: 'Please invite a user to the workspace.',
  PROJECT_ROLE: 'Project Role',
  ADD_PROJECT: 'Agregar proyecto',
  'project roles': 'roles de proyecto',
  DEVOPS_PROJECT_ROLE: 'DevOps Project Role',
  DEVOPS_PROJECT_ROLE_SCAP: 'DevOps project role',
  ADD_DEVOPS_PROJECT: 'Agregar proyecto DevOps',
  SELECT_ROLE_TIP: 'Please select a role.',
  DEPARTMENT: 'Department',
  GROUP_WORKSPACE_ROLE_DESC:
    'La función del espacio de trabajo se asignará a todos los miembros del departamento.',

  DELETE_PARENT_GROUP_TIP:
    'Está seguro de que desea eliminar el subdepartamento <strong> {group_name} </strong>? Al eliminar el departamento, también se eliminarán sus subdepartamentos y se cancelará la autorización de todos los miembros. ',
  DELETE_GROUP_TIP:
    'Está seguro de eliminar el subdepartamento <strong> {group_name} </strong>? Al eliminar el departamento, también se cancelará la autorización de todos los miembros. ',
  'A/B Testing': 'Testing A/B',
  ALLOCATE_TRAFFIC_DESC:
    'Asignar todo el tráfico de forma proporcional a los componentes de Grayscale Release',
  BLUE_GREEN_DEPLOYMENT: 'Despliegue blue-green',
  CREATE_BLUE_GREEN_DEPLOYMENT_JOB: 'Create Blue-Green Deployment Job',
  CREATE_CANARY_RELEASE_JOB: 'Create Canary Release Job',
  CREATE_TRAFFIC_MIRRORING_JOB: 'Create Traffic Mirroring Job',
  CANARY_RELEASE: 'Canary Release',
  BLUE_GREEN_DEPLOYMENT_LOW: 'blue-green deployment',
  CANARY_RELEASE_LOW: 'canary release',
  TRAFFIC_MIRRORING_LOW: 'traffic mirroring',
  COOKIE_EXACT_MATCH: 'Cookie (exact match)',
  COOKIE_REGEX_MATCH: 'Cookie (regex match)',
  HEADER_EXACT_MATCH: 'Header (exact match)',
  HEADER_REGEX_MATCH: 'Header (regex match)',
  URL_PREFIX_MATCH: 'URL (prefix match)',
  URL_EXACT_MATCH: 'URL (regex match)',
  CREATE_GRAYSCALE_RELEASE_JOB: 'Crear un job de Grayscale Release',
  HEADER: 'Cabecera personalizada',
  'Deploy sample application': 'Implementar aplicación de demo',
  DEPLOY_SAMPLE_APP: 'Implementar aplicación de demo',
  'Edit Grayscale Release Job': 'Editar job de Grayscale Release',
  EXACT_MATCH: 'Coincidencia exacta',
  SPECIFY_REQUEST_PARAMETERS: 'Reenviar por contenido de solicitud',
  SPECIFY_TRAFFIC_DISTRIBUTION: 'Reenviar por ratio de tráfico',
  GRAYSCALE_RELEASE_COMPONENT: 'Componente de Grayscale Release',
  GRAYSCALE_RELEASE_COMPONENT_PL: 'Componentes de Grayscale Release',
  NEW_VERSION_SETTINGS: 'New Version Settings',
  NEW_VERSION_NUMBER: 'New Version Number',
  GRAYSCALE_RELEASE_VERSION_TCAP: 'Versión de Grayscale Release',
  REQUEST_PARAMETERS: 'Regla de acceso a la versión de Grayscale Release',
  GRAYSCALE_RELEASE_VERSION_NUMBER: 'Número de versión Grayscale Release',
  SERVICE_VERSION_RECEIVE_ALL_TRAFFIC:
    'The version <b>{version}</b> has taken over all traffic.',
  DELETE_JOB: 'Trabajo fuera de línea',
  JOB_OFFLINE_SUCCESSFULLY: 'Trabajo fuera de línea con éxito',
  JOB_STATUS: 'Estado del trabajo',
  RELEASE_JOBS: 'Release Jobs',
  MIRRORED_TRAFFIC: 'Tráfico reflejado',
  'Mirrored traffic is only receiving traffic, no service':
    'El tráfico reflejado solo recibe tráfico, no hay servicio',
  NO_WORKLOAD_FOUND_TIP: 'No se encontró carga de trabajo',
  'Not online': 'Fuera de linea',
  TAKE_OFFLINE: 'Desconectado esta versión',
  TAKE_OVER: 'Take Over',
  'Operating System': 'Sistema operativo',
  NEW_VERSION_NUMBER_EMPTY_DESC: 'Introduce la versión Grayscale Release',
  SELECT_GRAY_COMPONENT_TIP: 'Selecciona un componente Grayscale Release',
  STRATEGY_CONFIGURATIONS_TCAP: 'Configuración de estrategia',
  POLICY_REQUEST_CONTENT_TIP:
    'Forwarding by request content is unavailable if port protocol is not HTTP, HTTP2, or gRPC.',
  PREFIX_MATCH: 'Coincidencia de prefijo',
  REAL_TIME_TRAFFIC_DIST_TCAP: 'Distribución de tráfico en tiempo real.',
  TRAFFIC_MIRRORING_TRAFFIC_DISTRI_DESC:
    'A copy of traffic is sent to the new version for testing.',
  BLUE_GREEN_TRAFFIC_DISTRI_DESC:
    'The new version or old version receives all traffic.',
  RESTORE: 'Recuperar',
  REGEX_MATCH: 'Coincidencia regex',
  GRAY_RELEASE_JOB_NAME: 'Liberar nombre del job',
  SUCCESSFUL_REQUEST_RATE: 'Tasa de éxito de solicitud',
  RULE_DESCRIPTION: 'Descripción de la regla',
  'Take Over': 'Tomar el control',
  TAKE_ONLINE: 'Tomar el control de todo el tráfico',
  'The current version is not online, you can let this version take over all traffic and bring it online.':
    'La versión actual no está online, puedes dejar que esta versión tome el control de todo el tráfico y lo ponga online.',
  traffic: 'tráfico',
  CLIENT_OS: 'El tráfico proviene de los siguientes sistemas operativos',
  OS: 'OS',
  TRAFFIC_CONTROL: 'Control de trafico',
  TRAFFIC_MIRRORING: 'Mirroring de tráfico',
  TRAFFIC_MONITORING: 'Monitor de tráfico',
  TRAFFIC: 'Traffic',
  TRAFFIC_IN_LAST_FIVE_MINUTES: 'Tráfico de los últimos cinco minutos',
  TRAFFIC_DISTRIBUTION: 'Ratio de tráfico',
  SELECT_VERSION: 'Reglas de tráfico',
  BLUE_GREEN_STRATEGY_DESC: 'Dos versiones',
  UNFINISHED_GRAY_JOB: 'Unfinished grayscale release job exists.',
  UNSUPPORTED_WORKLOAD_TYPE: 'Tipo de carga de trabajo no compatible',
  VERSION_COMPARISON: 'Comparar versiones',
  'version number is invalid': 'el número de versión no es válido',
  'Version Off': 'Versión desactivada',
  RELEASE_MODE_PL: 'Strategies',
  RELEASE_MODE: 'Release mode',
  GRAY_RELEASE_STRATEGY_SI: 'Grayscale Release Strategy',
  BLUE_GREEN_DEPLOYMENT_DESC:
    'Blue-green deployment deploys the new version while retaining the old version to ensure zero downtime. At any time, only one of the versions is active serving all the traffic and the other one remains idle. If anything goes wrong, you can quickly roll back to the old version.',
  CANARY_RELEASE_DESC:
    'Este método trae parte del tráfico real a una nueva versión para probar su rendimiento y confiabilidad. Puedes ayudar a detectar posibles problemas en el entorno real sin afectar la estabilidad general del sistema.',
  TRAFFIC_MIRRORING_DESC:
    'El traffic mirroring proporciona una forma más precisa de probar nuevas versiones, ya que los problemas se pueden detectar por adelantado sin afectar el entorno de producción. Por lo tanto, sirve como un método más seguro y confiable para el despliegue de versiones.',
  AB_TESTING_DESC:
    'Este método es muy útil para comprender si las actualizaciones o mejoras del producto han cumplido con las expectativas. Se puede usar cuando surgen nuevas necesidades y no afectará la estabilidad del negocio.',
  NO_SERVICE_MESH_TIP:
    'Las aplicaciones que no están habilitadas para el Application Governance no se pueden publicar en Grayscale.',
  NO_GRAYSCALE_RELEASE_JOB_FOUND: 'No Grayscale Release Job Found',
  NO_GRAYSCALE_RELEASE_TASK_FOUND_DESC:
    'Please create a grayscale release job.',
  TOTAL_GRAY_RELEASE_JOB:
    '{num} total de trabajos de liberación en Grayscale Release',
  TOTAL_GRAY_RELEASE_JOBS:
    '{num} total de trabajos de liberación en Grayscale Release',
  NEW_VERSION_NUMBER_DESC:
    'Solo puede contener letras minúsculas y números. La longitud máxima de carácteres se establece en 16.',
  NEW_VERSION_NUMBER_INVALID_DESC:
    'Invalid new version number. The new version number can contain only lowercase letters and numbers. The maximum length is 16 characters.',
  GRAY_RELEASE_VERSION_DESC:
    'Introducir la nueva versión en el service-mesh de aplicación existente',
  POLICY_CONFIG_DESC:
    'Versión basada en el ratio de tráfico: de acuerdo con la regla de configuración del ratio de tráfico, la proporción especificada de tráfico se dividirá de la versión original a la versión en Grayscale Release.',
  GRAYSCALE_RELEASE_DESC:
    'Grayscale release represents an important method of application iteration in the production environment. You can choose different release methods for the smooth transition as you upgrade your applications to a new version.',
  SPECIFY_REQUEST_PARAMETERS_DESC:
    'De acuerdo con la regla de configuración del contenido de la solicitud, solo el tráfico que cumpla ciertas condiciones en el contenido solicitado se dividirá en versiones en Grayscale Release. Esta política solo es válida para el acceso directo al servicio del portal.',
  MIRROR_POLICY_DESC:
    'With traffic mirroring, the network traffic in the production environment can be copied into a grayscale version. It serves as an effective way to test the new version with real-time user traffic before it runs in the actual environment.</br>Therefore, traffic mirroring reduces the risk of directly making changes in the production environment.',
  ADJUST_TRAFFIC_DISTRIBUTION_DESC:
    'Are you sure you want to send {ratioNew}% of traffic to the new version <b>{newVersion}</b> and {ratioOld}% to the old version <b>{oldVersion}</b>?',
  CANARY_BY_TRAFFIC_DESC:
    'De acuerdo con la regla de proporción de tráfico, el {ratio}% del tráfico solicitado al componente <b>{component}</b> se reenviará a la versión en Grayscale Release <b>{newVersion}</b>.',
  DEPLOY_APP_CONFIRM: '¿Seguro que deseas desplegar la aplicación de demo?',
  DEPLOY_APP_TIP: 'Desplegar la aplicación de demo {name}.',
  DEPLOY_SAMPLE_NO_INTERNET_ACCESS_TIP:
    'El gateway para el application governance no se encuentra en el proyecto actual, por lo que no puedes implementar la aplicación de demo. Ponte en contacto con el administrador de tu proyecto para activarlo en [Configuración avanzada].',
  PREREQUEST_FOR_USE_GRAYRELEASE_Q:
    '¿Cuales son los requisitos previos para usar Grayscale Release?',
  PREREQUEST_FOR_USE_GRAYRELEASE_A:
    'You need to create a composed app and enable the application governance feature before you implement grayscale release.',
  DELETE_GRAYSCALE_RELEASE_JOB_DESC:
    'You need to select a version to take it offline. The system will retain an available version and automatically transfer all traffic to this available version to make sure the service can run smoothly.',
  NEW_VERSION_TAKEOVER_DESC:
    'The new version <b>{newVersion}</b> is receiving all traffic. If you delete the current grayscale release job, the old version <b>{oldVersion}</b> will be also be deleted.',
  OLD_VERSION_TAKEOVER_DESC:
    'The old version <b>{oldVersion}</b> is receiving all traffic. If you delete the current grayscale release job, the new version <b>{newVersion}</b> will be also be deleted.',

  // Grayscale release detail page
  GRAY_COMPONENT_DESC:
    'The grayscale release components used to serve the traffic.',
  TRAFFIC_LOW: 'tráfico',
  VERSION_TRAFFIC_PERCENT: '{version} traffic {percent}%',

  // Grayscale release components tab
  GRAY_APP_NAME: 'App: {name}',
  GRAY_WORKLOAD_TYPE: 'Tipo de carga de trabajo: ',

  // Grayscale release version tab
  NEW_VERSION_NUMBER_EXIST_DESC:
    'Deployment {name} exists. Please enter another version number.',
  INIT_CONTAINER: 'Init Container',
  INIT_CONTAINER_VALUE: 'Init Container: {value}',
  CONTAINER_VALUE: 'Container: {value}',
  GRAYSCALE_IMAGE: 'Image: {image}',

  // Grayscale strategy configurations tab
  GRAYSCALE_VERSION: 'Versión: {version}',
  GRAYSCALE_REPLICA_SI: 'Réplica: {count}',
  GRAYSCALE_REPLICA_PL: 'Réplicas: {count}',

  // Canary Strategy Tab
  COOKIE: 'Cookie',

  // Grayscale Release Job List
  GRAYSCALE_JOB_STRATEGY: 'Grayscale release strategy',
  GRAYSCALE_JOB_COMPONENT: 'Componente de Grayscale Release',
  GATEWAY_SETTINGS: 'Gateway Settings',
  DISABLE_GATEWAY: 'Disable Gateway',
  DISABLE_GATEWAY_TIP: 'Are you sure you want to disable the gateway?',
  DISABLE_SUCCESSFUL: 'Disabled successfully.',
  CLUSTER_GATEWAY_DESC:
    'Set up and manage the configuration of the external network access gateway and service management in the cluster and project',
  PROJECT_GATEWAY_DESC:
    'Set up and manage the configuration of the external network access gateway and service management in the cluster and project',
  CLUSTER_GATEWAY: 'Cluster Gateway',
  PROJECT_GATEWAY: 'Project Gateway',
  CLUSTER_GATEWAY_LOW: 'cluster gateway',
  PROJECT_GATEWAY_PL: 'Project Gateways',
  PROJECT_GATEWAY_LOW: 'project gateway',
  CLUSTER_ENABLE_GATEWAY_DESC:
    'Before creating an application route, you need to enable the external network access portal, that is, the gateway. This step is to create the corresponding application routing controller, which is responsible for forwarding the request to the corresponding back-end service. ',
  PROJECT_ENABLE_GATEWAY_DESC:
    'The cluster management page does not support the setting of the project gateway. If you need to set it, you need to go to the corresponding project to set it. ',
  CLUSTER_GATEWAY_NOT_ENABLED: 'Cluster Gateway Not Enabled',
  PROJECT_GATEWAY_NOT_ENABLED: 'Project Gateway Not Enabled',
  'Gateway Not Set': 'Gateway Not Set',
  'Set Gateway': 'Set Gateway',
  EDIT_GATEWAY: 'Edit Gateway',
  'Update Gateway': 'Update Gateway',
  GATEWAY_LOW: 'Gateway',
  CONFIGURATION_OPTIONS: 'Gateway Config',
  'Gateway Config': 'Gateway Config',
  GATEWAY_LOGS: 'Gateway Logs',
  'Add Gateway Config': 'Add Gateway Config',
  LOAD_BALANCER_PROVIDER: 'LoadBalancer Provider',
  LOAD_BALANCER_PROVIDER_SCAP: 'Load balancer provider',
  LOAD_BALANCER_SCAP: 'Load balancer',
  LOAD_BALANCERS_SCAP: 'Load balancers',
  USE_DEFAULT_ANNOTATIONS: 'Use Default Annotations',
  GATEWAY_IP: 'Access address',
  UPDATE_GATEWAY_DESC: 'The current gateway can be upgraded',
  DISK_LOG_COLLECTION_DESC:
    'The Log Collection function allows the system to collect container logs saved on volumes. To use this function, you need to mount a volume in read and write mode to a container and set the container to export logs to the volume.',
  UPDATED_GATEWAY_DESC:
    'Please operate during the low peak period of the business. The upgrade process may cause a short business interruption. ',
  UPDATED_GATEWAY_TITLE: 'Confirm to upgrade the gateway?',
  CLUSTER_GATEWAY_GUIDE_DESC:
    'After the cluster gateway is turned on, the project gateway can no longer be set. If the project gateway already exists, it cannot be reset after deleting it. ',
  'Request Count': 'Request Count',
  CONNECTION_COUNT: 'Connections',
  FAILED_REQUEST_COUNT: 'Request Error',
  AVERAGE_LATENCY: 'Average Latency',
  P_FIFTY_LATENCY: 'P50 Latency',
  P_NINETY_FIVE_LATENCY: 'P95 Latency',
  P_NINETY_NINE_LATENCY: 'P99 Latency',
  FOUR_XX_REQUEST_COUNT: '4xx error',
  FIVE_XX_REQUEST_COUNT: '5xx error',
  TOTAL_REQUESTS: 'Total Requests',
  SUCCESSFUL_REQUESTS: 'Request Success',
  GATEWAYS_REPLICA_DESC:
    'Deployment (Deployment) is used to describe the desired target state of the application. It is mainly used to describe the stateless application. The number and state of replicas are maintained by the controller behind it to ensure that the state is consistent with the defined desired state. You can increase the number of replicas to meet higher loads; roll back the deployed version to eliminate erroneous changes to the program; create an autoscaler to flexibly respond to the load in different scenarios. ',
  PROJECT_GATEWAY_EMPTY_DESC:
    'The cluster management page does not support the setting of the project gateway. If you need to set it, you need to go to the corresponding project to set it.',
  DISK: 'Disk',
  APP_REPO: 'Repositorios de aplicaciones',
  'Cluster Status': 'Estado del clúster',
  'CPU Load Average': 'Promedio de carga de la CPU',
  'CPU Usage': 'Uso de CPU',
  'CPU Utilization': 'Utilización de CPU',
  'create project': 'crear proyecto',
  CronJobs: 'CronJobs',
  DAEMONSETS: 'DaemonSets',
  NUMBER_OF_DAEMONSETS: 'Number of DaemonSets',
  STATEFULSETS: 'StatefulSets',
  NUMBER_OF_STATEFULSETS: 'Number of StatefulSets',
  dashboard: 'dashboard',
  Dashboard: 'Dashboard',
  DEPLOYMENTS: 'Deployments',
  NUMBER_OF_DEPLOYMENTS: 'Number of Deployments',
  'Disk Throughput': 'Tasa de transferencia de disco',
  'Disk Utilization': 'Utilización de disco',
  'Inbound Traffic': 'Tráfico entrante',
  'involved project': 'proyecto involucrado',
  Jobs: 'Jobs',
  'KubeSphere Running Status': 'Estado de ejecución de KubeSphere',
  LAST_LOGIN: 'Última hora de inicio de sesión',
  'Log Data': 'Datos de registro',
  'Memory Usage': 'Uso de memoria',
  'Memory Utilization': 'Utilización de memoria',
  'Monitoring Data': 'Datos de monitorización',
  'Network Bandwidth': 'Ancho de banda de red',
  'Node Status': 'Estado del nodo',
  'Outbound Traffic': 'Tráfico saliente',
  'Platform Usage Status': 'Estado de uso de la plataforma',
  'Project Top3': 'Proyecto Top3',
  quota: 'cuota',
  'Regular user': 'Usuario regular',
  'Replica Availability': 'Disponibilidad de réplica',
  TOP_5_FOR_RESOURCE_USAGE: 'Ranking de uso de recursos',
  Routes: 'Rutas',
  Services: 'Services',
  'Storage Classes': 'Storage Classes',
  'Super administrator': 'Super administrador',
  USER_PL: 'Usuarios',
  Utilization: 'Utilización',
  'View All Nodes': 'Ver todos los nodos',
  Volumes: 'Volúmenes',
  DASHBOARD_TITLE: 'Hola {username}',
  DASHBOARD_BANNER_TITLE: 'Visión general de la plataforma',
  DASHBOARD_BANNER_DESC:
    'Estadísticas agregadas sobre los recursos en ejecución y el uso de la plataforma actual.',
  DASHBOARD_DESC:
    'El dashboard proporciona información sobre el uso de varios recursos en el clúster actual.',
  NODE_UNIT: 'Nodos',
  USAGE_VALUE: 'Uso',
  USAGE_RATE: 'Uso',
  NO_PROJECT: 'No se han encontrado proyectos disponibles.',
  NO_POD_MONITOR_DATA: 'No hay datos de monitorización de pods',
  RESOURCE_WARNING_TIPS:
    'Hay {warnNum} {tipName} que se muestran anormalmente.',
  CPU_AVERAGE_LOAD: 'Promedio de carga',
  USER_DASHBOARD_EMPTY_TITLE:
    'No perteneces a ningún espacio de trabajo actualmente.',
  USER_DASHBOARD_EMPTY_DESC:
    'Puedes ponerte en contacto con un administrador del espacio de trabajo para que te invite a unirte.',
  CUSTOM_RESOURCE: 'Custom Resource',
  CUSTOM_RESOURCE_LOW: 'custom resource',
  CUSTOM_RESOURCE_PL: 'Custom Resources',
  CRD: 'CRD',
  CRD_PL: 'CRDs',
  CRD_LOW: 'CRD',
  CRD_EMPTY_DESC: 'Please create a CRD.',
  CUSTOM_RESOURCE_DEFINITION_LOW: 'custom resource definition',
  'Custom Resource Definition': 'Custom Resource Definition',
  'Custom Resource Definitions': 'Custom Resource Definitions',
  CRD_DESC:
    'A Custom Resource Definition (CRD) extends Kubernetes by allowing users to create any kind of custom resources. Users can use these CRD objects as they do for built-in resources.',
  CUSTOM_RESOURCE_DEFINITION_CREATE_DESC:
    'A Custom Resource Definition (CRD) extends Kubernetes by allowing users to create any kind of custom resources. Users can use these CRD objects as they do for built-in resources.',

  // CRD List Page
  KIND_TCAP: 'Kind',
  SCOPE_TCAP: 'Scope',
  CRDS: 'CRDs',
  FIELDS: 'Campo de configuración',
  ConfigMap: 'ConfigMap',
  configmaps: 'configmaps',
  ConfigMaps: 'ConfigMaps',
  ENTER_CONFIG_VALUE_DESC:
    'Introduce el valor de la entrada del configmap o utiliza el contenido del archivo',
  EDIT_CONFIGMAP: 'Modificar configuración',
  CONFIG_FIELD_DESC:
    'El valor único de la clave asignada por el campo de configuración.',
  CONFIGMAP_EMPTY_DESC:
    'Un ConfigMap es un objeto utilizado para almacenar variables de configuración comunes, lo que permite la gestión unificada de variables de entorno para diferentes módulos en un sistema distribuido.',
  CONFIGMAP_DESC:
    'Un ConfigMap a menudo se usa para almacenar la información de configuración necesaria para workload. Muchas aplicaciones leerán la información de archivos de configuración, de parámetros de la línea de comandos o de variables de entorno.',
  CONFIGMAPS_BASEINFO_DESC: '',
  CONFIGMAP_SETTINGS_DESC: '',
  CREATE_CONFIG: 'creat a ConfigMap',
  'All Components': 'Todos los componentes',
  components: 'componentes',
  Components: 'Componentes',
  'Installed Components': 'Componentes instalados',
  INSTANCE_COUNT: 'Recuento de instancias',
  'Not Installed Components': 'Componentes no instalados',
  RUNNING_STATUS: 'Estado de ejecución',
  SERVICE_DETAILS: 'Detalles del servicio',
  SERVICE_COMPONENTS_DESC:
    'Este módulo monitorea el estado de varios componentes del servicio en KubeSphere, Kubernetes, OpenPitrix, etc. Muestra el estado de mantenimiento y el tiempo de ejecución del clúster actual, y ayuda a los usuarios a monitorear el estado del clúster y localizar problemas a tiempo.',
  KS_ACCOUNT_DESC:
    'Proporciona la API de administración de usuarios y autorizaciones.',
  KS_APIGATEWAY_DESC:
    'Responsable de procesar solicitudes de servicio y manejar todas las tareas en el proceso de llamada a la API',
  KS_APISERVER_DESC:
    'Sirve los puntos finales API REST y proporciona la interfaz para el estado compartido del clúster a través del cual interactúan todos los demás componentes, así como el control de seguridad del clúster',
  KS_CONSOLE_DESC: 'Proporciona servicios de consola para KubeSphere.',
  OPENLDAP_DESC:
    'Responsable del almacenamiento centralizado y la gestión de la información de la cuenta del usuario.',
  REDIS_DESC:
    'Responsable del almacén de estructura de datos en memoria, utilizado como base de datos, caché y agente de mensajes',
  COREDNS_DESC: 'DNS y descubrimiento de servicios en el clúster',
  KUBE_CONTROLLER_MANAGER_DESC:
    'Un demonio que incorpora los bucles de control central enviados con Kubernetes',
  KUBE_SCHEDULER_DESC:
    'El planificador de Kubernetes que conecta el Pod al nodo apropiado',
  METRICS_SERVER_DESC:
    'Recopile métricas de la API de resumen, expuesta por Kubelet en cada nodo',
  TILLER_DEPLOY_DESC:
    'Servidor de helm, interactúa directamente con el servidor API de Kubernetes para instalar, actualizar, consultar y eliminar recursos de Kubernetes',
  OPENPITRIX_API_GATEWAY_DESC:
    'Responsable de procesar solicitudes de servicio de plataforma y manejar todas las tareas en el proceso de llamada API',
  OPENPITRIX_APP_MANAGER_DESC:
    'Proporciona la gestión del ciclo de vida de las aplicaciones de OpenPitrix.',
  OPENPITRIX_CATEGORY_MANAGER_DESC:
    'Proporciona gestión de clasificación de aplicaciones en OpenPitrix',
  OPENPITRIX_CLUSTER_MANAGER_DESC:
    'Proporciona gestión del ciclo de vida del clúster (instancia) en OpenPitrix',
  OPENPITRIX_DB_DESC: 'Servicio de base de datos OpenPitrix',
  OPENPITRIX_ETCD_DESC:
    'Un almacén de valores clave distribuido que proporciona una forma confiable de almacenar datos en un grupo de máquinas',
  OPENPITRIX_IAM_SERVICE_DESC:
    'Controle quién está autenticado (conectado) y autorizado (tiene permisos) para usar recursos',
  OPENPITRIX_JOB_MANAGER_DESC:
    'Ejecuta la acción del ciclo de vida de la instancia de la aplicación OpenPitrix.',
  OPENPITRIX_MINIO_DESC:
    'Proporciona servicios de almacenamiento de objetos para almacenar datos no estructurados.',
  OPENPITRIX_REPO_INDEXER_DESC:
    'Proporciona el servicio de indexación de repositorio de aplicaciones de OpenPitrix',
  OPENPITRIX_REPO_MANAGER_DESC:
    'Proporciona la gestión del repositorio de aplicaciones de OpenPitrix',
  OPENPITRIX_RUNTIME_MANAGER_DESC:
    'Proporciona gestión de tiempo de ejecución en la nube en la plataforma.',
  OPENPITRIX_TASK_MANAGER_DESC:
    'Ejecuta subtareas del ciclo de vida de la instancia de la aplicación OpenPitrix Acción',
  ISTIO_CITADEL_DESC:
    'Comunicación entre servicios y autenticación de usuario final con gestión de identidad y credenciales incorporada',
  ISTIO_GALLEY_DESC:
    'Componente de validación de configuración, ingestión, procesamiento y distribución de Istio',
  ISTIO_INGRESSGATEWAY_DESC:
    'Puerta de enlace para proporcionar acceso a la red externa',
  ISTIO_PILOT_DESC:
    'Proporciona descubrimiento de servicio para los sidecars de Envoy, capacidades de gestión de tráfico para enrutamiento inteligente',
  ISTIO_POLICY_DESC:
    'Admite controles de acceso, límites y cuotas para el enviado',
  ISTIO_SIDECAR_INJECTOR_DESC:
    'Inyecta automáticamente el sidecar para configurar el pod',
  ISTIO_TELEMETRY_DESC:
    'Proporciona a Envoy servicios de informes de datos y recopilación de registros.',
  JAEGER_COLLECTOR_DESC:
    'Recopila los datos del sidecar, el sidecar de istio es jaeger-agent',
  JAEGER_COLLECTOR_HEADLESS_DESC:
    'Recopila los datos del sidecar, el sidecar de istio es jaeger-agent',
  JAEGER_OPERATOR_DESC:
    'Responsable de crear el servicio jaeger y aplicarlo automáticamente al servicio jaeger cuando se actualiza',
  JAEGER_QUERY_DESC: 'Sirve los puntos finales API y un servicio de IU',
  KUBE_STATE_METRICS_DESC:
    'Escucha el servidor API de Kubernetes y genera métricas sobre el estado de los objetos.',
  NODE_EXPORTER_DESC:
    'Exportador de Prometheus para métricas de hardware y sistema operativo',
  PROMETHEUS_K8S_DESC:
    'Proporciona datos de monitoreo para nodos, workload y objetos API',
  PROMETHEUS_K8S_SYSTEM_DESC:
    'Proporciona datos de monitoreo para componentes de Kubernetes como etcd, coredns, kube-apiserver, kube-scheduler, kube-controller-manager',
  PROMETHEUS_OPERATED_DESC:
    'El servicio para todas las instancias de Prometheus solo para uso interno de Prometheus Operator',
  PROMETHEUS_OPERATOR_DESC: 'Operador para gestionar instancias de Prometheus',
  ELASTICSEARCH_LOGGING_DATA_DESC:
    'Proporciona almacenamiento, copia de seguridad, búsqueda y otros servicios de datos de Elasticsearch.',
  ELASTICSEARCH_LOGGING_DISCOVERY_DESC:
    'Proporciona servicios de gestión de clúster Elasticsearch.',
  LOGSIDECAR_INJECTOR_DESC:
    'Recoge contenedores Sidecar para los Pods especificados automáticamente inyectados en el registro de caída',
  CONTROLLER_MANAGER_METRICS_SERVICE_DESC:
    'Proporciona datos de monitoreo para el controlador s2i',
  KS_JENKINS_DESC:
    'Servicio principal de Jenkins, que proporciona funciones básicas de DevOps',
  KS_JENKINS_AGENT_DESC:
    'El servicio que utiliza el agente Jenkins se conecta al maestro Jenkins.',
  KS_SONARQUBE_POSTGRESQL_DESC:
    'El componente de análisis de calidad de código es la base de datos de SonarQube',
  KS_SONARQUBE_SONARQUBE_DESC: 'Servicio principal de SonarQube',
  S2IOPERATOR_DESC:
    'El controlador s2i proporciona una gestión completa del período de declaración para s2i',
  UC_JENKINS_UPDATE_CENTER_DESC:
    'Centro de actualización de Jenkins que proporciona paquetes de instalación para complementos de Jenkins',
  WEBHOOK_SERVER_SERVICE_DESC:
    'Proporciona valores predeterminados y valida el webhook para s2i',

  MYSQL_DESC:
    'An open-source database management system that allows users to manage relational databases. Data in these databases are structured or organized in the form of tables or columns, instead of being stored in one big storeroom',
  ETCD_DESC:
    'A reliable distributed data store that persistently stores the cluster configuration',
  TOWER_DESC: 'A tool for network connection between clusters through an agent',
  KUBE_SCHEDULER_SVC_DESC:
    'The scheduler of Kubernetes that attaches the Pod to an appropriate node',
  KUBE_CONTROLLER_MANAGER_SVC_DESC:
    'A daemon that embeds the core control loops shipped with Kubernetes',

  S2IOPERATOR_METRICS_SERVICE_DESC:
    'The s2i monitoring service component that provides basic monitoring data',
  MINIO_DESC:
    'An open source high performance object storage server, which is useful to store massive unstructured data',
  ALERTMANAGER_OPERATED_DESC:
    'The Alertmanager service that provides Alertmanager integrations, such as Prometheus',
  ALERTMANAGER_MAIN_DESC: 'The Alertmanager Web UI service',
  NOTIFICATION_MANAGER_SVC_DESC:
    'The Notification Manager service that provides the interface to send notifications, such as emails, WeChat and Slack messages',
  NOTIFICATION_MANAGER_CONTROLLER_METRICS_DESC:
    'A component that provides internal monitoring data services of Notification Manager Controller',
  HYPERPITRIX_DESC:
    'A component that provides the App Store service for Helm-based applications and lifecycle management of apps',
  JAEGER_OPERATOR_METRICS_DESC:
    'A component that provides the monitoring metrics of Operator',
  LOGSIDECAR_INJECTOR_ADMISSION_DESC:
    'A component that automatically injects sidecar containers for a specific pod for disk log collection',
  KS_EVENTS_ADMISSION_DESC:
    'A component that provides webhook authentication for Events rule management',
  KS_EVENTS_RULER_DESC:
    'The Events rule engine service that provides filtering and alerting features',
  KS_CONTROLLER_MANAGER_DESC:
    'A backend component that implements business logic. For example, it creates authorizations when a workspace is created and generates istio configurations for service strategies',
  KUBE_AUDITING_WEBHOOK_SVC_DESC:
    'A component used for auditing logs in terms of collection, comparison, persistence and alert',
  ADD_CLUSTER: 'Agregar clúster',
  'Add New Cluster': 'Agregar nuevo clúster',
  ALL_PROJECTS: 'Todos los proyectos',
  'Authorize the cluster to workspace':
    'Autorizar el clúster en el espacio de trabajo',
  AUTHORIZED: 'Autorizado',
  AVAILABLE_CLUSTERS: 'Clusters Disponibles',
  'Choose a provider': 'Elige un proveedor',
  'Click to Copy': 'Haga clic para copiar',
  CLUSTER_INFORMATION: 'Información del clúster',
  'Cluster initialization failed': 'La inicialización del clúster ha fallado',
  'Cluster List': 'Lista de clústeres',
  'Cluster Management': 'Gestión de clúster',
  'Cluster Member': 'Miembro del grupo',
  'Cluster Members': 'Miembros del grupo',
  CLUSTER_NAME: 'Nombre del clúster',
  'Cluster Roles': 'Roles de clúster',
  CLUSTER_SETTINGS: 'Configuraciones de clúster',
  CLUSTER_VISIBILITY_SCAP: 'Visibilidad de clúster',
  'Connection Method': 'Método de conexión',
  'Copy successfully': 'Copia realizada con éxito',
  'Custom Resources': 'CRDs',
  EDIT_VISIBILITY: 'Editar visibilidad',
  'Enter the project': 'Entrar al proyecto',
  'Go back': 'Atrás',
  'Host Cluster': 'Clúster de host',
  HOST_CLUSTER: 'Clúster de host',
  HOST_CLUSTER_TCAP: 'Host Cluster',
  HOST_CLUSTER_PL_TCAP: 'Host Clusters',
  'Host Clusters': 'Clústers de host',
  Import: 'Importar',
  'Import Kubernetes Cluster': 'Importar clúster de Kubernetes',
  'Invite members to the cluster': 'Invitar miembros al clúster',
  'Kubernetes Settings': 'Configuraciones de Kubernetes',
  KUBERNETES_STATUS: 'Estado de Kubernetes',
  KUBERNETES_VERSION: 'Versión de Kubernetes',
  KUBESPHERE_VERSION: 'Versión de KubeSphere',
  'Member Cluster': 'Mimbro del clúster',
  'Member Clusters': 'Miembor de los clústers',
  'Network Management': 'Network',
  'Network Policies': 'Políticas de red',
  'Network Topology': 'Topología de la red',
  'Node Types': 'Tipos de nodos',
  'Nodes Management': 'Gestión de nodos',
  'Not Ready': 'No está listo',
  'Please input cluster name': 'Por favor introduce el nombre del clúster',
  'Please input the kubesphere api server address of the cluster':
    'Introduce la dirección del servidor de la API de Kubesphere del clúster',
  'Please select or input a provider':
    'Por favor selecciona o introduce un proveedor',
  'Please select or input a tag':
    'Por favor selecciona o introduce una etiqueta',
  SCHEDULING_OPERATIONS: 'Horarios de programación',
  SCHEDULING_OPERATION: 'Scheduling operation',
  SCHEDULING_FAILURES: 'Programar pods fallidos',
  SCHEDULING_FAILURE: 'Scheduling failure',
  SELECT_CLUSTERS: 'Seleccionar clústeres',
  SET_PUBLIC_CLUSTER: 'Set as Public Cluster',
  STORAGE: 'Storage',
  SYSTEM_PROJECTS: 'Proyectos de Sistema',
  'The current cluster is public': 'El clúster actual es público.',
  Tools: 'Herramientas',
  Unauthorized: 'No autorizado',
  UNBIND: 'Desvincular',
  UNBIND_CLUSTER: 'Desvincular clúster',
  USER_PROJECTS: 'Proyectos de usuario',
  Validating: 'Validar',
  'Validation failed': 'Validación fallida',
  WAIT_FOR_CLUSTER: 'Esperando a que el clúster se añada',
  'How to Add': 'How to Add',
  'New Cluster': 'New Cluster',
  'Import Cluster': 'Import Cluster',
  'Cluster Basic Info': 'Cluster Basic Information',
  'Node Settings': 'Node Settings',
  'Please add at least one cluster node':
    'Please add at least one cluster node',
  NODE_ROLE_EMPTY_DESC: "Please specify the node's roles",
  'Add node to the cluster': 'Add node to the cluster',
  INTERNAL_IP_ADDRESS: 'Node Internal IP Address',
  PORT: 'Port',
  PORT_VALUE: 'Port: {value}',
  EXTERNAL_IP: 'External IP Address',
  USERNAME_AND_PASSWORD: 'Username and password',
  SSH_KEY_TCAP: 'SSH Key',
  SSH_KEY_SCAP: 'SSH key',
  SSH_AUTH_MODE: 'SSH Authentication Mode',
  'Kubernetes Cluster Settings': 'Kubernetes Cluster Settings',
  'Network Plugin': 'Network Plugin',
  'Max Pods': 'Max Pods',
  'Pods CIDR': 'Pods CIDR',
  'Service CIDR': 'Service CIDR',
  'Default Storage Plugin': 'Default Storage Plugin',
  'Private Registry Configuration': 'Private Registry Configuration',
  'etcd Backup': 'etcd Backup',
  'etcd Backup Dir': 'etcd Backup Dir',
  'etcd Backup Period': 'etcd Backup Period',
  'Keep Backup Number': 'Keep Backup Number',
  'KubeSphere Settings': 'KubeSphere Settings',
  INVALID_IP_DESC: 'Invalid IP address format.',
  CLUSTER_BASIC_INFO: 'Basic information',
  CLUSTER_INFO_TCAP: 'Cluster Information',

  NO_CLUSTER_TIP: 'Agregue al menos un clúster.',
  CLUSTER_CREATION_PROGRESS: 'Cluster Creation Progress',
  NO_CLUSTER_TIP_DESC:
    'Un clúster es un grupo de nodos (máquinas físicas o virtuales) que ejecutan Kubernetes, y la función de Kubesphere también depende de los nodos en el clúster.',
  ADD_NEW_CLUSTER_DESC: 'Agregar un nuevo clúster de Kubernetes',
  CHOOSE_PROVIDER_DESC:
    'KubeSphere proporciona una solución para implementar rápidamente los clústeres de Kubernetes entre los principales proveedores de servicios.',
  VISIBILITY_PARTIAL: 'Parcialmente visible',
  VISIBILITY_PUBLIC: 'Público',
  MULTI_CLUSTER: 'Multi-Clústers',
  IMPORT_CLUSTER_DESC: 'Importar un clúster de Kubernetes existente',
  SELECT_CLUSTERS_DESC:
    'Selecciona el clúster disponible en el espacio de trabajo.',
  CLUSTER_SETTINGS_DESC: 'Definir información de configuración del clúster',
  TAG: 'Etiqueta',
  CLUSTER_TAG_DESC: 'Select a tag to identify the purpose of the cluster.',
  CLUSTER_PROVIDER_DESC: 'Select the provider of the cluster infrastructure.',
  CLUSTER_CONNECT_METHOD_DESC:
    'Conéctese directamente al clúster o use un agente',
  CONNTECT_DIRECT: 'Conexión directa al clúster de Kubernetes',
  CONNTECT_PROXY: 'Agente de conexión de clúster',
  WAIT_FOR_CLUSTER_DESC:
    'Actualmente no hay nodos disponibles. Puedes agregar el siguiente archivo de configuración para habilitar el clúster.',
  CLUSTER_AGENT_TIP_1:
    '1. Cree un archivo llamado agent.yaml en el clúster de destino a través de SSH',
  CLUSTER_AGENT_TIP_2:
    '2. Copie el siguiente archivo de configuración en agent.yaml',
  CLUSTER_AGENT_TIP_3:
    '3. Ejecutar en la línea de comando <span class="code">kubectl create -f agent.yaml</span>',
  CLUSTER_AGENT_TIP_3_DESC:
    'Después de ejecutar el comando, espere la actualización del estado del clúster.',
  CLUSTER_CONDITIONS: 'Condiciones de clúster',
  CLUSTER_BASE_INFO_DESC:
    'Basic information provides an overview of the cluster. You can view and edit cluster information.',
  INVITE_CLUSTER_MEMBER_DESC:
    'Puedes invitar a nuevos miembros a este clúster.',
  CLUSTER_API_SERVER_TITLE: 'Servidor API Kubesphere para agregar al clúster',
  CLUSTER_API_SERVER_DESC:
    'Debes indicar la dirección del servidor API de KubeSphere para agregarla al clúster',
  INPUT_KUBECONFIG: 'Complete el KubeConfig del clúster de destino',
  CLUSTER_DIRECT_IMPORT_TIP:
    'La interfaz de control de múltiples clústeres de KubeSphere se conecta a los clústeres importados a través del kubeconfig proporcionado. Para este método, el clúster actual debe poder acceder directamente a los clústeres que se importarán a través de la dirección del servidor en kubeconfig. </br></br> Este método generalmente se aplica a las siguientes condiciones: </br> 1. El clúster actual y los clústeres que se importarán están en la misma red interna. </br> 2. La red tanto del clúster actual como de los clústeres que se importarán está conectada a través de VPN u otras tecnologías (por ejemplo, Túneles). </br> 3. Se puedes acceder a la dirección del servidor en kubeconfig a través de la red pública.',
  CLUSTER_AGENT_IMPORT_TIP:
    'La interfaz de control de KubeSphere se conecta a los clústeres que se importarán a través de un proxy. La interfaz de control ejecuta un servicio de proxy público, que está conectado a un componente de cliente creado por clústeres para importar. Por lo tanto, se crea un proxy de reserva. Para este método, la interfaz de control y los clústeres que se van a importar no necesitan estar en la misma red. La dirección de apiserver de los clústeres a importar tampoco necesita exponerse. Sin embargo, el rendimiento de la red puedes verse afectado. </br></br> Este método generalmente se aplica a las siguientes condiciones: </br> 1. El clúster actual y los clústeres que se importarán no están en la misma red. <br/> 2. La red tanto del clúster actual como de los clústeres que se van a importar no se puedes conectar a través de VPN u otras tecnologías (por ejemplo, Túneles). <br/> 3. Se pueden aceptar deficiencias de rendimiento de la red dentro de los clústeres.',
  CLUSTER_AGENT_TITLE:
    'Agregue el clúster en función del agente proporcionado en el clúster.',
  CLUSTER_AGENT_DESC:
    'Se debe establecer un agente correspondiente en el clúster.',
  HOW_TO_GET_KUBECONFIG: '¿Cómo obtener KubeConfig?',
  UNBIND_CLUSTER_DESC:
    'Una vez que el clúster no está vinculado, KubeSphere no podrá administrar el clúster y los recursos de Kubernetes dentro del clúster no se eliminarán.',
  SURE_TO_UNBIND_CLUSTER: 'I understand the risks of this operation',
  AUTHORIZE_CLUSTER_TO_WORKSPACE_DESC:
    'Los clústeres se pueden asignar a espacios de trabajo mediante autorización.',
  PUBLIC_CLUSTER_DESC:
    'Un clúster público significa que todos los usuarios de la plataforma pueden acceder al clúster, en el que pueden crear y programar recursos.',
  CLUSTER_AUTHORIZATION_DESC:
    'Los clústeres se pueden asignar a espacios de trabajo mediante autorización.',
  CLUSTER_VISIBILITY_Q1: 'How do I authorize a cluster to specific workspaces?',
  CLUSTER_VISIBILITY_A1:
    'You can assign a cluster to specific workspaces by clicking Edit Visibility.',
  CLUSTER_VISIBILITY_Q2: '¿Qué es un clúster público?',
  CLUSTER_VISIBILITY_A2:
    'Un clúster público significa que todos los usuarios de la plataforma pueden acceder al clúster, en el que pueden crear y programar recursos.',
  SELECT_HOST_CLUSTER_WARNING:
    'The visibility of the multi-cluster environment will decrease if the host cluster is overloaded. It is not recommended to create resources on the host cluster.',
  HOST_CLUSTER_VISIBILITY_WARNING:
    'The visibility of the multi-cluster environment will decrease if the host cluster is overloaded. Exercise caution when assigning the host cluster to workspaces.',
  REMOVE_WORKSPACE_CONFIRM_TITLE: 'Remove Authorization',
  REMOVE_WORKSPACE_CONFIRM_DESC:
    'Enter the name of the workspace(s) <strong>{resource}</strong> to confirm that you understand the risks of this operation.',

  SELECT_ADD_CLUSTER_METHOD: 'Choose how to add a cluster',
  SELECT_ADD_CLUSTER_METHOD_DESC:
    'Support for adding new clusters and importing existing clusters.',

  NEW_CLUSTER_DESC: 'add a new Kubernetes cluster',
  CLUSTER_NODE_SETTINGS_DESC: 'add the nodes for the cluster',
  NODE_INTERNAL_IP_DESC:
    'The internal IP address for the connection between cluster nodes.',
  EDGENODE_INTERNAL_IP_DESC:
    'The internal IP address for the connection between cluster nodes.',
  NODE_INTERNAL_IP_EMPTY_DESC:
    'Please set the IP address of the node in the KubeSphere cluster.',
  EDGENODE_INTERNAL_IP_EMPTY_DESC:
    'Please set the IP address of the edge node in the KubeSphere cluster.',
  NODE_ROLE_DESC:
    'The number of master nodes needs to be 1 or 3, and the number of woker nodes must be at least 1.',
  NODE_EXTERNAL_IP_DESC:
    'Enter the node IP address and port number used for SSH login.',
  NODE_EXTERNAL_IP_EMPTY_DESC:
    'Please enter the node IP address and port number used for SSH login.',
  SSH_AUTH_MODE_DESC: 'Select an SSH authentication mode.',
  NODE_USERNAME_DESC: 'Set the username used for SSH login.',
  NODE_PASSWORD_DESC: 'Set the password used for SSH login.',

  K8S_CLUSTER_SETTINGS_DESC: 'Initially configure the new Kubernetes cluster.',

  CLUSTER_MAX_PODS_DESC:
    'maxPods is the number of pods that can run on this Kubelet. [Default: 110].',

  K8S_NETWORK_PLUGIN_CALICO:
    'Calico is a pure 3-layer network solution that seamlessly integrates the IaaS cloud architecture and can provide IP communication between VMs, containers, and bare metal.',
  K8S_NETWORK_PLUGIN_FLANNEL:
    'Flannel allows Docker containers created by different node hosts in the cluster to have a unique virtual IP address in the entire cluster',
  K8S_NETWORK_PLUGIN_CILIUM:
    'eBPF-based Networking, Security, and Observability.',

  KUBE_PODS_CIDR_DESC:
    "The Pod running on the node allocates IP addresses from the node's Pod CIDR range.F",
  KUBE_SERVICE_CIDR_DESC: 'IP address range assigned to the service.',

  CLUSTER_COMPONENTS_DESC: 'Customize the service components of the cluster.',

  CLUSTER_ADVANCED_SETTINGS_DESC:
    'You can configure the services you need according to your needs.',
  CLUSTER_PRIVATE_REGISTRY_DESC:
    'Configure a private registry for the cluster. The cluster will use this registry to pull all the required mirrors.',

  CLUSTER_CONTROLPLANE_ENDPOINT: 'Cluster Access EndPoint',
  CLUSTER_CONTROLPLANE_ENDPOINT_DESC:
    'Directly communicate with the cluster through the authorized cluster access address, and generate kubeconfig for the cluster to access the cluster.',
  CLUSTER_ETCD_BACKUP_DESC: 'Make regular backup settings for etcd',
  CLUSTER_ETCD_BACKUP_DIR_DESC:
    'The location to store etcd backups files on etcd host machines.',
  CLUSTER_ETCD_BACKUP_PERIOD_DESC:
    'Period of running backup etcd job, the unit is minutes.',
  CLUSTER_ETCD_BACKUP_NUMBER_DESC: 'How many backup replicas to keep.',
  CLUSTER_KUBESPHERE_SETTINGS_DESC: 'Customized settings for KubeSphere',

  CREATING_CLUSTER: 'Cluster is being created',
  CREATING_CLUSTER_DESC:
    'The current cluster is being created, and there are no nodes available for the time being.',
  COPY_SUCCESSFUL: 'Copied successfully.',
  CLUSTER_INIT_FAILED: 'Cluster initialization failed.',
  INIT_NODES: 'Init Nodes',
  PULL_IMAGES: 'Pull Images',
  INIT_ETCD_CLUSTER: 'Init etcd Cluster',
  INIT_CONTROL_PLANE: 'Init Control Plane',
  JOIN_NODES: 'Join Nodes',
  INSTALL_ADDONS: 'Install Addons',
  FETCHING_LOGS: `Fetching logs...`,
  CURRENT_STEP: 'Current step: {step}',

  MASTER_NODE_COUNT_TIP: 'The number of Master nodes needs to be 1 or 3',
  WORKER_NODE_COUNT_TIP: 'The number of Worker nodes is at least 1',

  CLUSTER_CREATION_PROGRESS_TIP:
    'According to the size of the created cluster and the difference in network connection, it takes about 30 to 60 minutes to create the entire cluster. ',

  CLUSTER_UPGRADE_REQUIRED:
    'The cluster version does not support this function. Please upgrade the cluster to {version} or later.',
  MEMBER_CLUSTER_UPGRADE_TIP:
    'Member clusters with versions earlier than {version} do not support this function. Please upgrade the member clusters to {version} or later.',

  // Unbind Cluster
  UNBIND_CLUSTER_Q: 'Unbind Cluster',

  // Cluster Visibility
  NODE: 'Node',
  ADMINISTRATOR: 'Administrator',
  CLUSTER_VISIBILITY: 'Cluster Visibility',
  CLUSTER_VISIBILITY_DESC:
    'Cluster visibility controls the cluster authorization to workspaces. After a cluster is authorized to workspaces, you can view and manage the cluster resources in the workspaces.',
  EDIT_VISIBILITY_DESC: 'Edit the cluster visibility in workspaces.',
  CLUSTER_VISIBILITY_REMOVE_WARNING:
    'After the authorization for a workspace to use the cluster is removed, all resources of the workspace on the cluster will be deleted.',
  UNAUTHORIZED: 'Unauthorized',
  AUDITING: 'Auditing',
  REMOVE_WORKSPACE_CONFIRM_SI:
    'Enter the workspace name <strong>{resource}</strong> to confirm that you understand the risks of this operation.',
  REMOVE_WORKSPACE_CONFIRM_PL:
    'Enter the workspace names <strong>{resource}</strong> to confirm that you understand the risks of this operation.',
    BASIC_INFORMATION: 'Información básica',
  NAME: 'Nombre',
  RECORD: 'Record',
  NAME_VALUE: 'Nombre: {value}',
  ROLE: 'Role',
  ROLE_PL: 'Roles',
  CPU_USAGE: 'Uso de CPU',
  CPU_USAGE_TIME: 'CPU Usage ({time})',
  MEMORY_USAGE: 'Uso de memoria',
  MAXIMUM_PODS: 'Maximum Pods',
  MAXIMUM_PODS_SCAP: 'Maximum Pods',
  MEMORY_USAGE_TIME: 'Memory Usage ({time})',
  POD_PL: 'Pods',
  NUMBER_OF_PODS: 'Number of Pods',
  POD_LOW: 'Pod',
  LEARN_MORE: 'Aprende más',
  DELETE: 'Eliminar',
  DELETE_PROJECT: 'Delete Project',
  LOGS: 'Registros',
  NO_DATA: 'Sin datos',
  NO_DATA_SCAP: 'No data',
  REFRESH: 'Refrescar',
  DOWNLOAD: 'Descargar',
  NO_RESOURCE: 'No se encuentra {resource}.',
  LOG_DATA_LOW: 'Datos de registro',
  CANCEL: 'Cancelar',
  USERNAME: 'Nombre de usuario',
  PASSWORD: 'Contraseña',
  REPLICA_COUNT: 'Replicas',
  REPLICA_COUNT_LOW: 'replicas',
  REPLICA: 'Replica',
  REPLICA_PL: 'Replicas',
  CREATE_NAME: 'Crear {name}',
  KEY: 'Key',
  KEY_EQ_VALUE: 'Key=Value',
  VALUE: 'Value',
  POLICY: 'Policy',
  DROP: 'Drop',
  TARGET: 'Target',
  STRATEGY: 'Strategy',
  STRATEGY_PL: 'Strategies',

  // Cluster Node List
  MASTER: 'Master',
  WORKER: 'Worker',
  CONTROL_PLANE: 'Control plane',
  AGENT: 'Agent',
  EDGE: 'Edge node',
  EDGE_NODE: 'Edge Node',
  ALLOCATED_CPU: 'CPU reservada',
  ALLOCATED_MEMORY: 'Memoria reservada',
  CPU_LIMIT_SI: 'Límite de recursos: {core} core ({percent})',
  CPU_LIMIT_PL: 'Límite de recursos: {core} cores ({percent})',
  CPU_REQUEST_SI: '{core} core ({percent})',
  CPU_REQUEST_PL: '{core} cores ({percent})',
  CORE: 'core',
  CORE_PL: 'cores',
  CPU_CORE_PERCENT_SI: '{core} core ({percent})',
  CPU_CORE_PERCENT_PL: '{core} cores ({percent})',
  MEMORY_GIB_PERCENT: '{gib} GiB ({percent})',
  MEMORY_LIMIT_VALUE: 'Límite de recursos: {gib} GiB ({percent})',
  MEMORY_REQUEST_VALUE: '{gib} GiB ({percent})',
  TITLE_UNIT: '{title} ({unit})',
  RESOURCE_REQUEST: 'Solicitud de recursos',
  CORDON: 'Cordon',
  UNCORDON: 'Uncordon',
  VIEW_LOG: 'Mostrar log',

  About: 'Acerca de',
  'Access Control': 'Control de acceso',
  ACCESS_CONTROL: 'Control de acceso',
  Account: 'Cuenta',
  active: 'activo',
  Active: 'Activo',
  ACTIVITY: 'Actividad',
  RUN_RECORDS: 'Run Records',
  VIEW_RECORDS: 'View Records',
  Add: 'Añadir',
  ADD: 'Añadir',
  ADD_STRATEGY: 'Add Strategy',
  'Add ': 'Añadir',
  'Add Param': 'Agregar parámetro',
  ADD_PARAMETER: 'Agregar parámetro',
  'Add Task': 'Agregar tarea',
  'Advanced Settings': 'Ajustes avanzados',
  ADVANCED_SETTINGS: 'Ajustes avanzados',
  ADDED_SUCCESS_DESC: 'Added successfully.',
  Agent: 'Agente',
  All: 'Todos',
  'All Repositories': 'Todos los repositorios',
  'Analysis Tools': 'Herramientas de análisis',
  'API Documents': 'Documentos API',
  'App Templates': 'Plantillas de aplicaciones',
  Application: 'Aplicación',
  APPLICATION: 'Aplicación',
  APPLICATION_WORKLOAD_PL: 'Workload de aplicaciones',
  APPLICATION_WORKLOADS: 'Workload de aplicaciones',
  Apply: 'Aplicar',
  LAST_UPDATE_TIME: 'Last update time',
  auditing: 'auditando',
  Auditing: 'Auditando',
  'Auditing Operating': 'Auditoría Operativa',
  AUTHOR: 'Author',
  'Back To List': 'Volver a la lista',
  'Basic Info': 'Información básica',
  'Basic Information': 'Información básica',
  body: 'cuerpo',
  Cancel: 'Cancelar',
  'Canceled Successfully': 'Cancelado con éxito',
  CATEGORY: 'Categoría',
  Ceased: 'Cesado',
  Certificate: 'Certificado',
  'clear search conditions': 'borrar filtros',
  CLOSE: 'Cerca',
  CLUSTER_COUNT: 'Cluster',
  Collapse: 'Colapsar',
  COMMAND: 'Comando',
  COMMANDS: 'Comando',
  completed: 'finalizado',
  Configuration: 'Configuración',
  CONFIGURATION_CENTER: 'Configuración',
  STORAGE_MANAGEMENT: 'Storage Management',
  CONFIGURATION: 'Configuration',
  Confirm: 'Confirmar',
  Container: 'Contenedor',
  Containers: 'Contenedores',
  CONTRIBUTORS: 'Contribuidores',
  CONTAINER_PL: 'Contenedores',
  Contributors: 'Contribuidores',
  'Control Tools': 'Herramientas de control',
  Cordon: 'Cordon',
  Count: 'Contar',
  Create: 'Crear',
  CREATE_SUCCESSFUL: 'Creado con éxito',
  CREATION_TIME_TCAP: 'Fecha de creación',
  CREATED_BY: 'Created By',
  CREATOR: 'Creador',
  Current: 'Actual',
  Custom: 'Personalizado',
  CUSTOM_COLUMNS: 'Columnas personalizadas',
  'Data Sources': 'Fuentes de datos',
  Days: 'Días',
  DEFAULT_VALUE: 'Valor por defecto',
  deleted: 'eliminado',
  Deleted: 'Eliminado',
  DELETE_SUCCESSFUL: 'Eliminado con éxito.',
  description: 'descripción',
  DESCRIPTION: 'Descripción',
  DESELECT: 'Deseleccionar',
  Destroy: 'Destruir',
  Detail: 'Detalle',
  'Developer Community': 'Comunidad de desarrolladores',
  Disable: 'Deshabilitar',
  Disabled: 'Deshabilitado',
  disabled: 'deshabilitado',
  Display: 'Visualizar',
  'Display all': 'Visualizar todo',
  'Display selected': 'Visualizar seleccionado',
  'Do HH:mm': 'HH:mm',
  domain: 'dominio',
  Domain: 'Dominio',
  Download: 'Descargar',
  Downstream: 'Downstream',
  Drain: 'Drenar',
  Draining: 'Drenando',
  KEY_EXIST_DESC: 'The key already exists.',
  DUPLICATE_KEYS: 'Calves duplicadas',
  EARLIEST_START_TIME: 'Hora de inicio más temprana',
  EDIT: 'Editar',
  EDIT_TITLE: 'Edit {title}',
  'Edit ': 'Editar',
  EDIT_INFORMATION: 'Editar información',
  EDIT_MODE: 'Modo de edición',
  'eg.': 'p.ej.',
  email: 'correo electrónico',
  EMPTY_KEY_DESC: 'Please enter a key.',
  EMPTY_KEY: 'Claves vacías',
  Enable: 'Habilitar',
  Enabled: 'Habilitado',
  END_TIME: 'Hora de finalización',
  ENABLED: 'Habilitado',
  'End Time': 'Hora de finalización',
  SEARCH: 'Introduce las condiciones para filtrar',
  Error: 'Error',
  'Error Tips': 'Consejos de error',
  TIPS: 'Tips',
  event: 'evento',
  'Event metadata': 'Metadatos de eventos',
  EVENT_SEARCH: 'Búsqueda de eventos',
  EVENT_DESC: 'EVENT_DESC',
  Events: 'Eventos',
  events: 'eventos',
  EVERYONE: 'Todo el mundo',
  exists: 'existe',
  Failed: 'Ha fallado',
  failed: 'ha fallado',
  False: 'Falso',
  false: 'falso',
  filename: 'nombre del archivo',
  FINISHED: 'Finalizado',
  FOLD: 'Plegar',
  GRAYSCALE_RELEASE: 'Grayscale Release',
  'half month': 'medio mes',
  'half month ago': 'hace medio mes',
  HEALTH_CHECK: 'Health check',
  HEALTH_STATUS: 'Health Status',
  HEALTH_STATUS_SCAP: 'Health status',
  Healthy: 'Healthy',
  healthy: 'healthy',
  Hidden: 'Oculto',
  History: 'Historia',
  HOMEPAGE: 'Página principal',
  Hours: 'Horas',
  Images: 'Imágenes',
  IN: 'En',
  Inbound: 'Entrante',
  Infrastructure: 'Infraestructura',
  EXTERNAL_ACCESS: 'External Access',
  CERTIFICATE: 'Certificate',
  CERTIFICATE_VALUE: 'Certificate: {value}',
  'is updating': 'está actualizando',
  key: 'clave',
  LABEL_PL: 'Labels',
  Language: 'Idioma',
  LATEST_VERSION: 'Última versión',
  LATEST_VERSION_SCAP: 'Última versión',
  'Learn more': 'Aprende más',
  'Remaining Quota': 'Cuota restante',
  level: 'nivel',
  LEVEL: 'Nivel',
  SERVICE_LIST: 'Lista',
  LOAD_MORE: 'Cargar más',
  'Load more': 'Cargar más',
  LOADING: 'Cargando',
  'Log Out': 'Cerrar sesión',
  LOG_SEARCH: 'Búsqueda de logs',
  LOGGING: 'Logging',
  RESOURCE_EVENTS: 'Resource Events',
  AUDIT_LOGS: 'Audit Logs',
  logging: 'logging',
  MAINTAINER_COLON: 'Mantenedores',
  MEMORY: 'Memoria',
  memory: 'memoria',
  message: 'mensaje',
  MESSAGE: 'Mensaje',
  MicroSeconds: 'Microsegundos',
  MilliSeconds: 'Milisegundos',
  Minutes: 'Minutos',
  'MMMM Do YYYY': 'MMMM Do YYYY',
  MONITORING_AND_ALERTING: 'Monitorización y alertas',
  'MONITORING_&_ALERTING': 'Monitorización y alertas',
  Monitors: 'Monitores',
  More: 'Más',
  LATEST_START_TIME: 'Hora de inicio más reciente',
  MULTI_CLUSTER_DEPLOYMENT: 'Despliegue de multi-cluster',
  name: 'nombre',
  NAME_VALIDATION_FAILED:
    'Evite de crear nombre con el kube- del prefijo, puesto que es reservado para los namespaces del sistema de Kubernetes',
  NAME_EXIST_DESC: 'Nombre existe',
  NanoSeconds: 'NanoSeconds',
  New: 'Nuevo',
  NEXT: 'Siguiente',
  NO: 'No',
  'No Available Resource': 'No hay recursos disponibles',
  No: 'No',
  NO_AVAILABLE_RESOURCE: 'No hay recursos disponibles',
  'No Data': 'Sin datos',

  NO_PARAMETERS: 'Sin parámetros',
  'No Relevant Data': 'Sin datos relevantes',
  NO_RELEVANT_DATA: 'No Relavant Data Found',
  NO_MATCHING_RESULT_FOUND:
    'Aún no se han encontrado recursos que coincidan con el filtro',
  SN_NO: 'Num.',
  NOBODY: 'Nadie',
  'Node Selector': 'Selector de nodos',
  NONE: 'Ninguno',
  'Not Enabled': 'No disponible',
  NOT_MOUNT: 'No montado',
  NOT_RUNNING_YET: 'Aún no está en ejecución',
  NOT_SET: 'Sin definir',
  'Number of events': 'Cantidad de eventos',
  'Official Document': 'Documento oficial',
  OK: 'Okay',
  'Operation Account': 'Cuenta de operación',
  OPERATION_DETAILS: 'Detalles de la operación',
  OPTIONAL: 'Opcional',
  Optional: 'Opcional',
  or: 'o',
  Others: 'Otros',
  OUT: 'Fuera',
  Outbound: 'Saliente',
  Overview: 'Visión global',
  OVERVIEW: 'Visión global',
  'Params Configuration': 'Configuración de parámetros',
  password: 'contraseña',
  Path: 'Ruta',
  PAUSE: 'Pausa',
  Password: 'Contraseña',
  PATH: 'Ruta',
  HOST_PATH: 'Host Path',
  Pause: 'Pausa',
  PAUSED: 'Pausado',
  Pending: 'Pendiente',
  pending: 'pendiente',
  Platform: 'Plataforma',
  platform: 'plataforma',
  PLATFORM_DESCRIPTION: 'Descripción de la plataforma',
  PLATFORM_INFORMATION: 'Información de la plataforma',
  PLATFORM_RESOURCES: 'Platform Resource',
  PLATFORM_TITLE: 'Título de plataforma',
  PLATFORM_ADDRESS: 'Platform address',
  PLATFORM_VERSION: 'Versión de plataforma',
  PLATFORM_LEVEL_ACCESS_CONTROL: 'Control de acceso a nivel de plataforma',
  'Filter by keyword': 'Introduce una palabra clave para filtrar',
  'Search by keyword': 'Introduce una palabra clave para buscar',
  SEARCH_BY_NAME: 'Introduce un nombre para buscar',
  NAME_EMPTY_DESC: 'Introduce el nombre',
  PARAMETER_NAME_EMPTY_DESC: 'Please set the parameter name.',
  'Please input password': 'Introduce la contraseña',
  ENTER_INTEGER_OR_PERCENTAGE: 'Introduce el valor',
  MAX_UNAVAILABLE_EMPTY:
    'Please set the maximum number of unavailable Pod replicas allowed during the update process.',
  MAX_EXTRA_EMPTY:
    'Please set the maximum number of extra Pod replicas allowed during the update process.',
  'Please input value': 'Introduce el valor',
  'Please select project': 'Selecciona un proyecto',
  VERSION_EMPTY_DESC: 'Selecciona una versión',
  'Please select workspace': 'Selecciona un espacio de trabajo',
  POD: 'Pod',
  'Pod Template': 'Plantilla de Pod',
  Pods: 'Pods',
  PORT_SETTINGS: 'Configuraciones de puerto',
  Preferences: 'Preferencias',
  PREVIOUS: 'Anterior',
  PROJECT: 'Proyecto',
  WORKBENCH_PROJECT: 'Project',
  WORKBENCH_WORKSPACE: 'Workspace',
  WORKBENCH_DEVOPS: 'DevOps project',
  WORKBENCH_MULTI_CLUSTER_PROJECT: 'Multi-cluster project',
  WORKBENCH_CLUSTER: 'Cluster',
  PROJECT_EMPTY_DESC: 'Please create a project.',
  PROJECT_SETTINGS: 'Configuraciones del proyecto',
  PROTOCOL: 'Protocolo',
  PROTOCOL_VALUE: 'Protocolo: {value}',
  'Quick Support': 'Soporte rápido',
  READ: 'Lectura',
  ReadAndWrite: 'Lectura y escritura',
  ReadOnly: 'Solo lectura',
  Read: 'Lectura',
  READ_AND_WRITE: 'Lectura y escritura',
  READ_ONLY: 'Solo lectura',
  READ_ONLY_LOW: 'read-only',
  READ_AND_WRITE_LOW: 'read and write',
  Ready: 'Listo',
  READY_VALUE: 'Ready: {readyCount}/{total}',
  STATUS_VALUE: 'Status: {value}',
  REASON_VALUE: 'Reason: {value}',
  MESSAGE_VALUE: 'Message: {value}',
  UPDATED_AT_VALUE: 'Updated At: {value}',
  UPDATED_AGO: 'Updated {value}',
  reason: 'motivo',
  REASON: 'Motivo',
  'Recent Visit': 'Visita reciente',
  Reason: 'Motivo',
  RECENT_ACCESS: 'Visita reciente',
  Record: 'Registro',
  SERIAL_NUMBER: 'Serial number',
  Records: 'Registros',
  Refresh: 'Refrescar',
  refresh: 'refrescar',
  'refresh data': 'refresh data',
  'Related resources': 'Recursos Relacionados',
  Remain: 'Permanecer',
  REMOVE_USER_TIP: 'REMOVE_USER_TIP',
  REQUIRED: 'requerido',
  RESELECT: 'Seleccionar de nuevo',
  RESET: 'Reiniciar',
  'Resource List': 'Lista de recursos',
  Resource: 'Recurso',
  Restart: 'Reiniciar',
  Running: 'En ejecución',
  RUNNING: 'En ejecución',
  IMAGE_BUILDING_FAILED: 'Image building failed',
  IMAGE_BUILDING_SUCCESSFUL: 'Image building successful',
  BUILDING_IMAGE: 'Building image',
  RUNNING_TIME: 'Tiempo de ejecución',
  Scheme: 'Esquema',
  'Search By Condition': 'Buscar por condición',
  'search condition': 'condición de búsqueda',
  'Search tips': 'Consejos de búsqueda',
  Seconds: 'Segundos',
  secret: 'secret',
  secret_text: 'texto secreto',
  SELECT: 'Seleccionar',
  CREATE_BY_YAML_DESC: 'Customize the settings in the YAML file.',
  'Select All': 'Seleccionar todo',
  SELECT_ALL: 'Seleccionar todo',
  KEY_IN_RESOURCE: 'Seleccionar clave',
  Service: 'Servicio',
  SERVICE: 'Servicio',
  SERVICE_VALUE: 'Servicio: {value}',
  SERVICE_PL: 'Servicio',
  NUMBER_OF_SERVICES: 'Number of Services',
  SERVICE_LOW: 'Service',
  'Service Components': 'Componentes',
  SYSTEM_COMPONENT_PL: 'Componentes',
  SERVICE_SETTINGS: 'Configuraciones de servicio',
  'Session timeout or this account is logged in elsewhere, please login again':
    'Timeout de sesión o se ha iniciado sesión con esta cuenta en otro lugar, vuelve a iniciar sesión',
  Set: 'Set',
  IN_PROGRESS: 'Ajuste',
  CURRENT: 'Current',
  CURRENT_VALUE: 'Current: {value}',
  TARGET_CURRENT: '{target} (Current: {current})',
  Settings: 'Configuraciones',
  SIZE: 'Tamaño',
  Source: 'Fuente',
  'Source IP': 'IP de origen',
  STAGE: 'Stage',
  START: 'Inicio',
  START_TIME: 'Hora de inicio',
  START_TIME_SCAP: 'Start time',
  STATUS: 'Estado',
  status: 'estado',
  'Status Code': 'Código de estado',
  stopped: 'detenido',
  Stopped: 'Detenido',
  STORAGE_DEVICES: 'Dispositivo de almacenamiento',
  Strategy: 'Estrategia',
  Subresource: 'Sub-recurso',
  Succeeded: 'Finalizado con éxito',
  Success: 'Éxito',
  Successful: 'Éxito',
  successful: 'éxito',
  'Sure to delete': 'Seguro que deseas eliminar',
  'Sure to remove': 'Seguro que deseas eliminar',
  Suspend: 'Suspender',
  Tag: 'Tag',
  Task: 'Tarea',
  STEPS_COMPLETE_TOTAL: 'Steps: {complete}/{total}',
  TERMINAL: 'Terminal',
  terminated: 'terminado',
  THIRD_PARTY_TOOLS: 'Herramientas de terceros',
  PARAM_REQUIRED: 'Este parámetro es obligatorio',
  time: 'hora',
  SAMPLING_INTERVAL: 'Sampling Interval',
  TIME_RANGE: 'Intervalo de tiempo',
  TIME_RANGE_SCAP: 'Time range',
  To: 'A',
  to: 'a',
  IGNORE_AND_RETRY: 'para volver a intentarlo',
  TOOLBOX: 'Caja de herramientas',
  Total: 'Total',
  TOTAL: 'Total',
  total: 'total',
  true: 'true',
  True: 'True',
  TRUE: 'True',
  FALSE: 'False',
  TYPE: 'Tipo',
  TYPE_VALUE: 'Type: {value}',
  TYPE_CONFIGMAP: 'Volume type: ConfigMap',
  TYPE_SECRET: 'Volume type: Secret',
  TYPE_EMPTYDIR: 'Volume type: emptyDir',
  TYPE_HOSTPATH: 'Volume type: HostPath',
  type: 'tipo',
  Uncordon: 'Uncordon',
  Undo: 'Deshacer',
  Unfinished: 'No terminado',
  unfinished: 'no terminado',
  UNFOLD: 'Desplegar',
  Unit: 'Unidad',
  unit: 'unidad',
  unknown: 'desconocido',
  Unknown: 'Desconocido',
  'Unknown User': 'Usuario desconocido',
  Unresolved: 'No solucionado',
  Update: 'Actualizar',
  'Updated at': 'Actualizado en',
  'Updated just now': 'Actualizado justo ahora',
  UPDATE_SUCCESSFUL: 'Updated successfully.',
  UPDATE_TIME_TCAP: 'Tiempo de actualización',
  updating: 'actualización',
  Updating: 'Actualización',
  Upgrading: 'Upgrading',
  Upstream: 'Upstream',
  Used: 'En uso',
  USED: 'En uso',
  'User Guides': 'Guías de usuario',
  'User Manual': 'Manual de usuario',
  'User Settings': 'Ajustes de usuario',
  Username: 'Nombre de usuario',
  Value: 'Valor',
  value: 'valor',
  verb: 'verb',
  VERSION: 'Versión',
  'Version Info': 'Información de la versión',
  View: 'Ver',
  Visit: 'Visitar',
  'Volume Settings': 'Configuraciones de volumen',
  'Volume Snapshot': 'Snapshots de volumen',
  VOLUME_TEMPLATES: 'Plantillas de volumen',
  VolumeSnapshot: 'Volume Snapshot',
  VOLUME_SNAPSHOT: 'VolumeSnapshot',
  VOLUME_SNAPSHOT_PL: 'Volume Snapshots',
  VOLUME_SNAPSHOT_LOW: 'volume snapshot',
  waiting: 'esperando',
  warning: 'advertencia',
  Warning: 'Advertencia',
  Workbench: 'Información global',
  'workspaces found': 'espacios de trabajo encontrados',
  WRITE: 'Escribir',
  YES: 'Sí',
  'You can try to': 'Puedes intentar',
  'YYYY-MM-DD': 'AAAA-MM-DD',
  _all: 'Todos los proyectos',
  NUM_UNIT: '',
  DETAILS: 'Detalles',
  NODES: 'Nodos',
  NAME_DESC:
    'Solo puede contener letras minúsculas, números y guiones ("-"), y debe comenzar con una letra minúscula y terminar con un número o letra minúscula. La longitud máxima de carácteres se establece en 63.',
  LONG_NAME_DESC:
    'Solo puede contener letras minúsculas, números y guiones ("-"), y debe comenzar con una letra minúscula y terminar con un número o letra minúscula. La longitud máxima de carácteres se establece en 253.',
  NAME_TOO_LONG: 'La longitud máxima de carácteres se establece en 63.',
  LONG_NAME_TOO_LONG: 'La longitud máxima de carácteres se establece en 253.',
  DESCRIPTION_DESC:
    'La descripción se agregará al elemento como un comentario y se mostrará en los detalles de la aplicación. La descripción está limitada a 1000 caracteres.',
  PROJECT_DESC:
    'Los proyectos se agruparán por sus recursos, que puedes ver y administrar por proyecto.',
  MULTI_CLUSTER_PROJECT_EMPTY_DESC:
    'Los proyectos se agruparán por sus recursos, que puedes ver y administrar por proyecto.',
  DELETE_TITLE_SI: '¿Seguro que deseas eliminar {type}?',
  DELETE_TITLE_PL: '¿Seguro que deseas eliminar {type}?',
  DELETE_SERVICE: 'Delete Service',
  DELETE_MULTIPLE_SERVICES: 'Delete Multiple Services',
  DELETE_WORKLOAD: 'Delete Workload',
  DELETE_MULTIPLE_WORKLOADS: 'Delete Multiple Workloads',
  DELETE_DESC:
    '¿Está seguro que deseas eliminar el {type} <strong>{resource}</strong> ? {type} no se podrá recuperar después de eliminarlo.',
  DELETE_RESOURCE_TYPE_DESC:
    'Introduce el {type} nombre <strong>{resource}</strong> para asegurarte de comprender los riesgos asociados con la operación.',
  DELETE_RESOURCE_TYPE_DESC_SI:
    'Introduce el {type} nombre <strong>{resource}</strong> para asegurarte de comprender los riesgos asociados con la operación.',
  DELETE_RESOURCE_TYPE_DESC_PL:
    'Introduce el {type} nombre <strong>{resource}</strong> para asegurarte de comprender los riesgos asociados con la operación.',
  DELETE_APP_RESOURCE_TIP:
    '<strong>{App}</strong> administra el recurso, lo que puede afectar el uso normal de esta aplicación si se elimina el recurso. Introduce el {type} nombre <strong>{resource}</strong> para asegurarte de comprender los riesgos asociados con la operación.',
  DELETE_RESOURCE_TITLE: 'Advertencia',
  DELETE_RESOURCE_TIP:
    '¿Está seguro de eliminar el recurso <strong>{resource}</strong> ? El recurso no se podrá recuperar después de eliminarlo.',
  LABEL_FORMAT_DESC:
    'The key and value can contain only uppercase and lowercase letters, numbers, hyphens (-), underscores (_), and dots (.), and must begin and end with an uppercase or lowercase letter or number. The maximum length is 63 characters. If the key contains the domain name, the maximum length is 253 characters.',
  add_: 'Añadir',
  REMOVE_MEMBER_TIP:
    '¿Estás seguro de que deseas eliminar el miembro <strong>{resource}</strong> ?',
  REMOVE_GROUP_TIP:
    '¿Seguro que quieres eliminar el grupo? <strong>{resource}</strong> ?',
  ALIAS_DESC:
    'El alias puede estar compuesto de cualquier carácter para ayudar a distinguir mejor los recursos. La longitud máxima de carácteres se establece en 63.',
  NOT_ENABLE: '{feature} no está habilitado',
  NO_AVAILABLE_RESOURCE_VALUE: '{resource} no disponible',
  NO_RESOURCE_FOUND: 'No se puede encontrar el recurso.',
  NO_REPO_FOUND_DESC: 'No code repository is found.',
  NO_SERVICE_FOUND: 'No Service Found',
  CREATED_AGO: 'Creado {diff}',
  CREATED_TIME: 'Created at {diff}',
  UPDATE_TIME: '{Diff} actualizado',
  MONTH_AGO: '{count, plural, = 1 {1 mes} other {# meses}}',
  MONTH_TIME: '{count, plural, = 1 {1 mes} other {# meses}}',
  WEEK_AGO: '{count, plural, = 1 {1 semana} other {# semanas}}',
  WEEK_TIME: '{count, plural, = 1 {1 semana} other {# semanas}}',
  DAY_AGO: '{count, plural, = 1 {1 día} other {# días}}',
  DAY_TIME: '{count, plural, =1 {1 día} other {# días}}',
  HOUR_AGO: '{count, plural, = 1 {1 hora} other {# horas}}',
  HOUR_TIME: '{count, plural, = 1 {1 hora} other {# horas}}',
  MINUTE_AGO: '{count, plural, = 1 {1 minuto} other {# minutos}}',
  MINUTE_TIME: '{count, plural, = 1 {1 minuto} other {# minutos}}',
  SECOND_AGO: '{count, plural, =1 {1 segundo} other {# segundos}} ago',
  SECOND_TIME: '{count, plural, =1 {1 segundo} other {# segundos}}',

  TOTAL_ITEMS: 'Total de {num} artículos',
  EVENT_NORMAL: 'Normal',
  EVENT_WARNING: 'Advertencia',

  QUOTA_LIMIT_TIP:
    'Esta configuración hace referencia a la gestión de los limits de los recursos de Kubernetes, que se utiliza principalmente para limitar el valor máximo de los recursos del host utilizados por cada contenedor.',
  NOT_FOUND_DESC:
    '🙇 Lo sentimos, no se encontraron recursos relacionados, el sistema volverá a <a href="{link}">Workbench</a> después de {time} s',
  DETAIL_NOT_FOUND_DESC:
    '🙇 Lo sentimos, no se encontraron recursos relacionados, volver a <a href="{link}">{title}</a>',
  TOOLBOX_DESC:
    'La caja de herramientas proporciona búsqueda de registros y herramientas operativas de cli',
  PATTERN_NAME_INVALID_TIP:
    'Invalid name. The name can contain only lowercase letters, numbers, and hyphens (-).',
  CONTENT_NOT_SAVED_TIPS: 'el contenido ha sido modificado pero no guardado',
  SAVE_EDIT_HINTS:
    'confirma que el contenido modificado es correcto, puedes guardar la configuración o cancelar la configuración.',
  KS_DESCRIPTION:
    'KubeSphere es un proyecto de código abierto que tiene como objetivo proporcionar una plataforma de contenedores multi-tenant de nivel empresarial sobre Kubernetes, la plataforma de orquestación de contenedores de referencia. KubeSphere proporciona una interfaz fácil de usar y permite realizar operaciones usando asistentes, reduciendo la curva de aprendizaje y el costo operativo de Kubernetes en términos del trabajo diario de desarrollo, prueba y mantenimiento.',
  REPS_ADDRESS: 'GitHub',
  ISSUE_FEEDBACK: 'Feedback',
  PART_IN_DISCUSSION: 'Discusión',
  CODE_CONTRIBUTE: 'Contribución',
  GITHUB_STAR: 'Star',
  CONDITION_STATUS_ANALYSE: 'Condiciones',
  NAV_PROJECTS: 'Proyectos',
  NAV_ACCOUNTS: 'Cuentas',
  NOTE: 'Advertencia',
  CREATE_STATUS_SUCCESSFUL: 'Creado con éxito',
  CREATE_STATUS_UPDATING: 'Creando',
  CREATE_STATUS_FAILED: 'Creado sin éxito',
  CREATE_STATUS_DELETING: 'Eliminando',
  EMPTY_WRAPPER: 'No se ha encontrado {resource}',
  'rules text':
    '¿Cómo definir la colección de reglas de operación para los registros de auditoría?',
  'rules desc':
    'KubeSphere puede recopilar registros de auditoría de operación de acuerdo con las reglas que establezcas. Haga clic para ver cómo definir las reglas.',
  EVENT_CREATE_DESC:
    'Puedes cambiar los criterios de búsqueda y buscar nuevamente.',
  KUBECTL_DESC:
    'Herramienta de línea de comandos para controlar el clúster Kubernetes actual',
  TOOLBOX_KUBECTL_DESC:
    'Herramienta de línea de comandos para controlar los grupos de Kubernetes',
  KUBECONFIG_DESC:
    'Puedes usar este archivo para configurar el acceso al clúster Kubernetes actual',
  ENV_PRODUCTION: 'Producción',
  ENV_DEVELOPMENT: 'Desarrollo',
  ENV_TESTING: 'Testing',
  ENV_DEMO: 'Demo',
  CLUSTERS_MANAGE_DESC:
    'Gestión unificada de múltiples clústeres y sus recursos básicos, componentes y recursos de aplicaciones.',
  ACCESS_CONTROL_DESC:
    'Gestión unificada de espacios de trabajo, cuentas y acceso a roles.',
  APP_STORE_MANAGEMENT_DESC:
    'Gestión unificada del ciclo de vida de aplicaciones cloud nativas, incluida su publicación, eliminación y revisión',
  PLATFORM_SETTINGS_DESC:
    'Configuración de plataforma personalizada, que incluye información básica y recopilador de registros',
  DATA_SOURCE: 'Fuente de datos',
  CONTAINER_LOG_SEARCH_DESC:
    'Una herramienta de búsqueda de registros multidimensional para espacios de trabajo, proyectos y recursos.',
  RESOURCE_EVENT_SEARCH_DESC:
    'Una herramienta de búsqueda de eventos multidimensional para espacios de trabajo, proyectos y recursos.',
  PLATFORM_INFO_DESC:
    'Overview of the platform information. You can view and customize the platform information.',
  HOW_TO_MODIFY_PLATFORM_INFO:
    '¿Cómo modificar la información de la plataforma?',
  PLATFORM_SETTINGS_SELECTOR_DESC:
    'Configuraciones de plataforma personalizadas',
  AUDIT_LOG_DESC:
    'Una herramienta de búsqueda de auditoría multidimensional para espacios de trabajo, proyectos y recursos.',
  FILE_OVERSIZED_TIP: '¡El archivo cargado debe ser inferior a 2M!',
  MULTI_CLUSTER_PROJECT_TIP: 'El recurso se implementa en varios grupos.',
  NO_HISTORY_TITLE: 'No Recently Accessed Resource Found',
  NO_HISTORY_DESC: 'You can access platform resources.',
  USER_GUIDES_DESC: 'La guía de usuario más completa de KubeSphere.',
  DEVELOPER_DESC:
    'Haz una pregunta en la comunidad de desarrolladores para obtener ayuda.',
  API_DOCS_DESC: 'La documentación más completa de la API de KubeSphere.',
  GITHUB_ISSUES_DESC:
    'Puedes plantear un problema en GitHub para obtener ayuda.',

  EVENT_AGE: 'Occurred',
  EVENT_AGE_DATA: '{lastTime}<br/>({count} times over {duration})',
  EVENT_AGE_DATA_TWICE: '{lastTime}<br/>(twice over {duration})',
  SOURCE: 'Source',

  RESOURCE_CONSUMPTION_STATISTICS: 'Medição e faturamento',
  METERING_AND_BILLING_DESC: 'Track resource consumption.',

  // Workbench
  CLUSTER_COUNT_SI: 'Cluster',
  CLUSTER_COUNT_PL: 'Clusters',
  LAST_LOGIN_TIME: 'Last Login: ',
  APP_TEMPLATE_SCAP_PL: 'App templates',
  ACCOUNT_PL: 'Accounts',

  // Container Details Page
  CONTAINER_DETAILS_PAGE_SCAP: 'Container details page.',
  CPU_VALUE: 'CPU: {value}',
  MEMORY_VALUE: 'Memory: {value}',

  // Container Log Search
  CONTAINER_LOG_SEARCH: 'Container Log Search',
  RESOURCE_EVENT_SEARCH: 'Resource Event Search',
  AUDIT_LOG_SEARCH: 'Audit Log Search',

  // Toolbox
  CONTROL_TOOL: 'Control Tool',
  ANALYSIS_TOOLS: 'Analysis Tools',
  'According to the HTTP header': 'De acuerdo con el encabezado HTTP',
  'Add Component': 'Agregar componente',
  'Add Component Successfully': 'Componente añadido con éxito',
  'Add an Internet access rule for the application':
    'Agregar regla de acceso a Internet para la aplicación',
  'Add New Component': 'Agregar nuevo componente',
  ADD_SERVICE: 'Agregar servicio',
  ADD_ROUTE: 'Add Route',
  APP_CREATE_SERVICE_DESC: 'Agregar servicios con o sin estado',
  CREATE_SERVICE_DESC: 'Select a service creation method.',
  APP_INTRODUCTION: 'App Introduction',
  'App store deployment': 'Despliegue desde la tienda de aplicaciones',
  'App Template': 'Plantilla de la aplicación',
  APP_TEMPLATE: 'App Template',
  APP_TEMPLATE_PL: 'App Templates',
  TEMPLATE_BASED_APP_PL: 'Template-Based Apps',
  NO_TEMPLATE_BASED_APP_FOUND: 'No Template-Based App Found',
  APP_TEMPLATE_LOW: 'app template',
  APP_TEMPLATE_EMPTY_DESC: 'Please create an app template.',
  'App Types': 'Tipos de aplicaciones',
  APP_ICON_TIP:
    'Click to upload the app icon with a maximum size of 120px * 120px.',
  application: 'aplicación',
  'Application Component': 'Componente de aplicación',
  APP_COMPONENT_PL: 'Componentes de la aplicación',
  'Application components combine workloads and services as components in applications':
    'Los componentes de la aplicación combinan workload y servicios como componentes en las aplicaciones.',
  APPLICATION_GOVERNANCE: 'Gestión de aplicación',
  APPLICATION_GOVERNANCE_SCAP: 'Application governance',
  'Application governance is not enabled':
    'La gestión de la aplicación no está habilitado',
  'Application Icon': 'Ícono de aplicación',
  '': 'Nombre de la aplicación',
  'Application Route': 'Ruta de solicitud',
  APP_TYPES_Q: 'tipo de aplicacion',
  APP_VERSION: 'Versión de aplicación (opcional)',
  APP_PL: 'Aplicaciones',
  'Base ejection time (s)': 'Tiempo base de eyección (s)',
  'Based on HTTP cookie': 'Basado en cookie HTTP',
  'Based on HTTP header': 'Basado en el encabezado HTTP',
  'Build an app by app template':
    'Crear una aplicación por plantilla de aplicación',
  'Build an app by services': 'Crea una aplicación por servicios',
  'Called Depth': 'Llamada profundidad',
  'Called Services': 'Llamados servicios',
  'Choose existing services or create new service components to build an app':
    'Elija servicios existentes o cree nuevos componentes de servicio para crear una aplicación',
  'Circuit Breaker': 'Cortador de circuitos',
  'Cluster Select': 'Seleccionar clúster',
  'Cluster Selection': 'Selección de clúster',
  'Component Version': 'Versión de componente',
  'Composing App': 'Aplicación por composición',
  COMPOSED_APP_PL: 'Aplicación por composición',
  NO_COMPOSED_APP_FOUND: 'No Composed App Found',
  'Connection pool management': 'Gestión del grupo de conexiones',
  'Connection timeout': 'El tiempo de conexión expiró',
  'Continuous error response (5xx) number':
    'Continuas respuestas de error (5xx)',
  'Create Application by Service': 'Crear aplicación por servicio',
  CREATE_COMPOSED_APP: 'Crear aplicación por composición',
  'Current Version': 'Versión actual',
  DEPLOY: 'Desplegar',
  'Deploy App': 'Desplegar aplicación',
  'Deploy applications with one-click application templates provided by Kubesphere':
    'Despliega aplicaciones con plantillas de aplicaciones proporcionadas por Kubesphere, con un solo click',
  CREATE_APP: 'Desplegar nueva aplicación',
  'Deploy sample app Bookinfo': 'Desplegar la aplicación de ejemplo Bookinfo',
  DEPLOYED_APPS: 'Aplicaciones desplegadas',
  EDIT_GRAYSCALE_RELEASE_JOB: 'Editar componente',
  FROM_APP_STORE: 'Desde la tienda de aplicaciones',
  FROM_APP_TEMPLATE: 'Desde plantillas de aplicaciones',
  'From third party Helm': 'Desde Helm de terceros',
  CURRENT_WORKSPACE: 'Del espacio de trabajo',
  SELECT_APP_REPOSITORY: 'Select app repository',
  'Hash based on a specific HTTP header.':
    'Hash basado en un encabezado HTTP específico.',
  'Hash based on HTTP cookie.': 'Hash basado en cookie HTTP.',
  'Hash based on the source IP address.':
    'Hash basado en la dirección IP de origen.',
  'How to use Application Governance': 'Cómo usar la gestión de aplicaciones',
  'If the maximum number of requests in the backend connection is set to 1, the keep alive feature is disabled.':
    'Si el número máximo de solicitudes en la conexión de backend se establece en 1, la función mantener vivo está deshabilitada.',
  'If you need to access applications by application route, add routing rules':
    'Si necesita acceder a las aplicaciones por ruta de aplicación, agregue reglas de enrutamiento',
  'Inspection period (unit: s)': 'Período de inspección (unidad: s)',
  INVALID_VERSION_TIP: 'Versión no válida',
  'Load balance algorithm': 'Algoritmo de balanceo de carga',
  Log: 'Registro',
  'Max number of connections': 'Número máximo de conexiones',
  'Max number of requests per connection':
    'Número máximo de solicitudes por conexión',
  'Max request retries': 'Máximo reintentos de la solicitud',
  'Maximum pending requests': 'Máximo de solicitudes pendientes',
  'Maximum requests': 'Solicitudes máximas',
  METHOD: 'Método',
  CREATION_METHOD: 'Creation Method',
  APPLICATION_GOVERNANCE_ENABLED: 'Microservicio habilitado',
  APPLICATION_GOVERNANCE_DISABLED: 'Microservicio no habilitado',
  'No Components': 'Sin componentes',
  'No result found': 'No se han encontrado resultados',
  Off: 'Off',
  On: 'On',
  'Please finish the sub form first':
    'Por favor termina el subformulario primero',
  'Please input an application name':
    'Por favor introduce un nombre de aplicación',
  APP: 'App',
  APP_LOW: 'app',
  'Please input component version':
    'Por favor introduce la versión del componente',
  SAVE_FORM_TIP: 'Por favor guarda el formulario actual primero',
  TRACING_NO_DATA_DESC: 'Por favor prueba otras condiciones en la consulta',
  TRACING: 'Tracing',
  NUM_SPAN_SI: '{num} span',
  NUM_SPAN_PL: '{num} spans',
  NUM_ERROR_SI: '{num} error',
  NUM_ERROR_PL: '{num} errors',
  'Pod isolation ratio (unit: %)': 'Relación de aislamiento del Pod (unidad:%)',
  Process: 'Proceso',
  Receive: 'Recibir',
  Rollback: 'Rollback',
  'Sample apps can help you get started with app creation and app governance':
    'Las aplicaciones de muestra pueden ayudarte a comenzar con la creación y la gestión de la aplicación',
  Send: 'Enviar',
  'Service components should not be empty':
    'Los componentes de servicio no deben estar vacíos.',
  SERVICE_PORTS: 'Puertos de servicio',
  SERVICE_PORT_NAME_DESC:
    'The port name must follow the format: <protocol>[-<suffix>]. http, http2, grpc, mongo or redis can be used as <protocol> so that you can use Istio’s routing features. For example, name: http2-foo and name: http are valid names while name: http2foo is invalid.',
  'Services & Operations': 'Servicios y operaciones',
  'Session retention': 'Retención de la sesión',
  'Success rate': 'Tasa de éxito',
  Tags: 'Etiquetas',
  TCP_INBOUND_TRAFFIC: 'TCP - Tráfico entrante',
  TCP_OUTBOUND_TRAFFIC: 'TCP - Tráfico saliente',
  'TCP connection timeout.': 'Tiempo de espera de conexión TCP.',
  TRACING_UNAVAILABLE: 'No se puede usar el servicio de tracing temporalmente',
  TRAFFIC_MONITORING_UNAVAILABLE_DESC:
    'La aplicación no ha recibido una solicitud durante mucho tiempo, visita la aplicación y prueba el gestor de tráfico',
  'The maximum number of HTTP1 or TCP connections to the target host.':
    'El número máximo de conexiones HTTP1 o TCP al host de destino.',
  'The maximum number of retries to the target host within the specified time.':
    'El número máximo de reintentos al host de destino dentro del tiempo especificado.',
  'The number of consecutive 5xx errors in one inspection cycle':
    'El número de errores 5xx consecutivos en un ciclo de inspección',
  'The response code will be filtered in the inspection cycle.':
    'El código de respuesta se filtrará en el ciclo de inspección.',
  TOTAL_COLLECTIONS: 'Total {num} receivers',
  Traffic: 'Tráfico',
  'Traffic (requests per second)': 'Tráfico (solicitudes por segundo)',
  TRAFFIC_ENTRY: 'Entrada de tráfico',
  TRAFFIC_MANAGEMENT: 'Gestión del tráfico',
  NETWORK_TRAFFIC: 'Network Traffic',
  'Traffic Monitoring': 'Monitorización de tráfico',
  Upgrade: 'Subir de versión',
  'Workload Type': 'Tipo de carga de trabajo',
  TOTAL_APPS: 'Total de {num} aplicaciones',
  APPLICATIONS_DESC:
    'Una aplicación proporciona a los usuarios funciones comerciales integrales en un solo paquete. Las plantillas de aplicación en KubeSphere se basan en la especificación de empaquetado de Helm. Se entregan a través de un repositorio Helm público o privado unificado. Una aplicación está compuesta por uno o más objetos de Kubernetes, que incluyen workload, servicios e ingress.',
  CREATE_APP_DESC:
    'La liviana, portátil y autónoma tecnología de empaquetado de software permite que las aplicaciones se ejecuten en casi cualquier lugar de la misma manera.',
  TEMPLATE_BASED_APP_EMPTY_DESC:
    'Please create an app from the KubeSphere App Store or an app template.',
  LB_ALG_DESC:
    'Admite algoritmos de balanceo de carga estándar </br> ROUND_ROBIN： Secuencial, el algoritmo de balanceo de carga predeterminado. </br> LEAST_CONN: Selecciona aleatoriamente dos hosts sanos y luego selecciona el que tiene menos conexiones de los dos. </br> RANDOM: Elge uno al azar entre todos los hosts sanos.',
  LB_ROUND_ROBIN: 'ROUND_ROBIN',
  LB_LEAST_CONN: 'LEAST_CONN',
  LB_RANDOM: 'RANDOM',
  CLUSTER_NAME_DESC:
    'Solo puede contener letras minúsculas, números y guiones ("-"), y debe comenzar con una letra minúscula y terminar con un número o letra minúscula. La longitud máxima de caracteres se establece en 53.',
  VERSION_DESC:
    'Para gestión, ayudándote a distinguir entre componentes. Solo puede contener letras minúsculas y números. La longitud máxima de caracteres se establece en 16.',
  APP_WORKLOAD_TYPE_DESC:
    'Admite servicios sin estado (Deployment) y servicios con estado (StatefulSet)',
  TYPE_SERVICE_DEPLOYMENT: 'Servicio sin estado (Deployment)',
  TYPE_SERVICE_STATEFULSET: 'Servicio con estado (StatefulSet)',
  CONNECTION_POOL_TIP:
    'Crea un número fijo de objetos de conexión para la aplicación y guárdalos en el grupo para su reutilización. El grupo existente estará disponible para cada acceso, y cada objeto de conexión volverá al grupo después de su uso.',
  APPLICATION_GOVERNANCE_DESC:
    'Enable Application Governace to use the Traffic Monitoring, Grayscale Release, and Tracing features for the app.',
  POD_ISOLATION_RATIO_DESC:
    '% Máximo de Pods que se pueden expulsar del servicio de upstream. Utiliza redondeo hacia arriba. Por ejemplo: Si existen 10 instancias y se establece en 13%, aislará hasta 2 instancias.',
  BASE_EJECTION_TIME_DESC:
    'Duración mínima de expulsión. Un host permanecerá expulsado durante un período igual al producto de la duración mínima de expulsión, y la cantidad de veces que se expulsó el host.',
  CIRCUIT_DESC:
    'El corte del circuito es un mecanismo de protección de conexión de microservicio que aborda el efecto de avalancha. Cuando un microservicio del abanico de conexiones no está disponible, o el tiempo de respuesta es demasiado largo, el servicio se degradará y la llamada al microservicio del nodo se interrumpirá y la respuesta de error se devolverá rápidamente. Después de detectar que la respuesta del microservicio es normal, se reanudará la conexión.',
  LAST_NUM_RECORDS: 'Últimos {num} registros',
  'Last {hour} hour': 'Última {hour} hora',
  'Last {hour} hours': 'Últimas {hour} horas',
  'Last {day} days': 'Últimos {day} días',
  WORKLOAD_NAME_EXIST: 'La carga de trabajo {name} existe',
  APP_TYPES_A:
    'KubeSphere admite implementaciones de aplicaciones (basadas en Helm) desde App Store, así como Application CRD.',
  HOW_TO_USE_APP_GOVERN_Q: '¿Cómo usar la Gestión de aplicaciones?',
  HOW_TO_USE_APP_GOVERN_A:
    'Cree una aplicación por composición y habilite la gestión de servicios para cada servicio antes de utilizar la gestión de aplicaciones.',
  FROM_APP_STORE_DESC:
    'Desde la tienda de aplicaciones oficial de KubeSphere con aplicaciones de alta calidad y despliegues fáciles.',
  FROM_APP_TEMPLATE_DESC:
    'Desde las plantillas de aplicación del espacio de trabajo y las plantillas de aplicaciones Helm de terceros del repositorio de aplicaciones.',
  COMPOSED_APP_EMPTY_DESC:
    'Puedes publicar servicios para crear aplicaciones a través de la orquestación de recursos (compatible con la gestión de aplicación).',
  APP_TEMPLATES_MODAL_DESC:
    'La plantilla de la aplicación proviene del espacio de trabajo y las plantillas de aplicación de Helm de terceros. Admite el despliegue con un click y se puede visualizar en KubeSphere para mostrar y proporcionar despliegues y funciones de administración.',
  TIP_APP_TYPE:
    'KubeSphere admite el despliegue de aplicaciones (basado en Helm) desde tiendas de aplicaciones y repositorios de aplicaciones, así como aplicaciones propias (Application CRD).',
  TIP_APP_GOVERNANCE:
    'Usar la gestión de aplicación requiere crear una aplicación propia y activar la gestión para cada servicio',
  APP_REPOS_DESC:
    'El repositorio de aplicaciones proviene de un repositorio de Charts de Helm de terceros, que visualmente muestra y proporciona capacidades de despliegue y administración en KubeSphere. Los usuarios pueden desplegar rápidamente aplicaciones con un solo click, basadas en las plantillas del repositorio de aplicaciones.',
  APP_BASIC_INFORMATION_DESC:
    'Información básica de la aplicación (como la descripción)',
  TRAFFIC_MANAGEMENT_NO_MICROSERVICE_TIP:
    'La gestión del tráfico depende del módulo de microservicios. El clúster actual no tiene habilitado dicho módulo',
  TRACING_NO_MICROSERVICE_TIP:
    'El servicio de tracing depende del módulo de microservicios, el clúster actual no tiene habilitado dicho módulo',
  APPLICATION_SERVICE_DESC:
    'Puedes configurar diferentes componentes de servicio basándote en el tipo de servicio dentro de una aplicación. Tanto los servicios con estado como los sin estado están soportados.',
  ROUTE_SETTINGS_DESC:
    'Puedes definir las reglas de acceso a internet para la aplicación (Ingress).',
  ROUTE_SETTINGS: 'Route Settings',
  'A general introduction to the application':
    'Una introducción general a la aplicación',
  'Activate Successfully': 'Activado Satisfactoriamente',
  'Add Version': 'Añadir Versión',
  ADD_VERSION_SUCCESSFUL: 'Versión Añadida Satisfactoriamente',
  'Adjust App Category': 'Ajustar Categoría de la Aplicación',
  CHANGED_SUCCESSFULLY: 'Changed successfully.',
  ALL_CATEGORIES_VALUE: 'All Categories ({value})',
  APP_CATEGORY_PL: 'Categorias de Aplicación',
  APP_CATEGORY: 'Categoria de Aplicación',
  APP_SETTINGS: 'Configuración de Aplicación',
  CURRENT_APP_SETTINGS_READONLY: 'Current App Config',
  TARGET_APP_SETTINGS: 'Target App Settings',
  'New App Config': 'New App Config',
  'App Deploy': 'Despliegue de Aplicación',
  APP_DETAILS: 'Detalles de Aplicación',
  APP_INFORMATION: 'Info de Aplicación',
  'App Introduction': 'Introducción de Aplicación',
  'App Name': 'Nombre de Aplicación',
  APP_REVIEW: 'Revisión de Aplicación',
  APP_REVIEWS: 'Revisiones de Aplicación',
  APP_SCREENSHOTS: 'Capturas de pantalla de Aplicación',
  APP_STORE_MANAGEMENT: 'Gestión de la Tienda de Aplicacines',
  'App Version': 'Versión de Aplicación',
  TARGET_APP_VERSION: 'Target App Version',
  CURRENT_APP_VERSION: 'Versión actual de la aplicación',
  'App Version Types': 'Tipos de Versión de Aplicación',
  'Application Name': 'Nombre de Application',
  REJECTION_REASON: 'Motivo de Rechazo',
  'Application Version': 'Versión de Aplicación',
  APPS_MANAGEMENT: 'Gestión de Alicaciones',
  'Apps Management': 'Gestión de Alicaciones',
  'Base Info': 'Info Base',
  'Business introduction': 'Introducción comercial',
  'Cancel Successfully': 'Cancelado Satisfactoriamente',
  'Category Name': 'Nombre de Categoría',
  CHANGE_CATEGORY: 'Cambiar Categoría',
  CHART_FILES: 'Ficheros del Chart',
  'Company website': 'Sitio web de la Compañía',
  CONFIG_FILE: 'Fichero de configuración',
  CREATE_APP_TEMPLATE: 'Crear Plantilla de Aplicación',
  'Create Time': 'Momento de creación',
  'Delete all': 'Eliminar todo',
  'Delete picture': 'Eliminar imagen',
  'Deploy after login': 'Desplegar después del inicio de sesión',
  'Deploy now': 'Desplegar ahora',
  'Detail Introduction': 'Introducción detallada',
  Discoveries: 'Descubrimientos',
  'Edit App Information': 'Editar Información de Aplicación',
  'Evaluation stars': 'Estrellas de evaluación',
  File: 'Fichero',
  'Format png/svg background transparency is the best':
    'Formatear la transparencia de fondo con png/svg es lo recomendado',
  Handle: 'Manejar',
  Icon: 'Icono',
  'In Project': 'En Proyecto',
  INDEX_SUCCESS_TIP: 'Indexed successfully.',
  'Instance Name': 'Nombre de Instancia',
  Introduction: 'Introducción',
  MODIFY_SUCCESSFUL: 'Modificado Satisfactoriamente',
  NEW_APPS: 'New Apps',
  'New Version': 'Nueva Versión',
  NO_UPDATE_LOG_DESC: 'No update log is found.',
  Note: 'Nota',
  Operator: 'Operador',
  ENTER_CATEGORY_NAME_TIP: 'Please enter a category name.',
  REJECT_REASON_TIP: 'Introduce un motivo de rechazo, por favor',
  ENTER_VERSION_NUMBER_TIP: 'Please enter a version number.',
  'Please select a cluster': 'Selecciona un cluster, por favor',
  'Please select a DevOps project': 'Seleccione el proyecto devops',
  'Please select a DevOps project role':
    'Por favor, seleccione el proyecto devops',
  'Please select a project role': 'Selecciona un proyecto, por favor',
  'Please select a project': 'Selecciona un proyecto, por favor',
  'Please select a project to deploy':
    'Selecciona un proyecto para desplegar, por favor',
  WORKSPACE_EMPTY_DESC: 'Selecciona un espacio de trabajo, por favor',
  'Please select icon': 'Selecciona un icono, por favor',
  UPLOAD_AGAIN_TIP: 'Please try again.',
  REVIEWED: 'Reviewed',
  PROVIDER: 'Proveedor',
  'Re-upload': 'Re-subir',
  'Recover Successfully': 'Recuperado Satisfactoriamente',
  'Reject Reason': 'Motivo de Rechazo',
  REJECT_SUCCESSFUL: 'Rechazado Satisfactoriamente',
  'Release / Suspended Time': 'Momento de lanzamiento / suspensión',
  'Release Successfully': 'Lanzado Satisfactoriamente',
  APP_RELEASE: 'App Release',
  REVIEW_CONTENT: 'Revisar Contenido',
  'Review Object': 'Revisar Objecto',
  'Review Status': 'Revisar Estado',
  Screenshot: 'Captura de pantalla',
  screenshots: 'capturas de pantalla',
  'Select file': 'Seleccionar fichero',
  'Select File': 'Seleccionar Fichero',
  'Service Provider': 'Proveedor de Servicio',
  'Service Provider Website': 'Sitio Web del Proveedor de Servicio',
  SERVICE_PROVIDER_WEBSITE_DESC:
    'Official website address of the service provider.',
  'Start Create': 'Empezar a crear',
  'Start editing': 'Empezar a editar',
  'Submit Successfully': 'Enviado Satisfactoriamente',
  Submitter: 'Remitente',
  'Suspend Successfully': 'Suspendido Satisfactoriamente',
  'Terms of service': 'Términos de Servicio',
  'Test Deployment': 'Probar Despliegue',
  'Time of entry': 'Momento de Entrada',
  Uncategorized: 'Sin Categorizar',
  UNREVIEWED: 'Unreviewed',
  'Update Log': 'Actualizar registro',
  'Upload again': 'Subir otra vez',
  'Upload Icon': 'Subir Icono',
  UPLOAD_ICON: 'Subir icono',
  'Upload Screenshots': 'Subir Capturas de Pantalla',
  UPLOAD_SUCCESSFUL: 'Subida Satisfactoriamente',
  UPLOAD_TEMPLATE: 'Subir Plantilla',
  UPLOADING: 'Subiendo',
  'Version No': 'Version No',
  'Very helpful when users search for apps':
    'Muy útil cuando los usuarios buscan aplicaciones',
  WRONG_ADDRESS_TIP:
    'Incorrect format. Please enter a correct website address.',

  FILE_UPLOAD_MAX: 'El tamaño de fichero no puedes exceder 2M.',

  APP_TEMPLATE_DESC:
    'KubeSphere proporciona una gestión completa del ciclo de vida para las aplicaciones. Puedes subir o crear nuevas plantillas de aplicación y probarlas rápidamente. Además, puedes publicar tus aplicaciones en la Tienda de Aplicaciones para que otros usuarios puedan desplegarlas con un solo click.',
  APP_TEMPLATE_CREATE_DESC:
    'KubeSphere proporciona una gestión completa del ciclo de vida para las aplicaciones. Puedes subir o crear nuevas plantillas de aplicación y probarlas rápidamente. Además, puedes publicar tus aplicaciones en la Tienda de Aplicaciones para que otros usuarios puedan desplegarlas con un solo click.',
  APP_TEMPLATES_DESC:
    'KubeSphere proporciona una gestión completa del ciclo de vida para las aplicaciones. Puedes subir o crear nuevas plantillas de aplicación y probarlas rápidamente. Además, puedes publicar tus aplicaciones en la Tienda de Aplicaciones para que otros usuarios puedan desplegarlas con un solo click.',

  DEVELOP_APP_TITLE: 'Cómo desarrollar plantillas de aplicación?',
  DEVELOP_APP_DESC:
    'Puedes subir Charts de Helm o utilizar la herramienta de orquestación de recursos proporcionada por KubeSphere para desarrollar plantillas de aplicaciones.',

  HOW_PUBLISH_APP_TITLE:
    'Cómo publicar aplicaciones en la Tienda de Aplicaciones?',
  HOW_PUBLISH_APP_DESC:
    'KubeSphere actualmente admite la subida de Charts de Helm a través de plantillas de aplicación dentro del espacio de trabajo, donde puedes enviar tu plantilla para su revisión. Una vez que se apruebe la plantilla, podrás publicarla en la Tienda de Aplicaciones.',

  HOW_APP_DEPLOY_TITLE: 'Cómo desplegar y probar Aplicaciones',

  APPS_CREATE_DESC:
    'KubeSphere proporciona la gestión del ciclo de vida de las plantillas de aplicaciones. Puedes subir o crear nuevas plantillas de aplicación y probarlas rápidamente. Además, puedes publicar tus plantillas de aplicación en la Tienda de Aplicaciones para que otros usuarios puedan obtenerlas e implementarlas.',

  APP_NAME_DESC: 'Name of the app. The maximum length is 20 characters.',

  APP_DESCRIPTION_DESC:
    'Description of the app. The maximum length is 120 characters.',

  APP_DETAIL_DESC: 'Muy útil cuando se buscan aplicaciones',

  APP_ICON_FORMAT: 'Formato: png Mejor transparencia del fondo',
  APP_ICON_SIZE: 'Icon size: 96x96 pixels',

  APP_STORE_DESC: 'Gestionar aplicaciones de la Tienda.',

  APP_RELEASE_DESC:
    'KubeSphere supports reviewing the contents of applications to be released. You can view the contents and approve or reject to publish the applications.',
  APP_REVIEW_EMPTY_DESC: 'No unreleased app is found.',
  APP_REVIEWS_CREATE_DESC:
    'Certifique a los proveedores de servicios y revise las aplicaciones para aprobar o rechazar las aplicaciones que se mostrarán o no en la tienda.',
  APP_DETAILS_DESC: 'View details of the app to be released.',
  REJECT_REASON_DESC:
    'Complete los motivos de rechazo de la revisión, por favor.',

  APP_CATEGORIES_DESC:
    'Este módulo te permite crear, editar y eliminar categorías; así como clasificar las aplicaciones activas de la Tienda.',
  APP_CATEGORY_EMPTY_DESC: 'No hay aplicación disponibles para la categoría.',
  CHANGE_CATEGORY_DESC:
    'La clasificación de la aplicación determinará la clasificación de la aplicación en la Tienda de Aplicaciones.',
  DELETE_CATEGORY_WARNING:
    'Esta categoría está ligada a <strong>{total}</strong> aplicaciones. Por favor' +
    ' asocia estas aplicaciones a otras categorías antes de eliminarla',
  DELETE_CATEGORY_DESC:
    'Are you sure you want to delete the category <b>{name}</b>?',
  CHOOSE_APP_CATEGORY_DESC: 'Select a category for the app.',

  UPLOAD_HELM_TITLE: 'Subir un Chart de Helm empaquetado',
  UPLOAD_HELM_CHART_DESC: 'Subir un Chart de Helm existente',
  HELM_CHART_FORMAT_DESC:
    'Subir tu Chart de Helm en el formato de fichero tar.gz o tgz.',

  EDIT_APP_DESC: 'Configurar la información básica de aplicación.',
  CREATE_APP_TEMPLATE_DESC:
    'La ligera, portable y autocontenida tecnología de empaquetado de software, permite que las aplicaciones se ejecuten de la misma manera en casi cualquier lugar.',

  RESOURCE_TOOL_TITLE: 'Creado usando el Coreógrafo de Recursos',
  RESOURCE_TOOL_DESCRIPTION:
    'KubeSphere proporciona una herramienta de orquestación de recursos visuales que te permite' +
    ' crear plantillas de aplicación y desplegar pruebas mediante la pre-edición de recursos',

  APP_CREATE_GUIDE: 'Ver la especificación de desarrollo de aplicaciones',
  HELM_DEVELOP_GUIDE: 'Especificación de Helm y del Desarrollo de Aplicaciones',

  CATEGORY_NAME_DESC:
    'The name can contain any characters and the maximum length is 20 characters.',
  APP_CATE_All: 'Todas',
  APP_CATE_UNCATEGORIZED: 'Sin categoría',

  ICON_DESC:
    'Selecciona un icono para identificar la clasificación, por favor.',

  MODIFY_VERSION_TIPS:
    'Toda modificación tendrá efecto a después del lanzamiento de la próxima versión',

  UNDER_REVIEW_TIPS:
    'La versión actual de la aplicación está bajo revisión,' +
    ' y la siguiente información es inalterable temporalmente',

  SUBMIT_REVIEW_DESC: 'Submit the app for release.',

  AUDIT_RECORD_CREATE_DESC: 'Sin registro de revisión relevante',

  UPLOAD_SUPPORT_FORMAT: 'Los formatos de fichero soportados son tar.gz y tgz',

  FILE_FORMAT_PACKAGE: 'Los formatos de fichero soportados son tar.gz y tgz',
  FILE_FORMAT_ICON: 'Los formatos de icono soportados son png y svb',
  FILE_FORMAT_SCREENSHOTS:
    'Los formatos de captura de pantalla soportados son png y jpg',
  FILE_MAX_PACKAGE: 'El tamaño del paquete de configuración no debe exceder 2M',
  FILE_MAX_ICON: 'El tamaño del icono no debe exceder 20KB',
  FILE_MAX_SIZE_ICON: 'The maximum size of the icon is 96x96 pixels.',
  FILE_MAX_SCREENSHOTS: 'El tamaño de la imagen no debe exceder 2M',

  UPLOAD_PACKAGE_OK_NOTE:
    'The version already exists. Please upload another version.',

  REVIEWS_CREATE_DESC: 'No hay datos relevantes de revisión de aplicaciones',

  NO_DEPLOY_RUNTIME_NOTE:
    'El proyecto no tiene un entorno de despliegue disponible',

  UPLOAD: 'Subir',

  APP_ICON_NOTE: 'JPG o PNG menor o igual a 96px * 96px',

  MISS_FILE_NOTE: 'No se encuentra el fichero {file}',

  HELM_APP_SCHEMA_FORM_TIP:
    'The app configuration can be displayed in a form. You can modify the default app configuration through either the form or YAML editor. Note: app data stored in different patterns are independent of each other.',
  DELETE_APP_TEMPLATE_DESC:
    'Enter the app template name <b>{resource}</b> to confirm that you understand the risks of this operation.',
  DELETE_APP_TEMPLATE_VERSIONS_DESC:
    'Enter the app template name <b>{resource}</b> to confirm that you understand the risks of this operation. Before deleting the app template, you must delete all versions of the template.',

  UNPROCESSED_APP_RELEASE: 'Unreleased App',
  PROCESSED_APP_RELEASE: 'Released App',
  ALL_APP_RELEASE: 'Release Record',

  'APP_CATE_MESSAGE QUEUEING': 'Message Queuing',
  'APP_CATE_IMAGE REGISTRY': 'Image Registry',
  'APP_CATE_PROMETHEUS EXPORTER': 'Prometheus Exporter',
  'APP_CATE_WEB SERVER': 'Web Server',
  APP_CATE_NETWORKING: 'Networking',
  'APP_CATE_DATABASE & CACHE': 'Database & Cache',
  APP_CATE_STORAGE: 'Storage',

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
  'App README': 'LEEME (README) de Aplicación',
  'Configuration Files': 'Ficheros de Configuración',
  INSTALLED_SUCCESSFULLY: 'Installed successfully.',
  CONFIG_FILES: 'Ficheros de Configuración',
  'Deploy Successfully': 'Desplegado Satisfactoriamente',
  'Edit by YAML': 'Editar YAML',
  NO_CHART_FILE_FOUND: 'No chart file is found.',
  NO_DOCUMENT_DESC: 'No documentation is found.',
  NO_APP_CHART_FILE_FOUND: 'La aplicación no tiene un fichero Chart',
  NO_APP_DESC_FOUND: 'La aplicación no tiene documentación.',
  VERSION_INTRO_EMPTY_DESC: 'La versión no tiene documentación.',
  'Update Successfully': 'Subida Satisfactoriamente',

  APP_TEMPLATE_DESCRIPTION_TITLE: 'Implementar aplicaciones empaquetadas',
  APP_TEMPLATE_DESCRIPTION_ARTICLE:
    'KubeSphere visualiza plantillas de aplicaciones y proporciona funciones de despliegue y administración, lo que permite a los usuarios desplegar aplicaciones rápidamente con un solo click en función de las plantillas de la aplicación.',
  TOTAL_APP_REPOS: 'Total de {num} repositorios de Aplicaciones',
  APP_ID: 'ID de la aplicación',
  'App Readme': 'LEEME (README) de la aplicación',
  APP_STORE: 'Tienda de aplicaciones',
  'App Store Settings': 'Configuración de la tienda de aplicaciones',
  Categories: 'Categorías',
  CHANGE_LOG: 'Cambiar registro',
  'Config files': 'Ficheros de configuración',
  Contact: 'Contacto',
  Developer: 'Desarrollador',
  DEVELOPER_VALUE: 'Desarrollador: {value}',
  MAINTAINER_VALUE: 'Mantenedor: {value}',
  MAINTAINERS_VALUE: 'Mantenedores: {value}, etc.',
  SOURCE_CODE_ADDRESS: 'Fuente',
  LATEST_VALUE: 'Latest: {value}',
  'Find an app': 'Encuentra la aplicación',
  'Install and Deploy': 'Instalar y desplegar',
  KEYWORDS: 'Palabras clave',
  Latest: 'Último',
  RELEASE_DATE: 'Fecha de Publicación',
  RELEASE_TIME_SCAP: 'Release time',
  Screenshots: 'Capturas de pantalla',
  VERSION_NUMBER: 'Número de versión',
  VERSION_LIST_DES: 'Only display the last 10 versions',
  TOTAL_CATE_COUNT: 'Total Apps: {total}',
  HOME_APP_STORE_DESC:
    'La App Store oficial de KubeSphere proporciona características de despliegue y administración que permiten a los usuarios desplegar aplicaciones rápidamente con un solo click en base a plantillas de aplicaciones.',

  AGREE: 'De acuerdo',
  APP_DEPLOY_AGREEMENT: 'Acuerdo de implementación de la aplicación',
  APP_DEPLOY_AGREEMENT_DESC_1:
    'You must abide by the open-source agreement of the application.',
  APP_DEPLOY_AGREEMENT_DESC_2:
    'Any consequences arising from your deployment of the application shall be borne by you. For support services, please contact the developer.',
  DO_NOT_REMIND_AGAIN: 'No recordar de nuevo',
  APP_DEPLOYMENT_AGREEMENT: 'Acuerdo de implementación de aplicaciones',
  APP_DEPLOY_AGREEMENT_1:
    '1. You must abide by the open-source agreement of the application.',
  APP_DEPLOY_AGREEMENT_2:
    '2. Any consequences arising from your deployment of the application shall be borne by you. For support services, please contact <a href="https://kubesphere.cloud/en/" target="_blank">kubesphere.cloud</a>.',
  APP_DEPLOY_AGREEMENT_CHECK:
    'I have read <b>App Deployment Agreement</b> and agree to deploy the app.',
  CHECK_APP_DEPLOY_AGREEMENT_TIP:
    'Lea y acepte las instrucciones de implementación de la aplicación.',
    'Add App Repository': 'Agregar repositorio de aplicaciones',
  ADD_APP_REPO: 'Add App Repository',
  'App Repos': 'Repositorios de aplicaciones',
  'App Repository': 'Repositorio de aplicaciones',
  APP_REPOSITORY: 'App Repository',
  APP_REPOSITORY_PL: 'App Repositories',
  APP_REPOSITORY_LOW: 'app repository',
  APP_REPOSITORY_EMPTY_DESC: 'Please add an app repository.',
  EDIT_APP_REPO: 'Editar repositorio de aplicaciones',
  'HTTP access denied': 'Acceso HTTP denegado',
  INDEX_REPO: 'Indexar repositorio',
  'Invalid format of credential': 'Formato de credencial no válido',
  'Invalid format of URL': 'Formato de URL no válido',
  'Invalid HTTP Scheme': 'Esquema HTTP no válido',
  'Invalid HTTPS Scheme': 'Esquema HTTPS no válido',
  'Invalid Providers': 'Proveedores no válidos',
  'Invalid Repo URL': 'URL de repositorio no válida',
  'Invalid S3 Scheme': 'Esquema S3 no válido',
  'Invalid type': 'Tipo no válido',
  INVALID_URL_DESC: 'Invalid URL.',
  VALID_URL_DESC: 'Valid URL.',
  'Missing access key ID': 'Falta la ID de la clave de acceso',
  'Missing secret access key': 'Falta la clave de acceso secreta',
  'Please input access key ID and secret access key':
    'Introduce la ID de la clave de acceso y la clave de acceso secreta',
  WEBHOOK_URL_DESC: 'Please enter a webhook URL.',
  'S3 access denied': 'Acceso S3 denegado',
  Synchronize: 'Sincronizar',
  syncing: 'syncing',
  'Unrecognized URL': 'URL no reconocida',
  VALIDATE: 'Validar',
  SYNC_INTERVAL: 'Synchronization Interval',
  SYNC_INTERVAL_DESC:
    'Set a synchronization interval. The value range is 3 minutes to 24 hours. The default value 0 indicates no synchronization.',
  SYNC_PERIOD_EMPTY_DESC: 'Please set a synchronization interval.',
  SYNC_INTERVAL_INVALID:
    'El valor no es válido, ingrese 0 o un número entero positivo.',
  'App Repositorys': 'Repositorios de aplicaciones',
  APP_REPO_URL_DESC:
    'The URL needs to be validated before you add or edit an app repository.',
  APP_REPOSITORY_CREATE_DESC:
    'Puedes agregar un repositorio de aplicaciones de terceros que admita aplicaciones Kubernetes basadas en Helm.',
  APP_REPO_DESC:
    'An app repository is a repository used to store application templates. You can add an app repository to deploy and manage its applications.',
  HOW_TO_USE_APP_REPO_Q: '¿Cómo usar un repositorio de aplicaciones?',
  HOW_TO_USE_APP_REPO_A:
    'You need to go to your project in the workspace. When you deploy a new app, select <b>From App Template</b> and then choose an app repository in the drop-down list to deploy an app in the repository.',

  // App Repositories > Details
  SYNC_INTERVAL_TIP:
    'The value range is 3 minutes to 24 hours. Please enter a valid value.',
  SECONDS: 'Seconds',
  MINUTES: 'Minutes',
  HOURS: 'Hours',
  'Add Rule': 'Añadir regla',
  Alerting: 'Alertando',
  NOTIFICATION_SUMMARY: 'Summary',
  NOTIFICATION_MESSAGE: 'Notification Message',
  'Alerting Detail': 'Detalles de alertas',
  ALERTING_HISTORY: 'Historial de alertas',
  ALERTING_MESSAGE: 'Mensaje de alerta',
  'Alerting Messages': 'Mensajes de alerta',
  ALERT_MONITORING: 'Alerting Monitoring',
  'Alerting Policies': 'Políticas de alerta',
  'alerting policy': 'política de alerta',
  ALERTING_POLICY: 'Política de alerta',
  ALERTING_POLICY_PL: 'Alerting Policies',
  ALERTING_POLICY_LOW: 'alerting policy',
  ALERTING_RESOURCE: 'Alerting Resource',
  'alerting rule': 'regla de alerta',
  ALERTING_RULE: 'Regla de Alerta',
  RULE_SETTINGS: 'Rule Settings',
  ALERTING_STATUS: 'Estado de Alerta',
  'Alerting Duration': 'Alerting Duration',
  ALERTING_SEVERITY: 'Gravedad de alerta',
  ALERTING_TYPE: 'Tipo de alerta',
  ALERTING_NAME: 'Nombre de la alerta',
  SEVERITY: 'Tipo de alerta',
  Condition: 'Condición',
  'cpu usage': 'uso de CPU',
  CPU_USAGE_SCAP: 'ratio de uso de CPU',
  DISK_READ_IOPS: 'iops de lectura de disco',
  DISK_READ_THROUGHPUT: 'rendimiento de lectura de disco',
  DISK_SPACE_AVAILABLE: 'espacio de disco disponible',
  DISK_WRITE_IOPS: 'iops de escritura de disco',
  DISK_WRITE_THROUGHPUT: 'rendimiento de escritura en disco',
  'Edit Rule': 'Editar regla',
  DISK_SPACE_USAGE: 'ratio de utilización de espacio del disco local',
  MEMORY_AVAILABLE: 'memoria disponible',
  'memory usage': 'uso de memoria',
  MEMORY_USAGE_CACHE: 'Memory usage (including caches)',
  'memory utilisation (including cache)': 'uso de memoria (incluyendo caché)',
  MEMORY_USAGE_SCAP: 'ratio de uso de memoria',

  CRITICAL_ALERT: 'Critical',
  ERROR_ALERT: 'Error',
  WARNING_ALERT: 'Warning',

  'Monitoring Rules': 'Regla de monitorización',
  'monitoring target': 'objetivo de monitorización',
  MONITORING_TARGETS: 'Monitoring Targets',
  DATA_RECEIVE_RATE: 'ratio de datos de red recibidos',
  DATA_SEND_RATE: 'Network data sending rate',
  'Notification Channel': 'Canal de notificación',
  'Notification List': 'Lista de Notificación',
  'Notification Settings': 'Notification Settings',
  SET_RULE_DESC: 'Please set an alerting rule.',
  'Please input the threshold': 'Por favor, introduce el umbral',
  ABNORMAL_PODS: 'Relación anormal pod',
  POD_USAGE_SCAP: 'ratio de utilización de pod',
  ACTIVATION_TIME: 'Activation Time',
  'Recent Notification': 'Notificación reciente',
  'Recovery Time': 'Tiempo de Recuperación',
  'Repeat Rule': 'Regla de Repetición',
  Rule: 'Regla',
  RULE: 'Regla',
  'Rule Name': 'Nombre de la Regla',
  THRESHOLD: 'Umbral',
  UNAVAILABLE_REPLICAS: 'Unavailable replicas',
  'Unavailable daemonset replicas ratio':
    'Ratio de replicas de daemonset no disponibles',
  'Unavailable deployment replicas ratio':
    'Ratio de replicas de despliegues no disponibles',
  'Unavailable statefulset replicas ratio':
    'Ratio de replicas de statefulset no disponibles',
  VIEW_DETAILS: 'Ver detalles',

  RULE_TEMPLATE: 'Rule Template',
  CUSTOM_RULE: 'Custom Rule',
  RULE_EXPRESSION: 'Rule Expression',
  INVALID_TIME_DESC:
    'Invalid value. Please select a value from the drop-down list or enter 0 or a positive integer.',
  ALIAS: 'Alias',
  THRESHOLD_DURATION_MIN: 'Threshold Duration (min)',

  ENTER_RULE_EXPRESSION: 'Please enter a rule expression.',
  ALERT_FUNCTIONS: 'Functions',
  ALERT_METRICS: 'Metrics',
  ALERT_LABELS: 'Labels',
  ALERT_RATE_RANGES: 'Rate Ranges',

  NOTIFICATION_DETAILS: 'Details',

  CUSTOM_POLICIES: 'Custom Policies',
  BUILT_IN_POLICIES: 'Built-In Policies',

  CPU_LOAD_1: 'Average CPU load over 1 minute',
  CPU_LOAD_5: 'Average CPU load over 5 minutes',
  CPU_LOAD_15: 'Average CPU load over 15 minutes',
  ALERT_TYPE: 'Alerta {type}',
  ALERT_POLICY_DESC:
    'Alerting policies are a series of conditions used to monitor cluster resources. You can create alerting policies to monitor resources.',
  ALERT_MESSAGE_DESC:
    'Alert messages display details of triggered alerts that have met the conditions of the alert rules.',
  ALERTING_MESSAGE_EMPTY_DESC:
    'No alerting message is found in the current project.',
  ALERTING_POLICY_EMPTY_DESC:
    'You can notice if a resource is abnormal in real time by creating an alerting policy.',
  ALERTING_POLICY_CREATE_DESC:
    'You can create alerting policies to detect abnormal resources in real time.',

  SELECT_NODE_TIP: 'Please select at lease a cluster node.',
  SELECT_WORKLOAD_TIP: 'Please select at lease a workload.',

  EDIT_TCAP: 'Edit',
  EDIT_ALERTING_POLICY: 'Edit Alerting Policy',
  DELETE_TCAP: 'Delete',
  CREATE_ALERTING_POLICY: 'Create Alerting Policy',

  REQUESTS_FOR_TRIGGER_AN_ALARM_Q: 'How are alerting messages generated?',
  REQUESTS_FOR_TRIGGER_AN_ALARM_A:
    'You need to set an alerting policy for a resource. Alerting messages will be generated when the metric configured in the alerting policy reaches a threshold.',
  REQUESTS_FOR_PUSH_AN_ALARM_Q:
    '¿Pre-requisitos para un mensaje push de política de alerta?',
  REQUESTS_FOR_PUSH_AN_ALARM_A:
    'The platform administrator needs to select a notification method and configure the server corresponding to the method.',
  HOW_TO_SUPRESS_AN_ALARM_Q: '¿Cómo suprimir mensajes de alerta?',
  HOW_TO_SUPRESS_AN_ALARM_A:
    'You can set alerting policies at different levels. Each level corresponds to an alerting interval.',

  ALERT_DURATION:
    'An alert is firing when the threshold duration reaches the preset value.',
  ALERT_RULE_INACTIVE: 'Inactive',
  ALERT_RULE_PENDING: 'Pending',
  ALERT_RULE_FIRING: 'Firing',
  ALERT_RULE_HEALTH_OK: 'Healthy',
  ALERT_RULE_HEALTH_ERR: 'Error',
  ALERT_RULE_HEALTH_UNKNOWN: 'UnKnown',

  ALERT_RULE_EXPRESSION_DESC:
    'You can define a custom rule using PromQL statements. <a href="https://prometheus.io/docs/prometheus/latest/querying/basics/" target="_blank" rel="noreferrer noopener">Learn More</a>',

  // Alerting Messages
  ALERTING_MESSAGE_PL: 'Alerting Messages',
  NO_DATA_DESC: 'No Data Found',
  MONITORING_TARGET: 'Monitoring Target',

  // Alerting Policies
  ALERTING_POLICIES: 'Alerting Policies',
  MESSAGE_SETTINGS: 'Message Settings',
  DEPLOYMENT: 'Deployment',
  DEPLOYMENT_PL: 'Deployments',
  STATEFULSET: 'StatefulSet',
  STATEFULSET_PL: 'StatefulSets',
  DAEMONSET: 'DaemonSet',
  DAEMONSET_PL: 'DaemonSets',
  DEPLOYMENTS_VALUE: 'Deployments: {value}',
  STATEFULSETS_VALUE: 'StatefulSets: {value}',
  DAEMONSETS_VALUE: 'DaemonSets: {value}',

  // Alerting Policies > Details
  NOTIFICATION_SUMMARY_COLON: 'Summary: ',
  DETAILS_COLON: 'Details: ',
  MONITORING_TARGETS_SCAP: 'Monitoring targets',
  ALERTING_RULE_SCAP: 'Alerting rule',
  THRESHOLD_DURATION: 'Threshold Duration',
}
