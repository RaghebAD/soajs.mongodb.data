var provDb = db.getSiblingDB('core_provision');

var files = listFiles('./environments');
for (var i = 0; i < files.length; i++) {
	load(files[i].name);
}

provDb.environment.drop();

var records = [];
records.push(dashboard);
records.push(dev);
records.push(stg);
records.push(qa);

provDb.environment.insert(records);

/* Indexes for products */
provDb.environment.ensureIndex({code: 1}, {unique: true});

provDb.resources.drop();
provDb.resources.insert(resources);
