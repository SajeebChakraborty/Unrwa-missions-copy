import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "#E4E4E4",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },

    gridItem: {
        width: "45%",
        maxWidth: "45%",
    },

    gridItemLabel: {
        fontSize: "11px",
    },
    gridItemText: {
        fontSize: "10px",
    },
    table: {},
    tableRow: {},
    tableColumn: {}
});

// Create PDF component
export const MissionPDF = (props) => (
    <Document>
        <Page size='A4' style={styles.page}>
            <View style={styles.section}>
                <Text
                    style={{
                        backgroundColor: "#FFC000",
                        color: "#000000",
                        padding: "2px 7px",
                        fontSize: "13px",
                    }}
                >
                    Identifier Information
                </Text>

                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        padding: "5px 0",
                        gap: "10px",
                    }}
                >
                    <View style={styles.gridItem}>
                        <Text style={styles.gridItemLabel}>Request Type</Text>
                        <Text style={styles.gridItemText}>Type 1</Text>
                    </View>
                    <View style={styles.gridItem}>
                        <Text style={styles.gridItemLabel}>
                            Date of Request
                        </Text>
                        <Text style={styles.gridItemText}>03/12/2024</Text>
                    </View>
                    <View style={styles.gridItem}>
                        <Text style={styles.gridItemLabel}>
                            UNRWA Request #
                        </Text>
                        <Text style={styles.gridItemText}>56466</Text>
                    </View>
                    <View style={styles.gridItem}>
                        <Text style={styles.gridItemLabel}>UNOPS ACU #</Text>
                        <Text style={styles.gridItemText}>656565</Text>
                    </View>
                    <View style={styles.gridItem}>
                        <Text style={styles.gridItemLabel}>CLA #</Text>
                        <Text style={styles.gridItemText}>656565</Text>
                    </View>
                    <View style={styles.gridItem}>
                        <Text style={styles.gridItemLabel}>CLA Status</Text>
                        <Text style={styles.gridItemText}>656565</Text>
                    </View>
                </View>
            </View>

            <View style={styles.section}>
                <Text
                    style={{
                        backgroundColor: "#000000",
                        color: "#000000",
                        padding: "2px 7px",
                        fontSize: "13px",
                    }}
                >
                    Mission Focal Point
                </Text>
                <Text
                    style={{
                        backgroundColor: "#FFC000",
                        color: "#000000",
                        padding: "2px 7px",
                        fontSize: "13px",
                    }}
                >
                    Mission Request Details
                </Text>

                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        padding: "15px 0",
                        gap: "10px",
                    }}
                >
                    <View style={styles.gridItem}>
                        <Text style={styles.gridItemLabel}>Movement Date</Text>
                        <Text style={styles.gridItemText}>03/12/2025</Text>
                    </View>
                    <View style={styles.gridItem}>
                        <Text style={styles.gridItemLabel}>Agencies</Text>
                        <Text style={styles.gridItemText}>Agencies</Text>
                    </View>
                </View>

                <Text
                    style={{
                        backgroundColor: "#DAF2D0",
                        color: "#000000",
                        padding: "2px 7px",
                        fontSize: "13px",
                    }}
                >
                    Mission Focal Point
                </Text>

                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        padding: "5px 0",
                        gap: "10px",
                    }}
                >
                    <View style={styles.gridItem}>
                        <Text style={styles.gridItemLabel}>Names</Text>
                        <Text style={styles.gridItemText}>Names</Text>
                    </View>
                    <View style={styles.gridItem}>
                        <Text style={styles.gridItemLabel}>Email</Text>
                        <Text style={styles.gridItemText}>Email</Text>
                    </View>
                    <View style={styles.gridItem}>
                        <Text style={styles.gridItemLabel}>GSM Phone # 1:</Text>
                        <Text style={styles.gridItemText}>GSM Phone # 1:</Text>
                    </View>
                    <View style={styles.gridItem}>
                        <Text style={styles.gridItemLabel}>WhatsApp #</Text>
                        <Text style={styles.gridItemText}>Sat Phone </Text>
                    </View>
                    <View style={styles.gridItem}>
                        <Text style={styles.gridItemLabel}>Sat Phone</Text>
                        <Text style={styles.gridItemText}>Sat Phone</Text>
                    </View>
                    <View style={styles.gridItem}>
                        <Text style={styles.gridItemLabel}>GSM Phone # 2:</Text>
                        <Text style={styles.gridItemText}>GSM Phone # 2:</Text>
                    </View>
                    <View style={styles.gridItem}>
                        <Text style={styles.gridItemLabel}>Purpose</Text>
                        <Text style={styles.gridItemText}>Purpose</Text>
                    </View>
                    <View style={styles.gridItem}>
                        <Text style={styles.gridItemLabel}>Cluster</Text>
                        <Text style={styles.gridItemText}>Cluster</Text>
                    </View>
                </View>
            </View>

            <View style={styles.section}>
                <Text
                    style={{
                        backgroundColor: "#000000",
                        color: "#000000",
                        padding: "2px 7px",
                        fontSize: "13px",
                    }}
                >
                Movement Stops

                </Text>
                <Text
                    style={{
                        backgroundColor: "#FFC000",
                        color: "#000000",
                        padding: "2px 7px",
                        fontSize: "13px",
                    }}
                >
                    Movement Stops
                </Text>

                <View style={styles.table}>
                    <View style={styles.tableRow}>
                        <View style={styles.tableColumn}>1</View>
                        <View style={styles.tableColumn}>2</View>
                        <View style={styles.tableColumn}>3</View>
                        <View style={styles.tableColumn}>4</View>
                        <View style={styles.tableColumn}>5</View>
                        <View style={styles.tableColumn}>6</View>
                        <View style={styles.tableColumn}>7</View>
                        <View style={styles.tableColumn}>8</View>
                        <View style={styles.tableColumn}>9</View>
                        <View style={styles.tableColumn}>10</View>
                    </View>
                </View>

            </View>
        </Page>
    </Document>
);
