// This file has been autogenerated.
exports.scopes = [
	/*endpoint create*/
  [

    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices')
        .reply(200, "<HostedServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><HostedService><Url>https://management.core.windows.net/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/hostedservices/xplattestvm</Url><ServiceName>xplattestvm</ServiceName><HostedServiceProperties><Description>Implicitly created hosted service</Description><Location>West US</Location><Label>eHBsYXR0ZXN0dm0=</Label><Status>Created</Status><DateCreated>2013-11-22T05:21:47Z</DateCreated><DateLastModified>2013-11-22T05:22:06Z</DateLastModified><ExtendedProperties/></HostedServiceProperties></HostedService></HostedServices>", {
          'cache-control': 'no-cache',
          'content-length': '4051',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': '5d885d0c15de3972b157f08150763761',
          date: 'Fri, 22 Nov 2013 05:21:37 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices/xplattestvm/deploymentslots/Production')
        .reply(200, "<Deployment xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>xplattestvm</Name><DeploymentSlot>Production</DeploymentSlot><PrivateID>170effaeb0e34121aa192c4b1ee0a4a8</PrivateID><Status>Running</Status><Label>ZUhCc1lYUjBaWE4wZG0wPQ==</Label><Url>http://xplattestvm.cloudapp.net/</Url><Configuration>PFNlcnZpY2VDb25maWd1cmF0aW9uIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL1NlcnZpY2VIb3N0aW5nLzIwMDgvMTAvU2VydmljZUNvbmZpZ3VyYXRpb24iPg0KICA8Um9sZSBuYW1lPSJ4cGxhdHRlc3R2bSI+DQogICAgPEluc3RhbmNlcyBjb3VudD0iMSIgLz4NCiAgPC9Sb2xlPg0KPC9TZXJ2aWNlQ29uZmlndXJhdGlvbj4=</Configuration><RoleInstanceList><RoleInstance><RoleName>xplattestvm</RoleName><InstanceName>xplattestvm</InstanceName><InstanceStatus>RoleStateUnknown</InstanceStatus><InstanceUpgradeDomain>0</InstanceUpgradeDomain><InstanceFaultDomain>0</InstanceFaultDomain><InstanceSize>Small</InstanceSize><InstanceStateDetails/><IpAddress>100.70.160.148</IpAddress><PowerState>Starting</PowerState></RoleInstance></RoleInstanceList><UpgradeDomainCount>1</UpgradeDomainCount><RoleList><Role i:type=\"PersistentVMRole\"><RoleName>xplattestvm</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType><SubnetNames/></ConfigurationSet></ConfigurationSets><DataVirtualHardDisks/><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>xplattestvm-xplattestvm-0-201311220521540165</DiskName><MediaLink>http://acsforsdk2.blob.core.windows.net/vm-images/m4j0trul.1z0201311220521530491.vhd</MediaLink><SourceImageName>xplattestimg</SourceImageName><OS>Linux</OS></OSVirtualHardDisk><RoleSize>Small</RoleSize></Role></RoleList><SdkVersion/><Locked>false</Locked><RollbackAllowed>false</RollbackAllowed><CreatedTime>2013-11-22T05:21:52Z</CreatedTime><LastModifiedTime>2013-11-22T05:22:10Z</LastModifiedTime><ExtendedProperties/><PersistentVMDowntime><StartTime>2013-09-28T08:00:00Z</StartTime><EndTime>2013-10-04T20:00:00Z</EndTime><Status>PersistentVMUpdateCompleted</Status></PersistentVMDowntime><VirtualIPs><VirtualIP><Address>138.91.158.10</Address><IsDnsProgrammed>true</IsDnsProgrammed><Name>__PseudoBackEndContractVip</Name></VirtualIP></VirtualIPs></Deployment>", {
          'cache-control': 'no-cache',
          'content-length': '2445',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': '23b475bd87883e1e9335b43052357f49',
          date: 'Fri, 22 Nov 2013 05:22:18 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices/xplattestvm/deployments/xplattestvm/roles/xplattestvm')
        .reply(200, "<PersistentVMRole xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RoleName>xplattestvm</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType></ConfigurationSet></ConfigurationSets><DataVirtualHardDisks/><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>xplattestvm-xplattestvm-0-201311251107570168</DiskName><MediaLink>http://acsforsdk2.blob.core.windows.net/vm-images/joevo4p1.agv201311251107560590.vhd</MediaLink><SourceImageName>xplattestimg</SourceImageName><OS>Linux</OS></OSVirtualHardDisk><RoleSize>Small</RoleSize></PersistentVMRole>", {
          'cache-control': 'no-cache',
          'content-length': '751',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.27 (rd_rdfe_stable.131122-1638) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': 'ac92d972984e3278b06c8605f904a52f',
          date: 'Mon, 25 Nov 2013 11:08:44 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .filteringRequestBody(function (path) {
          return '*';
        })
        .put('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices/xplattestvm/deployments/xplattestvm/roles/xplattestvm', '*')
        .reply(202, "", {
          'cache-control': 'no-cache',
          'content-length': '0',
          server: '1.0.6198.27 (rd_rdfe_stable.131122-1638) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': 'a7be9dfaad173db1b22898769753b420',
          date: 'Mon, 25 Nov 2013 11:08:48 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/operations/a7be9dfaad173db1b22898769753b420')
        .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>287dc4ae-e07e-3a56-96bf-b54a5d0a59d0</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", {
          'cache-control': 'no-cache',
          'content-length': '232',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.27 (rd_rdfe_stable.131122-1638) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': 'd80c95b1b1613fc3b43e84c57c4c21a6',
          date: 'Mon, 25 Nov 2013 05:29:07 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices')
        .reply(200, "<HostedServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><HostedService><Url>https://management.core.windows.net/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/hostedservices/xplattestvm</Url><ServiceName>xplattestvm</ServiceName><HostedServiceProperties><Description>Implicitly created hosted service</Description><Location>West US</Location><Label>eHBsYXR0ZXN0dm0=</Label><Status>Created</Status><DateCreated>2013-11-22T05:21:47Z</DateCreated><DateLastModified>2013-11-22T05:22:06Z</DateLastModified><ExtendedProperties/></HostedServiceProperties></HostedService></HostedServices>", {
          'cache-control': 'no-cache',
          'content-length': '4051',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': '5d885d0c15de3972b157f08150763761',
          date: 'Fri, 22 Nov 2013 05:21:37 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices/xplattestvm/deploymentslots/Production')
        .reply(200, "<Deployment xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>xplattestvm</Name><DeploymentSlot>Production</DeploymentSlot><PrivateID>e9804a25c4df45969e11947bf91e892f</PrivateID><Status>Running</Status><Label>ZUhCc1lYUjBaWE4wZG0wPQ==</Label><Url>http://xplattestvm.cloudapp.net/</Url><Configuration>PFNlcnZpY2VDb25maWd1cmF0aW9uIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL1NlcnZpY2VIb3N0aW5nLzIwMDgvMTAvU2VydmljZUNvbmZpZ3VyYXRpb24iPg0KICA8Um9sZSBuYW1lPSJ4cGxhdHRlc3R2bSI+DQogICAgPEluc3RhbmNlcyBjb3VudD0iMSIgLz4NCiAgPC9Sb2xlPg0KPC9TZXJ2aWNlQ29uZmlndXJhdGlvbj4=</Configuration><RoleInstanceList><RoleInstance><RoleName>xplattestvm</RoleName><InstanceName>xplattestvm</InstanceName><InstanceStatus>Provisioning</InstanceStatus><InstanceUpgradeDomain>0</InstanceUpgradeDomain><InstanceFaultDomain>0</InstanceFaultDomain><InstanceSize>Small</InstanceSize><InstanceStateDetails/><IpAddress>10.119.62.22</IpAddress><InstanceEndpoints><InstanceEndpoint><Name>TestEndpoint</Name><Vip>168.62.9.152</Vip><PublicPort>8080</PublicPort><LocalPort>80</LocalPort><Protocol>tcp</Protocol></InstanceEndpoint></InstanceEndpoints><PowerState>Started</PowerState></RoleInstance></RoleInstanceList><UpgradeDomainCount>1</UpgradeDomainCount><RoleList><Role i:type=\"PersistentVMRole\"><RoleName>xplattestvm</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType><InputEndpoints><InputEndpoint><LocalPort>80</LocalPort><Name>TestEndpoint</Name><Port>8080</Port><Protocol>tcp</Protocol><Vip>168.62.9.152</Vip><EnableDirectServerReturn>true</EnableDirectServerReturn></InputEndpoint></InputEndpoints><SubnetNames/></ConfigurationSet></ConfigurationSets><DataVirtualHardDisks/><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>xplattestvm-xplattestvm-0-201311251107570168</DiskName><MediaLink>http://acsforsdk2.blob.core.windows.net/vm-images/joevo4p1.agv201311251107560590.vhd</MediaLink><SourceImageName>xplattestimg</SourceImageName><OS>Linux</OS></OSVirtualHardDisk><RoleSize>Small</RoleSize></Role></RoleList><SdkVersion/><Locked>false</Locked><RollbackAllowed>false</RollbackAllowed><CreatedTime>2013-11-25T11:07:55Z</CreatedTime><LastModifiedTime>2013-11-25T11:09:31Z</LastModifiedTime><ExtendedProperties/><PersistentVMDowntime><StartTime>2013-09-28T08:00:00Z</StartTime><EndTime>2013-10-04T20:00:00Z</EndTime><Status>PersistentVMUpdateCompleted</Status></PersistentVMDowntime><VirtualIPs><VirtualIP><Address>168.62.9.152</Address><IsDnsProgrammed>true</IsDnsProgrammed><Name>xplattestvmContractContract</Name></VirtualIP></VirtualIPs></Deployment>", {
          'cache-control': 'no-cache',
          'content-length': '2875',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.27 (rd_rdfe_stable.131122-1638) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': 'dcc2662a26ee3fd989438288205b27aa',
          date: 'Mon, 25 Nov 2013 11:09:32 GMT'
        });
      return result;
    }
  ],
  /*Multiple_Endpoints*/
  [

    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices')
        .reply(200, "<HostedServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><HostedService><Url>https://management.core.windows.net/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/hostedservices/xplattestvm</Url><ServiceName>xplattestvm</ServiceName><HostedServiceProperties><Description>Implicitly created hosted service</Description><Location>West US</Location><Label>eHBsYXR0ZXN0dm0=</Label><Status>Created</Status><DateCreated>2013-11-22T05:21:47Z</DateCreated><DateLastModified>2013-11-22T05:22:06Z</DateLastModified><ExtendedProperties/></HostedServiceProperties></HostedService></HostedServices>", {
          'cache-control': 'no-cache',
          'content-length': '4051',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': '5d885d0c15de3972b157f08150763761',
          date: 'Fri, 22 Nov 2013 05:21:37 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices/xplattestvm/deploymentslots/Production')
        .reply(200, "<Deployment xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>xplattestvm</Name><DeploymentSlot>Production</DeploymentSlot><PrivateID>170effaeb0e34121aa192c4b1ee0a4a8</PrivateID><Status>Running</Status><Label>ZUhCc1lYUjBaWE4wZG0wPQ==</Label><Url>http://xplattestvm.cloudapp.net/</Url><Configuration>PFNlcnZpY2VDb25maWd1cmF0aW9uIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL1NlcnZpY2VIb3N0aW5nLzIwMDgvMTAvU2VydmljZUNvbmZpZ3VyYXRpb24iPg0KICA8Um9sZSBuYW1lPSJ4cGxhdHRlc3R2bSI+DQogICAgPEluc3RhbmNlcyBjb3VudD0iMSIgLz4NCiAgPC9Sb2xlPg0KPC9TZXJ2aWNlQ29uZmlndXJhdGlvbj4=</Configuration><RoleInstanceList><RoleInstance><RoleName>xplattestvm</RoleName><InstanceName>xplattestvm</InstanceName><InstanceStatus>RoleStateUnknown</InstanceStatus><InstanceUpgradeDomain>0</InstanceUpgradeDomain><InstanceFaultDomain>0</InstanceFaultDomain><InstanceSize>Small</InstanceSize><InstanceStateDetails/><IpAddress>100.70.160.148</IpAddress><PowerState>Starting</PowerState></RoleInstance></RoleInstanceList><UpgradeDomainCount>1</UpgradeDomainCount><RoleList><Role i:type=\"PersistentVMRole\"><RoleName>xplattestvm</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType><SubnetNames/></ConfigurationSet></ConfigurationSets><DataVirtualHardDisks/><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>xplattestvm-xplattestvm-0-201311220521540165</DiskName><MediaLink>http://acsforsdk2.blob.core.windows.net/vm-images/m4j0trul.1z0201311220521530491.vhd</MediaLink><SourceImageName>xplattestimg</SourceImageName><OS>Linux</OS></OSVirtualHardDisk><RoleSize>Small</RoleSize></Role></RoleList><SdkVersion/><Locked>false</Locked><RollbackAllowed>false</RollbackAllowed><CreatedTime>2013-11-22T05:21:52Z</CreatedTime><LastModifiedTime>2013-11-22T05:22:10Z</LastModifiedTime><ExtendedProperties/><PersistentVMDowntime><StartTime>2013-09-28T08:00:00Z</StartTime><EndTime>2013-10-04T20:00:00Z</EndTime><Status>PersistentVMUpdateCompleted</Status></PersistentVMDowntime><VirtualIPs><VirtualIP><Address>138.91.158.10</Address><IsDnsProgrammed>true</IsDnsProgrammed><Name>__PseudoBackEndContractVip</Name></VirtualIP></VirtualIPs></Deployment>", {
          'cache-control': 'no-cache',
          'content-length': '2445',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': '23b475bd87883e1e9335b43052357f49',
          date: 'Fri, 22 Nov 2013 05:22:18 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices/xplattestvm/deployments/xplattestvm/roles/xplattestvm')
        .reply(200, "<PersistentVMRole xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><RoleName>xplattestvm</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType></ConfigurationSet></ConfigurationSets><DataVirtualHardDisks/><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>xplattestvm-xplattestvm-0-201311251107570168</DiskName><MediaLink>http://acsforsdk2.blob.core.windows.net/vm-images/joevo4p1.agv201311251107560590.vhd</MediaLink><SourceImageName>xplattestimg</SourceImageName><OS>Linux</OS></OSVirtualHardDisk><RoleSize>Small</RoleSize></PersistentVMRole>", {
          'cache-control': 'no-cache',
          'content-length': '751',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.27 (rd_rdfe_stable.131122-1638) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': 'ac92d972984e3278b06c8605f904a52f',
          date: 'Mon, 25 Nov 2013 11:08:44 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .filteringRequestBody(function (path) {
          return '*';
        })
        .put('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices/xplattestvm/deployments/xplattestvm/roles/xplattestvm', '*')
        .reply(202, "", {
          'cache-control': 'no-cache',
          'content-length': '0',
          server: '1.0.6198.27 (rd_rdfe_stable.131122-1638) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': 'a7be9dfaad173db1b22898769753b420',
          date: 'Mon, 25 Nov 2013 11:08:48 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/operations/a7be9dfaad173db1b22898769753b420')
        .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>287dc4ae-e07e-3a56-96bf-b54a5d0a59d0</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", {
          'cache-control': 'no-cache',
          'content-length': '232',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.27 (rd_rdfe_stable.131122-1638) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': 'd80c95b1b1613fc3b43e84c57c4c21a6',
          date: 'Mon, 25 Nov 2013 05:29:07 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices')
        .reply(200, "<HostedServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><HostedService><Url>https://management.core.windows.net/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/hostedservices/xplattestvm</Url><ServiceName>xplattestvm</ServiceName><HostedServiceProperties><Description>Implicitly created hosted service</Description><Location>West US</Location><Label>eHBsYXR0ZXN0dm0=</Label><Status>Created</Status><DateCreated>2013-11-22T05:21:47Z</DateCreated><DateLastModified>2013-11-22T05:22:06Z</DateLastModified><ExtendedProperties/></HostedServiceProperties></HostedService></HostedServices>", {
          'cache-control': 'no-cache',
          'content-length': '4051',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': '5d885d0c15de3972b157f08150763761',
          date: 'Fri, 22 Nov 2013 05:21:37 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices/xplattestvm/deploymentslots/Production')
        .reply(200, "<Deployment xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>xplattestvm</Name><DeploymentSlot>Production</DeploymentSlot><PrivateID>e9804a25c4df45969e11947bf91e892f</PrivateID><Status>Running</Status><Label>ZUhCc1lYUjBaWE4wZG0wPQ==</Label><Url>http://xplattestvm.cloudapp.net/</Url><Configuration>PFNlcnZpY2VDb25maWd1cmF0aW9uIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL1NlcnZpY2VIb3N0aW5nLzIwMDgvMTAvU2VydmljZUNvbmZpZ3VyYXRpb24iPg0KICA8Um9sZSBuYW1lPSJ4cGxhdHRlc3R2bSI+DQogICAgPEluc3RhbmNlcyBjb3VudD0iMSIgLz4NCiAgPC9Sb2xlPg0KPC9TZXJ2aWNlQ29uZmlndXJhdGlvbj4=</Configuration><RoleInstanceList><RoleInstance><RoleName>xplattestvm</RoleName><InstanceName>xplattestvm</InstanceName><InstanceStatus>Provisioning</InstanceStatus><InstanceUpgradeDomain>0</InstanceUpgradeDomain><InstanceFaultDomain>0</InstanceFaultDomain><InstanceSize>Small</InstanceSize><InstanceStateDetails/><IpAddress>10.119.62.22</IpAddress><InstanceEndpoints><InstanceEndpoint><Name>TestEndpoint</Name><Vip>168.62.9.152</Vip><PublicPort>8080</PublicPort><LocalPort>80</LocalPort><Protocol>tcp</Protocol></InstanceEndpoint></InstanceEndpoints><PowerState>Started</PowerState></RoleInstance></RoleInstanceList><UpgradeDomainCount>1</UpgradeDomainCount><RoleList><Role i:type=\"PersistentVMRole\"><RoleName>xplattestvm</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType><InputEndpoints><InputEndpoint><LocalPort>3333</LocalPort><Name>TestEndpoint</Name><Port>8080</Port><Protocol>tcp</Protocol><Vip>168.62.9.152</Vip><EnableDirectServerReturn>true</EnableDirectServerReturn></InputEndpoint><InputEndpoint><LocalPort>4454</LocalPort><Name>TestEndpoint</Name><Port>4444</Port><Protocol>tcp</Protocol><Vip>168.62.9.152</Vip><EnableDirectServerReturn>true</EnableDirectServerReturn></InputEndpoint></InputEndpoints><SubnetNames/></ConfigurationSet></ConfigurationSets><DataVirtualHardDisks/><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>xplattestvm-xplattestvm-0-201311251107570168</DiskName><MediaLink>http://acsforsdk2.blob.core.windows.net/vm-images/joevo4p1.agv201311251107560590.vhd</MediaLink><SourceImageName>xplattestimg</SourceImageName><OS>Linux</OS></OSVirtualHardDisk><RoleSize>Small</RoleSize></Role></RoleList><SdkVersion/><Locked>false</Locked><RollbackAllowed>false</RollbackAllowed><CreatedTime>2013-11-25T11:07:55Z</CreatedTime><LastModifiedTime>2013-11-25T11:09:31Z</LastModifiedTime><ExtendedProperties/><PersistentVMDowntime><StartTime>2013-09-28T08:00:00Z</StartTime><EndTime>2013-10-04T20:00:00Z</EndTime><Status>PersistentVMUpdateCompleted</Status></PersistentVMDowntime><VirtualIPs><VirtualIP><Address>168.62.9.152</Address><IsDnsProgrammed>true</IsDnsProgrammed><Name>xplattestvmContractContract</Name></VirtualIP></VirtualIPs></Deployment>", {
          'cache-control': 'no-cache',
          'content-length': '2445',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': '23b475bd87883e1e9335b43052357f49',
          date: 'Fri, 22 Nov 2013 05:22:18 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices')
        .reply(200, "<HostedServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><HostedService><Url>https://management.core.windows.net/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/hostedservices/xplattestvm</Url><ServiceName>xplattestvm</ServiceName><HostedServiceProperties><Description>Implicitly created hosted service</Description><AffinityGroup>affinity1</AffinityGroup><Label>dm5ldHZtdGVzdDI=</Label><Status>Created</Status><DateCreated>2013-11-20T22:13:19Z</DateCreated><DateLastModified>2013-11-20T22:13:39Z</DateLastModified><ExtendedProperties/></HostedServiceProperties></HostedService></HostedServices>", {
          'cache-control': 'no-cache',
          'content-length': '654',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': '5d885d0c15de3972b157f08150763761',
          date: 'Fri, 22 Nov 2013 05:21:37 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices/xplattestvm/deploymentslots/Production')
        .reply(200, "<Deployment xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>xplattestvm</Name><DeploymentSlot>Production</DeploymentSlot><PrivateID>e9804a25c4df45969e11947bf91e892f</PrivateID><Status>Running</Status><Label>ZUhCc1lYUjBaWE4wZG0wPQ==</Label><Url>http://xplattestvm.cloudapp.net/</Url><Configuration>PFNlcnZpY2VDb25maWd1cmF0aW9uIHhtbG5zOnhzZD0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEiIHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL1NlcnZpY2VIb3N0aW5nLzIwMDgvMTAvU2VydmljZUNvbmZpZ3VyYXRpb24iPg0KICA8Um9sZSBuYW1lPSJ4cGxhdHRlc3R2bSI+DQogICAgPEluc3RhbmNlcyBjb3VudD0iMSIgLz4NCiAgPC9Sb2xlPg0KPC9TZXJ2aWNlQ29uZmlndXJhdGlvbj4=</Configuration><RoleInstanceList><RoleInstance><RoleName>xplattestvm</RoleName><InstanceName>xplattestvm</InstanceName><InstanceStatus>Provisioning</InstanceStatus><InstanceUpgradeDomain>0</InstanceUpgradeDomain><InstanceFaultDomain>0</InstanceFaultDomain><InstanceSize>Small</InstanceSize><InstanceStateDetails/><IpAddress>10.119.62.22</IpAddress><InstanceEndpoints><InstanceEndpoint><Name>TestEndpoint</Name><Vip>168.62.9.152</Vip><PublicPort>8080</PublicPort><LocalPort>80</LocalPort><Protocol>tcp</Protocol></InstanceEndpoint></InstanceEndpoints><PowerState>Started</PowerState></RoleInstance></RoleInstanceList><UpgradeDomainCount>1</UpgradeDomainCount><RoleList><Role i:type=\"PersistentVMRole\"><RoleName>xplattestvm</RoleName><OsVersion/><RoleType>PersistentVMRole</RoleType><ConfigurationSets><ConfigurationSet i:type=\"NetworkConfigurationSet\"><ConfigurationSetType>NetworkConfiguration</ConfigurationSetType><InputEndpoints><InputEndpoint><LocalPort>3333</LocalPort><Name>TestEndpoint</Name><Port>8080</Port><Protocol>tcp</Protocol><Vip>168.62.9.152</Vip><EnableDirectServerReturn>true</EnableDirectServerReturn></InputEndpoint><InputEndpoint><LocalPort>4444</LocalPort><Name>TestEndpoint</Name><Port>4454</Port><Protocol>tcp</Protocol><Vip>168.62.9.152</Vip><EnableDirectServerReturn>true</EnableDirectServerReturn></InputEndpoint><InputEndpoint><LocalPort>5565</LocalPort><Name>TestEndpoint</Name><Port>5555</Port><Protocol>tcp</Protocol><Vip>168.62.9.152</Vip><EnableDirectServerReturn>false</EnableDirectServerReturn><LoadBalancedEndpointSetName>LbSet1</LoadBalancedEndpointSetName></InputEndpoint><InputEndpoint><LocalPort>6676</LocalPort><Name>TestEndpoint</Name><Port>6666</Port><Protocol>tcp</Protocol><Vip>168.62.9.152</Vip><EnableDirectServerReturn>false</EnableDirectServerReturn><LoadBalancedEndpointSetName>LbSet2</LoadBalancedEndpointSetName><LoadBalancerProbe><Protocol>http</Protocol><Port>7777</Port><Path>/prob/listner1</Path></LoadBalancerProbe></InputEndpoint></InputEndpoints><SubnetNames/></ConfigurationSet></ConfigurationSets><DataVirtualHardDisks/><OSVirtualHardDisk><HostCaching>ReadWrite</HostCaching><DiskName>xplattestvm-xplattestvm-0-201311251107570168</DiskName><MediaLink>http://acsforsdk2.blob.core.windows.net/vm-images/joevo4p1.agv201311251107560590.vhd</MediaLink><SourceImageName>xplattestimg</SourceImageName><OS>Linux</OS></OSVirtualHardDisk><RoleSize>Small</RoleSize></Role></RoleList><SdkVersion/><Locked>false</Locked><RollbackAllowed>false</RollbackAllowed><CreatedTime>2013-11-25T11:07:55Z</CreatedTime><LastModifiedTime>2013-11-25T11:09:31Z</LastModifiedTime><ExtendedProperties/><PersistentVMDowntime><StartTime>2013-09-28T08:00:00Z</StartTime><EndTime>2013-10-04T20:00:00Z</EndTime><Status>PersistentVMUpdateCompleted</Status></PersistentVMDowntime><VirtualIPs><VirtualIP><Address>168.62.9.152</Address><IsDnsProgrammed>true</IsDnsProgrammed><Name>xplattestvmContractContract</Name></VirtualIP></VirtualIPs></Deployment>", {
          'cache-control': 'no-cache',
          'content-length': '3720',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': '23b475bd87883e1e9335b43052357f49',
          date: 'Fri, 22 Nov 2013 05:22:18 GMT'
        });
      return result;
    }
  ]
]