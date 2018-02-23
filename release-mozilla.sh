cd mozilla-plugin

version=`cat manifest.json | grep version | grep -v manifest | cut -d':' -f2 | cut -d'"' -f2`

zip -r -FS ../releases/aoacon-${version}.xpi *

