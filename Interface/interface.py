import cherrypy
import sys
import os

serviceURL = sys.argv[1]
servicePort = int(sys.argv[2])

class Annotation(object):
    @cherrypy.expose
    def index(self):
        return open('./interface.html')

    


if __name__ == '__main__':
    
    # A note that the service has started
    print("Starting rest service...")

    # A default configuration
    config = {'server.socket_host': serviceURL}
    cherrypy.config.update(config)

    # Update the configuration to your host
    cherrypy.config.update({'server.socket_port': servicePort})
    
    # cherrypy.config.update({'server.socket_host': 'dickens.seas.upenn.edu', 'server.socket_port': 4049})
    conf = {
        '/': {
            'tools.sessions.on': True,
            'tools.staticdir.root': os.path.abspath(os.getcwd())
        },
       '/js': {
            'tools.staticdir.on': True,
            'tools.staticdir.dir': './js'
        },
       '/css': {
            'tools.staticdir.on': True,
            'tools.staticdir.dir': './css'
        },
    }

    # Start the service
    cherrypy.quickstart(Annotation(), '/', conf)
