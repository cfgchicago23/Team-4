import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

class SentimentChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sentimentScores: {
        0: 0.2,
        1: 0.4,
        2: 0.6,
        3: 0.7,
        4: 0.8,
        5: 0.5,
        6: 0.3,
        7: 0.2,
        8: 0.6,
        9: 0.9,
      },
      sadSentimentCount: 0,
      clubMembers: [
        {
          clubName: 'Club A',
          memberName: 'Member 1',
          sentiment: 0.75,
        },
        {
          clubName: 'Club B',
          memberName: 'Member 2',
          sentiment: 0.42,
        },
        {
          clubName: 'Club A',
          memberName: 'Member 3',
          sentiment: 0.65,
        },
        {
          clubName: 'Club C',
          memberName: 'Member 4',
          sentiment: 0.28,
        },
        {
          clubName: 'Club B',
          memberName: 'Member 5',
          sentiment: 0.88,
        },
      ],
    };
  }

  componentDidMount() {
    this.calculateSadSentimentCount();
  }

  calculateSadSentimentCount() {
    const { sentimentScores } = this.state;
    let sadCount = 0;

    for (const time in sentimentScores) {
      if (sentimentScores[time] < 0.7) {
        sadCount++;
      }
    }

    this.setState({ sadSentimentCount: sadCount });
  }

  render() {
    const { sentimentScores, sadSentimentCount, clubMembers } = this.state;
    const labels = Object.keys(sentimentScores).map((time) => parseInt(time));
    const data = Object.values(sentimentScores);

    const chartConfig = {
      backgroundGradientFrom: '#ffffff',
      backgroundGradientTo: '#ffffff',
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      strokeWidth: 2,
    };

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.chartLabel}>Club A Sentiment </Text>
        <LineChart
          data={{
            labels,
            datasets: [
              {
                data,
                color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
                strokeWidth: 2,
              },
            ],
          }}
          width={400}
          height={220}
          yAxisLabel=""
          chartConfig={chartConfig}
        />

        {Platform.OS === 'android' && (
          <Text style={styles.androidMessage}>Android Specific Message</Text>
        )}

        {Platform.OS === 'ios' && (
          <Text style={styles.iosMessage}>iOS Specific Message</Text>
        )}

        {sadSentimentCount > 3 && (
          <Text style={styles.sadSentimentMessage}>
            You recorded a sad sentiment for more than {sadSentimentCount} days, feel free to check in with your club leader.
          </Text>
        )}

        <View style={styles.membersContainer}>
          {clubMembers.map((member, index) => (
            <View key={index} style={styles.memberItem}>
              <Text style={styles.memberName}>{member.memberName}</Text>
              <Text style={styles.clubName}>{member.clubName}</Text>
              <Text style={styles.sentiment}>Sentiment: {member.sentiment}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  chartLabel: {
    fontSize: 20,
    marginBottom: 10,
  },
  androidMessage: {
    // Android-specific styles
    color: 'green',
  },
  iosMessage: {
    // iOS-specific styles
    color: 'blue',
  },
  sadSentimentMessage: {
    marginTop: 10,
    color: 'red',
    fontSize: 16,
  },
  membersContainer: {
    marginTop: 20,
  },
  memberItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  memberName: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  clubName: {
    marginRight: 10,
  },
  sentiment: {},
});

export default SentimentChart;
