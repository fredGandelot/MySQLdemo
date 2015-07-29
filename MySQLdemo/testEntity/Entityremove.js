//demonstrate remove. remove the latest one

var entity = ds.contacts.find('first_name === Fred');
entity.remove();
entity;

