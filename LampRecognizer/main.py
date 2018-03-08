from sklearn import tree

train_data = [[3.5, 300], [5, 500], [6.5, 600], [8, 150], [11, 200], [13, 240], [25, 280], [40, 450], [60, 680]]
train_target = [0, 0, 0, 1, 1, 1, 2, 2, 2]

clf = tree.DecisionTreeClassifier()
clf.fit(train_data, train_target)
print(clf.predict([[4, 400]]))
