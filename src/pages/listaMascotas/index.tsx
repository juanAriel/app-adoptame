import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Switch } from 'react-native';
import database from '@react-native-firebase/database';
import ItemsProps from './interface';

const ListaMascota: React.FC<ItemsProps> = () => {
  const [data, setData] = useState<any[]>([]);

  const toggleSwitch = (key: string) => {
    const databaseRef = database().ref(`/user/${key}`);
    databaseRef.update({
      switchedOn: !data.find(item => item.key === key)?.switchedOn,
    });
  };

  useEffect(() => {
    const databaseRef = database().ref('/user');

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
          <View>
            <Switch
              value={item.switchedOn}
              onValueChange={() => toggleSwitch(item.key)}
            />
            <Text>{item.correo}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListaMascota;
