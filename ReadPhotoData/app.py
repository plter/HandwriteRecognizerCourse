import json

import numpy as np
from sklearn import tree
from sklearn import neighbors

fp = open("train_data.json", 'r')
train_data = np.array(json.load(fp))
fp.close()

fp = open("train_target.json", 'r')
train_target = np.array(json.load(fp))
fp.close()

# print(train_data)
# print(train_target)

test_index = [32]

preview_data = train_data[test_index]
preview_target = train_target[test_index]
train_data = np.delete(train_data, test_index, axis=0)
train_target = np.delete(train_target, test_index)

clf = neighbors.KNeighborsClassifier()
clf.fit(train_data, train_target)

print(clf.predict(preview_data))
