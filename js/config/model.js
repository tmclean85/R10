import Realm from 'realm';

const Fave = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on:  'date',
  }
};

const realm = new Realm({schema: [Fave]});

export const getFaves = () => {
  let faveId = realm.objects('Fave').map((fave) => fave);
  return faveId;
};

export const addFave = (faveId) => {
  realm.write(() => {
    realm.create('Fave', {id: faveId, faved_on: new Date });
  });
};

export const deleteFave = (faveId) => {
  let theFave = realm.objects('Fave').filtered(`id == $0`, faveId);
  realm.write(() => {
    realm.delete(theFave);
  });
};

export default realm;