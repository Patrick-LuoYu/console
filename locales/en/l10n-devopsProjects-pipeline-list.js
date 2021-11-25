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
  PULL_REQUEST_COUNT: 'Pull Requests',
  HEALTHY: 'Healthy',
  // List > Run
  // List > Edit
  // List > Copy
  COPY: 'Copy',

  // List > Delete
  // List > Create
  // List > Create > Basic Information
  PIPELINE_CREATE_DEVOPS_PROJECT_DESC:
    'Select the DevOps project to which the pipeline belongs.',
  CODE_REPOSITORY_OPTIONAL: 'Code Repository (optional)',

  // List > Create > Basic Information > Code Repository > GitHub
  SELECT_CREDENTIAL_DESC:
    'Select a credential used to access a code repository.',

  // List > Create > Basic Information > Code Repository > Bitbucket
  INCORRECT_USERNAME_OR_PASSWORD: 'Incorrect username or password.',

  // List > Create > Basic Information > Code Repository > Git
  CODE_REPOSITORY_ADDRESS_DESC: 'Use a repository that contains a Jenkinsfile.',
  CODE_REPOSITORY_ADDRESS_EMPTY_TIP:
    'Please enter the address of a code repository.',

  // List > Create > Advanced Settings
  BRANCH_RETENTION_PERIOD_DAYS: 'Branch Retention Period (days)',
  MAXIMUM_BRANCHES: 'Maximum Branches',
  DELETE_OUTDATED_BRANCHES_TIP:
    'Set the system to automatically delete outdated branches to save disk space.',
  BRANCH_RETENTION_PERIOD_DAYS_DESC:
    'Branches that exceed the retention period are deleted. The default value is 7.',
  MAXIMUM_BRANCHES_DESC:
    'When the number of branches exceeds the maximum number allowed, the earliest branch is deleted. The default value is 5.',
  ADD_STRATEGY: 'Add Strategy',
  ALL_BRANCHES: 'Include all branches',
  ONLY_PR_BRANCHES: 'Include only branches filed as PRs',
  EXCLUDE_PR_BRANCHES: 'Exclude branches filed as PRs',
  ENABLE_TAG_BRANCH_DISCOVERY: 'Enable tag discovery',
  DISABLE_TAG_BRANCH_DISCOVERY: 'Disable tag discovery',
  OPTIONS_PR_PARAMS_1: 'Pull the code with the PR merged',
  OPTIONS_PR_PARAMS_2: 'Pull the code at the point of the PR',
  OPTIONS_PR_PARAMS_3: 'Create two pipelines respectively',
  REGEX: 'Regular Expression',
  FILTER_BY_REGEX: 'Filter by Regex',
  FILTER_BY_REGEX_DESC:
    'Use a regular expression to filter branches, PRs, and tags',
  SCRIPT_PATH: 'Script Path',
  SCRIPT_PATH_DESC: 'Set the path of the Jenkinsfile in the code repository.',
  SCAN_TRIGGER: 'Scan Trigger',
  SCAN_PERIODICALLY: 'Scan periodically',
  SCAN_INTERVAL: 'Scan Interval',
  BUILD_TRIGGER: 'Build Trigger',
  WHEN_DELETE_PIPELINE_DESC:
    'When a pipeline is deleted, the tasks in the specified pipeline are automatically triggered.',
  WHEN_CREATE_PIPELINE_DESC:
    'When a new pipeline is created, the tasks in the specified pipeline are automatically triggered.',
  PIPELINE_EVENT_TRIGGER: 'Trigger through pipeline events',
  WHEN_CREATE_PIPELINE: 'Trigger on Pipeline Creation',
  WHEN_DELETE_PIPELINE: 'Trigger on Pipeline Deletion',
  CLONE_SETTINGS: 'Clone Settings',
  CLONE_TIMEOUT_PERIOD: 'Clone Timeout Period (min)',
  CLONE_DEPTH: 'Clone Depth',
  ENABLE_SHALLOW_CLONE: 'Enable shallow clone',
  WEBHOOK_PUSH_URL: 'Webhook Push URL',
  WEBHOOK_PUSH_DESC:
    'Push a message to this URL to trigger a scan of the repository. ',

  // List > Create > Advanced Settings (no repo specified) > Build Parameters > Add
  OPTIONS: 'Options',
  CHOICE_PARAM_OPTION_DESC:
    'Enter an option in each line. The first line is used as the default option.',
}
