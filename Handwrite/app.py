import web
import ml
import json


class Recognize:
    def POST(self):
        parameters = web.input(_method="POST")
        if "photo_data" in parameters:
            photo_data = json.loads(parameters['photo_data'])
            results = ml.recognize([photo_data])
            return results[0]
        else:
            return 'No parameters'


urls = ('/recognize', Recognize)

app = web.application(urls)
app.run()
