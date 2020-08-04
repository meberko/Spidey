# Personal-Website
Python Flask version of my personal website. This is still in early development and is not the live version of the site.

# Get started
- Install Anaconda 3 on your machine
- Create a conda environment with python=3, flask installed and activate the environment
- cd to repo directory
- Type "python run.py" for to spin up a local Flask server
- Go to http://localhost:5000

## Main server file
run.py

## HTML Pages
All html pages are in the /templates/ directory. These are html files which
call Flask directives in Python to include html in other pages.

## Static Files (CSS, Javascript)
/static/ directory

When an html page links to a stylesheet or some script, Flask serves the static
files in the /static/ directory within the same directory it is called inside
of the /templates/ directory.
