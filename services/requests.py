from flask import request, Response
import pymongo
from bson import json_util, ObjectId
import datetime

class Requests:
    def __init__(self, mongo=None):
        self.mongo = mongo

    # Fetch todos
    def todos_index(self):
        now = datetime.datetime.utcnow()
        if requests.args.get('limit') is None:
            limit = 1000
        else:
            limit = int(request.args.get('limit'))
            if limit == 0:
                limit = 10000

        todos = self.mongo.db.TodoDB.find().sort('_id', pymongo.DESCENDING).limit(limit)
        todos_data = []

        for todo in todos:
            todos_data.append({
                "todo": todo['todo'],
                "id": todo["_id"],
                "completed": todo["completed"],
                "is_editing": todo["isEditing"]
            })
        return Response(
            json_util.dumps({
                'data': todos_data,
                'count': todos.count(),
                'limit': 1000
            }),
            status = 200
        )
    # Create todos

    def _str2bool(v):
        return v.lower() in ("yes", "true", "t", "1")
