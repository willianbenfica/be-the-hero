import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    incident: {
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        marginTop: 48,
    },

    incidentView: {
        padding: 24,
        paddingTop: 0,
    },

    incidentViewHeader: {
        backgroundColor: '#E02041',
        padding: 12,
        borderRadius: 6,
        marginBottom: 24,
    },

    incidentViewTitle: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
    },

    incidentViewCity: {
        color: '#DDD',
        fontSize: 14,
        marginTop: 10,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },
    
    incidentValue: {
        fontSize: 15,
        color: '#737380',

    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#13131a',
        lineHeight: 30,

    },

    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action:{
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText:{
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
    lineHr: {
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        marginVertical: 24,

    }


});