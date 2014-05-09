exports.scopes = [
/*Delete disk*/
[

    function (nock) {
      var result =
        nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/disks/xplattestdisk')
        .reply(200, "<Disk xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Label>xplattestdisk</Label><Location>West US</Location><LogicalDiskSizeInGB>10</LogicalDiskSizeInGB><MediaLink>http://acsforsdk2.blob.core.windows.net/disks/xplattestdisk</MediaLink><Name>xplattestdisk</Name><IsPremium>false</IsPremium></Disk>", {
          'cache-control': 'no-cache',
          'content-length': '352',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': '2918c12922633fd59121a3eb0a93576b',
          date: 'Thu, 21 Nov 2013 13:54:56 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .delete('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/disks/xplattestdisk?comp=media')
        .reply(200, "", {
          'cache-control': 'no-cache',
          'content-length': '0',
          server: '1.0.6198.27 (rd_rdfe_stable.131122-1638) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': 'f10377b502363bf8bc6f497adb627753',
          date: 'Mon, 25 Nov 2013 12:16:22 GMT'
        });
      return result;
    },
    function (nock) {
      var result =
        nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/acsforsdk2/keys')
        .reply(200, "<StorageService xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Url>https://management.core.windows.net/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/storageservices/acsforsdk2</Url><StorageServiceKeys><Primary>1IU5o+vRtVBLHC5RFtXXu/DYl6mmGKupYKWL+liqunMo/IbJxz8Y0hSAwMkOUTtsTpR9adL63fx2Ujd7mMGSaA==</Primary><Secondary>HrJd4UZKe6proYpL643G97R7zdeSJW7YBFCYtCX1Kl6LTBevmuMu3+H5UwROS9qJI4EFQZZnVfwHEWaz/Lh0FQ==</Secondary></StorageServiceKeys></StorageService>", {
          'cache-control': 'no-cache',
          'content-length': '513',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': '463ad078b2c93a928539137287b1d3b9',
          date: 'Thu, 21 Nov 2013 13:48:39 GMT'
        });
      return result;
    },
    function (nock) {
      var result =
        nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/storageservices/acsforsdk2')
        .reply(200, "<StorageService xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Url>https://management.core.windows.net/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/storageservices/acsforsdk2</Url><ServiceName>acsforsdk2</ServiceName><StorageServiceProperties><Description/><Location>West US</Location><Label>YWNzZm9yc2RrMg==</Label><Status>Created</Status><Endpoints><Endpoint>http://acsforsdk2.blob.core.windows.net/</Endpoint><Endpoint>http://acsforsdk2.queue.core.windows.net/</Endpoint><Endpoint>http://acsforsdk2.table.core.windows.net/</Endpoint></Endpoints><GeoReplicationEnabled>true</GeoReplicationEnabled><GeoPrimaryRegion>West US</GeoPrimaryRegion><GeoSecondaryRegion>East US</GeoSecondaryRegion><CreationTime>2013-09-10T19:24:30Z</CreationTime><CustomDomains/></StorageServiceProperties><ExtendedProperties/><Capabilities><Capability>PersistentVMRole</Capability></Capabilities></StorageService>", {
          'cache-control': 'no-cache',
          'content-length': '948',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': '81dce72f88e8346c9690658e81211cb5',
          date: 'Thu, 21 Nov 2013 13:48:38 GMT'
        });
      return result;
    },
    function (nock) {
      var result =
        nock('http://acsforsdk2.blob.core.windows.net:80/')
        .delete('/disks/xplattestdisk')
        .reply(200, "", {
          'transfer-encoding': 'chunked',
          'last-modified': 'Thu, 21 Nov 2013 13:48:41 GMT',
          etag: '"0x8D0B4D785F9E331"',
          server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
          'x-ms-request-id': 'cc6902fe-f10a-44b3-b9e7-56fe9f0e85c5',
          'x-ms-version': '2012-02-12',
          'x-ms-copy-id': '067a3ac3-7fb2-47a8-a316-7b44b1108afa',
          'x-ms-copy-status': 'pending',
          date: 'Thu, 21 Nov 2013 13:48:41 GMT'
        });
      return result;
    }
  ]

  ]