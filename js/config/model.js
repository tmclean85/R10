import Realm from 'realm';

const Fave = {
  name: 'Fave',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date',
  }
}

export const queryFaves = realm.objects('Fave');

export const addFave = (faveId) => {
  realm.write(() => {
    realm.create('Fave', {id: faveId, faved_on: Date.Now()})
  })
}

export const removeFave = (faveId) => {
  realm.write(() => {
    let fave = realm.objects('Fave').filtered('id == $0', faveId);
    realm.delete(fave)
  })  
}

const realm = new Realm({schema: [Fave]});
export default realm;