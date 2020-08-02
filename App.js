import React from "react";
import { StyleSheet, SafeAreaView, FlatList, Platform } from "react-native";
import BookObj from "./components/BookObj";
import booksList from "./bookslist.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={booksList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookObj book={item} style={styles.container} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: (Platform.Os = "android" ? 20 : 0),
  },
});
