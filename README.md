#sailsjs, Compass, Zurb Foundation, Windows and a Sane Development Environment(tm)
_A quick start guide for the technically repressed_

# Stage One: Your Tools

Get and install the following:

* Google Chrome: http://google.com/chrome
* Git for Windows: http://msysgit.github.io/
* NodeJS for Windows: http://nodejs.org/download/ (I used the .exe 64bit installer)
* Bonjour Print Services: http://support.apple.com/kb/DL999 (more on why you want this later)
* SublimeText3: http://www.sublimetext.com/3
* Console2: http://sourceforge.net/projects/console/files/console-devel/2.00/


# Setup Console2 to work with Git Bash

_step one towards the blue pill_
source: http://johngilliland.wordpress.com/2012/12/22/git-bash-console2-finally/

1. Install console2 somewhere (I use C:\Program Files (x86)\Console2 for this example.)
2. Open it up
3. Edit > Settings
4. Left hand pane: Tabs
5. Right hand pane: Add
6. Bottom right pane:
    Title: Git Bash
    Icon: C:\Program Files (x86)\Git\etc\git.ico
    Shell: C:\Program Files (x86)\Git\bin\sh.exe --login -i
    (two dashes, login, one dash, letter i)
    Startup Dir: %HOMEDRIVE%%HOMEPATH%
7. Bottom Left: Save settings to user dir.
8. Bottom right: ok
9. Quit console2
10. Right click Desktop > New > Shortcut
    Target: "C:\Program Files (x86)\Console2\Console.exe" -t "Git Bash"
    Start In: %HOMEDRIVE%%HOMEPATH%


# Get started with SailsJs
_lines prefixed with $ are commands you need to type in the console_

1. run git bash (from your start menu, or desktop icon)
2. Setup a development directory:
    # create this entire path if it doesn't exist
    $ mkdir Documents/Dev/nodejs/sailsjs/ -p
    $ cd Documents/Dev/nodejs/sailsjs/

3. clone my start project, with swig templates, compass grunt, and bower installed angularjs
    $ git clone github.com/airtonix/sailsjs-angularjs-compass-swig-passport-starter.git example.com
    $ cd example.com

4. remove my repo as the origin, replace with your own private repo (hint: bitbucket.org)
    $ git remote rm origin
    $ git remote add origin ssh://git@bitbucket.org/you/your-repo.git
    $ git push --all

5. install all dependancies and start the local dev server and grunt watch tasks.
    $ npm install
    $ npm start
