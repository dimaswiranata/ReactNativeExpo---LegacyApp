import Colors from '../../styles/Colors';

export default {
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.secondary
    },
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 20,
        backgroundColor: 'white',
        height: 270,
        width: 320,
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    top: {
        height: '20%',
        width: '100%',
        backgroundColor: Colors.primary,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text : {
        fontSize: 16,
        color: Colors.secondary,
        fontWeight: 'bold'
    },
    queue : {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    number : {
        fontSize: 96,
        color: Colors.primary,
        fontWeight: 'bold'
    },
    name: {
        fontSize: 16,
        color: Colors.primary,
        fontWeight: 'bold'
    }
};