import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Profile from "../../Elements/Profile/Profile";
import Post from "../../Elements/Post/Post";
import data from "../../Source/PostsData";

const avatar = require('../../Source/User.png');
const postImage = require('../../Source/Forest.png');

const PostsScreen = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{
                justifyContent: "flex-start",
                alignItems: "center",
                overflow: "visible",
            }}
        >
            <ScrollView>
                <Profile
                    avatar={avatar}
                    name="Natali Romanova"
                    email="email@example.com"
                />
                {data.map((element) => (
                    <Post
                        key={element.id}
                        img={postImage}
                        text={element.name}
                        messages={0}
                        location={element.location}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default PostsScreen;