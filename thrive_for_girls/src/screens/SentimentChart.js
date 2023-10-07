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
      // This is a mock data structure to show how you might store the club members
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
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  chartLabel: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  androidMessage: {
    color: 'green',
    fontSize: 18,
  },
  iosMessage: {
    color: 'blue',
    fontSize: 18,
  },
  sadSentimentMessage: {
    marginTop: 20,
    color: 'red',
    fontSize: 18,
    fontStyle: 'italic',
  },
  membersContainer: {
    marginTop: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
  },
  memberItem: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
  },
  memberName: {
    fontWeight: 'bold',
    marginRight: 10,
    fontSize: 16,
  },
  clubName: {
    marginRight: 10,
    fontSize: 16,
  },
  sentiment: {
    fontSize: 16,
  },
});

export default SentimentChart;
