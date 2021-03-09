rm -rf output
mkdir output
cp -R build output/ClientApp
cp .htaccess output/.htaccess
cp wcb.bootstrap.php output/wcb.bootstrap.php
cp wcb.entrypoint.php output/wcb.entrypoint.php
npm run build