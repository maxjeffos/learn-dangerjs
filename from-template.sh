git clone git@github.com:maxjeffos/jeff-typescript-template.git
rm -rf jeff-typescript-template/.git
mv jeff-typescript-template/*(D) .
rm -rf jeff-typescript-template/
rm README.md
current_full_directory=$(pwd)
current_directory_name=$(basename $current_full_directory)
echo "# ${current_directory_name}" > README.md
sed -i "" "s|\"name\": \"jeff-typescript-template\"|\"name\": \"${current_directory_name}\"|g" package.json
