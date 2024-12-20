import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FancyCard = () => {
    return (
        <View>
            <Text style={styles.headingText}>Trending Places</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: 'https://cdn.pixabay.com/photo/2010/11/29/taj-mahal-368_1280.jpg'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Taj Mahal</Text>
                    <Text style={styles.cardLabel}>Delhi Agra</Text>
                    <Text style={styles.cardDesc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla minima cupiditate voluptate accusamus sint ratione unde nobis culpa velit! Totam dicta, amet voluptatum placeat quod obcaecati nulla enim tenetur fugiat.
                        Voluptatem autem molestias minima voluptatibus tempore deserunt natus dolorem ex optio aperiam odit provident adipisci, non, accusamus veritatis magni rem eius nostrum molestiae. Reprehenderit recusandae odit repudiandae maxime beatae eos.
                    </Text>
                    <Text style={styles.cardFooter}>12mins, Away</Text>
                </View>
            </View>
        </View>
    )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: "auto",
        height: "auto",
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated: {
        backgroundColor: "#4885cf",
        elevation: 3,
        shadowColor: "black",
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 200,
        width: "auto",
        marginBottom: 8,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 8
    },
    cardLabel: {
        color: "#fff",
        fontSize: 14,
        marginBottom: 4
    },
    cardDesc: {
        color: "#fff",
        fontSize: 12,
        marginBottom: 8,
        marginTop: 6,
        flexShrink: 1,
        lineHeight: 18

    },
    cardFooter: {
        color: "#fff",
        fontSize: 12,
        marginBottom: 8
    }
})