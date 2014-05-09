exports.scopes = [

/* List Disk*/
[

    function (nock) { 
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/disks')
        .reply(200, "<Disks xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Disk><OS>Linux</OS><Label>asianux4</Label><Location>West US</Location><LogicalDiskSizeInGB>10</LogicalDiskSizeInGB><MediaLink>http://acsforsdk2.blob.core.windows.net/vhds/asianux4.vhd</MediaLink><Name>asianux4</Name><IsPremium>false</IsPremium></Disk></Disks>", {
          'cache-control': 'no-cache',
          'content-length': '365',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.12 (rd_rdfe_stable.131001-0757) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': 'e35f366509f81369badd171d37d21063',
          date: 'Mon, 14 Oct 2013 15:08:58 GMT'
        });
      return result;
    },
    function (nock) {
      var result = nock('https://management.core.windows.net:443')
        .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/disks/asianux4')
        .reply(200, "<Disk xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><OS>Linux</OS><Label>asianux4</Label><Location>West US</Location><LogicalDiskSizeInGB>10</LogicalDiskSizeInGB><MediaLink>http://acsforsdk2.blob.core.windows.net/vhds/asianux4.vhd</MediaLink><Name>asianux4</Name><IsPremium>false</IsPremium></Disk>", {
          'cache-control': 'no-cache',
          'content-length': '350',
          'content-type': 'application/xml; charset=utf-8',
          server: '1.0.6198.12 (rd_rdfe_stable.131001-0757) Microsoft-HTTPAPI/2.0',
          'x-ms-servedbyregion': 'ussouth',
          'x-ms-request-id': 'e35f366509f81369badd171d37d21063',
          date: 'Mon, 14 Oct 2013 15:08:58 GMT'
        });
      return result;
    }
  ]
  ]