# How to copy

First off, clone the repo with
```git clone https://github.com/veiyas/veiyas.github.io.git```
In the top directory you have two JSON files, ```/jobs.json``` and ```/projects.json``` in which you can put your job experience and projects. All fields in the JSON files are strings.

Each entry in ```/jobs.json``` consists of the fields ```jobTitle```, ```jobPlace```, ```timespan``` and ```jobDescription```.


Each entry in ```/projects.json``` consists of the fields ```title```, ```description```, ```image``` and ```github```, ```report``` and ```npm```, where the latter three are optional. The ```image``` field is a path structured as ```/assets/images/projects/masterthesis.png```. Don't forget to put your images there :)

All entries in the JSON files are rendered in order.

The background image is placed at ```/assets/images/background.jpg``` and profile image in ```/assets/images/profile.jpg```. Feel free to style in website as you want in ```/assets/css/styles.css```.

All other information is hardcoded in ```/index.html```, such as name, presentation, etc.

Remove this repo as a remote in git and sync your version to a repo named ```<your_github_name>.github.io``` and the website should be served statically within 20 minutes.
