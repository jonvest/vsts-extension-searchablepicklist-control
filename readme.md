# Background
This extension is a very small modification to the Mulitvalue Control provided by Microsoft DevLabs, found [here](https://github.com/microsoft/vsts-extension-multivalue-control).  See that repo for more details.

I needed a picklist that had inline search capabilities but could not find one in the marketplace.  There are picklists that support "starts with" searches, but I could not find one that allowed inline search.  The DevLabs MultiValue control supports inline search, but I needed to limit the selection to a single item, so I created this modification.  

This is really a tag picker, not a picklist, but is functionally similar.


# Source code 

The [source](https://github.com/jonvest/vsts-extension-searchablepicklist-control) for this extension can be found on Github - feel free to take, fork and extend. 


# References
When creating this extension, I found this repo to be extremely helpful in learning how to build, package and run custom controls locally: [azure-devops-extension-hot-reload-and-debug](https://github.com/microsoft/azure-devops-extension-hot-reload-and-debug)