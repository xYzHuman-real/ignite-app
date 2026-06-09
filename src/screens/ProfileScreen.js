import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useThemeStore } from '../store/themeStore';
import { THEME, SPACING, FONT_SIZES, BORDER_RADIUS, COLORS } from '../constants/theme';
import { Container } from '../components/Container';
import { Card } from '../components/Card';

export default function ProfileScreen({ navigation }) {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const theme = isDarkMode ? THEME.dark : THEME.light;

  return (
    <Container style={{ paddingHorizontal: 0 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View
          style={[
            styles.profileHeader,
            { backgroundColor: theme.bgSecondary },
          ]}
        >
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>👨</Text>
          </View>
          <Text style={[styles.name, { color: theme.text }]}>
            Arjun Sharma
          </Text>
          <Text style={[styles.email, { color: theme.textSecondary }]}>
            arjun.sharma@example.com
          </Text>
        </View>

        {/* Stats */}
        <View style={{ paddingHorizontal: SPACING.lg, marginTop: SPACING.lg }}>
          <View style={styles.statsGrid}>
            <Card style={{ flex: 1, alignItems: 'center', paddingVertical: SPACING.lg, backgroundColor: theme.card }}>
              <Text style={[styles.statValue, { color: theme.primary }]}>
                47 hrs
              </Text>
              <Text style={[styles.statLabel, { color: theme.textSecondary }]}>
                Study Time
              </Text>
            </Card>
            <Card style={{ flex: 1, alignItems: 'center', paddingVertical: SPACING.lg, backgroundColor: theme.card }}>
              <Text style={[styles.statValue, { color: theme.secondary }]}>
                82%
              </Text>
              <Text style={[styles.statLabel, { color: theme.textSecondary }]}>
                Accuracy
              </Text>
            </Card>
            <Card style={{ flex: 1, alignItems: 'center', paddingVertical: SPACING.lg, backgroundColor: theme.card }}>
              <Text style={[styles.statValue, { color: theme.accent }]}>
                24/32
              </Text>
              <Text style={[styles.statLabel, { color: theme.textSecondary }]}>
                Topics
              </Text>
            </Card>
          </View>
        </View>

        {/* Learning Stats */}
        <View style={{ paddingHorizontal: SPACING.lg, marginTop: SPACING.lg }}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            Learning Analytics
          </Text>

          <Card style={{ backgroundColor: theme.card, marginTop: SPACING.md }}>
            <View style={styles.statsRow}>
              <View>
                <Text style={[styles.statName, { color: theme.textSecondary }]}>
                  Readiness Score
                </Text>
                <Text style={[styles.statBigValue, { color: theme.primary }]}>
                  78%
                </Text>
              </View>
              <View style={[styles.progressCircle, { borderColor: theme.primary }]}>
                <Text style={{ fontSize: FONT_SIZES.lg, fontWeight: '700', color: theme.primary }}>
                  78%
                </Text>
              </View>
            </View>
          </Card>

          <Card style={{ backgroundColor: theme.card, marginTop: SPACING.md }}>
            <View style={styles.statsRow}>
              <View>
                <Text style={[styles.statName, { color: theme.textSecondary }]}>
                  Strong Topics
                </Text>
                <Text style={[styles.topics, { color: theme.text }]}>
                  • Photosynthesis{'\n'}• Cell Division
                </Text>
              </View>
            </View>
          </Card>

          <Card style={{ backgroundColor: theme.card, marginTop: SPACING.md }}>
            <View style={styles.statsRow}>
              <View>
                <Text style={[styles.statName, { color: theme.textSecondary }]}>
                  Weak Topics
                </Text>
                <Text style={[styles.topics, { color: theme.text }]}>
                  • Genetics{'\n'}• Pedigree Analysis
                </Text>
              </View>
            </View>
          </Card>
        </View>

        {/* Settings */}
        <View style={{ paddingHorizontal: SPACING.lg, marginTop: SPACING.lg }}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            Settings
          </Text>

          <Card style={{ backgroundColor: theme.card, marginTop: SPACING.md }}>
            {/* Theme Toggle */}
            <View style={styles.settingRow}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons
                  name={isDarkMode ? 'moon' : 'sunny'}
                  size={20}
                  color={theme.primary}
                  style={{ marginRight: SPACING.md }}
                />
                <Text style={[styles.settingLabel, { color: theme.text }]}>
                  Dark Mode
                </Text>
              </View>
              <Switch
                value={isDarkMode}
                onValueChange={toggleTheme}
                trackColor={{
                  false: theme.border,
                  true: theme.primary,
                }}
              />
            </View>

            {/* Divider */}
            <View
              style={[
                styles.divider,
                { backgroundColor: theme.border },
              ]}
            />

            {/* Notifications */}
            <TouchableOpacity style={styles.settingRow}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons
                  name="notifications"
                  size={20}
                  color={theme.primary}
                  style={{ marginRight: SPACING.md }}
                />
                <Text style={[styles.settingLabel, { color: theme.text }]}>
                  Notifications
                </Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={theme.textTertiary}
              />
            </TouchableOpacity>

            {/* Divider */}
            <View
              style={[
                styles.divider,
                { backgroundColor: theme.border },
              ]}
            />

            {/* About */}
            <TouchableOpacity style={styles.settingRow}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons
                  name="information-circle"
                  size={20}
                  color={theme.primary}
                  style={{ marginRight: SPACING.md }}
                />
                <Text style={[styles.settingLabel, { color: theme.text }]}>
                  About Ignite
                </Text>
              </View>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={theme.textTertiary}
              />
            </TouchableOpacity>
          </Card>
        </View>

        {/* Logout Button */}
        <View style={{ paddingHorizontal: SPACING.lg, marginTop: SPACING.lg, marginBottom: SPACING.xxl }}>
          <TouchableOpacity
            style={[
              styles.logoutButton,
              { borderColor: COLORS.error },
            ]}
          >
            <Ionicons name="log-out" size={20} color={COLORS.error} />
            <Text style={[styles.logoutText, { color: COLORS.error }]}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  profileHeader: {
    paddingVertical: SPACING.xxl,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: BORDER_RADIUS.round,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    marginBottom: SPACING.lg,
  },
  avatarText: {
    fontSize: 40,
  },
  name: {
    fontSize: FONT_SIZES.xl,
    fontWeight: '700',
    marginBottom: SPACING.sm,
  },
  email: {
    fontSize: FONT_SIZES.sm,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: SPACING.md,
  },
  statValue: {
    fontSize: FONT_SIZES.lg,
    fontWeight: '700',
  },
  statLabel: {
    fontSize: FONT_SIZES.xs,
    marginTop: SPACING.sm,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.lg,
    fontWeight: '700',
    marginBottom: SPACING.md,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statName: {
    fontSize: FONT_SIZES.sm,
  },
  statBigValue: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: '700',
    marginTop: SPACING.sm,
  },
  progressCircle: {
    width: 100,
    height: 100,
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topics: {
    fontSize: FONT_SIZES.sm,
    marginTop: SPACING.sm,
    lineHeight: 20,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SPACING.md,
  },
  settingLabel: {
    fontSize: FONT_SIZES.md,
    fontWeight: '500',
  },
  divider: {
    height: 1,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.lg,
    borderWidth: 2,
    borderRadius: BORDER_RADIUS.md,
    gap: SPACING.md,
  },
  logoutText: {
    fontSize: FONT_SIZES.md,
    fontWeight: '600',
  },
});
