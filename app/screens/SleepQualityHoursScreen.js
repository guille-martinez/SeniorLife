import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function SleepQualityHourlyScreen() {
  const data = {
    labels: ["0", "2", "4", "6", "8"],
    datasets: [
      {
        data: [6, 7, 8, 9, 10, 7, 8],
        color: () => `rgba(144, 238, 144, 1)`, // Sleep green
        strokeWidth: 2,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={350}
        height={530}
        chartConfig={{
          backgroundGradientFrom: "#006400",
          backgroundGradientTo: "#32CD32",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ADFF2F",
          },
        }}
        bezier
        style={styles.chart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  chart: {
    borderRadius: 16,
    marginVertical: 8,
  },
  axisLabelX: {
    position: "absolute",
    bottom: 20,
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
  },
  axisLabelY: {
    position: "absolute",
    left: 10,
    top: "50%",
    transform: [{ rotate: "-90deg" }],
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
  },
});
