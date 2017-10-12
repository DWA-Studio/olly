/*
* @flow
*/

import React from 'react';
import { FlatList, Dimensions, Platform } from 'react-native';
import PasswordItem from './PasswordItem';
import EmptyComponent from './EmptyComponent';
import type { Password } from '../../types/Password';

const { width } = Dimensions.get('window');
const dimension = width / 2;

type Props = {
  data: Array<Password>,
  onItemPress: (item: Password) => void,
  fromSearch: boolean,
};

const defineContentInset = () => (Platform.OS === 'android' ? { bottom: 0 } : { bottom: 50 });

const renderItem = (item: Password, onPress: () => void) => (
  <PasswordItem
    dimension={dimension}
    name={item.name}
    icon={item.icon}
    color={item.color}
    onPress={onPress}
  />
);

const PasswordList = (props: Props) => (
  <FlatList
    numColumns={2}
    data={props.data}
    renderItem={({ item }) => renderItem(item, () => props.onItemPress(item))}
    keyExtractor={item => item.key}
    contentInset={defineContentInset()}
    automaticallyAdjustContentInsets={false}
    ListEmptyComponent={<EmptyComponent fromSearch={props.fromSearch} />}
  />
);

PasswordList.defaultProps = {
  data: [
    { name: 'Twitter', key: 'uuid', icon: 'twitter', color: 'red' },
    { name: 'Facebook', key: 'uuid-2', icon: 'facebook', color: 'blue' },
  ],
  onItemPress: item => console.log(`item : ${item.name}`),
  fromSearch: false,
};

export default PasswordList;
