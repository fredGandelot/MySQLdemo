
//createEntity
var entity = ds.contacts.createEntity();
//entity.save()


//change some attributes
entity.id = generateUUID();
entity.first_name = "Fred";
entity.last_name = "Gandelot";
entity.title = "CTO";
entity.save();
entity