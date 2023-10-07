import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
      sadSentimentCount: 0, // Initialize the count
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
    // Calculate the sad sentiment count on component mount
    this.calculateSadSentimentCount();
  }

  calculateSadSentimentCount() {
    const { sentimentScores } = this.state;
    let sadCount = 0;

    // Loop through sentiment scores and count days with sentiment below 0.35
    for (const time in sentimentScores) {
      if (sentimentScores[time] < 0.7) {
        sadCount++;
      }
    }

    // Update state with the count
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
      <View style={styles.container}>
        <Text style={styles.chartLabel}>User Sentiment Over Time</Text>
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

        {/* Display sad sentiment message if count exceeds a threshold */}
        {sadSentimentCount > 3 && (
          <Text style={styles.sadSentimentMessage}>
            You recorded a sad sentiment for more than {sadSentimentCount} days, feel free to check in with your club leader.
          </Text>
        )}

        {/* Display the list of club members */}
        <View style={styles.membersContainer}>
          {clubMembers.map((member, index) => (
            <View key={index} style={styles.memberItem}>
              <Text style={styles.memberName}>{member.memberName}</Text>
              <Text style={styles.clubName}>{member.clubName}</Text>
              <Text style={styles.sentiment}>Sentiment: {member.sentiment}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  chartLabel: {
    fontSize: 20,
    marginBottom: 10,
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
