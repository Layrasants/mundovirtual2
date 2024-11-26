import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView, Dimensions } from "react-native";

export default function App() {
  const [currentYear, setCurrentYear] = useState(2024);
  const [currentMonth, setCurrentMonth] = useState(0); // Janeiro
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const monthNames = [
    "Janeiro",  "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",  "Agosto", "Setembro", "Outubro", "Novembro",   "Dezembro",
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDateSelect = (day) => {
    setSelectedDate(day);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const confirmAppointment = () => {
    if (selectedDate && selectedTime) {
      Alert.alert(
        "Atendimento Confirmado",
        `Atendimento agendado para ${selectedDate} de ${monthNames[currentMonth]} de ${currentYear} às ${selectedTime}.`
      );
    } else {
      Alert.alert("Erro", "Por favor, selecione uma data e horário.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.header}>Agendar um atendimento</Text>

        <View style={styles.calendarHeader}>
          <TouchableOpacity onPress={handlePrevMonth}>
            <Text style={styles.navButton}>&#9664;</Text>
          </TouchableOpacity>
          <Text style={styles.monthYear}>
            {monthNames[currentMonth]} {currentYear}
          </Text>
          <TouchableOpacity onPress={handleNextMonth}>
            <Text style={styles.navButton}>&#9654;</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={styles.calendar}
          horizontal={false}
          showsVerticalScrollIndicator={false}
        >
          {/* Preenchendo dias em branco antes do 1º dia */}
          {Array.from({ length: firstDay }).map((_, index) => (
            <View key={`empty-${index}`} style={styles.calendarCell} />
          ))}

          {/* Gerando os dias do mês */}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            return (
              <TouchableOpacity
                key={day}
                onPress={() => handleDateSelect(day)}
                style={[
                  styles.calendarCell,
                  selectedDate === day && styles.selectedCell,
                ]}
              >
                <Text
                  style={[
                    styles.calendarText,
                    selectedDate === day && styles.selectedText,
                  ]}
                >
                  {day}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.times}>
          {["09:00", "09:30", "10:00"].map((time) => (
            <TouchableOpacity
              key={time}
              onPress={() => handleTimeSelect(time)}
              style={[
                styles.timeOption,
                selectedTime === time && styles.selectedTimeOption,
              ]}
            >
              <Text
                style={[
                  styles.timeText,
                  selectedTime === time && styles.selectedTimeText,
                ]}
              >
                {time}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.confirmButton}
          onPress={confirmAppointment}
        >
          <Text style={styles.confirmButtonText}>Confirmar atendimento</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // O container ocupa toda a tela
    justifyContent: "center", // Centraliza o conteúdo verticalmente
    alignItems: "center", // Centraliza o conteúdo horizontalmente
    backgroundColor: "#f5f5f5",
  },
  modal: {
    width: "100%", // Modal ocupa a largura toda
    height: "100%", // Modal ocupa a altura toda da tela
    backgroundColor: "#1a1a2e",
    borderRadius: 0, // Remover borda arredondada para ocupar mais área
    padding: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  calendarHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  navButton: {
    fontSize: 30,
    color: "#28a745",
    fontWeight: "bold",
  },
  monthYear: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  calendar: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
    height: "70%", // Definindo altura maior para o calendário
  },
  calendarCell: {
    width: "13%", // Tamanho das células para caber bem na tela cheia
    height: "13%", // Tamanho das células
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },
  selectedCell: {
    backgroundColor: "#28a745",
    borderRadius: 20,
  },
  calendarText: {
    color: "#ccc",
    fontSize: 16,
  },
  selectedText: {
    color: "#fff",
  },
  times: {
    marginVertical: 10,
    width: "100%",
  },
  timeOption: {
    padding: 10,
    backgroundColor: "#333",
    borderRadius: 5,
    marginVertical: 5,
  },
  selectedTimeOption: {
    backgroundColor: "#28a745",
  },
  timeText: {
    color: "#ccc",
    textAlign: "center",
  },
  selectedTimeText: {
    color: "#fff",
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 10,
    width: "100%",
  },
  confirmButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
