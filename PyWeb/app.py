import web


class WebRoot:
    def GET(self):
        return "Hello World"


class Server:

    def handle_request(self, args):
        if "name" in args:
            return '<html>' \
                   '    <head>' \
                   '        <meta charset="UTF-8"/>' \
                   '    </head>' \
                   '    <body>Hello %s</body>' \
                   '</html>' % (args["name"])
        else:
            return 'No args'

    def GET(self):
        # print(web.input(_method='GET'))
        args = web.input(_method='GET')
        return self.handle_request(args)

    def POST(self):
        args = web.input(_method='POST')
        return self.handle_request(args)


class AsyncServer:

    def handle_request(self, parameters):
        if "name" in parameters:
            return 'Hello %s' % (parameters['name'])
        else:
            return "No parameters"

    def GET(self):
        parameters = web.input(_method="GET")
        return self.handle_request(parameters)

    def POST(self):
        parameters = web.input(_method="POST")
        return self.handle_request(parameters)


urls = ("/", WebRoot,
        "/Server", Server,
        "/AsyncServer", AsyncServer)

app = web.application(urls)
app.run()
