rm -rf chrome-plugin/*
cp -r mozilla-plugin/* chrome-plugin/

cd chrome-plugin

export version=`cat manifest.json | grep version | grep -v manifest | cut -d':' -f2 | cut -d'"' -f2`

sed -i.bak "s/browser\./chrome\./g" aoacon.js
sed -i.bak "s/browser\./chrome\./g" icon.js
rm -rf *.bak



