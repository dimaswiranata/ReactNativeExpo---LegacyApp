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
        height: 176,
        width: 143,
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    top: {
        height: '75%',
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: Colors.denary
    },
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: Colors.nonary
    },
    item : {
        fontSize: 14,
        color: Colors.primary,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 10,
        color: Colors.primary
    }
};