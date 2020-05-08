import Colors from '../../styles/Colors';

export default {
    main: {
        backgroundColor: Colors.tertiary,
        height : '10%',
    },
    searchContainer : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: Colors.secondary,
        width: '93%',
        height: 40,
        margin: 17,
    },
    searchIcon: {
        backgroundColor: Colors.secondary,
        width: '10%',
    },
    input: {
        backgroundColor: Colors.secondary,
        color: '#424242',
        width: '80%',
        height: 40
    },
};