import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Switch, TouchableOpacity } from 'react-native';
import database from '@react-native-firebase/database';
import ListaMascotaProps from './interface';

const ListaMascota: React.FC<ListaMascotaProps> = ({ navigation }) => {
  const [data, setData] = useState<any[]>([]);

  const toggleSwitch = (key: string) => {
    const databaseRef = database().ref(`/user/${key}`);
    const currentItem = data.find(item => item.key === key);

    if (currentItem) {
      const updatedSwitchedOn = !currentItem.switchedOn;
      
      databaseRef.update({
        switchedOn: updatedSwitchedOn,
      });
    }
  };

  const handleAdoptar = (key: string) => {
    navigation.navigate('DetallesMascota', { mascotaKey: key });
  };

  useEffect(() => {
    const databaseRef = database().ref('/mascota');
  
    databaseRef.on('value', (snapshot) => {
      const items = snapshot.val();
      const dataList = [];

      for (let key in items) {
        dataList.push({ key, ...items[key] });
      }

      setData(dataList);
    });

    return () => {
      databaseRef.off('value');
    };
  }, []);

  return (
    <View>
      <Text>Lista Mascotas</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Switch
              value={item.switchedOn}
              onValueChange={() => toggleSwitch(item.key)}
            />
            <Text>{item.tipo}</Text>
            <TouchableOpacity
              onPress={() => handleAdoptar(item.key)}
              style={{
                backgroundColor: 'blue',
                padding: 10,
                borderRadius: 5,
                marginLeft: 10,
              }}
            >
              <Text style={{ color: 'white' }}>Adoptar</Text>
            </TouchableOpacity>
            <Text>{item.nombre}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListaMascota;
