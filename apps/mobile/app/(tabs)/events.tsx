import { FlatList, StyleSheet, View } from 'react-native';
import EventCard from '../../components/EventCard';
import { mockEvents } from '../../mocks/events.mock';
import { Event } from '../../types/event.type';

export default function EventsScreen() {
  return (
    <FlatList
      data={mockEvents}
      keyExtractor={(item: Event) => item.id}
      renderItem={({ item }) => <EventCard event={item} />}
      contentContainerStyle={styles.list}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  separator: {
    height: 12,
  },
});
