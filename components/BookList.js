import React from "react";
import BookObj from "./BookObj";
import booksList from "../bookslist.json";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Platform,
  Button,
} from "react-native";

const BooksList = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Button title="to Detail" onPress={() => navigation.push("Detail")} /> */}
      <FlatList
        data={booksList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookObj book={item} style={styles.container} />
        )}
      />
    </SafeAreaView>
  );
};

export default BooksList;

const styles = StyleSheet.create({
  container: {
    marginTop: (Platform.Os = "android" ? 20 : 0),
  },
});
