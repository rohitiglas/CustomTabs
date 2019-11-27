import React, {Component} from 'react';
/*Components*/
import {
    Animated,
    View,
    StatusBar,
    Text,
    Image,
    Platform,
    StyleSheet,
    Linking,
    TouchableOpacity,
    Dimensions, PixelRatio,
} from 'react-native';
import MaterialAnimatedView from 'src/components/MeterialCommunityIcons'
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
/*utils*/


/*Data*/
import artistData from 'src/assets/data/songs'
import coverImage from 'src/assets/images/bob-marley-cover.jpg'
import profileImage from 'src/assets/images/bob-marley-profile.jpg'








const {width, height} = Dimensions.get('window');
const realWidth = height > width ? width : height;
const realHeight = height > width ? height : width;



const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;


const relativeWidth = num => (realWidth * num) / 100;
const relativeHeight = num => (realHeight * num) / 100;
const HEADER_IMAGE_HEIGHT =relativeHeight(30);

const fontBaseXSmall = 12;
const fontBaseSmall = 15;
const fontBaseNormal = 17;
const fontBaseLarge = 20;
const fontBaseXLarge = 24;
const fontBaseXXLarge = 28;

const isTablet = () => {
    let pixelDensity = PixelRatio.get();
    let adjustedWidth = width * pixelDensity;
    let adjustedHeight = height * pixelDensity;
    if (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) {
        return true;
    } else return pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920);
};

const responsiveFontSize = (fontSize) => {
    let divider = isTablet() ? 600 : 375;
    return Math.round(fontSize * realWidth / divider);
};

const fontXSmall = responsiveFontSize(fontBaseXSmall);
const fontSmall = responsiveFontSize(fontBaseSmall);
const fontNormal = responsiveFontSize(fontBaseNormal);
const fontLarge = responsiveFontSize(fontBaseLarge);
const fontXLarge = responsiveFontSize(fontBaseXLarge);
const fontXXLarge = responsiveFontSize(fontBaseXXLarge);

const responsiveHeight = (height) => {
    if (!isTablet())
        return height;
    else
        return (height + (height * 0.25));
};





const STATUSBAR_COLOR= '#560027';
    const HEADER_COLOR= '#880e4f';
    const CARD_BG_COLOR= '#ffffff';
    const HEADER_TEXT_COLOR= '#ffffff';
    const HEADER_BACK_ICON_COLOR= '#ffffff';
    const BLACK= '#000000'










const ARTIST_NAME = 'Bob Marley';

