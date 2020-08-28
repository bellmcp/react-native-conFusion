import React from "react";
import { View, FlatList } from "react-native";
import { ListItem } from "react-native-elements";

function Menu(props) {
  const renderMenuItem = ({ item, index }) => {
    return (
      <ListItem
        key={index}
        title={item.name}
        subtitle={item.description}
        hideChevron={true}
        onPress={() => props.onPress(item.id)}
        leftAvatar={{ source: require("./images/uthappizza.png") }} //render image
      />
    );
  };

  return (
    <FlatList
      data={props.dishes}
      renderItem={renderMenuItem} //specified how to render each item in the list
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

export default Menu;
