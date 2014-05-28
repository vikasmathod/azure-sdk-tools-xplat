#!/usr/bin/python

import sys,os,subprocess
import time
import sys
import math
import subprocess as sp

counterr = 0
countok = 0
countprg = 0
countpercentage = 0



def create_file(path):
	if os.path.exists(path):
		os.remove(path)
	logfile = open(path,'a')
	return logfile


	
def execute_command_with_flag(cmd,logfile,flag,metalog):
	if(flag == "1"):
		p1 = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
		lines = p1.stdout.read()
		nooflines = len(lines)
		p1.wait()
		out,err =  p1.communicate()
		result = out.decode()
		if(err):
		 logerr.write(metalog)
		 for linerr in err:
		  logerr.write(linerr)
		 global counterr
		 counterr+=1
		 str1 = metalog.replace("*","")
		 print '\n' + str1 + '--FAIL' + '\n'
		else:
		 logfile.write(metalog)
		 for line in lines:
		  logfile.write(line)
		 global countok
		 countok+=1
		 str1 = metalog.replace("*","") 
		 print "\n" + str1 + "--PASS" + '\n'
   
def totalcases():
     print 'Total No of Pass:',countok
     print 'Total No of Fail:', counterr

def execute_command(cmd,logfile,metalog):
   	p1 = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
	lines = p1.stdout.read()
	nooflines = len(lines)
	p1.wait()
	out,err =  p1.communicate()
	result = out.decode()
	if(err):
	 logerr.write(metalog)
	 for linerr in err:
	  logerr.write(linerr)
	 global counterr
	 counterr+=1
	 str1 = metalog.replace("*","")
	 print str1 + '--FAIL' + '\n'
	else:
	 logfile.write(metalog)
	 for line in lines:
	  logfile.write(line)
	 global countok
	 countok+=1
	 str1 = metalog.replace("*","") 
	 print str1 + "--PASS" +"\n"
	

