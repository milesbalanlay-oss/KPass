import { View, Text, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Event } from '../types/event.type';

interface EventCardProps {
  event: Event;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }) + ' · ' + date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title} numberOfLines={1}>{event.title}</Text>
        {event.inviteOnly && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Invite Only</Text>
          </View>
        )}
      </View>

      <View style={styles.row}>
        <Ionicons name="calendar-outline" size={14} color="#8E8E93" />
        <Text style={styles.meta}>{formatDate(event.date)}</Text>
      </View>

      <View style={styles.row}>
        <Ionicons name="location-outline" size={14} color="#8E8E93" />
        <Text style={styles.meta} numberOfLines={1}>{event.location}</Text>
      </View>

      <View style={styles.row}>
        <Ionicons name="person-outline" size={14} color="#8E8E93" />
        <Text style={styles.meta}>{event.facilitator}</Text>
      </View>

      <Text style={styles.description} numberOfLines={2}>{event.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    gap: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
      },
      android: { elevation: 3 },
    }),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  badge: {
    backgroundColor: '#000',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  badgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  meta: {
    flex: 1,
    fontSize: 13,
    color: '#8E8E93',
  },
  description: {
    fontSize: 13,
    color: '#8E8E93',
    lineHeight: 18,
    marginTop: 2,
  },
});
