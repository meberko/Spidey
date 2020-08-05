from flask_frozen import Freezer
from run import app

if __name__=='__main__':
    freezer = Freezer(app)
    freezer.freeze()
