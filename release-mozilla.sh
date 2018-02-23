cd mozilla-plugin

export version=`cat manifest.json | grep version | grep -v manifest | cut -d':' -f2 | cut -d'"' -f2`

web-ext build --overwrite-dest
web-ext sign --api-key=$MOZ_API_KEY --api-secret=$MOZ_API_SECRET 

#https://developer.github.com/v3/repos/releases/#create-a-release
