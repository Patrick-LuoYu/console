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
  connected: '已连接',
  COPY: '复制',
  'Copy Successfully': '复制成功',
  Disconnect: '断开连接',
  disconnected: '未连接',
  'Download File': '下载文件',
  'Kubeconfig File': 'Kubeconfig 文件',
  'KubeSphere Terminal': 'KubeSphere 终端',
  'Launch kubectl': '启动 kubectl',
  'Put this into': '把它加入到',
  KUBECONFIG_TIP: `
    <h2><a id="KubeConfig__0"></a>配置方法</h2>
    <p>有关配置文件参数的详细信息，请参阅<a href="https://kubernetes.io/zh/docs/tasks/access-application-cluster/configure-access-multiple-clusters/" target="_blank">官方文档</a>。</p>
  `,
  VIEW_KUBE_CONFIG: 'kubeConfig 配置的相关操作包含查看和下载',
  KUBECTL_TIP: `
    <h2><a id="KubeCtl__0"></a>命令参考</h2>
    <p>有关 kubectl 的更多信息，请参阅<a href="https://kubernetes.io/zh/docs/reference/kubectl/overview/" target="_blank">官方文档</a>。</p>
    <h3><a id="kubectl__3"></a>自定义输出</h3>
    <ul>
    <li>查看容器组的更多信息。</li>
    </ul>
    <p><code>kubectl get pod &lt;pod-name&gt; -o wide</code></p>
    <ul>
    <li>查看 YAML 格式的容器组详情。</li>
    </ul>
    <p><code>kubectl get pod &lt;pod-name&gt; -o yaml</code></p>
    <h3><a id="kubectl__13"></a>执行操作</h3>
    <h4><a id="1__15"></a>创建资源</h4>
    <ul>
    <li>使用 YAML 配置文件创建服务。</li>
    </ul>
    <p><code>kubectl create -f my-service.yaml</code></p>
    <ul>
    <li>使用目录下的所有 YAML、YML 和 JSON 文件创建资源。</li>
    </ul>
    <p><code>kubectl create -f &lt;directory&gt;</code></p>
    <h4><a id="2__25"></a>查看资源</h4>
    <ul>
    <li>查看所有容器组。</li>
    </ul>
    <p><code>kubectl get pods</code></p>
    <ul>
    <li>查看所有服务。</li>
    </ul>
    <p><code>kubectl get services</code></p>
    <h4><a id="3__35"></a>查看资源详情</h4>
    <ul>
    <li>查看节点详情。</li>
    </ul>
    <p><code>kubectl describe nodes &lt;node-name&gt;</code></p>
    <ul>
    <li>查看容器组详情。</li>
    </ul>
    <p><code>kubectl describe pods/&lt;pod-name&gt;</code></p>
  `
};