if __name__ == "__main__":
	from config import config
	logfile = create_file("" + config['LOG_FILE'] + "")
	logerr = create_file("" + config['LOG_FILERR'] + "")
	if(config['GLOBAL_FLAG'] == "1"):
		logfile.write("************** Test Summary Report **************** \n")
		metalog = "************** NPM CACHE CLEAR **************** \t" 
		execute_command("npm cache clear",logfile,metalog)		
		metalog = "************** NPM AZURE INSTALL **************** \t" 
		execute_command("npm install azure -g",logfile,metalog)		
		metalog = "************** Azure Help Command **************** \t"
		execute_command("azure",logfile,metalog)
		
		if(config['Azure_AD_Login_FLAG'] == "1"):
		 metalog = "************** Azure Login **************** \t" 
		 execute_command("azure login -u "+ config['LOGINUSER'] + " -p " + config['LOGINPASSWORD'] + " --quiet",logfile,metalog)
		else:
		 metalog = " ************** Azure Account Download ******************* \t"
		 execute_command("azure account download ",logfile,metalog)		
		 metalog = " ************** Azure Account Import ******************* \t"
		 execute_command("azure account import "+ config['PUBLISHSETTINGS_FILE'],logfile,metalog)		
		metalog = " ************** Azure Account List ******************* \t"
		execute_command("azure account list ",logfile,metalog)		
		metalog = " ************** Azure Account Set ******************* \t"
		execute_command("azure account set "+ config['SUBSCRIPTION_ID'],logfile,metalog)
		
		metalog = " ************** Azure Service List ******************* \t"
		execute_command("azure service list",logfile,metalog)
		
		metalog = "************** Azure Account Affinity Group List ******************* \t"
		execute_command("azure account affinity-group list ",logfile,metalog)
		metalog = "************** Azure Account Affinity Group Create ******************* \t"		
		execute_command("azure account affinity-group create -l "+config['LOCATION']+ " -e "+config['AFFINITY_GRP_LABEL']+ " -d "+config['AFFINITY_GRP_DESC']+ " " +config['AFFINITY_GRP_NAME'] ,logfile,metalog)		
		metalog = "************** Azure Account Affinity Group Show ******************* \t"		
		execute_command("azure account affinity-group show " +config['AFFINITY_GRP_NAME'] ,logfile,metalog)		
		
		metalog = "************** Azure Account Storage List ******************* \t"
		execute_command("azure account storage list ",logfile,metalog)		
		metalog = "************** Azure Location List ******************* \t"
		execute_command("azure vm location list",logfile,metalog)
		metalog = "************** Azure Config List ******************* \t"
		execute_command("azure config list ",logfile,metalog)		
		metalog = "************** Azure Config Set ******************* \t"
		execute_command("azure config set "+ config['CONFIG_KEY'] + " " + config['CONFIG_VALUE'],logfile,metalog)
		
		metalog = "************** Azure VM Disk List ******************* \t"
		execute_command("azure vm disk list",logfile,metalog)		
		metalog = "************** Azure VM Disk Create ******************* \t"
		execute_command("azure vm disk create -a " + config['AFFINITY_GRP_NAME'] + " -u "+config['DISK_IMAGE_BLOB_URL']+" -l " +config['LOCATION']+" -o "+'''"LINUX"''' + " -p 2 -m -f -e " + config['VM_DISK_LABEL'] + " -d "+ config['VM_DISK_DESC'] + " " + config['VM_DISK_IMAGE_NAME']+ " "+config['VM_DISK_SOURCE_PATH'],logfile,metalog)
		metalog = "************** Azure VM Disk Show ******************* \t"
		execute_command("azure vm disk show "+config['VM_DISK_IMAGE_NAME'],logfile,metalog)
		
		metalog = "************** Azure VM Image List ******************* \t"
		execute_command("azure vm image list",logfile,metalog)		
		metalog = "************** Azure VM Image Create ******************* \t"
		execute_command("azure vm image create -a " + config['AFFINITY_GRP_NAME'] + " -u "+config['IMAGE_BLOB_URL']+" -l " +config['LOCATION']+" -o "+'''"LINUX"'''+ " -p 2 -m -f -e " + config['VM_IMAGE_LABEL'] + " -d "+ config['VM_IMAGE_DESC'] + " " + config['VM_IMAGE_NAME']+ " " +config['DISK_IMAGE_BLOB_URL'],logfile,metalog)
		metalog = "************** Azure VM Image Show ******************* \t"
		execute_command("azure vm image show "+config['VM_IMAGE_NAME'],logfile,metalog)
		
		metalog = "************** Azure VM List ******************* \t"
		execute_command("azure vm list",logfile,metalog)		
		metalog = "************** Azure VM Create ******************* \t"
		execute_command("azure vm create "+config['VM_NAME']+" "+config['IMAGE_NAME']+" "+config['USER_NAME']+" "+config['PASSWORD']+" -l " +config['LOCATION']+" -e ",logfile,metalog)
		
		metalog = "************** Azure Disk List with VMName ************\t"
		execute_command("azure vm disk list "+config['VM_NAME'],logfile,metalog)
		
		metalog = "************** Azure Windows VM Create ******************* \t"
		execute_command("azure vm create "+config['VM_WIN_NAME']+" "+config['WIN_IMAGE_NAME']+" testuser "+config['PASSWORD']+" -l " +config['LOCATION'],logfile,metalog)
		
		metalog = "************** Azure VM Show ******************* \t"
		execute_command("azure vm show "+config['VM_NAME'],logfile,metalog)
		metalog = "************** Azure VM Start ******************* \t"
		execute_command("azure vm start "+config['VM_NAME'],logfile,metalog)
		
		metalog = "************** Azure VM Export ******************* \t"
		execute_command("azure vm export "+config['VM_NAME']+ " " + config['FILE_PATH'],logfile,metalog)
		
		metalog = "************** Azure VM End Point Create ******************* \t"
		execute_command("azure vm endpoint create "+config['VM_NAME']+" 21 23 ",logfile,metalog)
		metalog = "************** Azure VM End Point Create-Multiple ******************* \t"
		execute_command("azure vm endpoint create-multiple "+config['VM_NAME']+" "+config['ONLYPP_PUBLICPORT'] + ","+config['PPANDLP_PUBLICPORT'] +":"+config['PPANDLP_LOCALPORT']+","+config['PP_LPANDLBSET_PUBLICPORT'] +":"+config['PP_LPANDLBSET_LOCALPORT']+":"+config['PP_LPANDLBSET_PROTOCOL']+":"+config['PP_LPANDLBSET_ENABLEDIRECTSERVERRETURN']+":"+config['PP_LPANDLBSET_LOADBALANCERSETNAME']+","+config['PP_LP_LBSETANDPROB_PUBLICPORT'] +":"+config['PP_LP_LBSETANDPROB_LOCALPORT']+":"+config['PP_LP_LBSETANDPROB_PROTOCOL']+":"+config['PP_LP_LBSETANDPROB_ENABLEDIRECTSERVERRETURN']+":"+config['PP_LP_LBSETANDPROB_LOADBALANCERSETNAME']+":"+config['PP_LP_LBSETANDPROB_PROBPROTOCOL']+":"+config['PP_LP_LBSETANDPROB_PROBPORT'],logfile,metalog)
		metalog = "************** Azure VM End Point show ******************* \t"
		execute_command("azure vm endpoint show "+config['VM_NAME'],logfile,metalog)
		metalog = "************** Azure VM Endpoint List ******************* \t"
		execute_command("azure vm endpoint list "+config['VM_NAME'],logfile,metalog)
		metalog = "************** Azure VM Endpoint Update ******************* \t"
		execute_command("azure vm endpoint update "+config['VM_NAME']+ " tcp-4444-4454 -n testpoint ",logfile,metalog)
		metalog = "************** Azure VM Endpoint Delete ******************* \t"
		execute_command("azure vm endpoint delete "+config['VM_NAME']+ " testpoint ",logfile,metalog)
		
		metalog = "************** Azure VM Disk Attach ******************* \t"
		execute_command("azure vm disk attach "+config['VM_NAME']+" "+config['VM_DISK_IMAGE_NAME'],logfile,metalog)
		metalog = "************** Azure VM Disk Attach New ******************* \t"
		execute_command("azure vm disk attach-new "+config['VM_NAME']+" 177 "+config['VM_DISK_ATTACH_BLOB_URL'],logfile,metalog)
		metalog = "************** Azure VM Disk Detach ******************* \t"
		execute_command("azure vm disk detach "+config['VM_NAME']+" 1",logfile,metalog)
		execute_command("azure vm disk detach "+config['VM_NAME']+" 0",logfile,metalog)
		
		
		metalog = "************** Azure VM Restart ******************* \t"
		execute_command("azure vm restart "+config['VM_NAME'],logfile,metalog)
		metalog = "************** Azure VM ShutDown ******************* \t"
		execute_command("azure vm shutdown "+config['VM_NAME'],logfile,metalog)
		metalog = "************** Azure VM Capture ******************* \t"
		execute_command("azure vm capture "+config['VM_NAME']+" "+config['TARGET_IMG_NAME']+ " -t ",logfile,metalog)
		
		metalog = "************** Azure Network List ******************* \t"
		execute_command("azure network vnet list",logfile,metalog)
		metalog = "************** Azure Network Create ******************* \t"
		execute_command("azure network vnet create "+config['NETWORK_NAME'] + " -a "+config['AFFINITY_GRP_NAME'],logfile,metalog)
		metalog = "************** Azure Network Show ******************* \t"
		execute_command("azure network vnet show "+config['NETWORK_NAME'],logfile,metalog)
		metalog = "************** Azure VM Create_VNet ******************* \t"
		execute_command("azure vm create " + config['VM_VNET_NAME'] + " " + config['VM_VNET_IMAGE_NAME'] + " communityUser PassW0rd$ --virtual-network-name " + config['NETWORK_NAME'] + " -n vnet_img_vm --affinity-group "+config['AFFINITY_GRP_NAME'],logfile,metalog)
		metalog = "************** Azure VM Create_Size ******************* \t"
		execute_command("azure vm create " + config['VM_SIZE_NAME'] + " " + config['VM_VNET_IMAGE_NAME'] + " communityUser PassW0rd$ -z small -c -l "+config['LOCATION'],logfile,metalog)
		metalog = "************** Azure create VM_CUSTOM_DATA ******************* \t"
		execute_command("azure vm create -d " + config['CUSTOM_DATA_FILE'] + " " + config['VM_CUSTOMDATA_NAME'] + " " + config['VM_VNET_IMAGE_NAME'] + " communityUser PassW0rd$ -l "+config['LOCATION'],logfile,metalog)
		metalog = "************** Azure VM_VNet Delete ******************* \t"
		execute_command("azure vm delete "+config['VM_VNET_NAME'] + " -b --quiet ",logfile,metalog)
		metalog = "************** Azure VM_SIZE Delete ******************* \t"
		execute_command("azure vm delete "+config['VM_SIZE_NAME'] + " -b --quiet ",logfile,metalog)
		metalog = "************** Azure VM_CUSTOM_DATA Delete ******************* \t"
		execute_command("azure vm delete "+config['VM_CUSTOMDATA_NAME'] + " -b --quiet ",logfile,metalog)
		
		metalog = "************** Azure Service Delete ******************* \t"
		execute_command("azure service delete "+config['VM_NAME'] + " --quiet ",logfile,metalog)
		metalog = "************** Azure VM Create-from ******************* \t"
		execute_command("azure vm create-from "+config['VM_NAME']+" "+config['FILE_PATH'] + " -l " +config['LOCATION'],logfile,metalog)
		metalog = "************** Azure VM Community Image Create ******************* \t"
		execute_command("azure vm create " + config['VM_COMM_NAME'] + " -o "+config['VM_COMM_IMAGE_NAME']+" -l "+config['LOCATION']+" communityUser PassW0rd$",logfile,metalog)
		metalog = "************** Azure VM SSHCert Create ******************* \t"
		execute_command("azure vm create " + config['VM_SSH_NAME'] + " " + config['VM_VNET_IMAGE_NAME'] + " communityUser --ssh-cert "+config['CERT_FILE'] + " -e --no-ssh-password -r -l "+config['LOCATION'],logfile,metalog)
		metalog = "************** Azure VM Comm Delete ******************* \t"
		execute_command("azure vm delete "+config['VM_COMM_NAME'] + " -b --quiet ",logfile,metalog)
		metalog = "************** Azure VM SSHCert Delete ******************* \t"
		execute_command("azure vm delete "+config['VM_SSH_NAME'] + " -b --quiet",logfile,metalog)
		
		
		metalog = "************** Azure Network Delete ******************* \t"
		execute_command("azure network vnet delete "+config['NETWORK_NAME'] + " --quiet ",logfile,metalog)
		metalog = "************** Azure VM Delete ******************* \t"
		execute_command("azure vm delete "+config['VM_NAME'] + " -b --quiet ",logfile,metalog)
		metalog = "************** Azure Windows VM Delete ******************* \t"
		execute_command("azure vm delete "+config['VM_WIN_NAME'] + " -b --quiet ",logfile,metalog)
		
		metalog = "************* Azure VM Disk Upload ******************* \t"
		execute_command("azure vm disk upload "+config['DISK_UPLOAD_SOURCE_PATH']+" "+config['DISK_UPLOAD_BLOB_URL']+" "+config['STORAGE_ACCOUNT_KEY'],logfile,metalog)		
	
		metalog = "************* Azure VM Image Delete ******************* \t"
		execute_command("azure vm image delete "+config['VM_IMAGE_NAME'],logfile,metalog)
		metalog = "************** Azure VM Captured Image Delete ******************* \t"
		execute_command("azure vm image delete "+config['TARGET_IMG_NAME'],logfile,metalog)
		metalog = "************** Azure VM Disk Delete ******************* \t"
		execute_command("azure vm disk delete "+config['VM_DISK_IMAGE_NAME'],logfile,metalog)
		metalog = "************** Azure Affinity Group Delete ******************* \t"
		execute_command("azure account affinity-group delete "+config['AFFINITY_GRP_NAME'] + " --quiet",logfile,metalog)
		
		metalog = "************** Azure Account Clear ******************* \t"
		execute_command("azure account clear --quiet",logfile,metalog)
	if(config['GLOBAL_FLAG'] == "0"):
		logfile.write("************** Test Summary Report **************** \n")
		metalog = "************** NPM CACHE CLEAR **************** \t" 
		execute_command_with_flag("npm cache clear",logfile,config['NPM_CLEAR_FLAG'],metalog)	
		metalog = "************** NPM AZURE INSTALL **************** \t" 
		execute_command_with_flag("npm install azure -g",logfile,config['NPM_INSTALL_FLAG'],metalog)		
		metalog = "************** Azure Help Command **************** \t"
		execute_command_with_flag("azure",logfile,config['AZURE_HELP_FLAG'],metalog)
		
		if(config['Azure_AD_Login_FLAG'] == "1"):
		 metalog = "************** Azure Login **************** \t" 
		 execute_command_with_flag("azure login -u "+ config['LOGINUSER'] + " -p " + config['LOGINPASSWORD'] + " --quiet",logfile,config['AZURE_LOGIN_FLAG'],metalog)
		else:
		 metalog = "************** Azure Account Download ******************* \t"
		 execute_command_with_flag("azure account download ",logfile,config['ACCOUNT_DWNLD_FLAG'],metalog)		
		 metalog = "************* Azure Account Import ******************* \t"
		 execute_command_with_flag("azure account import "+ config['PUBLISHSETTINGS_FILE'],logfile,config['ACCOUNT_IMPRT_FLAG'],metalog)	
		metalog = "************** Azure Account List ******************* \t"
		execute_command_with_flag("azure account list ",logfile,config['ACCOUNT_LIST_FLAG'],metalog)		
		metalog = "************** Azure Account Set ******************* \t"
		execute_command_with_flag("azure account set "+ config['SUBSCRIPTION_ID'],logfile,config['ACCOUNT_SET_FLAG'],metalog)
		
		metalog = "************** Azure Service List ******************* \t"
		execute_command_with_flag("azure service list",logfile,config['AZURE_SERV_LIST_FLAG'],metalog)
		
		
		metalog = "************** Azure Account Affinity Group List ******************* \t"
		execute_command_with_flag("azure account affinity-group list",logfile,config['ACCOUNT_AFF_GRP_FLAG'],metalog)
		metalog = "************** Azure Account Affinity Group Create ******************* \t"		
		execute_command_with_flag("azure account affinity-group create -l "+config['LOCATION']+ " -e "+config['AFFINITY_GRP_LABEL']+ " -d "+config['AFFINITY_GRP_DESC']+ " " +config['AFFINITY_GRP_NAME'] ,logfile,config['ACCOUNT_AFF_GRP_CREATE_FLAG'],metalog)		
		metalog = "************** Azure Account Affinity Group Show ******************* \t"		
		execute_command_with_flag("azure account affinity-group show " +config['AFFINITY_GRP_NAME'] ,logfile,config['ACCOUNT_AFF_GRP_SHOW_FLAG'],metalog)		
		
		metalog = "************** Azure Account Storage List ******************* \t"
		execute_command_with_flag("azure account storage list",logfile,config['ACCOUNT_STORAGE_LIST_FLAG'],metalog)		
		metalog = "************** Azure Location List ******************* \t"
		execute_command_with_flag("azure vm location list",logfile,config['AZURE_LOC_LIST_FLAG'],metalog)
		metalog = "************** Azure Config List ******************* \t"
		execute_command_with_flag("azure config list",logfile,config['ACCOUNT_CONFIG_LIST_FLAG'],metalog)		
		metalog = "************** Azure Config Set ******************* \t"
		execute_command_with_flag("azure config set "+ config['CONFIG_KEY'] + " " + config['CONFIG_VALUE'],logfile,config['ACCOUNT_CONFIG_SET_FLAG'],metalog)
		
		metalog = "************** Azure VM Disk List ******************* \t"
		execute_command_with_flag("azure vm disk list",logfile,config['DISK_LIST_FLAG'],metalog)		
		metalog = "************** Azure VM Disk Create ******************* \t"
		execute_command_with_flag("azure vm disk create -a " + config['AFFINITY_GRP_NAME'] + " -u "+config['DISK_IMAGE_BLOB_URL']+" -l " +config['LOCATION']+" -o "+'''"LINUX"''' + " -p 2 -m -f -e " + config['VM_DISK_LABEL'] + " -d "+ config['VM_DISK_DESC'] + " " + config['VM_DISK_IMAGE_NAME']+ " "+config['VM_DISK_SOURCE_PATH'],logfile,config['DISK_CREATE_FLAG'],metalog)
		metalog = "************** Azure VM Disk Show ******************* \t"
		execute_command_with_flag("azure vm disk show "+config['VM_DISK_IMAGE_NAME'],logfile,config['DISK_SHOW_FLAG'],metalog)
		
		metalog = "************** Azure VM Image List ******************* \t"
		execute_command_with_flag("azure vm image list",logfile,config['IMAGE_LIST_FLAG'],metalog)		
		metalog = "************** Azure VM Image Create ******************* \t"
		execute_command_with_flag("azure vm image create -a " + config['AFFINITY_GRP_NAME'] + " -u "+config['IMAGE_BLOB_URL']+" -l " +config['LOCATION']+" -o "+'''"LINUX"'''+ " -p 2 -m -f -e " + config['VM_IMAGE_LABEL'] + " -d "+ config['VM_IMAGE_DESC'] + " " + config['VM_IMAGE_NAME']+ " " +config['DISK_IMAGE_BLOB_URL'],logfile,config['IMAGE_CREATE_FLAG'],metalog)
		metalog = "************** Azure VM Image Show ******************* \t"
		execute_command_with_flag("azure vm image show "+config['VM_IMAGE_NAME'],logfile,config['IMAGE_SHOW_FLAG'],metalog)
		
		metalog = "************** Azure VM List ******************* \t"
		execute_command_with_flag("azure vm list",logfile,config['VM_LIST_FLAG'],metalog)		
		metalog = "************** Azure VM Create ******************* \t"
		execute_command_with_flag("azure vm create "+config['VM_NAME']+" "+config['IMAGE_NAME']+" "+config['USER_NAME']+" "+config['PASSWORD']+" -l " +config['LOCATION']+" -e ",logfile,config['VM_CREATE_FLAG'],metalog)
		
		metalog = "************** Azure Disk List with VMName ************\t"
		execute_command_with_flag("azure vm disk list "+config['VM_NAME'],logfile,config['DISK_LIST_VM_NAME_FLAG'],metalog)
		
		metalog = "************** Azure Windows VM Create ******************* \t"
		execute_command_with_flag("azure vm create "+config['VM_WIN_NAME']+" "+config['WIN_IMAGE_NAME']+" testuser "+config['PASSWORD']+" -l " +config['LOCATION'],logfile,config['VM_CREATE_FLAG'],metalog)
		metalog = "************** Azure VM Show ******************* \t"
		execute_command_with_flag("azure vm show "+config['VM_NAME'],logfile,config['VM__SHOW_FLAG'],metalog)
		metalog = "************** Azure VM Start ******************* \t"
		execute_command_with_flag("azure vm start "+config['VM_NAME'],logfile,config['VM_START_FLAG'],metalog)
		
		metalog = "************** Azure VM Export ******************* \t"
		execute_command_with_flag("azure vm export "+config['VM_NAME']+ " " + config['FILE_PATH'],logfile,config['VM_EXPORT_FLAG'],metalog)
		
		metalog = "************** Azure VM End Point Create ******************* \t"
		execute_command_with_flag("azure vm endpoint create "+config['VM_NAME']+" 21 23 ",logfile,config['VM_ENDPNT_CREATE_FLAG'],metalog)
		metalog = "************** Azure VM End Point Create-Multiple ******************* \t"
		execute_command_with_flag("azure vm endpoint create-multiple "+config['VM_NAME']+" "+config['ONLYPP_PUBLICPORT'] + ","+config['PPANDLP_PUBLICPORT'] +":"+config['PPANDLP_LOCALPORT']+","+config['PP_LPANDLBSET_PUBLICPORT'] +":"+config['PP_LPANDLBSET_LOCALPORT']+":"+config['PP_LPANDLBSET_PROTOCOL']+":"+config['PP_LPANDLBSET_ENABLEDIRECTSERVERRETURN']+":"+config['PP_LPANDLBSET_LOADBALANCERSETNAME']+","+config['PP_LP_LBSETANDPROB_PUBLICPORT'] +":"+config['PP_LP_LBSETANDPROB_LOCALPORT']+":"+config['PP_LP_LBSETANDPROB_PROTOCOL']+":"+config['PP_LP_LBSETANDPROB_ENABLEDIRECTSERVERRETURN']+":"+config['PP_LP_LBSETANDPROB_LOADBALANCERSETNAME']+":"+config['PP_LP_LBSETANDPROB_PROBPROTOCOL']+":"+config['PP_LP_LBSETANDPROB_PROBPORT'],logfile,config['VM_ENDPNT_CREATE_MUL_FLAG'],metalog)
		metalog = "************** Azure VM End Point show ******************* \t"
		execute_command_with_flag("azure vm endpoint show "+config['VM_NAME'],logfile,config['VM_ENDPNT_SHOW_FLAG'],metalog)
		metalog = "************** Azure VM Endpoint List ******************* \t"
		execute_command_with_flag("azure vm endpoint list "+config['VM_NAME'],logfile,config['VM_ENDPNT_LIST_FLAG'],metalog)
		metalog = "************** Azure VM Endpoint Update ******************* \t"
		# execute_command_with_flag("azure vm endpoint update "+config['VM_NAME']+ " tcp-4444-4454 -n testpoint ",logfile,config['VM_ENDPNT_UPD_FLAG'],metalog)
		execute_command_with_flag("azure vm endpoint update "+config['VM_NAME']+ " -n tcp-5555-5565 +" "+ -l 4440 +" "+ -t 4441 +" " +",logfile,config['VM_ENDPNT_UPD_FLAG'],metalog)
		metalog = "************** Azure VM Endpoint Delete ******************* \t"
		execute_command_with_flag("azure vm endpoint delete "+config['VM_NAME']+ " testpoint ",logfile,config['VM_ENDPNT_DEL_FLAG'],metalog)
		
		metalog = "************** Azure VM Disk Attach ******************* \t"
		execute_command_with_flag("azure vm disk attach "+config['VM_NAME']+" "+config['VM_DISK_IMAGE_NAME'],logfile,config['DISK_ATTCH_FLAG'],metalog)
		metalog = "************** Azure VM Disk Attach New ******************* \t"
		execute_command_with_flag("azure vm disk attach-new "+config['VM_NAME']+" 177 "+config['VM_DISK_ATTACH_BLOB_URL'],logfile,config['DISK_ATTCH_NEW_FLAG'],metalog)
		metalog = "************** Azure VM Disk Detach ******************* \t"
		execute_command_with_flag("azure vm disk detach "+config['VM_NAME']+" 1",logfile,config['DISK_DETACH_FLAG'],metalog)
		execute_command_with_flag("azure vm disk detach "+config['VM_NAME']+" 0",logfile,config['DISK_DETACH_FLAG'],metalog)
		
		metalog = "************** Azure VM Restart ******************* \t"
		execute_command_with_flag("azure vm restart "+config['VM_NAME'],logfile,config['VM_RESTART_FLAG'],metalog)
		metalog = "************** Azure VM ShutDown ******************* \t"
		execute_command_with_flag("azure vm shutdown "+config['VM_NAME'],logfile,config['VM_SHUTDWN_FLAG'],metalog)
		metalog = "************** Azure VM Capture ******************* \t"
		execute_command_with_flag("azure vm capture "+config['VM_NAME']+" "+config['TARGET_IMG_NAME']+ " -t ",logfile,config['VM_CAPTURE_FLAG'],metalog)
		
		metalog = "************** Azure Network List ******************* \t"
		execute_command_with_flag("azure network vnet list",logfile,config['NETWORK_CREATE_FLAG'],metalog)
		metalog = "************** Azure Network Create ******************* \t"
		execute_command_with_flag("azure network vnet create "+config['NETWORK_NAME'] + " -a "+config['AFFINITY_GRP_NAME'],logfile,config['NETWORK_CREATE_FLAG'],metalog)
		metalog = "************** Azure Network Show ******************* \t"
		execute_command_with_flag("azure network vnet show "+config['NETWORK_NAME'],logfile,config['NETWORK_CREATE_FLAG'],metalog)
		metalog = "************** Azure VM Create_VNet ******************* \t"
		execute_command_with_flag("azure vm create " + config['VM_VNET_NAME'] + " " + config['VM_VNET_IMAGE_NAME'] + " communityUser PassW0rd$ --virtual-network-name " + config['NETWORK_NAME'] + " -n " + config['VM_VNET_LABEL'] + " --affinity-group "+config['AFFINITY_GRP_NAME'],logfile,config['VM_VNET_CREATE_FLAG'],metalog)
		metalog = "************** Azure VM Create_Size ******************* \t"
		execute_command_with_flag("azure vm create " + config['VM_SIZE_NAME'] + " " + config['VM_VNET_IMAGE_NAME'] + " communityUser PassW0rd$ -z medium -c -l "+config['LOCATION'],logfile,config['VM_SIZE_CREATE_FLAG'],metalog)
		metalog = "************** Azure create VM_CUSTOM_DATA ******************* \t"
		execute_command_with_flag("azure vm create -d " + config['CUSTOM_DATA_FILE'] + " " + config['VM_CUSTOMDATA_NAME'] + " " + config['VM_VNET_IMAGE_NAME'] + " communityUser PassW0rd$ -l "+config['LOCATION'],logfile,config['VM_CUSTOMDATA_CREATE_FLAG'],metalog)
		metalog = "************** Azure VM_VNet Delete ******************* \t"
		execute_command_with_flag("azure vm delete "+config['VM_VNET_LABEL'] + " -b --quiet ",logfile,config['VM_VNET_DEL_FLAG'],metalog)
		metalog = "************** Azure VM_SIZE Delete ******************* \t"
		execute_command_with_flag("azure vm delete "+config['VM_SIZE_NAME'] + " -b --quiet ",logfile,config['VM_SIZE_DEL_FLAG'],metalog)
		metalog = " ************** Azure VM_CUSTOM_DATA Delete ******************* \t"
		execute_command_with_flag("azure vm delete "+config['VM_CUSTOMDATA_NAME'] + " -b --quiet ",logfile,config['VM_CUSTOMDATA_DEL_FLAG'],metalog)
		
		metalog = "************** Azure Service Delete ******************* \t"
		execute_command_with_flag("azure service delete "+config['VM_NAME'] + " --quiet ",logfile,config['AZURE_SERVICE_DEL_FLAG'],metalog)
		metalog = "************** Azure VM Create-from ******************* \t"
		execute_command_with_flag("azure vm create-from "+config['VM_NAME']+" "+config['FILE_PATH'] + " -l " +config['LOCATION'],logfile,config['VM_CREATE_FROM_FLAG'],metalog)
		metalog = "************** Azure VM Community Image Create ******************* \t"
		execute_command_with_flag("azure vm create " + config['VM_COMM_NAME'] + " -o "+config['VM_COMM_IMAGE_NAME']+" -l "+config['LOCATION']+" communityUser PassW0rd$",logfile,config['VM_COMM_IMG_CREATE_FLAG'],metalog)
		metalog = "************** Azure VM SSHCert Create ******************* \t"
		execute_command_with_flag("azure vm create " + config['VM_SSH_NAME'] + " " + config['VM_VNET_IMAGE_NAME'] + " communityUser --ssh-cert "+config['CERT_FILE'] + " -e --no-ssh-password -r -l "+config['LOCATION'],logfile,config['VM_SSH_FLAG'],metalog)
		metalog = "************** Azure VM Comm Delete ******************* \t"
		execute_command_with_flag("azure vm delete "+config['VM_COMM_NAME'] + " -b --quiet",logfile,config['VM_COMM_DEL_FLAG'],metalog)
		metalog = "************** Azure VM SSHCert Delete ******************* \t"
		execute_command_with_flag("azure vm delete "+config['VM_SSH_NAME'] + " -b --quiet ",logfile,config['VM_SSH_DEL_FLAG'],metalog)
		
		metalog = "************** Azure Network Delete ******************* \t"
		execute_command_with_flag("azure network vnet delete "+config['NETWORK_NAME'] + " --quiet ",logfile,config['NETWORK_DELETE_FLAG'],metalog)				
		metalog = "************** Azure VM Delete ******************* \t"
		execute_command_with_flag("azure vm delete "+config['VM_NAME'] + " -b --quiet ",logfile,config['VM_DEL_FLAG'],metalog)
		metalog = "************** Azure Windows VM Delete ******************* \t"
		execute_command_with_flag("azure vm delete "+config['VM_WIN_NAME'] + " -b --quiet ",logfile,config['VM_DEL_FLAG'],metalog)
		
		metalog = "************** Azure VM Disk Upload ******************* \t"
		execute_command_with_flag("azure vm disk upload "+config['DISK_UPLOAD_SOURCE_PATH']+" "+config['DISK_UPLOAD_BLOB_URL']+" "+config['STORAGE_ACCOUNT_KEY'],logfile,config['DISK_UPLOAD_FLAG'],metalog)		
	
		metalog = "************** Azure VM Image Delete ******************* \t"
		execute_command_with_flag("azure vm image delete "+config['VM_IMAGE_NAME'],logfile,config['IMAGE_DEL_FLAG'],metalog)
		metalog = "************** Azure VM Captured Image Delete ******************* \t"
		execute_command_with_flag("azure vm image delete "+config['TARGET_IMG_NAME'],logfile,config['VM_CAPTURE_FLAG'],metalog)
		metalog = "************** Azure VM Disk Delete ******************* \t"
		execute_command_with_flag("azure vm disk delete "+config['VM_DISK_IMAGE_NAME'],logfile,config['DISK_DEL_FLAG'],metalog)
		metalog = "************** Azure VM Affinity Group Delete ******************* \t"
		execute_command_with_flag("azure account affinity-group delete "+config['AFFINITY_GRP_NAME'] + " --quiet ",logfile,config['VM_AFFINITY_DEL_FLAG'],metalog)
		
		metalog = "************** Azure Account Clear ******************* \t"
		execute_command_with_flag("azure account clear --quiet",logfile,config['ACCOUNT_CLEAR_FLAG'],metalog)
        totalcases()
