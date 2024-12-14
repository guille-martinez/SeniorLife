import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { LineChart } from "react-native-chart-kit"; // Make sure react-native-chart-kit and react-native-svg are installed

export default function HeartRateHourlyScreen() {
  const data = {
    labels: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22"],
    datasets: [
      {
        data: [72, 75, 78, 80, 74, 70, 68, 72, 76, 74, 72, 71],
        color: () => `rgba(220, 20, 60, 1)`, // Heart Rate red
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
          backgroundGradientFrom: "#8B0000",
          backgroundGradientTo: "#B22222",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#FF6347",
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
    backgroundColor: "#000", // Dark background for contrast
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
