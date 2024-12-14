import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { LineChart } from "react-native-chart-kit"; // Make sure react-native-chart-kit and react-native-svg are installed

export default function StepsHourlyScreen() {
  const data = {
    labels: ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22"],
    datasets: [
      {
        data: [150, 0, 0, 0, 300, 2000, 1750, 900, 450, 700, 400, 200],
        color: () => `rgba(134, 65, 244, 1)`,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={350} // Adjust to match the device's width if needed
        height={530} // Increased height to make it more visually prominent
        chartConfig={{
          backgroundGradientFrom: "#0D47A1",
          backgroundGradientTo: "#1976D2",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#FFCA28",
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