export default class ArtistScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(0)
        };
    }

    openLink = (url) => {
        Linking.canOpenURL(url)
            .then((supported) => {
                if (!supported) {
                    console.log("Can't handle url: " + url);
                } else {
                    return Linking.openURL(url);
                }
            })
            .catch((err) => console.error('An error occurred', err));
    };

    renderArtistCard = (index, item) => {
        return (
            <MaterialAnimatedView key={index.toString()} index={index}>
                <TouchableOpacity activeOpacity={0.8} style={styles.artistCardContainerStyle}
                                  onPress={() => this.openLink(item.songLink)}>
                    <Image source={{uri: item.artistImage}} style={styles.artistImage}/>
                    <View style={styles.cardTextContainer}>
                        <Text numberOfLines={1} style={styles.songTitleStyle}>{item.songName}</Text>
                        <Text numberOfLines={1}>{item.albumName}</Text>
                    </View>
                </TouchableOpacity>
            </MaterialAnimatedView>
        )
    };

    //For header background color from transparent to header color
    _getHeaderBackgroundColor = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: ['rgba(0,0,0,0.0)', HEADER_COLOR],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //For header image opacity
    _getHeaderImageOpacity = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [1, 0],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //artist profile image position from left
    _getImageLeftPosition = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 80, 140],
            outputRange: [relativeWidth(30), relativeWidth(38), relativeWidth(10)],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //artist profile image position from top
    _getImageTopPosition = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [relativeHeight(20), Platform.OS === 'ios' ? 8 : 10],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //artist profile image width
    _getImageWidth = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [relativeWidth(40), APPBAR_HEIGHT - 20],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //artist profile image height
    _getImageHeight = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [relativeWidth(40), APPBAR_HEIGHT - 20],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //artist profile image border width
    _getImageBorderWidth = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [StyleSheet.hairlineWidth * 3, StyleSheet.hairlineWidth],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //artist profile image border color
    _getImageBorderColor = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 140],
            outputRange: [CARD_BG_COLOR, 'rgba(0,0,0,0.0)'],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //Song list container position from top
    _getListViewTopPosition = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 250],
            outputRange: [relativeWidth(100) - APPBAR_HEIGHT - 10, 0],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //header title opacity
    _getHeaderTitleOpacity = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 20, 50],
            outputRange: [0, 0.5, 1],
            extrapolate: 'clamp',
            useNativeDriver: true
        });
    };

    //artist name opacity
    _getNormalTitleOpacity = () => {
        const {scrollY} = this.state;

        return scrollY.interpolate({
            inputRange: [0, 20, 50],
            outputRange: [1, 0.5, 0],
            extrapolate: 'clamp',
            useNativeDriver: true
        });

    };

    render() {
        const headerBackgroundColor = this._getHeaderBackgroundColor();

        const headerImageOpacity = this._getHeaderImageOpacity();

        const profileImageLeft = this._getImageLeftPosition();

        const profileImageTop = this._getImageTopPosition();

        const profileImageWidth = this._getImageWidth();

        const profileImageHeight = this._getImageHeight();

        const profileImageBorderWidth = this._getImageBorderWidth();

        const profileImageBorderColor = this._getImageBorderColor();

        const listViewTop = this._getListViewTopPosition();

        const headerTitleOpacity = this._getHeaderTitleOpacity();

        const normalTitleOpacity = this._getNormalTitleOpacity();

        return (
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'} backgroundColor={STATUSBAR_COLOR}/>

                <Animated.Image
                    style={[styles.headerImageStyle, {
                        opacity: headerImageOpacity,

                    }]}
                    source={coverImage}/>

                <Animated.View style={[styles.headerStyle, {
                    backgroundColor: headerBackgroundColor,
                }]}>

                    <View style={styles.headerLeftIcon}>
                        <Icons name={"arrow-left"} size={25} color={HEADER_BACK_ICON_COLOR}/>
                    </View>

                    <View style={styles.headerRightIcon}>
                        <Icons name={"settings"} size={25} color={HEADER_BACK_ICON_COLOR}/>
                    </View>

                    <Animated.Text
                        style={[styles.headerTitle, {
                            opacity: headerTitleOpacity
                        }]}>
                        {ARTIST_NAME}
                    </Animated.Text>

                </Animated.View>

                <Animated.Image
                    style={
                        [styles.profileImage, {
                            borderWidth: profileImageBorderWidth,
                            borderColor: profileImageBorderColor,
                            borderRadius: (APPBAR_HEIGHT - 20) / 2,
                            height: profileImageHeight,
                            width: profileImageWidth,
                            transform: [
                                {translateY: profileImageTop},
                                {translateX: profileImageLeft}
                            ]
                        }]}
                    source={profileImage}
                />

                <Animated.ScrollView
                    overScrollMode={'never'}
                    style={{zIndex: 10}}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {contentOffset: {y: this.state.scrollY}}
                            }
                        ]
                    )}>
                    <Animated.Text style={[
                        styles.profileTitle, {
                            opacity: normalTitleOpacity,
                        }
                    ]}
                    >
                        {ARTIST_NAME}
                    </Animated.Text>

                    <Animated.Text style={[
                        styles.songCountStyle, {
                            opacity: normalTitleOpacity,
                        }
                    ]}>
                        {`♬ ${artistData.length} songs`}
                    </Animated.Text>

                    <Animated.View style={{
                        transform: [{
                            translateY: listViewTop
                        }],
                    }}>
                        {artistData.map((item, index) => this.renderArtistCard(index, item))}
                    </Animated.View>

                </Animated.ScrollView>
            </View>
        );
    }
}


const styles=StyleSheet.create({
    container: {
        flex: 1,
    },
    /*header style*/
    headerLeftIcon: {
        position: 'absolute',
        left: relativeWidth(2),
    },
    headerRightIcon: {
        position: 'absolute',
        right: relativeWidth(2),
    },
    headerStyle: {
        height: APPBAR_HEIGHT,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 200,
    },
    headerTitle: {
        textAlign: 'center',
        justifyContent: 'center',
        color: HEADER_TEXT_COLOR,
        fontSize: fontNormal
    },
    /*Top Image Style*/
    headerImageStyle: {
        height: HEADER_IMAGE_HEIGHT,
        width: '100%',
        top: 0,
        alignSelf: 'center',
        position: 'absolute'
    },
    /*profile image style*/
    profileImage: {
        position: 'absolute',
        zIndex: 100,
    },
    /*profile title style*/
    profileTitle: {
        position: 'absolute',
        zIndex: 100,
        textAlign: 'center',
        color: BLACK,
        top: relativeHeight(35),
        left: 0,
        right: 0,
        fontSize: fontXLarge
    },
    /*song count text style*/
    songCountStyle: {
        position: 'absolute',
        textAlign: 'center',
        fontWeight: '400',
        top: relativeHeight(40),
        left: 0,
        right: 0,
        fontSize: fontNormal,
    },
    artistCardContainerStyle: {
        backgroundColor: CARD_BG_COLOR,
        elevation: 5,
        shadowRadius: 3,
        shadowOffset: {
            width: 3,
            height: 3
        },
        padding: 15,
        marginVertical: relativeWidth(1),
        marginHorizontal: relativeWidth(2),
        flexDirection: 'row',
        alignItems: 'center'
    },
    artistImage: {
        height: relativeWidth(15),
        width: relativeWidth(15),
        borderRadius: relativeWidth(7.5)
    },
    songTitleStyle: {
        fontSize: fontNormal,
        color: BLACK
    },
    cardTextContainer: {
        flex: 1,
        margin: relativeWidth(3)
    },

})
