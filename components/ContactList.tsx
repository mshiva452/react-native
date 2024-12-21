import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const ContactList = () => {
    const contacts = [
        {
            uid: 1,
            name: "Amar",
            status: "Lorem ipsum dolor sit",
            image: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
        },
        {
            uid: 2,
            name: "Sasha Oliver",
            status: "Lorem ipsum dolor sit",
            image: "https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_1280.png"
        },
        {
            uid: 3,
            name: "Annie Ryan",
            status: "Lorem ipsum dolor sit",
            image: "https://cdn.pixabay.com/photo/2023/05/02/10/35/avatar-7964945_1280.png"
        },
        {
            uid: 4,
            name: "Emille Moss",
            status: "Lorem ipsum dolor sit",
            image: "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
        },
        {
            uid: 5,
            name: "Marissa Castillo",
            status: "Lorem ipsum dolor sit",
            image: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
        },
        {
            uid: 6,
            name: "Denzel Curry",
            status: "Lorem ipsum dolor sit",
            image: "https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_1280.png"
        },
        {
            uid: 7,
            name: "Miles Ferguson",
            status: "Lorem ipsum dolor sit",
            image: "https://cdn.pixabay.com/photo/2023/05/02/10/35/avatar-7964945_1280.png"
        },
        {
            uid: 8,
            name: "Desiree Caldwell",
            status: "Lorem ipsum dolor sit",
            image: "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
        },
        {
            uid: 9,
            name: "Samantha Young",
            status: "Lorem ipsum dolor sit",
            image: "https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png"
        },
        {
            uid: 10,
            name: "Irene Hunter",
            status: "Lorem ipsum dolor sit",
            image: "https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_1280.png"
        },
        {
            uid: 11,
            name: "Jeroda Avila",
            status: "Lorem ipsum dolor sit",
            image: "https://cdn.pixabay.com/photo/2023/05/02/10/35/avatar-7964945_1280.png"
        },
        {
            uid: 12,
            name: "Griffin Moss",
            status: "Lorem ipsum dolor sit",
            image: "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
        }
    ]
    return (
        <View>
            {/*  <Text style={styles.headingText}>ContactList</Text> */}
            <ScrollView style={styles.container} scrollEnabled={false}>
                {
                    contacts.map(({ uid, image, name, status }) => (
                        <View key={uid} style={styles.userCard}>
                            <Image
                                style={styles.userImage}
                                source={{
                                    uri: image
                                }}
                            />
                            <View>
                                <Text style={styles.userName}>{name}</Text>
                                <Text style={styles.userStatus}>{status}</Text>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default ContactList

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8
    },
    container: {
        //paddingHorizontal: 16,
        marginBottom: 4
    },
    userCard: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        //marginBottom: 5,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 30,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: "#000"
    },
    userStatus: {
        fontSize: 14,
        color: "#333"
    }
})