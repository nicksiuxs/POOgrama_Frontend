import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import Header from "./Header";

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        padding: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        marginBottom: 15,
        marginTop: 15,
        fontSize: 16,
        color: '#666',
    },
    table: {
        display: 'table',
        width: '100%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        marginTop: 10,
        padding: 20
    },
    tableRow: {
        flexDirection: 'row',
    },
    tableCell: {
        margin: 'auto',
        marginTop: 5,
        marginBottom: 5,
        fontSize: 12,
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    tableHeader: {
        margin: 'auto',
        marginTop: 5,
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: 14,
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        backgroundColor: '#f0f0f0',
    },
});

const handleAttemps = {
    0: "0",
    1: "1",
    2: "2",
    3: "3"
}

const Results = ({ user, scores }) => {
    return (
        <Document>
            <Page style={styles.page}>
                <Header name={user.name} email={user.email} />
                <View style={styles.header}>
                    <Text style={styles.subtitle}>Resultados obtenidos</Text>
                </View>
                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableHeader}>Concepto</Text>
                        <Text style={styles.tableHeader}>Estrellas obtenidas</Text>
                    </View>
                    {Object.keys(scores).map((score, index) => (
                        <View key={index} style={styles.tableRow}>
                            <Text style={styles.tableCell}>{scores[score].topic}</Text>
                            <Text style={styles.tableCell}>{handleAttemps[scores[score].attemps]}</Text>
                        </View>
                    ))}
                </View>
            </Page>
        </Document>
    )
}

export default Results;